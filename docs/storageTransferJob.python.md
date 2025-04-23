# `storageTransferJob` Submodule <a name="`storageTransferJob` Submodule" id="@cdktf/provider-google.storageTransferJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageTransferJob <a name="StorageTransferJob" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job google_storage_transfer_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJob(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  event_stream: StorageTransferJobEventStream = None,
  id: str = None,
  logging_config: StorageTransferJobLoggingConfig = None,
  name: str = None,
  notification_config: StorageTransferJobNotificationConfig = None,
  project: str = None,
  replication_spec: StorageTransferJobReplicationSpec = None,
  schedule: StorageTransferJobSchedule = None,
  status: str = None,
  transfer_spec: StorageTransferJobTransferSpec = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.description">description</a></code> | <code>str</code> | Unique description to identify the Transfer Job. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.eventStream">event_stream</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream">StorageTransferJobEventStream</a></code> | event_stream block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#id StorageTransferJob#id}. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig">StorageTransferJobLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Transfer Job. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.notificationConfig">notification_config</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.project">project</a></code> | <code>str</code> | The project in which the resource belongs. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.replicationSpec">replication_spec</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec">StorageTransferJobReplicationSpec</a></code> | replication_spec block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.status">status</a></code> | <code>str</code> | Status of the job. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.transferSpec">transfer_spec</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a></code> | transfer_spec block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.description"></a>

- *Type:* str

Unique description to identify the Transfer Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#description StorageTransferJob#description}

---

##### `event_stream`<sup>Optional</sup> <a name="event_stream" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.eventStream"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream">StorageTransferJobEventStream</a>

event_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#event_stream StorageTransferJob#event_stream}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#id StorageTransferJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig">StorageTransferJobLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#logging_config StorageTransferJob#logging_config}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.name"></a>

- *Type:* str

The name of the Transfer Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#name StorageTransferJob#name}

---

##### `notification_config`<sup>Optional</sup> <a name="notification_config" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.notificationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#notification_config StorageTransferJob#notification_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.project"></a>

- *Type:* str

The project in which the resource belongs. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#project StorageTransferJob#project}

---

##### `replication_spec`<sup>Optional</sup> <a name="replication_spec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.replicationSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec">StorageTransferJobReplicationSpec</a>

replication_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#replication_spec StorageTransferJob#replication_spec}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#schedule StorageTransferJob#schedule}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.status"></a>

- *Type:* str

Status of the job.

Default: ENABLED. NOTE: The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#status StorageTransferJob#status}

---

##### `transfer_spec`<sup>Optional</sup> <a name="transfer_spec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.transferSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a>

transfer_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#transfer_spec StorageTransferJob#transfer_spec}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.putEventStream">put_event_stream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.putNotificationConfig">put_notification_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.putReplicationSpec">put_replication_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.putTransferSpec">put_transfer_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetEventStream">reset_event_stream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetNotificationConfig">reset_notification_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetReplicationSpec">reset_replication_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetTransferSpec">reset_transfer_spec</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_event_stream` <a name="put_event_stream" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putEventStream"></a>

```python
def put_event_stream(
  name: str,
  event_stream_expiration_time: str = None,
  event_stream_start_time: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putEventStream.parameter.name"></a>

- *Type:* str

Specifies a unique name of the resource such as AWS SQS ARN in the form 'arn:aws:sqs:region:account_id:queue_name', or Pub/Sub subscription resource name in the form 'projects/{project}/subscriptions/{sub}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#name StorageTransferJob#name}

---

###### `event_stream_expiration_time`<sup>Optional</sup> <a name="event_stream_expiration_time" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putEventStream.parameter.eventStreamExpirationTime"></a>

- *Type:* str

Specifies the data and time at which Storage Transfer Service stops listening for events from this stream.

After this time, any transfers in progress will complete, but no new transfers are initiated

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#event_stream_expiration_time StorageTransferJob#event_stream_expiration_time}

---

###### `event_stream_start_time`<sup>Optional</sup> <a name="event_stream_start_time" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putEventStream.parameter.eventStreamStartTime"></a>

- *Type:* str

Specifies the date and time that Storage Transfer Service starts listening for events from this stream.

If no start time is specified or start time is in the past, Storage Transfer Service starts listening immediately

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#event_stream_start_time StorageTransferJob#event_stream_start_time}

---

##### `put_logging_config` <a name="put_logging_config" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putLoggingConfig"></a>

```python
def put_logging_config(
  enable_on_prem_gcs_transfer_logs: typing.Union[bool, IResolvable] = None,
  log_actions: typing.List[str] = None,
  log_action_states: typing.List[str] = None
) -> None
```

###### `enable_on_prem_gcs_transfer_logs`<sup>Optional</sup> <a name="enable_on_prem_gcs_transfer_logs" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putLoggingConfig.parameter.enableOnPremGcsTransferLogs"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

For transfers with a PosixFilesystem source, this option enables the Cloud Storage transfer logs for this transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#enable_on_prem_gcs_transfer_logs StorageTransferJob#enable_on_prem_gcs_transfer_logs}

---

###### `log_actions`<sup>Optional</sup> <a name="log_actions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putLoggingConfig.parameter.logActions"></a>

- *Type:* typing.List[str]

Specifies the actions to be logged. Not supported for transfers with PosifxFilesystem data sources; use enable_on_prem_gcs_transfer_logs instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#log_actions StorageTransferJob#log_actions}

---

###### `log_action_states`<sup>Optional</sup> <a name="log_action_states" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putLoggingConfig.parameter.logActionStates"></a>

- *Type:* typing.List[str]

States in which logActions are logged. Not supported for transfers with PosifxFilesystem data sources; use enable_on_prem_gcs_transfer_logs instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#log_action_states StorageTransferJob#log_action_states}

---

##### `put_notification_config` <a name="put_notification_config" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putNotificationConfig"></a>

```python
def put_notification_config(
  payload_format: str,
  pubsub_topic: str,
  event_types: typing.List[str] = None
) -> None
```

###### `payload_format`<sup>Required</sup> <a name="payload_format" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putNotificationConfig.parameter.payloadFormat"></a>

- *Type:* str

The desired format of the notification message payloads. One of "NONE" or "JSON".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#payload_format StorageTransferJob#payload_format}

---

###### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putNotificationConfig.parameter.pubsubTopic"></a>

- *Type:* str

The Topic.name of the Pub/Sub topic to which to publish notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#pubsub_topic StorageTransferJob#pubsub_topic}

---

###### `event_types`<sup>Optional</sup> <a name="event_types" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putNotificationConfig.parameter.eventTypes"></a>

- *Type:* typing.List[str]

Event types for which a notification is desired.

If empty, send notifications for all event types. The valid types are "TRANSFER_OPERATION_SUCCESS", "TRANSFER_OPERATION_FAILED", "TRANSFER_OPERATION_ABORTED".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#event_types StorageTransferJob#event_types}

---

##### `put_replication_spec` <a name="put_replication_spec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putReplicationSpec"></a>

```python
def put_replication_spec(
  gcs_data_sink: StorageTransferJobReplicationSpecGcsDataSink = None,
  gcs_data_source: StorageTransferJobReplicationSpecGcsDataSource = None,
  object_conditions: StorageTransferJobReplicationSpecObjectConditions = None,
  transfer_options: StorageTransferJobReplicationSpecTransferOptions = None
) -> None
```

###### `gcs_data_sink`<sup>Optional</sup> <a name="gcs_data_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putReplicationSpec.parameter.gcsDataSink"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink">StorageTransferJobReplicationSpecGcsDataSink</a>

gcs_data_sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#gcs_data_sink StorageTransferJob#gcs_data_sink}

---

###### `gcs_data_source`<sup>Optional</sup> <a name="gcs_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putReplicationSpec.parameter.gcsDataSource"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource">StorageTransferJobReplicationSpecGcsDataSource</a>

gcs_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#gcs_data_source StorageTransferJob#gcs_data_source}

---

###### `object_conditions`<sup>Optional</sup> <a name="object_conditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putReplicationSpec.parameter.objectConditions"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions">StorageTransferJobReplicationSpecObjectConditions</a>

object_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#object_conditions StorageTransferJob#object_conditions}

---

###### `transfer_options`<sup>Optional</sup> <a name="transfer_options" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putReplicationSpec.parameter.transferOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions">StorageTransferJobReplicationSpecTransferOptions</a>

transfer_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#transfer_options StorageTransferJob#transfer_options}

---

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putSchedule"></a>

```python
def put_schedule(
  schedule_start_date: StorageTransferJobScheduleScheduleStartDate,
  repeat_interval: str = None,
  schedule_end_date: StorageTransferJobScheduleScheduleEndDate = None,
  start_time_of_day: StorageTransferJobScheduleStartTimeOfDay = None
) -> None
```

###### `schedule_start_date`<sup>Required</sup> <a name="schedule_start_date" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putSchedule.parameter.scheduleStartDate"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a>

schedule_start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#schedule_start_date StorageTransferJob#schedule_start_date}

---

###### `repeat_interval`<sup>Optional</sup> <a name="repeat_interval" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putSchedule.parameter.repeatInterval"></a>

- *Type:* str

Interval between the start of each scheduled transfer.

If unspecified, the default value is 24 hours. This value may not be less than 1 hour. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#repeat_interval StorageTransferJob#repeat_interval}

---

###### `schedule_end_date`<sup>Optional</sup> <a name="schedule_end_date" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putSchedule.parameter.scheduleEndDate"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a>

schedule_end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#schedule_end_date StorageTransferJob#schedule_end_date}

---

###### `start_time_of_day`<sup>Optional</sup> <a name="start_time_of_day" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putSchedule.parameter.startTimeOfDay"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a>

start_time_of_day block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#start_time_of_day StorageTransferJob#start_time_of_day}

---

##### `put_transfer_spec` <a name="put_transfer_spec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putTransferSpec"></a>

```python
def put_transfer_spec(
  aws_s3_data_source: StorageTransferJobTransferSpecAwsS3DataSource = None,
  azure_blob_storage_data_source: StorageTransferJobTransferSpecAzureBlobStorageDataSource = None,
  gcs_data_sink: StorageTransferJobTransferSpecGcsDataSink = None,
  gcs_data_source: StorageTransferJobTransferSpecGcsDataSource = None,
  hdfs_data_source: StorageTransferJobTransferSpecHdfsDataSource = None,
  http_data_source: StorageTransferJobTransferSpecHttpDataSource = None,
  object_conditions: StorageTransferJobTransferSpecObjectConditions = None,
  posix_data_sink: StorageTransferJobTransferSpecPosixDataSink = None,
  posix_data_source: StorageTransferJobTransferSpecPosixDataSource = None,
  sink_agent_pool_name: str = None,
  source_agent_pool_name: str = None,
  transfer_options: StorageTransferJobTransferSpecTransferOptions = None
) -> None
```

###### `aws_s3_data_source`<sup>Optional</sup> <a name="aws_s3_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putTransferSpec.parameter.awsS3DataSource"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a>

aws_s3_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#aws_s3_data_source StorageTransferJob#aws_s3_data_source}

---

###### `azure_blob_storage_data_source`<sup>Optional</sup> <a name="azure_blob_storage_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putTransferSpec.parameter.azureBlobStorageDataSource"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

azure_blob_storage_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#azure_blob_storage_data_source StorageTransferJob#azure_blob_storage_data_source}

---

###### `gcs_data_sink`<sup>Optional</sup> <a name="gcs_data_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putTransferSpec.parameter.gcsDataSink"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a>

gcs_data_sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#gcs_data_sink StorageTransferJob#gcs_data_sink}

---

###### `gcs_data_source`<sup>Optional</sup> <a name="gcs_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putTransferSpec.parameter.gcsDataSource"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a>

gcs_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#gcs_data_source StorageTransferJob#gcs_data_source}

---

###### `hdfs_data_source`<sup>Optional</sup> <a name="hdfs_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putTransferSpec.parameter.hdfsDataSource"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource">StorageTransferJobTransferSpecHdfsDataSource</a>

hdfs_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#hdfs_data_source StorageTransferJob#hdfs_data_source}

---

###### `http_data_source`<sup>Optional</sup> <a name="http_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putTransferSpec.parameter.httpDataSource"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a>

http_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#http_data_source StorageTransferJob#http_data_source}

---

###### `object_conditions`<sup>Optional</sup> <a name="object_conditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putTransferSpec.parameter.objectConditions"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a>

object_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#object_conditions StorageTransferJob#object_conditions}

---

###### `posix_data_sink`<sup>Optional</sup> <a name="posix_data_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putTransferSpec.parameter.posixDataSink"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a>

posix_data_sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#posix_data_sink StorageTransferJob#posix_data_sink}

---

###### `posix_data_source`<sup>Optional</sup> <a name="posix_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putTransferSpec.parameter.posixDataSource"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a>

posix_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#posix_data_source StorageTransferJob#posix_data_source}

---

###### `sink_agent_pool_name`<sup>Optional</sup> <a name="sink_agent_pool_name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putTransferSpec.parameter.sinkAgentPoolName"></a>

- *Type:* str

Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#sink_agent_pool_name StorageTransferJob#sink_agent_pool_name}

---

###### `source_agent_pool_name`<sup>Optional</sup> <a name="source_agent_pool_name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putTransferSpec.parameter.sourceAgentPoolName"></a>

- *Type:* str

Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#source_agent_pool_name StorageTransferJob#source_agent_pool_name}

---

###### `transfer_options`<sup>Optional</sup> <a name="transfer_options" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putTransferSpec.parameter.transferOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a>

transfer_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#transfer_options StorageTransferJob#transfer_options}

---

##### `reset_event_stream` <a name="reset_event_stream" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetEventStream"></a>

```python
def reset_event_stream() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_notification_config` <a name="reset_notification_config" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetNotificationConfig"></a>

```python
def reset_notification_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_replication_spec` <a name="reset_replication_spec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetReplicationSpec"></a>

```python
def reset_replication_spec() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_transfer_spec` <a name="reset_transfer_spec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetTransferSpec"></a>

```python
def reset_transfer_spec() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StorageTransferJob resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StorageTransferJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StorageTransferJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StorageTransferJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageTransferJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.deletionTime">deletion_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.eventStream">event_stream</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference">StorageTransferJobEventStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.lastModificationTime">last_modification_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference">StorageTransferJobLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.notificationConfig">notification_config</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference">StorageTransferJobNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.replicationSpec">replication_spec</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference">StorageTransferJobReplicationSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference">StorageTransferJobScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.transferSpec">transfer_spec</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference">StorageTransferJobTransferSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.eventStreamInput">event_stream_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream">StorageTransferJobEventStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.loggingConfigInput">logging_config_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig">StorageTransferJobLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.notificationConfigInput">notification_config_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.replicationSpecInput">replication_spec_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec">StorageTransferJobReplicationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.scheduleInput">schedule_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.transferSpecInput">transfer_spec_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `deletion_time`<sup>Required</sup> <a name="deletion_time" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.deletionTime"></a>

```python
deletion_time: str
```

- *Type:* str

---

##### `event_stream`<sup>Required</sup> <a name="event_stream" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.eventStream"></a>

```python
event_stream: StorageTransferJobEventStreamOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference">StorageTransferJobEventStreamOutputReference</a>

---

##### `last_modification_time`<sup>Required</sup> <a name="last_modification_time" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.lastModificationTime"></a>

```python
last_modification_time: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.loggingConfig"></a>

```python
logging_config: StorageTransferJobLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference">StorageTransferJobLoggingConfigOutputReference</a>

---

##### `notification_config`<sup>Required</sup> <a name="notification_config" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.notificationConfig"></a>

```python
notification_config: StorageTransferJobNotificationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference">StorageTransferJobNotificationConfigOutputReference</a>

---

##### `replication_spec`<sup>Required</sup> <a name="replication_spec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.replicationSpec"></a>

