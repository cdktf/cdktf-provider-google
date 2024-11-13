# `computeRegionPerInstanceConfig` Submodule <a name="`computeRegionPerInstanceConfig` Submodule" id="@cdktf/provider-google.computeRegionPerInstanceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionPerInstanceConfig <a name="ComputeRegionPerInstanceConfig" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config google_compute_region_per_instance_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_per_instance_config

computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig(
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
  region_instance_group_manager: str,
  id: str = None,
  minimal_action: str = None,
  most_disruptive_allowed_action: str = None,
  preserved_state: ComputeRegionPerInstanceConfigPreservedState = None,
  project: str = None,
  region: str = None,
  remove_instance_on_destroy: typing.Union[bool, IResolvable] = None,
  remove_instance_state_on_destroy: typing.Union[bool, IResolvable] = None,
  timeouts: ComputeRegionPerInstanceConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | The name for this per-instance config and its corresponding instance. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.regionInstanceGroupManager">region_instance_group_manager</a></code> | <code>str</code> | The region instance group manager this instance config is part of. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#id ComputeRegionPerInstanceConfig#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.minimalAction">minimal_action</a></code> | <code>str</code> | The minimal action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.mostDisruptiveAllowedAction">most_disruptive_allowed_action</a></code> | <code>str</code> | The most disruptive action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.preservedState">preserved_state</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState">ComputeRegionPerInstanceConfigPreservedState</a></code> | preserved_state block. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#project ComputeRegionPerInstanceConfig#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where the containing instance group manager is located. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.removeInstanceOnDestroy">remove_instance_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, deleting this config will immediately remove the underlying instance. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.removeInstanceStateOnDestroy">remove_instance_state_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, deleting this config will immediately remove any specified state from the underlying instance. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts">ComputeRegionPerInstanceConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.name"></a>

- *Type:* str

The name for this per-instance config and its corresponding instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#name ComputeRegionPerInstanceConfig#name}

---

##### `region_instance_group_manager`<sup>Required</sup> <a name="region_instance_group_manager" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.regionInstanceGroupManager"></a>

- *Type:* str

The region instance group manager this instance config is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#region_instance_group_manager ComputeRegionPerInstanceConfig#region_instance_group_manager}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#id ComputeRegionPerInstanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimal_action`<sup>Optional</sup> <a name="minimal_action" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.minimalAction"></a>

- *Type:* str

The minimal action to perform on the instance during an update.

Default is 'NONE'. Possible values are:

* REPLACE
* RESTART
* REFRESH
* NONE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#minimal_action ComputeRegionPerInstanceConfig#minimal_action}

---

##### `most_disruptive_allowed_action`<sup>Optional</sup> <a name="most_disruptive_allowed_action" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.mostDisruptiveAllowedAction"></a>

- *Type:* str

The most disruptive action to perform on the instance during an update.

Default is 'REPLACE'. Possible values are:

* REPLACE
* RESTART
* REFRESH
* NONE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#most_disruptive_allowed_action ComputeRegionPerInstanceConfig#most_disruptive_allowed_action}

---

##### `preserved_state`<sup>Optional</sup> <a name="preserved_state" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.preservedState"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState">ComputeRegionPerInstanceConfigPreservedState</a>

preserved_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#preserved_state ComputeRegionPerInstanceConfig#preserved_state}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#project ComputeRegionPerInstanceConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.region"></a>

- *Type:* str

Region where the containing instance group manager is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#region ComputeRegionPerInstanceConfig#region}

---

##### `remove_instance_on_destroy`<sup>Optional</sup> <a name="remove_instance_on_destroy" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.removeInstanceOnDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, deleting this config will immediately remove the underlying instance.

When false, deleting this config will use the behavior as determined by remove_instance_on_destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#remove_instance_on_destroy ComputeRegionPerInstanceConfig#remove_instance_on_destroy}

---

##### `remove_instance_state_on_destroy`<sup>Optional</sup> <a name="remove_instance_state_on_destroy" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.removeInstanceStateOnDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, deleting this config will immediately remove any specified state from the underlying instance.

When false, deleting this config will *not* immediately remove any state from the underlying instance.
State will be removed on the next instance recreation or update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#remove_instance_state_on_destroy ComputeRegionPerInstanceConfig#remove_instance_state_on_destroy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts">ComputeRegionPerInstanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#timeouts ComputeRegionPerInstanceConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.putPreservedState">put_preserved_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetMinimalAction">reset_minimal_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetMostDisruptiveAllowedAction">reset_most_disruptive_allowed_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetPreservedState">reset_preserved_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetRemoveInstanceOnDestroy">reset_remove_instance_on_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetRemoveInstanceStateOnDestroy">reset_remove_instance_state_on_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_preserved_state` <a name="put_preserved_state" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.putPreservedState"></a>

```python
def put_preserved_state(
  disk: typing.Union[IResolvable, typing.List[ComputeRegionPerInstanceConfigPreservedStateDisk]] = None,
  external_ip: typing.Union[IResolvable, typing.List[ComputeRegionPerInstanceConfigPreservedStateExternalIp]] = None,
  internal_ip: typing.Union[IResolvable, typing.List[ComputeRegionPerInstanceConfigPreservedStateInternalIp]] = None,
  metadata: typing.Mapping[str] = None
) -> None
```

###### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.putPreservedState.parameter.disk"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk">ComputeRegionPerInstanceConfigPreservedStateDisk</a>]]

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#disk ComputeRegionPerInstanceConfig#disk}

---

###### `external_ip`<sup>Optional</sup> <a name="external_ip" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.putPreservedState.parameter.externalIp"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp">ComputeRegionPerInstanceConfigPreservedStateExternalIp</a>]]

external_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#external_ip ComputeRegionPerInstanceConfig#external_ip}

---

###### `internal_ip`<sup>Optional</sup> <a name="internal_ip" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.putPreservedState.parameter.internalIp"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp">ComputeRegionPerInstanceConfigPreservedStateInternalIp</a>]]

internal_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#internal_ip ComputeRegionPerInstanceConfig#internal_ip}

---

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.putPreservedState.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Preserved metadata defined for this instance. This is a list of key->value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#metadata ComputeRegionPerInstanceConfig#metadata}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#create ComputeRegionPerInstanceConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#delete ComputeRegionPerInstanceConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#update ComputeRegionPerInstanceConfig#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_minimal_action` <a name="reset_minimal_action" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetMinimalAction"></a>

```python
def reset_minimal_action() -> None
```

##### `reset_most_disruptive_allowed_action` <a name="reset_most_disruptive_allowed_action" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetMostDisruptiveAllowedAction"></a>

```python
def reset_most_disruptive_allowed_action() -> None
```

##### `reset_preserved_state` <a name="reset_preserved_state" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetPreservedState"></a>

```python
def reset_preserved_state() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_remove_instance_on_destroy` <a name="reset_remove_instance_on_destroy" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetRemoveInstanceOnDestroy"></a>

```python
def reset_remove_instance_on_destroy() -> None
```

##### `reset_remove_instance_state_on_destroy` <a name="reset_remove_instance_state_on_destroy" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetRemoveInstanceStateOnDestroy"></a>

```python
def reset_remove_instance_state_on_destroy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeRegionPerInstanceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_region_per_instance_config

computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_region_per_instance_config

computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_region_per_instance_config

computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_region_per_instance_config

computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeRegionPerInstanceConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeRegionPerInstanceConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeRegionPerInstanceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionPerInstanceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.preservedState">preserved_state</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference">ComputeRegionPerInstanceConfigPreservedStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference">ComputeRegionPerInstanceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.minimalActionInput">minimal_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.mostDisruptiveAllowedActionInput">most_disruptive_allowed_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.preservedStateInput">preserved_state_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState">ComputeRegionPerInstanceConfigPreservedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.regionInstanceGroupManagerInput">region_instance_group_manager_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.removeInstanceOnDestroyInput">remove_instance_on_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.removeInstanceStateOnDestroyInput">remove_instance_state_on_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts">ComputeRegionPerInstanceConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.minimalAction">minimal_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.mostDisruptiveAllowedAction">most_disruptive_allowed_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.regionInstanceGroupManager">region_instance_group_manager</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.removeInstanceOnDestroy">remove_instance_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.removeInstanceStateOnDestroy">remove_instance_state_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `preserved_state`<sup>Required</sup> <a name="preserved_state" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.preservedState"></a>

```python
preserved_state: ComputeRegionPerInstanceConfigPreservedStateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference">ComputeRegionPerInstanceConfigPreservedStateOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.timeouts"></a>

```python
timeouts: ComputeRegionPerInstanceConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference">ComputeRegionPerInstanceConfigTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `minimal_action_input`<sup>Optional</sup> <a name="minimal_action_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.minimalActionInput"></a>

```python
minimal_action_input: str
```

- *Type:* str

---

##### `most_disruptive_allowed_action_input`<sup>Optional</sup> <a name="most_disruptive_allowed_action_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.mostDisruptiveAllowedActionInput"></a>

```python
most_disruptive_allowed_action_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `preserved_state_input`<sup>Optional</sup> <a name="preserved_state_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.preservedStateInput"></a>

```python
preserved_state_input: ComputeRegionPerInstanceConfigPreservedState
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState">ComputeRegionPerInstanceConfigPreservedState</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `region_instance_group_manager_input`<sup>Optional</sup> <a name="region_instance_group_manager_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.regionInstanceGroupManagerInput"></a>

```python
region_instance_group_manager_input: str
```

- *Type:* str

---

##### `remove_instance_on_destroy_input`<sup>Optional</sup> <a name="remove_instance_on_destroy_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.removeInstanceOnDestroyInput"></a>

```python
remove_instance_on_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `remove_instance_state_on_destroy_input`<sup>Optional</sup> <a name="remove_instance_state_on_destroy_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.removeInstanceStateOnDestroyInput"></a>

```python
remove_instance_state_on_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeRegionPerInstanceConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts">ComputeRegionPerInstanceConfigTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `minimal_action`<sup>Required</sup> <a name="minimal_action" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.minimalAction"></a>

```python
minimal_action: str
```

- *Type:* str

---

##### `most_disruptive_allowed_action`<sup>Required</sup> <a name="most_disruptive_allowed_action" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.mostDisruptiveAllowedAction"></a>

```python
most_disruptive_allowed_action: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `region_instance_group_manager`<sup>Required</sup> <a name="region_instance_group_manager" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.regionInstanceGroupManager"></a>

```python
region_instance_group_manager: str
```

- *Type:* str

---

##### `remove_instance_on_destroy`<sup>Required</sup> <a name="remove_instance_on_destroy" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.removeInstanceOnDestroy"></a>

```python
remove_instance_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `remove_instance_state_on_destroy`<sup>Required</sup> <a name="remove_instance_state_on_destroy" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.removeInstanceStateOnDestroy"></a>

```python
remove_instance_state_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionPerInstanceConfigConfig <a name="ComputeRegionPerInstanceConfigConfig" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_per_instance_config

computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  region_instance_group_manager: str,
  id: str = None,
  minimal_action: str = None,
  most_disruptive_allowed_action: str = None,
  preserved_state: ComputeRegionPerInstanceConfigPreservedState = None,
  project: str = None,
  region: str = None,
  remove_instance_on_destroy: typing.Union[bool, IResolvable] = None,
  remove_instance_state_on_destroy: typing.Union[bool, IResolvable] = None,
  timeouts: ComputeRegionPerInstanceConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.name">name</a></code> | <code>str</code> | The name for this per-instance config and its corresponding instance. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.regionInstanceGroupManager">region_instance_group_manager</a></code> | <code>str</code> | The region instance group manager this instance config is part of. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#id ComputeRegionPerInstanceConfig#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.minimalAction">minimal_action</a></code> | <code>str</code> | The minimal action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.mostDisruptiveAllowedAction">most_disruptive_allowed_action</a></code> | <code>str</code> | The most disruptive action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.preservedState">preserved_state</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState">ComputeRegionPerInstanceConfigPreservedState</a></code> | preserved_state block. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#project ComputeRegionPerInstanceConfig#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.region">region</a></code> | <code>str</code> | Region where the containing instance group manager is located. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.removeInstanceOnDestroy">remove_instance_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, deleting this config will immediately remove the underlying instance. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.removeInstanceStateOnDestroy">remove_instance_state_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, deleting this config will immediately remove any specified state from the underlying instance. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts">ComputeRegionPerInstanceConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name for this per-instance config and its corresponding instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#name ComputeRegionPerInstanceConfig#name}

---

##### `region_instance_group_manager`<sup>Required</sup> <a name="region_instance_group_manager" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.regionInstanceGroupManager"></a>

```python
region_instance_group_manager: str
```

- *Type:* str

The region instance group manager this instance config is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#region_instance_group_manager ComputeRegionPerInstanceConfig#region_instance_group_manager}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#id ComputeRegionPerInstanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimal_action`<sup>Optional</sup> <a name="minimal_action" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.minimalAction"></a>

```python
minimal_action: str
```

- *Type:* str

The minimal action to perform on the instance during an update.

Default is 'NONE'. Possible values are:

* REPLACE
* RESTART
* REFRESH
* NONE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#minimal_action ComputeRegionPerInstanceConfig#minimal_action}

---

##### `most_disruptive_allowed_action`<sup>Optional</sup> <a name="most_disruptive_allowed_action" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.mostDisruptiveAllowedAction"></a>

```python
most_disruptive_allowed_action: str
```

- *Type:* str

The most disruptive action to perform on the instance during an update.

Default is 'REPLACE'. Possible values are:

* REPLACE
* RESTART
* REFRESH
* NONE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#most_disruptive_allowed_action ComputeRegionPerInstanceConfig#most_disruptive_allowed_action}

---

##### `preserved_state`<sup>Optional</sup> <a name="preserved_state" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.preservedState"></a>

```python
preserved_state: ComputeRegionPerInstanceConfigPreservedState
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState">ComputeRegionPerInstanceConfigPreservedState</a>

preserved_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#preserved_state ComputeRegionPerInstanceConfig#preserved_state}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#project ComputeRegionPerInstanceConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where the containing instance group manager is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#region ComputeRegionPerInstanceConfig#region}

---

##### `remove_instance_on_destroy`<sup>Optional</sup> <a name="remove_instance_on_destroy" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.removeInstanceOnDestroy"></a>

```python
remove_instance_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, deleting this config will immediately remove the underlying instance.

When false, deleting this config will use the behavior as determined by remove_instance_on_destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#remove_instance_on_destroy ComputeRegionPerInstanceConfig#remove_instance_on_destroy}

---

##### `remove_instance_state_on_destroy`<sup>Optional</sup> <a name="remove_instance_state_on_destroy" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.removeInstanceStateOnDestroy"></a>

```python
remove_instance_state_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, deleting this config will immediately remove any specified state from the underlying instance.

When false, deleting this config will *not* immediately remove any state from the underlying instance.
State will be removed on the next instance recreation or update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#remove_instance_state_on_destroy ComputeRegionPerInstanceConfig#remove_instance_state_on_destroy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.timeouts"></a>

```python
timeouts: ComputeRegionPerInstanceConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts">ComputeRegionPerInstanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#timeouts ComputeRegionPerInstanceConfig#timeouts}

---

### ComputeRegionPerInstanceConfigPreservedState <a name="ComputeRegionPerInstanceConfigPreservedState" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_per_instance_config

computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState(
  disk: typing.Union[IResolvable, typing.List[ComputeRegionPerInstanceConfigPreservedStateDisk]] = None,
  external_ip: typing.Union[IResolvable, typing.List[ComputeRegionPerInstanceConfigPreservedStateExternalIp]] = None,
  internal_ip: typing.Union[IResolvable, typing.List[ComputeRegionPerInstanceConfigPreservedStateInternalIp]] = None,
  metadata: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.property.disk">disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk">ComputeRegionPerInstanceConfigPreservedStateDisk</a>]]</code> | disk block. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.property.externalIp">external_ip</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp">ComputeRegionPerInstanceConfigPreservedStateExternalIp</a>]]</code> | external_ip block. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.property.internalIp">internal_ip</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp">ComputeRegionPerInstanceConfigPreservedStateInternalIp</a>]]</code> | internal_ip block. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Preserved metadata defined for this instance. This is a list of key->value pairs. |

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.property.disk"></a>

