# `gkeBackupRestorePlan` Submodule <a name="`gkeBackupRestorePlan` Submodule" id="@cdktf/provider-google.gkeBackupRestorePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeBackupRestorePlan <a name="GkeBackupRestorePlan" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan google_gke_backup_restore_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlan(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_plan: str,
  cluster: str,
  location: str,
  name: str,
  restore_config: GkeBackupRestorePlanRestoreConfig,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GkeBackupRestorePlanTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.backupPlan">backup_plan</a></code> | <code>str</code> | A reference to the BackupPlan from which Backups may be used as the source for Restores created via this RestorePlan. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.cluster">cluster</a></code> | <code>str</code> | The source cluster from which Restores will be created via this RestorePlan. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.location">location</a></code> | <code>str</code> | The region of the Restore Plan. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.name">name</a></code> | <code>str</code> | The full name of the BackupPlan Resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.restoreConfig">restore_config</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig">GkeBackupRestorePlanRestoreConfig</a></code> | restore_config block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.description">description</a></code> | <code>str</code> | User specified descriptive string for this RestorePlan. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#id GkeBackupRestorePlan#id}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Description: A set of custom labels supplied by the user. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#project GkeBackupRestorePlan#project}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts">GkeBackupRestorePlanTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_plan`<sup>Required</sup> <a name="backup_plan" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.backupPlan"></a>

- *Type:* str

A reference to the BackupPlan from which Backups may be used as the source for Restores created via this RestorePlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#backup_plan GkeBackupRestorePlan#backup_plan}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.cluster"></a>

- *Type:* str

The source cluster from which Restores will be created via this RestorePlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#cluster GkeBackupRestorePlan#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.location"></a>

- *Type:* str

The region of the Restore Plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#location GkeBackupRestorePlan#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.name"></a>

- *Type:* str

The full name of the BackupPlan Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#name GkeBackupRestorePlan#name}

---

##### `restore_config`<sup>Required</sup> <a name="restore_config" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.restoreConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig">GkeBackupRestorePlanRestoreConfig</a>

restore_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#restore_config GkeBackupRestorePlan#restore_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.description"></a>

- *Type:* str

User specified descriptive string for this RestorePlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#description GkeBackupRestorePlan#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#id GkeBackupRestorePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Description: A set of custom labels supplied by the user.

A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#labels GkeBackupRestorePlan#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#project GkeBackupRestorePlan#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts">GkeBackupRestorePlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#timeouts GkeBackupRestorePlan#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.putRestoreConfig">put_restore_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_restore_config` <a name="put_restore_config" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.putRestoreConfig"></a>

```python
def put_restore_config(
  all_namespaces: typing.Union[bool, IResolvable] = None,
  cluster_resource_conflict_policy: str = None,
  cluster_resource_restore_scope: GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope = None,
  excluded_namespaces: GkeBackupRestorePlanRestoreConfigExcludedNamespaces = None,
  namespaced_resource_restore_mode: str = None,
  no_namespaces: typing.Union[bool, IResolvable] = None,
  selected_applications: GkeBackupRestorePlanRestoreConfigSelectedApplications = None,
  selected_namespaces: GkeBackupRestorePlanRestoreConfigSelectedNamespaces = None,
  transformation_rules: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigTransformationRules]] = None,
  volume_data_restore_policy: str = None
) -> None
```

###### `all_namespaces`<sup>Optional</sup> <a name="all_namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.putRestoreConfig.parameter.allNamespaces"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If True, restore all namespaced resources in the Backup. Setting this field to False will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#all_namespaces GkeBackupRestorePlan#all_namespaces}

---

###### `cluster_resource_conflict_policy`<sup>Optional</sup> <a name="cluster_resource_conflict_policy" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.putRestoreConfig.parameter.clusterResourceConflictPolicy"></a>

- *Type:* str

Defines the behavior for handling the situation where cluster-scoped resources being restored already exist in the target cluster.