```python
replication_spec: StorageTransferJobReplicationSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference">StorageTransferJobReplicationSpecOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.schedule"></a>

```python
schedule: StorageTransferJobScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference">StorageTransferJobScheduleOutputReference</a>

---

##### `transfer_spec`<sup>Required</sup> <a name="transfer_spec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.transferSpec"></a>

```python
transfer_spec: StorageTransferJobTransferSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference">StorageTransferJobTransferSpecOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `event_stream_input`<sup>Optional</sup> <a name="event_stream_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.eventStreamInput"></a>

```python
event_stream_input: StorageTransferJobEventStream
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream">StorageTransferJobEventStream</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.loggingConfigInput"></a>

```python
logging_config_input: StorageTransferJobLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig">StorageTransferJobLoggingConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_config_input`<sup>Optional</sup> <a name="notification_config_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.notificationConfigInput"></a>

```python
notification_config_input: StorageTransferJobNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `replication_spec_input`<sup>Optional</sup> <a name="replication_spec_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.replicationSpecInput"></a>

```python
replication_spec_input: StorageTransferJobReplicationSpec
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec">StorageTransferJobReplicationSpec</a>

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.scheduleInput"></a>

```python
schedule_input: StorageTransferJobSchedule
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `transfer_spec_input`<sup>Optional</sup> <a name="transfer_spec_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.transferSpecInput"></a>

```python
transfer_spec_input: StorageTransferJobTransferSpec
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageTransferJobConfig <a name="StorageTransferJobConfig" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  event_stream: StorageTransferJobEventStream = None,
  id: str = None,
  logging_config: StorageTransferJobLoggingConfig = None,
  name: str = None,
  notification_config: StorageTransferJobNotificationConfig = None,
  project: str = None,
  replication_spec: StorageTransferJobReplicationSpec = None,
  schedule: StorageTransferJobSchedule = None,
  status: str = None,
  transfer_spec: StorageTransferJobTransferSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.description">description</a></code> | <code>str</code> | Unique description to identify the Transfer Job. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.eventStream">event_stream</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream">StorageTransferJobEventStream</a></code> | event_stream block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#id StorageTransferJob#id}. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig">StorageTransferJobLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.name">name</a></code> | <code>str</code> | The name of the Transfer Job. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.notificationConfig">notification_config</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.project">project</a></code> | <code>str</code> | The project in which the resource belongs. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.replicationSpec">replication_spec</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec">StorageTransferJobReplicationSpec</a></code> | replication_spec block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.status">status</a></code> | <code>str</code> | Status of the job. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.transferSpec">transfer_spec</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a></code> | transfer_spec block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Unique description to identify the Transfer Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#description StorageTransferJob#description}

---

##### `event_stream`<sup>Optional</sup> <a name="event_stream" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.eventStream"></a>

```python
event_stream: StorageTransferJobEventStream
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream">StorageTransferJobEventStream</a>

event_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#event_stream StorageTransferJob#event_stream}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#id StorageTransferJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.loggingConfig"></a>

```python
logging_config: StorageTransferJobLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig">StorageTransferJobLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#logging_config StorageTransferJob#logging_config}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Transfer Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#name StorageTransferJob#name}

---

##### `notification_config`<sup>Optional</sup> <a name="notification_config" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.notificationConfig"></a>

```python
notification_config: StorageTransferJobNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#notification_config StorageTransferJob#notification_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project in which the resource belongs. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#project StorageTransferJob#project}

---

##### `replication_spec`<sup>Optional</sup> <a name="replication_spec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.replicationSpec"></a>

```python
replication_spec: StorageTransferJobReplicationSpec
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec">StorageTransferJobReplicationSpec</a>

replication_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#replication_spec StorageTransferJob#replication_spec}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.schedule"></a>

```python
schedule: StorageTransferJobSchedule
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#schedule StorageTransferJob#schedule}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Status of the job.

Default: ENABLED. NOTE: The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#status StorageTransferJob#status}

---

##### `transfer_spec`<sup>Optional</sup> <a name="transfer_spec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.transferSpec"></a>

```python
transfer_spec: StorageTransferJobTransferSpec
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a>

transfer_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#transfer_spec StorageTransferJob#transfer_spec}

---

### StorageTransferJobEventStream <a name="StorageTransferJobEventStream" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobEventStream(
  name: str,
  event_stream_expiration_time: str = None,
  event_stream_start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream.property.name">name</a></code> | <code>str</code> | Specifies a unique name of the resource such as AWS SQS ARN in the form 'arn:aws:sqs:region:account_id:queue_name', or Pub/Sub subscription resource name in the form 'projects/{project}/subscriptions/{sub}'. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream.property.eventStreamExpirationTime">event_stream_expiration_time</a></code> | <code>str</code> | Specifies the data and time at which Storage Transfer Service stops listening for events from this stream. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream.property.eventStreamStartTime">event_stream_start_time</a></code> | <code>str</code> | Specifies the date and time that Storage Transfer Service starts listening for events from this stream. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies a unique name of the resource such as AWS SQS ARN in the form 'arn:aws:sqs:region:account_id:queue_name', or Pub/Sub subscription resource name in the form 'projects/{project}/subscriptions/{sub}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#name StorageTransferJob#name}

---

##### `event_stream_expiration_time`<sup>Optional</sup> <a name="event_stream_expiration_time" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream.property.eventStreamExpirationTime"></a>

```python
event_stream_expiration_time: str
```

- *Type:* str

Specifies the data and time at which Storage Transfer Service stops listening for events from this stream.

After this time, any transfers in progress will complete, but no new transfers are initiated

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#event_stream_expiration_time StorageTransferJob#event_stream_expiration_time}

---

##### `event_stream_start_time`<sup>Optional</sup> <a name="event_stream_start_time" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream.property.eventStreamStartTime"></a>

```python
event_stream_start_time: str
```

- *Type:* str

Specifies the date and time that Storage Transfer Service starts listening for events from this stream.

If no start time is specified or start time is in the past, Storage Transfer Service starts listening immediately

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#event_stream_start_time StorageTransferJob#event_stream_start_time}

---

### StorageTransferJobLoggingConfig <a name="StorageTransferJobLoggingConfig" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobLoggingConfig(
  enable_on_prem_gcs_transfer_logs: typing.Union[bool, IResolvable] = None,
  log_actions: typing.List[str] = None,
  log_action_states: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig.property.enableOnPremGcsTransferLogs">enable_on_prem_gcs_transfer_logs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | For transfers with a PosixFilesystem source, this option enables the Cloud Storage transfer logs for this transfer. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig.property.logActions">log_actions</a></code> | <code>typing.List[str]</code> | Specifies the actions to be logged. Not supported for transfers with PosifxFilesystem data sources; use enable_on_prem_gcs_transfer_logs instead. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig.property.logActionStates">log_action_states</a></code> | <code>typing.List[str]</code> | States in which logActions are logged. Not supported for transfers with PosifxFilesystem data sources; use enable_on_prem_gcs_transfer_logs instead. |

---

##### `enable_on_prem_gcs_transfer_logs`<sup>Optional</sup> <a name="enable_on_prem_gcs_transfer_logs" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig.property.enableOnPremGcsTransferLogs"></a>

```python
enable_on_prem_gcs_transfer_logs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

For transfers with a PosixFilesystem source, this option enables the Cloud Storage transfer logs for this transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#enable_on_prem_gcs_transfer_logs StorageTransferJob#enable_on_prem_gcs_transfer_logs}

---

##### `log_actions`<sup>Optional</sup> <a name="log_actions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig.property.logActions"></a>

```python
log_actions: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the actions to be logged. Not supported for transfers with PosifxFilesystem data sources; use enable_on_prem_gcs_transfer_logs instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#log_actions StorageTransferJob#log_actions}

---

##### `log_action_states`<sup>Optional</sup> <a name="log_action_states" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig.property.logActionStates"></a>

```python
log_action_states: typing.List[str]
```

- *Type:* typing.List[str]

States in which logActions are logged. Not supported for transfers with PosifxFilesystem data sources; use enable_on_prem_gcs_transfer_logs instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#log_action_states StorageTransferJob#log_action_states}

---

### StorageTransferJobNotificationConfig <a name="StorageTransferJobNotificationConfig" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobNotificationConfig(
  payload_format: str,
  pubsub_topic: str,
  event_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.property.payloadFormat">payload_format</a></code> | <code>str</code> | The desired format of the notification message payloads. One of "NONE" or "JSON". |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | The Topic.name of the Pub/Sub topic to which to publish notifications. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.property.eventTypes">event_types</a></code> | <code>typing.List[str]</code> | Event types for which a notification is desired. |

---

##### `payload_format`<sup>Required</sup> <a name="payload_format" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.property.payloadFormat"></a>

```python
payload_format: str
```

- *Type:* str

The desired format of the notification message payloads. One of "NONE" or "JSON".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#payload_format StorageTransferJob#payload_format}

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

The Topic.name of the Pub/Sub topic to which to publish notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#pubsub_topic StorageTransferJob#pubsub_topic}

---

##### `event_types`<sup>Optional</sup> <a name="event_types" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.property.eventTypes"></a>

```python
event_types: typing.List[str]
```

- *Type:* typing.List[str]

Event types for which a notification is desired.

If empty, send notifications for all event types. The valid types are "TRANSFER_OPERATION_SUCCESS", "TRANSFER_OPERATION_FAILED", "TRANSFER_OPERATION_ABORTED".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#event_types StorageTransferJob#event_types}

---

### StorageTransferJobReplicationSpec <a name="StorageTransferJobReplicationSpec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobReplicationSpec(
  gcs_data_sink: StorageTransferJobReplicationSpecGcsDataSink = None,
  gcs_data_source: StorageTransferJobReplicationSpecGcsDataSource = None,
  object_conditions: StorageTransferJobReplicationSpecObjectConditions = None,
  transfer_options: StorageTransferJobReplicationSpecTransferOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.property.gcsDataSink">gcs_data_sink</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink">StorageTransferJobReplicationSpecGcsDataSink</a></code> | gcs_data_sink block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.property.gcsDataSource">gcs_data_source</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource">StorageTransferJobReplicationSpecGcsDataSource</a></code> | gcs_data_source block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.property.objectConditions">object_conditions</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions">StorageTransferJobReplicationSpecObjectConditions</a></code> | object_conditions block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.property.transferOptions">transfer_options</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions">StorageTransferJobReplicationSpecTransferOptions</a></code> | transfer_options block. |

---

##### `gcs_data_sink`<sup>Optional</sup> <a name="gcs_data_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.property.gcsDataSink"></a>

```python
gcs_data_sink: StorageTransferJobReplicationSpecGcsDataSink
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink">StorageTransferJobReplicationSpecGcsDataSink</a>

gcs_data_sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#gcs_data_sink StorageTransferJob#gcs_data_sink}

---

##### `gcs_data_source`<sup>Optional</sup> <a name="gcs_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.property.gcsDataSource"></a>

```python
gcs_data_source: StorageTransferJobReplicationSpecGcsDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource">StorageTransferJobReplicationSpecGcsDataSource</a>

gcs_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#gcs_data_source StorageTransferJob#gcs_data_source}

---

##### `object_conditions`<sup>Optional</sup> <a name="object_conditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.property.objectConditions"></a>

```python
object_conditions: StorageTransferJobReplicationSpecObjectConditions
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions">StorageTransferJobReplicationSpecObjectConditions</a>

object_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#object_conditions StorageTransferJob#object_conditions}

---

##### `transfer_options`<sup>Optional</sup> <a name="transfer_options" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.property.transferOptions"></a>

```python
transfer_options: StorageTransferJobReplicationSpecTransferOptions
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions">StorageTransferJobReplicationSpecTransferOptions</a>

transfer_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#transfer_options StorageTransferJob#transfer_options}

---

### StorageTransferJobReplicationSpecGcsDataSink <a name="StorageTransferJobReplicationSpecGcsDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink(
  bucket_name: str,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink.property.bucketName">bucket_name</a></code> | <code>str</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink.property.path">path</a></code> | <code>str</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink.property.path"></a>

```python
path: str
```

- *Type:* str

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

### StorageTransferJobReplicationSpecGcsDataSource <a name="StorageTransferJobReplicationSpecGcsDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource(
  bucket_name: str,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource.property.bucketName">bucket_name</a></code> | <code>str</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource.property.path">path</a></code> | <code>str</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource.property.path"></a>

```python
path: str
```

- *Type:* str

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

### StorageTransferJobReplicationSpecObjectConditions <a name="StorageTransferJobReplicationSpecObjectConditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobReplicationSpecObjectConditions(
  exclude_prefixes: typing.List[str] = None,
  include_prefixes: typing.List[str] = None,
  last_modified_before: str = None,
  last_modified_since: str = None,
  max_time_elapsed_since_last_modification: str = None,
  min_time_elapsed_since_last_modification: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.excludePrefixes">exclude_prefixes</a></code> | <code>typing.List[str]</code> | exclude_prefixes must follow the requirements described for include_prefixes. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.includePrefixes">include_prefixes</a></code> | <code>typing.List[str]</code> | If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.lastModifiedBefore">last_modified_before</a></code> | <code>str</code> | If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.lastModifiedSince">last_modified_since</a></code> | <code>str</code> | If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.maxTimeElapsedSinceLastModification">max_time_elapsed_since_last_modification</a></code> | <code>str</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.minTimeElapsedSinceLastModification">min_time_elapsed_since_last_modification</a></code> | <code>str</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |

---

##### `exclude_prefixes`<sup>Optional</sup> <a name="exclude_prefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.excludePrefixes"></a>

```python
exclude_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

exclude_prefixes must follow the requirements described for include_prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#exclude_prefixes StorageTransferJob#exclude_prefixes}

---

##### `include_prefixes`<sup>Optional</sup> <a name="include_prefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.includePrefixes"></a>

```python
include_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes.

If include_prefixes is not specified, all objects except those that have names starting with one of the exclude_prefixes must satisfy the object conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#include_prefixes StorageTransferJob#include_prefixes}

---

##### `last_modified_before`<sup>Optional</sup> <a name="last_modified_before" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.lastModifiedBefore"></a>

```python
last_modified_before: str
```

- *Type:* str

If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#last_modified_before StorageTransferJob#last_modified_before}

---

##### `last_modified_since`<sup>Optional</sup> <a name="last_modified_since" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.lastModifiedSince"></a>

```python
last_modified_since: str
```

- *Type:* str

If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#last_modified_since StorageTransferJob#last_modified_since}

---

##### `max_time_elapsed_since_last_modification`<sup>Optional</sup> <a name="max_time_elapsed_since_last_modification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.maxTimeElapsedSinceLastModification"></a>

```python
max_time_elapsed_since_last_modification: str
```

- *Type:* str

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#max_time_elapsed_since_last_modification StorageTransferJob#max_time_elapsed_since_last_modification}

---

##### `min_time_elapsed_since_last_modification`<sup>Optional</sup> <a name="min_time_elapsed_since_last_modification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.minTimeElapsedSinceLastModification"></a>

```python
min_time_elapsed_since_last_modification: str
```

- *Type:* str

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#min_time_elapsed_since_last_modification StorageTransferJob#min_time_elapsed_since_last_modification}

---

### StorageTransferJobReplicationSpecTransferOptions <a name="StorageTransferJobReplicationSpecTransferOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobReplicationSpecTransferOptions(
  delete_objects_from_source_after_transfer: typing.Union[bool, IResolvable] = None,
  delete_objects_unique_in_sink: typing.Union[bool, IResolvable] = None,
  metadata_options: StorageTransferJobReplicationSpecTransferOptionsMetadataOptions = None,
  overwrite_objects_already_existing_in_sink: typing.Union[bool, IResolvable] = None,
  overwrite_when: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer">delete_objects_from_source_after_transfer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether objects should be deleted from the source after they are transferred to the sink. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.deleteObjectsUniqueInSink">delete_objects_unique_in_sink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether objects that exist only in the sink should be deleted. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions">StorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink">overwrite_objects_already_existing_in_sink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether overwriting objects that already exist in the sink is allowed. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.overwriteWhen">overwrite_when</a></code> | <code>str</code> | When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink. |

