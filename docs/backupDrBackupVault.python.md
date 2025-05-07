# `backupDrBackupVault` Submodule <a name="`backupDrBackupVault` Submodule" id="@cdktf/provider-google.backupDrBackupVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupDrBackupVault <a name="BackupDrBackupVault" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault google_backup_dr_backup_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_vault

backupDrBackupVault.BackupDrBackupVault(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_minimum_enforced_retention_duration: str,
  backup_vault_id: str,
  location: str,
  access_restriction: str = None,
  allow_missing: typing.Union[bool, IResolvable] = None,
  annotations: typing.Mapping[str] = None,
  description: str = None,
  effective_time: str = None,
  force_delete: typing.Union[bool, IResolvable] = None,
  force_update: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ignore_backup_plan_references: typing.Union[bool, IResolvable] = None,
  ignore_inactive_datasources: typing.Union[bool, IResolvable] = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: BackupDrBackupVaultTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.backupMinimumEnforcedRetentionDuration">backup_minimum_enforced_retention_duration</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.backupVaultId">backup_vault_id</a></code> | <code>str</code> | Required. ID of the requesting object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.location">location</a></code> | <code>str</code> | The GCP location for the backup vault. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.accessRestriction">access_restriction</a></code> | <code>str</code> | Access restriction for the backup vault. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.allowMissing">allow_missing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow idempotent deletion of backup vault. The request will still succeed in case the backup vault does not exist. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. User annotations. See https://google.aip.dev/128#annotations Stores small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional. The description of the BackupVault instance (2048 characters or less). |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.effectiveTime">effective_time</a></code> | <code>str</code> | Optional. Time after which the BackupVault resource is locked. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.forceUpdate">force_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, allow update to extend the minimum enforced retention for backup vault. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#id BackupDrBackupVault#id}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.ignoreBackupPlanReferences">ignore_backup_plan_references</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance that is being referenced by an active backup plan. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.ignoreInactiveDatasources">ignore_inactive_datasources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#project BackupDrBackupVault#project}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_minimum_enforced_retention_duration`<sup>Required</sup> <a name="backup_minimum_enforced_retention_duration" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.backupMinimumEnforcedRetentionDuration"></a>

- *Type:* str

Required.

The default and minimum enforced retention for each backup within the backup vault. The enforced retention for each backup can be extended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#backup_minimum_enforced_retention_duration BackupDrBackupVault#backup_minimum_enforced_retention_duration}

---

##### `backup_vault_id`<sup>Required</sup> <a name="backup_vault_id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.backupVaultId"></a>

- *Type:* str

Required. ID of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#backup_vault_id BackupDrBackupVault#backup_vault_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.location"></a>

- *Type:* str

The GCP location for the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#location BackupDrBackupVault#location}

---

##### `access_restriction`<sup>Optional</sup> <a name="access_restriction" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.accessRestriction"></a>

- *Type:* str

Access restriction for the backup vault.

Default value is 'WITHIN_ORGANIZATION' if not provided during creation. Default value: "WITHIN_ORGANIZATION" Possible values: ["ACCESS_RESTRICTION_UNSPECIFIED", "WITHIN_PROJECT", "WITHIN_ORGANIZATION", "UNRESTRICTED", "WITHIN_ORG_BUT_UNRESTRICTED_FOR_BA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#access_restriction BackupDrBackupVault#access_restriction}

---

##### `allow_missing`<sup>Optional</sup> <a name="allow_missing" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.allowMissing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow idempotent deletion of backup vault. The request will still succeed in case the backup vault does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#allow_missing BackupDrBackupVault#allow_missing}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Optional. User annotations. See https://google.aip.dev/128#annotations Stores small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#annotations BackupDrBackupVault#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.description"></a>

- *Type:* str

Optional. The description of the BackupVault instance (2048 characters or less).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#description BackupDrBackupVault#description}

---

##### `effective_time`<sup>Optional</sup> <a name="effective_time" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.effectiveTime"></a>

- *Type:* str

Optional. Time after which the BackupVault resource is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#effective_time BackupDrBackupVault#effective_time}

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.forceDelete"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources.

* deletion of a backup vault instance that is being referenced by an active backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#force_delete BackupDrBackupVault#force_delete}

---

##### `force_update`<sup>Optional</sup> <a name="force_update" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.forceUpdate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, allow update to extend the minimum enforced retention for backup vault.

This overrides
the restriction against conflicting retention periods. This conflict may occur when the
expiration schedule defined by the associated backup plan is shorter than the minimum
retention set by the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#force_update BackupDrBackupVault#force_update}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#id BackupDrBackupVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_backup_plan_references`<sup>Optional</sup> <a name="ignore_backup_plan_references" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.ignoreBackupPlanReferences"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance that is being referenced by an active backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#ignore_backup_plan_references BackupDrBackupVault#ignore_backup_plan_references}

---

##### `ignore_inactive_datasources`<sup>Optional</sup> <a name="ignore_inactive_datasources" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.ignoreInactiveDatasources"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#ignore_inactive_datasources BackupDrBackupVault#ignore_inactive_datasources}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#labels BackupDrBackupVault#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#project BackupDrBackupVault#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#timeouts BackupDrBackupVault#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAccessRestriction">reset_access_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAllowMissing">reset_allow_missing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetEffectiveTime">reset_effective_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetForceDelete">reset_force_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetForceUpdate">reset_force_update</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetIgnoreBackupPlanReferences">reset_ignore_backup_plan_references</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetIgnoreInactiveDatasources">reset_ignore_inactive_datasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#create BackupDrBackupVault#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#delete BackupDrBackupVault#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#update BackupDrBackupVault#update}.

---

##### `reset_access_restriction` <a name="reset_access_restriction" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAccessRestriction"></a>

```python
def reset_access_restriction() -> None
```

##### `reset_allow_missing` <a name="reset_allow_missing" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAllowMissing"></a>

```python
def reset_allow_missing() -> None
```

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_effective_time` <a name="reset_effective_time" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetEffectiveTime"></a>

```python
def reset_effective_time() -> None
```

##### `reset_force_delete` <a name="reset_force_delete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetForceDelete"></a>

```python
def reset_force_delete() -> None
```

##### `reset_force_update` <a name="reset_force_update" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetForceUpdate"></a>

```python
def reset_force_update() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_backup_plan_references` <a name="reset_ignore_backup_plan_references" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetIgnoreBackupPlanReferences"></a>

```python
def reset_ignore_backup_plan_references() -> None
```

##### `reset_ignore_inactive_datasources` <a name="reset_ignore_inactive_datasources" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetIgnoreInactiveDatasources"></a>

```python
def reset_ignore_inactive_datasources() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BackupDrBackupVault resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_vault

backupDrBackupVault.BackupDrBackupVault.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_vault

backupDrBackupVault.BackupDrBackupVault.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_vault

backupDrBackupVault.BackupDrBackupVault.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_vault

backupDrBackupVault.BackupDrBackupVault.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BackupDrBackupVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BackupDrBackupVault to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BackupDrBackupVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BackupDrBackupVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupCount">backup_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.deletable">deletable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference">BackupDrBackupVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.totalStoredBytes">total_stored_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.accessRestrictionInput">access_restriction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.allowMissingInput">allow_missing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupMinimumEnforcedRetentionDurationInput">backup_minimum_enforced_retention_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupVaultIdInput">backup_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveTimeInput">effective_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceDeleteInput">force_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceUpdateInput">force_update_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreBackupPlanReferencesInput">ignore_backup_plan_references_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreInactiveDatasourcesInput">ignore_inactive_datasources_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.accessRestriction">access_restriction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.allowMissing">allow_missing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupMinimumEnforcedRetentionDuration">backup_minimum_enforced_retention_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupVaultId">backup_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveTime">effective_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceUpdate">force_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreBackupPlanReferences">ignore_backup_plan_references</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreInactiveDatasources">ignore_inactive_datasources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_count`<sup>Required</sup> <a name="backup_count" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupCount"></a>

```python
backup_count: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `deletable`<sup>Required</sup> <a name="deletable" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.deletable"></a>

```python
deletable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.timeouts"></a>

```python
timeouts: BackupDrBackupVaultTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference">BackupDrBackupVaultTimeoutsOutputReference</a>

---

##### `total_stored_bytes`<sup>Required</sup> <a name="total_stored_bytes" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.totalStoredBytes"></a>

```python
total_stored_bytes: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `access_restriction_input`<sup>Optional</sup> <a name="access_restriction_input" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.accessRestrictionInput"></a>

```python
access_restriction_input: str
```

- *Type:* str

---

##### `allow_missing_input`<sup>Optional</sup> <a name="allow_missing_input" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.allowMissingInput"></a>

```python
allow_missing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `backup_minimum_enforced_retention_duration_input`<sup>Optional</sup> <a name="backup_minimum_enforced_retention_duration_input" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupMinimumEnforcedRetentionDurationInput"></a>

```python
backup_minimum_enforced_retention_duration_input: str
```

- *Type:* str

---

##### `backup_vault_id_input`<sup>Optional</sup> <a name="backup_vault_id_input" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupVaultIdInput"></a>

```python
backup_vault_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `effective_time_input`<sup>Optional</sup> <a name="effective_time_input" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveTimeInput"></a>

```python
effective_time_input: str
```

- *Type:* str

---

##### `force_delete_input`<sup>Optional</sup> <a name="force_delete_input" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceDeleteInput"></a>

```python
force_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_update_input`<sup>Optional</sup> <a name="force_update_input" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceUpdateInput"></a>

```python
force_update_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_backup_plan_references_input`<sup>Optional</sup> <a name="ignore_backup_plan_references_input" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreBackupPlanReferencesInput"></a>

```python
ignore_backup_plan_references_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_inactive_datasources_input`<sup>Optional</sup> <a name="ignore_inactive_datasources_input" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreInactiveDatasourcesInput"></a>

```python
ignore_inactive_datasources_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BackupDrBackupVaultTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a>]

---

##### `access_restriction`<sup>Required</sup> <a name="access_restriction" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.accessRestriction"></a>

```python
access_restriction: str
```

- *Type:* str

---

##### `allow_missing`<sup>Required</sup> <a name="allow_missing" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.allowMissing"></a>

```python
allow_missing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `backup_minimum_enforced_retention_duration`<sup>Required</sup> <a name="backup_minimum_enforced_retention_duration" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupMinimumEnforcedRetentionDuration"></a>

```python
backup_minimum_enforced_retention_duration: str
```

- *Type:* str

---

##### `backup_vault_id`<sup>Required</sup> <a name="backup_vault_id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupVaultId"></a>

```python
backup_vault_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `effective_time`<sup>Required</sup> <a name="effective_time" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveTime"></a>

```python
effective_time: str
```

- *Type:* str

---

##### `force_delete`<sup>Required</sup> <a name="force_delete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceDelete"></a>

```python
force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_update`<sup>Required</sup> <a name="force_update" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceUpdate"></a>

```python
force_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_backup_plan_references`<sup>Required</sup> <a name="ignore_backup_plan_references" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreBackupPlanReferences"></a>

```python
ignore_backup_plan_references: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_inactive_datasources`<sup>Required</sup> <a name="ignore_inactive_datasources" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreInactiveDatasources"></a>

```python
ignore_inactive_datasources: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BackupDrBackupVaultConfig <a name="BackupDrBackupVaultConfig" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_vault

backupDrBackupVault.BackupDrBackupVaultConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_minimum_enforced_retention_duration: str,
  backup_vault_id: str,
  location: str,
  access_restriction: str = None,
  allow_missing: typing.Union[bool, IResolvable] = None,
  annotations: typing.Mapping[str] = None,
  description: str = None,
  effective_time: str = None,
  force_delete: typing.Union[bool, IResolvable] = None,
  force_update: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ignore_backup_plan_references: typing.Union[bool, IResolvable] = None,
  ignore_inactive_datasources: typing.Union[bool, IResolvable] = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: BackupDrBackupVaultTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupMinimumEnforcedRetentionDuration">backup_minimum_enforced_retention_duration</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupVaultId">backup_vault_id</a></code> | <code>str</code> | Required. ID of the requesting object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.location">location</a></code> | <code>str</code> | The GCP location for the backup vault. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.accessRestriction">access_restriction</a></code> | <code>str</code> | Access restriction for the backup vault. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.allowMissing">allow_missing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow idempotent deletion of backup vault. The request will still succeed in case the backup vault does not exist. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. User annotations. See https://google.aip.dev/128#annotations Stores small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.description">description</a></code> | <code>str</code> | Optional. The description of the BackupVault instance (2048 characters or less). |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.effectiveTime">effective_time</a></code> | <code>str</code> | Optional. Time after which the BackupVault resource is locked. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forceUpdate">force_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, allow update to extend the minimum enforced retention for backup vault. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#id BackupDrBackupVault#id}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.ignoreBackupPlanReferences">ignore_backup_plan_references</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance that is being referenced by an active backup plan. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.ignoreInactiveDatasources">ignore_inactive_datasources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#project BackupDrBackupVault#project}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_minimum_enforced_retention_duration`<sup>Required</sup> <a name="backup_minimum_enforced_retention_duration" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupMinimumEnforcedRetentionDuration"></a>

```python
backup_minimum_enforced_retention_duration: str
```

- *Type:* str

Required.

The default and minimum enforced retention for each backup within the backup vault. The enforced retention for each backup can be extended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#backup_minimum_enforced_retention_duration BackupDrBackupVault#backup_minimum_enforced_retention_duration}

---

##### `backup_vault_id`<sup>Required</sup> <a name="backup_vault_id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupVaultId"></a>

```python
backup_vault_id: str
```

- *Type:* str

Required. ID of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#backup_vault_id BackupDrBackupVault#backup_vault_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The GCP location for the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#location BackupDrBackupVault#location}

---

##### `access_restriction`<sup>Optional</sup> <a name="access_restriction" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.accessRestriction"></a>

```python
access_restriction: str
```

- *Type:* str

Access restriction for the backup vault.

Default value is 'WITHIN_ORGANIZATION' if not provided during creation. Default value: "WITHIN_ORGANIZATION" Possible values: ["ACCESS_RESTRICTION_UNSPECIFIED", "WITHIN_PROJECT", "WITHIN_ORGANIZATION", "UNRESTRICTED", "WITHIN_ORG_BUT_UNRESTRICTED_FOR_BA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#access_restriction BackupDrBackupVault#access_restriction}

---

##### `allow_missing`<sup>Optional</sup> <a name="allow_missing" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.allowMissing"></a>

```python
allow_missing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow idempotent deletion of backup vault. The request will still succeed in case the backup vault does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#allow_missing BackupDrBackupVault#allow_missing}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. User annotations. See https://google.aip.dev/128#annotations Stores small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#annotations BackupDrBackupVault#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. The description of the BackupVault instance (2048 characters or less).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#description BackupDrBackupVault#description}

---

##### `effective_time`<sup>Optional</sup> <a name="effective_time" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.effectiveTime"></a>

```python
effective_time: str
```

- *Type:* str

Optional. Time after which the BackupVault resource is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#effective_time BackupDrBackupVault#effective_time}

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forceDelete"></a>

```python
force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources.

* deletion of a backup vault instance that is being referenced by an active backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#force_delete BackupDrBackupVault#force_delete}

---

##### `force_update`<sup>Optional</sup> <a name="force_update" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forceUpdate"></a>

```python
force_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, allow update to extend the minimum enforced retention for backup vault.

This overrides
the restriction against conflicting retention periods. This conflict may occur when the
expiration schedule defined by the associated backup plan is shorter than the minimum
retention set by the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#force_update BackupDrBackupVault#force_update}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#id BackupDrBackupVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_backup_plan_references`<sup>Optional</sup> <a name="ignore_backup_plan_references" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.ignoreBackupPlanReferences"></a>

```python
ignore_backup_plan_references: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance that is being referenced by an active backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#ignore_backup_plan_references BackupDrBackupVault#ignore_backup_plan_references}

---

##### `ignore_inactive_datasources`<sup>Optional</sup> <a name="ignore_inactive_datasources" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.ignoreInactiveDatasources"></a>

```python
ignore_inactive_datasources: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#ignore_inactive_datasources BackupDrBackupVault#ignore_inactive_datasources}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#labels BackupDrBackupVault#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#project BackupDrBackupVault#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.timeouts"></a>

```python
timeouts: BackupDrBackupVaultTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#timeouts BackupDrBackupVault#timeouts}

---

### BackupDrBackupVaultTimeouts <a name="BackupDrBackupVaultTimeouts" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_vault

backupDrBackupVault.BackupDrBackupVaultTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#create BackupDrBackupVault#create}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#delete BackupDrBackupVault#delete}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#update BackupDrBackupVault#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#create BackupDrBackupVault#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#delete BackupDrBackupVault#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/backup_dr_backup_vault#update BackupDrBackupVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupDrBackupVaultTimeoutsOutputReference <a name="BackupDrBackupVaultTimeoutsOutputReference" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import backup_dr_backup_vault

backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BackupDrBackupVaultTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a>]

---



