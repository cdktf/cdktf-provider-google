# `google_compute_per_instance_config`

Refer to the Terraform Registory for docs: [`google_compute_per_instance_config`](https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config).

# `computePerInstanceConfig` Submodule <a name="`computePerInstanceConfig` Submodule" id="@cdktf/provider-google.computePerInstanceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputePerInstanceConfig <a name="ComputePerInstanceConfig" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config google_compute_per_instance_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_per_instance_config

computePerInstanceConfig.ComputePerInstanceConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_group_manager: str,
  name: str,
  id: str = None,
  minimal_action: str = None,
  most_disruptive_allowed_action: str = None,
  preserved_state: ComputePerInstanceConfigPreservedState = None,
  project: str = None,
  remove_instance_state_on_destroy: typing.Union[bool, IResolvable] = None,
  timeouts: ComputePerInstanceConfigTimeouts = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.instanceGroupManager">instance_group_manager</a></code> | <code>str</code> | The instance group manager this instance config is part of. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | The name for this per-instance config and its corresponding instance. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#id ComputePerInstanceConfig#id}. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.minimalAction">minimal_action</a></code> | <code>str</code> | The minimal action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.mostDisruptiveAllowedAction">most_disruptive_allowed_action</a></code> | <code>str</code> | The most disruptive action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.preservedState">preserved_state</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState">ComputePerInstanceConfigPreservedState</a></code> | preserved_state block. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#project ComputePerInstanceConfig#project}. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.removeInstanceStateOnDestroy">remove_instance_state_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, deleting this config will immediately remove any specified state from the underlying instance. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts">ComputePerInstanceConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Zone where the containing instance group manager is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_group_manager`<sup>Required</sup> <a name="instance_group_manager" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.instanceGroupManager"></a>

- *Type:* str

The instance group manager this instance config is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#instance_group_manager ComputePerInstanceConfig#instance_group_manager}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.name"></a>

- *Type:* str

The name for this per-instance config and its corresponding instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#name ComputePerInstanceConfig#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#id ComputePerInstanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimal_action`<sup>Optional</sup> <a name="minimal_action" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.minimalAction"></a>

- *Type:* str

The minimal action to perform on the instance during an update.

Default is 'NONE'. Possible values are:

* REPLACE
* RESTART
* REFRESH
* NONE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#minimal_action ComputePerInstanceConfig#minimal_action}

---

##### `most_disruptive_allowed_action`<sup>Optional</sup> <a name="most_disruptive_allowed_action" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.mostDisruptiveAllowedAction"></a>

- *Type:* str

The most disruptive action to perform on the instance during an update.

Default is 'REPLACE'. Possible values are:

* REPLACE
* RESTART
* REFRESH
* NONE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#most_disruptive_allowed_action ComputePerInstanceConfig#most_disruptive_allowed_action}

---

##### `preserved_state`<sup>Optional</sup> <a name="preserved_state" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.preservedState"></a>

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState">ComputePerInstanceConfigPreservedState</a>

preserved_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#preserved_state ComputePerInstanceConfig#preserved_state}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#project ComputePerInstanceConfig#project}.

---

##### `remove_instance_state_on_destroy`<sup>Optional</sup> <a name="remove_instance_state_on_destroy" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.removeInstanceStateOnDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, deleting this config will immediately remove any specified state from the underlying instance.

When false, deleting this config will *not* immediately remove any state from the underlying instance.
State will be removed on the next instance recreation or update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#remove_instance_state_on_destroy ComputePerInstanceConfig#remove_instance_state_on_destroy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts">ComputePerInstanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#timeouts ComputePerInstanceConfig#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.Initializer.parameter.zone"></a>

- *Type:* str

Zone where the containing instance group manager is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#zone ComputePerInstanceConfig#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.putPreservedState">put_preserved_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetMinimalAction">reset_minimal_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetMostDisruptiveAllowedAction">reset_most_disruptive_allowed_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetPreservedState">reset_preserved_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetRemoveInstanceStateOnDestroy">reset_remove_instance_state_on_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_preserved_state` <a name="put_preserved_state" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.putPreservedState"></a>

```python
def put_preserved_state(
  disk: typing.Union[IResolvable, typing.List[ComputePerInstanceConfigPreservedStateDisk]] = None,
  metadata: typing.Mapping[str] = None
) -> None
```

###### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.putPreservedState.parameter.disk"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk">ComputePerInstanceConfigPreservedStateDisk</a>]]

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#disk ComputePerInstanceConfig#disk}