---

##### `delete_objects_from_source_after_transfer`<sup>Optional</sup> <a name="delete_objects_from_source_after_transfer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer"></a>

```python
delete_objects_from_source_after_transfer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether objects should be deleted from the source after they are transferred to the sink.

Note that this option and delete_objects_unique_in_sink are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#delete_objects_from_source_after_transfer StorageTransferJob#delete_objects_from_source_after_transfer}

---

##### `delete_objects_unique_in_sink`<sup>Optional</sup> <a name="delete_objects_unique_in_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.deleteObjectsUniqueInSink"></a>

```python
delete_objects_unique_in_sink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether objects that exist only in the sink should be deleted.

Note that this option and delete_objects_from_source_after_transfer are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#delete_objects_unique_in_sink StorageTransferJob#delete_objects_unique_in_sink}

---

##### `metadata_options`<sup>Optional</sup> <a name="metadata_options" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.metadataOptions"></a>

```python
metadata_options: StorageTransferJobReplicationSpecTransferOptionsMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions">StorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#metadata_options StorageTransferJob#metadata_options}

---

##### `overwrite_objects_already_existing_in_sink`<sup>Optional</sup> <a name="overwrite_objects_already_existing_in_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink"></a>

```python
overwrite_objects_already_existing_in_sink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether overwriting objects that already exist in the sink is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#overwrite_objects_already_existing_in_sink StorageTransferJob#overwrite_objects_already_existing_in_sink}

---

##### `overwrite_when`<sup>Optional</sup> <a name="overwrite_when" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.overwriteWhen"></a>

```python
overwrite_when: str
```

- *Type:* str

When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#overwrite_when StorageTransferJob#overwrite_when}

---

### StorageTransferJobReplicationSpecTransferOptionsMetadataOptions <a name="StorageTransferJobReplicationSpecTransferOptionsMetadataOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions(
  acl: str = None,
  gid: str = None,
  kms_key: str = None,
  mode: str = None,
  storage_class: str = None,
  symlink: str = None,
  temporary_hold: str = None,
  time_created: str = None,
  uid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.acl">acl</a></code> | <code>str</code> | Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.gid">gid</a></code> | <code>str</code> | Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.kmsKey">kms_key</a></code> | <code>str</code> | Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.mode">mode</a></code> | <code>str</code> | Specifies how each file's mode attribute should be handled by the transfer. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.storageClass">storage_class</a></code> | <code>str</code> | Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.symlink">symlink</a></code> | <code>str</code> | Specifies how symlinks should be handled by the transfer. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.temporaryHold">temporary_hold</a></code> | <code>str</code> | SSpecifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.timeCreated">time_created</a></code> | <code>str</code> | Specifies how each object's timeCreated metadata is preserved for transfers. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.uid">uid</a></code> | <code>str</code> | Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer. |

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.acl"></a>

```python
acl: str
```

- *Type:* str

Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#acl StorageTransferJob#acl}

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.gid"></a>

```python
gid: str
```

- *Type:* str

Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#gid StorageTransferJob#gid}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#kms_key StorageTransferJob#kms_key}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.mode"></a>

```python
mode: str
```

- *Type:* str

Specifies how each file's mode attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#mode StorageTransferJob#mode}

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#storage_class StorageTransferJob#storage_class}

---

##### `symlink`<sup>Optional</sup> <a name="symlink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.symlink"></a>

```python
symlink: str
```

- *Type:* str

Specifies how symlinks should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#symlink StorageTransferJob#symlink}

---

##### `temporary_hold`<sup>Optional</sup> <a name="temporary_hold" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.temporaryHold"></a>

```python
temporary_hold: str
```

- *Type:* str

SSpecifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#temporary_hold StorageTransferJob#temporary_hold}

---

##### `time_created`<sup>Optional</sup> <a name="time_created" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

Specifies how each object's timeCreated metadata is preserved for transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#time_created StorageTransferJob#time_created}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.uid"></a>

```python
uid: str
```

- *Type:* str

Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#uid StorageTransferJob#uid}

---

### StorageTransferJobSchedule <a name="StorageTransferJobSchedule" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobSchedule(
  schedule_start_date: StorageTransferJobScheduleScheduleStartDate,
  repeat_interval: str = None,
  schedule_end_date: StorageTransferJobScheduleScheduleEndDate = None,
  start_time_of_day: StorageTransferJobScheduleStartTimeOfDay = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.property.scheduleStartDate">schedule_start_date</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a></code> | schedule_start_date block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.property.repeatInterval">repeat_interval</a></code> | <code>str</code> | Interval between the start of each scheduled transfer. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.property.scheduleEndDate">schedule_end_date</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a></code> | schedule_end_date block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.property.startTimeOfDay">start_time_of_day</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a></code> | start_time_of_day block. |

---

##### `schedule_start_date`<sup>Required</sup> <a name="schedule_start_date" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.property.scheduleStartDate"></a>

```python
schedule_start_date: StorageTransferJobScheduleScheduleStartDate
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a>

schedule_start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#schedule_start_date StorageTransferJob#schedule_start_date}

---

##### `repeat_interval`<sup>Optional</sup> <a name="repeat_interval" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.property.repeatInterval"></a>

```python
repeat_interval: str
```

- *Type:* str

Interval between the start of each scheduled transfer.

If unspecified, the default value is 24 hours. This value may not be less than 1 hour. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#repeat_interval StorageTransferJob#repeat_interval}

---

##### `schedule_end_date`<sup>Optional</sup> <a name="schedule_end_date" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.property.scheduleEndDate"></a>

```python
schedule_end_date: StorageTransferJobScheduleScheduleEndDate
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a>

schedule_end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#schedule_end_date StorageTransferJob#schedule_end_date}

---

##### `start_time_of_day`<sup>Optional</sup> <a name="start_time_of_day" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.property.startTimeOfDay"></a>

```python
start_time_of_day: StorageTransferJobScheduleStartTimeOfDay
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a>

start_time_of_day block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#start_time_of_day StorageTransferJob#start_time_of_day}

---

### StorageTransferJobScheduleScheduleEndDate <a name="StorageTransferJobScheduleScheduleEndDate" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobScheduleScheduleEndDate(
  day: typing.Union[int, float],
  month: typing.Union[int, float],
  year: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.property.day">day</a></code> | <code>typing.Union[int, float]</code> | Day of month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.property.month">month</a></code> | <code>typing.Union[int, float]</code> | Month of year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.property.year">year</a></code> | <code>typing.Union[int, float]</code> | Year of date. Must be from 1 to 9999. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Day of month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#day StorageTransferJob#day}

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Month of year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#month StorageTransferJob#month}

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Year of date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#year StorageTransferJob#year}

---

### StorageTransferJobScheduleScheduleStartDate <a name="StorageTransferJobScheduleScheduleStartDate" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobScheduleScheduleStartDate(
  day: typing.Union[int, float],
  month: typing.Union[int, float],
  year: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.property.day">day</a></code> | <code>typing.Union[int, float]</code> | Day of month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.property.month">month</a></code> | <code>typing.Union[int, float]</code> | Month of year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.property.year">year</a></code> | <code>typing.Union[int, float]</code> | Year of date. Must be from 1 to 9999. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Day of month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#day StorageTransferJob#day}

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Month of year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#month StorageTransferJob#month}

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Year of date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#year StorageTransferJob#year}

---

### StorageTransferJobScheduleStartTimeOfDay <a name="StorageTransferJobScheduleStartTimeOfDay" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobScheduleStartTimeOfDay(
  hours: typing.Union[int, float],
  minutes: typing.Union[int, float],
  nanos: typing.Union[int, float],
  seconds: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Seconds of minutes of the time. Must normally be from 0 to 59. |

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#hours StorageTransferJob#hours}

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#minutes StorageTransferJob#minutes}

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#nanos StorageTransferJob#nanos}

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#seconds StorageTransferJob#seconds}

---

### StorageTransferJobTransferSpec <a name="StorageTransferJobTransferSpec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpec(
  aws_s3_data_source: StorageTransferJobTransferSpecAwsS3DataSource = None,
  azure_blob_storage_data_source: StorageTransferJobTransferSpecAzureBlobStorageDataSource = None,
  gcs_data_sink: StorageTransferJobTransferSpecGcsDataSink = None,
  gcs_data_source: StorageTransferJobTransferSpecGcsDataSource = None,
  hdfs_data_source: StorageTransferJobTransferSpecHdfsDataSource = None,
  http_data_source: StorageTransferJobTransferSpecHttpDataSource = None,
  object_conditions: StorageTransferJobTransferSpecObjectConditions = None,
  posix_data_sink: StorageTransferJobTransferSpecPosixDataSink = None,
  posix_data_source: StorageTransferJobTransferSpecPosixDataSource = None,
  sink_agent_pool_name: str = None,
  source_agent_pool_name: str = None,
  transfer_options: StorageTransferJobTransferSpecTransferOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.awsS3DataSource">aws_s3_data_source</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a></code> | aws_s3_data_source block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.azureBlobStorageDataSource">azure_blob_storage_data_source</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a></code> | azure_blob_storage_data_source block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.gcsDataSink">gcs_data_sink</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a></code> | gcs_data_sink block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.gcsDataSource">gcs_data_source</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a></code> | gcs_data_source block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.hdfsDataSource">hdfs_data_source</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource">StorageTransferJobTransferSpecHdfsDataSource</a></code> | hdfs_data_source block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.httpDataSource">http_data_source</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a></code> | http_data_source block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.objectConditions">object_conditions</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a></code> | object_conditions block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.posixDataSink">posix_data_sink</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a></code> | posix_data_sink block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.posixDataSource">posix_data_source</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a></code> | posix_data_source block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.sinkAgentPoolName">sink_agent_pool_name</a></code> | <code>str</code> | Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.sourceAgentPoolName">source_agent_pool_name</a></code> | <code>str</code> | Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.transferOptions">transfer_options</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a></code> | transfer_options block. |

---

##### `aws_s3_data_source`<sup>Optional</sup> <a name="aws_s3_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.awsS3DataSource"></a>

```python
aws_s3_data_source: StorageTransferJobTransferSpecAwsS3DataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a>

aws_s3_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#aws_s3_data_source StorageTransferJob#aws_s3_data_source}

---

##### `azure_blob_storage_data_source`<sup>Optional</sup> <a name="azure_blob_storage_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.azureBlobStorageDataSource"></a>

```python
azure_blob_storage_data_source: StorageTransferJobTransferSpecAzureBlobStorageDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

azure_blob_storage_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#azure_blob_storage_data_source StorageTransferJob#azure_blob_storage_data_source}

---

##### `gcs_data_sink`<sup>Optional</sup> <a name="gcs_data_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.gcsDataSink"></a>

```python
gcs_data_sink: StorageTransferJobTransferSpecGcsDataSink
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a>

gcs_data_sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#gcs_data_sink StorageTransferJob#gcs_data_sink}

---

##### `gcs_data_source`<sup>Optional</sup> <a name="gcs_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.gcsDataSource"></a>

```python
gcs_data_source: StorageTransferJobTransferSpecGcsDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a>

gcs_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#gcs_data_source StorageTransferJob#gcs_data_source}

---

##### `hdfs_data_source`<sup>Optional</sup> <a name="hdfs_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.hdfsDataSource"></a>

```python
hdfs_data_source: StorageTransferJobTransferSpecHdfsDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource">StorageTransferJobTransferSpecHdfsDataSource</a>

hdfs_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#hdfs_data_source StorageTransferJob#hdfs_data_source}

---

##### `http_data_source`<sup>Optional</sup> <a name="http_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.httpDataSource"></a>

```python
http_data_source: StorageTransferJobTransferSpecHttpDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a>

http_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#http_data_source StorageTransferJob#http_data_source}

---

##### `object_conditions`<sup>Optional</sup> <a name="object_conditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.objectConditions"></a>

```python
object_conditions: StorageTransferJobTransferSpecObjectConditions
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a>

object_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#object_conditions StorageTransferJob#object_conditions}

---

##### `posix_data_sink`<sup>Optional</sup> <a name="posix_data_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.posixDataSink"></a>

```python
posix_data_sink: StorageTransferJobTransferSpecPosixDataSink
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a>

posix_data_sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#posix_data_sink StorageTransferJob#posix_data_sink}

---

##### `posix_data_source`<sup>Optional</sup> <a name="posix_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.posixDataSource"></a>

```python
posix_data_source: StorageTransferJobTransferSpecPosixDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a>

posix_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#posix_data_source StorageTransferJob#posix_data_source}

---

##### `sink_agent_pool_name`<sup>Optional</sup> <a name="sink_agent_pool_name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.sinkAgentPoolName"></a>

```python
sink_agent_pool_name: str
```

- *Type:* str

Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#sink_agent_pool_name StorageTransferJob#sink_agent_pool_name}

---

##### `source_agent_pool_name`<sup>Optional</sup> <a name="source_agent_pool_name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.sourceAgentPoolName"></a>

```python
source_agent_pool_name: str
```

- *Type:* str

Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#source_agent_pool_name StorageTransferJob#source_agent_pool_name}

---

##### `transfer_options`<sup>Optional</sup> <a name="transfer_options" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.transferOptions"></a>

```python
transfer_options: StorageTransferJobTransferSpecTransferOptions
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a>

transfer_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#transfer_options StorageTransferJob#transfer_options}

---

### StorageTransferJobTransferSpecAwsS3DataSource <a name="StorageTransferJobTransferSpecAwsS3DataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource(
  bucket_name: str,
  aws_access_key: StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey = None,
  path: str = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.bucketName">bucket_name</a></code> | <code>str</code> | S3 Bucket name. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.awsAccessKey">aws_access_key</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a></code> | aws_access_key block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.path">path</a></code> | <code>str</code> | S3 Bucket path in bucket to transfer. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the role to support temporary credentials via 'AssumeRoleWithWebIdentity'. |

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

S3 Bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}

---

##### `aws_access_key`<sup>Optional</sup> <a name="aws_access_key" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.awsAccessKey"></a>

```python
aws_access_key: StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

aws_access_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#aws_access_key StorageTransferJob#aws_access_key}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.path"></a>

```python
path: str
```

- *Type:* str

S3 Bucket path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the role to support temporary credentials via 'AssumeRoleWithWebIdentity'.

For more information about ARNs, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns). When a role ARN is provided, Transfer Service fetches temporary credentials for the session using a 'AssumeRoleWithWebIdentity' call for the provided role using the [GoogleServiceAccount][] for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#role_arn StorageTransferJob#role_arn}

---

### StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey <a name="StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey(
  access_key_id: str,
  secret_access_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.accessKeyId">access_key_id</a></code> | <code>str</code> | AWS Key ID. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | AWS Secret Access Key. |

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

AWS Key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#access_key_id StorageTransferJob#access_key_id}

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

AWS Secret Access Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#secret_access_key StorageTransferJob#secret_access_key}

---

### StorageTransferJobTransferSpecAzureBlobStorageDataSource <a name="StorageTransferJobTransferSpecAzureBlobStorageDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource(
  azure_credentials: StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials,
  container: str,
  storage_account: str,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.azureCredentials">azure_credentials</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a></code> | azure_credentials block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.container">container</a></code> | <code>str</code> | The container to transfer from the Azure Storage account. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.storageAccount">storage_account</a></code> | <code>str</code> | The name of the Azure Storage account. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.path">path</a></code> | <code>str</code> | Root path to transfer objects. |

---

##### `azure_credentials`<sup>Required</sup> <a name="azure_credentials" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.azureCredentials"></a>