This MUST be set to a value other than 'CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED'
if 'clusterResourceRestoreScope' is anyting other than 'noGroupKinds'.
See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#clusterresourceconflictpolicy
for more information on each policy option. Possible values: ["USE_EXISTING_VERSION", "USE_BACKUP_VERSION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#cluster_resource_conflict_policy GkeBackupRestorePlan#cluster_resource_conflict_policy}

---

###### `cluster_resource_restore_scope`<sup>Optional</sup> <a name="cluster_resource_restore_scope" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.putRestoreConfig.parameter.clusterResourceRestoreScope"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a>

cluster_resource_restore_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#cluster_resource_restore_scope GkeBackupRestorePlan#cluster_resource_restore_scope}

---

###### `excluded_namespaces`<sup>Optional</sup> <a name="excluded_namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.putRestoreConfig.parameter.excludedNamespaces"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespaces">GkeBackupRestorePlanRestoreConfigExcludedNamespaces</a>

excluded_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#excluded_namespaces GkeBackupRestorePlan#excluded_namespaces}

---

###### `namespaced_resource_restore_mode`<sup>Optional</sup> <a name="namespaced_resource_restore_mode" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.putRestoreConfig.parameter.namespacedResourceRestoreMode"></a>

- *Type:* str

Defines the behavior for handling the situation where sets of namespaced resources being restored already exist in the target cluster.

This MUST be set to a value other than 'NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED'
if the 'namespacedResourceRestoreScope' is anything other than 'noNamespaces'.
See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#namespacedresourcerestoremode
for more information on each mode. Possible values: ["DELETE_AND_RESTORE", "FAIL_ON_CONFLICT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#namespaced_resource_restore_mode GkeBackupRestorePlan#namespaced_resource_restore_mode}

---

###### `no_namespaces`<sup>Optional</sup> <a name="no_namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.putRestoreConfig.parameter.noNamespaces"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not restore any namespaced resources if set to "True". Specifying this field to "False" is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#no_namespaces GkeBackupRestorePlan#no_namespaces}

---

###### `selected_applications`<sup>Optional</sup> <a name="selected_applications" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.putRestoreConfig.parameter.selectedApplications"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplications">GkeBackupRestorePlanRestoreConfigSelectedApplications</a>

selected_applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#selected_applications GkeBackupRestorePlan#selected_applications}

---

###### `selected_namespaces`<sup>Optional</sup> <a name="selected_namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.putRestoreConfig.parameter.selectedNamespaces"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespaces">GkeBackupRestorePlanRestoreConfigSelectedNamespaces</a>

selected_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#selected_namespaces GkeBackupRestorePlan#selected_namespaces}

---

###### `transformation_rules`<sup>Optional</sup> <a name="transformation_rules" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.putRestoreConfig.parameter.transformationRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules">GkeBackupRestorePlanRestoreConfigTransformationRules</a>]]

transformation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#transformation_rules GkeBackupRestorePlan#transformation_rules}

---

###### `volume_data_restore_policy`<sup>Optional</sup> <a name="volume_data_restore_policy" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.putRestoreConfig.parameter.volumeDataRestorePolicy"></a>

- *Type:* str

Specifies the mechanism to be used to restore volume data.

This should be set to a value other than 'NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED'
if the 'namespacedResourceRestoreScope' is anything other than 'noNamespaces'.
If not specified, it will be treated as 'NO_VOLUME_DATA_RESTORATION'.
See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#VolumeDataRestorePolicy
for more information on each policy option. Possible values: ["RESTORE_VOLUME_DATA_FROM_BACKUP", "REUSE_VOLUME_HANDLE_FROM_BACKUP", "NO_VOLUME_DATA_RESTORATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#volume_data_restore_policy GkeBackupRestorePlan#volume_data_restore_policy}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#create GkeBackupRestorePlan#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#delete GkeBackupRestorePlan#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#update GkeBackupRestorePlan#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GkeBackupRestorePlan resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlan.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GkeBackupRestorePlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GkeBackupRestorePlan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GkeBackupRestorePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GkeBackupRestorePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.restoreConfig">restore_config</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference">GkeBackupRestorePlanRestoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.stateReason">state_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference">GkeBackupRestorePlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.backupPlanInput">backup_plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.restoreConfigInput">restore_config_input</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig">GkeBackupRestorePlanRestoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts">GkeBackupRestorePlanTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.backupPlan">backup_plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `restore_config`<sup>Required</sup> <a name="restore_config" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.restoreConfig"></a>

```python
restore_config: GkeBackupRestorePlanRestoreConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference">GkeBackupRestorePlanRestoreConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_reason`<sup>Required</sup> <a name="state_reason" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.stateReason"></a>

```python
state_reason: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.timeouts"></a>

```python
timeouts: GkeBackupRestorePlanTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference">GkeBackupRestorePlanTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `backup_plan_input`<sup>Optional</sup> <a name="backup_plan_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.backupPlanInput"></a>

```python
backup_plan_input: str
```

- *Type:* str

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `restore_config_input`<sup>Optional</sup> <a name="restore_config_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.restoreConfigInput"></a>

```python
restore_config_input: GkeBackupRestorePlanRestoreConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig">GkeBackupRestorePlanRestoreConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GkeBackupRestorePlanTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts">GkeBackupRestorePlanTimeouts</a>]

---

##### `backup_plan`<sup>Required</sup> <a name="backup_plan" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.backupPlan"></a>

```python
backup_plan: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GkeBackupRestorePlanConfig <a name="GkeBackupRestorePlanConfig" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_plan: str,
  cluster: str,
  location: str,
  name: str,
  restore_config: GkeBackupRestorePlanRestoreConfig,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GkeBackupRestorePlanTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.backupPlan">backup_plan</a></code> | <code>str</code> | A reference to the BackupPlan from which Backups may be used as the source for Restores created via this RestorePlan. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.cluster">cluster</a></code> | <code>str</code> | The source cluster from which Restores will be created via this RestorePlan. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.location">location</a></code> | <code>str</code> | The region of the Restore Plan. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.name">name</a></code> | <code>str</code> | The full name of the BackupPlan Resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.restoreConfig">restore_config</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig">GkeBackupRestorePlanRestoreConfig</a></code> | restore_config block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.description">description</a></code> | <code>str</code> | User specified descriptive string for this RestorePlan. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#id GkeBackupRestorePlan#id}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Description: A set of custom labels supplied by the user. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#project GkeBackupRestorePlan#project}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts">GkeBackupRestorePlanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_plan`<sup>Required</sup> <a name="backup_plan" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.backupPlan"></a>

```python
backup_plan: str
```

- *Type:* str

A reference to the BackupPlan from which Backups may be used as the source for Restores created via this RestorePlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#backup_plan GkeBackupRestorePlan#backup_plan}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

The source cluster from which Restores will be created via this RestorePlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#cluster GkeBackupRestorePlan#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The region of the Restore Plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#location GkeBackupRestorePlan#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The full name of the BackupPlan Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#name GkeBackupRestorePlan#name}

---

##### `restore_config`<sup>Required</sup> <a name="restore_config" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.restoreConfig"></a>

```python
restore_config: GkeBackupRestorePlanRestoreConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig">GkeBackupRestorePlanRestoreConfig</a>

restore_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#restore_config GkeBackupRestorePlan#restore_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User specified descriptive string for this RestorePlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#description GkeBackupRestorePlan#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#id GkeBackupRestorePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Description: A set of custom labels supplied by the user.

A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#labels GkeBackupRestorePlan#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#project GkeBackupRestorePlan#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.timeouts"></a>

```python
timeouts: GkeBackupRestorePlanTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts">GkeBackupRestorePlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#timeouts GkeBackupRestorePlan#timeouts}

---

### GkeBackupRestorePlanRestoreConfig <a name="GkeBackupRestorePlanRestoreConfig" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig(
  all_namespaces: typing.Union[bool, IResolvable] = None,
  cluster_resource_conflict_policy: str = None,
  cluster_resource_restore_scope: GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope = None,
  excluded_namespaces: GkeBackupRestorePlanRestoreConfigExcludedNamespaces = None,
  namespaced_resource_restore_mode: str = None,
  no_namespaces: typing.Union[bool, IResolvable] = None,
  selected_applications: GkeBackupRestorePlanRestoreConfigSelectedApplications = None,
  selected_namespaces: GkeBackupRestorePlanRestoreConfigSelectedNamespaces = None,
  transformation_rules: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigTransformationRules]] = None,
  volume_data_restore_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.allNamespaces">all_namespaces</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If True, restore all namespaced resources in the Backup. Setting this field to False will result in an error. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.clusterResourceConflictPolicy">cluster_resource_conflict_policy</a></code> | <code>str</code> | Defines the behavior for handling the situation where cluster-scoped resources being restored already exist in the target cluster. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.clusterResourceRestoreScope">cluster_resource_restore_scope</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a></code> | cluster_resource_restore_scope block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.excludedNamespaces">excluded_namespaces</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespaces">GkeBackupRestorePlanRestoreConfigExcludedNamespaces</a></code> | excluded_namespaces block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.namespacedResourceRestoreMode">namespaced_resource_restore_mode</a></code> | <code>str</code> | Defines the behavior for handling the situation where sets of namespaced resources being restored already exist in the target cluster. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.noNamespaces">no_namespaces</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not restore any namespaced resources if set to "True". Specifying this field to "False" is not allowed. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.selectedApplications">selected_applications</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplications">GkeBackupRestorePlanRestoreConfigSelectedApplications</a></code> | selected_applications block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.selectedNamespaces">selected_namespaces</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespaces">GkeBackupRestorePlanRestoreConfigSelectedNamespaces</a></code> | selected_namespaces block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.transformationRules">transformation_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules">GkeBackupRestorePlanRestoreConfigTransformationRules</a>]]</code> | transformation_rules block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.volumeDataRestorePolicy">volume_data_restore_policy</a></code> | <code>str</code> | Specifies the mechanism to be used to restore volume data. |

---

##### `all_namespaces`<sup>Optional</sup> <a name="all_namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.allNamespaces"></a>

```python
all_namespaces: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If True, restore all namespaced resources in the Backup. Setting this field to False will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#all_namespaces GkeBackupRestorePlan#all_namespaces}

---

##### `cluster_resource_conflict_policy`<sup>Optional</sup> <a name="cluster_resource_conflict_policy" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.clusterResourceConflictPolicy"></a>

```python
cluster_resource_conflict_policy: str
```

- *Type:* str

Defines the behavior for handling the situation where cluster-scoped resources being restored already exist in the target cluster.

This MUST be set to a value other than 'CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED'
if 'clusterResourceRestoreScope' is anyting other than 'noGroupKinds'.
See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#clusterresourceconflictpolicy
for more information on each policy option. Possible values: ["USE_EXISTING_VERSION", "USE_BACKUP_VERSION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#cluster_resource_conflict_policy GkeBackupRestorePlan#cluster_resource_conflict_policy}

---

##### `cluster_resource_restore_scope`<sup>Optional</sup> <a name="cluster_resource_restore_scope" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.clusterResourceRestoreScope"></a>

```python
cluster_resource_restore_scope: GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a>

cluster_resource_restore_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#cluster_resource_restore_scope GkeBackupRestorePlan#cluster_resource_restore_scope}

---

##### `excluded_namespaces`<sup>Optional</sup> <a name="excluded_namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.excludedNamespaces"></a>

```python
excluded_namespaces: GkeBackupRestorePlanRestoreConfigExcludedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespaces">GkeBackupRestorePlanRestoreConfigExcludedNamespaces</a>

excluded_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#excluded_namespaces GkeBackupRestorePlan#excluded_namespaces}

---

##### `namespaced_resource_restore_mode`<sup>Optional</sup> <a name="namespaced_resource_restore_mode" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.namespacedResourceRestoreMode"></a>

```python
namespaced_resource_restore_mode: str
```

- *Type:* str

Defines the behavior for handling the situation where sets of namespaced resources being restored already exist in the target cluster.

This MUST be set to a value other than 'NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED'
if the 'namespacedResourceRestoreScope' is anything other than 'noNamespaces'.
See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#namespacedresourcerestoremode
for more information on each mode. Possible values: ["DELETE_AND_RESTORE", "FAIL_ON_CONFLICT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#namespaced_resource_restore_mode GkeBackupRestorePlan#namespaced_resource_restore_mode}

---

##### `no_namespaces`<sup>Optional</sup> <a name="no_namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.noNamespaces"></a>

```python
no_namespaces: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not restore any namespaced resources if set to "True". Specifying this field to "False" is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#no_namespaces GkeBackupRestorePlan#no_namespaces}

---

##### `selected_applications`<sup>Optional</sup> <a name="selected_applications" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.selectedApplications"></a>

```python
selected_applications: GkeBackupRestorePlanRestoreConfigSelectedApplications
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplications">GkeBackupRestorePlanRestoreConfigSelectedApplications</a>

selected_applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#selected_applications GkeBackupRestorePlan#selected_applications}

---

##### `selected_namespaces`<sup>Optional</sup> <a name="selected_namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.selectedNamespaces"></a>

```python
selected_namespaces: GkeBackupRestorePlanRestoreConfigSelectedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespaces">GkeBackupRestorePlanRestoreConfigSelectedNamespaces</a>

selected_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#selected_namespaces GkeBackupRestorePlan#selected_namespaces}

---

##### `transformation_rules`<sup>Optional</sup> <a name="transformation_rules" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.transformationRules"></a>

```python
transformation_rules: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigTransformationRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules">GkeBackupRestorePlanRestoreConfigTransformationRules</a>]]

transformation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#transformation_rules GkeBackupRestorePlan#transformation_rules}

---

##### `volume_data_restore_policy`<sup>Optional</sup> <a name="volume_data_restore_policy" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.volumeDataRestorePolicy"></a>

```python
volume_data_restore_policy: str
```

- *Type:* str

Specifies the mechanism to be used to restore volume data.

This should be set to a value other than 'NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED'
if the 'namespacedResourceRestoreScope' is anything other than 'noNamespaces'.
If not specified, it will be treated as 'NO_VOLUME_DATA_RESTORATION'.
See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#VolumeDataRestorePolicy
for more information on each policy option. Possible values: ["RESTORE_VOLUME_DATA_FROM_BACKUP", "REUSE_VOLUME_HANDLE_FROM_BACKUP", "NO_VOLUME_DATA_RESTORATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#volume_data_restore_policy GkeBackupRestorePlan#volume_data_restore_policy}

---

### GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope <a name="GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope(
  all_group_kinds: typing.Union[bool, IResolvable] = None,
  excluded_group_kinds: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds]] = None,
  no_group_kinds: typing.Union[bool, IResolvable] = None,
  selected_group_kinds: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.allGroupKinds">all_group_kinds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If True, all valid cluster-scoped resources will be restored. Mutually exclusive to any other field in 'clusterResourceRestoreScope'. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.excludedGroupKinds">excluded_group_kinds</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds</a>]]</code> | excluded_group_kinds block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.noGroupKinds">no_group_kinds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If True, no cluster-scoped resources will be restored. Mutually exclusive to any other field in 'clusterResourceRestoreScope'. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.selectedGroupKinds">selected_group_kinds</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds</a>]]</code> | selected_group_kinds block. |