```python
disk: typing.Union[IResolvable, typing.List[ComputeRegionPerInstanceConfigPreservedStateDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk">ComputeRegionPerInstanceConfigPreservedStateDisk</a>]]

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#disk ComputeRegionPerInstanceConfig#disk}

---

##### `external_ip`<sup>Optional</sup> <a name="external_ip" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.property.externalIp"></a>

```python
external_ip: typing.Union[IResolvable, typing.List[ComputeRegionPerInstanceConfigPreservedStateExternalIp]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp">ComputeRegionPerInstanceConfigPreservedStateExternalIp</a>]]

external_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#external_ip ComputeRegionPerInstanceConfig#external_ip}

---

##### `internal_ip`<sup>Optional</sup> <a name="internal_ip" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.property.internalIp"></a>

```python
internal_ip: typing.Union[IResolvable, typing.List[ComputeRegionPerInstanceConfigPreservedStateInternalIp]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp">ComputeRegionPerInstanceConfigPreservedStateInternalIp</a>]]

internal_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#internal_ip ComputeRegionPerInstanceConfig#internal_ip}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Preserved metadata defined for this instance. This is a list of key->value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#metadata ComputeRegionPerInstanceConfig#metadata}

---

### ComputeRegionPerInstanceConfigPreservedStateDisk <a name="ComputeRegionPerInstanceConfigPreservedStateDisk" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_per_instance_config

computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk(
  device_name: str,
  source: str,
  delete_rule: str = None,
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.property.deviceName">device_name</a></code> | <code>str</code> | A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.property.source">source</a></code> | <code>str</code> | The URI of an existing persistent disk to attach under the specified device-name in the format 'projects/project-id/zones/zone/disks/disk-name'. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.property.deleteRule">delete_rule</a></code> | <code>str</code> | A value that prescribes what should happen to the stateful disk when the VM instance is deleted. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.property.mode">mode</a></code> | <code>str</code> | The mode of the disk. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"]. |

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#device_name ComputeRegionPerInstanceConfig#device_name}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.property.source"></a>

```python
source: str
```

- *Type:* str

The URI of an existing persistent disk to attach under the specified device-name in the format 'projects/project-id/zones/zone/disks/disk-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#source ComputeRegionPerInstanceConfig#source}

---

##### `delete_rule`<sup>Optional</sup> <a name="delete_rule" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.property.deleteRule"></a>

```python
delete_rule: str
```

- *Type:* str

A value that prescribes what should happen to the stateful disk when the VM instance is deleted.

The available options are 'NEVER' and 'ON_PERMANENT_INSTANCE_DELETION'.
'NEVER' - detach the disk when the VM is deleted, but do not delete the disk.
'ON_PERMANENT_INSTANCE_DELETION' will delete the stateful disk when the VM is permanently
deleted from the instance group. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#delete_rule ComputeRegionPerInstanceConfig#delete_rule}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.property.mode"></a>

```python
mode: str
```

- *Type:* str

The mode of the disk. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#mode ComputeRegionPerInstanceConfig#mode}

---

### ComputeRegionPerInstanceConfigPreservedStateExternalIp <a name="ComputeRegionPerInstanceConfigPreservedStateExternalIp" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_per_instance_config

computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp(
  interface_name: str,
  auto_delete: str = None,
  ip_address: ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp.property.interfaceName">interface_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#interface_name ComputeRegionPerInstanceConfig#interface_name}. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp.property.autoDelete">auto_delete</a></code> | <code>str</code> | These stateful IPs will never be released during autohealing, update or VM instance recreate operations. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp.property.ipAddress">ip_address</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a></code> | ip_address block. |

---

##### `interface_name`<sup>Required</sup> <a name="interface_name" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp.property.interfaceName"></a>

```python
interface_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#interface_name ComputeRegionPerInstanceConfig#interface_name}.

---

##### `auto_delete`<sup>Optional</sup> <a name="auto_delete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp.property.autoDelete"></a>

```python
auto_delete: str
```

- *Type:* str

These stateful IPs will never be released during autohealing, update or VM instance recreate operations.

This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#auto_delete ComputeRegionPerInstanceConfig#auto_delete}

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp.property.ipAddress"></a>

```python
ip_address: ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a>

ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#ip_address ComputeRegionPerInstanceConfig#ip_address}

---

### ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress <a name="ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_per_instance_config

computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress(
  address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress.property.address">address</a></code> | <code>str</code> | The URL of the reservation for this IP address. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress.property.address"></a>

```python
address: str
```

- *Type:* str

The URL of the reservation for this IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#address ComputeRegionPerInstanceConfig#address}

---

### ComputeRegionPerInstanceConfigPreservedStateInternalIp <a name="ComputeRegionPerInstanceConfigPreservedStateInternalIp" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_per_instance_config

computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp(
  interface_name: str,
  auto_delete: str = None,
  ip_address: ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp.property.interfaceName">interface_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#interface_name ComputeRegionPerInstanceConfig#interface_name}. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp.property.autoDelete">auto_delete</a></code> | <code>str</code> | These stateful IPs will never be released during autohealing, update or VM instance recreate operations. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp.property.ipAddress">ip_address</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a></code> | ip_address block. |

---

##### `interface_name`<sup>Required</sup> <a name="interface_name" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp.property.interfaceName"></a>

```python
interface_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#interface_name ComputeRegionPerInstanceConfig#interface_name}.

---

##### `auto_delete`<sup>Optional</sup> <a name="auto_delete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp.property.autoDelete"></a>

```python
auto_delete: str
```

- *Type:* str

These stateful IPs will never be released during autohealing, update or VM instance recreate operations.

This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#auto_delete ComputeRegionPerInstanceConfig#auto_delete}

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp.property.ipAddress"></a>

```python
ip_address: ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a>

ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#ip_address ComputeRegionPerInstanceConfig#ip_address}

---

### ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress <a name="ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_per_instance_config

computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress(
  address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress.property.address">address</a></code> | <code>str</code> | The URL of the reservation for this IP address. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress.property.address"></a>

```python
address: str
```

- *Type:* str

The URL of the reservation for this IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#address ComputeRegionPerInstanceConfig#address}

---

### ComputeRegionPerInstanceConfigTimeouts <a name="ComputeRegionPerInstanceConfigTimeouts" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_per_instance_config

computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#create ComputeRegionPerInstanceConfig#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#delete ComputeRegionPerInstanceConfig#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#update ComputeRegionPerInstanceConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#create ComputeRegionPerInstanceConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#delete ComputeRegionPerInstanceConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#update ComputeRegionPerInstanceConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionPerInstanceConfigPreservedStateDiskList <a name="ComputeRegionPerInstanceConfigPreservedStateDiskList" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_per_instance_config

computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk">ComputeRegionPerInstanceConfigPreservedStateDisk</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeRegionPerInstanceConfigPreservedStateDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk">ComputeRegionPerInstanceConfigPreservedStateDisk</a>]]

---


### ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference <a name="ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_per_instance_config

computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resetDeleteRule">reset_delete_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_rule` <a name="reset_delete_rule" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resetDeleteRule"></a>

```python
def reset_delete_rule() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deleteRuleInput">delete_rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deleteRule">delete_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk">ComputeRegionPerInstanceConfigPreservedStateDisk</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_rule_input`<sup>Optional</sup> <a name="delete_rule_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deleteRuleInput"></a>

```python
delete_rule_input: str
```

- *Type:* str

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `delete_rule`<sup>Required</sup> <a name="delete_rule" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deleteRule"></a>

```python
delete_rule: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRegionPerInstanceConfigPreservedStateDisk]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk">ComputeRegionPerInstanceConfigPreservedStateDisk</a>]

---


### ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference <a name="ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_per_instance_config

computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resetAddress">reset_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address` <a name="reset_address" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a>

---


### ComputeRegionPerInstanceConfigPreservedStateExternalIpList <a name="ComputeRegionPerInstanceConfigPreservedStateExternalIpList" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_per_instance_config

computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp">ComputeRegionPerInstanceConfigPreservedStateExternalIp</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeRegionPerInstanceConfigPreservedStateExternalIp]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp">ComputeRegionPerInstanceConfigPreservedStateExternalIp</a>]]