```python
azure_credentials: StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

azure_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#azure_credentials StorageTransferJob#azure_credentials}

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.container"></a>

```python
container: str
```

- *Type:* str

The container to transfer from the Azure Storage account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#container StorageTransferJob#container}

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.storageAccount"></a>

```python
storage_account: str
```

- *Type:* str

The name of the Azure Storage account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#storage_account StorageTransferJob#storage_account}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.path"></a>

```python
path: str
```

- *Type:* str

Root path to transfer objects.

Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

### StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials <a name="StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials(
  sas_token: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials.property.sasToken">sas_token</a></code> | <code>str</code> | Azure shared access signature. |

---

##### `sas_token`<sup>Required</sup> <a name="sas_token" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials.property.sasToken"></a>

```python
sas_token: str
```

- *Type:* str

Azure shared access signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#sas_token StorageTransferJob#sas_token}

---

### StorageTransferJobTransferSpecGcsDataSink <a name="StorageTransferJobTransferSpecGcsDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecGcsDataSink(
  bucket_name: str,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink.property.bucketName">bucket_name</a></code> | <code>str</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink.property.path">path</a></code> | <code>str</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink.property.path"></a>

```python
path: str
```

- *Type:* str

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

### StorageTransferJobTransferSpecGcsDataSource <a name="StorageTransferJobTransferSpecGcsDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecGcsDataSource(
  bucket_name: str,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource.property.bucketName">bucket_name</a></code> | <code>str</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource.property.path">path</a></code> | <code>str</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource.property.path"></a>

```python
path: str
```

- *Type:* str

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

### StorageTransferJobTransferSpecHdfsDataSource <a name="StorageTransferJobTransferSpecHdfsDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource(
  path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource.property.path">path</a></code> | <code>str</code> | Directory path to the filesystem. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource.property.path"></a>

```python
path: str
```

- *Type:* str

Directory path to the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

### StorageTransferJobTransferSpecHttpDataSource <a name="StorageTransferJobTransferSpecHttpDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecHttpDataSource(
  list_url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource.property.listUrl">list_url</a></code> | <code>str</code> | The URL that points to the file that stores the object list entries. |

---

##### `list_url`<sup>Required</sup> <a name="list_url" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource.property.listUrl"></a>

```python
list_url: str
```

- *Type:* str

The URL that points to the file that stores the object list entries.

This file must allow public access. Currently, only URLs with HTTP and HTTPS schemes are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#list_url StorageTransferJob#list_url}

---

### StorageTransferJobTransferSpecObjectConditions <a name="StorageTransferJobTransferSpecObjectConditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecObjectConditions(
  exclude_prefixes: typing.List[str] = None,
  include_prefixes: typing.List[str] = None,
  last_modified_before: str = None,
  last_modified_since: str = None,
  max_time_elapsed_since_last_modification: str = None,
  min_time_elapsed_since_last_modification: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.excludePrefixes">exclude_prefixes</a></code> | <code>typing.List[str]</code> | exclude_prefixes must follow the requirements described for include_prefixes. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.includePrefixes">include_prefixes</a></code> | <code>typing.List[str]</code> | If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.lastModifiedBefore">last_modified_before</a></code> | <code>str</code> | If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.lastModifiedSince">last_modified_since</a></code> | <code>str</code> | If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.maxTimeElapsedSinceLastModification">max_time_elapsed_since_last_modification</a></code> | <code>str</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.minTimeElapsedSinceLastModification">min_time_elapsed_since_last_modification</a></code> | <code>str</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |

---

##### `exclude_prefixes`<sup>Optional</sup> <a name="exclude_prefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.excludePrefixes"></a>

```python
exclude_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

exclude_prefixes must follow the requirements described for include_prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#exclude_prefixes StorageTransferJob#exclude_prefixes}

---

##### `include_prefixes`<sup>Optional</sup> <a name="include_prefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.includePrefixes"></a>

```python
include_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes.

If include_prefixes is not specified, all objects except those that have names starting with one of the exclude_prefixes must satisfy the object conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#include_prefixes StorageTransferJob#include_prefixes}

---

##### `last_modified_before`<sup>Optional</sup> <a name="last_modified_before" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.lastModifiedBefore"></a>

```python
last_modified_before: str
```

- *Type:* str

If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#last_modified_before StorageTransferJob#last_modified_before}

---

##### `last_modified_since`<sup>Optional</sup> <a name="last_modified_since" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.lastModifiedSince"></a>

```python
last_modified_since: str
```

- *Type:* str

If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#last_modified_since StorageTransferJob#last_modified_since}

---

##### `max_time_elapsed_since_last_modification`<sup>Optional</sup> <a name="max_time_elapsed_since_last_modification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.maxTimeElapsedSinceLastModification"></a>

```python
max_time_elapsed_since_last_modification: str
```

- *Type:* str

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#max_time_elapsed_since_last_modification StorageTransferJob#max_time_elapsed_since_last_modification}

---

##### `min_time_elapsed_since_last_modification`<sup>Optional</sup> <a name="min_time_elapsed_since_last_modification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.minTimeElapsedSinceLastModification"></a>

```python
min_time_elapsed_since_last_modification: str
```

- *Type:* str

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#min_time_elapsed_since_last_modification StorageTransferJob#min_time_elapsed_since_last_modification}

---

### StorageTransferJobTransferSpecPosixDataSink <a name="StorageTransferJobTransferSpecPosixDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecPosixDataSink(
  root_directory: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink.property.rootDirectory">root_directory</a></code> | <code>str</code> | Root directory path to the filesystem. |

---

##### `root_directory`<sup>Required</sup> <a name="root_directory" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink.property.rootDirectory"></a>

```python
root_directory: str
```

- *Type:* str

Root directory path to the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#root_directory StorageTransferJob#root_directory}

---

### StorageTransferJobTransferSpecPosixDataSource <a name="StorageTransferJobTransferSpecPosixDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecPosixDataSource(
  root_directory: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource.property.rootDirectory">root_directory</a></code> | <code>str</code> | Root directory path to the filesystem. |

---

##### `root_directory`<sup>Required</sup> <a name="root_directory" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource.property.rootDirectory"></a>

```python
root_directory: str
```

- *Type:* str

Root directory path to the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#root_directory StorageTransferJob#root_directory}

---

### StorageTransferJobTransferSpecTransferOptions <a name="StorageTransferJobTransferSpecTransferOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecTransferOptions(
  delete_objects_from_source_after_transfer: typing.Union[bool, IResolvable] = None,
  delete_objects_unique_in_sink: typing.Union[bool, IResolvable] = None,
  metadata_options: StorageTransferJobTransferSpecTransferOptionsMetadataOptions = None,
  overwrite_objects_already_existing_in_sink: typing.Union[bool, IResolvable] = None,
  overwrite_when: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer">delete_objects_from_source_after_transfer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether objects should be deleted from the source after they are transferred to the sink. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.deleteObjectsUniqueInSink">delete_objects_unique_in_sink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether objects that exist only in the sink should be deleted. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions">StorageTransferJobTransferSpecTransferOptionsMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink">overwrite_objects_already_existing_in_sink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether overwriting objects that already exist in the sink is allowed. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.overwriteWhen">overwrite_when</a></code> | <code>str</code> | When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink. |

---

##### `delete_objects_from_source_after_transfer`<sup>Optional</sup> <a name="delete_objects_from_source_after_transfer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer"></a>

```python
delete_objects_from_source_after_transfer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether objects should be deleted from the source after they are transferred to the sink.

Note that this option and delete_objects_unique_in_sink are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#delete_objects_from_source_after_transfer StorageTransferJob#delete_objects_from_source_after_transfer}

---

##### `delete_objects_unique_in_sink`<sup>Optional</sup> <a name="delete_objects_unique_in_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.deleteObjectsUniqueInSink"></a>

```python
delete_objects_unique_in_sink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether objects that exist only in the sink should be deleted.

Note that this option and delete_objects_from_source_after_transfer are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#delete_objects_unique_in_sink StorageTransferJob#delete_objects_unique_in_sink}

---

##### `metadata_options`<sup>Optional</sup> <a name="metadata_options" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.metadataOptions"></a>

```python
metadata_options: StorageTransferJobTransferSpecTransferOptionsMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions">StorageTransferJobTransferSpecTransferOptionsMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#metadata_options StorageTransferJob#metadata_options}

---

##### `overwrite_objects_already_existing_in_sink`<sup>Optional</sup> <a name="overwrite_objects_already_existing_in_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink"></a>

```python
overwrite_objects_already_existing_in_sink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether overwriting objects that already exist in the sink is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#overwrite_objects_already_existing_in_sink StorageTransferJob#overwrite_objects_already_existing_in_sink}

---

##### `overwrite_when`<sup>Optional</sup> <a name="overwrite_when" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.overwriteWhen"></a>

```python
overwrite_when: str
```

- *Type:* str

When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#overwrite_when StorageTransferJob#overwrite_when}

---

### StorageTransferJobTransferSpecTransferOptionsMetadataOptions <a name="StorageTransferJobTransferSpecTransferOptionsMetadataOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions(
  acl: str = None,
  gid: str = None,
  kms_key: str = None,
  mode: str = None,
  storage_class: str = None,
  symlink: str = None,
  temporary_hold: str = None,
  time_created: str = None,
  uid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.acl">acl</a></code> | <code>str</code> | Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.gid">gid</a></code> | <code>str</code> | Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.kmsKey">kms_key</a></code> | <code>str</code> | Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.mode">mode</a></code> | <code>str</code> | Specifies how each file's mode attribute should be handled by the transfer. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.storageClass">storage_class</a></code> | <code>str</code> | Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.symlink">symlink</a></code> | <code>str</code> | Specifies how symlinks should be handled by the transfer. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.temporaryHold">temporary_hold</a></code> | <code>str</code> | SSpecifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.timeCreated">time_created</a></code> | <code>str</code> | Specifies how each object's timeCreated metadata is preserved for transfers. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.uid">uid</a></code> | <code>str</code> | Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer. |

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.acl"></a>

```python
acl: str
```

- *Type:* str

Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#acl StorageTransferJob#acl}

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.gid"></a>

```python
gid: str
```

- *Type:* str

Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#gid StorageTransferJob#gid}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#kms_key StorageTransferJob#kms_key}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.mode"></a>

```python
mode: str
```

- *Type:* str

Specifies how each file's mode attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#mode StorageTransferJob#mode}

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#storage_class StorageTransferJob#storage_class}

---

##### `symlink`<sup>Optional</sup> <a name="symlink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.symlink"></a>

```python
symlink: str
```

- *Type:* str

Specifies how symlinks should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#symlink StorageTransferJob#symlink}

---

##### `temporary_hold`<sup>Optional</sup> <a name="temporary_hold" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.temporaryHold"></a>

```python
temporary_hold: str
```

- *Type:* str

SSpecifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#temporary_hold StorageTransferJob#temporary_hold}

---

##### `time_created`<sup>Optional</sup> <a name="time_created" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

Specifies how each object's timeCreated metadata is preserved for transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#time_created StorageTransferJob#time_created}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.uid"></a>

```python
uid: str
```

- *Type:* str

Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#uid StorageTransferJob#uid}

---

## Classes <a name="Classes" id="Classes"></a>

### StorageTransferJobEventStreamOutputReference <a name="StorageTransferJobEventStreamOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobEventStreamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.resetEventStreamExpirationTime">reset_event_stream_expiration_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.resetEventStreamStartTime">reset_event_stream_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_event_stream_expiration_time` <a name="reset_event_stream_expiration_time" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.resetEventStreamExpirationTime"></a>

```python
def reset_event_stream_expiration_time() -> None
```

##### `reset_event_stream_start_time` <a name="reset_event_stream_start_time" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.resetEventStreamStartTime"></a>

```python
def reset_event_stream_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.eventStreamExpirationTimeInput">event_stream_expiration_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.eventStreamStartTimeInput">event_stream_start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.eventStreamExpirationTime">event_stream_expiration_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.eventStreamStartTime">event_stream_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream">StorageTransferJobEventStream</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_stream_expiration_time_input`<sup>Optional</sup> <a name="event_stream_expiration_time_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.eventStreamExpirationTimeInput"></a>

```python
event_stream_expiration_time_input: str
```

- *Type:* str

---

##### `event_stream_start_time_input`<sup>Optional</sup> <a name="event_stream_start_time_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.eventStreamStartTimeInput"></a>

```python
event_stream_start_time_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `event_stream_expiration_time`<sup>Required</sup> <a name="event_stream_expiration_time" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.eventStreamExpirationTime"></a>

```python
event_stream_expiration_time: str
```

- *Type:* str

---

##### `event_stream_start_time`<sup>Required</sup> <a name="event_stream_start_time" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.eventStreamStartTime"></a>

```python
event_stream_start_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobEventStream
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream">StorageTransferJobEventStream</a>

---


### StorageTransferJobLoggingConfigOutputReference <a name="StorageTransferJobLoggingConfigOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resetEnableOnPremGcsTransferLogs">reset_enable_on_prem_gcs_transfer_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resetLogActions">reset_log_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resetLogActionStates">reset_log_action_states</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_on_prem_gcs_transfer_logs` <a name="reset_enable_on_prem_gcs_transfer_logs" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resetEnableOnPremGcsTransferLogs"></a>

```python
def reset_enable_on_prem_gcs_transfer_logs() -> None
```

##### `reset_log_actions` <a name="reset_log_actions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resetLogActions"></a>

```python
def reset_log_actions() -> None
```

##### `reset_log_action_states` <a name="reset_log_action_states" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resetLogActionStates"></a>

```python
def reset_log_action_states() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.enableOnPremGcsTransferLogsInput">enable_on_prem_gcs_transfer_logs_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.logActionsInput">log_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.logActionStatesInput">log_action_states_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.enableOnPremGcsTransferLogs">enable_on_prem_gcs_transfer_logs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.logActions">log_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.logActionStates">log_action_states</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig">StorageTransferJobLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_on_prem_gcs_transfer_logs_input`<sup>Optional</sup> <a name="enable_on_prem_gcs_transfer_logs_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.enableOnPremGcsTransferLogsInput"></a>

```python
enable_on_prem_gcs_transfer_logs_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_actions_input`<sup>Optional</sup> <a name="log_actions_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.logActionsInput"></a>

```python
log_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `log_action_states_input`<sup>Optional</sup> <a name="log_action_states_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.logActionStatesInput"></a>

```python
log_action_states_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_on_prem_gcs_transfer_logs`<sup>Required</sup> <a name="enable_on_prem_gcs_transfer_logs" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.enableOnPremGcsTransferLogs"></a>

```python
enable_on_prem_gcs_transfer_logs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_actions`<sup>Required</sup> <a name="log_actions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.logActions"></a>

```python
log_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `log_action_states`<sup>Required</sup> <a name="log_action_states" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.logActionStates"></a>

```python
log_action_states: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig">StorageTransferJobLoggingConfig</a>

---


### StorageTransferJobNotificationConfigOutputReference <a name="StorageTransferJobNotificationConfigOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobNotificationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.resetEventTypes">reset_event_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_event_types` <a name="reset_event_types" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.resetEventTypes"></a>

```python
def reset_event_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.eventTypesInput">event_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.payloadFormatInput">payload_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.pubsubTopicInput">pubsub_topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.eventTypes">event_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.payloadFormat">payload_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_types_input`<sup>Optional</sup> <a name="event_types_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.eventTypesInput"></a>

```python
event_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `payload_format_input`<sup>Optional</sup> <a name="payload_format_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.payloadFormatInput"></a>

```python
payload_format_input: str
```

- *Type:* str

---

##### `pubsub_topic_input`<sup>Optional</sup> <a name="pubsub_topic_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.pubsubTopicInput"></a>

```python
pubsub_topic_input: str
```

- *Type:* str

---

##### `event_types`<sup>Required</sup> <a name="event_types" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.eventTypes"></a>

```python
event_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `payload_format`<sup>Required</sup> <a name="payload_format" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.payloadFormat"></a>

```python
payload_format: str
```

- *Type:* str

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a>

---