---

##### `all_group_kinds`<sup>Optional</sup> <a name="all_group_kinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.allGroupKinds"></a>

```python
all_group_kinds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If True, all valid cluster-scoped resources will be restored. Mutually exclusive to any other field in 'clusterResourceRestoreScope'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#all_group_kinds GkeBackupRestorePlan#all_group_kinds}

---

##### `excluded_group_kinds`<sup>Optional</sup> <a name="excluded_group_kinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.excludedGroupKinds"></a>

```python
excluded_group_kinds: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds</a>]]

excluded_group_kinds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#excluded_group_kinds GkeBackupRestorePlan#excluded_group_kinds}

---

##### `no_group_kinds`<sup>Optional</sup> <a name="no_group_kinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.noGroupKinds"></a>

```python
no_group_kinds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If True, no cluster-scoped resources will be restored. Mutually exclusive to any other field in 'clusterResourceRestoreScope'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#no_group_kinds GkeBackupRestorePlan#no_group_kinds}

---

##### `selected_group_kinds`<sup>Optional</sup> <a name="selected_group_kinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.selectedGroupKinds"></a>

```python
selected_group_kinds: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds</a>]]

selected_group_kinds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#selected_group_kinds GkeBackupRestorePlan#selected_group_kinds}

---

### GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds <a name="GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds(
  resource_group: str = None,
  resource_kind: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds.property.resourceGroup">resource_group</a></code> | <code>str</code> | API Group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds.property.resourceKind">resource_kind</a></code> | <code>str</code> | Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc. |

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

