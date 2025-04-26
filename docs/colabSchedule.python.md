# `colabSchedule` Submodule <a name="`colabSchedule` Submodule" id="@cdktf/provider-google.colabSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ColabSchedule <a name="ColabSchedule" id="@cdktf/provider-google.colabSchedule.ColabSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule google_colab_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_schedule

colabSchedule.ColabSchedule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  create_notebook_execution_job_request: ColabScheduleCreateNotebookExecutionJobRequest,
  cron: str,
  display_name: str,
  location: str,
  max_concurrent_run_count: str,
  allow_queueing: typing.Union[bool, IResolvable] = None,
  desired_state: str = None,
  end_time: str = None,
  id: str = None,
  max_run_count: str = None,
  project: str = None,
  start_time: str = None,
  timeouts: ColabScheduleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.createNotebookExecutionJobRequest">create_notebook_execution_job_request</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest">ColabScheduleCreateNotebookExecutionJobRequest</a></code> | create_notebook_execution_job_request block. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.cron">cron</a></code> | <code>str</code> | Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Required. The display name of the Schedule. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.maxConcurrentRunCount">max_concurrent_run_count</a></code> | <code>str</code> | Maximum number of runs that can be started concurrently for this Schedule. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.allowQueueing">allow_queueing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether new scheduled runs can be queued when max_concurrent_runs limit is reached. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.desiredState">desired_state</a></code> | <code>str</code> | Desired state of the Colab Schedule. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.endTime">end_time</a></code> | <code>str</code> | Timestamp after which no new runs can be scheduled. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#id ColabSchedule#id}. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.maxRunCount">max_run_count</a></code> | <code>str</code> | Maximum run count of the schedule. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#project ColabSchedule#project}. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.startTime">start_time</a></code> | <code>str</code> | The timestamp after which the first run can be scheduled. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts">ColabScheduleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_notebook_execution_job_request`<sup>Required</sup> <a name="create_notebook_execution_job_request" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.createNotebookExecutionJobRequest"></a>

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest">ColabScheduleCreateNotebookExecutionJobRequest</a>

create_notebook_execution_job_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#create_notebook_execution_job_request ColabSchedule#create_notebook_execution_job_request}

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.cron"></a>

- *Type:* str

Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#cron ColabSchedule#cron}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.displayName"></a>

- *Type:* str

Required. The display name of the Schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#display_name ColabSchedule#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#location ColabSchedule#location}

---

##### `max_concurrent_run_count`<sup>Required</sup> <a name="max_concurrent_run_count" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.maxConcurrentRunCount"></a>

- *Type:* str

Maximum number of runs that can be started concurrently for this Schedule.

This is the limit for starting the scheduled requests and not the execution of the notebook execution jobs created by the requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#max_concurrent_run_count ColabSchedule#max_concurrent_run_count}

---

##### `allow_queueing`<sup>Optional</sup> <a name="allow_queueing" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.allowQueueing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether new scheduled runs can be queued when max_concurrent_runs limit is reached.

If set to true, new runs will be queued instead of skipped. Default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#allow_queueing ColabSchedule#allow_queueing}

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.desiredState"></a>

- *Type:* str

Desired state of the Colab Schedule.

Set this field to 'ACTIVE' to start/resume the schedule, and 'PAUSED' to pause the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#desired_state ColabSchedule#desired_state}

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.endTime"></a>

- *Type:* str

Timestamp after which no new runs can be scheduled.

If specified, the schedule will be completed when either end_time is reached or when scheduled_run_count >= max_run_count. Must be in the RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#end_time ColabSchedule#end_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#id ColabSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_run_count`<sup>Optional</sup> <a name="max_run_count" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.maxRunCount"></a>

- *Type:* str

Maximum run count of the schedule.

If specified, The schedule will be completed when either startedRunCount >= maxRunCount or when endTime is reached. If not specified, new runs will keep getting scheduled until this Schedule is paused or deleted. Already scheduled runs will be allowed to complete. Unset if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#max_run_count ColabSchedule#max_run_count}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#project ColabSchedule#project}.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.startTime"></a>