---

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.putPreservedState.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Preserved metadata defined for this instance. This is a list of key->value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#metadata ComputePerInstanceConfig#metadata}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#create ComputePerInstanceConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#delete ComputePerInstanceConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#update ComputePerInstanceConfig#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_minimal_action` <a name="reset_minimal_action" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetMinimalAction"></a>

```python
def reset_minimal_action() -> None
```

##### `reset_most_disruptive_allowed_action` <a name="reset_most_disruptive_allowed_action" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetMostDisruptiveAllowedAction"></a>

```python
def reset_most_disruptive_allowed_action() -> None
```

##### `reset_preserved_state` <a name="reset_preserved_state" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetPreservedState"></a>

```python
def reset_preserved_state() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_remove_instance_state_on_destroy` <a name="reset_remove_instance_state_on_destroy" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetRemoveInstanceStateOnDestroy"></a>

```python
def reset_remove_instance_state_on_destroy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_per_instance_config

computePerInstanceConfig.ComputePerInstanceConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_per_instance_config

computePerInstanceConfig.ComputePerInstanceConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_per_instance_config

computePerInstanceConfig.ComputePerInstanceConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.preservedState">preserved_state</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference">ComputePerInstanceConfigPreservedStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference">ComputePerInstanceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.instanceGroupManagerInput">instance_group_manager_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.minimalActionInput">minimal_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.mostDisruptiveAllowedActionInput">most_disruptive_allowed_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.preservedStateInput">preserved_state_input</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState">ComputePerInstanceConfigPreservedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.removeInstanceStateOnDestroyInput">remove_instance_state_on_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts">ComputePerInstanceConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.instanceGroupManager">instance_group_manager</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.minimalAction">minimal_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.mostDisruptiveAllowedAction">most_disruptive_allowed_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.removeInstanceStateOnDestroy">remove_instance_state_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `preserved_state`<sup>Required</sup> <a name="preserved_state" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.preservedState"></a>

```python
preserved_state: ComputePerInstanceConfigPreservedStateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference">ComputePerInstanceConfigPreservedStateOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.timeouts"></a>

```python
timeouts: ComputePerInstanceConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference">ComputePerInstanceConfigTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_group_manager_input`<sup>Optional</sup> <a name="instance_group_manager_input" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.instanceGroupManagerInput"></a>

```python
instance_group_manager_input: str
```

- *Type:* str

---

##### `minimal_action_input`<sup>Optional</sup> <a name="minimal_action_input" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.minimalActionInput"></a>

```python
minimal_action_input: str
```

- *Type:* str

---

##### `most_disruptive_allowed_action_input`<sup>Optional</sup> <a name="most_disruptive_allowed_action_input" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.mostDisruptiveAllowedActionInput"></a>

```python
most_disruptive_allowed_action_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `preserved_state_input`<sup>Optional</sup> <a name="preserved_state_input" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.preservedStateInput"></a>

```python
preserved_state_input: ComputePerInstanceConfigPreservedState
```

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState">ComputePerInstanceConfigPreservedState</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `remove_instance_state_on_destroy_input`<sup>Optional</sup> <a name="remove_instance_state_on_destroy_input" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.removeInstanceStateOnDestroyInput"></a>

```python
remove_instance_state_on_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputePerInstanceConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts">ComputePerInstanceConfigTimeouts</a>]

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_group_manager`<sup>Required</sup> <a name="instance_group_manager" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.instanceGroupManager"></a>

```python
instance_group_manager: str
```

- *Type:* str

---

##### `minimal_action`<sup>Required</sup> <a name="minimal_action" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.minimalAction"></a>

```python
minimal_action: str
```

- *Type:* str

---

##### `most_disruptive_allowed_action`<sup>Required</sup> <a name="most_disruptive_allowed_action" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.mostDisruptiveAllowedAction"></a>

```python
most_disruptive_allowed_action: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `remove_instance_state_on_destroy`<sup>Required</sup> <a name="remove_instance_state_on_destroy" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.removeInstanceStateOnDestroy"></a>