### StorageTransferJobReplicationSpecGcsDataSinkOutputReference <a name="StorageTransferJobReplicationSpecGcsDataSinkOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink">StorageTransferJobReplicationSpecGcsDataSink</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobReplicationSpecGcsDataSink
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink">StorageTransferJobReplicationSpecGcsDataSink</a>

---


### StorageTransferJobReplicationSpecGcsDataSourceOutputReference <a name="StorageTransferJobReplicationSpecGcsDataSourceOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource">StorageTransferJobReplicationSpecGcsDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobReplicationSpecGcsDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource">StorageTransferJobReplicationSpecGcsDataSource</a>

---


### StorageTransferJobReplicationSpecObjectConditionsOutputReference <a name="StorageTransferJobReplicationSpecObjectConditionsOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetExcludePrefixes">reset_exclude_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetIncludePrefixes">reset_include_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetLastModifiedBefore">reset_last_modified_before</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetLastModifiedSince">reset_last_modified_since</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification">reset_max_time_elapsed_since_last_modification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification">reset_min_time_elapsed_since_last_modification</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude_prefixes` <a name="reset_exclude_prefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetExcludePrefixes"></a>

```python
def reset_exclude_prefixes() -> None
```

##### `reset_include_prefixes` <a name="reset_include_prefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetIncludePrefixes"></a>

```python
def reset_include_prefixes() -> None
```

##### `reset_last_modified_before` <a name="reset_last_modified_before" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetLastModifiedBefore"></a>

```python
def reset_last_modified_before() -> None
```

##### `reset_last_modified_since` <a name="reset_last_modified_since" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetLastModifiedSince"></a>

```python
def reset_last_modified_since() -> None
```

##### `reset_max_time_elapsed_since_last_modification` <a name="reset_max_time_elapsed_since_last_modification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification"></a>

```python
def reset_max_time_elapsed_since_last_modification() -> None
```

##### `reset_min_time_elapsed_since_last_modification` <a name="reset_min_time_elapsed_since_last_modification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification"></a>

```python
def reset_min_time_elapsed_since_last_modification() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.excludePrefixesInput">exclude_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.includePrefixesInput">include_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput">last_modified_before_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedSinceInput">last_modified_since_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput">max_time_elapsed_since_last_modification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput">min_time_elapsed_since_last_modification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.excludePrefixes">exclude_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.includePrefixes">include_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedBefore">last_modified_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedSince">last_modified_since</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification">max_time_elapsed_since_last_modification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification">min_time_elapsed_since_last_modification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions">StorageTransferJobReplicationSpecObjectConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_prefixes_input`<sup>Optional</sup> <a name="exclude_prefixes_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.excludePrefixesInput"></a>

```python
exclude_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_prefixes_input`<sup>Optional</sup> <a name="include_prefixes_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.includePrefixesInput"></a>

```python
include_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `last_modified_before_input`<sup>Optional</sup> <a name="last_modified_before_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput"></a>

```python
last_modified_before_input: str
```

- *Type:* str

---

##### `last_modified_since_input`<sup>Optional</sup> <a name="last_modified_since_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedSinceInput"></a>

```python
last_modified_since_input: str
```

- *Type:* str

---

##### `max_time_elapsed_since_last_modification_input`<sup>Optional</sup> <a name="max_time_elapsed_since_last_modification_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput"></a>

```python
max_time_elapsed_since_last_modification_input: str
```

- *Type:* str

---

##### `min_time_elapsed_since_last_modification_input`<sup>Optional</sup> <a name="min_time_elapsed_since_last_modification_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput"></a>

```python
min_time_elapsed_since_last_modification_input: str
```

- *Type:* str

---

##### `exclude_prefixes`<sup>Required</sup> <a name="exclude_prefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.excludePrefixes"></a>

```python
exclude_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_prefixes`<sup>Required</sup> <a name="include_prefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.includePrefixes"></a>

```python
include_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `last_modified_before`<sup>Required</sup> <a name="last_modified_before" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedBefore"></a>

```python
last_modified_before: str
```

- *Type:* str

---

##### `last_modified_since`<sup>Required</sup> <a name="last_modified_since" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedSince"></a>

```python
last_modified_since: str
```

- *Type:* str

---

##### `max_time_elapsed_since_last_modification`<sup>Required</sup> <a name="max_time_elapsed_since_last_modification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification"></a>

```python
max_time_elapsed_since_last_modification: str
```

- *Type:* str

---

##### `min_time_elapsed_since_last_modification`<sup>Required</sup> <a name="min_time_elapsed_since_last_modification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification"></a>

```python
min_time_elapsed_since_last_modification: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobReplicationSpecObjectConditions
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions">StorageTransferJobReplicationSpecObjectConditions</a>

---


### StorageTransferJobReplicationSpecOutputReference <a name="StorageTransferJobReplicationSpecOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobReplicationSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putGcsDataSink">put_gcs_data_sink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putGcsDataSource">put_gcs_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putObjectConditions">put_object_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putTransferOptions">put_transfer_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resetGcsDataSink">reset_gcs_data_sink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resetGcsDataSource">reset_gcs_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resetObjectConditions">reset_object_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resetTransferOptions">reset_transfer_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gcs_data_sink` <a name="put_gcs_data_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putGcsDataSink"></a>

```python
def put_gcs_data_sink(
  bucket_name: str,
  path: str = None
) -> None
```

###### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putGcsDataSink.parameter.bucketName"></a>

- *Type:* str

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putGcsDataSink.parameter.path"></a>

- *Type:* str

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

##### `put_gcs_data_source` <a name="put_gcs_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putGcsDataSource"></a>

```python
def put_gcs_data_source(
  bucket_name: str,
  path: str = None
) -> None
```

###### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putGcsDataSource.parameter.bucketName"></a>

- *Type:* str

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putGcsDataSource.parameter.path"></a>

- *Type:* str

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

##### `put_object_conditions` <a name="put_object_conditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putObjectConditions"></a>

```python
def put_object_conditions(
  exclude_prefixes: typing.List[str] = None,
  include_prefixes: typing.List[str] = None,
  last_modified_before: str = None,
  last_modified_since: str = None,
  max_time_elapsed_since_last_modification: str = None,
  min_time_elapsed_since_last_modification: str = None
) -> None
```

###### `exclude_prefixes`<sup>Optional</sup> <a name="exclude_prefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putObjectConditions.parameter.excludePrefixes"></a>

- *Type:* typing.List[str]

exclude_prefixes must follow the requirements described for include_prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#exclude_prefixes StorageTransferJob#exclude_prefixes}

---

###### `include_prefixes`<sup>Optional</sup> <a name="include_prefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putObjectConditions.parameter.includePrefixes"></a>

- *Type:* typing.List[str]

If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes.

If include_prefixes is not specified, all objects except those that have names starting with one of the exclude_prefixes must satisfy the object conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#include_prefixes StorageTransferJob#include_prefixes}

---

###### `last_modified_before`<sup>Optional</sup> <a name="last_modified_before" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putObjectConditions.parameter.lastModifiedBefore"></a>

- *Type:* str

If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#last_modified_before StorageTransferJob#last_modified_before}

---

###### `last_modified_since`<sup>Optional</sup> <a name="last_modified_since" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putObjectConditions.parameter.lastModifiedSince"></a>

- *Type:* str

If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#last_modified_since StorageTransferJob#last_modified_since}

---

###### `max_time_elapsed_since_last_modification`<sup>Optional</sup> <a name="max_time_elapsed_since_last_modification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putObjectConditions.parameter.maxTimeElapsedSinceLastModification"></a>

- *Type:* str

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#max_time_elapsed_since_last_modification StorageTransferJob#max_time_elapsed_since_last_modification}

---

###### `min_time_elapsed_since_last_modification`<sup>Optional</sup> <a name="min_time_elapsed_since_last_modification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putObjectConditions.parameter.minTimeElapsedSinceLastModification"></a>

- *Type:* str

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#min_time_elapsed_since_last_modification StorageTransferJob#min_time_elapsed_since_last_modification}

---

##### `put_transfer_options` <a name="put_transfer_options" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putTransferOptions"></a>

```python
def put_transfer_options(
  delete_objects_from_source_after_transfer: typing.Union[bool, IResolvable] = None,
  delete_objects_unique_in_sink: typing.Union[bool, IResolvable] = None,
  metadata_options: StorageTransferJobReplicationSpecTransferOptionsMetadataOptions = None,
  overwrite_objects_already_existing_in_sink: typing.Union[bool, IResolvable] = None,
  overwrite_when: str = None
) -> None
```

###### `delete_objects_from_source_after_transfer`<sup>Optional</sup> <a name="delete_objects_from_source_after_transfer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putTransferOptions.parameter.deleteObjectsFromSourceAfterTransfer"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether objects should be deleted from the source after they are transferred to the sink.

Note that this option and delete_objects_unique_in_sink are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#delete_objects_from_source_after_transfer StorageTransferJob#delete_objects_from_source_after_transfer}

---

###### `delete_objects_unique_in_sink`<sup>Optional</sup> <a name="delete_objects_unique_in_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putTransferOptions.parameter.deleteObjectsUniqueInSink"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether objects that exist only in the sink should be deleted.

Note that this option and delete_objects_from_source_after_transfer are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#delete_objects_unique_in_sink StorageTransferJob#delete_objects_unique_in_sink}

---

###### `metadata_options`<sup>Optional</sup> <a name="metadata_options" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putTransferOptions.parameter.metadataOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions">StorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#metadata_options StorageTransferJob#metadata_options}

---

###### `overwrite_objects_already_existing_in_sink`<sup>Optional</sup> <a name="overwrite_objects_already_existing_in_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putTransferOptions.parameter.overwriteObjectsAlreadyExistingInSink"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether overwriting objects that already exist in the sink is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#overwrite_objects_already_existing_in_sink StorageTransferJob#overwrite_objects_already_existing_in_sink}

---

###### `overwrite_when`<sup>Optional</sup> <a name="overwrite_when" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putTransferOptions.parameter.overwriteWhen"></a>

- *Type:* str

When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#overwrite_when StorageTransferJob#overwrite_when}

---

##### `reset_gcs_data_sink` <a name="reset_gcs_data_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resetGcsDataSink"></a>

```python
def reset_gcs_data_sink() -> None
```

##### `reset_gcs_data_source` <a name="reset_gcs_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resetGcsDataSource"></a>

```python
def reset_gcs_data_source() -> None
```

##### `reset_object_conditions` <a name="reset_object_conditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resetObjectConditions"></a>

```python
def reset_object_conditions() -> None
```

##### `reset_transfer_options` <a name="reset_transfer_options" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resetTransferOptions"></a>

```python
def reset_transfer_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.gcsDataSink">gcs_data_sink</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference">StorageTransferJobReplicationSpecGcsDataSinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.gcsDataSource">gcs_data_source</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference">StorageTransferJobReplicationSpecGcsDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.objectConditions">object_conditions</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference">StorageTransferJobReplicationSpecObjectConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.transferOptions">transfer_options</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference">StorageTransferJobReplicationSpecTransferOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.gcsDataSinkInput">gcs_data_sink_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink">StorageTransferJobReplicationSpecGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.gcsDataSourceInput">gcs_data_source_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource">StorageTransferJobReplicationSpecGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.objectConditionsInput">object_conditions_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions">StorageTransferJobReplicationSpecObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.transferOptionsInput">transfer_options_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions">StorageTransferJobReplicationSpecTransferOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec">StorageTransferJobReplicationSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gcs_data_sink`<sup>Required</sup> <a name="gcs_data_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.gcsDataSink"></a>

```python
gcs_data_sink: StorageTransferJobReplicationSpecGcsDataSinkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference">StorageTransferJobReplicationSpecGcsDataSinkOutputReference</a>

---

##### `gcs_data_source`<sup>Required</sup> <a name="gcs_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.gcsDataSource"></a>

```python
gcs_data_source: StorageTransferJobReplicationSpecGcsDataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference">StorageTransferJobReplicationSpecGcsDataSourceOutputReference</a>

---

##### `object_conditions`<sup>Required</sup> <a name="object_conditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.objectConditions"></a>

```python
object_conditions: StorageTransferJobReplicationSpecObjectConditionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference">StorageTransferJobReplicationSpecObjectConditionsOutputReference</a>

---

##### `transfer_options`<sup>Required</sup> <a name="transfer_options" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.transferOptions"></a>

```python
transfer_options: StorageTransferJobReplicationSpecTransferOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference">StorageTransferJobReplicationSpecTransferOptionsOutputReference</a>

---

##### `gcs_data_sink_input`<sup>Optional</sup> <a name="gcs_data_sink_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.gcsDataSinkInput"></a>

```python
gcs_data_sink_input: StorageTransferJobReplicationSpecGcsDataSink
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink">StorageTransferJobReplicationSpecGcsDataSink</a>

---

##### `gcs_data_source_input`<sup>Optional</sup> <a name="gcs_data_source_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.gcsDataSourceInput"></a>

```python
gcs_data_source_input: StorageTransferJobReplicationSpecGcsDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource">StorageTransferJobReplicationSpecGcsDataSource</a>

---

##### `object_conditions_input`<sup>Optional</sup> <a name="object_conditions_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.objectConditionsInput"></a>

```python
object_conditions_input: StorageTransferJobReplicationSpecObjectConditions
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions">StorageTransferJobReplicationSpecObjectConditions</a>

---

##### `transfer_options_input`<sup>Optional</sup> <a name="transfer_options_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.transferOptionsInput"></a>

```python
transfer_options_input: StorageTransferJobReplicationSpecTransferOptions
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions">StorageTransferJobReplicationSpecTransferOptions</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobReplicationSpec
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec">StorageTransferJobReplicationSpec</a>

---


### StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference <a name="StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetAcl">reset_acl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetGid">reset_gid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetStorageClass">reset_storage_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetSymlink">reset_symlink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetTemporaryHold">reset_temporary_hold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetTimeCreated">reset_time_created</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetUid">reset_uid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_acl` <a name="reset_acl" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetAcl"></a>

```python
def reset_acl() -> None
```

##### `reset_gid` <a name="reset_gid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetGid"></a>

```python
def reset_gid() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_storage_class` <a name="reset_storage_class" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetStorageClass"></a>

```python
def reset_storage_class() -> None
```

##### `reset_symlink` <a name="reset_symlink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetSymlink"></a>

```python
def reset_symlink() -> None
```

##### `reset_temporary_hold` <a name="reset_temporary_hold" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetTemporaryHold"></a>

```python
def reset_temporary_hold() -> None
```

##### `reset_time_created` <a name="reset_time_created" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetTimeCreated"></a>

```python
def reset_time_created() -> None
```

##### `reset_uid` <a name="reset_uid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetUid"></a>

```python
def reset_uid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.aclInput">acl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.gidInput">gid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.symlinkInput">symlink_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHoldInput">temporary_hold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreatedInput">time_created_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.uidInput">uid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.acl">acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.gid">gid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.symlink">symlink</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHold">temporary_hold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions">StorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `acl_input`<sup>Optional</sup> <a name="acl_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.aclInput"></a>

```python
acl_input: str
```

- *Type:* str

---

##### `gid_input`<sup>Optional</sup> <a name="gid_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.gidInput"></a>

```python
gid_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `symlink_input`<sup>Optional</sup> <a name="symlink_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.symlinkInput"></a>

```python
symlink_input: str
```

- *Type:* str

---

##### `temporary_hold_input`<sup>Optional</sup> <a name="temporary_hold_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHoldInput"></a>

```python
temporary_hold_input: str
```

- *Type:* str

---

##### `time_created_input`<sup>Optional</sup> <a name="time_created_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreatedInput"></a>

```python
time_created_input: str
```

- *Type:* str

---

##### `uid_input`<sup>Optional</sup> <a name="uid_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.uidInput"></a>

```python
uid_input: str
```

- *Type:* str

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.acl"></a>

```python
acl: str
```

- *Type:* str

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.gid"></a>

