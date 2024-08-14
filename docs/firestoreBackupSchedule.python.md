# `firestoreBackupSchedule` Submodule <a name="`firestoreBackupSchedule` Submodule" id="@cdktf/provider-google.firestoreBackupSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirestoreBackupSchedule <a name="FirestoreBackupSchedule" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule google_firestore_backup_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firestore_backup_schedule

firestoreBackupSchedule.FirestoreBackupSchedule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  retention: str,
  daily_recurrence: FirestoreBackupScheduleDailyRecurrence = None,
  database: str = None,
  id: str = None,
  project: str = None,
  timeouts: FirestoreBackupScheduleTimeouts = None,
  weekly_recurrence: FirestoreBackupScheduleWeeklyRecurrence = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.retention">retention</a></code> | <code>str</code> | At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.dailyRecurrence">daily_recurrence</a></code> | <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence">FirestoreBackupScheduleDailyRecurrence</a></code> | daily_recurrence block. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.database">database</a></code> | <code>str</code> | The Firestore database id. Defaults to '"(default)"'. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#id FirestoreBackupSchedule#id}. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#project FirestoreBackupSchedule#project}. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts">FirestoreBackupScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.weeklyRecurrence">weekly_recurrence</a></code> | <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence">FirestoreBackupScheduleWeeklyRecurrence</a></code> | weekly_recurrence block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.retention"></a>

- *Type:* str

At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

You can set this to a value up to 14 weeks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#retention FirestoreBackupSchedule#retention}

---

##### `daily_recurrence`<sup>Optional</sup> <a name="daily_recurrence" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.dailyRecurrence"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence">FirestoreBackupScheduleDailyRecurrence</a>

daily_recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#daily_recurrence FirestoreBackupSchedule#daily_recurrence}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.database"></a>

- *Type:* str

The Firestore database id. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#database FirestoreBackupSchedule#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#id FirestoreBackupSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#project FirestoreBackupSchedule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts">FirestoreBackupScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#timeouts FirestoreBackupSchedule#timeouts}

---

##### `weekly_recurrence`<sup>Optional</sup> <a name="weekly_recurrence" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.Initializer.parameter.weeklyRecurrence"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence">FirestoreBackupScheduleWeeklyRecurrence</a>

weekly_recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#weekly_recurrence FirestoreBackupSchedule#weekly_recurrence}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putDailyRecurrence">put_daily_recurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putWeeklyRecurrence">put_weekly_recurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetDailyRecurrence">reset_daily_recurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetWeeklyRecurrence">reset_weekly_recurrence</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_daily_recurrence` <a name="put_daily_recurrence" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putDailyRecurrence"></a>

```python
def put_daily_recurrence() -> None
```

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#create FirestoreBackupSchedule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#delete FirestoreBackupSchedule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#update FirestoreBackupSchedule#update}.

---

##### `put_weekly_recurrence` <a name="put_weekly_recurrence" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putWeeklyRecurrence"></a>

```python
def put_weekly_recurrence(
  day: str = None
) -> None
```

###### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.putWeeklyRecurrence.parameter.day"></a>

- *Type:* str

The day of week to run. Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#day FirestoreBackupSchedule#day}

---

##### `reset_daily_recurrence` <a name="reset_daily_recurrence" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetDailyRecurrence"></a>

```python
def reset_daily_recurrence() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_weekly_recurrence` <a name="reset_weekly_recurrence" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.resetWeeklyRecurrence"></a>

```python
def reset_weekly_recurrence() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FirestoreBackupSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import firestore_backup_schedule

firestoreBackupSchedule.FirestoreBackupSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import firestore_backup_schedule

firestoreBackupSchedule.FirestoreBackupSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import firestore_backup_schedule

firestoreBackupSchedule.FirestoreBackupSchedule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import firestore_backup_schedule

firestoreBackupSchedule.FirestoreBackupSchedule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FirestoreBackupSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FirestoreBackupSchedule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FirestoreBackupSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FirestoreBackupSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.dailyRecurrence">daily_recurrence</a></code> | <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference">FirestoreBackupScheduleDailyRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference">FirestoreBackupScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.weeklyRecurrence">weekly_recurrence</a></code> | <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference">FirestoreBackupScheduleWeeklyRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.dailyRecurrenceInput">daily_recurrence_input</a></code> | <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence">FirestoreBackupScheduleDailyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.retentionInput">retention_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts">FirestoreBackupScheduleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.weeklyRecurrenceInput">weekly_recurrence_input</a></code> | <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence">FirestoreBackupScheduleWeeklyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.retention">retention</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `daily_recurrence`<sup>Required</sup> <a name="daily_recurrence" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.dailyRecurrence"></a>

```python
daily_recurrence: FirestoreBackupScheduleDailyRecurrenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference">FirestoreBackupScheduleDailyRecurrenceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.timeouts"></a>

```python
timeouts: FirestoreBackupScheduleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference">FirestoreBackupScheduleTimeoutsOutputReference</a>

---

##### `weekly_recurrence`<sup>Required</sup> <a name="weekly_recurrence" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.weeklyRecurrence"></a>

```python
weekly_recurrence: FirestoreBackupScheduleWeeklyRecurrenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference">FirestoreBackupScheduleWeeklyRecurrenceOutputReference</a>

---

##### `daily_recurrence_input`<sup>Optional</sup> <a name="daily_recurrence_input" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.dailyRecurrenceInput"></a>

```python
daily_recurrence_input: FirestoreBackupScheduleDailyRecurrence
```

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence">FirestoreBackupScheduleDailyRecurrence</a>

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `retention_input`<sup>Optional</sup> <a name="retention_input" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.retentionInput"></a>