API Group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#resource_group GkeBackupRestorePlan#resource_group}

---

##### `resource_kind`<sup>Optional</sup> <a name="resource_kind" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds.property.resourceKind"></a>

```python
resource_kind: str
```

- *Type:* str

Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#resource_kind GkeBackupRestorePlan#resource_kind}

---

### GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds <a name="GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds(
  resource_group: str = None,
  resource_kind: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds.property.resourceGroup">resource_group</a></code> | <code>str</code> | API Group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds.property.resourceKind">resource_kind</a></code> | <code>str</code> | Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc. |

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

API Group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#resource_group GkeBackupRestorePlan#resource_group}

---

##### `resource_kind`<sup>Optional</sup> <a name="resource_kind" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds.property.resourceKind"></a>

```python
resource_kind: str
```

- *Type:* str

Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#resource_kind GkeBackupRestorePlan#resource_kind}

---

### GkeBackupRestorePlanRestoreConfigExcludedNamespaces <a name="GkeBackupRestorePlanRestoreConfigExcludedNamespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespaces.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespaces(
  namespaces: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespaces.property.namespaces">namespaces</a></code> | <code>typing.List[str]</code> | A list of Kubernetes Namespaces. |

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespaces.property.namespaces"></a>

```python
namespaces: typing.List[str]
```

- *Type:* typing.List[str]

A list of Kubernetes Namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#namespaces GkeBackupRestorePlan#namespaces}

---

### GkeBackupRestorePlanRestoreConfigSelectedApplications <a name="GkeBackupRestorePlanRestoreConfigSelectedApplications" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplications.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplications(
  namespaced_names: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplications.property.namespacedNames">namespaced_names</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames">GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames</a>]]</code> | namespaced_names block. |

---

##### `namespaced_names`<sup>Required</sup> <a name="namespaced_names" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplications.property.namespacedNames"></a>

```python
namespaced_names: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames">GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames</a>]]

namespaced_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#namespaced_names GkeBackupRestorePlan#namespaced_names}

---

### GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames <a name="GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames(
  name: str,
  namespace: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames.property.name">name</a></code> | <code>str</code> | The name of a Kubernetes Resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames.property.namespace">namespace</a></code> | <code>str</code> | The namespace of a Kubernetes Resource. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames.property.name"></a>

```python
name: str
```

- *Type:* str

The name of a Kubernetes Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#name GkeBackupRestorePlan#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace of a Kubernetes Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#namespace GkeBackupRestorePlan#namespace}

---

### GkeBackupRestorePlanRestoreConfigSelectedNamespaces <a name="GkeBackupRestorePlanRestoreConfigSelectedNamespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespaces.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespaces(
  namespaces: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespaces.property.namespaces">namespaces</a></code> | <code>typing.List[str]</code> | A list of Kubernetes Namespaces. |

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespaces.property.namespaces"></a>

```python
namespaces: typing.List[str]
```

- *Type:* typing.List[str]

A list of Kubernetes Namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#namespaces GkeBackupRestorePlan#namespaces}

---

### GkeBackupRestorePlanRestoreConfigTransformationRules <a name="GkeBackupRestorePlanRestoreConfigTransformationRules" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules(
  field_actions: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions]],
  description: str = None,
  resource_filter: GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules.property.fieldActions">field_actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions">GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions</a>]]</code> | field_actions block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules.property.description">description</a></code> | <code>str</code> | The description is a user specified string description of the transformation rule. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules.property.resourceFilter">resource_filter</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a></code> | resource_filter block. |

---

##### `field_actions`<sup>Required</sup> <a name="field_actions" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules.property.fieldActions"></a>

```python
field_actions: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions">GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions</a>]]

field_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#field_actions GkeBackupRestorePlan#field_actions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules.property.description"></a>

```python
description: str
```

- *Type:* str

The description is a user specified string description of the transformation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#description GkeBackupRestorePlan#description}

---

##### `resource_filter`<sup>Optional</sup> <a name="resource_filter" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules.property.resourceFilter"></a>

```python
resource_filter: GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a>

resource_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#resource_filter GkeBackupRestorePlan#resource_filter}

---

### GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions <a name="GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions(
  op: str,
  from_path: str = None,
  path: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.op">op</a></code> | <code>str</code> | Specifies the operation to perform. Possible values: ["REMOVE", "MOVE", "COPY", "ADD", "TEST", "REPLACE"]. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.fromPath">from_path</a></code> | <code>str</code> | A string containing a JSON Pointer value that references the location in the target document to move the value from. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.path">path</a></code> | <code>str</code> | A string containing a JSON-Pointer value that references a location within the target document where the operation is performed. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.value">value</a></code> | <code>str</code> | A string that specifies the desired value in string format to use for transformation. |

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.op"></a>

```python
op: str
```

- *Type:* str

Specifies the operation to perform. Possible values: ["REMOVE", "MOVE", "COPY", "ADD", "TEST", "REPLACE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#op GkeBackupRestorePlan#op}

---

##### `from_path`<sup>Optional</sup> <a name="from_path" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.fromPath"></a>

```python
from_path: str
```

- *Type:* str

A string containing a JSON Pointer value that references the location in the target document to move the value from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#from_path GkeBackupRestorePlan#from_path}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.path"></a>

```python
path: str
```

- *Type:* str

A string containing a JSON-Pointer value that references a location within the target document where the operation is performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#path GkeBackupRestorePlan#path}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.value"></a>

```python
value: str
```

- *Type:* str

A string that specifies the desired value in string format to use for transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#value GkeBackupRestorePlan#value}

---

### GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter <a name="GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter(
  group_kinds: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds]] = None,
  json_path: str = None,
  namespaces: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.property.groupKinds">group_kinds</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds</a>]]</code> | group_kinds block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.property.jsonPath">json_path</a></code> | <code>str</code> | This is a JSONPath expression that matches specific fields of candidate resources and it operates as a filtering parameter (resources that are not matched with this expression will not be candidates for transformation). |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.property.namespaces">namespaces</a></code> | <code>typing.List[str]</code> | (Filtering parameter) Any resource subject to transformation must be contained within one of the listed Kubernetes Namespace in the Backup. |

---

##### `group_kinds`<sup>Optional</sup> <a name="group_kinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.property.groupKinds"></a>

```python
group_kinds: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds</a>]]

group_kinds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#group_kinds GkeBackupRestorePlan#group_kinds}

---

##### `json_path`<sup>Optional</sup> <a name="json_path" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.property.jsonPath"></a>

```python
json_path: str
```

- *Type:* str

