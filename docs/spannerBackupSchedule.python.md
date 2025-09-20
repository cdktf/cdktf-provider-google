# `spannerBackupSchedule` Submodule <a name="`spannerBackupSchedule` Submodule" id="@cdktf/provider-google.spannerBackupSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpannerBackupSchedule <a name="SpannerBackupSchedule" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule google_spanner_backup_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_backup_schedule

spannerBackupSchedule.SpannerBackupSchedule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  instance: str,
  retention_duration: str,
  encryption_config: SpannerBackupScheduleEncryptionConfig = None,
  full_backup_spec: SpannerBackupScheduleFullBackupSpec = None,
  id: str = None,
  incremental_backup_spec: SpannerBackupScheduleIncrementalBackupSpec = None,
  name: str = None,
  project: str = None,
  spec: SpannerBackupScheduleSpec = None,
  timeouts: SpannerBackupScheduleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.database">database</a></code> | <code>str</code> | The database to create the backup schedule on. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.instance">instance</a></code> | <code>str</code> | The instance to create the database on. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.retentionDuration">retention_duration</a></code> | <code>str</code> | At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'. You can set this to a value up to 366 days. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig">SpannerBackupScheduleEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.fullBackupSpec">full_backup_spec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec">SpannerBackupScheduleFullBackupSpec</a></code> | full_backup_spec block. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#id SpannerBackupSchedule#id}. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.incrementalBackupSpec">incremental_backup_spec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec">SpannerBackupScheduleIncrementalBackupSpec</a></code> | incremental_backup_spec block. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.name">name</a></code> | <code>str</code> | A unique identifier for the backup schedule, which cannot be changed after the backup schedule is created. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#project SpannerBackupSchedule#project}. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec">SpannerBackupScheduleSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts">SpannerBackupScheduleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.database"></a>

- *Type:* str

The database to create the backup schedule on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#database SpannerBackupSchedule#database}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.instance"></a>

- *Type:* str

The instance to create the database on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#instance SpannerBackupSchedule#instance}

---

##### `retention_duration`<sup>Required</sup> <a name="retention_duration" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.retentionDuration"></a>

- *Type:* str

At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'. You can set this to a value up to 366 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#retention_duration SpannerBackupSchedule#retention_duration}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.encryptionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig">SpannerBackupScheduleEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#encryption_config SpannerBackupSchedule#encryption_config}

---

##### `full_backup_spec`<sup>Optional</sup> <a name="full_backup_spec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.fullBackupSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec">SpannerBackupScheduleFullBackupSpec</a>

full_backup_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#full_backup_spec SpannerBackupSchedule#full_backup_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#id SpannerBackupSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incremental_backup_spec`<sup>Optional</sup> <a name="incremental_backup_spec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.incrementalBackupSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec">SpannerBackupScheduleIncrementalBackupSpec</a>

incremental_backup_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#incremental_backup_spec SpannerBackupSchedule#incremental_backup_spec}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.name"></a>

- *Type:* str

A unique identifier for the backup schedule, which cannot be changed after the backup schedule is created.

Values are of the form [a-z][-a-z0-9]*[a-z0-9].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#name SpannerBackupSchedule#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#project SpannerBackupSchedule#project}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec">SpannerBackupScheduleSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#spec SpannerBackupSchedule#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts">SpannerBackupScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#timeouts SpannerBackupSchedule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putEncryptionConfig">put_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putFullBackupSpec">put_full_backup_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putIncrementalBackupSpec">put_incremental_backup_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetEncryptionConfig">reset_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetFullBackupSpec">reset_full_backup_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetIncrementalBackupSpec">reset_incremental_backup_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetSpec">reset_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_config` <a name="put_encryption_config" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putEncryptionConfig"></a>

```python
def put_encryption_config(
  encryption_type: str,
  kms_key_name: str = None,
  kms_key_names: typing.List[str] = None
) -> None
```

###### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putEncryptionConfig.parameter.encryptionType"></a>

- *Type:* str

The encryption type of backups created by the backup schedule.

