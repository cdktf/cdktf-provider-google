# `backupDrBackupPlanAssociation` Submodule <a name="`backupDrBackupPlanAssociation` Submodule" id="@cdktf/provider-google.backupDrBackupPlanAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupDrBackupPlanAssociation <a name="BackupDrBackupPlanAssociation" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association google_backup_dr_backup_plan_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan_association

backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation(
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
  backup_plan_association_id: str,
  location: str,
  resource: str,
  resource_type: str,
  id: str = None,
  project: str = None,
  timeouts: BackupDrBackupPlanAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.backupPlan">backup_plan</a></code> | <code>str</code> | The BP with which resource needs to be created Note: - A Backup Plan configured for 'compute.googleapis.com/Instance', can only protect instance type resources. - A Backup Plan configured for 'compute.googleapis.com/Disk' can be used to protect both standard Disks and Regional Disks resources. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.backupPlanAssociationId">backup_plan_association_id</a></code> | <code>str</code> | The id of backupplan association. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the backupplan association. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.resource">resource</a></code> | <code>str</code> | The resource for which BPA needs to be created. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | The resource type of workload on which backupplan is applied. Examples include, "compute.googleapis.com/Instance", "compute.googleapis.com/Disk", and "compute.googleapis.com/RegionDisk". |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#id BackupDrBackupPlanAssociation#id}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#project BackupDrBackupPlanAssociation#project}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_plan`<sup>Required</sup> <a name="backup_plan" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.backupPlan"></a>

- *Type:* str

The BP with which resource needs to be created Note: - A Backup Plan configured for 'compute.googleapis.com/Instance', can only protect instance type resources. - A Backup Plan configured for 'compute.googleapis.com/Disk' can be used to protect both standard Disks and Regional Disks resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#backup_plan BackupDrBackupPlanAssociation#backup_plan}

---

##### `backup_plan_association_id`<sup>Required</sup> <a name="backup_plan_association_id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.backupPlanAssociationId"></a>

- *Type:* str

The id of backupplan association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#backup_plan_association_id BackupDrBackupPlanAssociation#backup_plan_association_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.location"></a>

- *Type:* str

The location for the backupplan association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#location BackupDrBackupPlanAssociation#location}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.resource"></a>

- *Type:* str

The resource for which BPA needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#resource BackupDrBackupPlanAssociation#resource}

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.resourceType"></a>

- *Type:* str

The resource type of workload on which backupplan is applied. Examples include, "compute.googleapis.com/Instance", "compute.googleapis.com/Disk", and "compute.googleapis.com/RegionDisk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#resource_type BackupDrBackupPlanAssociation#resource_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#id BackupDrBackupPlanAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#project BackupDrBackupPlanAssociation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#timeouts BackupDrBackupPlanAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#create BackupDrBackupPlanAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#delete BackupDrBackupPlanAssociation#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#update BackupDrBackupPlanAssociation#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BackupDrBackupPlanAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan_association

backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan_association

backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan_association

backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan_association

backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BackupDrBackupPlanAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BackupDrBackupPlanAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BackupDrBackupPlanAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BackupDrBackupPlanAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.dataSource">data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.lastSuccessfulBackupConsistencyTime">last_successful_backup_consistency_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.rulesConfigInfo">rules_config_info</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList">BackupDrBackupPlanAssociationRulesConfigInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference">BackupDrBackupPlanAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlanAssociationIdInput">backup_plan_association_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlanInput">backup_plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlan">backup_plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlanAssociationId">backup_plan_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

---

##### `last_successful_backup_consistency_time`<sup>Required</sup> <a name="last_successful_backup_consistency_time" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.lastSuccessfulBackupConsistencyTime"></a>

```python
last_successful_backup_consistency_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rules_config_info`<sup>Required</sup> <a name="rules_config_info" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.rulesConfigInfo"></a>

```python
rules_config_info: BackupDrBackupPlanAssociationRulesConfigInfoList
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList">BackupDrBackupPlanAssociationRulesConfigInfoList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.timeouts"></a>

```python
timeouts: BackupDrBackupPlanAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference">BackupDrBackupPlanAssociationTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `backup_plan_association_id_input`<sup>Optional</sup> <a name="backup_plan_association_id_input" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlanAssociationIdInput"></a>

```python
backup_plan_association_id_input: str
```

- *Type:* str

---

##### `backup_plan_input`<sup>Optional</sup> <a name="backup_plan_input" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlanInput"></a>

```python
backup_plan_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BackupDrBackupPlanAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a>]

---

##### `backup_plan`<sup>Required</sup> <a name="backup_plan" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlan"></a>

```python
backup_plan: str
```

- *Type:* str

---

##### `backup_plan_association_id`<sup>Required</sup> <a name="backup_plan_association_id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlanAssociationId"></a>

```python
backup_plan_association_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BackupDrBackupPlanAssociationConfig <a name="BackupDrBackupPlanAssociationConfig" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan_association

backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_plan: str,
  backup_plan_association_id: str,
  location: str,
  resource: str,
  resource_type: str,
  id: str = None,
  project: str = None,
  timeouts: BackupDrBackupPlanAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.backupPlan">backup_plan</a></code> | <code>str</code> | The BP with which resource needs to be created Note: - A Backup Plan configured for 'compute.googleapis.com/Instance', can only protect instance type resources. - A Backup Plan configured for 'compute.googleapis.com/Disk' can be used to protect both standard Disks and Regional Disks resources. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.backupPlanAssociationId">backup_plan_association_id</a></code> | <code>str</code> | The id of backupplan association. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.location">location</a></code> | <code>str</code> | The location for the backupplan association. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.resource">resource</a></code> | <code>str</code> | The resource for which BPA needs to be created. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.resourceType">resource_type</a></code> | <code>str</code> | The resource type of workload on which backupplan is applied. Examples include, "compute.googleapis.com/Instance", "compute.googleapis.com/Disk", and "compute.googleapis.com/RegionDisk". |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#id BackupDrBackupPlanAssociation#id}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#project BackupDrBackupPlanAssociation#project}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_plan`<sup>Required</sup> <a name="backup_plan" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.backupPlan"></a>

```python
backup_plan: str
```

- *Type:* str

The BP with which resource needs to be created Note: - A Backup Plan configured for 'compute.googleapis.com/Instance', can only protect instance type resources. - A Backup Plan configured for 'compute.googleapis.com/Disk' can be used to protect both standard Disks and Regional Disks resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#backup_plan BackupDrBackupPlanAssociation#backup_plan}

---

##### `backup_plan_association_id`<sup>Required</sup> <a name="backup_plan_association_id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.backupPlanAssociationId"></a>

```python
backup_plan_association_id: str
```

- *Type:* str

The id of backupplan association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#backup_plan_association_id BackupDrBackupPlanAssociation#backup_plan_association_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the backupplan association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#location BackupDrBackupPlanAssociation#location}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.resource"></a>

```python
resource: str
```

- *Type:* str

The resource for which BPA needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#resource BackupDrBackupPlanAssociation#resource}

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

The resource type of workload on which backupplan is applied. Examples include, "compute.googleapis.com/Instance", "compute.googleapis.com/Disk", and "compute.googleapis.com/RegionDisk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#resource_type BackupDrBackupPlanAssociation#resource_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#id BackupDrBackupPlanAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#project BackupDrBackupPlanAssociation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.timeouts"></a>

```python
timeouts: BackupDrBackupPlanAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#timeouts BackupDrBackupPlanAssociation#timeouts}

---

### BackupDrBackupPlanAssociationRulesConfigInfo <a name="BackupDrBackupPlanAssociationRulesConfigInfo" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan_association

backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfo()
```


### BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError <a name="BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan_association

backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError()
```


### BackupDrBackupPlanAssociationTimeouts <a name="BackupDrBackupPlanAssociationTimeouts" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan_association

backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#create BackupDrBackupPlanAssociation#create}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#delete BackupDrBackupPlanAssociation#delete}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#update BackupDrBackupPlanAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#create BackupDrBackupPlanAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#delete BackupDrBackupPlanAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/backup_dr_backup_plan_association#update BackupDrBackupPlanAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList <a name="BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan_association

backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference <a name="BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan_association

backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError">BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.internalValue"></a>

```python
internal_value: BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError">BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError</a>

---


### BackupDrBackupPlanAssociationRulesConfigInfoList <a name="BackupDrBackupPlanAssociationRulesConfigInfoList" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan_association

backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupDrBackupPlanAssociationRulesConfigInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BackupDrBackupPlanAssociationRulesConfigInfoOutputReference <a name="BackupDrBackupPlanAssociationRulesConfigInfoOutputReference" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan_association

backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupError">last_backup_error</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList">BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupState">last_backup_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfo">BackupDrBackupPlanAssociationRulesConfigInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_backup_error`<sup>Required</sup> <a name="last_backup_error" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupError"></a>

```python
last_backup_error: BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList">BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList</a>

---

##### `last_backup_state`<sup>Required</sup> <a name="last_backup_state" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupState"></a>

```python
last_backup_state: str
```

- *Type:* str

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.internalValue"></a>

```python
internal_value: BackupDrBackupPlanAssociationRulesConfigInfo
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfo">BackupDrBackupPlanAssociationRulesConfigInfo</a>

---


### BackupDrBackupPlanAssociationTimeoutsOutputReference <a name="BackupDrBackupPlanAssociationTimeoutsOutputReference" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_plan_association

backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BackupDrBackupPlanAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a>]

---