This is a JSONPath expression that matches specific fields of candidate resources and it operates as a filtering parameter (resources that are not matched with this expression will not be candidates for transformation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#json_path GkeBackupRestorePlan#json_path}

---

##### `namespaces`<sup>Optional</sup> <a name="namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.property.namespaces"></a>

```python
namespaces: typing.List[str]
```

- *Type:* typing.List[str]

(Filtering parameter) Any resource subject to transformation must be contained within one of the listed Kubernetes Namespace in the Backup.

If this field is not provided, no namespace filtering will
be performed (all resources in all Namespaces, including all
cluster-scoped resources, will be candidates for transformation).
To mix cluster-scoped and namespaced resources in the same rule,
use an empty string ("") as one of the target namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#namespaces GkeBackupRestorePlan#namespaces}

---

### GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds <a name="GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds(
  resource_group: str = None,
  resource_kind: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds.property.resourceGroup">resource_group</a></code> | <code>str</code> | API Group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds.property.resourceKind">resource_kind</a></code> | <code>str</code> | Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc. |

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

API Group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#resource_group GkeBackupRestorePlan#resource_group}

---

##### `resource_kind`<sup>Optional</sup> <a name="resource_kind" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds.property.resourceKind"></a>

```python
resource_kind: str
```

- *Type:* str

Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#resource_kind GkeBackupRestorePlan#resource_kind}

---

### GkeBackupRestorePlanTimeouts <a name="GkeBackupRestorePlanTimeouts" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#create GkeBackupRestorePlan#create}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#delete GkeBackupRestorePlan#delete}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#update GkeBackupRestorePlan#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#create GkeBackupRestorePlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#delete GkeBackupRestorePlan#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#update GkeBackupRestorePlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList <a name="GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds</a>]]

---


### GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference <a name="GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resetResourceGroup">reset_resource_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resetResourceKind">reset_resource_kind</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_group` <a name="reset_resource_group" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resetResourceGroup"></a>

```python
def reset_resource_group() -> None
```

##### `reset_resource_kind` <a name="reset_resource_kind" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resetResourceKind"></a>

```python
def reset_resource_kind() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceGroupInput">resource_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceKindInput">resource_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceKind">resource_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_group_input`<sup>Optional</sup> <a name="resource_group_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceGroupInput"></a>

```python
resource_group_input: str
```

- *Type:* str

---

##### `resource_kind_input`<sup>Optional</sup> <a name="resource_kind_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceKindInput"></a>

```python
resource_kind_input: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `resource_kind`<sup>Required</sup> <a name="resource_kind" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceKind"></a>

```python
resource_kind: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds</a>]

---


### GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference <a name="GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.putExcludedGroupKinds">put_excluded_group_kinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.putSelectedGroupKinds">put_selected_group_kinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetAllGroupKinds">reset_all_group_kinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetExcludedGroupKinds">reset_excluded_group_kinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetNoGroupKinds">reset_no_group_kinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetSelectedGroupKinds">reset_selected_group_kinds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_excluded_group_kinds` <a name="put_excluded_group_kinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.putExcludedGroupKinds"></a>

```python
def put_excluded_group_kinds(
  value: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.putExcludedGroupKinds.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds</a>]]

---

##### `put_selected_group_kinds` <a name="put_selected_group_kinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.putSelectedGroupKinds"></a>

```python
def put_selected_group_kinds(
  value: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.putSelectedGroupKinds.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds</a>]]

---

##### `reset_all_group_kinds` <a name="reset_all_group_kinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetAllGroupKinds"></a>

```python
def reset_all_group_kinds() -> None
```

##### `reset_excluded_group_kinds` <a name="reset_excluded_group_kinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetExcludedGroupKinds"></a>

```python
def reset_excluded_group_kinds() -> None
```

##### `reset_no_group_kinds` <a name="reset_no_group_kinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetNoGroupKinds"></a>

```python
def reset_no_group_kinds() -> None
```

##### `reset_selected_group_kinds` <a name="reset_selected_group_kinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetSelectedGroupKinds"></a>

```python
def reset_selected_group_kinds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.excludedGroupKinds">excluded_group_kinds</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.selectedGroupKinds">selected_group_kinds</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.allGroupKindsInput">all_group_kinds_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.excludedGroupKindsInput">excluded_group_kinds_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.noGroupKindsInput">no_group_kinds_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.selectedGroupKindsInput">selected_group_kinds_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.allGroupKinds">all_group_kinds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.noGroupKinds">no_group_kinds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_group_kinds`<sup>Required</sup> <a name="excluded_group_kinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.excludedGroupKinds"></a>

```python
excluded_group_kinds: GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList</a>

---

##### `selected_group_kinds`<sup>Required</sup> <a name="selected_group_kinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.selectedGroupKinds"></a>

```python
selected_group_kinds: GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList</a>

---

##### `all_group_kinds_input`<sup>Optional</sup> <a name="all_group_kinds_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.allGroupKindsInput"></a>

```python
all_group_kinds_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `excluded_group_kinds_input`<sup>Optional</sup> <a name="excluded_group_kinds_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.excludedGroupKindsInput"></a>

```python
excluded_group_kinds_input: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds</a>]]

---

##### `no_group_kinds_input`<sup>Optional</sup> <a name="no_group_kinds_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.noGroupKindsInput"></a>

```python
no_group_kinds_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `selected_group_kinds_input`<sup>Optional</sup> <a name="selected_group_kinds_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.selectedGroupKindsInput"></a>

```python
selected_group_kinds_input: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds</a>]]

---

##### `all_group_kinds`<sup>Required</sup> <a name="all_group_kinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.allGroupKinds"></a>

```python
all_group_kinds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `no_group_kinds`<sup>Required</sup> <a name="no_group_kinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.noGroupKinds"></a>

```python
no_group_kinds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.internalValue"></a>

```python
internal_value: GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a>

---


### GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList <a name="GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds</a>]]

---


### GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference <a name="GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resetResourceGroup">reset_resource_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resetResourceKind">reset_resource_kind</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_group` <a name="reset_resource_group" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resetResourceGroup"></a>

```python
def reset_resource_group() -> None
```

##### `reset_resource_kind` <a name="reset_resource_kind" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resetResourceKind"></a>

```python
def reset_resource_kind() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceGroupInput">resource_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceKindInput">resource_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceKind">resource_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_group_input`<sup>Optional</sup> <a name="resource_group_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceGroupInput"></a>

```python
resource_group_input: str
```

- *Type:* str

---

##### `resource_kind_input`<sup>Optional</sup> <a name="resource_kind_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceKindInput"></a>

```python
resource_kind_input: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `resource_kind`<sup>Required</sup> <a name="resource_kind" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceKind"></a>

```python
resource_kind: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds</a>]

---


### GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference <a name="GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.namespacesInput">namespaces_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.namespaces">namespaces</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespaces">GkeBackupRestorePlanRestoreConfigExcludedNamespaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespaces_input`<sup>Optional</sup> <a name="namespaces_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.namespacesInput"></a>

```python
namespaces_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.namespaces"></a>

```python
namespaces: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.internalValue"></a>

```python
internal_value: GkeBackupRestorePlanRestoreConfigExcludedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespaces">GkeBackupRestorePlanRestoreConfigExcludedNamespaces</a>

---


### GkeBackupRestorePlanRestoreConfigOutputReference <a name="GkeBackupRestorePlanRestoreConfigOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putClusterResourceRestoreScope">put_cluster_resource_restore_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putExcludedNamespaces">put_excluded_namespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putSelectedApplications">put_selected_applications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putSelectedNamespaces">put_selected_namespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putTransformationRules">put_transformation_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetAllNamespaces">reset_all_namespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetClusterResourceConflictPolicy">reset_cluster_resource_conflict_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetClusterResourceRestoreScope">reset_cluster_resource_restore_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetExcludedNamespaces">reset_excluded_namespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetNamespacedResourceRestoreMode">reset_namespaced_resource_restore_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetNoNamespaces">reset_no_namespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetSelectedApplications">reset_selected_applications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetSelectedNamespaces">reset_selected_namespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetTransformationRules">reset_transformation_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetVolumeDataRestorePolicy">reset_volume_data_restore_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cluster_resource_restore_scope` <a name="put_cluster_resource_restore_scope" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putClusterResourceRestoreScope"></a>

```python
def put_cluster_resource_restore_scope(
  all_group_kinds: typing.Union[bool, IResolvable] = None,
  excluded_group_kinds: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds]] = None,
  no_group_kinds: typing.Union[bool, IResolvable] = None,
  selected_group_kinds: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds]] = None
) -> None
```

###### `all_group_kinds`<sup>Optional</sup> <a name="all_group_kinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putClusterResourceRestoreScope.parameter.allGroupKinds"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If True, all valid cluster-scoped resources will be restored. Mutually exclusive to any other field in 'clusterResourceRestoreScope'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#all_group_kinds GkeBackupRestorePlan#all_group_kinds}

---

###### `excluded_group_kinds`<sup>Optional</sup> <a name="excluded_group_kinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putClusterResourceRestoreScope.parameter.excludedGroupKinds"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds</a>]]

excluded_group_kinds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#excluded_group_kinds GkeBackupRestorePlan#excluded_group_kinds}

---

###### `no_group_kinds`<sup>Optional</sup> <a name="no_group_kinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putClusterResourceRestoreScope.parameter.noGroupKinds"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If True, no cluster-scoped resources will be restored. Mutually exclusive to any other field in 'clusterResourceRestoreScope'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#no_group_kinds GkeBackupRestorePlan#no_group_kinds}

---

###### `selected_group_kinds`<sup>Optional</sup> <a name="selected_group_kinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putClusterResourceRestoreScope.parameter.selectedGroupKinds"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds</a>]]

selected_group_kinds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#selected_group_kinds GkeBackupRestorePlan#selected_group_kinds}

---

##### `put_excluded_namespaces` <a name="put_excluded_namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putExcludedNamespaces"></a>

```python
def put_excluded_namespaces(
  namespaces: typing.List[str]
) -> None
```

###### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putExcludedNamespaces.parameter.namespaces"></a>

- *Type:* typing.List[str]

A list of Kubernetes Namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#namespaces GkeBackupRestorePlan#namespaces}

---

##### `put_selected_applications` <a name="put_selected_applications" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putSelectedApplications"></a>

```python
def put_selected_applications(
  namespaced_names: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames]]
) -> None
```

###### `namespaced_names`<sup>Required</sup> <a name="namespaced_names" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putSelectedApplications.parameter.namespacedNames"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames">GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames</a>]]

namespaced_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#namespaced_names GkeBackupRestorePlan#namespaced_names}

---

##### `put_selected_namespaces` <a name="put_selected_namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putSelectedNamespaces"></a>

```python
def put_selected_namespaces(
  namespaces: typing.List[str]
) -> None
```

###### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putSelectedNamespaces.parameter.namespaces"></a>

- *Type:* typing.List[str]

A list of Kubernetes Namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#namespaces GkeBackupRestorePlan#namespaces}

---

##### `put_transformation_rules` <a name="put_transformation_rules" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putTransformationRules"></a>

```python
def put_transformation_rules(
  value: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigTransformationRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putTransformationRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules">GkeBackupRestorePlanRestoreConfigTransformationRules</a>]]

---

##### `reset_all_namespaces` <a name="reset_all_namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetAllNamespaces"></a>

```python
def reset_all_namespaces() -> None
```

##### `reset_cluster_resource_conflict_policy` <a name="reset_cluster_resource_conflict_policy" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetClusterResourceConflictPolicy"></a>

```python
def reset_cluster_resource_conflict_policy() -> None
```

##### `reset_cluster_resource_restore_scope` <a name="reset_cluster_resource_restore_scope" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetClusterResourceRestoreScope"></a>

```python
def reset_cluster_resource_restore_scope() -> None
```

##### `reset_excluded_namespaces` <a name="reset_excluded_namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetExcludedNamespaces"></a>

```python
def reset_excluded_namespaces() -> None
```

##### `reset_namespaced_resource_restore_mode` <a name="reset_namespaced_resource_restore_mode" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetNamespacedResourceRestoreMode"></a>

```python
def reset_namespaced_resource_restore_mode() -> None
```

##### `reset_no_namespaces` <a name="reset_no_namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetNoNamespaces"></a>

```python
def reset_no_namespaces() -> None
```

##### `reset_selected_applications` <a name="reset_selected_applications" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetSelectedApplications"></a>

```python
def reset_selected_applications() -> None
```

##### `reset_selected_namespaces` <a name="reset_selected_namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetSelectedNamespaces"></a>

```python
def reset_selected_namespaces() -> None
```

##### `reset_transformation_rules` <a name="reset_transformation_rules" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetTransformationRules"></a>

```python
def reset_transformation_rules() -> None
```

##### `reset_volume_data_restore_policy` <a name="reset_volume_data_restore_policy" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetVolumeDataRestorePolicy"></a>

```python
def reset_volume_data_restore_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceRestoreScope">cluster_resource_restore_scope</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.excludedNamespaces">excluded_namespaces</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference">GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.selectedApplications">selected_applications</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference">GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.selectedNamespaces">selected_namespaces</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference">GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.transformationRules">transformation_rules</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList">GkeBackupRestorePlanRestoreConfigTransformationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.allNamespacesInput">all_namespaces_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceConflictPolicyInput">cluster_resource_conflict_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceRestoreScopeInput">cluster_resource_restore_scope_input</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.excludedNamespacesInput">excluded_namespaces_input</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespaces">GkeBackupRestorePlanRestoreConfigExcludedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.namespacedResourceRestoreModeInput">namespaced_resource_restore_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.noNamespacesInput">no_namespaces_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.selectedApplicationsInput">selected_applications_input</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplications">GkeBackupRestorePlanRestoreConfigSelectedApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.selectedNamespacesInput">selected_namespaces_input</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespaces">GkeBackupRestorePlanRestoreConfigSelectedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.transformationRulesInput">transformation_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules">GkeBackupRestorePlanRestoreConfigTransformationRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicyInput">volume_data_restore_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.allNamespaces">all_namespaces</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceConflictPolicy">cluster_resource_conflict_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.namespacedResourceRestoreMode">namespaced_resource_restore_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.noNamespaces">no_namespaces</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicy">volume_data_restore_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig">GkeBackupRestorePlanRestoreConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_resource_restore_scope`<sup>Required</sup> <a name="cluster_resource_restore_scope" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceRestoreScope"></a>