Possible values are USE_DATABASE_ENCRYPTION, GOOGLE_DEFAULT_ENCRYPTION, or CUSTOMER_MANAGED_ENCRYPTION.
If you use CUSTOMER_MANAGED_ENCRYPTION, you must specify a kmsKeyName.
If your backup type is incremental-backup, the encryption type must be GOOGLE_DEFAULT_ENCRYPTION. Possible values: ["USE_DATABASE_ENCRYPTION", "GOOGLE_DEFAULT_ENCRYPTION", "CUSTOMER_MANAGED_ENCRYPTION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#encryption_type SpannerBackupSchedule#encryption_type}

---

###### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putEncryptionConfig.parameter.kmsKeyName"></a>

- *Type:* str

The resource name of the Cloud KMS key to use for encryption. Format: 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#kms_key_name SpannerBackupSchedule#kms_key_name}

---

###### `kms_key_names`<sup>Optional</sup> <a name="kms_key_names" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putEncryptionConfig.parameter.kmsKeyNames"></a>

- *Type:* typing.List[str]

Fully qualified name of the KMS keys to use to encrypt this database.

The keys must exist
in the same locations as the Spanner Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#kms_key_names SpannerBackupSchedule#kms_key_names}

---

##### `put_full_backup_spec` <a name="put_full_backup_spec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putFullBackupSpec"></a>

```python
def put_full_backup_spec() -> None
```

##### `put_incremental_backup_spec` <a name="put_incremental_backup_spec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putIncrementalBackupSpec"></a>

```python
def put_incremental_backup_spec() -> None
```

##### `put_spec` <a name="put_spec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putSpec"></a>

```python
def put_spec(
  cron_spec: SpannerBackupScheduleSpecCronSpec = None
) -> None
```

###### `cron_spec`<sup>Optional</sup> <a name="cron_spec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putSpec.parameter.cronSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec">SpannerBackupScheduleSpecCronSpec</a>

cron_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#cron_spec SpannerBackupSchedule#cron_spec}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#create SpannerBackupSchedule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#delete SpannerBackupSchedule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#update SpannerBackupSchedule#update}.

---

##### `reset_encryption_config` <a name="reset_encryption_config" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetEncryptionConfig"></a>

```python
def reset_encryption_config() -> None
```

##### `reset_full_backup_spec` <a name="reset_full_backup_spec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetFullBackupSpec"></a>

```python
def reset_full_backup_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_incremental_backup_spec` <a name="reset_incremental_backup_spec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetIncrementalBackupSpec"></a>

```python
def reset_incremental_backup_spec() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_spec` <a name="reset_spec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetSpec"></a>

```python
def reset_spec() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SpannerBackupSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import spanner_backup_schedule

spannerBackupSchedule.SpannerBackupSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import spanner_backup_schedule

spannerBackupSchedule.SpannerBackupSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import spanner_backup_schedule

spannerBackupSchedule.SpannerBackupSchedule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import spanner_backup_schedule

spannerBackupSchedule.SpannerBackupSchedule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SpannerBackupSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SpannerBackupSchedule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SpannerBackupSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpannerBackupSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference">SpannerBackupScheduleEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.fullBackupSpec">full_backup_spec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference">SpannerBackupScheduleFullBackupSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.incrementalBackupSpec">incremental_backup_spec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference">SpannerBackupScheduleIncrementalBackupSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference">SpannerBackupScheduleSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference">SpannerBackupScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.encryptionConfigInput">encryption_config_input</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig">SpannerBackupScheduleEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.fullBackupSpecInput">full_backup_spec_input</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec">SpannerBackupScheduleFullBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.incrementalBackupSpecInput">incremental_backup_spec_input</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec">SpannerBackupScheduleIncrementalBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.retentionDurationInput">retention_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.specInput">spec_input</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec">SpannerBackupScheduleSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts">SpannerBackupScheduleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.retentionDuration">retention_duration</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `encryption_config`<sup>Required</sup> <a name="encryption_config" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.encryptionConfig"></a>

```python
encryption_config: SpannerBackupScheduleEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference">SpannerBackupScheduleEncryptionConfigOutputReference</a>

---

##### `full_backup_spec`<sup>Required</sup> <a name="full_backup_spec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.fullBackupSpec"></a>

```python
full_backup_spec: SpannerBackupScheduleFullBackupSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference">SpannerBackupScheduleFullBackupSpecOutputReference</a>

---

##### `incremental_backup_spec`<sup>Required</sup> <a name="incremental_backup_spec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.incrementalBackupSpec"></a>

```python
incremental_backup_spec: SpannerBackupScheduleIncrementalBackupSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference">SpannerBackupScheduleIncrementalBackupSpecOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.spec"></a>

```python
spec: SpannerBackupScheduleSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference">SpannerBackupScheduleSpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.timeouts"></a>

```python
timeouts: SpannerBackupScheduleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference">SpannerBackupScheduleTimeoutsOutputReference</a>

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `encryption_config_input`<sup>Optional</sup> <a name="encryption_config_input" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.encryptionConfigInput"></a>

```python
encryption_config_input: SpannerBackupScheduleEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig">SpannerBackupScheduleEncryptionConfig</a>

---

##### `full_backup_spec_input`<sup>Optional</sup> <a name="full_backup_spec_input" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.fullBackupSpecInput"></a>

```python
full_backup_spec_input: SpannerBackupScheduleFullBackupSpec
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec">SpannerBackupScheduleFullBackupSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `incremental_backup_spec_input`<sup>Optional</sup> <a name="incremental_backup_spec_input" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.incrementalBackupSpecInput"></a>

```python
incremental_backup_spec_input: SpannerBackupScheduleIncrementalBackupSpec
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec">SpannerBackupScheduleIncrementalBackupSpec</a>

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `retention_duration_input`<sup>Optional</sup> <a name="retention_duration_input" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.retentionDurationInput"></a>

```python
retention_duration_input: str
```

- *Type:* str

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.specInput"></a>

```python
spec_input: SpannerBackupScheduleSpec
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec">SpannerBackupScheduleSpec</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SpannerBackupScheduleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts">SpannerBackupScheduleTimeouts</a>]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `retention_duration`<sup>Required</sup> <a name="retention_duration" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.retentionDuration"></a>