- *Type:* str

The timestamp after which the first run can be scheduled.

Defaults to the schedule creation time. Must be in the RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#start_time ColabSchedule#start_time}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts">ColabScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#timeouts ColabSchedule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.putCreateNotebookExecutionJobRequest">put_create_notebook_execution_job_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetAllowQueueing">reset_allow_queueing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetDesiredState">reset_desired_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetMaxRunCount">reset_max_run_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetStartTime">reset_start_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.colabSchedule.ColabSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.colabSchedule.ColabSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.colabSchedule.ColabSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabSchedule.ColabSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.colabSchedule.ColabSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.colabSchedule.ColabSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.colabSchedule.ColabSchedule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.colabSchedule.ColabSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.colabSchedule.ColabSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.colabSchedule.ColabSchedule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.colabSchedule.ColabSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.colabSchedule.ColabSchedule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.colabSchedule.ColabSchedule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabSchedule.ColabSchedule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabSchedule.ColabSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.colabSchedule.ColabSchedule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabSchedule.ColabSchedule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.colabSchedule.ColabSchedule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.colabSchedule.ColabSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.colabSchedule.ColabSchedule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.colabSchedule.ColabSchedule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabSchedule.ColabSchedule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_create_notebook_execution_job_request` <a name="put_create_notebook_execution_job_request" id="@cdktf/provider-google.colabSchedule.ColabSchedule.putCreateNotebookExecutionJobRequest"></a>

```python
def put_create_notebook_execution_job_request(
  notebook_execution_job: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob
) -> None
```

###### `notebook_execution_job`<sup>Required</sup> <a name="notebook_execution_job" id="@cdktf/provider-google.colabSchedule.ColabSchedule.putCreateNotebookExecutionJobRequest.parameter.notebookExecutionJob"></a>

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a>

notebook_execution_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#notebook_execution_job ColabSchedule#notebook_execution_job}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.colabSchedule.ColabSchedule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.colabSchedule.ColabSchedule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#create ColabSchedule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.colabSchedule.ColabSchedule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#delete ColabSchedule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.colabSchedule.ColabSchedule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#update ColabSchedule#update}.

---

##### `reset_allow_queueing` <a name="reset_allow_queueing" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetAllowQueueing"></a>

```python
def reset_allow_queueing() -> None
```

##### `reset_desired_state` <a name="reset_desired_state" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetDesiredState"></a>

```python
def reset_desired_state() -> None
```

##### `reset_end_time` <a name="reset_end_time" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_run_count` <a name="reset_max_run_count" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetMaxRunCount"></a>

```python
def reset_max_run_count() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetStartTime"></a>

```python
def reset_start_time() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ColabSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.colabSchedule.ColabSchedule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import colab_schedule

colabSchedule.ColabSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabSchedule.ColabSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.colabSchedule.ColabSchedule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import colab_schedule

colabSchedule.ColabSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabSchedule.ColabSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.colabSchedule.ColabSchedule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import colab_schedule

colabSchedule.ColabSchedule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabSchedule.ColabSchedule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.colabSchedule.ColabSchedule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import colab_schedule

colabSchedule.ColabSchedule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ColabSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.colabSchedule.ColabSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.colabSchedule.ColabSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ColabSchedule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.colabSchedule.ColabSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ColabSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabSchedule.ColabSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ColabSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.createNotebookExecutionJobRequest">create_notebook_execution_job_request</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference">ColabScheduleCreateNotebookExecutionJobRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference">ColabScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.allowQueueingInput">allow_queueing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.createNotebookExecutionJobRequestInput">create_notebook_execution_job_request_input</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest">ColabScheduleCreateNotebookExecutionJobRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.cronInput">cron_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.desiredStateInput">desired_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.maxConcurrentRunCountInput">max_concurrent_run_count_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.maxRunCountInput">max_run_count_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts">ColabScheduleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.allowQueueing">allow_queueing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.cron">cron</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.desiredState">desired_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.maxConcurrentRunCount">max_concurrent_run_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.maxRunCount">max_run_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_notebook_execution_job_request`<sup>Required</sup> <a name="create_notebook_execution_job_request" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.createNotebookExecutionJobRequest"></a>

```python
create_notebook_execution_job_request: ColabScheduleCreateNotebookExecutionJobRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference">ColabScheduleCreateNotebookExecutionJobRequestOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.timeouts"></a>