```python
retention_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FirestoreBackupScheduleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts">FirestoreBackupScheduleTimeouts</a>]

---

##### `weekly_recurrence_input`<sup>Optional</sup> <a name="weekly_recurrence_input" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.weeklyRecurrenceInput"></a>

```python
weekly_recurrence_input: FirestoreBackupScheduleWeeklyRecurrence
```

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence">FirestoreBackupScheduleWeeklyRecurrence</a>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.retention"></a>

```python
retention: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FirestoreBackupScheduleConfig <a name="FirestoreBackupScheduleConfig" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firestore_backup_schedule

firestoreBackupSchedule.FirestoreBackupScheduleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  retention: str,
  daily_recurrence: FirestoreBackupScheduleDailyRecurrence = None,
  database: str = None,
  id: str = None,
  project: str = None,
  timeouts: FirestoreBackupScheduleTimeouts = None,
  weekly_recurrence: FirestoreBackupScheduleWeeklyRecurrence = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.retention">retention</a></code> | <code>str</code> | At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.dailyRecurrence">daily_recurrence</a></code> | <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence">FirestoreBackupScheduleDailyRecurrence</a></code> | daily_recurrence block. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.database">database</a></code> | <code>str</code> | The Firestore database id. Defaults to '"(default)"'. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#id FirestoreBackupSchedule#id}. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#project FirestoreBackupSchedule#project}. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts">FirestoreBackupScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.weeklyRecurrence">weekly_recurrence</a></code> | <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence">FirestoreBackupScheduleWeeklyRecurrence</a></code> | weekly_recurrence block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.retention"></a>

```python
retention: str
```

- *Type:* str

At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

You can set this to a value up to 14 weeks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#retention FirestoreBackupSchedule#retention}

---

##### `daily_recurrence`<sup>Optional</sup> <a name="daily_recurrence" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.dailyRecurrence"></a>

```python
daily_recurrence: FirestoreBackupScheduleDailyRecurrence
```

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence">FirestoreBackupScheduleDailyRecurrence</a>

daily_recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#daily_recurrence FirestoreBackupSchedule#daily_recurrence}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The Firestore database id. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#database FirestoreBackupSchedule#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#id FirestoreBackupSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#project FirestoreBackupSchedule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.timeouts"></a>

```python
timeouts: FirestoreBackupScheduleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts">FirestoreBackupScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#timeouts FirestoreBackupSchedule#timeouts}

---

##### `weekly_recurrence`<sup>Optional</sup> <a name="weekly_recurrence" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleConfig.property.weeklyRecurrence"></a>

```python
weekly_recurrence: FirestoreBackupScheduleWeeklyRecurrence
```

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence">FirestoreBackupScheduleWeeklyRecurrence</a>

weekly_recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#weekly_recurrence FirestoreBackupSchedule#weekly_recurrence}

---

### FirestoreBackupScheduleDailyRecurrence <a name="FirestoreBackupScheduleDailyRecurrence" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firestore_backup_schedule

firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence()
```


### FirestoreBackupScheduleTimeouts <a name="FirestoreBackupScheduleTimeouts" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firestore_backup_schedule

firestoreBackupSchedule.FirestoreBackupScheduleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#create FirestoreBackupSchedule#create}. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#delete FirestoreBackupSchedule#delete}. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#update FirestoreBackupSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#create FirestoreBackupSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#delete FirestoreBackupSchedule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#update FirestoreBackupSchedule#update}.

---

### FirestoreBackupScheduleWeeklyRecurrence <a name="FirestoreBackupScheduleWeeklyRecurrence" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firestore_backup_schedule

firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence(
  day: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence.property.day">day</a></code> | <code>str</code> | The day of week to run. Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence.property.day"></a>

```python
day: str
```

- *Type:* str

The day of week to run. Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/firestore_backup_schedule#day FirestoreBackupSchedule#day}

---

## Classes <a name="Classes" id="Classes"></a>

### FirestoreBackupScheduleDailyRecurrenceOutputReference <a name="FirestoreBackupScheduleDailyRecurrenceOutputReference" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firestore_backup_schedule

firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence">FirestoreBackupScheduleDailyRecurrence</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrenceOutputReference.property.internalValue"></a>

```python
internal_value: FirestoreBackupScheduleDailyRecurrence
```

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleDailyRecurrence">FirestoreBackupScheduleDailyRecurrence</a>

---


### FirestoreBackupScheduleTimeoutsOutputReference <a name="FirestoreBackupScheduleTimeoutsOutputReference" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firestore_backup_schedule

firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts">FirestoreBackupScheduleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FirestoreBackupScheduleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleTimeouts">FirestoreBackupScheduleTimeouts</a>]

---


### FirestoreBackupScheduleWeeklyRecurrenceOutputReference <a name="FirestoreBackupScheduleWeeklyRecurrenceOutputReference" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firestore_backup_schedule

firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.resetDay">reset_day</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_day` <a name="reset_day" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.resetDay"></a>

```python
def reset_day() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.dayInput">day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.day">day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence">FirestoreBackupScheduleWeeklyRecurrence</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.dayInput"></a>

```python
day_input: str
```

- *Type:* str

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.day"></a>

```python
day: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.internalValue"></a>

```python
internal_value: FirestoreBackupScheduleWeeklyRecurrence
```

- *Type:* <a href="#@cdktf/provider-google.firestoreBackupSchedule.FirestoreBackupScheduleWeeklyRecurrence">FirestoreBackupScheduleWeeklyRecurrence</a>

---



