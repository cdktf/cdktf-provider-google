# `backupDrBackupPlan` Submodule <a name="`backupDrBackupPlan` Submodule" id="@cdktf/provider-google.backupDrBackupPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupDrBackupPlan <a name="BackupDrBackupPlan" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan google_backup_dr_backup_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan

backupDrBackupPlan.BackupDrBackupPlan(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_plan_id: str,
  backup_rules: typing.Union[IResolvable, typing.List[BackupDrBackupPlanBackupRules]],
  backup_vault: str,
  location: str,
  resource_type: str,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: BackupDrBackupPlanTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.backupPlanId">backup_plan_id</a></code> | <code>str</code> | The ID of the backup plan. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.backupRules">backup_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules">BackupDrBackupPlanBackupRules</a>]]</code> | backup_rules block. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.backupVault">backup_vault</a></code> | <code>str</code> | Backup vault where the backups gets stored using this Backup plan. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the backup plan. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | The resource type to which the 'BackupPlan' will be applied. Examples include, "compute.googleapis.com/Instance" and "storage.googleapis.com/Bucket". |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.description">description</a></code> | <code>str</code> | The description allows for additional details about 'BackupPlan' and its use cases to be provided. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#id BackupDrBackupPlan#id}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#project BackupDrBackupPlan#project}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts">BackupDrBackupPlanTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_plan_id`<sup>Required</sup> <a name="backup_plan_id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.backupPlanId"></a>

- *Type:* str

The ID of the backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#backup_plan_id BackupDrBackupPlan#backup_plan_id}

---

##### `backup_rules`<sup>Required</sup> <a name="backup_rules" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.backupRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules">BackupDrBackupPlanBackupRules</a>]]

backup_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#backup_rules BackupDrBackupPlan#backup_rules}

---

##### `backup_vault`<sup>Required</sup> <a name="backup_vault" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.backupVault"></a>

- *Type:* str

Backup vault where the backups gets stored using this Backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#backup_vault BackupDrBackupPlan#backup_vault}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.location"></a>

- *Type:* str

The location for the backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#location BackupDrBackupPlan#location}

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.resourceType"></a>

- *Type:* str

The resource type to which the 'BackupPlan' will be applied. Examples include, "compute.googleapis.com/Instance" and "storage.googleapis.com/Bucket".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#resource_type BackupDrBackupPlan#resource_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.description"></a>

- *Type:* str

The description allows for additional details about 'BackupPlan' and its use cases to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#description BackupDrBackupPlan#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#id BackupDrBackupPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#project BackupDrBackupPlan#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts">BackupDrBackupPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#timeouts BackupDrBackupPlan#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.putBackupRules">put_backup_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backup_rules` <a name="put_backup_rules" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.putBackupRules"></a>

```python
def put_backup_rules(
  value: typing.Union[IResolvable, typing.List[BackupDrBackupPlanBackupRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.putBackupRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules">BackupDrBackupPlanBackupRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#create BackupDrBackupPlan#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#delete BackupDrBackupPlan#delete}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BackupDrBackupPlan resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan

backupDrBackupPlan.BackupDrBackupPlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan

backupDrBackupPlan.BackupDrBackupPlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan

backupDrBackupPlan.BackupDrBackupPlan.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan

backupDrBackupPlan.BackupDrBackupPlan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BackupDrBackupPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BackupDrBackupPlan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BackupDrBackupPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BackupDrBackupPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupRules">backup_rules</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList">BackupDrBackupPlanBackupRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupVaultServiceAccount">backup_vault_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference">BackupDrBackupPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupPlanIdInput">backup_plan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupRulesInput">backup_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules">BackupDrBackupPlanBackupRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupVaultInput">backup_vault_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts">BackupDrBackupPlanTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupPlanId">backup_plan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupVault">backup_vault</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_rules`<sup>Required</sup> <a name="backup_rules" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupRules"></a>

```python
backup_rules: BackupDrBackupPlanBackupRulesList
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList">BackupDrBackupPlanBackupRulesList</a>

---

##### `backup_vault_service_account`<sup>Required</sup> <a name="backup_vault_service_account" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupVaultServiceAccount"></a>

```python
backup_vault_service_account: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.timeouts"></a>

```python
timeouts: BackupDrBackupPlanTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference">BackupDrBackupPlanTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `backup_plan_id_input`<sup>Optional</sup> <a name="backup_plan_id_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupPlanIdInput"></a>

```python
backup_plan_id_input: str
```

- *Type:* str

---

##### `backup_rules_input`<sup>Optional</sup> <a name="backup_rules_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupRulesInput"></a>

```python
backup_rules_input: typing.Union[IResolvable, typing.List[BackupDrBackupPlanBackupRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules">BackupDrBackupPlanBackupRules</a>]]

---

##### `backup_vault_input`<sup>Optional</sup> <a name="backup_vault_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupVaultInput"></a>

```python
backup_vault_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BackupDrBackupPlanTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts">BackupDrBackupPlanTimeouts</a>]

---

##### `backup_plan_id`<sup>Required</sup> <a name="backup_plan_id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupPlanId"></a>

```python
backup_plan_id: str
```

- *Type:* str

---

##### `backup_vault`<sup>Required</sup> <a name="backup_vault" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupVault"></a>

```python
backup_vault: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BackupDrBackupPlanBackupRules <a name="BackupDrBackupPlanBackupRules" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan

backupDrBackupPlan.BackupDrBackupPlanBackupRules(
  backup_retention_days: typing.Union[int, float],
  rule_id: str,
  standard_schedule: BackupDrBackupPlanBackupRulesStandardSchedule
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules.property.backupRetentionDays">backup_retention_days</a></code> | <code>typing.Union[int, float]</code> | Configures the duration for which backup data will be kept. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules.property.ruleId">rule_id</a></code> | <code>str</code> | The unique ID of this 'BackupRule'. The 'rule_id' is unique per 'BackupPlan'. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules.property.standardSchedule">standard_schedule</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule">BackupDrBackupPlanBackupRulesStandardSchedule</a></code> | standard_schedule block. |

---

##### `backup_retention_days`<sup>Required</sup> <a name="backup_retention_days" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules.property.backupRetentionDays"></a>

```python
backup_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Configures the duration for which backup data will be kept.

The value should be greater than or equal to minimum enforced retention of the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#backup_retention_days BackupDrBackupPlan#backup_retention_days}

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

The unique ID of this 'BackupRule'. The 'rule_id' is unique per 'BackupPlan'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#rule_id BackupDrBackupPlan#rule_id}

---

##### `standard_schedule`<sup>Required</sup> <a name="standard_schedule" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules.property.standardSchedule"></a>

```python
standard_schedule: BackupDrBackupPlanBackupRulesStandardSchedule
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule">BackupDrBackupPlanBackupRulesStandardSchedule</a>

standard_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#standard_schedule BackupDrBackupPlan#standard_schedule}

---

### BackupDrBackupPlanBackupRulesStandardSchedule <a name="BackupDrBackupPlanBackupRulesStandardSchedule" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan

backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule(
  recurrence_type: str,
  time_zone: str,
  backup_window: BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow = None,
  days_of_month: typing.List[typing.Union[int, float]] = None,
  days_of_week: typing.List[str] = None,
  hourly_frequency: typing.Union[int, float] = None,
  months: typing.List[str] = None,
  week_day_of_month: BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.recurrenceType">recurrence_type</a></code> | <code>str</code> | RecurrenceType enumerates the applicable periodicity for the schedule. Possible values: ["HOURLY", "DAILY", "WEEKLY", "MONTHLY", "YEARLY"]. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.timeZone">time_zone</a></code> | <code>str</code> | The time zone to be used when interpreting the schedule. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.backupWindow">backup_window</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow">BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow</a></code> | backup_window block. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.daysOfMonth">days_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Specifies days of months like 1, 5, or 14 on which jobs will run. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | Specifies days of week like MONDAY or TUESDAY, on which jobs will run. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.hourlyFrequency">hourly_frequency</a></code> | <code>typing.Union[int, float]</code> | Specifies frequency for hourly backups. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.months">months</a></code> | <code>typing.List[str]</code> | Specifies values of months Possible values: ["MONTH_UNSPECIFIED", "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.weekDayOfMonth">week_day_of_month</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth">BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth</a></code> | week_day_of_month block. |

---

##### `recurrence_type`<sup>Required</sup> <a name="recurrence_type" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.recurrenceType"></a>

```python
recurrence_type: str
```

- *Type:* str

RecurrenceType enumerates the applicable periodicity for the schedule. Possible values: ["HOURLY", "DAILY", "WEEKLY", "MONTHLY", "YEARLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#recurrence_type BackupDrBackupPlan#recurrence_type}

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

The time zone to be used when interpreting the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#time_zone BackupDrBackupPlan#time_zone}

---

##### `backup_window`<sup>Optional</sup> <a name="backup_window" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.backupWindow"></a>

```python
backup_window: BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow">BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow</a>

backup_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#backup_window BackupDrBackupPlan#backup_window}

---

##### `days_of_month`<sup>Optional</sup> <a name="days_of_month" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.daysOfMonth"></a>

```python
days_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Specifies days of months like 1, 5, or 14 on which jobs will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#days_of_month BackupDrBackupPlan#days_of_month}

---

##### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

Specifies days of week like MONDAY or TUESDAY, on which jobs will run.

This is required for 'recurrence_type', 'WEEKLY' and is not applicable otherwise. Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#days_of_week BackupDrBackupPlan#days_of_week}

---

##### `hourly_frequency`<sup>Optional</sup> <a name="hourly_frequency" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.hourlyFrequency"></a>

```python
hourly_frequency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies frequency for hourly backups.

An hourly frequency of 2 means jobs will run every 2 hours from start time till end time defined.
This is required for 'recurrence_type', 'HOURLY' and is not applicable otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#hourly_frequency BackupDrBackupPlan#hourly_frequency}

---

##### `months`<sup>Optional</sup> <a name="months" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.months"></a>

```python
months: typing.List[str]
```

- *Type:* typing.List[str]

Specifies values of months Possible values: ["MONTH_UNSPECIFIED", "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#months BackupDrBackupPlan#months}

---

##### `week_day_of_month`<sup>Optional</sup> <a name="week_day_of_month" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.weekDayOfMonth"></a>

```python
week_day_of_month: BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth">BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth</a>

week_day_of_month block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#week_day_of_month BackupDrBackupPlan#week_day_of_month}

---

### BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow <a name="BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan

backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow(
  start_hour_of_day: typing.Union[int, float],
  end_hour_of_day: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow.property.startHourOfDay">start_hour_of_day</a></code> | <code>typing.Union[int, float]</code> | The hour of the day (0-23) when the window starts, for example, if the value of the start hour of the day is 6, that means the backup window starts at 6:00. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow.property.endHourOfDay">end_hour_of_day</a></code> | <code>typing.Union[int, float]</code> | The hour of the day (1-24) when the window ends, for example, if the value of end hour of the day is 10, that means the backup window end time is 10:00. |

---

##### `start_hour_of_day`<sup>Required</sup> <a name="start_hour_of_day" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow.property.startHourOfDay"></a>

```python
start_hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The hour of the day (0-23) when the window starts, for example, if the value of the start hour of the day is 6, that means the backup window starts at 6:00.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#start_hour_of_day BackupDrBackupPlan#start_hour_of_day}

---

##### `end_hour_of_day`<sup>Optional</sup> <a name="end_hour_of_day" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow.property.endHourOfDay"></a>

```python
end_hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The hour of the day (1-24) when the window ends, for example, if the value of end hour of the day is 10, that means the backup window end time is 10:00.

The end hour of the day should be greater than the start

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#end_hour_of_day BackupDrBackupPlan#end_hour_of_day}

---

### BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth <a name="BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan

backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth(
  day_of_week: str,
  week_of_month: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | Specifies the day of the week. Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth.property.weekOfMonth">week_of_month</a></code> | <code>str</code> | WeekOfMonth enumerates possible weeks in the month, e.g. the first, third, or last week of the month. Possible values: ["WEEK_OF_MONTH_UNSPECIFIED", "FIRST", "SECOND", "THIRD", "FOURTH", "LAST"]. |

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

Specifies the day of the week. Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#day_of_week BackupDrBackupPlan#day_of_week}

---

##### `week_of_month`<sup>Required</sup> <a name="week_of_month" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth.property.weekOfMonth"></a>

```python
week_of_month: str
```

- *Type:* str

WeekOfMonth enumerates possible weeks in the month, e.g. the first, third, or last week of the month. Possible values: ["WEEK_OF_MONTH_UNSPECIFIED", "FIRST", "SECOND", "THIRD", "FOURTH", "LAST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#week_of_month BackupDrBackupPlan#week_of_month}

---

### BackupDrBackupPlanConfig <a name="BackupDrBackupPlanConfig" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan

backupDrBackupPlan.BackupDrBackupPlanConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_plan_id: str,
  backup_rules: typing.Union[IResolvable, typing.List[BackupDrBackupPlanBackupRules]],
  backup_vault: str,
  location: str,
  resource_type: str,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: BackupDrBackupPlanTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.backupPlanId">backup_plan_id</a></code> | <code>str</code> | The ID of the backup plan. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.backupRules">backup_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules">BackupDrBackupPlanBackupRules</a>]]</code> | backup_rules block. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.backupVault">backup_vault</a></code> | <code>str</code> | Backup vault where the backups gets stored using this Backup plan. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.location">location</a></code> | <code>str</code> | The location for the backup plan. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.resourceType">resource_type</a></code> | <code>str</code> | The resource type to which the 'BackupPlan' will be applied. Examples include, "compute.googleapis.com/Instance" and "storage.googleapis.com/Bucket". |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.description">description</a></code> | <code>str</code> | The description allows for additional details about 'BackupPlan' and its use cases to be provided. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#id BackupDrBackupPlan#id}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#project BackupDrBackupPlan#project}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts">BackupDrBackupPlanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_plan_id`<sup>Required</sup> <a name="backup_plan_id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.backupPlanId"></a>

```python
backup_plan_id: str
```

- *Type:* str

The ID of the backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#backup_plan_id BackupDrBackupPlan#backup_plan_id}

---

##### `backup_rules`<sup>Required</sup> <a name="backup_rules" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.backupRules"></a>

```python
backup_rules: typing.Union[IResolvable, typing.List[BackupDrBackupPlanBackupRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules">BackupDrBackupPlanBackupRules</a>]]

backup_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#backup_rules BackupDrBackupPlan#backup_rules}

---

##### `backup_vault`<sup>Required</sup> <a name="backup_vault" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.backupVault"></a>

```python
backup_vault: str
```

- *Type:* str

Backup vault where the backups gets stored using this Backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#backup_vault BackupDrBackupPlan#backup_vault}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#location BackupDrBackupPlan#location}

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

The resource type to which the 'BackupPlan' will be applied. Examples include, "compute.googleapis.com/Instance" and "storage.googleapis.com/Bucket".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#resource_type BackupDrBackupPlan#resource_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description allows for additional details about 'BackupPlan' and its use cases to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#description BackupDrBackupPlan#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#id BackupDrBackupPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#project BackupDrBackupPlan#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.timeouts"></a>

```python
timeouts: BackupDrBackupPlanTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts">BackupDrBackupPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#timeouts BackupDrBackupPlan#timeouts}

---

### BackupDrBackupPlanTimeouts <a name="BackupDrBackupPlanTimeouts" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan

backupDrBackupPlan.BackupDrBackupPlanTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#create BackupDrBackupPlan#create}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#delete BackupDrBackupPlan#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#create BackupDrBackupPlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#delete BackupDrBackupPlan#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupDrBackupPlanBackupRulesList <a name="BackupDrBackupPlanBackupRulesList" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan

backupDrBackupPlan.BackupDrBackupPlanBackupRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupDrBackupPlanBackupRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules">BackupDrBackupPlanBackupRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BackupDrBackupPlanBackupRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules">BackupDrBackupPlanBackupRules</a>]]

---


### BackupDrBackupPlanBackupRulesOutputReference <a name="BackupDrBackupPlanBackupRulesOutputReference" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan

backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.putStandardSchedule">put_standard_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_standard_schedule` <a name="put_standard_schedule" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.putStandardSchedule"></a>

```python
def put_standard_schedule(
  recurrence_type: str,
  time_zone: str,
  backup_window: BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow = None,
  days_of_month: typing.List[typing.Union[int, float]] = None,
  days_of_week: typing.List[str] = None,
  hourly_frequency: typing.Union[int, float] = None,
  months: typing.List[str] = None,
  week_day_of_month: BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth = None
) -> None
```

###### `recurrence_type`<sup>Required</sup> <a name="recurrence_type" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.putStandardSchedule.parameter.recurrenceType"></a>

- *Type:* str

RecurrenceType enumerates the applicable periodicity for the schedule. Possible values: ["HOURLY", "DAILY", "WEEKLY", "MONTHLY", "YEARLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#recurrence_type BackupDrBackupPlan#recurrence_type}

---

###### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.putStandardSchedule.parameter.timeZone"></a>

- *Type:* str

The time zone to be used when interpreting the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#time_zone BackupDrBackupPlan#time_zone}

---

###### `backup_window`<sup>Optional</sup> <a name="backup_window" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.putStandardSchedule.parameter.backupWindow"></a>

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow">BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow</a>

backup_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#backup_window BackupDrBackupPlan#backup_window}

---

###### `days_of_month`<sup>Optional</sup> <a name="days_of_month" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.putStandardSchedule.parameter.daysOfMonth"></a>

- *Type:* typing.List[typing.Union[int, float]]

Specifies days of months like 1, 5, or 14 on which jobs will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#days_of_month BackupDrBackupPlan#days_of_month}

---

###### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.putStandardSchedule.parameter.daysOfWeek"></a>

- *Type:* typing.List[str]

Specifies days of week like MONDAY or TUESDAY, on which jobs will run.

This is required for 'recurrence_type', 'WEEKLY' and is not applicable otherwise. Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#days_of_week BackupDrBackupPlan#days_of_week}

---

###### `hourly_frequency`<sup>Optional</sup> <a name="hourly_frequency" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.putStandardSchedule.parameter.hourlyFrequency"></a>

- *Type:* typing.Union[int, float]

Specifies frequency for hourly backups.

An hourly frequency of 2 means jobs will run every 2 hours from start time till end time defined.
This is required for 'recurrence_type', 'HOURLY' and is not applicable otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#hourly_frequency BackupDrBackupPlan#hourly_frequency}

---

###### `months`<sup>Optional</sup> <a name="months" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.putStandardSchedule.parameter.months"></a>

- *Type:* typing.List[str]

Specifies values of months Possible values: ["MONTH_UNSPECIFIED", "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#months BackupDrBackupPlan#months}

---

###### `week_day_of_month`<sup>Optional</sup> <a name="week_day_of_month" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.putStandardSchedule.parameter.weekDayOfMonth"></a>

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth">BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth</a>

week_day_of_month block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#week_day_of_month BackupDrBackupPlan#week_day_of_month}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.standardSchedule">standard_schedule</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference">BackupDrBackupPlanBackupRulesStandardScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.backupRetentionDaysInput">backup_retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.ruleIdInput">rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.standardScheduleInput">standard_schedule_input</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule">BackupDrBackupPlanBackupRulesStandardSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.backupRetentionDays">backup_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules">BackupDrBackupPlanBackupRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `standard_schedule`<sup>Required</sup> <a name="standard_schedule" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.standardSchedule"></a>

```python
standard_schedule: BackupDrBackupPlanBackupRulesStandardScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference">BackupDrBackupPlanBackupRulesStandardScheduleOutputReference</a>

---

##### `backup_retention_days_input`<sup>Optional</sup> <a name="backup_retention_days_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.backupRetentionDaysInput"></a>

```python
backup_retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_id_input`<sup>Optional</sup> <a name="rule_id_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.ruleIdInput"></a>

```python
rule_id_input: str
```

- *Type:* str

---

##### `standard_schedule_input`<sup>Optional</sup> <a name="standard_schedule_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.standardScheduleInput"></a>

```python
standard_schedule_input: BackupDrBackupPlanBackupRulesStandardSchedule
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule">BackupDrBackupPlanBackupRulesStandardSchedule</a>

---

##### `backup_retention_days`<sup>Required</sup> <a name="backup_retention_days" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.backupRetentionDays"></a>

```python
backup_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BackupDrBackupPlanBackupRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules">BackupDrBackupPlanBackupRules</a>]

---


### BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference <a name="BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan

backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.resetEndHourOfDay">reset_end_hour_of_day</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_hour_of_day` <a name="reset_end_hour_of_day" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.resetEndHourOfDay"></a>

```python
def reset_end_hour_of_day() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.endHourOfDayInput">end_hour_of_day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.startHourOfDayInput">start_hour_of_day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.endHourOfDay">end_hour_of_day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.startHourOfDay">start_hour_of_day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow">BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_hour_of_day_input`<sup>Optional</sup> <a name="end_hour_of_day_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.endHourOfDayInput"></a>

```python
end_hour_of_day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_hour_of_day_input`<sup>Optional</sup> <a name="start_hour_of_day_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.startHourOfDayInput"></a>

```python
start_hour_of_day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_hour_of_day`<sup>Required</sup> <a name="end_hour_of_day" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.endHourOfDay"></a>

```python
end_hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_hour_of_day`<sup>Required</sup> <a name="start_hour_of_day" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.startHourOfDay"></a>

```python
start_hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.internalValue"></a>

```python
internal_value: BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow">BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow</a>

---


### BackupDrBackupPlanBackupRulesStandardScheduleOutputReference <a name="BackupDrBackupPlanBackupRulesStandardScheduleOutputReference" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan

backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.putBackupWindow">put_backup_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.putWeekDayOfMonth">put_week_day_of_month</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetBackupWindow">reset_backup_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetDaysOfMonth">reset_days_of_month</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetDaysOfWeek">reset_days_of_week</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetHourlyFrequency">reset_hourly_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetMonths">reset_months</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetWeekDayOfMonth">reset_week_day_of_month</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_backup_window` <a name="put_backup_window" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.putBackupWindow"></a>

```python
def put_backup_window(
  start_hour_of_day: typing.Union[int, float],
  end_hour_of_day: typing.Union[int, float] = None
) -> None
```

###### `start_hour_of_day`<sup>Required</sup> <a name="start_hour_of_day" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.putBackupWindow.parameter.startHourOfDay"></a>

- *Type:* typing.Union[int, float]

The hour of the day (0-23) when the window starts, for example, if the value of the start hour of the day is 6, that means the backup window starts at 6:00.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#start_hour_of_day BackupDrBackupPlan#start_hour_of_day}

---

###### `end_hour_of_day`<sup>Optional</sup> <a name="end_hour_of_day" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.putBackupWindow.parameter.endHourOfDay"></a>

- *Type:* typing.Union[int, float]

The hour of the day (1-24) when the window ends, for example, if the value of end hour of the day is 10, that means the backup window end time is 10:00.

The end hour of the day should be greater than the start

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#end_hour_of_day BackupDrBackupPlan#end_hour_of_day}

---

##### `put_week_day_of_month` <a name="put_week_day_of_month" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.putWeekDayOfMonth"></a>

```python
def put_week_day_of_month(
  day_of_week: str,
  week_of_month: str
) -> None
```

###### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.putWeekDayOfMonth.parameter.dayOfWeek"></a>

- *Type:* str

Specifies the day of the week. Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#day_of_week BackupDrBackupPlan#day_of_week}

---

###### `week_of_month`<sup>Required</sup> <a name="week_of_month" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.putWeekDayOfMonth.parameter.weekOfMonth"></a>

- *Type:* str

WeekOfMonth enumerates possible weeks in the month, e.g. the first, third, or last week of the month. Possible values: ["WEEK_OF_MONTH_UNSPECIFIED", "FIRST", "SECOND", "THIRD", "FOURTH", "LAST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/backup_dr_backup_plan#week_of_month BackupDrBackupPlan#week_of_month}

---

##### `reset_backup_window` <a name="reset_backup_window" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetBackupWindow"></a>

```python
def reset_backup_window() -> None
```

##### `reset_days_of_month` <a name="reset_days_of_month" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetDaysOfMonth"></a>

```python
def reset_days_of_month() -> None
```

##### `reset_days_of_week` <a name="reset_days_of_week" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetDaysOfWeek"></a>

```python
def reset_days_of_week() -> None
```

##### `reset_hourly_frequency` <a name="reset_hourly_frequency" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetHourlyFrequency"></a>

```python
def reset_hourly_frequency() -> None
```

##### `reset_months` <a name="reset_months" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetMonths"></a>

```python
def reset_months() -> None
```

##### `reset_week_day_of_month` <a name="reset_week_day_of_month" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetWeekDayOfMonth"></a>

```python
def reset_week_day_of_month() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.backupWindow">backup_window</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference">BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.weekDayOfMonth">week_day_of_month</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference">BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.backupWindowInput">backup_window_input</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow">BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfMonthInput">days_of_month_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfWeekInput">days_of_week_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.hourlyFrequencyInput">hourly_frequency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.monthsInput">months_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.recurrenceTypeInput">recurrence_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.weekDayOfMonthInput">week_day_of_month_input</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth">BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfMonth">days_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.hourlyFrequency">hourly_frequency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.months">months</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.recurrenceType">recurrence_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule">BackupDrBackupPlanBackupRulesStandardSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_window`<sup>Required</sup> <a name="backup_window" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.backupWindow"></a>

```python
backup_window: BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference">BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference</a>

---

##### `week_day_of_month`<sup>Required</sup> <a name="week_day_of_month" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.weekDayOfMonth"></a>

```python
week_day_of_month: BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference">BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference</a>

---

##### `backup_window_input`<sup>Optional</sup> <a name="backup_window_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.backupWindowInput"></a>

```python
backup_window_input: BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow">BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow</a>

---

##### `days_of_month_input`<sup>Optional</sup> <a name="days_of_month_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfMonthInput"></a>

```python
days_of_month_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `days_of_week_input`<sup>Optional</sup> <a name="days_of_week_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfWeekInput"></a>

```python
days_of_week_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hourly_frequency_input`<sup>Optional</sup> <a name="hourly_frequency_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.hourlyFrequencyInput"></a>

```python
hourly_frequency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `months_input`<sup>Optional</sup> <a name="months_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.monthsInput"></a>

```python
months_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `recurrence_type_input`<sup>Optional</sup> <a name="recurrence_type_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.recurrenceTypeInput"></a>

```python
recurrence_type_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `week_day_of_month_input`<sup>Optional</sup> <a name="week_day_of_month_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.weekDayOfMonthInput"></a>

```python
week_day_of_month_input: BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth">BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth</a>

---

##### `days_of_month`<sup>Required</sup> <a name="days_of_month" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfMonth"></a>

```python
days_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hourly_frequency`<sup>Required</sup> <a name="hourly_frequency" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.hourlyFrequency"></a>

```python
hourly_frequency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.months"></a>

```python
months: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `recurrence_type`<sup>Required</sup> <a name="recurrence_type" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.recurrenceType"></a>

```python
recurrence_type: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.internalValue"></a>

```python
internal_value: BackupDrBackupPlanBackupRulesStandardSchedule
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule">BackupDrBackupPlanBackupRulesStandardSchedule</a>

---


### BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference <a name="BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan

backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.weekOfMonthInput">week_of_month_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.weekOfMonth">week_of_month</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth">BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: str
```

- *Type:* str

---

##### `week_of_month_input`<sup>Optional</sup> <a name="week_of_month_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.weekOfMonthInput"></a>

```python
week_of_month_input: str
```

- *Type:* str

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `week_of_month`<sup>Required</sup> <a name="week_of_month" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.weekOfMonth"></a>

```python
week_of_month: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.internalValue"></a>

```python
internal_value: BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth">BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth</a>

---


### BackupDrBackupPlanTimeoutsOutputReference <a name="BackupDrBackupPlanTimeoutsOutputReference" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan

backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts">BackupDrBackupPlanTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BackupDrBackupPlanTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts">BackupDrBackupPlanTimeouts</a>]

---