---


### ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference <a name="ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_per_instance_config

computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.putIpAddress">put_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resetAutoDelete">reset_auto_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ip_address` <a name="put_ip_address" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.putIpAddress"></a>

```python
def put_ip_address(
  address: str = None
) -> None
```

###### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.putIpAddress.parameter.address"></a>

- *Type:* str

The URL of the reservation for this IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#address ComputeRegionPerInstanceConfig#address}

---

##### `reset_auto_delete` <a name="reset_auto_delete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resetAutoDelete"></a>

```python
def reset_auto_delete() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddress">ip_address</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDeleteInput">auto_delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceNameInput">interface_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDelete">auto_delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceName">interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp">ComputeRegionPerInstanceConfigPreservedStateExternalIp</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddress"></a>

```python
ip_address: ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference</a>

---

##### `auto_delete_input`<sup>Optional</sup> <a name="auto_delete_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDeleteInput"></a>

```python
auto_delete_input: str
```

- *Type:* str

---

##### `interface_name_input`<sup>Optional</sup> <a name="interface_name_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceNameInput"></a>

```python
interface_name_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a>

---

##### `auto_delete`<sup>Required</sup> <a name="auto_delete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDelete"></a>

```python
auto_delete: str
```

- *Type:* str

---