```python
gid: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `symlink`<sup>Required</sup> <a name="symlink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.symlink"></a>

```python
symlink: str
```

- *Type:* str

---

##### `temporary_hold`<sup>Required</sup> <a name="temporary_hold" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHold"></a>

```python
temporary_hold: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobReplicationSpecTransferOptionsMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions">StorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a>

---


### StorageTransferJobReplicationSpecTransferOptionsOutputReference <a name="StorageTransferJobReplicationSpecTransferOptionsOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.putMetadataOptions">put_metadata_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer">reset_delete_objects_from_source_after_transfer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink">reset_delete_objects_unique_in_sink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetMetadataOptions">reset_metadata_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink">reset_overwrite_objects_already_existing_in_sink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetOverwriteWhen">reset_overwrite_when</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metadata_options` <a name="put_metadata_options" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.putMetadataOptions"></a>

```python
def put_metadata_options(
  acl: str = None,
  gid: str = None,
  kms_key: str = None,
  mode: str = None,
  storage_class: str = None,
  symlink: str = None,
  temporary_hold: str = None,
  time_created: str = None,
  uid: str = None
) -> None
```

###### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.putMetadataOptions.parameter.acl"></a>

- *Type:* str

Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#acl StorageTransferJob#acl}

---

###### `gid`<sup>Optional</sup> <a name="gid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.putMetadataOptions.parameter.gid"></a>

- *Type:* str

Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#gid StorageTransferJob#gid}

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.putMetadataOptions.parameter.kmsKey"></a>

- *Type:* str

Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#kms_key StorageTransferJob#kms_key}

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.putMetadataOptions.parameter.mode"></a>

- *Type:* str

Specifies how each file's mode attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#mode StorageTransferJob#mode}

---

###### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.putMetadataOptions.parameter.storageClass"></a>

- *Type:* str

Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#storage_class StorageTransferJob#storage_class}

---

###### `symlink`<sup>Optional</sup> <a name="symlink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.putMetadataOptions.parameter.symlink"></a>

- *Type:* str

Specifies how symlinks should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#symlink StorageTransferJob#symlink}

---

###### `temporary_hold`<sup>Optional</sup> <a name="temporary_hold" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.putMetadataOptions.parameter.temporaryHold"></a>

- *Type:* str

SSpecifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#temporary_hold StorageTransferJob#temporary_hold}

---

###### `time_created`<sup>Optional</sup> <a name="time_created" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.putMetadataOptions.parameter.timeCreated"></a>

- *Type:* str

Specifies how each object's timeCreated metadata is preserved for transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#time_created StorageTransferJob#time_created}

---

###### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.putMetadataOptions.parameter.uid"></a>

- *Type:* str

Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#uid StorageTransferJob#uid}

---

##### `reset_delete_objects_from_source_after_transfer` <a name="reset_delete_objects_from_source_after_transfer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer"></a>

```python
def reset_delete_objects_from_source_after_transfer() -> None
```

##### `reset_delete_objects_unique_in_sink` <a name="reset_delete_objects_unique_in_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink"></a>

```python
def reset_delete_objects_unique_in_sink() -> None
```

##### `reset_metadata_options` <a name="reset_metadata_options" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetMetadataOptions"></a>

```python
def reset_metadata_options() -> None
```

##### `reset_overwrite_objects_already_existing_in_sink` <a name="reset_overwrite_objects_already_existing_in_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink"></a>

```python
def reset_overwrite_objects_already_existing_in_sink() -> None
```

##### `reset_overwrite_when` <a name="reset_overwrite_when" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetOverwriteWhen"></a>

```python
def reset_overwrite_when() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference">StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput">delete_objects_from_source_after_transfer_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput">delete_objects_unique_in_sink_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.metadataOptionsInput">metadata_options_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions">StorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput">overwrite_objects_already_existing_in_sink_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteWhenInput">overwrite_when_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer">delete_objects_from_source_after_transfer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink">delete_objects_unique_in_sink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink">overwrite_objects_already_existing_in_sink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteWhen">overwrite_when</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions">StorageTransferJobReplicationSpecTransferOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metadata_options`<sup>Required</sup> <a name="metadata_options" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.metadataOptions"></a>

```python
metadata_options: StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference">StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference</a>

---

##### `delete_objects_from_source_after_transfer_input`<sup>Optional</sup> <a name="delete_objects_from_source_after_transfer_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput"></a>

```python
delete_objects_from_source_after_transfer_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_objects_unique_in_sink_input`<sup>Optional</sup> <a name="delete_objects_unique_in_sink_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput"></a>

```python
delete_objects_unique_in_sink_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metadata_options_input`<sup>Optional</sup> <a name="metadata_options_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.metadataOptionsInput"></a>

```python
metadata_options_input: StorageTransferJobReplicationSpecTransferOptionsMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions">StorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a>

---

##### `overwrite_objects_already_existing_in_sink_input`<sup>Optional</sup> <a name="overwrite_objects_already_existing_in_sink_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput"></a>

```python
overwrite_objects_already_existing_in_sink_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `overwrite_when_input`<sup>Optional</sup> <a name="overwrite_when_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteWhenInput"></a>

```python
overwrite_when_input: str
```

- *Type:* str

---

##### `delete_objects_from_source_after_transfer`<sup>Required</sup> <a name="delete_objects_from_source_after_transfer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer"></a>

```python
delete_objects_from_source_after_transfer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_objects_unique_in_sink`<sup>Required</sup> <a name="delete_objects_unique_in_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink"></a>

```python
delete_objects_unique_in_sink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `overwrite_objects_already_existing_in_sink`<sup>Required</sup> <a name="overwrite_objects_already_existing_in_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink"></a>

```python
overwrite_objects_already_existing_in_sink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `overwrite_when`<sup>Required</sup> <a name="overwrite_when" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteWhen"></a>

```python
overwrite_when: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobReplicationSpecTransferOptions
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions">StorageTransferJobReplicationSpecTransferOptions</a>

---


### StorageTransferJobScheduleOutputReference <a name="StorageTransferJobScheduleOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleEndDate">put_schedule_end_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleStartDate">put_schedule_start_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putStartTimeOfDay">put_start_time_of_day</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resetRepeatInterval">reset_repeat_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resetScheduleEndDate">reset_schedule_end_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resetStartTimeOfDay">reset_start_time_of_day</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schedule_end_date` <a name="put_schedule_end_date" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleEndDate"></a>

```python
def put_schedule_end_date(
  day: typing.Union[int, float],
  month: typing.Union[int, float],
  year: typing.Union[int, float]
) -> None
```

###### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleEndDate.parameter.day"></a>

- *Type:* typing.Union[int, float]

Day of month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#day StorageTransferJob#day}

---

###### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleEndDate.parameter.month"></a>

- *Type:* typing.Union[int, float]

Month of year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#month StorageTransferJob#month}

---

###### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleEndDate.parameter.year"></a>

- *Type:* typing.Union[int, float]

Year of date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#year StorageTransferJob#year}

---

##### `put_schedule_start_date` <a name="put_schedule_start_date" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleStartDate"></a>

```python
def put_schedule_start_date(
  day: typing.Union[int, float],
  month: typing.Union[int, float],
  year: typing.Union[int, float]
) -> None
```

###### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleStartDate.parameter.day"></a>

- *Type:* typing.Union[int, float]

Day of month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#day StorageTransferJob#day}

---

###### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleStartDate.parameter.month"></a>

- *Type:* typing.Union[int, float]

Month of year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#month StorageTransferJob#month}

---

###### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleStartDate.parameter.year"></a>

- *Type:* typing.Union[int, float]

Year of date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#year StorageTransferJob#year}

---

##### `put_start_time_of_day` <a name="put_start_time_of_day" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putStartTimeOfDay"></a>

```python
def put_start_time_of_day(
  hours: typing.Union[int, float],
  minutes: typing.Union[int, float],
  nanos: typing.Union[int, float],
  seconds: typing.Union[int, float]
) -> None
```

###### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putStartTimeOfDay.parameter.hours"></a>

- *Type:* typing.Union[int, float]

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#hours StorageTransferJob#hours}

---

###### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putStartTimeOfDay.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#minutes StorageTransferJob#minutes}

---

###### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putStartTimeOfDay.parameter.nanos"></a>

- *Type:* typing.Union[int, float]

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#nanos StorageTransferJob#nanos}

---

###### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putStartTimeOfDay.parameter.seconds"></a>

- *Type:* typing.Union[int, float]

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#seconds StorageTransferJob#seconds}

---

##### `reset_repeat_interval` <a name="reset_repeat_interval" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resetRepeatInterval"></a>

```python
def reset_repeat_interval() -> None
```

##### `reset_schedule_end_date` <a name="reset_schedule_end_date" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resetScheduleEndDate"></a>

```python
def reset_schedule_end_date() -> None
```

##### `reset_start_time_of_day` <a name="reset_start_time_of_day" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resetStartTimeOfDay"></a>

```python
def reset_start_time_of_day() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleEndDate">schedule_end_date</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference">StorageTransferJobScheduleScheduleEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleStartDate">schedule_start_date</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference">StorageTransferJobScheduleScheduleStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.startTimeOfDay">start_time_of_day</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference">StorageTransferJobScheduleStartTimeOfDayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.repeatIntervalInput">repeat_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleEndDateInput">schedule_end_date_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleStartDateInput">schedule_start_date_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.startTimeOfDayInput">start_time_of_day_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.repeatInterval">repeat_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule_end_date`<sup>Required</sup> <a name="schedule_end_date" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleEndDate"></a>

```python
schedule_end_date: StorageTransferJobScheduleScheduleEndDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference">StorageTransferJobScheduleScheduleEndDateOutputReference</a>

---

##### `schedule_start_date`<sup>Required</sup> <a name="schedule_start_date" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleStartDate"></a>

```python
schedule_start_date: StorageTransferJobScheduleScheduleStartDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference">StorageTransferJobScheduleScheduleStartDateOutputReference</a>

---

##### `start_time_of_day`<sup>Required</sup> <a name="start_time_of_day" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.startTimeOfDay"></a>

```python
start_time_of_day: StorageTransferJobScheduleStartTimeOfDayOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference">StorageTransferJobScheduleStartTimeOfDayOutputReference</a>

---

##### `repeat_interval_input`<sup>Optional</sup> <a name="repeat_interval_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.repeatIntervalInput"></a>

```python
repeat_interval_input: str
```

- *Type:* str

---

##### `schedule_end_date_input`<sup>Optional</sup> <a name="schedule_end_date_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleEndDateInput"></a>

```python
schedule_end_date_input: StorageTransferJobScheduleScheduleEndDate
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a>

---

##### `schedule_start_date_input`<sup>Optional</sup> <a name="schedule_start_date_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleStartDateInput"></a>

```python
schedule_start_date_input: StorageTransferJobScheduleScheduleStartDate
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a>

---

##### `start_time_of_day_input`<sup>Optional</sup> <a name="start_time_of_day_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.startTimeOfDayInput"></a>

```python
start_time_of_day_input: StorageTransferJobScheduleStartTimeOfDay
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a>

---

##### `repeat_interval`<sup>Required</sup> <a name="repeat_interval" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.repeatInterval"></a>

```python
repeat_interval: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobSchedule
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a>

---


### StorageTransferJobScheduleScheduleEndDateOutputReference <a name="StorageTransferJobScheduleScheduleEndDateOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.dayInput">day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.monthInput">month_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.yearInput">year_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.month">month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.year">year</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.dayInput"></a>

```python
day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month_input`<sup>Optional</sup> <a name="month_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.monthInput"></a>

```python
month_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year_input`<sup>Optional</sup> <a name="year_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.yearInput"></a>

```python
year_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobScheduleScheduleEndDate
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a>

---


### StorageTransferJobScheduleScheduleStartDateOutputReference <a name="StorageTransferJobScheduleScheduleStartDateOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.dayInput">day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.monthInput">month_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.yearInput">year_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.month">month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.year">year</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.dayInput"></a>

```python
day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month_input`<sup>Optional</sup> <a name="month_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.monthInput"></a>

```python
month_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year_input`<sup>Optional</sup> <a name="year_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.yearInput"></a>

```python
year_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobScheduleScheduleStartDate
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a>

---


### StorageTransferJobScheduleStartTimeOfDayOutputReference <a name="StorageTransferJobScheduleStartTimeOfDayOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.hoursInput"></a>

```python
hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobScheduleStartTimeOfDay
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a>

---


### StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference <a name="StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyIdInput">access_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKeyInput">secret_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyId">access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_key_id_input`<sup>Optional</sup> <a name="access_key_id_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyIdInput"></a>

```python
access_key_id_input: str
```

- *Type:* str

---

##### `secret_access_key_input`<sup>Optional</sup> <a name="secret_access_key_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKeyInput"></a>

```python
secret_access_key_input: str
```

- *Type:* str

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

---


### StorageTransferJobTransferSpecAwsS3DataSourceOutputReference <a name="StorageTransferJobTransferSpecAwsS3DataSourceOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.putAwsAccessKey">put_aws_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetAwsAccessKey">reset_aws_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_access_key` <a name="put_aws_access_key" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.putAwsAccessKey"></a>

```python
def put_aws_access_key(
  access_key_id: str,
  secret_access_key: str
) -> None
```

###### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.putAwsAccessKey.parameter.accessKeyId"></a>

- *Type:* str

AWS Key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#access_key_id StorageTransferJob#access_key_id}

---

###### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.putAwsAccessKey.parameter.secretAccessKey"></a>

- *Type:* str

AWS Secret Access Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#secret_access_key StorageTransferJob#secret_access_key}

---

##### `reset_aws_access_key` <a name="reset_aws_access_key" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetAwsAccessKey"></a>

```python
def reset_aws_access_key() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKey">aws_access_key</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKeyInput">aws_access_key_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_access_key`<sup>Required</sup> <a name="aws_access_key" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKey"></a>

```python
aws_access_key: StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference</a>

---

##### `aws_access_key_input`<sup>Optional</sup> <a name="aws_access_key_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKeyInput"></a>

```python
aws_access_key_input: StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobTransferSpecAwsS3DataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a>

---


### StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference <a name="StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasTokenInput">sas_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasToken">sas_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sas_token_input`<sup>Optional</sup> <a name="sas_token_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasTokenInput"></a>

```python
sas_token_input: str
```

- *Type:* str

---

##### `sas_token`<sup>Required</sup> <a name="sas_token" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasToken"></a>

```python
sas_token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

---


### StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference <a name="StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.putAzureCredentials">put_azure_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_azure_credentials` <a name="put_azure_credentials" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.putAzureCredentials"></a>

```python
def put_azure_credentials(
  sas_token: str
) -> None
```

###### `sas_token`<sup>Required</sup> <a name="sas_token" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.putAzureCredentials.parameter.sasToken"></a>

- *Type:* str

Azure shared access signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#sas_token StorageTransferJob#sas_token}

---

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentials">azure_credentials</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentialsInput">azure_credentials_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.containerInput">container_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccountInput">storage_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.container">container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccount">storage_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_credentials`<sup>Required</sup> <a name="azure_credentials" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentials"></a>

```python
azure_credentials: StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference</a>

---

##### `azure_credentials_input`<sup>Optional</sup> <a name="azure_credentials_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentialsInput"></a>

```python
azure_credentials_input: StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.containerInput"></a>

```python
container_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `storage_account_input`<sup>Optional</sup> <a name="storage_account_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccountInput"></a>

```python
storage_account_input: str
```

- *Type:* str

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.container"></a>

```python
container: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccount"></a>

```python
storage_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobTransferSpecAzureBlobStorageDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

---


### StorageTransferJobTransferSpecGcsDataSinkOutputReference <a name="StorageTransferJobTransferSpecGcsDataSinkOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobTransferSpecGcsDataSink
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a>

---


### StorageTransferJobTransferSpecGcsDataSourceOutputReference <a name="StorageTransferJobTransferSpecGcsDataSourceOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobTransferSpecGcsDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a>

---