```python
timeouts: ColabScheduleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference">ColabScheduleTimeoutsOutputReference</a>

---

##### `allow_queueing_input`<sup>Optional</sup> <a name="allow_queueing_input" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.allowQueueingInput"></a>

```python
allow_queueing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_notebook_execution_job_request_input`<sup>Optional</sup> <a name="create_notebook_execution_job_request_input" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.createNotebookExecutionJobRequestInput"></a>

```python
create_notebook_execution_job_request_input: ColabScheduleCreateNotebookExecutionJobRequest
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest">ColabScheduleCreateNotebookExecutionJobRequest</a>

---

##### `cron_input`<sup>Optional</sup> <a name="cron_input" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.cronInput"></a>

```python
cron_input: str
```

- *Type:* str

---

##### `desired_state_input`<sup>Optional</sup> <a name="desired_state_input" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.desiredStateInput"></a>

```python
desired_state_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `max_concurrent_run_count_input`<sup>Optional</sup> <a name="max_concurrent_run_count_input" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.maxConcurrentRunCountInput"></a>

```python
max_concurrent_run_count_input: str
```

- *Type:* str

---

##### `max_run_count_input`<sup>Optional</sup> <a name="max_run_count_input" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.maxRunCountInput"></a>

```python
max_run_count_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ColabScheduleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts">ColabScheduleTimeouts</a>]

---

##### `allow_queueing`<sup>Required</sup> <a name="allow_queueing" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.allowQueueing"></a>

```python
allow_queueing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.cron"></a>

```python
cron: str
```

- *Type:* str

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `max_concurrent_run_count`<sup>Required</sup> <a name="max_concurrent_run_count" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.maxConcurrentRunCount"></a>

```python
max_concurrent_run_count: str
```

- *Type:* str

---

##### `max_run_count`<sup>Required</sup> <a name="max_run_count" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.maxRunCount"></a>

```python
max_run_count: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ColabScheduleConfig <a name="ColabScheduleConfig" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_schedule

colabSchedule.ColabScheduleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  create_notebook_execution_job_request: ColabScheduleCreateNotebookExecutionJobRequest,
  cron: str,
  display_name: str,
  location: str,
  max_concurrent_run_count: str,
  allow_queueing: typing.Union[bool, IResolvable] = None,
  desired_state: str = None,
  end_time: str = None,
  id: str = None,
  max_run_count: str = None,
  project: str = None,
  start_time: str = None,
  timeouts: ColabScheduleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.createNotebookExecutionJobRequest">create_notebook_execution_job_request</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest">ColabScheduleCreateNotebookExecutionJobRequest</a></code> | create_notebook_execution_job_request block. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.cron">cron</a></code> | <code>str</code> | Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.displayName">display_name</a></code> | <code>str</code> | Required. The display name of the Schedule. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.location">location</a></code> | <code>str</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.maxConcurrentRunCount">max_concurrent_run_count</a></code> | <code>str</code> | Maximum number of runs that can be started concurrently for this Schedule. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.allowQueueing">allow_queueing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether new scheduled runs can be queued when max_concurrent_runs limit is reached. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.desiredState">desired_state</a></code> | <code>str</code> | Desired state of the Colab Schedule. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.endTime">end_time</a></code> | <code>str</code> | Timestamp after which no new runs can be scheduled. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#id ColabSchedule#id}. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.maxRunCount">max_run_count</a></code> | <code>str</code> | Maximum run count of the schedule. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#project ColabSchedule#project}. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.startTime">start_time</a></code> | <code>str</code> | The timestamp after which the first run can be scheduled. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts">ColabScheduleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_notebook_execution_job_request`<sup>Required</sup> <a name="create_notebook_execution_job_request" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.createNotebookExecutionJobRequest"></a>