```python
remove_instance_state_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputePerInstanceConfigConfig <a name="ComputePerInstanceConfigConfig" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_per_instance_config

computePerInstanceConfig.ComputePerInstanceConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_group_manager: str,
  name: str,
  id: str = None,
  minimal_action: str = None,
  most_disruptive_allowed_action: str = None,
  preserved_state: ComputePerInstanceConfigPreservedState = None,
  project: str = None,
  remove_instance_state_on_destroy: typing.Union[bool, IResolvable] = None,
  timeouts: ComputePerInstanceConfigTimeouts = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.instanceGroupManager">instance_group_manager</a></code> | <code>str</code> | The instance group manager this instance config is part of. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.name">name</a></code> | <code>str</code> | The name for this per-instance config and its corresponding instance. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#id ComputePerInstanceConfig#id}. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.minimalAction">minimal_action</a></code> | <code>str</code> | The minimal action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.mostDisruptiveAllowedAction">most_disruptive_allowed_action</a></code> | <code>str</code> | The most disruptive action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.preservedState">preserved_state</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState">ComputePerInstanceConfigPreservedState</a></code> | preserved_state block. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#project ComputePerInstanceConfig#project}. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.removeInstanceStateOnDestroy">remove_instance_state_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, deleting this config will immediately remove any specified state from the underlying instance. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts">ComputePerInstanceConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.zone">zone</a></code> | <code>str</code> | Zone where the containing instance group manager is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_group_manager`<sup>Required</sup> <a name="instance_group_manager" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.instanceGroupManager"></a>

```python
instance_group_manager: str
```

- *Type:* str

The instance group manager this instance config is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#instance_group_manager ComputePerInstanceConfig#instance_group_manager}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name for this per-instance config and its corresponding instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#name ComputePerInstanceConfig#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#id ComputePerInstanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimal_action`<sup>Optional</sup> <a name="minimal_action" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.minimalAction"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#minimal_action ComputePerInstanceConfig#minimal_action}

---

##### `most_disruptive_allowed_action`<sup>Optional</sup> <a name="most_disruptive_allowed_action" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.mostDisruptiveAllowedAction"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#most_disruptive_allowed_action ComputePerInstanceConfig#most_disruptive_allowed_action}

---

##### `preserved_state`<sup>Optional</sup> <a name="preserved_state" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.preservedState"></a>

```python
preserved_state: ComputePerInstanceConfigPreservedState
```

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState">ComputePerInstanceConfigPreservedState</a>

preserved_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#preserved_state ComputePerInstanceConfig#preserved_state}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#project ComputePerInstanceConfig#project}.

---

##### `remove_instance_state_on_destroy`<sup>Optional</sup> <a name="remove_instance_state_on_destroy" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.removeInstanceStateOnDestroy"></a>

```python
remove_instance_state_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, deleting this config will immediately remove any specified state from the underlying instance.

When false, deleting this config will *not* immediately remove any state from the underlying instance.
State will be removed on the next instance recreation or update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#remove_instance_state_on_destroy ComputePerInstanceConfig#remove_instance_state_on_destroy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.timeouts"></a>

```python
timeouts: ComputePerInstanceConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts">ComputePerInstanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#timeouts ComputePerInstanceConfig#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Zone where the containing instance group manager is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#zone ComputePerInstanceConfig#zone}

---

### ComputePerInstanceConfigPreservedState <a name="ComputePerInstanceConfigPreservedState" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_per_instance_config

computePerInstanceConfig.ComputePerInstanceConfigPreservedState(
  disk: typing.Union[IResolvable, typing.List[ComputePerInstanceConfigPreservedStateDisk]] = None,
  metadata: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState.property.disk">disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk">ComputePerInstanceConfigPreservedStateDisk</a>]]</code> | disk block. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Preserved metadata defined for this instance. This is a list of key->value pairs. |

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState.property.disk"></a>