### StorageTransferJobTransferSpecHdfsDataSourceOutputReference <a name="StorageTransferJobTransferSpecHdfsDataSourceOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource">StorageTransferJobTransferSpecHdfsDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobTransferSpecHdfsDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource">StorageTransferJobTransferSpecHdfsDataSource</a>

---


### StorageTransferJobTransferSpecHttpDataSourceOutputReference <a name="StorageTransferJobTransferSpecHttpDataSourceOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrlInput">list_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrl">list_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `list_url_input`<sup>Optional</sup> <a name="list_url_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrlInput"></a>

```python
list_url_input: str
```

- *Type:* str

---

##### `list_url`<sup>Required</sup> <a name="list_url" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrl"></a>

```python
list_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobTransferSpecHttpDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a>

---


### StorageTransferJobTransferSpecObjectConditionsOutputReference <a name="StorageTransferJobTransferSpecObjectConditionsOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetExcludePrefixes">reset_exclude_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetIncludePrefixes">reset_include_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedBefore">reset_last_modified_before</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedSince">reset_last_modified_since</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification">reset_max_time_elapsed_since_last_modification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification">reset_min_time_elapsed_since_last_modification</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude_prefixes` <a name="reset_exclude_prefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetExcludePrefixes"></a>

```python
def reset_exclude_prefixes() -> None
```

##### `reset_include_prefixes` <a name="reset_include_prefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetIncludePrefixes"></a>

```python
def reset_include_prefixes() -> None
```

##### `reset_last_modified_before` <a name="reset_last_modified_before" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedBefore"></a>

```python
def reset_last_modified_before() -> None
```

##### `reset_last_modified_since` <a name="reset_last_modified_since" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedSince"></a>

```python
def reset_last_modified_since() -> None
```

##### `reset_max_time_elapsed_since_last_modification` <a name="reset_max_time_elapsed_since_last_modification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification"></a>

```python
def reset_max_time_elapsed_since_last_modification() -> None
```

##### `reset_min_time_elapsed_since_last_modification` <a name="reset_min_time_elapsed_since_last_modification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification"></a>

```python
def reset_min_time_elapsed_since_last_modification() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixesInput">exclude_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixesInput">include_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput">last_modified_before_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSinceInput">last_modified_since_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput">max_time_elapsed_since_last_modification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput">min_time_elapsed_since_last_modification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixes">exclude_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixes">include_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBefore">last_modified_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSince">last_modified_since</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification">max_time_elapsed_since_last_modification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification">min_time_elapsed_since_last_modification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_prefixes_input`<sup>Optional</sup> <a name="exclude_prefixes_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixesInput"></a>

```python
exclude_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_prefixes_input`<sup>Optional</sup> <a name="include_prefixes_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixesInput"></a>

```python
include_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `last_modified_before_input`<sup>Optional</sup> <a name="last_modified_before_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput"></a>

```python
last_modified_before_input: str
```

- *Type:* str

---

##### `last_modified_since_input`<sup>Optional</sup> <a name="last_modified_since_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSinceInput"></a>

```python
last_modified_since_input: str
```

- *Type:* str

---

##### `max_time_elapsed_since_last_modification_input`<sup>Optional</sup> <a name="max_time_elapsed_since_last_modification_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput"></a>

```python
max_time_elapsed_since_last_modification_input: str
```

- *Type:* str

---

##### `min_time_elapsed_since_last_modification_input`<sup>Optional</sup> <a name="min_time_elapsed_since_last_modification_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput"></a>

```python
min_time_elapsed_since_last_modification_input: str
```

- *Type:* str

---

##### `exclude_prefixes`<sup>Required</sup> <a name="exclude_prefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixes"></a>

```python
exclude_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_prefixes`<sup>Required</sup> <a name="include_prefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixes"></a>

```python
include_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `last_modified_before`<sup>Required</sup> <a name="last_modified_before" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBefore"></a>

```python
last_modified_before: str
```

- *Type:* str

---

##### `last_modified_since`<sup>Required</sup> <a name="last_modified_since" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSince"></a>

```python
last_modified_since: str
```

- *Type:* str

---

##### `max_time_elapsed_since_last_modification`<sup>Required</sup> <a name="max_time_elapsed_since_last_modification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification"></a>

```python
max_time_elapsed_since_last_modification: str
```

- *Type:* str

---

##### `min_time_elapsed_since_last_modification`<sup>Required</sup> <a name="min_time_elapsed_since_last_modification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification"></a>

```python
min_time_elapsed_since_last_modification: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobTransferSpecObjectConditions
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a>

---


### StorageTransferJobTransferSpecOutputReference <a name="StorageTransferJobTransferSpecOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAwsS3DataSource">put_aws_s3_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource">put_azure_blob_storage_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSink">put_gcs_data_sink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSource">put_gcs_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putHdfsDataSource">put_hdfs_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putHttpDataSource">put_http_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putObjectConditions">put_object_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putPosixDataSink">put_posix_data_sink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putPosixDataSource">put_posix_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putTransferOptions">put_transfer_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetAwsS3DataSource">reset_aws_s3_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetAzureBlobStorageDataSource">reset_azure_blob_storage_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetGcsDataSink">reset_gcs_data_sink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetGcsDataSource">reset_gcs_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetHdfsDataSource">reset_hdfs_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetHttpDataSource">reset_http_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetObjectConditions">reset_object_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetPosixDataSink">reset_posix_data_sink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetPosixDataSource">reset_posix_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetSinkAgentPoolName">reset_sink_agent_pool_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetSourceAgentPoolName">reset_source_agent_pool_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetTransferOptions">reset_transfer_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_s3_data_source` <a name="put_aws_s3_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAwsS3DataSource"></a>

```python
def put_aws_s3_data_source(
  bucket_name: str,
  aws_access_key: StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey = None,
  path: str = None,
  role_arn: str = None
) -> None
```

###### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAwsS3DataSource.parameter.bucketName"></a>

- *Type:* str

S3 Bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}

---

###### `aws_access_key`<sup>Optional</sup> <a name="aws_access_key" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAwsS3DataSource.parameter.awsAccessKey"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

aws_access_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#aws_access_key StorageTransferJob#aws_access_key}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAwsS3DataSource.parameter.path"></a>

- *Type:* str

S3 Bucket path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAwsS3DataSource.parameter.roleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the role to support temporary credentials via 'AssumeRoleWithWebIdentity'.

For more information about ARNs, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns). When a role ARN is provided, Transfer Service fetches temporary credentials for the session using a 'AssumeRoleWithWebIdentity' call for the provided role using the [GoogleServiceAccount][] for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#role_arn StorageTransferJob#role_arn}

---

##### `put_azure_blob_storage_data_source` <a name="put_azure_blob_storage_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource"></a>

```python
def put_azure_blob_storage_data_source(
  azure_credentials: StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials,
  container: str,
  storage_account: str,
  path: str = None
) -> None
```

###### `azure_credentials`<sup>Required</sup> <a name="azure_credentials" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource.parameter.azureCredentials"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

azure_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#azure_credentials StorageTransferJob#azure_credentials}

---

###### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource.parameter.container"></a>

- *Type:* str

The container to transfer from the Azure Storage account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#container StorageTransferJob#container}

---

###### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource.parameter.storageAccount"></a>

- *Type:* str

The name of the Azure Storage account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#storage_account StorageTransferJob#storage_account}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource.parameter.path"></a>

- *Type:* str

Root path to transfer objects.

Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

##### `put_gcs_data_sink` <a name="put_gcs_data_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSink"></a>

```python
def put_gcs_data_sink(
  bucket_name: str,
  path: str = None
) -> None
```

###### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSink.parameter.bucketName"></a>

- *Type:* str

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSink.parameter.path"></a>

- *Type:* str

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

##### `put_gcs_data_source` <a name="put_gcs_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSource"></a>

```python
def put_gcs_data_source(
  bucket_name: str,
  path: str = None
) -> None
```

###### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSource.parameter.bucketName"></a>

- *Type:* str

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSource.parameter.path"></a>

- *Type:* str

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

##### `put_hdfs_data_source` <a name="put_hdfs_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putHdfsDataSource"></a>

```python
def put_hdfs_data_source(
  path: str
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putHdfsDataSource.parameter.path"></a>

- *Type:* str

Directory path to the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

##### `put_http_data_source` <a name="put_http_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putHttpDataSource"></a>

```python
def put_http_data_source(
  list_url: str
) -> None
```

###### `list_url`<sup>Required</sup> <a name="list_url" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putHttpDataSource.parameter.listUrl"></a>

- *Type:* str

The URL that points to the file that stores the object list entries.

This file must allow public access. Currently, only URLs with HTTP and HTTPS schemes are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#list_url StorageTransferJob#list_url}

---

##### `put_object_conditions` <a name="put_object_conditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putObjectConditions"></a>

```python
def put_object_conditions(
  exclude_prefixes: typing.List[str] = None,
  include_prefixes: typing.List[str] = None,
  last_modified_before: str = None,
  last_modified_since: str = None,
  max_time_elapsed_since_last_modification: str = None,
  min_time_elapsed_since_last_modification: str = None
) -> None
```

###### `exclude_prefixes`<sup>Optional</sup> <a name="exclude_prefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putObjectConditions.parameter.excludePrefixes"></a>

- *Type:* typing.List[str]

exclude_prefixes must follow the requirements described for include_prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#exclude_prefixes StorageTransferJob#exclude_prefixes}

---

###### `include_prefixes`<sup>Optional</sup> <a name="include_prefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putObjectConditions.parameter.includePrefixes"></a>

- *Type:* typing.List[str]

If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes.

If include_prefixes is not specified, all objects except those that have names starting with one of the exclude_prefixes must satisfy the object conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#include_prefixes StorageTransferJob#include_prefixes}

---

###### `last_modified_before`<sup>Optional</sup> <a name="last_modified_before" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putObjectConditions.parameter.lastModifiedBefore"></a>

- *Type:* str

If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#last_modified_before StorageTransferJob#last_modified_before}

---

###### `last_modified_since`<sup>Optional</sup> <a name="last_modified_since" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putObjectConditions.parameter.lastModifiedSince"></a>

- *Type:* str

If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#last_modified_since StorageTransferJob#last_modified_since}

---

###### `max_time_elapsed_since_last_modification`<sup>Optional</sup> <a name="max_time_elapsed_since_last_modification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putObjectConditions.parameter.maxTimeElapsedSinceLastModification"></a>

- *Type:* str

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#max_time_elapsed_since_last_modification StorageTransferJob#max_time_elapsed_since_last_modification}

---

###### `min_time_elapsed_since_last_modification`<sup>Optional</sup> <a name="min_time_elapsed_since_last_modification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putObjectConditions.parameter.minTimeElapsedSinceLastModification"></a>

- *Type:* str

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#min_time_elapsed_since_last_modification StorageTransferJob#min_time_elapsed_since_last_modification}

---

##### `put_posix_data_sink` <a name="put_posix_data_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putPosixDataSink"></a>

```python
def put_posix_data_sink(
  root_directory: str
) -> None
```

###### `root_directory`<sup>Required</sup> <a name="root_directory" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putPosixDataSink.parameter.rootDirectory"></a>

- *Type:* str

Root directory path to the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#root_directory StorageTransferJob#root_directory}

---

##### `put_posix_data_source` <a name="put_posix_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putPosixDataSource"></a>

```python
def put_posix_data_source(
  root_directory: str
) -> None
```

###### `root_directory`<sup>Required</sup> <a name="root_directory" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putPosixDataSource.parameter.rootDirectory"></a>

- *Type:* str

Root directory path to the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#root_directory StorageTransferJob#root_directory}

---

##### `put_transfer_options` <a name="put_transfer_options" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putTransferOptions"></a>

```python
def put_transfer_options(
  delete_objects_from_source_after_transfer: typing.Union[bool, IResolvable] = None,
  delete_objects_unique_in_sink: typing.Union[bool, IResolvable] = None,
  metadata_options: StorageTransferJobTransferSpecTransferOptionsMetadataOptions = None,
  overwrite_objects_already_existing_in_sink: typing.Union[bool, IResolvable] = None,
  overwrite_when: str = None
) -> None
```

###### `delete_objects_from_source_after_transfer`<sup>Optional</sup> <a name="delete_objects_from_source_after_transfer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putTransferOptions.parameter.deleteObjectsFromSourceAfterTransfer"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether objects should be deleted from the source after they are transferred to the sink.

Note that this option and delete_objects_unique_in_sink are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#delete_objects_from_source_after_transfer StorageTransferJob#delete_objects_from_source_after_transfer}

---

###### `delete_objects_unique_in_sink`<sup>Optional</sup> <a name="delete_objects_unique_in_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putTransferOptions.parameter.deleteObjectsUniqueInSink"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether objects that exist only in the sink should be deleted.

Note that this option and delete_objects_from_source_after_transfer are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#delete_objects_unique_in_sink StorageTransferJob#delete_objects_unique_in_sink}

---

###### `metadata_options`<sup>Optional</sup> <a name="metadata_options" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putTransferOptions.parameter.metadataOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions">StorageTransferJobTransferSpecTransferOptionsMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#metadata_options StorageTransferJob#metadata_options}

---

###### `overwrite_objects_already_existing_in_sink`<sup>Optional</sup> <a name="overwrite_objects_already_existing_in_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putTransferOptions.parameter.overwriteObjectsAlreadyExistingInSink"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether overwriting objects that already exist in the sink is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#overwrite_objects_already_existing_in_sink StorageTransferJob#overwrite_objects_already_existing_in_sink}

---

###### `overwrite_when`<sup>Optional</sup> <a name="overwrite_when" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putTransferOptions.parameter.overwriteWhen"></a>

- *Type:* str

When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#overwrite_when StorageTransferJob#overwrite_when}

---

##### `reset_aws_s3_data_source` <a name="reset_aws_s3_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetAwsS3DataSource"></a>

```python
def reset_aws_s3_data_source() -> None
```

##### `reset_azure_blob_storage_data_source` <a name="reset_azure_blob_storage_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetAzureBlobStorageDataSource"></a>

```python
def reset_azure_blob_storage_data_source() -> None
```

##### `reset_gcs_data_sink` <a name="reset_gcs_data_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetGcsDataSink"></a>

```python
def reset_gcs_data_sink() -> None
```

##### `reset_gcs_data_source` <a name="reset_gcs_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetGcsDataSource"></a>

```python
def reset_gcs_data_source() -> None
```

##### `reset_hdfs_data_source` <a name="reset_hdfs_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetHdfsDataSource"></a>

```python
def reset_hdfs_data_source() -> None
```

##### `reset_http_data_source` <a name="reset_http_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetHttpDataSource"></a>

```python
def reset_http_data_source() -> None
```

##### `reset_object_conditions` <a name="reset_object_conditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetObjectConditions"></a>

```python
def reset_object_conditions() -> None
```

##### `reset_posix_data_sink` <a name="reset_posix_data_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetPosixDataSink"></a>

```python
def reset_posix_data_sink() -> None
```

##### `reset_posix_data_source` <a name="reset_posix_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetPosixDataSource"></a>

```python
def reset_posix_data_source() -> None
```

##### `reset_sink_agent_pool_name` <a name="reset_sink_agent_pool_name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetSinkAgentPoolName"></a>

```python
def reset_sink_agent_pool_name() -> None
```

##### `reset_source_agent_pool_name` <a name="reset_source_agent_pool_name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetSourceAgentPoolName"></a>

```python
def reset_source_agent_pool_name() -> None
```

##### `reset_transfer_options` <a name="reset_transfer_options" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetTransferOptions"></a>

```python
def reset_transfer_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.awsS3DataSource">aws_s3_data_source</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference">StorageTransferJobTransferSpecAwsS3DataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSource">azure_blob_storage_data_source</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference">StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSink">gcs_data_sink</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference">StorageTransferJobTransferSpecGcsDataSinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSource">gcs_data_source</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference">StorageTransferJobTransferSpecGcsDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.hdfsDataSource">hdfs_data_source</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference">StorageTransferJobTransferSpecHdfsDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.httpDataSource">http_data_source</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference">StorageTransferJobTransferSpecHttpDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.objectConditions">object_conditions</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference">StorageTransferJobTransferSpecObjectConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSink">posix_data_sink</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference">StorageTransferJobTransferSpecPosixDataSinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSource">posix_data_source</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference">StorageTransferJobTransferSpecPosixDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.transferOptions">transfer_options</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference">StorageTransferJobTransferSpecTransferOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.awsS3DataSourceInput">aws_s3_data_source_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSourceInput">azure_blob_storage_data_source_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSinkInput">gcs_data_sink_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSourceInput">gcs_data_source_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.hdfsDataSourceInput">hdfs_data_source_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource">StorageTransferJobTransferSpecHdfsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.httpDataSourceInput">http_data_source_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.objectConditionsInput">object_conditions_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSinkInput">posix_data_sink_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSourceInput">posix_data_source_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolNameInput">sink_agent_pool_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolNameInput">source_agent_pool_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.transferOptionsInput">transfer_options_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolName">sink_agent_pool_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolName">source_agent_pool_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_s3_data_source`<sup>Required</sup> <a name="aws_s3_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.awsS3DataSource"></a>

