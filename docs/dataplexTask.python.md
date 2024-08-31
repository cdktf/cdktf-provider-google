# `dataplexTask` Submodule <a name="`dataplexTask` Submodule" id="@cdktf/provider-google.dataplexTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexTask <a name="DataplexTask" id="@cdktf/provider-google.dataplexTask.DataplexTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task google_dataplex_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTask(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  execution_spec: DataplexTaskExecutionSpec,
  trigger_spec: DataplexTaskTriggerSpec,
  description: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  lake: str = None,
  location: str = None,
  notebook: DataplexTaskNotebook = None,
  project: str = None,
  spark: DataplexTaskSpark = None,
  task_id: str = None,
  timeouts: DataplexTaskTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.executionSpec">execution_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec">DataplexTaskExecutionSpec</a></code> | execution_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.triggerSpec">trigger_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec">DataplexTaskTriggerSpec</a></code> | trigger_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.description">description</a></code> | <code>str</code> | User-provided description of the task. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User friendly display name. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#id DataplexTask#id}. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the task. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.lake">lake</a></code> | <code>str</code> | The lake in which the task will be created in. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.location">location</a></code> | <code>str</code> | The location in which the task will be created in. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebook">DataplexTaskNotebook</a></code> | notebook block. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#project DataplexTask#project}. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.spark">spark</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark">DataplexTaskSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.taskId">task_id</a></code> | <code>str</code> | The task Id of the task. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts">DataplexTaskTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `execution_spec`<sup>Required</sup> <a name="execution_spec" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.executionSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec">DataplexTaskExecutionSpec</a>

execution_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#execution_spec DataplexTask#execution_spec}

---

##### `trigger_spec`<sup>Required</sup> <a name="trigger_spec" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.triggerSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec">DataplexTaskTriggerSpec</a>

trigger_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#trigger_spec DataplexTask#trigger_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.description"></a>

- *Type:* str

User-provided description of the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#description DataplexTask#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.displayName"></a>

- *Type:* str

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#display_name DataplexTask#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#id DataplexTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels for the task.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#labels DataplexTask#labels}

---

##### `lake`<sup>Optional</sup> <a name="lake" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.lake"></a>

- *Type:* str

The lake in which the task will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#lake DataplexTask#lake}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.location"></a>

- *Type:* str

The location in which the task will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#location DataplexTask#location}

---

##### `notebook`<sup>Optional</sup> <a name="notebook" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.notebook"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebook">DataplexTaskNotebook</a>

notebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#notebook DataplexTask#notebook}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#project DataplexTask#project}.

---

##### `spark`<sup>Optional</sup> <a name="spark" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.spark"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark">DataplexTaskSpark</a>

spark block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#spark DataplexTask#spark}

---

##### `task_id`<sup>Optional</sup> <a name="task_id" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.taskId"></a>

- *Type:* str

The task Id of the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#task_id DataplexTask#task_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts">DataplexTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#timeouts DataplexTask#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.putExecutionSpec">put_execution_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.putNotebook">put_notebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.putSpark">put_spark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.putTriggerSpec">put_trigger_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.resetLake">reset_lake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.resetNotebook">reset_notebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.resetSpark">reset_spark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.resetTaskId">reset_task_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexTask.DataplexTask.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataplexTask.DataplexTask.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataplexTask.DataplexTask.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexTask.DataplexTask.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataplexTask.DataplexTask.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataplexTask.DataplexTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataplexTask.DataplexTask.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataplexTask.DataplexTask.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataplexTask.DataplexTask.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataplexTask.DataplexTask.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.dataplexTask.DataplexTask.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataplexTask.DataplexTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.dataplexTask.DataplexTask.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.dataplexTask.DataplexTask.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexTask.DataplexTask.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexTask.DataplexTask.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.dataplexTask.DataplexTask.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexTask.DataplexTask.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.dataplexTask.DataplexTask.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataplexTask.DataplexTask.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataplexTask.DataplexTask.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.dataplexTask.DataplexTask.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexTask.DataplexTask.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_execution_spec` <a name="put_execution_spec" id="@cdktf/provider-google.dataplexTask.DataplexTask.putExecutionSpec"></a>

```python
def put_execution_spec(
  service_account: str,
  args: typing.Mapping[str] = None,
  kms_key: str = None,
  max_job_execution_lifetime: str = None,
  project: str = None
) -> None
```

###### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.dataplexTask.DataplexTask.putExecutionSpec.parameter.serviceAccount"></a>

- *Type:* str

Service account to use to execute a task.

If not provided, the default Compute service account for the project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#service_account DataplexTask#service_account}

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataplexTask.DataplexTask.putExecutionSpec.parameter.args"></a>

- *Type:* typing.Mapping[str]

The arguments to pass to the task.

The args can use placeholders of the format ${placeholder} as part of key/value string. These will be interpolated before passing the args to the driver. Currently supported placeholders: - ${taskId} - ${job_time} To pass positional args, set the key as TASK_ARGS. The value should be a comma-separated string of all the positional arguments. To use a delimiter other than comma, refer to https://cloud.google.com/sdk/gcloud/reference/topic/escaping. In case of other keys being present in the args, then TASK_ARGS will be passed as the last argument. An object containing a list of 'key': value pairs. Example: { 'name': 'wrench', 'mass': '1.3kg', 'count': '3' }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#args DataplexTask#args}

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google.dataplexTask.DataplexTask.putExecutionSpec.parameter.kmsKey"></a>

- *Type:* str