##### `interface_name`<sup>Required</sup> <a name="interface_name" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceName"></a>

```python
interface_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRegionPerInstanceConfigPreservedStateExternalIp]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp">ComputeRegionPerInstanceConfigPreservedStateExternalIp</a>]

---


### ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference <a name="ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_per_instance_config

computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resetAddress">reset_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address` <a name="reset_address" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a>

---


### ComputeRegionPerInstanceConfigPreservedStateInternalIpList <a name="ComputeRegionPerInstanceConfigPreservedStateInternalIpList" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_per_instance_config

computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp">ComputeRegionPerInstanceConfigPreservedStateInternalIp</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeRegionPerInstanceConfigPreservedStateInternalIp]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp">ComputeRegionPerInstanceConfigPreservedStateInternalIp</a>]]

---


### ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference <a name="ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_per_instance_config

computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.putIpAddress">put_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resetAutoDelete">reset_auto_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ip_address` <a name="put_ip_address" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.putIpAddress"></a>

```python
def put_ip_address(
  address: str = None
) -> None
```

###### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.putIpAddress.parameter.address"></a>

- *Type:* str

The URL of the reservation for this IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_region_per_instance_config#address ComputeRegionPerInstanceConfig#address}

---

##### `reset_auto_delete` <a name="reset_auto_delete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resetAutoDelete"></a>

```python
def reset_auto_delete() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddress">ip_address</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDeleteInput">auto_delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceNameInput">interface_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDelete">auto_delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceName">interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp">ComputeRegionPerInstanceConfigPreservedStateInternalIp</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddress"></a>