```python
create_notebook_execution_job_request: ColabScheduleCreateNotebookExecutionJobRequest
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest">ColabScheduleCreateNotebookExecutionJobRequest</a>

create_notebook_execution_job_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#create_notebook_execution_job_request ColabSchedule#create_notebook_execution_job_request}

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.cron"></a>

```python
cron: str
```

- *Type:* str

Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#cron ColabSchedule#cron}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Required. The display name of the Schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#display_name ColabSchedule#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#location ColabSchedule#location}

---

##### `max_concurrent_run_count`<sup>Required</sup> <a name="max_concurrent_run_count" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.maxConcurrentRunCount"></a>

```python
max_concurrent_run_count: str
```

- *Type:* str

Maximum number of runs that can be started concurrently for this Schedule.

This is the limit for starting the scheduled requests and not the execution of the notebook execution jobs created by the requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#max_concurrent_run_count ColabSchedule#max_concurrent_run_count}

---

##### `allow_queueing`<sup>Optional</sup> <a name="allow_queueing" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.allowQueueing"></a>

```python
allow_queueing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether new scheduled runs can be queued when max_concurrent_runs limit is reached.

If set to true, new runs will be queued instead of skipped. Default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#allow_queueing ColabSchedule#allow_queueing}

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

Desired state of the Colab Schedule.

Set this field to 'ACTIVE' to start/resume the schedule, and 'PAUSED' to pause the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#desired_state ColabSchedule#desired_state}

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

Timestamp after which no new runs can be scheduled.

If specified, the schedule will be completed when either end_time is reached or when scheduled_run_count >= max_run_count. Must be in the RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#end_time ColabSchedule#end_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#id ColabSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_run_count`<sup>Optional</sup> <a name="max_run_count" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.maxRunCount"></a>

```python
max_run_count: str
```

- *Type:* str

Maximum run count of the schedule.

If specified, The schedule will be completed when either startedRunCount >= maxRunCount or when endTime is reached. If not specified, new runs will keep getting scheduled until this Schedule is paused or deleted. Already scheduled runs will be allowed to complete. Unset if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#max_run_count ColabSchedule#max_run_count}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#project ColabSchedule#project}.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

The timestamp after which the first run can be scheduled.

Defaults to the schedule creation time. Must be in the RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#start_time ColabSchedule#start_time}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.timeouts"></a>

```python
timeouts: ColabScheduleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts">ColabScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#timeouts ColabSchedule#timeouts}

---

### ColabScheduleCreateNotebookExecutionJobRequest <a name="ColabScheduleCreateNotebookExecutionJobRequest" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_schedule

colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest(
  notebook_execution_job: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest.property.notebookExecutionJob">notebook_execution_job</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a></code> | notebook_execution_job block. |

---

##### `notebook_execution_job`<sup>Required</sup> <a name="notebook_execution_job" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest.property.notebookExecutionJob"></a>

```python
notebook_execution_job: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a>

notebook_execution_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#notebook_execution_job ColabSchedule#notebook_execution_job}

---

### ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob <a name="ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_schedule

colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob(
  display_name: str,
  gcs_output_uri: str,
  notebook_runtime_template_resource_name: str,
  dataform_repository_source: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource = None,
  execution_timeout: str = None,
  execution_user: str = None,
  gcs_notebook_source: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource = None,
  service_account: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.displayName">display_name</a></code> | <code>str</code> | Required. The display name of the Notebook Execution. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.gcsOutputUri">gcs_output_uri</a></code> | <code>str</code> | The Cloud Storage location to upload the result to. Format:'gs://bucket-name'. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.notebookRuntimeTemplateResourceName">notebook_runtime_template_resource_name</a></code> | <code>str</code> | The NotebookRuntimeTemplate to source compute configuration from. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.dataformRepositorySource">dataform_repository_source</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a></code> | dataform_repository_source block. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.executionTimeout">execution_timeout</a></code> | <code>str</code> | Max running time of the execution job in seconds (default 86400s / 24 hrs). |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.executionUser">execution_user</a></code> | <code>str</code> | The user email to run the execution as. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.gcsNotebookSource">gcs_notebook_source</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a></code> | gcs_notebook_source block. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.serviceAccount">service_account</a></code> | <code>str</code> | The service account to run the execution as. |

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Required. The display name of the Notebook Execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#display_name ColabSchedule#display_name}

---

##### `gcs_output_uri`<sup>Required</sup> <a name="gcs_output_uri" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.gcsOutputUri"></a>

```python
gcs_output_uri: str
```

- *Type:* str

The Cloud Storage location to upload the result to. Format:'gs://bucket-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#gcs_output_uri ColabSchedule#gcs_output_uri}

---

##### `notebook_runtime_template_resource_name`<sup>Required</sup> <a name="notebook_runtime_template_resource_name" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.notebookRuntimeTemplateResourceName"></a>

```python
notebook_runtime_template_resource_name: str
```

- *Type:* str

The NotebookRuntimeTemplate to source compute configuration from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#notebook_runtime_template_resource_name ColabSchedule#notebook_runtime_template_resource_name}

---

##### `dataform_repository_source`<sup>Optional</sup> <a name="dataform_repository_source" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.dataformRepositorySource"></a>

```python
dataform_repository_source: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a>

dataform_repository_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#dataform_repository_source ColabSchedule#dataform_repository_source}

---

##### `execution_timeout`<sup>Optional</sup> <a name="execution_timeout" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.executionTimeout"></a>

```python
execution_timeout: str
```

- *Type:* str

Max running time of the execution job in seconds (default 86400s / 24 hrs).

A duration in seconds with up to nine fractional digits, ending with "s". Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#execution_timeout ColabSchedule#execution_timeout}

---

##### `execution_user`<sup>Optional</sup> <a name="execution_user" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.executionUser"></a>

```python
execution_user: str
```

- *Type:* str

The user email to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#execution_user ColabSchedule#execution_user}

---

##### `gcs_notebook_source`<sup>Optional</sup> <a name="gcs_notebook_source" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.gcsNotebookSource"></a>

```python
gcs_notebook_source: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a>

gcs_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#gcs_notebook_source ColabSchedule#gcs_notebook_source}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

The service account to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#service_account ColabSchedule#service_account}

---

### ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource <a name="ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_schedule

colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource(
  dataform_repository_resource_name: str,
  commit_sha: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.property.dataformRepositoryResourceName">dataform_repository_resource_name</a></code> | <code>str</code> | The resource name of the Dataform Repository. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.property.commitSha">commit_sha</a></code> | <code>str</code> | The commit SHA to read repository with. If unset, the file will be read at HEAD. |

---

##### `dataform_repository_resource_name`<sup>Required</sup> <a name="dataform_repository_resource_name" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.property.dataformRepositoryResourceName"></a>

```python
dataform_repository_resource_name: str
```

- *Type:* str

The resource name of the Dataform Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#dataform_repository_resource_name ColabSchedule#dataform_repository_resource_name}

---

##### `commit_sha`<sup>Optional</sup> <a name="commit_sha" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.property.commitSha"></a>

```python
commit_sha: str
```

- *Type:* str

The commit SHA to read repository with. If unset, the file will be read at HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#commit_sha ColabSchedule#commit_sha}

---

### ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource <a name="ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_schedule

colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource(
  uri: str,
  generation: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.property.uri">uri</a></code> | <code>str</code> | The Cloud Storage uri pointing to the ipynb file. Format: gs://bucket/notebook_file.ipynb. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.property.generation">generation</a></code> | <code>str</code> | The version of the Cloud Storage object to read. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.property.uri"></a>

```python
uri: str
```

- *Type:* str

The Cloud Storage uri pointing to the ipynb file. Format: gs://bucket/notebook_file.ipynb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#uri ColabSchedule#uri}

---

##### `generation`<sup>Optional</sup> <a name="generation" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.property.generation"></a>

```python
generation: str
```

- *Type:* str

The version of the Cloud Storage object to read.

If unset, the current version of the object is read. See https://cloud.google.com/storage/docs/metadata#generation-number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#generation ColabSchedule#generation}

---

### ColabScheduleTimeouts <a name="ColabScheduleTimeouts" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_schedule

colabSchedule.ColabScheduleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#create ColabSchedule#create}. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#delete ColabSchedule#delete}. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#update ColabSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#create ColabSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#delete ColabSchedule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#update ColabSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference <a name="ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_schedule

colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resetCommitSha">reset_commit_sha</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_commit_sha` <a name="reset_commit_sha" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resetCommitSha"></a>

```python
def reset_commit_sha() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.commitShaInput">commit_sha_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput">dataform_repository_resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.commitSha">commit_sha</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName">dataform_repository_resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `commit_sha_input`<sup>Optional</sup> <a name="commit_sha_input" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.commitShaInput"></a>

```python
commit_sha_input: str
```

- *Type:* str

---

##### `dataform_repository_resource_name_input`<sup>Optional</sup> <a name="dataform_repository_resource_name_input" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput"></a>

```python
dataform_repository_resource_name_input: str
```

- *Type:* str

---

##### `commit_sha`<sup>Required</sup> <a name="commit_sha" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.commitSha"></a>

```python
commit_sha: str
```

- *Type:* str

---

##### `dataform_repository_resource_name`<sup>Required</sup> <a name="dataform_repository_resource_name" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName"></a>

```python
dataform_repository_resource_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.internalValue"></a>

```python
internal_value: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a>

---


### ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference <a name="ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_schedule

colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resetGeneration">reset_generation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_generation` <a name="reset_generation" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resetGeneration"></a>

```python
def reset_generation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.generationInput">generation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.generation">generation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation_input`<sup>Optional</sup> <a name="generation_input" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.generationInput"></a>

```python
generation_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.generation"></a>

```python
generation: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.internalValue"></a>

```python
internal_value: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a>

---


### ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference <a name="ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_schedule

colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putDataformRepositorySource">put_dataform_repository_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putGcsNotebookSource">put_gcs_notebook_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetDataformRepositorySource">reset_dataform_repository_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetExecutionTimeout">reset_execution_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetExecutionUser">reset_execution_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetGcsNotebookSource">reset_gcs_notebook_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetServiceAccount">reset_service_account</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dataform_repository_source` <a name="put_dataform_repository_source" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putDataformRepositorySource"></a>

```python
def put_dataform_repository_source(
  dataform_repository_resource_name: str,
  commit_sha: str = None
) -> None
```

###### `dataform_repository_resource_name`<sup>Required</sup> <a name="dataform_repository_resource_name" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putDataformRepositorySource.parameter.dataformRepositoryResourceName"></a>

- *Type:* str

The resource name of the Dataform Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#dataform_repository_resource_name ColabSchedule#dataform_repository_resource_name}

---

###### `commit_sha`<sup>Optional</sup> <a name="commit_sha" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putDataformRepositorySource.parameter.commitSha"></a>

- *Type:* str

The commit SHA to read repository with. If unset, the file will be read at HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#commit_sha ColabSchedule#commit_sha}

---

##### `put_gcs_notebook_source` <a name="put_gcs_notebook_source" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putGcsNotebookSource"></a>

```python
def put_gcs_notebook_source(
  uri: str,
  generation: str = None
) -> None
```

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putGcsNotebookSource.parameter.uri"></a>

- *Type:* str

The Cloud Storage uri pointing to the ipynb file. Format: gs://bucket/notebook_file.ipynb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#uri ColabSchedule#uri}

---

###### `generation`<sup>Optional</sup> <a name="generation" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putGcsNotebookSource.parameter.generation"></a>

- *Type:* str

The version of the Cloud Storage object to read.

If unset, the current version of the object is read. See https://cloud.google.com/storage/docs/metadata#generation-number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#generation ColabSchedule#generation}

---

##### `reset_dataform_repository_source` <a name="reset_dataform_repository_source" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetDataformRepositorySource"></a>

```python
def reset_dataform_repository_source() -> None
```

##### `reset_execution_timeout` <a name="reset_execution_timeout" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetExecutionTimeout"></a>

```python
def reset_execution_timeout() -> None
```

##### `reset_execution_user` <a name="reset_execution_user" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetExecutionUser"></a>

```python
def reset_execution_user() -> None
```

##### `reset_gcs_notebook_source` <a name="reset_gcs_notebook_source" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetGcsNotebookSource"></a>

```python
def reset_gcs_notebook_source() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.dataformRepositorySource">dataform_repository_source</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsNotebookSource">gcs_notebook_source</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.dataformRepositorySourceInput">dataform_repository_source_input</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionTimeoutInput">execution_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionUserInput">execution_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsNotebookSourceInput">gcs_notebook_source_input</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsOutputUriInput">gcs_output_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.notebookRuntimeTemplateResourceNameInput">notebook_runtime_template_resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionTimeout">execution_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionUser">execution_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsOutputUri">gcs_output_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.notebookRuntimeTemplateResourceName">notebook_runtime_template_resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataform_repository_source`<sup>Required</sup> <a name="dataform_repository_source" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.dataformRepositorySource"></a>

```python
dataform_repository_source: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference</a>

---

##### `gcs_notebook_source`<sup>Required</sup> <a name="gcs_notebook_source" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsNotebookSource"></a>

```python
gcs_notebook_source: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference</a>

---

##### `dataform_repository_source_input`<sup>Optional</sup> <a name="dataform_repository_source_input" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.dataformRepositorySourceInput"></a>

```python
dataform_repository_source_input: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `execution_timeout_input`<sup>Optional</sup> <a name="execution_timeout_input" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionTimeoutInput"></a>

```python
execution_timeout_input: str
```

- *Type:* str

---

##### `execution_user_input`<sup>Optional</sup> <a name="execution_user_input" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionUserInput"></a>

```python
execution_user_input: str
```

- *Type:* str

---

##### `gcs_notebook_source_input`<sup>Optional</sup> <a name="gcs_notebook_source_input" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsNotebookSourceInput"></a>

```python
gcs_notebook_source_input: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a>

---

##### `gcs_output_uri_input`<sup>Optional</sup> <a name="gcs_output_uri_input" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsOutputUriInput"></a>

```python
gcs_output_uri_input: str
```

- *Type:* str

---

##### `notebook_runtime_template_resource_name_input`<sup>Optional</sup> <a name="notebook_runtime_template_resource_name_input" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.notebookRuntimeTemplateResourceNameInput"></a>

```python
notebook_runtime_template_resource_name_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `execution_timeout`<sup>Required</sup> <a name="execution_timeout" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionTimeout"></a>

```python
execution_timeout: str
```

- *Type:* str

---

##### `execution_user`<sup>Required</sup> <a name="execution_user" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionUser"></a>

```python
execution_user: str
```

- *Type:* str

---

##### `gcs_output_uri`<sup>Required</sup> <a name="gcs_output_uri" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsOutputUri"></a>

```python
gcs_output_uri: str
```

- *Type:* str

---

##### `notebook_runtime_template_resource_name`<sup>Required</sup> <a name="notebook_runtime_template_resource_name" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.notebookRuntimeTemplateResourceName"></a>

```python
notebook_runtime_template_resource_name: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.internalValue"></a>

```python
internal_value: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a>

---


### ColabScheduleCreateNotebookExecutionJobRequestOutputReference <a name="ColabScheduleCreateNotebookExecutionJobRequestOutputReference" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_schedule

colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.putNotebookExecutionJob">put_notebook_execution_job</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_notebook_execution_job` <a name="put_notebook_execution_job" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.putNotebookExecutionJob"></a>

```python
def put_notebook_execution_job(
  display_name: str,
  gcs_output_uri: str,
  notebook_runtime_template_resource_name: str,
  dataform_repository_source: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource = None,
  execution_timeout: str = None,
  execution_user: str = None,
  gcs_notebook_source: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource = None,
  service_account: str = None
) -> None
```

###### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.putNotebookExecutionJob.parameter.displayName"></a>

- *Type:* str

Required. The display name of the Notebook Execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#display_name ColabSchedule#display_name}

---

###### `gcs_output_uri`<sup>Required</sup> <a name="gcs_output_uri" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.putNotebookExecutionJob.parameter.gcsOutputUri"></a>

- *Type:* str

The Cloud Storage location to upload the result to. Format:'gs://bucket-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#gcs_output_uri ColabSchedule#gcs_output_uri}

---

###### `notebook_runtime_template_resource_name`<sup>Required</sup> <a name="notebook_runtime_template_resource_name" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.putNotebookExecutionJob.parameter.notebookRuntimeTemplateResourceName"></a>

- *Type:* str

The NotebookRuntimeTemplate to source compute configuration from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#notebook_runtime_template_resource_name ColabSchedule#notebook_runtime_template_resource_name}

---

###### `dataform_repository_source`<sup>Optional</sup> <a name="dataform_repository_source" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.putNotebookExecutionJob.parameter.dataformRepositorySource"></a>

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a>

dataform_repository_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#dataform_repository_source ColabSchedule#dataform_repository_source}

---

###### `execution_timeout`<sup>Optional</sup> <a name="execution_timeout" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.putNotebookExecutionJob.parameter.executionTimeout"></a>

- *Type:* str

Max running time of the execution job in seconds (default 86400s / 24 hrs).

A duration in seconds with up to nine fractional digits, ending with "s". Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#execution_timeout ColabSchedule#execution_timeout}

---

###### `execution_user`<sup>Optional</sup> <a name="execution_user" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.putNotebookExecutionJob.parameter.executionUser"></a>

- *Type:* str

The user email to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#execution_user ColabSchedule#execution_user}

---

###### `gcs_notebook_source`<sup>Optional</sup> <a name="gcs_notebook_source" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.putNotebookExecutionJob.parameter.gcsNotebookSource"></a>

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a>

gcs_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#gcs_notebook_source ColabSchedule#gcs_notebook_source}

---

###### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.putNotebookExecutionJob.parameter.serviceAccount"></a>

- *Type:* str

The service account to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/colab_schedule#service_account ColabSchedule#service_account}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJob">notebook_execution_job</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJobInput">notebook_execution_job_input</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest">ColabScheduleCreateNotebookExecutionJobRequest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notebook_execution_job`<sup>Required</sup> <a name="notebook_execution_job" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJob"></a>

```python
notebook_execution_job: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference</a>

---

##### `notebook_execution_job_input`<sup>Optional</sup> <a name="notebook_execution_job_input" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJobInput"></a>

```python
notebook_execution_job_input: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.internalValue"></a>

```python
internal_value: ColabScheduleCreateNotebookExecutionJobRequest
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest">ColabScheduleCreateNotebookExecutionJobRequest</a>

---


### ColabScheduleTimeoutsOutputReference <a name="ColabScheduleTimeoutsOutputReference" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_schedule

colabSchedule.ColabScheduleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts">ColabScheduleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ColabScheduleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts">ColabScheduleTimeouts</a>]

---