```python
cluster_resource_restore_scope: GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference</a>

---

##### `excluded_namespaces`<sup>Required</sup> <a name="excluded_namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.excludedNamespaces"></a>

```python
excluded_namespaces: GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference">GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference</a>

---

##### `selected_applications`<sup>Required</sup> <a name="selected_applications" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.selectedApplications"></a>

```python
selected_applications: GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference">GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference</a>

---

##### `selected_namespaces`<sup>Required</sup> <a name="selected_namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.selectedNamespaces"></a>

```python
selected_namespaces: GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference">GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference</a>

---

##### `transformation_rules`<sup>Required</sup> <a name="transformation_rules" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.transformationRules"></a>

```python
transformation_rules: GkeBackupRestorePlanRestoreConfigTransformationRulesList
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList">GkeBackupRestorePlanRestoreConfigTransformationRulesList</a>

---

##### `all_namespaces_input`<sup>Optional</sup> <a name="all_namespaces_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.allNamespacesInput"></a>

```python
all_namespaces_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_resource_conflict_policy_input`<sup>Optional</sup> <a name="cluster_resource_conflict_policy_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceConflictPolicyInput"></a>

```python
cluster_resource_conflict_policy_input: str
```

- *Type:* str

---

##### `cluster_resource_restore_scope_input`<sup>Optional</sup> <a name="cluster_resource_restore_scope_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceRestoreScopeInput"></a>

```python
cluster_resource_restore_scope_input: GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a>

---

##### `excluded_namespaces_input`<sup>Optional</sup> <a name="excluded_namespaces_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.excludedNamespacesInput"></a>

```python
excluded_namespaces_input: GkeBackupRestorePlanRestoreConfigExcludedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespaces">GkeBackupRestorePlanRestoreConfigExcludedNamespaces</a>

---

##### `namespaced_resource_restore_mode_input`<sup>Optional</sup> <a name="namespaced_resource_restore_mode_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.namespacedResourceRestoreModeInput"></a>

```python
namespaced_resource_restore_mode_input: str
```

- *Type:* str

---

##### `no_namespaces_input`<sup>Optional</sup> <a name="no_namespaces_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.noNamespacesInput"></a>

```python
no_namespaces_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `selected_applications_input`<sup>Optional</sup> <a name="selected_applications_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.selectedApplicationsInput"></a>

```python
selected_applications_input: GkeBackupRestorePlanRestoreConfigSelectedApplications
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplications">GkeBackupRestorePlanRestoreConfigSelectedApplications</a>

---

##### `selected_namespaces_input`<sup>Optional</sup> <a name="selected_namespaces_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.selectedNamespacesInput"></a>

```python
selected_namespaces_input: GkeBackupRestorePlanRestoreConfigSelectedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespaces">GkeBackupRestorePlanRestoreConfigSelectedNamespaces</a>

---

##### `transformation_rules_input`<sup>Optional</sup> <a name="transformation_rules_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.transformationRulesInput"></a>

```python
transformation_rules_input: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigTransformationRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules">GkeBackupRestorePlanRestoreConfigTransformationRules</a>]]

---

##### `volume_data_restore_policy_input`<sup>Optional</sup> <a name="volume_data_restore_policy_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicyInput"></a>

```python
volume_data_restore_policy_input: str
```

- *Type:* str

---

##### `all_namespaces`<sup>Required</sup> <a name="all_namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.allNamespaces"></a>

```python
all_namespaces: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_resource_conflict_policy`<sup>Required</sup> <a name="cluster_resource_conflict_policy" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceConflictPolicy"></a>

```python
cluster_resource_conflict_policy: str
```

- *Type:* str

---

##### `namespaced_resource_restore_mode`<sup>Required</sup> <a name="namespaced_resource_restore_mode" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.namespacedResourceRestoreMode"></a>

```python
namespaced_resource_restore_mode: str
```

- *Type:* str

---

##### `no_namespaces`<sup>Required</sup> <a name="no_namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.noNamespaces"></a>

```python
no_namespaces: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `volume_data_restore_policy`<sup>Required</sup> <a name="volume_data_restore_policy" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicy"></a>

```python
volume_data_restore_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.internalValue"></a>

```python
internal_value: GkeBackupRestorePlanRestoreConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig">GkeBackupRestorePlanRestoreConfig</a>

---


### GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList <a name="GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames">GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames">GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames</a>]]

---


### GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference <a name="GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames">GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames">GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames</a>]

---


### GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference <a name="GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.putNamespacedNames">put_namespaced_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_namespaced_names` <a name="put_namespaced_names" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.putNamespacedNames"></a>

```python
def put_namespaced_names(
  value: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.putNamespacedNames.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames">GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.namespacedNames">namespaced_names</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList">GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.namespacedNamesInput">namespaced_names_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames">GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplications">GkeBackupRestorePlanRestoreConfigSelectedApplications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespaced_names`<sup>Required</sup> <a name="namespaced_names" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.namespacedNames"></a>

```python
namespaced_names: GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList">GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList</a>

---

##### `namespaced_names_input`<sup>Optional</sup> <a name="namespaced_names_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.namespacedNamesInput"></a>

```python
namespaced_names_input: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames">GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.internalValue"></a>

```python
internal_value: GkeBackupRestorePlanRestoreConfigSelectedApplications
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplications">GkeBackupRestorePlanRestoreConfigSelectedApplications</a>

---


### GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference <a name="GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.namespacesInput">namespaces_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.namespaces">namespaces</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespaces">GkeBackupRestorePlanRestoreConfigSelectedNamespaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespaces_input`<sup>Optional</sup> <a name="namespaces_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.namespacesInput"></a>

```python
namespaces_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.namespaces"></a>

```python
namespaces: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.internalValue"></a>

```python
internal_value: GkeBackupRestorePlanRestoreConfigSelectedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespaces">GkeBackupRestorePlanRestoreConfigSelectedNamespaces</a>

---


### GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList <a name="GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions">GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions">GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions</a>]]

---


### GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference <a name="GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resetFromPath">reset_from_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from_path` <a name="reset_from_path" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resetFromPath"></a>