```python
retention_duration: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SpannerBackupScheduleConfig <a name="SpannerBackupScheduleConfig" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_backup_schedule

spannerBackupSchedule.SpannerBackupScheduleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  instance: str,
  retention_duration: str,
  encryption_config: SpannerBackupScheduleEncryptionConfig = None,
  full_backup_spec: SpannerBackupScheduleFullBackupSpec = None,
  id: str = None,
  incremental_backup_spec: SpannerBackupScheduleIncrementalBackupSpec = None,
  name: str = None,
  project: str = None,
  spec: SpannerBackupScheduleSpec = None,
  timeouts: SpannerBackupScheduleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.database">database</a></code> | <code>str</code> | The database to create the backup schedule on. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.instance">instance</a></code> | <code>str</code> | The instance to create the database on. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.retentionDuration">retention_duration</a></code> | <code>str</code> | At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'. You can set this to a value up to 366 days. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig">SpannerBackupScheduleEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.fullBackupSpec">full_backup_spec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec">SpannerBackupScheduleFullBackupSpec</a></code> | full_backup_spec block. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#id SpannerBackupSchedule#id}. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.incrementalBackupSpec">incremental_backup_spec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec">SpannerBackupScheduleIncrementalBackupSpec</a></code> | incremental_backup_spec block. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.name">name</a></code> | <code>str</code> | A unique identifier for the backup schedule, which cannot be changed after the backup schedule is created. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#project SpannerBackupSchedule#project}. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec">SpannerBackupScheduleSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts">SpannerBackupScheduleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database to create the backup schedule on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#database SpannerBackupSchedule#database}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

The instance to create the database on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#instance SpannerBackupSchedule#instance}

---

##### `retention_duration`<sup>Required</sup> <a name="retention_duration" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.retentionDuration"></a>

```python
retention_duration: str
```

- *Type:* str

At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'. You can set this to a value up to 366 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#retention_duration SpannerBackupSchedule#retention_duration}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.encryptionConfig"></a>

```python
encryption_config: SpannerBackupScheduleEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig">SpannerBackupScheduleEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#encryption_config SpannerBackupSchedule#encryption_config}

---

##### `full_backup_spec`<sup>Optional</sup> <a name="full_backup_spec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.fullBackupSpec"></a>

```python
full_backup_spec: SpannerBackupScheduleFullBackupSpec
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec">SpannerBackupScheduleFullBackupSpec</a>

full_backup_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#full_backup_spec SpannerBackupSchedule#full_backup_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#id SpannerBackupSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incremental_backup_spec`<sup>Optional</sup> <a name="incremental_backup_spec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.incrementalBackupSpec"></a>

```python
incremental_backup_spec: SpannerBackupScheduleIncrementalBackupSpec
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec">SpannerBackupScheduleIncrementalBackupSpec</a>

incremental_backup_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#incremental_backup_spec SpannerBackupSchedule#incremental_backup_spec}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A unique identifier for the backup schedule, which cannot be changed after the backup schedule is created.

Values are of the form [a-z][-a-z0-9]*[a-z0-9].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#name SpannerBackupSchedule#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#project SpannerBackupSchedule#project}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.spec"></a>

```python
spec: SpannerBackupScheduleSpec
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec">SpannerBackupScheduleSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#spec SpannerBackupSchedule#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.timeouts"></a>