```python
disk: typing.Union[IResolvable, typing.List[ComputePerInstanceConfigPreservedStateDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk">ComputePerInstanceConfigPreservedStateDisk</a>]]

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#disk ComputePerInstanceConfig#disk}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Preserved metadata defined for this instance. This is a list of key->value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#metadata ComputePerInstanceConfig#metadata}

---

### ComputePerInstanceConfigPreservedStateDisk <a name="ComputePerInstanceConfigPreservedStateDisk" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_per_instance_config

computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk(
  device_name: str,
  source: str,
  delete_rule: str = None,
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk.property.deviceName">device_name</a></code> | <code>str</code> | A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk.property.source">source</a></code> | <code>str</code> | The URI of an existing persistent disk to attach under the specified device-name in the format 'projects/project-id/zones/zone/disks/disk-name'. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk.property.deleteRule">delete_rule</a></code> | <code>str</code> | A value that prescribes what should happen to the stateful disk when the VM instance is deleted. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk.property.mode">mode</a></code> | <code>str</code> | The mode of the disk. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"]. |

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#device_name ComputePerInstanceConfig#device_name}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk.property.source"></a>

```python
source: str
```

- *Type:* str

The URI of an existing persistent disk to attach under the specified device-name in the format 'projects/project-id/zones/zone/disks/disk-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#source ComputePerInstanceConfig#source}

---

##### `delete_rule`<sup>Optional</sup> <a name="delete_rule" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk.property.deleteRule"></a>

```python
delete_rule: str
```

- *Type:* str

A value that prescribes what should happen to the stateful disk when the VM instance is deleted.

The available options are 'NEVER' and 'ON_PERMANENT_INSTANCE_DELETION'.
'NEVER' - detach the disk when the VM is deleted, but do not delete the disk.
'ON_PERMANENT_INSTANCE_DELETION' will delete the stateful disk when the VM is permanently
deleted from the instance group. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#delete_rule ComputePerInstanceConfig#delete_rule}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk.property.mode"></a>

```python
mode: str
```

- *Type:* str

The mode of the disk. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#mode ComputePerInstanceConfig#mode}

---

### ComputePerInstanceConfigTimeouts <a name="ComputePerInstanceConfigTimeouts" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_per_instance_config

computePerInstanceConfig.ComputePerInstanceConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#create ComputePerInstanceConfig#create}. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#delete ComputePerInstanceConfig#delete}. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#update ComputePerInstanceConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#create ComputePerInstanceConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#delete ComputePerInstanceConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/compute_per_instance_config#update ComputePerInstanceConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputePerInstanceConfigPreservedStateDiskList <a name="ComputePerInstanceConfigPreservedStateDiskList" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_per_instance_config

computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputePerInstanceConfigPreservedStateDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk">ComputePerInstanceConfigPreservedStateDisk</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputePerInstanceConfigPreservedStateDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk">ComputePerInstanceConfigPreservedStateDisk</a>]]

---


### ComputePerInstanceConfigPreservedStateDiskOutputReference <a name="ComputePerInstanceConfigPreservedStateDiskOutputReference" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_per_instance_config

computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.resetDeleteRule">reset_delete_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_rule` <a name="reset_delete_rule" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.resetDeleteRule"></a>

```python
def reset_delete_rule() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.deleteRuleInput">delete_rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.deleteRule">delete_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk">ComputePerInstanceConfigPreservedStateDisk</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_rule_input`<sup>Optional</sup> <a name="delete_rule_input" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.deleteRuleInput"></a>

```python
delete_rule_input: str
```

- *Type:* str

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `delete_rule`<sup>Required</sup> <a name="delete_rule" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.deleteRule"></a>

```python
delete_rule: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputePerInstanceConfigPreservedStateDisk]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk">ComputePerInstanceConfigPreservedStateDisk</a>]

---


### ComputePerInstanceConfigPreservedStateOutputReference <a name="ComputePerInstanceConfigPreservedStateOutputReference" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_per_instance_config

computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.putDisk">put_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.resetDisk">reset_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_disk` <a name="put_disk" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.putDisk"></a>

```python
def put_disk(
  value: typing.Union[IResolvable, typing.List[ComputePerInstanceConfigPreservedStateDisk]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.putDisk.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk">ComputePerInstanceConfigPreservedStateDisk</a>]]

---

##### `reset_disk` <a name="reset_disk" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.resetDisk"></a>

```python
def reset_disk() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.disk">disk</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList">ComputePerInstanceConfigPreservedStateDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.diskInput">disk_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk">ComputePerInstanceConfigPreservedStateDisk</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState">ComputePerInstanceConfigPreservedState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.disk"></a>

```python
disk: ComputePerInstanceConfigPreservedStateDiskList
```

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDiskList">ComputePerInstanceConfigPreservedStateDiskList</a>

---

##### `disk_input`<sup>Optional</sup> <a name="disk_input" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.diskInput"></a>

```python
disk_input: typing.Union[IResolvable, typing.List[ComputePerInstanceConfigPreservedStateDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateDisk">ComputePerInstanceConfigPreservedStateDisk</a>]]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedStateOutputReference.property.internalValue"></a>

```python
internal_value: ComputePerInstanceConfigPreservedState
```

- *Type:* <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigPreservedState">ComputePerInstanceConfigPreservedState</a>

---


### ComputePerInstanceConfigTimeoutsOutputReference <a name="ComputePerInstanceConfigTimeoutsOutputReference" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_per_instance_config

computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts">ComputePerInstanceConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputePerInstanceConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computePerInstanceConfig.ComputePerInstanceConfigTimeouts">ComputePerInstanceConfigTimeouts</a>]

---