```python
def reset_from_path() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.fromPathInput">from_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.opInput">op_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.fromPath">from_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.op">op</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions">GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_path_input`<sup>Optional</sup> <a name="from_path_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.fromPathInput"></a>

```python
from_path_input: str
```

- *Type:* str

---

##### `op_input`<sup>Optional</sup> <a name="op_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.opInput"></a>

```python
op_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `from_path`<sup>Required</sup> <a name="from_path" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.fromPath"></a>

```python
from_path: str
```

- *Type:* str

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.op"></a>

```python
op: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions">GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions</a>]

---


### GkeBackupRestorePlanRestoreConfigTransformationRulesList <a name="GkeBackupRestorePlanRestoreConfigTransformationRulesList" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules">GkeBackupRestorePlanRestoreConfigTransformationRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigTransformationRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules">GkeBackupRestorePlanRestoreConfigTransformationRules</a>]]

---


### GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference <a name="GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putFieldActions">put_field_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putResourceFilter">put_resource_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resetResourceFilter">reset_resource_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_field_actions` <a name="put_field_actions" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putFieldActions"></a>

```python
def put_field_actions(
  value: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putFieldActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions">GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions</a>]]

---

##### `put_resource_filter` <a name="put_resource_filter" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putResourceFilter"></a>

```python
def put_resource_filter(
  group_kinds: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds]] = None,
  json_path: str = None,
  namespaces: typing.List[str] = None
) -> None
```

###### `group_kinds`<sup>Optional</sup> <a name="group_kinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putResourceFilter.parameter.groupKinds"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds</a>]]

group_kinds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#group_kinds GkeBackupRestorePlan#group_kinds}

---

###### `json_path`<sup>Optional</sup> <a name="json_path" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putResourceFilter.parameter.jsonPath"></a>

- *Type:* str

This is a JSONPath expression that matches specific fields of candidate resources and it operates as a filtering parameter (resources that are not matched with this expression will not be candidates for transformation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#json_path GkeBackupRestorePlan#json_path}

---

###### `namespaces`<sup>Optional</sup> <a name="namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putResourceFilter.parameter.namespaces"></a>

- *Type:* typing.List[str]

(Filtering parameter) Any resource subject to transformation must be contained within one of the listed Kubernetes Namespace in the Backup.

If this field is not provided, no namespace filtering will
be performed (all resources in all Namespaces, including all
cluster-scoped resources, will be candidates for transformation).
To mix cluster-scoped and namespaced resources in the same rule,
use an empty string ("") as one of the target namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/gke_backup_restore_plan#namespaces GkeBackupRestorePlan#namespaces}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_resource_filter` <a name="reset_resource_filter" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resetResourceFilter"></a>

```python
def reset_resource_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.fieldActions">field_actions</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList">GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.resourceFilter">resource_filter</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.fieldActionsInput">field_actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions">GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.resourceFilterInput">resource_filter_input</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules">GkeBackupRestorePlanRestoreConfigTransformationRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_actions`<sup>Required</sup> <a name="field_actions" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.fieldActions"></a>

```python
field_actions: GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList">GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList</a>

---

##### `resource_filter`<sup>Required</sup> <a name="resource_filter" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.resourceFilter"></a>

```python
resource_filter: GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `field_actions_input`<sup>Optional</sup> <a name="field_actions_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.fieldActionsInput"></a>

```python
field_actions_input: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions">GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions</a>]]

---

##### `resource_filter_input`<sup>Optional</sup> <a name="resource_filter_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.resourceFilterInput"></a>

```python
resource_filter_input: GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GkeBackupRestorePlanRestoreConfigTransformationRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules">GkeBackupRestorePlanRestoreConfigTransformationRules</a>]

---


### GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList <a name="GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds</a>]]

---


### GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference <a name="GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resetResourceGroup">reset_resource_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resetResourceKind">reset_resource_kind</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_group` <a name="reset_resource_group" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resetResourceGroup"></a>

```python
def reset_resource_group() -> None
```

##### `reset_resource_kind` <a name="reset_resource_kind" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resetResourceKind"></a>

```python
def reset_resource_kind() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceGroupInput">resource_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceKindInput">resource_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceKind">resource_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_group_input`<sup>Optional</sup> <a name="resource_group_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceGroupInput"></a>

```python
resource_group_input: str
```

- *Type:* str

---

##### `resource_kind_input`<sup>Optional</sup> <a name="resource_kind_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceKindInput"></a>

```python
resource_kind_input: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `resource_kind`<sup>Required</sup> <a name="resource_kind" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceKind"></a>

```python
resource_kind: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds</a>]

---


### GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference <a name="GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.putGroupKinds">put_group_kinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resetGroupKinds">reset_group_kinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resetJsonPath">reset_json_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resetNamespaces">reset_namespaces</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_group_kinds` <a name="put_group_kinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.putGroupKinds"></a>

```python
def put_group_kinds(
  value: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.putGroupKinds.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds</a>]]

---

##### `reset_group_kinds` <a name="reset_group_kinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resetGroupKinds"></a>

```python
def reset_group_kinds() -> None
```

##### `reset_json_path` <a name="reset_json_path" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resetJsonPath"></a>

```python
def reset_json_path() -> None
```

##### `reset_namespaces` <a name="reset_namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resetNamespaces"></a>

```python
def reset_namespaces() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.groupKinds">group_kinds</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.groupKindsInput">group_kinds_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.jsonPathInput">json_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.namespacesInput">namespaces_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.jsonPath">json_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.namespaces">namespaces</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_kinds`<sup>Required</sup> <a name="group_kinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.groupKinds"></a>

```python
group_kinds: GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList</a>

---

##### `group_kinds_input`<sup>Optional</sup> <a name="group_kinds_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.groupKindsInput"></a>

```python
group_kinds_input: typing.Union[IResolvable, typing.List[GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds</a>]]

---

##### `json_path_input`<sup>Optional</sup> <a name="json_path_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.jsonPathInput"></a>

```python
json_path_input: str
```

- *Type:* str

---

##### `namespaces_input`<sup>Optional</sup> <a name="namespaces_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.namespacesInput"></a>

```python
namespaces_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `json_path`<sup>Required</sup> <a name="json_path" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.jsonPath"></a>

```python
json_path: str
```

- *Type:* str

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.namespaces"></a>

```python
namespaces: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.internalValue"></a>

```python
internal_value: GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a>

---


### GkeBackupRestorePlanTimeoutsOutputReference <a name="GkeBackupRestorePlanTimeoutsOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan

gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts">GkeBackupRestorePlanTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GkeBackupRestorePlanTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts">GkeBackupRestorePlanTimeouts</a>]

---



