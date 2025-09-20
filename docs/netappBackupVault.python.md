# `netappBackupVault` Submodule <a name="`netappBackupVault` Submodule" id="@cdktf/provider-google.netappBackupVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappBackupVault <a name="NetappBackupVault" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault google_netapp_backup_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_backup_vault

netappBackupVault.NetappBackupVault(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  backup_region: str = None,
  backup_retention_policy: NetappBackupVaultBackupRetentionPolicy = None,
  backup_vault_type: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: NetappBackupVaultTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.location">location</a></code> | <code>str</code> | Location (region) of the backup vault. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the backup vault. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.backupRegion">backup_region</a></code> | <code>str</code> | Region in which backup is stored. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.backupRetentionPolicy">backup_retention_policy</a></code> | <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy">NetappBackupVaultBackupRetentionPolicy</a></code> | backup_retention_policy block. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.backupVaultType">backup_vault_type</a></code> | <code>str</code> | Type of the backup vault to be created. Default is IN_REGION. Possible values: ["BACKUP_VAULT_TYPE_UNSPECIFIED", "IN_REGION", "CROSS_REGION"]. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#id NetappBackupVault#id}. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#project NetappBackupVault#project}. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts">NetappBackupVaultTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.location"></a>

- *Type:* str

Location (region) of the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#location NetappBackupVault#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the backup vault. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#name NetappBackupVault#name}

---

##### `backup_region`<sup>Optional</sup> <a name="backup_region" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.backupRegion"></a>

- *Type:* str

Region in which backup is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#backup_region NetappBackupVault#backup_region}

---

##### `backup_retention_policy`<sup>Optional</sup> <a name="backup_retention_policy" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.backupRetentionPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy">NetappBackupVaultBackupRetentionPolicy</a>

backup_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#backup_retention_policy NetappBackupVault#backup_retention_policy}

---

##### `backup_vault_type`<sup>Optional</sup> <a name="backup_vault_type" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.backupVaultType"></a>

- *Type:* str

Type of the backup vault to be created. Default is IN_REGION. Possible values: ["BACKUP_VAULT_TYPE_UNSPECIFIED", "IN_REGION", "CROSS_REGION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#backup_vault_type NetappBackupVault#backup_vault_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#description NetappBackupVault#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#id NetappBackupVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#labels NetappBackupVault#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#project NetappBackupVault#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts">NetappBackupVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#timeouts NetappBackupVault#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.putBackupRetentionPolicy">put_backup_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetBackupRegion">reset_backup_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetBackupRetentionPolicy">reset_backup_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetBackupVaultType">reset_backup_vault_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backup_retention_policy` <a name="put_backup_retention_policy" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.putBackupRetentionPolicy"></a>

```python
def put_backup_retention_policy(
  backup_minimum_enforced_retention_days: typing.Union[int, float],
  daily_backup_immutable: typing.Union[bool, IResolvable] = None,
  manual_backup_immutable: typing.Union[bool, IResolvable] = None,
  monthly_backup_immutable: typing.Union[bool, IResolvable] = None,
  weekly_backup_immutable: typing.Union[bool, IResolvable] = None
) -> None
```

###### `backup_minimum_enforced_retention_days`<sup>Required</sup> <a name="backup_minimum_enforced_retention_days" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.putBackupRetentionPolicy.parameter.backupMinimumEnforcedRetentionDays"></a>

- *Type:* typing.Union[int, float]

Minimum retention duration in days for backups in the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#backup_minimum_enforced_retention_days NetappBackupVault#backup_minimum_enforced_retention_days}

---

###### `daily_backup_immutable`<sup>Optional</sup> <a name="daily_backup_immutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.putBackupRetentionPolicy.parameter.dailyBackupImmutable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the daily backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#daily_backup_immutable NetappBackupVault#daily_backup_immutable}

---

###### `manual_backup_immutable`<sup>Optional</sup> <a name="manual_backup_immutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.putBackupRetentionPolicy.parameter.manualBackupImmutable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the manual backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#manual_backup_immutable NetappBackupVault#manual_backup_immutable}

---

###### `monthly_backup_immutable`<sup>Optional</sup> <a name="monthly_backup_immutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.putBackupRetentionPolicy.parameter.monthlyBackupImmutable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the monthly backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#monthly_backup_immutable NetappBackupVault#monthly_backup_immutable}

---

###### `weekly_backup_immutable`<sup>Optional</sup> <a name="weekly_backup_immutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.putBackupRetentionPolicy.parameter.weeklyBackupImmutable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the weekly backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#weekly_backup_immutable NetappBackupVault#weekly_backup_immutable}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#create NetappBackupVault#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#delete NetappBackupVault#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#update NetappBackupVault#update}.

---

##### `reset_backup_region` <a name="reset_backup_region" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetBackupRegion"></a>

```python
def reset_backup_region() -> None
```

##### `reset_backup_retention_policy` <a name="reset_backup_retention_policy" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetBackupRetentionPolicy"></a>

```python
def reset_backup_retention_policy() -> None
```

##### `reset_backup_vault_type` <a name="reset_backup_vault_type" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetBackupVaultType"></a>

```python
def reset_backup_vault_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetappBackupVault resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import netapp_backup_vault

netappBackupVault.NetappBackupVault.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import netapp_backup_vault

netappBackupVault.NetappBackupVault.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import netapp_backup_vault

netappBackupVault.NetappBackupVault.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import netapp_backup_vault

netappBackupVault.NetappBackupVault.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetappBackupVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetappBackupVault to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetappBackupVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetappBackupVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.backupRetentionPolicy">backup_retention_policy</a></code> | <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference">NetappBackupVaultBackupRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.destinationBackupVault">destination_backup_vault</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.sourceBackupVault">source_backup_vault</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.sourceRegion">source_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference">NetappBackupVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.backupRegionInput">backup_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.backupRetentionPolicyInput">backup_retention_policy_input</a></code> | <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy">NetappBackupVaultBackupRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.backupVaultTypeInput">backup_vault_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts">NetappBackupVaultTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.backupRegion">backup_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.backupVaultType">backup_vault_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_retention_policy`<sup>Required</sup> <a name="backup_retention_policy" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.backupRetentionPolicy"></a>

```python
backup_retention_policy: NetappBackupVaultBackupRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference">NetappBackupVaultBackupRetentionPolicyOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `destination_backup_vault`<sup>Required</sup> <a name="destination_backup_vault" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.destinationBackupVault"></a>

```python
destination_backup_vault: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `source_backup_vault`<sup>Required</sup> <a name="source_backup_vault" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.sourceBackupVault"></a>

```python
source_backup_vault: str
```

- *Type:* str

---

##### `source_region`<sup>Required</sup> <a name="source_region" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.sourceRegion"></a>

```python
source_region: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.timeouts"></a>

```python
timeouts: NetappBackupVaultTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference">NetappBackupVaultTimeoutsOutputReference</a>

---

##### `backup_region_input`<sup>Optional</sup> <a name="backup_region_input" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.backupRegionInput"></a>

```python
backup_region_input: str
```

- *Type:* str

---

##### `backup_retention_policy_input`<sup>Optional</sup> <a name="backup_retention_policy_input" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.backupRetentionPolicyInput"></a>

```python
backup_retention_policy_input: NetappBackupVaultBackupRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy">NetappBackupVaultBackupRetentionPolicy</a>

---

##### `backup_vault_type_input`<sup>Optional</sup> <a name="backup_vault_type_input" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.backupVaultTypeInput"></a>

```python
backup_vault_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetappBackupVaultTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts">NetappBackupVaultTimeouts</a>]

---

##### `backup_region`<sup>Required</sup> <a name="backup_region" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.backupRegion"></a>

```python
backup_region: str
```

- *Type:* str

---

##### `backup_vault_type`<sup>Required</sup> <a name="backup_vault_type" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.backupVaultType"></a>

```python
backup_vault_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.netappBackupVault.NetappBackupVault.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetappBackupVaultBackupRetentionPolicy <a name="NetappBackupVaultBackupRetentionPolicy" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_backup_vault

netappBackupVault.NetappBackupVaultBackupRetentionPolicy(
  backup_minimum_enforced_retention_days: typing.Union[int, float],
  daily_backup_immutable: typing.Union[bool, IResolvable] = None,
  manual_backup_immutable: typing.Union[bool, IResolvable] = None,
  monthly_backup_immutable: typing.Union[bool, IResolvable] = None,
  weekly_backup_immutable: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy.property.backupMinimumEnforcedRetentionDays">backup_minimum_enforced_retention_days</a></code> | <code>typing.Union[int, float]</code> | Minimum retention duration in days for backups in the backup vault. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy.property.dailyBackupImmutable">daily_backup_immutable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the daily backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy.property.manualBackupImmutable">manual_backup_immutable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the manual backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy.property.monthlyBackupImmutable">monthly_backup_immutable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the monthly backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy.property.weeklyBackupImmutable">weekly_backup_immutable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the weekly backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true. |

---

##### `backup_minimum_enforced_retention_days`<sup>Required</sup> <a name="backup_minimum_enforced_retention_days" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy.property.backupMinimumEnforcedRetentionDays"></a>

```python
backup_minimum_enforced_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum retention duration in days for backups in the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#backup_minimum_enforced_retention_days NetappBackupVault#backup_minimum_enforced_retention_days}

---

##### `daily_backup_immutable`<sup>Optional</sup> <a name="daily_backup_immutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy.property.dailyBackupImmutable"></a>

```python
daily_backup_immutable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the daily backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#daily_backup_immutable NetappBackupVault#daily_backup_immutable}

---

##### `manual_backup_immutable`<sup>Optional</sup> <a name="manual_backup_immutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy.property.manualBackupImmutable"></a>

```python
manual_backup_immutable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the manual backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#manual_backup_immutable NetappBackupVault#manual_backup_immutable}

---

##### `monthly_backup_immutable`<sup>Optional</sup> <a name="monthly_backup_immutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy.property.monthlyBackupImmutable"></a>

```python
monthly_backup_immutable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the monthly backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#monthly_backup_immutable NetappBackupVault#monthly_backup_immutable}

---

##### `weekly_backup_immutable`<sup>Optional</sup> <a name="weekly_backup_immutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy.property.weeklyBackupImmutable"></a>

```python
weekly_backup_immutable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the weekly backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#weekly_backup_immutable NetappBackupVault#weekly_backup_immutable}

---

### NetappBackupVaultConfig <a name="NetappBackupVaultConfig" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_backup_vault

netappBackupVault.NetappBackupVaultConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  backup_region: str = None,
  backup_retention_policy: NetappBackupVaultBackupRetentionPolicy = None,
  backup_vault_type: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: NetappBackupVaultTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.location">location</a></code> | <code>str</code> | Location (region) of the backup vault. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.name">name</a></code> | <code>str</code> | The resource name of the backup vault. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.backupRegion">backup_region</a></code> | <code>str</code> | Region in which backup is stored. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.backupRetentionPolicy">backup_retention_policy</a></code> | <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy">NetappBackupVaultBackupRetentionPolicy</a></code> | backup_retention_policy block. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.backupVaultType">backup_vault_type</a></code> | <code>str</code> | Type of the backup vault to be created. Default is IN_REGION. Possible values: ["BACKUP_VAULT_TYPE_UNSPECIFIED", "IN_REGION", "CROSS_REGION"]. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#id NetappBackupVault#id}. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#project NetappBackupVault#project}. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts">NetappBackupVaultTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location (region) of the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#location NetappBackupVault#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the backup vault. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#name NetappBackupVault#name}

---

##### `backup_region`<sup>Optional</sup> <a name="backup_region" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.backupRegion"></a>

```python
backup_region: str
```

- *Type:* str

Region in which backup is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#backup_region NetappBackupVault#backup_region}

---

##### `backup_retention_policy`<sup>Optional</sup> <a name="backup_retention_policy" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.backupRetentionPolicy"></a>

```python
backup_retention_policy: NetappBackupVaultBackupRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy">NetappBackupVaultBackupRetentionPolicy</a>

backup_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#backup_retention_policy NetappBackupVault#backup_retention_policy}

---

##### `backup_vault_type`<sup>Optional</sup> <a name="backup_vault_type" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.backupVaultType"></a>

```python
backup_vault_type: str
```

- *Type:* str

Type of the backup vault to be created. Default is IN_REGION. Possible values: ["BACKUP_VAULT_TYPE_UNSPECIFIED", "IN_REGION", "CROSS_REGION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#backup_vault_type NetappBackupVault#backup_vault_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#description NetappBackupVault#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#id NetappBackupVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#labels NetappBackupVault#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#project NetappBackupVault#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultConfig.property.timeouts"></a>

```python
timeouts: NetappBackupVaultTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts">NetappBackupVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#timeouts NetappBackupVault#timeouts}

---

### NetappBackupVaultTimeouts <a name="NetappBackupVaultTimeouts" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_backup_vault

netappBackupVault.NetappBackupVaultTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#create NetappBackupVault#create}. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#delete NetappBackupVault#delete}. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#update NetappBackupVault#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#create NetappBackupVault#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#delete NetappBackupVault#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#update NetappBackupVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappBackupVaultBackupRetentionPolicyOutputReference <a name="NetappBackupVaultBackupRetentionPolicyOutputReference" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_backup_vault

netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.resetDailyBackupImmutable">reset_daily_backup_immutable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.resetManualBackupImmutable">reset_manual_backup_immutable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.resetMonthlyBackupImmutable">reset_monthly_backup_immutable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.resetWeeklyBackupImmutable">reset_weekly_backup_immutable</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_daily_backup_immutable` <a name="reset_daily_backup_immutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.resetDailyBackupImmutable"></a>

```python
def reset_daily_backup_immutable() -> None
```

##### `reset_manual_backup_immutable` <a name="reset_manual_backup_immutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.resetManualBackupImmutable"></a>

```python
def reset_manual_backup_immutable() -> None
```

##### `reset_monthly_backup_immutable` <a name="reset_monthly_backup_immutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.resetMonthlyBackupImmutable"></a>

```python
def reset_monthly_backup_immutable() -> None
```

##### `reset_weekly_backup_immutable` <a name="reset_weekly_backup_immutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.resetWeeklyBackupImmutable"></a>

```python
def reset_weekly_backup_immutable() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.backupMinimumEnforcedRetentionDaysInput">backup_minimum_enforced_retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.dailyBackupImmutableInput">daily_backup_immutable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.manualBackupImmutableInput">manual_backup_immutable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.monthlyBackupImmutableInput">monthly_backup_immutable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.weeklyBackupImmutableInput">weekly_backup_immutable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.backupMinimumEnforcedRetentionDays">backup_minimum_enforced_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.dailyBackupImmutable">daily_backup_immutable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.manualBackupImmutable">manual_backup_immutable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.monthlyBackupImmutable">monthly_backup_immutable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.weeklyBackupImmutable">weekly_backup_immutable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy">NetappBackupVaultBackupRetentionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_minimum_enforced_retention_days_input`<sup>Optional</sup> <a name="backup_minimum_enforced_retention_days_input" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.backupMinimumEnforcedRetentionDaysInput"></a>

```python
backup_minimum_enforced_retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `daily_backup_immutable_input`<sup>Optional</sup> <a name="daily_backup_immutable_input" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.dailyBackupImmutableInput"></a>

```python
daily_backup_immutable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manual_backup_immutable_input`<sup>Optional</sup> <a name="manual_backup_immutable_input" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.manualBackupImmutableInput"></a>

```python
manual_backup_immutable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `monthly_backup_immutable_input`<sup>Optional</sup> <a name="monthly_backup_immutable_input" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.monthlyBackupImmutableInput"></a>

```python
monthly_backup_immutable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `weekly_backup_immutable_input`<sup>Optional</sup> <a name="weekly_backup_immutable_input" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.weeklyBackupImmutableInput"></a>

```python
weekly_backup_immutable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backup_minimum_enforced_retention_days`<sup>Required</sup> <a name="backup_minimum_enforced_retention_days" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.backupMinimumEnforcedRetentionDays"></a>

```python
backup_minimum_enforced_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `daily_backup_immutable`<sup>Required</sup> <a name="daily_backup_immutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.dailyBackupImmutable"></a>

```python
daily_backup_immutable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manual_backup_immutable`<sup>Required</sup> <a name="manual_backup_immutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.manualBackupImmutable"></a>

```python
manual_backup_immutable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `monthly_backup_immutable`<sup>Required</sup> <a name="monthly_backup_immutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.monthlyBackupImmutable"></a>

```python
monthly_backup_immutable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `weekly_backup_immutable`<sup>Required</sup> <a name="weekly_backup_immutable" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.weeklyBackupImmutable"></a>

```python
weekly_backup_immutable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: NetappBackupVaultBackupRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultBackupRetentionPolicy">NetappBackupVaultBackupRetentionPolicy</a>

---


### NetappBackupVaultTimeoutsOutputReference <a name="NetappBackupVaultTimeoutsOutputReference" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_backup_vault

netappBackupVault.NetappBackupVaultTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts">NetappBackupVaultTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetappBackupVaultTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappBackupVault.NetappBackupVaultTimeouts">NetappBackupVaultTimeouts</a>]

---