The Cloud KMS key to use for encryption, of the form: projects/{project_number}/locations/{locationId}/keyRings/{key-ring-name}/cryptoKeys/{key-name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#kms_key DataplexTask#kms_key}

---

###### `max_job_execution_lifetime`<sup>Optional</sup> <a name="max_job_execution_lifetime" id="@cdktf/provider-google.dataplexTask.DataplexTask.putExecutionSpec.parameter.maxJobExecutionLifetime"></a>

- *Type:* str

The maximum duration after which the job execution is expired.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#max_job_execution_lifetime DataplexTask#max_job_execution_lifetime}

---

###### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataplexTask.DataplexTask.putExecutionSpec.parameter.project"></a>

- *Type:* str

The project in which jobs are run.

By default, the project containing the Lake is used. If a project is provided, the ExecutionSpec.service_account must belong to this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#project DataplexTask#project}

---

##### `put_notebook` <a name="put_notebook" id="@cdktf/provider-google.dataplexTask.DataplexTask.putNotebook"></a>

```python
def put_notebook(
  notebook: str,
  archive_uris: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  infrastructure_spec: DataplexTaskNotebookInfrastructureSpec = None
) -> None
```

###### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktf/provider-google.dataplexTask.DataplexTask.putNotebook.parameter.notebook"></a>

- *Type:* str

Path to input notebook.

This can be the Cloud Storage URI of the notebook file or the path to a Notebook Content. The execution args are accessible as environment variables (TASK_key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#notebook DataplexTask#notebook}

---

###### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google.dataplexTask.DataplexTask.putNotebook.parameter.archiveUris"></a>

- *Type:* typing.List[str]

Cloud Storage URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#archive_uris DataplexTask#archive_uris}

---

###### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google.dataplexTask.DataplexTask.putNotebook.parameter.fileUris"></a>

- *Type:* typing.List[str]

Cloud Storage URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#file_uris DataplexTask#file_uris}

---

###### `infrastructure_spec`<sup>Optional</sup> <a name="infrastructure_spec" id="@cdktf/provider-google.dataplexTask.DataplexTask.putNotebook.parameter.infrastructureSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec">DataplexTaskNotebookInfrastructureSpec</a>

infrastructure_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#infrastructure_spec DataplexTask#infrastructure_spec}

---

##### `put_spark` <a name="put_spark" id="@cdktf/provider-google.dataplexTask.DataplexTask.putSpark"></a>

```python
def put_spark(
  archive_uris: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  infrastructure_spec: DataplexTaskSparkInfrastructureSpec = None,
  main_class: str = None,
  main_jar_file_uri: str = None,
  python_script_file: str = None,
  sql_script: str = None,
  sql_script_file: str = None
) -> None
```

###### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google.dataplexTask.DataplexTask.putSpark.parameter.archiveUris"></a>

- *Type:* typing.List[str]

Cloud Storage URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#archive_uris DataplexTask#archive_uris}

---

###### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google.dataplexTask.DataplexTask.putSpark.parameter.fileUris"></a>

- *Type:* typing.List[str]

Cloud Storage URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#file_uris DataplexTask#file_uris}

---

###### `infrastructure_spec`<sup>Optional</sup> <a name="infrastructure_spec" id="@cdktf/provider-google.dataplexTask.DataplexTask.putSpark.parameter.infrastructureSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec">DataplexTaskSparkInfrastructureSpec</a>

infrastructure_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#infrastructure_spec DataplexTask#infrastructure_spec}

---

###### `main_class`<sup>Optional</sup> <a name="main_class" id="@cdktf/provider-google.dataplexTask.DataplexTask.putSpark.parameter.mainClass"></a>

- *Type:* str

The name of the driver's main class.

The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris. The execution args are passed in as a sequence of named process arguments (--key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#main_class DataplexTask#main_class}

---

###### `main_jar_file_uri`<sup>Optional</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google.dataplexTask.DataplexTask.putSpark.parameter.mainJarFileUri"></a>

- *Type:* str

The Cloud Storage URI of the jar file that contains the main class.

The execution args are passed in as a sequence of named process arguments (--key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#main_jar_file_uri DataplexTask#main_jar_file_uri}

---

###### `python_script_file`<sup>Optional</sup> <a name="python_script_file" id="@cdktf/provider-google.dataplexTask.DataplexTask.putSpark.parameter.pythonScriptFile"></a>

- *Type:* str

The Gcloud Storage URI of the main Python file to use as the driver.

Must be a .py file. The execution args are passed in as a sequence of named process arguments (--key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#python_script_file DataplexTask#python_script_file}

---

###### `sql_script`<sup>Optional</sup> <a name="sql_script" id="@cdktf/provider-google.dataplexTask.DataplexTask.putSpark.parameter.sqlScript"></a>

- *Type:* str

The query text. The execution args are used to declare a set of script variables (set key='value';).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#sql_script DataplexTask#sql_script}

---

###### `sql_script_file`<sup>Optional</sup> <a name="sql_script_file" id="@cdktf/provider-google.dataplexTask.DataplexTask.putSpark.parameter.sqlScriptFile"></a>

- *Type:* str

A reference to a query file.

This can be the Cloud Storage URI of the query file or it can the path to a SqlScript Content. The execution args are used to declare a set of script variables (set key='value';).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#sql_script_file DataplexTask#sql_script_file}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.dataplexTask.DataplexTask.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataplexTask.DataplexTask.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#create DataplexTask#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataplexTask.DataplexTask.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#delete DataplexTask#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataplexTask.DataplexTask.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#update DataplexTask#update}.

---

##### `put_trigger_spec` <a name="put_trigger_spec" id="@cdktf/provider-google.dataplexTask.DataplexTask.putTriggerSpec"></a>

```python
def put_trigger_spec(
  type: str,
  disabled: typing.Union[bool, IResolvable] = None,
  max_retries: typing.Union[int, float] = None,
  schedule: str = None,
  start_time: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataplexTask.DataplexTask.putTriggerSpec.parameter.type"></a>

- *Type:* str

Trigger type of the user-specified Task Possible values: ["ON_DEMAND", "RECURRING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#type DataplexTask#type}

---

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.dataplexTask.DataplexTask.putTriggerSpec.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Prevent the task from executing.

This does not cancel already running tasks. It is intended to temporarily disable RECURRING tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#disabled DataplexTask#disabled}

---

###### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-google.dataplexTask.DataplexTask.putTriggerSpec.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#max_retries DataplexTask#max_retries}

---

###### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google.dataplexTask.DataplexTask.putTriggerSpec.parameter.schedule"></a>

- *Type:* str

Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: 'CRON_TZ=${IANA_TIME_ZONE}' or 'TZ=${IANA_TIME_ZONE}'. The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. This field is required for RECURRING tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#schedule DataplexTask#schedule}

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-google.dataplexTask.DataplexTask.putTriggerSpec.parameter.startTime"></a>

- *Type:* str

The first run of the task will be after this time.

If not specified, the task will run shortly after being submitted if ON_DEMAND and based on the schedule if RECURRING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#start_time DataplexTask#start_time}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.dataplexTask.DataplexTask.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.dataplexTask.DataplexTask.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataplexTask.DataplexTask.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.dataplexTask.DataplexTask.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_lake` <a name="reset_lake" id="@cdktf/provider-google.dataplexTask.DataplexTask.resetLake"></a>

```python
def reset_lake() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.dataplexTask.DataplexTask.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_notebook` <a name="reset_notebook" id="@cdktf/provider-google.dataplexTask.DataplexTask.resetNotebook"></a>

```python
def reset_notebook() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataplexTask.DataplexTask.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_spark` <a name="reset_spark" id="@cdktf/provider-google.dataplexTask.DataplexTask.resetSpark"></a>

```python
def reset_spark() -> None
```

##### `reset_task_id` <a name="reset_task_id" id="@cdktf/provider-google.dataplexTask.DataplexTask.resetTaskId"></a>

```python
def reset_task_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.dataplexTask.DataplexTask.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataplexTask resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataplexTask.DataplexTask.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTask.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexTask.DataplexTask.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataplexTask.DataplexTask.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTask.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexTask.DataplexTask.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dataplexTask.DataplexTask.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTask.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexTask.DataplexTask.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataplexTask.DataplexTask.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTask.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataplexTask resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexTask.DataplexTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataplexTask.DataplexTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataplexTask to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataplexTask.DataplexTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataplexTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexTask.DataplexTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataplexTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.executionSpec">execution_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference">DataplexTaskExecutionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.executionStatus">execution_status</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList">DataplexTaskExecutionStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference">DataplexTaskNotebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference">DataplexTaskSparkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference">DataplexTaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.triggerSpec">trigger_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference">DataplexTaskTriggerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.executionSpecInput">execution_spec_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec">DataplexTaskExecutionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.lakeInput">lake_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.notebookInput">notebook_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebook">DataplexTaskNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.sparkInput">spark_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark">DataplexTaskSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.taskIdInput">task_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts">DataplexTaskTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.triggerSpecInput">trigger_spec_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec">DataplexTaskTriggerSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.lake">lake</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.taskId">task_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `execution_spec`<sup>Required</sup> <a name="execution_spec" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.executionSpec"></a>

```python
execution_spec: DataplexTaskExecutionSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference">DataplexTaskExecutionSpecOutputReference</a>

---

##### `execution_status`<sup>Required</sup> <a name="execution_status" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.executionStatus"></a>

```python
execution_status: DataplexTaskExecutionStatusList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList">DataplexTaskExecutionStatusList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.notebook"></a>

```python
notebook: DataplexTaskNotebookOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference">DataplexTaskNotebookOutputReference</a>

---

##### `spark`<sup>Required</sup> <a name="spark" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.spark"></a>

```python
spark: DataplexTaskSparkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference">DataplexTaskSparkOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.timeouts"></a>

```python
timeouts: DataplexTaskTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference">DataplexTaskTimeoutsOutputReference</a>

---

##### `trigger_spec`<sup>Required</sup> <a name="trigger_spec" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.triggerSpec"></a>

```python
trigger_spec: DataplexTaskTriggerSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference">DataplexTaskTriggerSpecOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `execution_spec_input`<sup>Optional</sup> <a name="execution_spec_input" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.executionSpecInput"></a>

```python
execution_spec_input: DataplexTaskExecutionSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec">DataplexTaskExecutionSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `lake_input`<sup>Optional</sup> <a name="lake_input" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.lakeInput"></a>

```python
lake_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `notebook_input`<sup>Optional</sup> <a name="notebook_input" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.notebookInput"></a>

```python
notebook_input: DataplexTaskNotebook
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebook">DataplexTaskNotebook</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `spark_input`<sup>Optional</sup> <a name="spark_input" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.sparkInput"></a>

```python
spark_input: DataplexTaskSpark
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark">DataplexTaskSpark</a>

---

##### `task_id_input`<sup>Optional</sup> <a name="task_id_input" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.taskIdInput"></a>

```python
task_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataplexTaskTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts">DataplexTaskTimeouts</a>]

---

##### `trigger_spec_input`<sup>Optional</sup> <a name="trigger_spec_input" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.triggerSpecInput"></a>

```python
trigger_spec_input: DataplexTaskTriggerSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec">DataplexTaskTriggerSpec</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `lake`<sup>Required</sup> <a name="lake" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.lake"></a>

```python
lake: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `task_id`<sup>Required</sup> <a name="task_id" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.taskId"></a>

```python
task_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexTaskConfig <a name="DataplexTaskConfig" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  execution_spec: DataplexTaskExecutionSpec,
  trigger_spec: DataplexTaskTriggerSpec,
  description: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  lake: str = None,
  location: str = None,
  notebook: DataplexTaskNotebook = None,
  project: str = None,
  spark: DataplexTaskSpark = None,
  task_id: str = None,
  timeouts: DataplexTaskTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.executionSpec">execution_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec">DataplexTaskExecutionSpec</a></code> | execution_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.triggerSpec">trigger_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec">DataplexTaskTriggerSpec</a></code> | trigger_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.description">description</a></code> | <code>str</code> | User-provided description of the task. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.displayName">display_name</a></code> | <code>str</code> | User friendly display name. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#id DataplexTask#id}. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the task. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.lake">lake</a></code> | <code>str</code> | The lake in which the task will be created in. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.location">location</a></code> | <code>str</code> | The location in which the task will be created in. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebook">DataplexTaskNotebook</a></code> | notebook block. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#project DataplexTask#project}. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark">DataplexTaskSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.taskId">task_id</a></code> | <code>str</code> | The task Id of the task. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts">DataplexTaskTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `execution_spec`<sup>Required</sup> <a name="execution_spec" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.executionSpec"></a>

```python
execution_spec: DataplexTaskExecutionSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec">DataplexTaskExecutionSpec</a>

execution_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#execution_spec DataplexTask#execution_spec}

---

##### `trigger_spec`<sup>Required</sup> <a name="trigger_spec" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.triggerSpec"></a>

```python
trigger_spec: DataplexTaskTriggerSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec">DataplexTaskTriggerSpec</a>

trigger_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#trigger_spec DataplexTask#trigger_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User-provided description of the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#description DataplexTask#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#display_name DataplexTask#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#id DataplexTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels for the task.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#labels DataplexTask#labels}

---

##### `lake`<sup>Optional</sup> <a name="lake" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.lake"></a>

```python
lake: str
```

- *Type:* str

The lake in which the task will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#lake DataplexTask#lake}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location in which the task will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#location DataplexTask#location}

---

##### `notebook`<sup>Optional</sup> <a name="notebook" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.notebook"></a>

```python
notebook: DataplexTaskNotebook
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebook">DataplexTaskNotebook</a>

notebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#notebook DataplexTask#notebook}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#project DataplexTask#project}.

---

##### `spark`<sup>Optional</sup> <a name="spark" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.spark"></a>

```python
spark: DataplexTaskSpark
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark">DataplexTaskSpark</a>

spark block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#spark DataplexTask#spark}

---

##### `task_id`<sup>Optional</sup> <a name="task_id" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.taskId"></a>

```python
task_id: str
```

- *Type:* str

The task Id of the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#task_id DataplexTask#task_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.timeouts"></a>

```python
timeouts: DataplexTaskTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts">DataplexTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#timeouts DataplexTask#timeouts}

---

### DataplexTaskExecutionSpec <a name="DataplexTaskExecutionSpec" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskExecutionSpec(
  service_account: str,
  args: typing.Mapping[str] = None,
  kms_key: str = None,
  max_job_execution_lifetime: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec.property.serviceAccount">service_account</a></code> | <code>str</code> | Service account to use to execute a task. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec.property.args">args</a></code> | <code>typing.Mapping[str]</code> | The arguments to pass to the task. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec.property.kmsKey">kms_key</a></code> | <code>str</code> | The Cloud KMS key to use for encryption, of the form: projects/{project_number}/locations/{locationId}/keyRings/{key-ring-name}/cryptoKeys/{key-name}. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec.property.maxJobExecutionLifetime">max_job_execution_lifetime</a></code> | <code>str</code> | The maximum duration after which the job execution is expired. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec.property.project">project</a></code> | <code>str</code> | The project in which jobs are run. |

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Service account to use to execute a task.

If not provided, the default Compute service account for the project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#service_account DataplexTask#service_account}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec.property.args"></a>

```python
args: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The arguments to pass to the task.

The args can use placeholders of the format ${placeholder} as part of key/value string. These will be interpolated before passing the args to the driver. Currently supported placeholders: - ${taskId} - ${job_time} To pass positional args, set the key as TASK_ARGS. The value should be a comma-separated string of all the positional arguments. To use a delimiter other than comma, refer to https://cloud.google.com/sdk/gcloud/reference/topic/escaping. In case of other keys being present in the args, then TASK_ARGS will be passed as the last argument. An object containing a list of 'key': value pairs. Example: { 'name': 'wrench', 'mass': '1.3kg', 'count': '3' }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#args DataplexTask#args}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The Cloud KMS key to use for encryption, of the form: projects/{project_number}/locations/{locationId}/keyRings/{key-ring-name}/cryptoKeys/{key-name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#kms_key DataplexTask#kms_key}

---

##### `max_job_execution_lifetime`<sup>Optional</sup> <a name="max_job_execution_lifetime" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec.property.maxJobExecutionLifetime"></a>

```python
max_job_execution_lifetime: str
```

- *Type:* str

The maximum duration after which the job execution is expired.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#max_job_execution_lifetime DataplexTask#max_job_execution_lifetime}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec.property.project"></a>

```python
project: str
```

- *Type:* str

The project in which jobs are run.

By default, the project containing the Lake is used. If a project is provided, the ExecutionSpec.service_account must belong to this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#project DataplexTask#project}

---

### DataplexTaskExecutionStatus <a name="DataplexTaskExecutionStatus" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskExecutionStatus()
```


### DataplexTaskExecutionStatusLatestJob <a name="DataplexTaskExecutionStatusLatestJob" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJob.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskExecutionStatusLatestJob()
```


### DataplexTaskNotebook <a name="DataplexTaskNotebook" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebook.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskNotebook(
  notebook: str,
  archive_uris: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  infrastructure_spec: DataplexTaskNotebookInfrastructureSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebook.property.notebook">notebook</a></code> | <code>str</code> | Path to input notebook. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebook.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | Cloud Storage URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebook.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | Cloud Storage URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebook.property.infrastructureSpec">infrastructure_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec">DataplexTaskNotebookInfrastructureSpec</a></code> | infrastructure_spec block. |

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebook.property.notebook"></a>

```python
notebook: str
```

- *Type:* str

Path to input notebook.

This can be the Cloud Storage URI of the notebook file or the path to a Notebook Content. The execution args are accessible as environment variables (TASK_key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#notebook DataplexTask#notebook}

---

##### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebook.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

Cloud Storage URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#archive_uris DataplexTask#archive_uris}

---

##### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebook.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

Cloud Storage URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#file_uris DataplexTask#file_uris}

---

##### `infrastructure_spec`<sup>Optional</sup> <a name="infrastructure_spec" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebook.property.infrastructureSpec"></a>

```python
infrastructure_spec: DataplexTaskNotebookInfrastructureSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec">DataplexTaskNotebookInfrastructureSpec</a>

infrastructure_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#infrastructure_spec DataplexTask#infrastructure_spec}

---

### DataplexTaskNotebookInfrastructureSpec <a name="DataplexTaskNotebookInfrastructureSpec" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskNotebookInfrastructureSpec(
  batch: DataplexTaskNotebookInfrastructureSpecBatch = None,
  container_image: DataplexTaskNotebookInfrastructureSpecContainerImage = None,
  vpc_network: DataplexTaskNotebookInfrastructureSpecVpcNetwork = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec.property.batch">batch</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch">DataplexTaskNotebookInfrastructureSpecBatch</a></code> | batch block. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec.property.containerImage">container_image</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage">DataplexTaskNotebookInfrastructureSpecContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec.property.vpcNetwork">vpc_network</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork">DataplexTaskNotebookInfrastructureSpecVpcNetwork</a></code> | vpc_network block. |

---

##### `batch`<sup>Optional</sup> <a name="batch" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec.property.batch"></a>

```python
batch: DataplexTaskNotebookInfrastructureSpecBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch">DataplexTaskNotebookInfrastructureSpecBatch</a>

batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#batch DataplexTask#batch}

---

##### `container_image`<sup>Optional</sup> <a name="container_image" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec.property.containerImage"></a>

```python
container_image: DataplexTaskNotebookInfrastructureSpecContainerImage
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage">DataplexTaskNotebookInfrastructureSpecContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#container_image DataplexTask#container_image}

---

##### `vpc_network`<sup>Optional</sup> <a name="vpc_network" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec.property.vpcNetwork"></a>

```python
vpc_network: DataplexTaskNotebookInfrastructureSpecVpcNetwork
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork">DataplexTaskNotebookInfrastructureSpecVpcNetwork</a>

vpc_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#vpc_network DataplexTask#vpc_network}

---

### DataplexTaskNotebookInfrastructureSpecBatch <a name="DataplexTaskNotebookInfrastructureSpecBatch" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch(
  executors_count: typing.Union[int, float] = None,
  max_executors_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch.property.executorsCount">executors_count</a></code> | <code>typing.Union[int, float]</code> | Total number of job executors. Executor Count should be between 2 and 100. [Default=2]. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch.property.maxExecutorsCount">max_executors_count</a></code> | <code>typing.Union[int, float]</code> | Max configurable executors. |

---

##### `executors_count`<sup>Optional</sup> <a name="executors_count" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch.property.executorsCount"></a>

```python
executors_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Total number of job executors. Executor Count should be between 2 and 100. [Default=2].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#executors_count DataplexTask#executors_count}

---

##### `max_executors_count`<sup>Optional</sup> <a name="max_executors_count" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch.property.maxExecutorsCount"></a>

```python
max_executors_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max configurable executors.

If maxExecutorsCount > executorsCount, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. [Default=1000]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#max_executors_count DataplexTask#max_executors_count}

---

### DataplexTaskNotebookInfrastructureSpecContainerImage <a name="DataplexTaskNotebookInfrastructureSpecContainerImage" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage(
  image: str = None,
  java_jars: typing.List[str] = None,
  properties: typing.Mapping[str] = None,
  python_packages: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage.property.image">image</a></code> | <code>str</code> | Container image to use. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage.property.javaJars">java_jars</a></code> | <code>typing.List[str]</code> | A list of Java JARS to add to the classpath. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Override to common configuration of open source components installed on the Dataproc cluster. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage.property.pythonPackages">python_packages</a></code> | <code>typing.List[str]</code> | A list of python packages to be installed. |

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage.property.image"></a>

```python
image: str
```

- *Type:* str

Container image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#image DataplexTask#image}

---

##### `java_jars`<sup>Optional</sup> <a name="java_jars" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage.property.javaJars"></a>

```python
java_jars: typing.List[str]
```

- *Type:* typing.List[str]

A list of Java JARS to add to the classpath.

Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#java_jars DataplexTask#java_jars}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Override to common configuration of open source components installed on the Dataproc cluster.

The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#properties DataplexTask#properties}

---

##### `python_packages`<sup>Optional</sup> <a name="python_packages" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage.property.pythonPackages"></a>

```python
python_packages: typing.List[str]
```

- *Type:* typing.List[str]

A list of python packages to be installed.

Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#python_packages DataplexTask#python_packages}

---

### DataplexTaskNotebookInfrastructureSpecVpcNetwork <a name="DataplexTaskNotebookInfrastructureSpecVpcNetwork" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork(
  network: str = None,
  network_tags: typing.List[str] = None,
  sub_network: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork.property.network">network</a></code> | <code>str</code> | The Cloud VPC network in which the job is run. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork.property.networkTags">network_tags</a></code> | <code>typing.List[str]</code> | List of network tags to apply to the job. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork.property.subNetwork">sub_network</a></code> | <code>str</code> | The Cloud VPC sub-network in which the job is run. |

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork.property.network"></a>

```python
network: str
```

- *Type:* str

The Cloud VPC network in which the job is run.

By default, the Cloud VPC network named Default within the project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#network DataplexTask#network}

---

##### `network_tags`<sup>Optional</sup> <a name="network_tags" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork.property.networkTags"></a>

```python
network_tags: typing.List[str]
```

- *Type:* typing.List[str]

List of network tags to apply to the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#network_tags DataplexTask#network_tags}

---

##### `sub_network`<sup>Optional</sup> <a name="sub_network" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork.property.subNetwork"></a>

```python
sub_network: str
```

- *Type:* str

The Cloud VPC sub-network in which the job is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#sub_network DataplexTask#sub_network}

---

### DataplexTaskSpark <a name="DataplexTaskSpark" id="@cdktf/provider-google.dataplexTask.DataplexTaskSpark"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskSpark.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskSpark(
  archive_uris: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  infrastructure_spec: DataplexTaskSparkInfrastructureSpec = None,
  main_class: str = None,
  main_jar_file_uri: str = None,
  python_script_file: str = None,
  sql_script: str = None,
  sql_script_file: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | Cloud Storage URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | Cloud Storage URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.infrastructureSpec">infrastructure_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec">DataplexTaskSparkInfrastructureSpec</a></code> | infrastructure_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.mainClass">main_class</a></code> | <code>str</code> | The name of the driver's main class. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.mainJarFileUri">main_jar_file_uri</a></code> | <code>str</code> | The Cloud Storage URI of the jar file that contains the main class. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.pythonScriptFile">python_script_file</a></code> | <code>str</code> | The Gcloud Storage URI of the main Python file to use as the driver. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.sqlScript">sql_script</a></code> | <code>str</code> | The query text. The execution args are used to declare a set of script variables (set key='value';). |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.sqlScriptFile">sql_script_file</a></code> | <code>str</code> | A reference to a query file. |

---

##### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

Cloud Storage URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#archive_uris DataplexTask#archive_uris}

---

##### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

Cloud Storage URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#file_uris DataplexTask#file_uris}

---

##### `infrastructure_spec`<sup>Optional</sup> <a name="infrastructure_spec" id="@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.infrastructureSpec"></a>

```python
infrastructure_spec: DataplexTaskSparkInfrastructureSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec">DataplexTaskSparkInfrastructureSpec</a>

infrastructure_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#infrastructure_spec DataplexTask#infrastructure_spec}

---

##### `main_class`<sup>Optional</sup> <a name="main_class" id="@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.mainClass"></a>

```python
main_class: str
```

- *Type:* str

The name of the driver's main class.

The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris. The execution args are passed in as a sequence of named process arguments (--key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#main_class DataplexTask#main_class}

---

##### `main_jar_file_uri`<sup>Optional</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.mainJarFileUri"></a>

```python
main_jar_file_uri: str
```

- *Type:* str

The Cloud Storage URI of the jar file that contains the main class.

The execution args are passed in as a sequence of named process arguments (--key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#main_jar_file_uri DataplexTask#main_jar_file_uri}

---

##### `python_script_file`<sup>Optional</sup> <a name="python_script_file" id="@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.pythonScriptFile"></a>

```python
python_script_file: str
```

- *Type:* str

The Gcloud Storage URI of the main Python file to use as the driver.

Must be a .py file. The execution args are passed in as a sequence of named process arguments (--key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#python_script_file DataplexTask#python_script_file}

---

##### `sql_script`<sup>Optional</sup> <a name="sql_script" id="@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.sqlScript"></a>

```python
sql_script: str
```

- *Type:* str

The query text. The execution args are used to declare a set of script variables (set key='value';).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#sql_script DataplexTask#sql_script}

---

##### `sql_script_file`<sup>Optional</sup> <a name="sql_script_file" id="@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.sqlScriptFile"></a>

```python
sql_script_file: str
```

- *Type:* str

A reference to a query file.

This can be the Cloud Storage URI of the query file or it can the path to a SqlScript Content. The execution args are used to declare a set of script variables (set key='value';).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#sql_script_file DataplexTask#sql_script_file}

---

### DataplexTaskSparkInfrastructureSpec <a name="DataplexTaskSparkInfrastructureSpec" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskSparkInfrastructureSpec(
  batch: DataplexTaskSparkInfrastructureSpecBatch = None,
  container_image: DataplexTaskSparkInfrastructureSpecContainerImage = None,
  vpc_network: DataplexTaskSparkInfrastructureSpecVpcNetwork = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec.property.batch">batch</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch">DataplexTaskSparkInfrastructureSpecBatch</a></code> | batch block. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec.property.containerImage">container_image</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage">DataplexTaskSparkInfrastructureSpecContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec.property.vpcNetwork">vpc_network</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork">DataplexTaskSparkInfrastructureSpecVpcNetwork</a></code> | vpc_network block. |

---

##### `batch`<sup>Optional</sup> <a name="batch" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec.property.batch"></a>

```python
batch: DataplexTaskSparkInfrastructureSpecBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch">DataplexTaskSparkInfrastructureSpecBatch</a>

batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#batch DataplexTask#batch}

---

##### `container_image`<sup>Optional</sup> <a name="container_image" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec.property.containerImage"></a>

```python
container_image: DataplexTaskSparkInfrastructureSpecContainerImage
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage">DataplexTaskSparkInfrastructureSpecContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#container_image DataplexTask#container_image}

---

##### `vpc_network`<sup>Optional</sup> <a name="vpc_network" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec.property.vpcNetwork"></a>

```python
vpc_network: DataplexTaskSparkInfrastructureSpecVpcNetwork
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork">DataplexTaskSparkInfrastructureSpecVpcNetwork</a>

vpc_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#vpc_network DataplexTask#vpc_network}

---

### DataplexTaskSparkInfrastructureSpecBatch <a name="DataplexTaskSparkInfrastructureSpecBatch" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskSparkInfrastructureSpecBatch(
  executors_count: typing.Union[int, float] = None,
  max_executors_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch.property.executorsCount">executors_count</a></code> | <code>typing.Union[int, float]</code> | Total number of job executors. Executor Count should be between 2 and 100. [Default=2]. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch.property.maxExecutorsCount">max_executors_count</a></code> | <code>typing.Union[int, float]</code> | Max configurable executors. |

---

##### `executors_count`<sup>Optional</sup> <a name="executors_count" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch.property.executorsCount"></a>

```python
executors_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Total number of job executors. Executor Count should be between 2 and 100. [Default=2].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#executors_count DataplexTask#executors_count}

---

##### `max_executors_count`<sup>Optional</sup> <a name="max_executors_count" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch.property.maxExecutorsCount"></a>

```python
max_executors_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max configurable executors.

If maxExecutorsCount > executorsCount, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. [Default=1000]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#max_executors_count DataplexTask#max_executors_count}

---

### DataplexTaskSparkInfrastructureSpecContainerImage <a name="DataplexTaskSparkInfrastructureSpecContainerImage" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage(
  image: str = None,
  java_jars: typing.List[str] = None,
  properties: typing.Mapping[str] = None,
  python_packages: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage.property.image">image</a></code> | <code>str</code> | Container image to use. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage.property.javaJars">java_jars</a></code> | <code>typing.List[str]</code> | A list of Java JARS to add to the classpath. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Override to common configuration of open source components installed on the Dataproc cluster. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage.property.pythonPackages">python_packages</a></code> | <code>typing.List[str]</code> | A list of python packages to be installed. |

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage.property.image"></a>

```python
image: str
```

- *Type:* str

Container image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#image DataplexTask#image}

---

##### `java_jars`<sup>Optional</sup> <a name="java_jars" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage.property.javaJars"></a>

```python
java_jars: typing.List[str]
```

- *Type:* typing.List[str]

A list of Java JARS to add to the classpath.

Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#java_jars DataplexTask#java_jars}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Override to common configuration of open source components installed on the Dataproc cluster.

The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#properties DataplexTask#properties}

---

##### `python_packages`<sup>Optional</sup> <a name="python_packages" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage.property.pythonPackages"></a>

```python
python_packages: typing.List[str]
```

- *Type:* typing.List[str]

A list of python packages to be installed.

Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#python_packages DataplexTask#python_packages}

---

### DataplexTaskSparkInfrastructureSpecVpcNetwork <a name="DataplexTaskSparkInfrastructureSpecVpcNetwork" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork(
  network: str = None,
  network_tags: typing.List[str] = None,
  sub_network: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork.property.network">network</a></code> | <code>str</code> | The Cloud VPC network in which the job is run. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork.property.networkTags">network_tags</a></code> | <code>typing.List[str]</code> | List of network tags to apply to the job. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork.property.subNetwork">sub_network</a></code> | <code>str</code> | The Cloud VPC sub-network in which the job is run. |

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork.property.network"></a>

```python
network: str
```

- *Type:* str

The Cloud VPC network in which the job is run.

By default, the Cloud VPC network named Default within the project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#network DataplexTask#network}

---

##### `network_tags`<sup>Optional</sup> <a name="network_tags" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork.property.networkTags"></a>

```python
network_tags: typing.List[str]
```

- *Type:* typing.List[str]

List of network tags to apply to the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#network_tags DataplexTask#network_tags}

---

##### `sub_network`<sup>Optional</sup> <a name="sub_network" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork.property.subNetwork"></a>

```python
sub_network: str
```

- *Type:* str

The Cloud VPC sub-network in which the job is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#sub_network DataplexTask#sub_network}

---

### DataplexTaskTimeouts <a name="DataplexTaskTimeouts" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#create DataplexTask#create}. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#delete DataplexTask#delete}. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#update DataplexTask#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#create DataplexTask#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#delete DataplexTask#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#update DataplexTask#update}.

---

### DataplexTaskTriggerSpec <a name="DataplexTaskTriggerSpec" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskTriggerSpec(
  type: str,
  disabled: typing.Union[bool, IResolvable] = None,
  max_retries: typing.Union[int, float] = None,
  schedule: str = None,
  start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec.property.type">type</a></code> | <code>str</code> | Trigger type of the user-specified Task Possible values: ["ON_DEMAND", "RECURRING"]. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Prevent the task from executing. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec.property.schedule">schedule</a></code> | <code>str</code> | Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: 'CRON_TZ=${IANA_TIME_ZONE}' or 'TZ=${IANA_TIME_ZONE}'. The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. This field is required for RECURRING tasks. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec.property.startTime">start_time</a></code> | <code>str</code> | The first run of the task will be after this time. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec.property.type"></a>

```python
type: str
```

- *Type:* str

Trigger type of the user-specified Task Possible values: ["ON_DEMAND", "RECURRING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#type DataplexTask#type}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Prevent the task from executing.

This does not cancel already running tasks. It is intended to temporarily disable RECURRING tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#disabled DataplexTask#disabled}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#max_retries DataplexTask#max_retries}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: 'CRON_TZ=${IANA_TIME_ZONE}' or 'TZ=${IANA_TIME_ZONE}'. The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. This field is required for RECURRING tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#schedule DataplexTask#schedule}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

The first run of the task will be after this time.

If not specified, the task will run shortly after being submitted if ON_DEMAND and based on the schedule if RECURRING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#start_time DataplexTask#start_time}

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexTaskExecutionSpecOutputReference <a name="DataplexTaskExecutionSpecOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskExecutionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.resetMaxJobExecutionLifetime">reset_max_job_execution_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.resetProject">reset_project</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_args` <a name="reset_args" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_max_job_execution_lifetime` <a name="reset_max_job_execution_lifetime" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.resetMaxJobExecutionLifetime"></a>

```python
def reset_max_job_execution_lifetime() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.resetProject"></a>

```python
def reset_project() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.argsInput">args_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.maxJobExecutionLifetimeInput">max_job_execution_lifetime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.args">args</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.maxJobExecutionLifetime">max_job_execution_lifetime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec">DataplexTaskExecutionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.argsInput"></a>

```python
args_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `max_job_execution_lifetime_input`<sup>Optional</sup> <a name="max_job_execution_lifetime_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.maxJobExecutionLifetimeInput"></a>

```python
max_job_execution_lifetime_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.args"></a>

```python
args: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `max_job_execution_lifetime`<sup>Required</sup> <a name="max_job_execution_lifetime" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.maxJobExecutionLifetime"></a>

```python
max_job_execution_lifetime: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataplexTaskExecutionSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec">DataplexTaskExecutionSpec</a>

---


### DataplexTaskExecutionStatusLatestJobList <a name="DataplexTaskExecutionStatusLatestJobList" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskExecutionStatusLatestJobList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataplexTaskExecutionStatusLatestJobOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataplexTaskExecutionStatusLatestJobOutputReference <a name="DataplexTaskExecutionStatusLatestJobOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.retryCount">retry_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.serviceJob">service_job</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJob">DataplexTaskExecutionStatusLatestJob</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `retry_count`<sup>Required</sup> <a name="retry_count" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.retryCount"></a>

```python
retry_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `service_job`<sup>Required</sup> <a name="service_job" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.serviceJob"></a>

```python
service_job: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.internalValue"></a>

```python
internal_value: DataplexTaskExecutionStatusLatestJob
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJob">DataplexTaskExecutionStatusLatestJob</a>

---


### DataplexTaskExecutionStatusList <a name="DataplexTaskExecutionStatusList" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskExecutionStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataplexTaskExecutionStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataplexTaskExecutionStatusOutputReference <a name="DataplexTaskExecutionStatusOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskExecutionStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.property.latestJob">latest_job</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList">DataplexTaskExecutionStatusLatestJobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatus">DataplexTaskExecutionStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `latest_job`<sup>Required</sup> <a name="latest_job" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.property.latestJob"></a>

```python
latest_job: DataplexTaskExecutionStatusLatestJobList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList">DataplexTaskExecutionStatusLatestJobList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataplexTaskExecutionStatus
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatus">DataplexTaskExecutionStatus</a>

---


### DataplexTaskNotebookInfrastructureSpecBatchOutputReference <a name="DataplexTaskNotebookInfrastructureSpecBatchOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.resetExecutorsCount">reset_executors_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.resetMaxExecutorsCount">reset_max_executors_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_executors_count` <a name="reset_executors_count" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.resetExecutorsCount"></a>

```python
def reset_executors_count() -> None
```

##### `reset_max_executors_count` <a name="reset_max_executors_count" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.resetMaxExecutorsCount"></a>

```python
def reset_max_executors_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.executorsCountInput">executors_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.maxExecutorsCountInput">max_executors_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.executorsCount">executors_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.maxExecutorsCount">max_executors_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch">DataplexTaskNotebookInfrastructureSpecBatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `executors_count_input`<sup>Optional</sup> <a name="executors_count_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.executorsCountInput"></a>

```python
executors_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_executors_count_input`<sup>Optional</sup> <a name="max_executors_count_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.maxExecutorsCountInput"></a>

```python
max_executors_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `executors_count`<sup>Required</sup> <a name="executors_count" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.executorsCount"></a>

```python
executors_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_executors_count`<sup>Required</sup> <a name="max_executors_count" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.maxExecutorsCount"></a>

```python
max_executors_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.internalValue"></a>

```python
internal_value: DataplexTaskNotebookInfrastructureSpecBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch">DataplexTaskNotebookInfrastructureSpecBatch</a>

---


### DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference <a name="DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetImage">reset_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetJavaJars">reset_java_jars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetPythonPackages">reset_python_packages</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_image` <a name="reset_image" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetImage"></a>

```python
def reset_image() -> None
```

##### `reset_java_jars` <a name="reset_java_jars" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetJavaJars"></a>

```python
def reset_java_jars() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_python_packages` <a name="reset_python_packages" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetPythonPackages"></a>

```python
def reset_python_packages() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.javaJarsInput">java_jars_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.pythonPackagesInput">python_packages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.javaJars">java_jars</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.pythonPackages">python_packages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage">DataplexTaskNotebookInfrastructureSpecContainerImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `java_jars_input`<sup>Optional</sup> <a name="java_jars_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.javaJarsInput"></a>

```python
java_jars_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `python_packages_input`<sup>Optional</sup> <a name="python_packages_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.pythonPackagesInput"></a>

```python
python_packages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `java_jars`<sup>Required</sup> <a name="java_jars" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.javaJars"></a>

```python
java_jars: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `python_packages`<sup>Required</sup> <a name="python_packages" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.pythonPackages"></a>

```python
python_packages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.internalValue"></a>

```python
internal_value: DataplexTaskNotebookInfrastructureSpecContainerImage
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage">DataplexTaskNotebookInfrastructureSpecContainerImage</a>

---


### DataplexTaskNotebookInfrastructureSpecOutputReference <a name="DataplexTaskNotebookInfrastructureSpecOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.putBatch">put_batch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.putContainerImage">put_container_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.putVpcNetwork">put_vpc_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.resetBatch">reset_batch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.resetContainerImage">reset_container_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.resetVpcNetwork">reset_vpc_network</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_batch` <a name="put_batch" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.putBatch"></a>

```python
def put_batch(
  executors_count: typing.Union[int, float] = None,
  max_executors_count: typing.Union[int, float] = None
) -> None
```

###### `executors_count`<sup>Optional</sup> <a name="executors_count" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.putBatch.parameter.executorsCount"></a>

- *Type:* typing.Union[int, float]

Total number of job executors. Executor Count should be between 2 and 100. [Default=2].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#executors_count DataplexTask#executors_count}

---

###### `max_executors_count`<sup>Optional</sup> <a name="max_executors_count" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.putBatch.parameter.maxExecutorsCount"></a>

- *Type:* typing.Union[int, float]

Max configurable executors.

If maxExecutorsCount > executorsCount, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. [Default=1000]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#max_executors_count DataplexTask#max_executors_count}

---

##### `put_container_image` <a name="put_container_image" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.putContainerImage"></a>

```python
def put_container_image(
  image: str = None,
  java_jars: typing.List[str] = None,
  properties: typing.Mapping[str] = None,
  python_packages: typing.List[str] = None
) -> None
```

###### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.putContainerImage.parameter.image"></a>

- *Type:* str

Container image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#image DataplexTask#image}

---

###### `java_jars`<sup>Optional</sup> <a name="java_jars" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.putContainerImage.parameter.javaJars"></a>

- *Type:* typing.List[str]

A list of Java JARS to add to the classpath.

Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#java_jars DataplexTask#java_jars}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.putContainerImage.parameter.properties"></a>

- *Type:* typing.Mapping[str]

Override to common configuration of open source components installed on the Dataproc cluster.

The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#properties DataplexTask#properties}

---

###### `python_packages`<sup>Optional</sup> <a name="python_packages" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.putContainerImage.parameter.pythonPackages"></a>

- *Type:* typing.List[str]

A list of python packages to be installed.

Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#python_packages DataplexTask#python_packages}

---

##### `put_vpc_network` <a name="put_vpc_network" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.putVpcNetwork"></a>

```python
def put_vpc_network(
  network: str = None,
  network_tags: typing.List[str] = None,
  sub_network: str = None
) -> None
```

###### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.putVpcNetwork.parameter.network"></a>

- *Type:* str

The Cloud VPC network in which the job is run.

By default, the Cloud VPC network named Default within the project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#network DataplexTask#network}

---

###### `network_tags`<sup>Optional</sup> <a name="network_tags" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.putVpcNetwork.parameter.networkTags"></a>

- *Type:* typing.List[str]

List of network tags to apply to the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#network_tags DataplexTask#network_tags}

---

###### `sub_network`<sup>Optional</sup> <a name="sub_network" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.putVpcNetwork.parameter.subNetwork"></a>

- *Type:* str

The Cloud VPC sub-network in which the job is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#sub_network DataplexTask#sub_network}

---

##### `reset_batch` <a name="reset_batch" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.resetBatch"></a>

```python
def reset_batch() -> None
```

##### `reset_container_image` <a name="reset_container_image" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.resetContainerImage"></a>

```python
def reset_container_image() -> None
```

##### `reset_vpc_network` <a name="reset_vpc_network" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.resetVpcNetwork"></a>

```python
def reset_vpc_network() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.batch">batch</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference">DataplexTaskNotebookInfrastructureSpecBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.containerImage">container_image</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference">DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.vpcNetwork">vpc_network</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference">DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.batchInput">batch_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch">DataplexTaskNotebookInfrastructureSpecBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.containerImageInput">container_image_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage">DataplexTaskNotebookInfrastructureSpecContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.vpcNetworkInput">vpc_network_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork">DataplexTaskNotebookInfrastructureSpecVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec">DataplexTaskNotebookInfrastructureSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch`<sup>Required</sup> <a name="batch" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.batch"></a>

```python
batch: DataplexTaskNotebookInfrastructureSpecBatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference">DataplexTaskNotebookInfrastructureSpecBatchOutputReference</a>

---

##### `container_image`<sup>Required</sup> <a name="container_image" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.containerImage"></a>

```python
container_image: DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference">DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference</a>

---

##### `vpc_network`<sup>Required</sup> <a name="vpc_network" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.vpcNetwork"></a>

```python
vpc_network: DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference">DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference</a>

---

##### `batch_input`<sup>Optional</sup> <a name="batch_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.batchInput"></a>

```python
batch_input: DataplexTaskNotebookInfrastructureSpecBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch">DataplexTaskNotebookInfrastructureSpecBatch</a>

---

##### `container_image_input`<sup>Optional</sup> <a name="container_image_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.containerImageInput"></a>

```python
container_image_input: DataplexTaskNotebookInfrastructureSpecContainerImage
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage">DataplexTaskNotebookInfrastructureSpecContainerImage</a>

---

##### `vpc_network_input`<sup>Optional</sup> <a name="vpc_network_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.vpcNetworkInput"></a>

```python
vpc_network_input: DataplexTaskNotebookInfrastructureSpecVpcNetwork
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork">DataplexTaskNotebookInfrastructureSpecVpcNetwork</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataplexTaskNotebookInfrastructureSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec">DataplexTaskNotebookInfrastructureSpec</a>

---


### DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference <a name="DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetNetworkTags">reset_network_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetSubNetwork">reset_sub_network</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_network_tags` <a name="reset_network_tags" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetNetworkTags"></a>

```python
def reset_network_tags() -> None
```

##### `reset_sub_network` <a name="reset_sub_network" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetSubNetwork"></a>

```python
def reset_sub_network() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkTagsInput">network_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.subNetworkInput">sub_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkTags">network_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.subNetwork">sub_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork">DataplexTaskNotebookInfrastructureSpecVpcNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `network_tags_input`<sup>Optional</sup> <a name="network_tags_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkTagsInput"></a>

```python
network_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sub_network_input`<sup>Optional</sup> <a name="sub_network_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.subNetworkInput"></a>

```python
sub_network_input: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `network_tags`<sup>Required</sup> <a name="network_tags" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkTags"></a>

```python
network_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sub_network`<sup>Required</sup> <a name="sub_network" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.subNetwork"></a>

```python
sub_network: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.internalValue"></a>

```python
internal_value: DataplexTaskNotebookInfrastructureSpecVpcNetwork
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork">DataplexTaskNotebookInfrastructureSpecVpcNetwork</a>

---


### DataplexTaskNotebookOutputReference <a name="DataplexTaskNotebookOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskNotebookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.putInfrastructureSpec">put_infrastructure_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.resetArchiveUris">reset_archive_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.resetFileUris">reset_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.resetInfrastructureSpec">reset_infrastructure_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_infrastructure_spec` <a name="put_infrastructure_spec" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.putInfrastructureSpec"></a>

```python
def put_infrastructure_spec(
  batch: DataplexTaskNotebookInfrastructureSpecBatch = None,
  container_image: DataplexTaskNotebookInfrastructureSpecContainerImage = None,
  vpc_network: DataplexTaskNotebookInfrastructureSpecVpcNetwork = None
) -> None
```

###### `batch`<sup>Optional</sup> <a name="batch" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.putInfrastructureSpec.parameter.batch"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch">DataplexTaskNotebookInfrastructureSpecBatch</a>

batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#batch DataplexTask#batch}

---

###### `container_image`<sup>Optional</sup> <a name="container_image" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.putInfrastructureSpec.parameter.containerImage"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage">DataplexTaskNotebookInfrastructureSpecContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#container_image DataplexTask#container_image}

---

###### `vpc_network`<sup>Optional</sup> <a name="vpc_network" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.putInfrastructureSpec.parameter.vpcNetwork"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork">DataplexTaskNotebookInfrastructureSpecVpcNetwork</a>

vpc_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#vpc_network DataplexTask#vpc_network}

---

##### `reset_archive_uris` <a name="reset_archive_uris" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.resetArchiveUris"></a>

```python
def reset_archive_uris() -> None
```

##### `reset_file_uris` <a name="reset_file_uris" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.resetFileUris"></a>

```python
def reset_file_uris() -> None
```

##### `reset_infrastructure_spec` <a name="reset_infrastructure_spec" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.resetInfrastructureSpec"></a>

```python
def reset_infrastructure_spec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.infrastructureSpec">infrastructure_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference">DataplexTaskNotebookInfrastructureSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.archiveUrisInput">archive_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.fileUrisInput">file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.infrastructureSpecInput">infrastructure_spec_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec">DataplexTaskNotebookInfrastructureSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.notebookInput">notebook_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.notebook">notebook</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebook">DataplexTaskNotebook</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `infrastructure_spec`<sup>Required</sup> <a name="infrastructure_spec" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.infrastructureSpec"></a>

```python
infrastructure_spec: DataplexTaskNotebookInfrastructureSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference">DataplexTaskNotebookInfrastructureSpecOutputReference</a>

---

##### `archive_uris_input`<sup>Optional</sup> <a name="archive_uris_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.archiveUrisInput"></a>

```python
archive_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris_input`<sup>Optional</sup> <a name="file_uris_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.fileUrisInput"></a>

```python
file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `infrastructure_spec_input`<sup>Optional</sup> <a name="infrastructure_spec_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.infrastructureSpecInput"></a>

```python
infrastructure_spec_input: DataplexTaskNotebookInfrastructureSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec">DataplexTaskNotebookInfrastructureSpec</a>

---

##### `notebook_input`<sup>Optional</sup> <a name="notebook_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.notebookInput"></a>

```python
notebook_input: str
```

- *Type:* str

---

##### `archive_uris`<sup>Required</sup> <a name="archive_uris" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris`<sup>Required</sup> <a name="file_uris" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.notebook"></a>

```python
notebook: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.internalValue"></a>

```python
internal_value: DataplexTaskNotebook
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebook">DataplexTaskNotebook</a>

---


### DataplexTaskSparkInfrastructureSpecBatchOutputReference <a name="DataplexTaskSparkInfrastructureSpecBatchOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.resetExecutorsCount">reset_executors_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.resetMaxExecutorsCount">reset_max_executors_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_executors_count` <a name="reset_executors_count" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.resetExecutorsCount"></a>

```python
def reset_executors_count() -> None
```

##### `reset_max_executors_count` <a name="reset_max_executors_count" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.resetMaxExecutorsCount"></a>

```python
def reset_max_executors_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.executorsCountInput">executors_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.maxExecutorsCountInput">max_executors_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.executorsCount">executors_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.maxExecutorsCount">max_executors_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch">DataplexTaskSparkInfrastructureSpecBatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `executors_count_input`<sup>Optional</sup> <a name="executors_count_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.executorsCountInput"></a>

```python
executors_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_executors_count_input`<sup>Optional</sup> <a name="max_executors_count_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.maxExecutorsCountInput"></a>

```python
max_executors_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `executors_count`<sup>Required</sup> <a name="executors_count" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.executorsCount"></a>

```python
executors_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_executors_count`<sup>Required</sup> <a name="max_executors_count" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.maxExecutorsCount"></a>

```python
max_executors_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.internalValue"></a>

```python
internal_value: DataplexTaskSparkInfrastructureSpecBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch">DataplexTaskSparkInfrastructureSpecBatch</a>

---


### DataplexTaskSparkInfrastructureSpecContainerImageOutputReference <a name="DataplexTaskSparkInfrastructureSpecContainerImageOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetImage">reset_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetJavaJars">reset_java_jars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetPythonPackages">reset_python_packages</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_image` <a name="reset_image" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetImage"></a>

```python
def reset_image() -> None
```

##### `reset_java_jars` <a name="reset_java_jars" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetJavaJars"></a>

```python
def reset_java_jars() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_python_packages` <a name="reset_python_packages" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetPythonPackages"></a>

```python
def reset_python_packages() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.javaJarsInput">java_jars_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.pythonPackagesInput">python_packages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.javaJars">java_jars</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.pythonPackages">python_packages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage">DataplexTaskSparkInfrastructureSpecContainerImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `java_jars_input`<sup>Optional</sup> <a name="java_jars_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.javaJarsInput"></a>

```python
java_jars_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `python_packages_input`<sup>Optional</sup> <a name="python_packages_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.pythonPackagesInput"></a>

```python
python_packages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `java_jars`<sup>Required</sup> <a name="java_jars" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.javaJars"></a>

```python
java_jars: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `python_packages`<sup>Required</sup> <a name="python_packages" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.pythonPackages"></a>

```python
python_packages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.internalValue"></a>

```python
internal_value: DataplexTaskSparkInfrastructureSpecContainerImage
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage">DataplexTaskSparkInfrastructureSpecContainerImage</a>

---


### DataplexTaskSparkInfrastructureSpecOutputReference <a name="DataplexTaskSparkInfrastructureSpecOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.putBatch">put_batch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.putContainerImage">put_container_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.putVpcNetwork">put_vpc_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.resetBatch">reset_batch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.resetContainerImage">reset_container_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.resetVpcNetwork">reset_vpc_network</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_batch` <a name="put_batch" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.putBatch"></a>

```python
def put_batch(
  executors_count: typing.Union[int, float] = None,
  max_executors_count: typing.Union[int, float] = None
) -> None
```

###### `executors_count`<sup>Optional</sup> <a name="executors_count" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.putBatch.parameter.executorsCount"></a>

- *Type:* typing.Union[int, float]

Total number of job executors. Executor Count should be between 2 and 100. [Default=2].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#executors_count DataplexTask#executors_count}

---

###### `max_executors_count`<sup>Optional</sup> <a name="max_executors_count" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.putBatch.parameter.maxExecutorsCount"></a>

- *Type:* typing.Union[int, float]

Max configurable executors.

If maxExecutorsCount > executorsCount, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. [Default=1000]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#max_executors_count DataplexTask#max_executors_count}

---

##### `put_container_image` <a name="put_container_image" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.putContainerImage"></a>

```python
def put_container_image(
  image: str = None,
  java_jars: typing.List[str] = None,
  properties: typing.Mapping[str] = None,
  python_packages: typing.List[str] = None
) -> None
```

###### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.putContainerImage.parameter.image"></a>

- *Type:* str

Container image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#image DataplexTask#image}

---

###### `java_jars`<sup>Optional</sup> <a name="java_jars" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.putContainerImage.parameter.javaJars"></a>

- *Type:* typing.List[str]

A list of Java JARS to add to the classpath.

Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#java_jars DataplexTask#java_jars}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.putContainerImage.parameter.properties"></a>

- *Type:* typing.Mapping[str]

Override to common configuration of open source components installed on the Dataproc cluster.

The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#properties DataplexTask#properties}

---

###### `python_packages`<sup>Optional</sup> <a name="python_packages" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.putContainerImage.parameter.pythonPackages"></a>

- *Type:* typing.List[str]

A list of python packages to be installed.

Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#python_packages DataplexTask#python_packages}

---

##### `put_vpc_network` <a name="put_vpc_network" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.putVpcNetwork"></a>

```python
def put_vpc_network(
  network: str = None,
  network_tags: typing.List[str] = None,
  sub_network: str = None
) -> None
```

###### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.putVpcNetwork.parameter.network"></a>

- *Type:* str

The Cloud VPC network in which the job is run.

By default, the Cloud VPC network named Default within the project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#network DataplexTask#network}

---

###### `network_tags`<sup>Optional</sup> <a name="network_tags" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.putVpcNetwork.parameter.networkTags"></a>

- *Type:* typing.List[str]

List of network tags to apply to the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#network_tags DataplexTask#network_tags}

---

###### `sub_network`<sup>Optional</sup> <a name="sub_network" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.putVpcNetwork.parameter.subNetwork"></a>

- *Type:* str

The Cloud VPC sub-network in which the job is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#sub_network DataplexTask#sub_network}

---

##### `reset_batch` <a name="reset_batch" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.resetBatch"></a>

```python
def reset_batch() -> None
```

##### `reset_container_image` <a name="reset_container_image" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.resetContainerImage"></a>

```python
def reset_container_image() -> None
```

##### `reset_vpc_network` <a name="reset_vpc_network" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.resetVpcNetwork"></a>

```python
def reset_vpc_network() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.batch">batch</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference">DataplexTaskSparkInfrastructureSpecBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.containerImage">container_image</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference">DataplexTaskSparkInfrastructureSpecContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.vpcNetwork">vpc_network</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference">DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.batchInput">batch_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch">DataplexTaskSparkInfrastructureSpecBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.containerImageInput">container_image_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage">DataplexTaskSparkInfrastructureSpecContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.vpcNetworkInput">vpc_network_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork">DataplexTaskSparkInfrastructureSpecVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec">DataplexTaskSparkInfrastructureSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch`<sup>Required</sup> <a name="batch" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.batch"></a>

```python
batch: DataplexTaskSparkInfrastructureSpecBatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference">DataplexTaskSparkInfrastructureSpecBatchOutputReference</a>

---

##### `container_image`<sup>Required</sup> <a name="container_image" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.containerImage"></a>

```python
container_image: DataplexTaskSparkInfrastructureSpecContainerImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference">DataplexTaskSparkInfrastructureSpecContainerImageOutputReference</a>

---

##### `vpc_network`<sup>Required</sup> <a name="vpc_network" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.vpcNetwork"></a>

```python
vpc_network: DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference">DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference</a>

---

##### `batch_input`<sup>Optional</sup> <a name="batch_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.batchInput"></a>

```python
batch_input: DataplexTaskSparkInfrastructureSpecBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch">DataplexTaskSparkInfrastructureSpecBatch</a>

---

##### `container_image_input`<sup>Optional</sup> <a name="container_image_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.containerImageInput"></a>

```python
container_image_input: DataplexTaskSparkInfrastructureSpecContainerImage
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage">DataplexTaskSparkInfrastructureSpecContainerImage</a>

---

##### `vpc_network_input`<sup>Optional</sup> <a name="vpc_network_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.vpcNetworkInput"></a>

```python
vpc_network_input: DataplexTaskSparkInfrastructureSpecVpcNetwork
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork">DataplexTaskSparkInfrastructureSpecVpcNetwork</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataplexTaskSparkInfrastructureSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec">DataplexTaskSparkInfrastructureSpec</a>

---


### DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference <a name="DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetNetworkTags">reset_network_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetSubNetwork">reset_sub_network</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_network_tags` <a name="reset_network_tags" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetNetworkTags"></a>

```python
def reset_network_tags() -> None
```

##### `reset_sub_network` <a name="reset_sub_network" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetSubNetwork"></a>

```python
def reset_sub_network() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkTagsInput">network_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.subNetworkInput">sub_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkTags">network_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.subNetwork">sub_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork">DataplexTaskSparkInfrastructureSpecVpcNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `network_tags_input`<sup>Optional</sup> <a name="network_tags_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkTagsInput"></a>

```python
network_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sub_network_input`<sup>Optional</sup> <a name="sub_network_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.subNetworkInput"></a>

```python
sub_network_input: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `network_tags`<sup>Required</sup> <a name="network_tags" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkTags"></a>

```python
network_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sub_network`<sup>Required</sup> <a name="sub_network" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.subNetwork"></a>

```python
sub_network: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.internalValue"></a>

```python
internal_value: DataplexTaskSparkInfrastructureSpecVpcNetwork
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork">DataplexTaskSparkInfrastructureSpecVpcNetwork</a>

---


### DataplexTaskSparkOutputReference <a name="DataplexTaskSparkOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskSparkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.putInfrastructureSpec">put_infrastructure_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetArchiveUris">reset_archive_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetFileUris">reset_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetInfrastructureSpec">reset_infrastructure_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetMainClass">reset_main_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetMainJarFileUri">reset_main_jar_file_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetPythonScriptFile">reset_python_script_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetSqlScript">reset_sql_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetSqlScriptFile">reset_sql_script_file</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_infrastructure_spec` <a name="put_infrastructure_spec" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.putInfrastructureSpec"></a>

```python
def put_infrastructure_spec(
  batch: DataplexTaskSparkInfrastructureSpecBatch = None,
  container_image: DataplexTaskSparkInfrastructureSpecContainerImage = None,
  vpc_network: DataplexTaskSparkInfrastructureSpecVpcNetwork = None
) -> None
```

###### `batch`<sup>Optional</sup> <a name="batch" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.putInfrastructureSpec.parameter.batch"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch">DataplexTaskSparkInfrastructureSpecBatch</a>

batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#batch DataplexTask#batch}

---

###### `container_image`<sup>Optional</sup> <a name="container_image" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.putInfrastructureSpec.parameter.containerImage"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage">DataplexTaskSparkInfrastructureSpecContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#container_image DataplexTask#container_image}

---

###### `vpc_network`<sup>Optional</sup> <a name="vpc_network" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.putInfrastructureSpec.parameter.vpcNetwork"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork">DataplexTaskSparkInfrastructureSpecVpcNetwork</a>

vpc_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/dataplex_task#vpc_network DataplexTask#vpc_network}

---

##### `reset_archive_uris` <a name="reset_archive_uris" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetArchiveUris"></a>

```python
def reset_archive_uris() -> None
```

##### `reset_file_uris` <a name="reset_file_uris" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetFileUris"></a>

```python
def reset_file_uris() -> None
```

##### `reset_infrastructure_spec` <a name="reset_infrastructure_spec" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetInfrastructureSpec"></a>

```python
def reset_infrastructure_spec() -> None
```

##### `reset_main_class` <a name="reset_main_class" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetMainClass"></a>

```python
def reset_main_class() -> None
```

##### `reset_main_jar_file_uri` <a name="reset_main_jar_file_uri" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetMainJarFileUri"></a>

```python
def reset_main_jar_file_uri() -> None
```

##### `reset_python_script_file` <a name="reset_python_script_file" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetPythonScriptFile"></a>

```python
def reset_python_script_file() -> None
```

##### `reset_sql_script` <a name="reset_sql_script" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetSqlScript"></a>

```python
def reset_sql_script() -> None
```

##### `reset_sql_script_file` <a name="reset_sql_script_file" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetSqlScriptFile"></a>

```python
def reset_sql_script_file() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.infrastructureSpec">infrastructure_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference">DataplexTaskSparkInfrastructureSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.archiveUrisInput">archive_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.fileUrisInput">file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.infrastructureSpecInput">infrastructure_spec_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec">DataplexTaskSparkInfrastructureSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.mainClassInput">main_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.mainJarFileUriInput">main_jar_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.pythonScriptFileInput">python_script_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.sqlScriptFileInput">sql_script_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.sqlScriptInput">sql_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.mainClass">main_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.mainJarFileUri">main_jar_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.pythonScriptFile">python_script_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.sqlScript">sql_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.sqlScriptFile">sql_script_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark">DataplexTaskSpark</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `infrastructure_spec`<sup>Required</sup> <a name="infrastructure_spec" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.infrastructureSpec"></a>

```python
infrastructure_spec: DataplexTaskSparkInfrastructureSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference">DataplexTaskSparkInfrastructureSpecOutputReference</a>

---

##### `archive_uris_input`<sup>Optional</sup> <a name="archive_uris_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.archiveUrisInput"></a>

```python
archive_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris_input`<sup>Optional</sup> <a name="file_uris_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.fileUrisInput"></a>

```python
file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `infrastructure_spec_input`<sup>Optional</sup> <a name="infrastructure_spec_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.infrastructureSpecInput"></a>

```python
infrastructure_spec_input: DataplexTaskSparkInfrastructureSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec">DataplexTaskSparkInfrastructureSpec</a>

---

##### `main_class_input`<sup>Optional</sup> <a name="main_class_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.mainClassInput"></a>

```python
main_class_input: str
```

- *Type:* str

---

##### `main_jar_file_uri_input`<sup>Optional</sup> <a name="main_jar_file_uri_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.mainJarFileUriInput"></a>

```python
main_jar_file_uri_input: str
```

- *Type:* str

---

##### `python_script_file_input`<sup>Optional</sup> <a name="python_script_file_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.pythonScriptFileInput"></a>

```python
python_script_file_input: str
```

- *Type:* str

---

##### `sql_script_file_input`<sup>Optional</sup> <a name="sql_script_file_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.sqlScriptFileInput"></a>

```python
sql_script_file_input: str
```

- *Type:* str

---

##### `sql_script_input`<sup>Optional</sup> <a name="sql_script_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.sqlScriptInput"></a>

```python
sql_script_input: str
```

- *Type:* str

---

##### `archive_uris`<sup>Required</sup> <a name="archive_uris" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris`<sup>Required</sup> <a name="file_uris" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_class`<sup>Required</sup> <a name="main_class" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.mainClass"></a>

```python
main_class: str
```

- *Type:* str

---

##### `main_jar_file_uri`<sup>Required</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.mainJarFileUri"></a>

```python
main_jar_file_uri: str
```

- *Type:* str

---

##### `python_script_file`<sup>Required</sup> <a name="python_script_file" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.pythonScriptFile"></a>

```python
python_script_file: str
```

- *Type:* str

---

##### `sql_script`<sup>Required</sup> <a name="sql_script" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.sqlScript"></a>

```python
sql_script: str
```

- *Type:* str

---

##### `sql_script_file`<sup>Required</sup> <a name="sql_script_file" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.sqlScriptFile"></a>

```python
sql_script_file: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.internalValue"></a>

```python
internal_value: DataplexTaskSpark
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark">DataplexTaskSpark</a>

---


### DataplexTaskTimeoutsOutputReference <a name="DataplexTaskTimeoutsOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts">DataplexTaskTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataplexTaskTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts">DataplexTaskTimeouts</a>]

---


### DataplexTaskTriggerSpecOutputReference <a name="DataplexTaskTriggerSpecOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_task

dataplexTask.DataplexTaskTriggerSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.resetMaxRetries">reset_max_retries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_max_retries` <a name="reset_max_retries" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.resetMaxRetries"></a>

```python
def reset_max_retries() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.scheduleInput">schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec">DataplexTaskTriggerSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.scheduleInput"></a>

```python
schedule_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataplexTaskTriggerSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec">DataplexTaskTriggerSpec</a>

---