```python
aws_s3_data_source: StorageTransferJobTransferSpecAwsS3DataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference">StorageTransferJobTransferSpecAwsS3DataSourceOutputReference</a>

---

##### `azure_blob_storage_data_source`<sup>Required</sup> <a name="azure_blob_storage_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSource"></a>

```python
azure_blob_storage_data_source: StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference">StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference</a>

---

##### `gcs_data_sink`<sup>Required</sup> <a name="gcs_data_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSink"></a>

```python
gcs_data_sink: StorageTransferJobTransferSpecGcsDataSinkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference">StorageTransferJobTransferSpecGcsDataSinkOutputReference</a>

---

##### `gcs_data_source`<sup>Required</sup> <a name="gcs_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSource"></a>

```python
gcs_data_source: StorageTransferJobTransferSpecGcsDataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference">StorageTransferJobTransferSpecGcsDataSourceOutputReference</a>

---

##### `hdfs_data_source`<sup>Required</sup> <a name="hdfs_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.hdfsDataSource"></a>

```python
hdfs_data_source: StorageTransferJobTransferSpecHdfsDataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference">StorageTransferJobTransferSpecHdfsDataSourceOutputReference</a>

---

##### `http_data_source`<sup>Required</sup> <a name="http_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.httpDataSource"></a>

```python
http_data_source: StorageTransferJobTransferSpecHttpDataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference">StorageTransferJobTransferSpecHttpDataSourceOutputReference</a>

---

##### `object_conditions`<sup>Required</sup> <a name="object_conditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.objectConditions"></a>

```python
object_conditions: StorageTransferJobTransferSpecObjectConditionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference">StorageTransferJobTransferSpecObjectConditionsOutputReference</a>

---

##### `posix_data_sink`<sup>Required</sup> <a name="posix_data_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSink"></a>

```python
posix_data_sink: StorageTransferJobTransferSpecPosixDataSinkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference">StorageTransferJobTransferSpecPosixDataSinkOutputReference</a>

---

##### `posix_data_source`<sup>Required</sup> <a name="posix_data_source" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSource"></a>

```python
posix_data_source: StorageTransferJobTransferSpecPosixDataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference">StorageTransferJobTransferSpecPosixDataSourceOutputReference</a>

---

##### `transfer_options`<sup>Required</sup> <a name="transfer_options" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.transferOptions"></a>

```python
transfer_options: StorageTransferJobTransferSpecTransferOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference">StorageTransferJobTransferSpecTransferOptionsOutputReference</a>

---

##### `aws_s3_data_source_input`<sup>Optional</sup> <a name="aws_s3_data_source_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.awsS3DataSourceInput"></a>

```python
aws_s3_data_source_input: StorageTransferJobTransferSpecAwsS3DataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a>

---

##### `azure_blob_storage_data_source_input`<sup>Optional</sup> <a name="azure_blob_storage_data_source_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSourceInput"></a>

```python
azure_blob_storage_data_source_input: StorageTransferJobTransferSpecAzureBlobStorageDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

---

##### `gcs_data_sink_input`<sup>Optional</sup> <a name="gcs_data_sink_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSinkInput"></a>

```python
gcs_data_sink_input: StorageTransferJobTransferSpecGcsDataSink
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a>

---

##### `gcs_data_source_input`<sup>Optional</sup> <a name="gcs_data_source_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSourceInput"></a>

```python
gcs_data_source_input: StorageTransferJobTransferSpecGcsDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a>

---

##### `hdfs_data_source_input`<sup>Optional</sup> <a name="hdfs_data_source_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.hdfsDataSourceInput"></a>

```python
hdfs_data_source_input: StorageTransferJobTransferSpecHdfsDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource">StorageTransferJobTransferSpecHdfsDataSource</a>

---

##### `http_data_source_input`<sup>Optional</sup> <a name="http_data_source_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.httpDataSourceInput"></a>

```python
http_data_source_input: StorageTransferJobTransferSpecHttpDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a>

---

##### `object_conditions_input`<sup>Optional</sup> <a name="object_conditions_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.objectConditionsInput"></a>

```python
object_conditions_input: StorageTransferJobTransferSpecObjectConditions
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a>

---

##### `posix_data_sink_input`<sup>Optional</sup> <a name="posix_data_sink_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSinkInput"></a>

```python
posix_data_sink_input: StorageTransferJobTransferSpecPosixDataSink
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a>

---

##### `posix_data_source_input`<sup>Optional</sup> <a name="posix_data_source_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSourceInput"></a>

```python
posix_data_source_input: StorageTransferJobTransferSpecPosixDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a>

---

##### `sink_agent_pool_name_input`<sup>Optional</sup> <a name="sink_agent_pool_name_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolNameInput"></a>

```python
sink_agent_pool_name_input: str
```

- *Type:* str

---

##### `source_agent_pool_name_input`<sup>Optional</sup> <a name="source_agent_pool_name_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolNameInput"></a>

```python
source_agent_pool_name_input: str
```

- *Type:* str

---

##### `transfer_options_input`<sup>Optional</sup> <a name="transfer_options_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.transferOptionsInput"></a>

```python
transfer_options_input: StorageTransferJobTransferSpecTransferOptions
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a>

---

##### `sink_agent_pool_name`<sup>Required</sup> <a name="sink_agent_pool_name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolName"></a>

```python
sink_agent_pool_name: str
```

- *Type:* str

---

##### `source_agent_pool_name`<sup>Required</sup> <a name="source_agent_pool_name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolName"></a>

```python
source_agent_pool_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobTransferSpec
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a>

---


### StorageTransferJobTransferSpecPosixDataSinkOutputReference <a name="StorageTransferJobTransferSpecPosixDataSinkOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectoryInput">root_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectory">root_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `root_directory_input`<sup>Optional</sup> <a name="root_directory_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectoryInput"></a>

```python
root_directory_input: str
```

- *Type:* str

---

##### `root_directory`<sup>Required</sup> <a name="root_directory" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectory"></a>

```python
root_directory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobTransferSpecPosixDataSink
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a>

---


### StorageTransferJobTransferSpecPosixDataSourceOutputReference <a name="StorageTransferJobTransferSpecPosixDataSourceOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectoryInput">root_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectory">root_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `root_directory_input`<sup>Optional</sup> <a name="root_directory_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectoryInput"></a>

```python
root_directory_input: str
```

- *Type:* str

---

##### `root_directory`<sup>Required</sup> <a name="root_directory" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectory"></a>

```python
root_directory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobTransferSpecPosixDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a>

---


### StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference <a name="StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetAcl">reset_acl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetGid">reset_gid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetStorageClass">reset_storage_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetSymlink">reset_symlink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetTemporaryHold">reset_temporary_hold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetTimeCreated">reset_time_created</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetUid">reset_uid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_acl` <a name="reset_acl" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetAcl"></a>

```python
def reset_acl() -> None
```

##### `reset_gid` <a name="reset_gid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetGid"></a>

```python
def reset_gid() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_storage_class` <a name="reset_storage_class" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetStorageClass"></a>

```python
def reset_storage_class() -> None
```

##### `reset_symlink` <a name="reset_symlink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetSymlink"></a>

```python
def reset_symlink() -> None
```

##### `reset_temporary_hold` <a name="reset_temporary_hold" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetTemporaryHold"></a>

```python
def reset_temporary_hold() -> None
```

##### `reset_time_created` <a name="reset_time_created" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetTimeCreated"></a>

```python
def reset_time_created() -> None
```

##### `reset_uid` <a name="reset_uid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetUid"></a>

```python
def reset_uid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.aclInput">acl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.gidInput">gid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.symlinkInput">symlink_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHoldInput">temporary_hold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreatedInput">time_created_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.uidInput">uid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.acl">acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.gid">gid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.symlink">symlink</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHold">temporary_hold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions">StorageTransferJobTransferSpecTransferOptionsMetadataOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `acl_input`<sup>Optional</sup> <a name="acl_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.aclInput"></a>

```python
acl_input: str
```

- *Type:* str

---

##### `gid_input`<sup>Optional</sup> <a name="gid_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.gidInput"></a>

```python
gid_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `symlink_input`<sup>Optional</sup> <a name="symlink_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.symlinkInput"></a>

```python
symlink_input: str
```

- *Type:* str

---

##### `temporary_hold_input`<sup>Optional</sup> <a name="temporary_hold_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHoldInput"></a>

```python
temporary_hold_input: str
```

- *Type:* str

---

##### `time_created_input`<sup>Optional</sup> <a name="time_created_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreatedInput"></a>

```python
time_created_input: str
```

- *Type:* str

---

##### `uid_input`<sup>Optional</sup> <a name="uid_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.uidInput"></a>

```python
uid_input: str
```

- *Type:* str

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.acl"></a>

```python
acl: str
```

- *Type:* str

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.gid"></a>

```python
gid: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `symlink`<sup>Required</sup> <a name="symlink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.symlink"></a>

```python
symlink: str
```

- *Type:* str

---

##### `temporary_hold`<sup>Required</sup> <a name="temporary_hold" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHold"></a>

```python
temporary_hold: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobTransferSpecTransferOptionsMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions">StorageTransferJobTransferSpecTransferOptionsMetadataOptions</a>

---


### StorageTransferJobTransferSpecTransferOptionsOutputReference <a name="StorageTransferJobTransferSpecTransferOptionsOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_job

storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.putMetadataOptions">put_metadata_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer">reset_delete_objects_from_source_after_transfer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink">reset_delete_objects_unique_in_sink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetMetadataOptions">reset_metadata_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink">reset_overwrite_objects_already_existing_in_sink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteWhen">reset_overwrite_when</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metadata_options` <a name="put_metadata_options" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.putMetadataOptions"></a>

```python
def put_metadata_options(
  acl: str = None,
  gid: str = None,
  kms_key: str = None,
  mode: str = None,
  storage_class: str = None,
  symlink: str = None,
  temporary_hold: str = None,
  time_created: str = None,
  uid: str = None
) -> None
```

###### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.putMetadataOptions.parameter.acl"></a>

- *Type:* str

Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#acl StorageTransferJob#acl}

---

###### `gid`<sup>Optional</sup> <a name="gid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.putMetadataOptions.parameter.gid"></a>

- *Type:* str

Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#gid StorageTransferJob#gid}

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.putMetadataOptions.parameter.kmsKey"></a>

- *Type:* str

Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#kms_key StorageTransferJob#kms_key}

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.putMetadataOptions.parameter.mode"></a>

- *Type:* str

Specifies how each file's mode attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#mode StorageTransferJob#mode}

---

###### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.putMetadataOptions.parameter.storageClass"></a>

- *Type:* str

Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#storage_class StorageTransferJob#storage_class}

---

###### `symlink`<sup>Optional</sup> <a name="symlink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.putMetadataOptions.parameter.symlink"></a>

- *Type:* str

Specifies how symlinks should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#symlink StorageTransferJob#symlink}

---

###### `temporary_hold`<sup>Optional</sup> <a name="temporary_hold" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.putMetadataOptions.parameter.temporaryHold"></a>

- *Type:* str

SSpecifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#temporary_hold StorageTransferJob#temporary_hold}

---

###### `time_created`<sup>Optional</sup> <a name="time_created" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.putMetadataOptions.parameter.timeCreated"></a>

- *Type:* str

Specifies how each object's timeCreated metadata is preserved for transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#time_created StorageTransferJob#time_created}

---

###### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.putMetadataOptions.parameter.uid"></a>

- *Type:* str

Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/storage_transfer_job#uid StorageTransferJob#uid}

---

##### `reset_delete_objects_from_source_after_transfer` <a name="reset_delete_objects_from_source_after_transfer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer"></a>

```python
def reset_delete_objects_from_source_after_transfer() -> None
```

##### `reset_delete_objects_unique_in_sink` <a name="reset_delete_objects_unique_in_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink"></a>

```python
def reset_delete_objects_unique_in_sink() -> None
```

##### `reset_metadata_options` <a name="reset_metadata_options" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetMetadataOptions"></a>

```python
def reset_metadata_options() -> None
```

##### `reset_overwrite_objects_already_existing_in_sink` <a name="reset_overwrite_objects_already_existing_in_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink"></a>

```python
def reset_overwrite_objects_already_existing_in_sink() -> None
```

##### `reset_overwrite_when` <a name="reset_overwrite_when" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteWhen"></a>

```python
def reset_overwrite_when() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference">StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput">delete_objects_from_source_after_transfer_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput">delete_objects_unique_in_sink_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.metadataOptionsInput">metadata_options_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions">StorageTransferJobTransferSpecTransferOptionsMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput">overwrite_objects_already_existing_in_sink_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhenInput">overwrite_when_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer">delete_objects_from_source_after_transfer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink">delete_objects_unique_in_sink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink">overwrite_objects_already_existing_in_sink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhen">overwrite_when</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metadata_options`<sup>Required</sup> <a name="metadata_options" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.metadataOptions"></a>

```python
metadata_options: StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference">StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference</a>

---

##### `delete_objects_from_source_after_transfer_input`<sup>Optional</sup> <a name="delete_objects_from_source_after_transfer_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput"></a>

```python
delete_objects_from_source_after_transfer_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_objects_unique_in_sink_input`<sup>Optional</sup> <a name="delete_objects_unique_in_sink_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput"></a>

```python
delete_objects_unique_in_sink_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metadata_options_input`<sup>Optional</sup> <a name="metadata_options_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.metadataOptionsInput"></a>

```python
metadata_options_input: StorageTransferJobTransferSpecTransferOptionsMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions">StorageTransferJobTransferSpecTransferOptionsMetadataOptions</a>

---

##### `overwrite_objects_already_existing_in_sink_input`<sup>Optional</sup> <a name="overwrite_objects_already_existing_in_sink_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput"></a>

```python
overwrite_objects_already_existing_in_sink_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `overwrite_when_input`<sup>Optional</sup> <a name="overwrite_when_input" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhenInput"></a>

```python
overwrite_when_input: str
```

- *Type:* str

---

##### `delete_objects_from_source_after_transfer`<sup>Required</sup> <a name="delete_objects_from_source_after_transfer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer"></a>

```python
delete_objects_from_source_after_transfer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_objects_unique_in_sink`<sup>Required</sup> <a name="delete_objects_unique_in_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink"></a>

```python
delete_objects_unique_in_sink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `overwrite_objects_already_existing_in_sink`<sup>Required</sup> <a name="overwrite_objects_already_existing_in_sink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink"></a>

```python
overwrite_objects_already_existing_in_sink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `overwrite_when`<sup>Required</sup> <a name="overwrite_when" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhen"></a>

```python
overwrite_when: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferJobTransferSpecTransferOptions
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a>

---