```python
timeouts: SpannerBackupScheduleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts">SpannerBackupScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#timeouts SpannerBackupSchedule#timeouts}

---

### SpannerBackupScheduleEncryptionConfig <a name="SpannerBackupScheduleEncryptionConfig" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_backup_schedule

spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig(
  encryption_type: str,
  kms_key_name: str = None,
  kms_key_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig.property.encryptionType">encryption_type</a></code> | <code>str</code> | The encryption type of backups created by the backup schedule. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The resource name of the Cloud KMS key to use for encryption. Format: 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}'. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig.property.kmsKeyNames">kms_key_names</a></code> | <code>typing.List[str]</code> | Fully qualified name of the KMS keys to use to encrypt this database. |

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

The encryption type of backups created by the backup schedule.

Possible values are USE_DATABASE_ENCRYPTION, GOOGLE_DEFAULT_ENCRYPTION, or CUSTOMER_MANAGED_ENCRYPTION.
If you use CUSTOMER_MANAGED_ENCRYPTION, you must specify a kmsKeyName.
If your backup type is incremental-backup, the encryption type must be GOOGLE_DEFAULT_ENCRYPTION. Possible values: ["USE_DATABASE_ENCRYPTION", "GOOGLE_DEFAULT_ENCRYPTION", "CUSTOMER_MANAGED_ENCRYPTION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#encryption_type SpannerBackupSchedule#encryption_type}

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The resource name of the Cloud KMS key to use for encryption. Format: 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#kms_key_name SpannerBackupSchedule#kms_key_name}

---

##### `kms_key_names`<sup>Optional</sup> <a name="kms_key_names" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig.property.kmsKeyNames"></a>

```python
kms_key_names: typing.List[str]
```

- *Type:* typing.List[str]

Fully qualified name of the KMS keys to use to encrypt this database.

The keys must exist
in the same locations as the Spanner Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#kms_key_names SpannerBackupSchedule#kms_key_names}

---

### SpannerBackupScheduleFullBackupSpec <a name="SpannerBackupScheduleFullBackupSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_backup_schedule

spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec()
```


### SpannerBackupScheduleIncrementalBackupSpec <a name="SpannerBackupScheduleIncrementalBackupSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_backup_schedule

spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec()
```


### SpannerBackupScheduleSpec <a name="SpannerBackupScheduleSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_backup_schedule

spannerBackupSchedule.SpannerBackupScheduleSpec(
  cron_spec: SpannerBackupScheduleSpecCronSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec.property.cronSpec">cron_spec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec">SpannerBackupScheduleSpecCronSpec</a></code> | cron_spec block. |

---

##### `cron_spec`<sup>Optional</sup> <a name="cron_spec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec.property.cronSpec"></a>

```python
cron_spec: SpannerBackupScheduleSpecCronSpec
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec">SpannerBackupScheduleSpecCronSpec</a>

cron_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#cron_spec SpannerBackupSchedule#cron_spec}

---

### SpannerBackupScheduleSpecCronSpec <a name="SpannerBackupScheduleSpecCronSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_backup_schedule

spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec(
  text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec.property.text">text</a></code> | <code>str</code> | Textual representation of the crontab. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec.property.text"></a>

```python
text: str
```

- *Type:* str

Textual representation of the crontab.

User can customize the
backup frequency and the backup version time using the cron
expression. The version time must be in UTC timzeone.
The backup will contain an externally consistent copy of the
database at the version time. Allowed frequencies are 12 hour, 1 day,
1 week and 1 month. Examples of valid cron specifications:
0 2/12 * * * : every 12 hours at (2, 14) hours past midnight in UTC.
0 2,14 * * * : every 12 hours at (2,14) hours past midnight in UTC.
0 2 * * *    : once a day at 2 past midnight in UTC.
0 2 * * 0    : once a week every Sunday at 2 past midnight in UTC.
0 2 8 * *    : once a month on 8th day at 2 past midnight in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#text SpannerBackupSchedule#text}

---

### SpannerBackupScheduleTimeouts <a name="SpannerBackupScheduleTimeouts" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_backup_schedule

spannerBackupSchedule.SpannerBackupScheduleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#create SpannerBackupSchedule#create}. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#delete SpannerBackupSchedule#delete}. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#update SpannerBackupSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#create SpannerBackupSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#delete SpannerBackupSchedule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#update SpannerBackupSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpannerBackupScheduleEncryptionConfigOutputReference <a name="SpannerBackupScheduleEncryptionConfigOutputReference" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_backup_schedule

spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.resetKmsKeyNames">reset_kms_key_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```

##### `reset_kms_key_names` <a name="reset_kms_key_names" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.resetKmsKeyNames"></a>

```python
def reset_kms_key_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.encryptionTypeInput">encryption_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyNamesInput">kms_key_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyNames">kms_key_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig">SpannerBackupScheduleEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_type_input`<sup>Optional</sup> <a name="encryption_type_input" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.encryptionTypeInput"></a>

```python
encryption_type_input: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_names_input`<sup>Optional</sup> <a name="kms_key_names_input" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyNamesInput"></a>

```python
kms_key_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `kms_key_names`<sup>Required</sup> <a name="kms_key_names" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyNames"></a>

```python
kms_key_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: SpannerBackupScheduleEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig">SpannerBackupScheduleEncryptionConfig</a>

---


### SpannerBackupScheduleFullBackupSpecOutputReference <a name="SpannerBackupScheduleFullBackupSpecOutputReference" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_backup_schedule

spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec">SpannerBackupScheduleFullBackupSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.property.internalValue"></a>

```python
internal_value: SpannerBackupScheduleFullBackupSpec
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec">SpannerBackupScheduleFullBackupSpec</a>

---


### SpannerBackupScheduleIncrementalBackupSpecOutputReference <a name="SpannerBackupScheduleIncrementalBackupSpecOutputReference" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_backup_schedule

spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec">SpannerBackupScheduleIncrementalBackupSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.property.internalValue"></a>

```python
internal_value: SpannerBackupScheduleIncrementalBackupSpec
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec">SpannerBackupScheduleIncrementalBackupSpec</a>

---


### SpannerBackupScheduleSpecCronSpecOutputReference <a name="SpannerBackupScheduleSpecCronSpecOutputReference" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_backup_schedule

spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_text` <a name="reset_text" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec">SpannerBackupScheduleSpecCronSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.internalValue"></a>

```python
internal_value: SpannerBackupScheduleSpecCronSpec
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec">SpannerBackupScheduleSpecCronSpec</a>

---


### SpannerBackupScheduleSpecOutputReference <a name="SpannerBackupScheduleSpecOutputReference" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_backup_schedule

spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.putCronSpec">put_cron_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.resetCronSpec">reset_cron_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cron_spec` <a name="put_cron_spec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.putCronSpec"></a>

```python
def put_cron_spec(
  text: str = None
) -> None
```

###### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.putCronSpec.parameter.text"></a>

- *Type:* str

Textual representation of the crontab.

User can customize the
backup frequency and the backup version time using the cron
expression. The version time must be in UTC timzeone.
The backup will contain an externally consistent copy of the
database at the version time. Allowed frequencies are 12 hour, 1 day,
1 week and 1 month. Examples of valid cron specifications:
0 2/12 * * * : every 12 hours at (2, 14) hours past midnight in UTC.
0 2,14 * * * : every 12 hours at (2,14) hours past midnight in UTC.
0 2 * * *    : once a day at 2 past midnight in UTC.
0 2 * * 0    : once a week every Sunday at 2 past midnight in UTC.
0 2 8 * *    : once a month on 8th day at 2 past midnight in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_backup_schedule#text SpannerBackupSchedule#text}

---

##### `reset_cron_spec` <a name="reset_cron_spec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.resetCronSpec"></a>

```python
def reset_cron_spec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.cronSpec">cron_spec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference">SpannerBackupScheduleSpecCronSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.cronSpecInput">cron_spec_input</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec">SpannerBackupScheduleSpecCronSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec">SpannerBackupScheduleSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron_spec`<sup>Required</sup> <a name="cron_spec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.cronSpec"></a>

```python
cron_spec: SpannerBackupScheduleSpecCronSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference">SpannerBackupScheduleSpecCronSpecOutputReference</a>

---

##### `cron_spec_input`<sup>Optional</sup> <a name="cron_spec_input" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.cronSpecInput"></a>

```python
cron_spec_input: SpannerBackupScheduleSpecCronSpec
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec">SpannerBackupScheduleSpecCronSpec</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.internalValue"></a>

```python
internal_value: SpannerBackupScheduleSpec
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec">SpannerBackupScheduleSpec</a>

---


### SpannerBackupScheduleTimeoutsOutputReference <a name="SpannerBackupScheduleTimeoutsOutputReference" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_backup_schedule

spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts">SpannerBackupScheduleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SpannerBackupScheduleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts">SpannerBackupScheduleTimeouts</a>]

---



