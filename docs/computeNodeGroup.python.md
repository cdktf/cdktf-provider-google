# `computeNodeGroup` Submodule <a name="`computeNodeGroup` Submodule" id="@cdktf/provider-google.computeNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNodeGroup <a name="ComputeNodeGroup" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group google_compute_node_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_node_group

computeNodeGroup.ComputeNodeGroup(
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
  node_template: str,
  autoscaling_policy: ComputeNodeGroupAutoscalingPolicy = None,
  description: str = None,
  id: str = None,
  initial_size: typing.Union[int, float] = None,
  maintenance_policy: str = None,
  maintenance_window: ComputeNodeGroupMaintenanceWindow = None,
  project: str = None,
  share_settings: ComputeNodeGroupShareSettings = None,
  timeouts: ComputeNodeGroupTimeouts = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.nodeTemplate">node_template</a></code> | <code>str</code> | The URL of the node template to which this node group belongs. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.autoscalingPolicy">autoscaling_policy</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a></code> | autoscaling_policy block. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional textual description of the resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#id ComputeNodeGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.initialSize">initial_size</a></code> | <code>typing.Union[int, float]</code> | The initial number of nodes in the node group. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.maintenancePolicy">maintenance_policy</a></code> | <code>str</code> | Specifies how to handle instances when a node in the group undergoes maintenance. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#project ComputeNodeGroup#project}. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.shareSettings">share_settings</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a></code> | share_settings block. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts">ComputeNodeGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Zone where this node group is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#name ComputeNodeGroup#name}

---

##### `node_template`<sup>Required</sup> <a name="node_template" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.nodeTemplate"></a>

- *Type:* str

The URL of the node template to which this node group belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#node_template ComputeNodeGroup#node_template}

---

##### `autoscaling_policy`<sup>Optional</sup> <a name="autoscaling_policy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.autoscalingPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a>

autoscaling_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#autoscaling_policy ComputeNodeGroup#autoscaling_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.description"></a>

- *Type:* str

An optional textual description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#description ComputeNodeGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#id ComputeNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_size`<sup>Optional</sup> <a name="initial_size" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.initialSize"></a>

- *Type:* typing.Union[int, float]

The initial number of nodes in the node group.

One of 'initial_size' or 'autoscaling_policy' must be configured on resource creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#initial_size ComputeNodeGroup#initial_size}

---

##### `maintenance_policy`<sup>Optional</sup> <a name="maintenance_policy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.maintenancePolicy"></a>

- *Type:* str

Specifies how to handle instances when a node in the group undergoes maintenance.

Set to one of: DEFAULT, RESTART_IN_PLACE, or MIGRATE_WITHIN_NODE_GROUP. The default value is DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#maintenance_policy ComputeNodeGroup#maintenance_policy}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#maintenance_window ComputeNodeGroup#maintenance_window}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#project ComputeNodeGroup#project}.

---

##### `share_settings`<sup>Optional</sup> <a name="share_settings" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.shareSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a>

share_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#share_settings ComputeNodeGroup#share_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts">ComputeNodeGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#timeouts ComputeNodeGroup#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.zone"></a>

- *Type:* str

Zone where this node group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#zone ComputeNodeGroup#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putAutoscalingPolicy">put_autoscaling_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putShareSettings">put_share_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetAutoscalingPolicy">reset_autoscaling_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetInitialSize">reset_initial_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetMaintenancePolicy">reset_maintenance_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetShareSettings">reset_share_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_autoscaling_policy` <a name="put_autoscaling_policy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putAutoscalingPolicy"></a>

```python
def put_autoscaling_policy(
  max_nodes: typing.Union[int, float] = None,
  min_nodes: typing.Union[int, float] = None,
  mode: str = None
) -> None
```

###### `max_nodes`<sup>Optional</sup> <a name="max_nodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putAutoscalingPolicy.parameter.maxNodes"></a>

- *Type:* typing.Union[int, float]

Maximum size of the node group.

Set to a value less than or equal
to 100 and greater than or equal to min-nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#max_nodes ComputeNodeGroup#max_nodes}

---

###### `min_nodes`<sup>Optional</sup> <a name="min_nodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putAutoscalingPolicy.parameter.minNodes"></a>

- *Type:* typing.Union[int, float]

Minimum size of the node group. Must be less than or equal to max-nodes. The default value is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#min_nodes ComputeNodeGroup#min_nodes}

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putAutoscalingPolicy.parameter.mode"></a>

- *Type:* str

The autoscaling mode.

Set to one of the following:

* OFF: Disables the autoscaler.
* ON: Enables scaling in and scaling out.
* ONLY_SCALE_OUT: Enables only scaling out.
  You must use this mode if your node groups are configured to
  restart their hosted VMs on minimal servers. Possible values: ["OFF", "ON", "ONLY_SCALE_OUT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#mode ComputeNodeGroup#mode}

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  start_time: str
) -> None
```

###### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putMaintenanceWindow.parameter.startTime"></a>

- *Type:* str

instances.start time of the window. This must be in UTC format that resolves to one of 00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. For example, both 13:00-5 and 08:00 are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#start_time ComputeNodeGroup#start_time}

---

##### `put_share_settings` <a name="put_share_settings" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putShareSettings"></a>

```python
def put_share_settings(
  share_type: str,
  project_map: typing.Union[IResolvable, typing.List[ComputeNodeGroupShareSettingsProjectMap]] = None
) -> None
```

###### `share_type`<sup>Required</sup> <a name="share_type" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putShareSettings.parameter.shareType"></a>

- *Type:* str

Node group sharing type. Possible values: ["ORGANIZATION", "SPECIFIC_PROJECTS", "LOCAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#share_type ComputeNodeGroup#share_type}

---

###### `project_map`<sup>Optional</sup> <a name="project_map" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putShareSettings.parameter.projectMap"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap">ComputeNodeGroupShareSettingsProjectMap</a>]]

project_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#project_map ComputeNodeGroup#project_map}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#create ComputeNodeGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#delete ComputeNodeGroup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#update ComputeNodeGroup#update}.

---

##### `reset_autoscaling_policy` <a name="reset_autoscaling_policy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetAutoscalingPolicy"></a>

```python
def reset_autoscaling_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_initial_size` <a name="reset_initial_size" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetInitialSize"></a>

```python
def reset_initial_size() -> None
```

##### `reset_maintenance_policy` <a name="reset_maintenance_policy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetMaintenancePolicy"></a>

```python
def reset_maintenance_policy() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_share_settings` <a name="reset_share_settings" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetShareSettings"></a>

```python
def reset_share_settings() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeNodeGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_node_group

computeNodeGroup.ComputeNodeGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_node_group

computeNodeGroup.ComputeNodeGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_node_group

computeNodeGroup.ComputeNodeGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_node_group

computeNodeGroup.ComputeNodeGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeNodeGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeNodeGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeNodeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeNodeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.autoscalingPolicy">autoscaling_policy</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference">ComputeNodeGroupAutoscalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference">ComputeNodeGroupMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.shareSettings">share_settings</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference">ComputeNodeGroupShareSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference">ComputeNodeGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.autoscalingPolicyInput">autoscaling_policy_input</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.initialSizeInput">initial_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenancePolicyInput">maintenance_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.nodeTemplateInput">node_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.shareSettingsInput">share_settings_input</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts">ComputeNodeGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.initialSize">initial_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenancePolicy">maintenance_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.nodeTemplate">node_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaling_policy`<sup>Required</sup> <a name="autoscaling_policy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.autoscalingPolicy"></a>

```python
autoscaling_policy: ComputeNodeGroupAutoscalingPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference">ComputeNodeGroupAutoscalingPolicyOutputReference</a>

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenanceWindow"></a>

```python
maintenance_window: ComputeNodeGroupMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference">ComputeNodeGroupMaintenanceWindowOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `share_settings`<sup>Required</sup> <a name="share_settings" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.shareSettings"></a>

```python
share_settings: ComputeNodeGroupShareSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference">ComputeNodeGroupShareSettingsOutputReference</a>

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.timeouts"></a>

```python
timeouts: ComputeNodeGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference">ComputeNodeGroupTimeoutsOutputReference</a>

---

##### `autoscaling_policy_input`<sup>Optional</sup> <a name="autoscaling_policy_input" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.autoscalingPolicyInput"></a>

```python
autoscaling_policy_input: ComputeNodeGroupAutoscalingPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `initial_size_input`<sup>Optional</sup> <a name="initial_size_input" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.initialSizeInput"></a>

```python
initial_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maintenance_policy_input`<sup>Optional</sup> <a name="maintenance_policy_input" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenancePolicyInput"></a>

```python
maintenance_policy_input: str
```

- *Type:* str

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: ComputeNodeGroupMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_template_input`<sup>Optional</sup> <a name="node_template_input" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.nodeTemplateInput"></a>

```python
node_template_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `share_settings_input`<sup>Optional</sup> <a name="share_settings_input" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.shareSettingsInput"></a>

```python
share_settings_input: ComputeNodeGroupShareSettings
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeNodeGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts">ComputeNodeGroupTimeouts</a>]

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `initial_size`<sup>Required</sup> <a name="initial_size" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.initialSize"></a>

```python
initial_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maintenance_policy`<sup>Required</sup> <a name="maintenance_policy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenancePolicy"></a>

```python
maintenance_policy: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_template`<sup>Required</sup> <a name="node_template" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.nodeTemplate"></a>

```python
node_template: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNodeGroupAutoscalingPolicy <a name="ComputeNodeGroupAutoscalingPolicy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_node_group

computeNodeGroup.ComputeNodeGroupAutoscalingPolicy(
  max_nodes: typing.Union[int, float] = None,
  min_nodes: typing.Union[int, float] = None,
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.property.maxNodes">max_nodes</a></code> | <code>typing.Union[int, float]</code> | Maximum size of the node group. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.property.minNodes">min_nodes</a></code> | <code>typing.Union[int, float]</code> | Minimum size of the node group. Must be less than or equal to max-nodes. The default value is 0. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.property.mode">mode</a></code> | <code>str</code> | The autoscaling mode. |

---

##### `max_nodes`<sup>Optional</sup> <a name="max_nodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.property.maxNodes"></a>

```python
max_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum size of the node group.

Set to a value less than or equal
to 100 and greater than or equal to min-nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#max_nodes ComputeNodeGroup#max_nodes}

---

##### `min_nodes`<sup>Optional</sup> <a name="min_nodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.property.minNodes"></a>

```python
min_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum size of the node group. Must be less than or equal to max-nodes. The default value is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#min_nodes ComputeNodeGroup#min_nodes}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.property.mode"></a>

```python
mode: str
```

- *Type:* str

The autoscaling mode.

Set to one of the following:

* OFF: Disables the autoscaler.
* ON: Enables scaling in and scaling out.
* ONLY_SCALE_OUT: Enables only scaling out.
  You must use this mode if your node groups are configured to
  restart their hosted VMs on minimal servers. Possible values: ["OFF", "ON", "ONLY_SCALE_OUT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#mode ComputeNodeGroup#mode}

---

### ComputeNodeGroupConfig <a name="ComputeNodeGroupConfig" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_node_group

computeNodeGroup.ComputeNodeGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  node_template: str,
  autoscaling_policy: ComputeNodeGroupAutoscalingPolicy = None,
  description: str = None,
  id: str = None,
  initial_size: typing.Union[int, float] = None,
  maintenance_policy: str = None,
  maintenance_window: ComputeNodeGroupMaintenanceWindow = None,
  project: str = None,
  share_settings: ComputeNodeGroupShareSettings = None,
  timeouts: ComputeNodeGroupTimeouts = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.nodeTemplate">node_template</a></code> | <code>str</code> | The URL of the node template to which this node group belongs. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.autoscalingPolicy">autoscaling_policy</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a></code> | autoscaling_policy block. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.description">description</a></code> | <code>str</code> | An optional textual description of the resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#id ComputeNodeGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.initialSize">initial_size</a></code> | <code>typing.Union[int, float]</code> | The initial number of nodes in the node group. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.maintenancePolicy">maintenance_policy</a></code> | <code>str</code> | Specifies how to handle instances when a node in the group undergoes maintenance. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#project ComputeNodeGroup#project}. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.shareSettings">share_settings</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a></code> | share_settings block. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts">ComputeNodeGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.zone">zone</a></code> | <code>str</code> | Zone where this node group is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#name ComputeNodeGroup#name}

---

##### `node_template`<sup>Required</sup> <a name="node_template" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.nodeTemplate"></a>

```python
node_template: str
```

- *Type:* str

The URL of the node template to which this node group belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#node_template ComputeNodeGroup#node_template}

---

##### `autoscaling_policy`<sup>Optional</sup> <a name="autoscaling_policy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.autoscalingPolicy"></a>

```python
autoscaling_policy: ComputeNodeGroupAutoscalingPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a>

autoscaling_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#autoscaling_policy ComputeNodeGroup#autoscaling_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional textual description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#description ComputeNodeGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#id ComputeNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_size`<sup>Optional</sup> <a name="initial_size" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.initialSize"></a>

```python
initial_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The initial number of nodes in the node group.

One of 'initial_size' or 'autoscaling_policy' must be configured on resource creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#initial_size ComputeNodeGroup#initial_size}

---

##### `maintenance_policy`<sup>Optional</sup> <a name="maintenance_policy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.maintenancePolicy"></a>

```python
maintenance_policy: str
```

- *Type:* str

Specifies how to handle instances when a node in the group undergoes maintenance.

Set to one of: DEFAULT, RESTART_IN_PLACE, or MIGRATE_WITHIN_NODE_GROUP. The default value is DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#maintenance_policy ComputeNodeGroup#maintenance_policy}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.maintenanceWindow"></a>

```python
maintenance_window: ComputeNodeGroupMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#maintenance_window ComputeNodeGroup#maintenance_window}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#project ComputeNodeGroup#project}.

---

##### `share_settings`<sup>Optional</sup> <a name="share_settings" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.shareSettings"></a>

```python
share_settings: ComputeNodeGroupShareSettings
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a>

share_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#share_settings ComputeNodeGroup#share_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.timeouts"></a>

```python
timeouts: ComputeNodeGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts">ComputeNodeGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#timeouts ComputeNodeGroup#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Zone where this node group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#zone ComputeNodeGroup#zone}

---

### ComputeNodeGroupMaintenanceWindow <a name="ComputeNodeGroupMaintenanceWindow" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_node_group

computeNodeGroup.ComputeNodeGroupMaintenanceWindow(
  start_time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow.property.startTime">start_time</a></code> | <code>str</code> | instances.start time of the window. This must be in UTC format that resolves to one of 00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. For example, both 13:00-5 and 08:00 are valid. |

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

instances.start time of the window. This must be in UTC format that resolves to one of 00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. For example, both 13:00-5 and 08:00 are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#start_time ComputeNodeGroup#start_time}

---

### ComputeNodeGroupShareSettings <a name="ComputeNodeGroupShareSettings" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_node_group

computeNodeGroup.ComputeNodeGroupShareSettings(
  share_type: str,
  project_map: typing.Union[IResolvable, typing.List[ComputeNodeGroupShareSettingsProjectMap]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings.property.shareType">share_type</a></code> | <code>str</code> | Node group sharing type. Possible values: ["ORGANIZATION", "SPECIFIC_PROJECTS", "LOCAL"]. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings.property.projectMap">project_map</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap">ComputeNodeGroupShareSettingsProjectMap</a>]]</code> | project_map block. |

---

##### `share_type`<sup>Required</sup> <a name="share_type" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings.property.shareType"></a>

```python
share_type: str
```

- *Type:* str

Node group sharing type. Possible values: ["ORGANIZATION", "SPECIFIC_PROJECTS", "LOCAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#share_type ComputeNodeGroup#share_type}

---

##### `project_map`<sup>Optional</sup> <a name="project_map" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings.property.projectMap"></a>

```python
project_map: typing.Union[IResolvable, typing.List[ComputeNodeGroupShareSettingsProjectMap]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap">ComputeNodeGroupShareSettingsProjectMap</a>]]

project_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#project_map ComputeNodeGroup#project_map}

---

### ComputeNodeGroupShareSettingsProjectMap <a name="ComputeNodeGroupShareSettingsProjectMap" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_node_group

computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap(
  id: str,
  project_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#id ComputeNodeGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap.property.projectId">project_id</a></code> | <code>str</code> | The project id/number should be the same as the key of this project config in the project map. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#id ComputeNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The project id/number should be the same as the key of this project config in the project map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#project_id ComputeNodeGroup#project_id}

---

### ComputeNodeGroupTimeouts <a name="ComputeNodeGroupTimeouts" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_node_group

computeNodeGroup.ComputeNodeGroupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#create ComputeNodeGroup#create}. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#delete ComputeNodeGroup#delete}. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#update ComputeNodeGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#create ComputeNodeGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#delete ComputeNodeGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/compute_node_group#update ComputeNodeGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNodeGroupAutoscalingPolicyOutputReference <a name="ComputeNodeGroupAutoscalingPolicyOutputReference" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_node_group

computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resetMaxNodes">reset_max_nodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resetMinNodes">reset_min_nodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_nodes` <a name="reset_max_nodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resetMaxNodes"></a>

```python
def reset_max_nodes() -> None
```

##### `reset_min_nodes` <a name="reset_min_nodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resetMinNodes"></a>

```python
def reset_min_nodes() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.maxNodesInput">max_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.minNodesInput">min_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.maxNodes">max_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.minNodes">min_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_nodes_input`<sup>Optional</sup> <a name="max_nodes_input" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.maxNodesInput"></a>

```python
max_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_nodes_input`<sup>Optional</sup> <a name="min_nodes_input" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.minNodesInput"></a>

```python
min_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `max_nodes`<sup>Required</sup> <a name="max_nodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.maxNodes"></a>

```python
max_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_nodes`<sup>Required</sup> <a name="min_nodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.minNodes"></a>

```python
min_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: ComputeNodeGroupAutoscalingPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a>

---


### ComputeNodeGroupMaintenanceWindowOutputReference <a name="ComputeNodeGroupMaintenanceWindowOutputReference" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_node_group

computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: ComputeNodeGroupMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a>

---


### ComputeNodeGroupShareSettingsOutputReference <a name="ComputeNodeGroupShareSettingsOutputReference" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_node_group

computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.putProjectMap">put_project_map</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.resetProjectMap">reset_project_map</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_project_map` <a name="put_project_map" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.putProjectMap"></a>

```python
def put_project_map(
  value: typing.Union[IResolvable, typing.List[ComputeNodeGroupShareSettingsProjectMap]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.putProjectMap.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap">ComputeNodeGroupShareSettingsProjectMap</a>]]

---

##### `reset_project_map` <a name="reset_project_map" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.resetProjectMap"></a>

```python
def reset_project_map() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.projectMap">project_map</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList">ComputeNodeGroupShareSettingsProjectMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.projectMapInput">project_map_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap">ComputeNodeGroupShareSettingsProjectMap</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.shareTypeInput">share_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.shareType">share_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `project_map`<sup>Required</sup> <a name="project_map" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.projectMap"></a>

```python
project_map: ComputeNodeGroupShareSettingsProjectMapList
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList">ComputeNodeGroupShareSettingsProjectMapList</a>

---

##### `project_map_input`<sup>Optional</sup> <a name="project_map_input" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.projectMapInput"></a>

```python
project_map_input: typing.Union[IResolvable, typing.List[ComputeNodeGroupShareSettingsProjectMap]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap">ComputeNodeGroupShareSettingsProjectMap</a>]]

---

##### `share_type_input`<sup>Optional</sup> <a name="share_type_input" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.shareTypeInput"></a>

```python
share_type_input: str
```

- *Type:* str

---

##### `share_type`<sup>Required</sup> <a name="share_type" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.shareType"></a>

```python
share_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ComputeNodeGroupShareSettings
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a>

---


### ComputeNodeGroupShareSettingsProjectMapList <a name="ComputeNodeGroupShareSettingsProjectMapList" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_node_group

computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeNodeGroupShareSettingsProjectMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap">ComputeNodeGroupShareSettingsProjectMap</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeNodeGroupShareSettingsProjectMap]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap">ComputeNodeGroupShareSettingsProjectMap</a>]]

---


### ComputeNodeGroupShareSettingsProjectMapOutputReference <a name="ComputeNodeGroupShareSettingsProjectMapOutputReference" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_node_group

computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap">ComputeNodeGroupShareSettingsProjectMap</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeNodeGroupShareSettingsProjectMap]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap">ComputeNodeGroupShareSettingsProjectMap</a>]

---


### ComputeNodeGroupTimeoutsOutputReference <a name="ComputeNodeGroupTimeoutsOutputReference" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_node_group

computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts">ComputeNodeGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeNodeGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts">ComputeNodeGroupTimeouts</a>]

---