```python
ip_address: ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference</a>

---

##### `auto_delete_input`<sup>Optional</sup> <a name="auto_delete_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDeleteInput"></a>

```python
auto_delete_input: str
```

- *Type:* str

---

##### `interface_name_input`<sup>Optional</sup> <a name="interface_name_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceNameInput"></a>

```python
interface_name_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a>

---

##### `auto_delete`<sup>Required</sup> <a name="auto_delete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDelete"></a>

```python
auto_delete: str
```

- *Type:* str

---

##### `interface_name`<sup>Required</sup> <a name="interface_name" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceName"></a>

```python
interface_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRegionPerInstanceConfigPreservedStateInternalIp]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp">ComputeRegionPerInstanceConfigPreservedStateInternalIp</a>]

---


### ComputeRegionPerInstanceConfigPreservedStateOutputReference <a name="ComputeRegionPerInstanceConfigPreservedStateOutputReference" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_per_instance_config

computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putDisk">put_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putExternalIp">put_external_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putInternalIp">put_internal_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resetDisk">reset_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resetExternalIp">reset_external_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resetInternalIp">reset_internal_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_disk` <a name="put_disk" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putDisk"></a>

```python
def put_disk(
  value: typing.Union[IResolvable, typing.List[ComputeRegionPerInstanceConfigPreservedStateDisk]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putDisk.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk">ComputeRegionPerInstanceConfigPreservedStateDisk</a>]]

---

##### `put_external_ip` <a name="put_external_ip" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putExternalIp"></a>

```python
def put_external_ip(
  value: typing.Union[IResolvable, typing.List[ComputeRegionPerInstanceConfigPreservedStateExternalIp]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putExternalIp.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp">ComputeRegionPerInstanceConfigPreservedStateExternalIp</a>]]

---

##### `put_internal_ip` <a name="put_internal_ip" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putInternalIp"></a>

```python
def put_internal_ip(
  value: typing.Union[IResolvable, typing.List[ComputeRegionPerInstanceConfigPreservedStateInternalIp]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putInternalIp.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp">ComputeRegionPerInstanceConfigPreservedStateInternalIp</a>]]

---

##### `reset_disk` <a name="reset_disk" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resetDisk"></a>

```python
def reset_disk() -> None
```

##### `reset_external_ip` <a name="reset_external_ip" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resetExternalIp"></a>

```python
def reset_external_ip() -> None
```

##### `reset_internal_ip` <a name="reset_internal_ip" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resetInternalIp"></a>

```python
def reset_internal_ip() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.disk">disk</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList">ComputeRegionPerInstanceConfigPreservedStateDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.externalIp">external_ip</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList">ComputeRegionPerInstanceConfigPreservedStateExternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.internalIp">internal_ip</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList">ComputeRegionPerInstanceConfigPreservedStateInternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.diskInput">disk_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk">ComputeRegionPerInstanceConfigPreservedStateDisk</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.externalIpInput">external_ip_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp">ComputeRegionPerInstanceConfigPreservedStateExternalIp</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.internalIpInput">internal_ip_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp">ComputeRegionPerInstanceConfigPreservedStateInternalIp</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState">ComputeRegionPerInstanceConfigPreservedState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.disk"></a>

```python
disk: ComputeRegionPerInstanceConfigPreservedStateDiskList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList">ComputeRegionPerInstanceConfigPreservedStateDiskList</a>

---

##### `external_ip`<sup>Required</sup> <a name="external_ip" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.externalIp"></a>

```python
external_ip: ComputeRegionPerInstanceConfigPreservedStateExternalIpList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList">ComputeRegionPerInstanceConfigPreservedStateExternalIpList</a>

---

##### `internal_ip`<sup>Required</sup> <a name="internal_ip" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.internalIp"></a>

```python
internal_ip: ComputeRegionPerInstanceConfigPreservedStateInternalIpList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList">ComputeRegionPerInstanceConfigPreservedStateInternalIpList</a>

---

##### `disk_input`<sup>Optional</sup> <a name="disk_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.diskInput"></a>

```python
disk_input: typing.Union[IResolvable, typing.List[ComputeRegionPerInstanceConfigPreservedStateDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk">ComputeRegionPerInstanceConfigPreservedStateDisk</a>]]

---

##### `external_ip_input`<sup>Optional</sup> <a name="external_ip_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.externalIpInput"></a>

```python
external_ip_input: typing.Union[IResolvable, typing.List[ComputeRegionPerInstanceConfigPreservedStateExternalIp]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp">ComputeRegionPerInstanceConfigPreservedStateExternalIp</a>]]

---

##### `internal_ip_input`<sup>Optional</sup> <a name="internal_ip_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.internalIpInput"></a>

```python
internal_ip_input: typing.Union[IResolvable, typing.List[ComputeRegionPerInstanceConfigPreservedStateInternalIp]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp">ComputeRegionPerInstanceConfigPreservedStateInternalIp</a>]]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionPerInstanceConfigPreservedState
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState">ComputeRegionPerInstanceConfigPreservedState</a>

---


### ComputeRegionPerInstanceConfigTimeoutsOutputReference <a name="ComputeRegionPerInstanceConfigTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_per_instance_config

computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts">ComputeRegionPerInstanceConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRegionPerInstanceConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts">ComputeRegionPerInstanceConfigTimeouts</a>]

---



