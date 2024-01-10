# `alloydbCluster` Submodule <a name="`alloydbCluster` Submodule" id="@cdktf/provider-google.alloydbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlloydbCluster <a name="AlloydbCluster" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster google_alloydb_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  location: str,
  annotations: typing.Mapping[str] = None,
  automated_backup_policy: AlloydbClusterAutomatedBackupPolicy = None,
  cluster_type: str = None,
  continuous_backup_config: AlloydbClusterContinuousBackupConfig = None,
  deletion_policy: str = None,
  display_name: str = None,
  encryption_config: AlloydbClusterEncryptionConfig = None,
  etag: str = None,
  id: str = None,
  initial_user: AlloydbClusterInitialUser = None,
  labels: typing.Mapping[str] = None,
  network: str = None,
  network_config: AlloydbClusterNetworkConfig = None,
  project: str = None,
  restore_backup_source: AlloydbClusterRestoreBackupSource = None,
  restore_continuous_backup_source: AlloydbClusterRestoreContinuousBackupSource = None,
  secondary_config: AlloydbClusterSecondaryConfig = None,
  timeouts: AlloydbClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | The ID of the alloydb cluster. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | The location where the alloydb cluster should reside. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations to allow client tools to store small amount of arbitrary data. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.automatedBackupPolicy">automated_backup_policy</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy">AlloydbClusterAutomatedBackupPolicy</a></code> | automated_backup_policy block. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.clusterType">cluster_type</a></code> | <code>str</code> | The type of cluster. If not set, defaults to PRIMARY. Default value: "PRIMARY" Possible values: ["PRIMARY", "SECONDARY"]. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.continuousBackupConfig">continuous_backup_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfig">AlloydbClusterContinuousBackupConfig</a></code> | continuous_backup_config block. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Policy to determine if the cluster should be deleted forcefully. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-settable and human-readable display name for the Cluster. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfig">AlloydbClusterEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.etag">etag</a></code> | <code>str</code> | For Resource freshness validation (https://google.aip.dev/154). |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#id AlloydbCluster#id}. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.initialUser">initial_user</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUser">AlloydbClusterInitialUser</a></code> | initial_user block. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the alloydb cluster. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.network">network</a></code> | <code>str</code> | The relative resource name of the VPC network on which the instance can be accessed. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfig">AlloydbClusterNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#project AlloydbCluster#project}. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.restoreBackupSource">restore_backup_source</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSource">AlloydbClusterRestoreBackupSource</a></code> | restore_backup_source block. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.restoreContinuousBackupSource">restore_continuous_backup_source</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSource">AlloydbClusterRestoreContinuousBackupSource</a></code> | restore_continuous_backup_source block. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.secondaryConfig">secondary_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfig">AlloydbClusterSecondaryConfig</a></code> | secondary_config block. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeouts">AlloydbClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.clusterId"></a>

- *Type:* str

The ID of the alloydb cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#cluster_id AlloydbCluster#cluster_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.location"></a>

- *Type:* str

The location where the alloydb cluster should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#location AlloydbCluster#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Annotations to allow client tools to store small amount of arbitrary data.

This is distinct from labels. https://google.aip.dev/128
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#annotations AlloydbCluster#annotations}

---

##### `automated_backup_policy`<sup>Optional</sup> <a name="automated_backup_policy" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.automatedBackupPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy">AlloydbClusterAutomatedBackupPolicy</a>

automated_backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#automated_backup_policy AlloydbCluster#automated_backup_policy}

---

##### `cluster_type`<sup>Optional</sup> <a name="cluster_type" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.clusterType"></a>

- *Type:* str

The type of cluster. If not set, defaults to PRIMARY. Default value: "PRIMARY" Possible values: ["PRIMARY", "SECONDARY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#cluster_type AlloydbCluster#cluster_type}

---

##### `continuous_backup_config`<sup>Optional</sup> <a name="continuous_backup_config" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.continuousBackupConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfig">AlloydbClusterContinuousBackupConfig</a>

continuous_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#continuous_backup_config AlloydbCluster#continuous_backup_config}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Policy to determine if the cluster should be deleted forcefully.

Deleting a cluster forcefully, deletes the cluster and all its associated instances within the cluster.
Deleting a Secondary cluster with a secondary instance REQUIRES setting deletion_policy = "FORCE" otherwise an error is returned. This is needed as there is no support to delete just the secondary instance, and the only way to delete secondary instance is to delete the associated secondary cluster forcefully which also deletes the secondary instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#deletion_policy AlloydbCluster#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.displayName"></a>

- *Type:* str

User-settable and human-readable display name for the Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#display_name AlloydbCluster#display_name}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.encryptionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfig">AlloydbClusterEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#encryption_config AlloydbCluster#encryption_config}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.etag"></a>

- *Type:* str

For Resource freshness validation (https://google.aip.dev/154).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#etag AlloydbCluster#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#id AlloydbCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_user`<sup>Optional</sup> <a name="initial_user" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.initialUser"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUser">AlloydbClusterInitialUser</a>

initial_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#initial_user AlloydbCluster#initial_user}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels for the alloydb cluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#labels AlloydbCluster#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.network"></a>

- *Type:* str

The relative resource name of the VPC network on which the instance can be accessed.

It is specified in the following form:

"projects/{projectNumber}/global/networks/{network_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#network AlloydbCluster#network}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfig">AlloydbClusterNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#network_config AlloydbCluster#network_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#project AlloydbCluster#project}.

---

##### `restore_backup_source`<sup>Optional</sup> <a name="restore_backup_source" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.restoreBackupSource"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSource">AlloydbClusterRestoreBackupSource</a>

restore_backup_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#restore_backup_source AlloydbCluster#restore_backup_source}

---

##### `restore_continuous_backup_source`<sup>Optional</sup> <a name="restore_continuous_backup_source" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.restoreContinuousBackupSource"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSource">AlloydbClusterRestoreContinuousBackupSource</a>

restore_continuous_backup_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#restore_continuous_backup_source AlloydbCluster#restore_continuous_backup_source}

---

##### `secondary_config`<sup>Optional</sup> <a name="secondary_config" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.secondaryConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfig">AlloydbClusterSecondaryConfig</a>

secondary_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#secondary_config AlloydbCluster#secondary_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeouts">AlloydbClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#timeouts AlloydbCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.putAutomatedBackupPolicy">put_automated_backup_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.putContinuousBackupConfig">put_continuous_backup_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.putEncryptionConfig">put_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.putInitialUser">put_initial_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.putNetworkConfig">put_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.putRestoreBackupSource">put_restore_backup_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.putRestoreContinuousBackupSource">put_restore_continuous_backup_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.putSecondaryConfig">put_secondary_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetAutomatedBackupPolicy">reset_automated_backup_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetClusterType">reset_cluster_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetContinuousBackupConfig">reset_continuous_backup_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetEncryptionConfig">reset_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetEtag">reset_etag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetInitialUser">reset_initial_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetNetworkConfig">reset_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetRestoreBackupSource">reset_restore_backup_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetRestoreContinuousBackupSource">reset_restore_continuous_backup_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetSecondaryConfig">reset_secondary_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_automated_backup_policy` <a name="put_automated_backup_policy" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putAutomatedBackupPolicy"></a>

```python
def put_automated_backup_policy(
  backup_window: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  encryption_config: AlloydbClusterAutomatedBackupPolicyEncryptionConfig = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  quantity_based_retention: AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention = None,
  time_based_retention: AlloydbClusterAutomatedBackupPolicyTimeBasedRetention = None,
  weekly_schedule: AlloydbClusterAutomatedBackupPolicyWeeklySchedule = None
) -> None
```

###### `backup_window`<sup>Optional</sup> <a name="backup_window" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putAutomatedBackupPolicy.parameter.backupWindow"></a>

- *Type:* str

The length of the time window during which a backup can be taken.

If a backup does not succeed within this time window, it will be canceled and considered failed.

The backup window must be at least 5 minutes long. There is no upper bound on the window. If not set, it will default to 1 hour.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#backup_window AlloydbCluster#backup_window}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putAutomatedBackupPolicy.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether automated backups are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#enabled AlloydbCluster#enabled}

---

###### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putAutomatedBackupPolicy.parameter.encryptionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfig">AlloydbClusterAutomatedBackupPolicyEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#encryption_config AlloydbCluster#encryption_config}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putAutomatedBackupPolicy.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels to apply to backups created using this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#labels AlloydbCluster#labels}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putAutomatedBackupPolicy.parameter.location"></a>

- *Type:* str

The location where the backup will be stored.

Currently, the only supported option is to store the backup in the same region as the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#location AlloydbCluster#location}

---

###### `quantity_based_retention`<sup>Optional</sup> <a name="quantity_based_retention" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putAutomatedBackupPolicy.parameter.quantityBasedRetention"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a>

quantity_based_retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#quantity_based_retention AlloydbCluster#quantity_based_retention}

---

###### `time_based_retention`<sup>Optional</sup> <a name="time_based_retention" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putAutomatedBackupPolicy.parameter.timeBasedRetention"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetention">AlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a>

time_based_retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#time_based_retention AlloydbCluster#time_based_retention}

---

###### `weekly_schedule`<sup>Optional</sup> <a name="weekly_schedule" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putAutomatedBackupPolicy.parameter.weeklySchedule"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklySchedule">AlloydbClusterAutomatedBackupPolicyWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#weekly_schedule AlloydbCluster#weekly_schedule}

---

##### `put_continuous_backup_config` <a name="put_continuous_backup_config" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putContinuousBackupConfig"></a>

```python
def put_continuous_backup_config(
  enabled: typing.Union[bool, IResolvable] = None,
  encryption_config: AlloydbClusterContinuousBackupConfigEncryptionConfig = None,
  recovery_window_days: typing.Union[int, float] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putContinuousBackupConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether continuous backup recovery is enabled. If not set, defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#enabled AlloydbCluster#enabled}

---

###### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putContinuousBackupConfig.parameter.encryptionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfig">AlloydbClusterContinuousBackupConfigEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#encryption_config AlloydbCluster#encryption_config}

---

###### `recovery_window_days`<sup>Optional</sup> <a name="recovery_window_days" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putContinuousBackupConfig.parameter.recoveryWindowDays"></a>

- *Type:* typing.Union[int, float]

The numbers of days that are eligible to restore from using PITR.

To support the entire recovery window, backups and logs are retained for one day more than the recovery window.

If not set, defaults to 14 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#recovery_window_days AlloydbCluster#recovery_window_days}

---

##### `put_encryption_config` <a name="put_encryption_config" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putEncryptionConfig"></a>

```python
def put_encryption_config(
  kms_key_name: str = None
) -> None
```

###### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putEncryptionConfig.parameter.kmsKeyName"></a>

- *Type:* str

The fully-qualified resource name of the KMS key.

Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#kms_key_name AlloydbCluster#kms_key_name}

---

##### `put_initial_user` <a name="put_initial_user" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putInitialUser"></a>

```python
def put_initial_user(
  password: str,
  user: str = None
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putInitialUser.parameter.password"></a>

- *Type:* str

The initial password for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#password AlloydbCluster#password}

---

###### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putInitialUser.parameter.user"></a>

- *Type:* str

The database username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#user AlloydbCluster#user}

---

##### `put_network_config` <a name="put_network_config" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putNetworkConfig"></a>

```python
def put_network_config(
  allocated_ip_range: str = None,
  network: str = None
) -> None
```

###### `allocated_ip_range`<sup>Optional</sup> <a name="allocated_ip_range" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putNetworkConfig.parameter.allocatedIpRange"></a>

- *Type:* str

The name of the allocated IP range for the private IP AlloyDB cluster.

For example: "google-managed-services-default".
If set, the instance IPs for this cluster will be created in the allocated range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#allocated_ip_range AlloydbCluster#allocated_ip_range}

---

###### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putNetworkConfig.parameter.network"></a>

- *Type:* str

The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP.

The network must belong to the same project as the cluster.
It is specified in the form: "projects/{projectNumber}/global/networks/{network_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#network AlloydbCluster#network}

---

##### `put_restore_backup_source` <a name="put_restore_backup_source" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putRestoreBackupSource"></a>

```python
def put_restore_backup_source(
  backup_name: str
) -> None
```

###### `backup_name`<sup>Required</sup> <a name="backup_name" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putRestoreBackupSource.parameter.backupName"></a>

- *Type:* str

The name of the backup that this cluster is restored from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#backup_name AlloydbCluster#backup_name}

---

##### `put_restore_continuous_backup_source` <a name="put_restore_continuous_backup_source" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putRestoreContinuousBackupSource"></a>

```python
def put_restore_continuous_backup_source(
  cluster: str,
  point_in_time: str
) -> None
```

###### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putRestoreContinuousBackupSource.parameter.cluster"></a>

- *Type:* str

The name of the source cluster that this cluster is restored from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#cluster AlloydbCluster#cluster}

---

###### `point_in_time`<sup>Required</sup> <a name="point_in_time" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putRestoreContinuousBackupSource.parameter.pointInTime"></a>

- *Type:* str

The point in time that this cluster is restored to, in RFC 3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#point_in_time AlloydbCluster#point_in_time}

---

##### `put_secondary_config` <a name="put_secondary_config" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putSecondaryConfig"></a>

```python
def put_secondary_config(
  primary_cluster_name: str
) -> None
```

###### `primary_cluster_name`<sup>Required</sup> <a name="primary_cluster_name" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putSecondaryConfig.parameter.primaryClusterName"></a>

- *Type:* str

Name of the primary cluster must be in the format 'projects/{project}/locations/{location}/clusters/{cluster_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#primary_cluster_name AlloydbCluster#primary_cluster_name}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#create AlloydbCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#delete AlloydbCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#update AlloydbCluster#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_automated_backup_policy` <a name="reset_automated_backup_policy" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetAutomatedBackupPolicy"></a>

```python
def reset_automated_backup_policy() -> None
```

##### `reset_cluster_type` <a name="reset_cluster_type" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetClusterType"></a>

```python
def reset_cluster_type() -> None
```

##### `reset_continuous_backup_config` <a name="reset_continuous_backup_config" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetContinuousBackupConfig"></a>

```python
def reset_continuous_backup_config() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_encryption_config` <a name="reset_encryption_config" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetEncryptionConfig"></a>

```python
def reset_encryption_config() -> None
```

##### `reset_etag` <a name="reset_etag" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetEtag"></a>

```python
def reset_etag() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_initial_user` <a name="reset_initial_user" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetInitialUser"></a>

```python
def reset_initial_user() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_network_config` <a name="reset_network_config" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetNetworkConfig"></a>

```python
def reset_network_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_restore_backup_source` <a name="reset_restore_backup_source" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetRestoreBackupSource"></a>

```python
def reset_restore_backup_source() -> None
```

##### `reset_restore_continuous_backup_source` <a name="reset_restore_continuous_backup_source" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetRestoreContinuousBackupSource"></a>

```python
def reset_restore_continuous_backup_source() -> None
```

##### `reset_secondary_config` <a name="reset_secondary_config" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetSecondaryConfig"></a>

```python
def reset_secondary_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AlloydbCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AlloydbCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AlloydbCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AlloydbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AlloydbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.automatedBackupPolicy">automated_backup_policy</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference">AlloydbClusterAutomatedBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.backupSource">backup_source</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList">AlloydbClusterBackupSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.continuousBackupConfig">continuous_backup_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference">AlloydbClusterContinuousBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.continuousBackupInfo">continuous_backup_info</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList">AlloydbClusterContinuousBackupInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.databaseVersion">database_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference">AlloydbClusterEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.encryptionInfo">encryption_info</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList">AlloydbClusterEncryptionInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.initialUser">initial_user</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference">AlloydbClusterInitialUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.migrationSource">migration_source</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList">AlloydbClusterMigrationSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference">AlloydbClusterNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.restoreBackupSource">restore_backup_source</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference">AlloydbClusterRestoreBackupSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.restoreContinuousBackupSource">restore_continuous_backup_source</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference">AlloydbClusterRestoreContinuousBackupSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.secondaryConfig">secondary_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference">AlloydbClusterSecondaryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference">AlloydbClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.automatedBackupPolicyInput">automated_backup_policy_input</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy">AlloydbClusterAutomatedBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.clusterTypeInput">cluster_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.continuousBackupConfigInput">continuous_backup_config_input</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfig">AlloydbClusterContinuousBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.encryptionConfigInput">encryption_config_input</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfig">AlloydbClusterEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.etagInput">etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.initialUserInput">initial_user_input</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUser">AlloydbClusterInitialUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.networkConfigInput">network_config_input</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfig">AlloydbClusterNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.restoreBackupSourceInput">restore_backup_source_input</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSource">AlloydbClusterRestoreBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.restoreContinuousBackupSourceInput">restore_continuous_backup_source_input</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSource">AlloydbClusterRestoreContinuousBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.secondaryConfigInput">secondary_config_input</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfig">AlloydbClusterSecondaryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeouts">AlloydbClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.clusterType">cluster_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `automated_backup_policy`<sup>Required</sup> <a name="automated_backup_policy" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.automatedBackupPolicy"></a>

```python
automated_backup_policy: AlloydbClusterAutomatedBackupPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference">AlloydbClusterAutomatedBackupPolicyOutputReference</a>

---

##### `backup_source`<sup>Required</sup> <a name="backup_source" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.backupSource"></a>

```python
backup_source: AlloydbClusterBackupSourceList
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList">AlloydbClusterBackupSourceList</a>

---

##### `continuous_backup_config`<sup>Required</sup> <a name="continuous_backup_config" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.continuousBackupConfig"></a>

```python
continuous_backup_config: AlloydbClusterContinuousBackupConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference">AlloydbClusterContinuousBackupConfigOutputReference</a>

---

##### `continuous_backup_info`<sup>Required</sup> <a name="continuous_backup_info" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.continuousBackupInfo"></a>

```python
continuous_backup_info: AlloydbClusterContinuousBackupInfoList
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList">AlloydbClusterContinuousBackupInfoList</a>

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.databaseVersion"></a>

```python
database_version: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `encryption_config`<sup>Required</sup> <a name="encryption_config" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.encryptionConfig"></a>

```python
encryption_config: AlloydbClusterEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference">AlloydbClusterEncryptionConfigOutputReference</a>

---

##### `encryption_info`<sup>Required</sup> <a name="encryption_info" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.encryptionInfo"></a>

```python
encryption_info: AlloydbClusterEncryptionInfoList
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList">AlloydbClusterEncryptionInfoList</a>

---

##### `initial_user`<sup>Required</sup> <a name="initial_user" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.initialUser"></a>

```python
initial_user: AlloydbClusterInitialUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference">AlloydbClusterInitialUserOutputReference</a>

---

##### `migration_source`<sup>Required</sup> <a name="migration_source" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.migrationSource"></a>

```python
migration_source: AlloydbClusterMigrationSourceList
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList">AlloydbClusterMigrationSourceList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.networkConfig"></a>

```python
network_config: AlloydbClusterNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference">AlloydbClusterNetworkConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `restore_backup_source`<sup>Required</sup> <a name="restore_backup_source" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.restoreBackupSource"></a>

```python
restore_backup_source: AlloydbClusterRestoreBackupSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference">AlloydbClusterRestoreBackupSourceOutputReference</a>

---

##### `restore_continuous_backup_source`<sup>Required</sup> <a name="restore_continuous_backup_source" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.restoreContinuousBackupSource"></a>

```python
restore_continuous_backup_source: AlloydbClusterRestoreContinuousBackupSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference">AlloydbClusterRestoreContinuousBackupSourceOutputReference</a>

---

##### `secondary_config`<sup>Required</sup> <a name="secondary_config" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.secondaryConfig"></a>

```python
secondary_config: AlloydbClusterSecondaryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference">AlloydbClusterSecondaryConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.timeouts"></a>

```python
timeouts: AlloydbClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference">AlloydbClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `automated_backup_policy_input`<sup>Optional</sup> <a name="automated_backup_policy_input" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.automatedBackupPolicyInput"></a>

```python
automated_backup_policy_input: AlloydbClusterAutomatedBackupPolicy
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy">AlloydbClusterAutomatedBackupPolicy</a>

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `cluster_type_input`<sup>Optional</sup> <a name="cluster_type_input" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.clusterTypeInput"></a>

```python
cluster_type_input: str
```

- *Type:* str

---

##### `continuous_backup_config_input`<sup>Optional</sup> <a name="continuous_backup_config_input" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.continuousBackupConfigInput"></a>

```python
continuous_backup_config_input: AlloydbClusterContinuousBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfig">AlloydbClusterContinuousBackupConfig</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `encryption_config_input`<sup>Optional</sup> <a name="encryption_config_input" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.encryptionConfigInput"></a>

```python
encryption_config_input: AlloydbClusterEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfig">AlloydbClusterEncryptionConfig</a>

---

##### `etag_input`<sup>Optional</sup> <a name="etag_input" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.etagInput"></a>

```python
etag_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `initial_user_input`<sup>Optional</sup> <a name="initial_user_input" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.initialUserInput"></a>

```python
initial_user_input: AlloydbClusterInitialUser
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUser">AlloydbClusterInitialUser</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `network_config_input`<sup>Optional</sup> <a name="network_config_input" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.networkConfigInput"></a>

```python
network_config_input: AlloydbClusterNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfig">AlloydbClusterNetworkConfig</a>

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `restore_backup_source_input`<sup>Optional</sup> <a name="restore_backup_source_input" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.restoreBackupSourceInput"></a>

```python
restore_backup_source_input: AlloydbClusterRestoreBackupSource
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSource">AlloydbClusterRestoreBackupSource</a>

---

##### `restore_continuous_backup_source_input`<sup>Optional</sup> <a name="restore_continuous_backup_source_input" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.restoreContinuousBackupSourceInput"></a>

```python
restore_continuous_backup_source_input: AlloydbClusterRestoreContinuousBackupSource
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSource">AlloydbClusterRestoreContinuousBackupSource</a>

---

##### `secondary_config_input`<sup>Optional</sup> <a name="secondary_config_input" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.secondaryConfigInput"></a>

```python
secondary_config_input: AlloydbClusterSecondaryConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfig">AlloydbClusterSecondaryConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AlloydbClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeouts">AlloydbClusterTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `cluster_type`<sup>Required</sup> <a name="cluster_type" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.clusterType"></a>

```python
cluster_type: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.alloydbCluster.AlloydbCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AlloydbClusterAutomatedBackupPolicy <a name="AlloydbClusterAutomatedBackupPolicy" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterAutomatedBackupPolicy(
  backup_window: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  encryption_config: AlloydbClusterAutomatedBackupPolicyEncryptionConfig = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  quantity_based_retention: AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention = None,
  time_based_retention: AlloydbClusterAutomatedBackupPolicyTimeBasedRetention = None,
  weekly_schedule: AlloydbClusterAutomatedBackupPolicyWeeklySchedule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy.property.backupWindow">backup_window</a></code> | <code>str</code> | The length of the time window during which a backup can be taken. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether automated backups are enabled. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfig">AlloydbClusterAutomatedBackupPolicyEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to backups created using this configuration. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy.property.location">location</a></code> | <code>str</code> | The location where the backup will be stored. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy.property.quantityBasedRetention">quantity_based_retention</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a></code> | quantity_based_retention block. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy.property.timeBasedRetention">time_based_retention</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetention">AlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a></code> | time_based_retention block. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy.property.weeklySchedule">weekly_schedule</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklySchedule">AlloydbClusterAutomatedBackupPolicyWeeklySchedule</a></code> | weekly_schedule block. |

---

##### `backup_window`<sup>Optional</sup> <a name="backup_window" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy.property.backupWindow"></a>

```python
backup_window: str
```

- *Type:* str

The length of the time window during which a backup can be taken.

If a backup does not succeed within this time window, it will be canceled and considered failed.

The backup window must be at least 5 minutes long. There is no upper bound on the window. If not set, it will default to 1 hour.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#backup_window AlloydbCluster#backup_window}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether automated backups are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#enabled AlloydbCluster#enabled}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy.property.encryptionConfig"></a>

```python
encryption_config: AlloydbClusterAutomatedBackupPolicyEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfig">AlloydbClusterAutomatedBackupPolicyEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#encryption_config AlloydbCluster#encryption_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels to apply to backups created using this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#labels AlloydbCluster#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

The location where the backup will be stored.

Currently, the only supported option is to store the backup in the same region as the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#location AlloydbCluster#location}

---

##### `quantity_based_retention`<sup>Optional</sup> <a name="quantity_based_retention" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy.property.quantityBasedRetention"></a>

```python
quantity_based_retention: AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a>

quantity_based_retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#quantity_based_retention AlloydbCluster#quantity_based_retention}

---

##### `time_based_retention`<sup>Optional</sup> <a name="time_based_retention" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy.property.timeBasedRetention"></a>

```python
time_based_retention: AlloydbClusterAutomatedBackupPolicyTimeBasedRetention
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetention">AlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a>

time_based_retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#time_based_retention AlloydbCluster#time_based_retention}

---

##### `weekly_schedule`<sup>Optional</sup> <a name="weekly_schedule" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy.property.weeklySchedule"></a>

```python
weekly_schedule: AlloydbClusterAutomatedBackupPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklySchedule">AlloydbClusterAutomatedBackupPolicyWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#weekly_schedule AlloydbCluster#weekly_schedule}

---

### AlloydbClusterAutomatedBackupPolicyEncryptionConfig <a name="AlloydbClusterAutomatedBackupPolicyEncryptionConfig" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfig(
  kms_key_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The fully-qualified resource name of the KMS key. |

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The fully-qualified resource name of the KMS key.

Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#kms_key_name AlloydbCluster#kms_key_name}

---

### AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention <a name="AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention(
  count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention.property.count">count</a></code> | <code>typing.Union[int, float]</code> | The number of backups to retain. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of backups to retain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#count AlloydbCluster#count}

---

### AlloydbClusterAutomatedBackupPolicyTimeBasedRetention <a name="AlloydbClusterAutomatedBackupPolicyTimeBasedRetention" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetention.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetention(
  retention_period: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetention.property.retentionPeriod">retention_period</a></code> | <code>str</code> | The retention period. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |

---

##### `retention_period`<sup>Optional</sup> <a name="retention_period" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetention.property.retentionPeriod"></a>

```python
retention_period: str
```

- *Type:* str

The retention period. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#retention_period AlloydbCluster#retention_period}

---

### AlloydbClusterAutomatedBackupPolicyWeeklySchedule <a name="AlloydbClusterAutomatedBackupPolicyWeeklySchedule" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklySchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklySchedule(
  start_times: typing.Union[IResolvable, typing.List[AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes]],
  days_of_week: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklySchedule.property.startTimes">start_times</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes">AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes</a>]]</code> | start_times block. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklySchedule.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | The days of the week to perform a backup. |

---

##### `start_times`<sup>Required</sup> <a name="start_times" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklySchedule.property.startTimes"></a>

```python
start_times: typing.Union[IResolvable, typing.List[AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes">AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes</a>]]

start_times block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#start_times AlloydbCluster#start_times}

---

##### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklySchedule.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

The days of the week to perform a backup.

At least one day of the week must be provided. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#days_of_week AlloydbCluster#days_of_week}

---

### AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes <a name="AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None,
  nanos: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | Minutes of hour of day. Currently, only the value 0 is supported. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Fractions of seconds in nanoseconds. Currently, only the value 0 is supported. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Seconds of minutes of the time. Currently, only the value 0 is supported. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Hours of day in 24 hour format.

Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#hours AlloydbCluster#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minutes of hour of day. Currently, only the value 0 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#minutes AlloydbCluster#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Fractions of seconds in nanoseconds. Currently, only the value 0 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#nanos AlloydbCluster#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Seconds of minutes of the time. Currently, only the value 0 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#seconds AlloydbCluster#seconds}

---

### AlloydbClusterBackupSource <a name="AlloydbClusterBackupSource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterBackupSource()
```


### AlloydbClusterConfig <a name="AlloydbClusterConfig" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  location: str,
  annotations: typing.Mapping[str] = None,
  automated_backup_policy: AlloydbClusterAutomatedBackupPolicy = None,
  cluster_type: str = None,
  continuous_backup_config: AlloydbClusterContinuousBackupConfig = None,
  deletion_policy: str = None,
  display_name: str = None,
  encryption_config: AlloydbClusterEncryptionConfig = None,
  etag: str = None,
  id: str = None,
  initial_user: AlloydbClusterInitialUser = None,
  labels: typing.Mapping[str] = None,
  network: str = None,
  network_config: AlloydbClusterNetworkConfig = None,
  project: str = None,
  restore_backup_source: AlloydbClusterRestoreBackupSource = None,
  restore_continuous_backup_source: AlloydbClusterRestoreContinuousBackupSource = None,
  secondary_config: AlloydbClusterSecondaryConfig = None,
  timeouts: AlloydbClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | The ID of the alloydb cluster. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.location">location</a></code> | <code>str</code> | The location where the alloydb cluster should reside. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations to allow client tools to store small amount of arbitrary data. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.automatedBackupPolicy">automated_backup_policy</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy">AlloydbClusterAutomatedBackupPolicy</a></code> | automated_backup_policy block. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.clusterType">cluster_type</a></code> | <code>str</code> | The type of cluster. If not set, defaults to PRIMARY. Default value: "PRIMARY" Possible values: ["PRIMARY", "SECONDARY"]. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.continuousBackupConfig">continuous_backup_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfig">AlloydbClusterContinuousBackupConfig</a></code> | continuous_backup_config block. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Policy to determine if the cluster should be deleted forcefully. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.displayName">display_name</a></code> | <code>str</code> | User-settable and human-readable display name for the Cluster. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfig">AlloydbClusterEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.etag">etag</a></code> | <code>str</code> | For Resource freshness validation (https://google.aip.dev/154). |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#id AlloydbCluster#id}. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.initialUser">initial_user</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUser">AlloydbClusterInitialUser</a></code> | initial_user block. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the alloydb cluster. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.network">network</a></code> | <code>str</code> | The relative resource name of the VPC network on which the instance can be accessed. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfig">AlloydbClusterNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#project AlloydbCluster#project}. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.restoreBackupSource">restore_backup_source</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSource">AlloydbClusterRestoreBackupSource</a></code> | restore_backup_source block. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.restoreContinuousBackupSource">restore_continuous_backup_source</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSource">AlloydbClusterRestoreContinuousBackupSource</a></code> | restore_continuous_backup_source block. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.secondaryConfig">secondary_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfig">AlloydbClusterSecondaryConfig</a></code> | secondary_config block. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeouts">AlloydbClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

The ID of the alloydb cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#cluster_id AlloydbCluster#cluster_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location where the alloydb cluster should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#location AlloydbCluster#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Annotations to allow client tools to store small amount of arbitrary data.

This is distinct from labels. https://google.aip.dev/128
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#annotations AlloydbCluster#annotations}

---

##### `automated_backup_policy`<sup>Optional</sup> <a name="automated_backup_policy" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.automatedBackupPolicy"></a>

```python
automated_backup_policy: AlloydbClusterAutomatedBackupPolicy
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy">AlloydbClusterAutomatedBackupPolicy</a>

automated_backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#automated_backup_policy AlloydbCluster#automated_backup_policy}

---

##### `cluster_type`<sup>Optional</sup> <a name="cluster_type" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.clusterType"></a>

```python
cluster_type: str
```

- *Type:* str

The type of cluster. If not set, defaults to PRIMARY. Default value: "PRIMARY" Possible values: ["PRIMARY", "SECONDARY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#cluster_type AlloydbCluster#cluster_type}

---

##### `continuous_backup_config`<sup>Optional</sup> <a name="continuous_backup_config" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.continuousBackupConfig"></a>

```python
continuous_backup_config: AlloydbClusterContinuousBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfig">AlloydbClusterContinuousBackupConfig</a>

continuous_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#continuous_backup_config AlloydbCluster#continuous_backup_config}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Policy to determine if the cluster should be deleted forcefully.

Deleting a cluster forcefully, deletes the cluster and all its associated instances within the cluster.
Deleting a Secondary cluster with a secondary instance REQUIRES setting deletion_policy = "FORCE" otherwise an error is returned. This is needed as there is no support to delete just the secondary instance, and the only way to delete secondary instance is to delete the associated secondary cluster forcefully which also deletes the secondary instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#deletion_policy AlloydbCluster#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-settable and human-readable display name for the Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#display_name AlloydbCluster#display_name}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.encryptionConfig"></a>

```python
encryption_config: AlloydbClusterEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfig">AlloydbClusterEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#encryption_config AlloydbCluster#encryption_config}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

For Resource freshness validation (https://google.aip.dev/154).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#etag AlloydbCluster#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#id AlloydbCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_user`<sup>Optional</sup> <a name="initial_user" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.initialUser"></a>

```python
initial_user: AlloydbClusterInitialUser
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUser">AlloydbClusterInitialUser</a>

initial_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#initial_user AlloydbCluster#initial_user}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels for the alloydb cluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#labels AlloydbCluster#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The relative resource name of the VPC network on which the instance can be accessed.

It is specified in the following form:

"projects/{projectNumber}/global/networks/{network_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#network AlloydbCluster#network}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.networkConfig"></a>

```python
network_config: AlloydbClusterNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfig">AlloydbClusterNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#network_config AlloydbCluster#network_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#project AlloydbCluster#project}.

---

##### `restore_backup_source`<sup>Optional</sup> <a name="restore_backup_source" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.restoreBackupSource"></a>

```python
restore_backup_source: AlloydbClusterRestoreBackupSource
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSource">AlloydbClusterRestoreBackupSource</a>

restore_backup_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#restore_backup_source AlloydbCluster#restore_backup_source}

---

##### `restore_continuous_backup_source`<sup>Optional</sup> <a name="restore_continuous_backup_source" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.restoreContinuousBackupSource"></a>

```python
restore_continuous_backup_source: AlloydbClusterRestoreContinuousBackupSource
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSource">AlloydbClusterRestoreContinuousBackupSource</a>

restore_continuous_backup_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#restore_continuous_backup_source AlloydbCluster#restore_continuous_backup_source}

---

##### `secondary_config`<sup>Optional</sup> <a name="secondary_config" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.secondaryConfig"></a>

```python
secondary_config: AlloydbClusterSecondaryConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfig">AlloydbClusterSecondaryConfig</a>

secondary_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#secondary_config AlloydbCluster#secondary_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterConfig.property.timeouts"></a>

```python
timeouts: AlloydbClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeouts">AlloydbClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#timeouts AlloydbCluster#timeouts}

---

### AlloydbClusterContinuousBackupConfig <a name="AlloydbClusterContinuousBackupConfig" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterContinuousBackupConfig(
  enabled: typing.Union[bool, IResolvable] = None,
  encryption_config: AlloydbClusterContinuousBackupConfigEncryptionConfig = None,
  recovery_window_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether continuous backup recovery is enabled. If not set, defaults to true. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfig.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfig">AlloydbClusterContinuousBackupConfigEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfig.property.recoveryWindowDays">recovery_window_days</a></code> | <code>typing.Union[int, float]</code> | The numbers of days that are eligible to restore from using PITR. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether continuous backup recovery is enabled. If not set, defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#enabled AlloydbCluster#enabled}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfig.property.encryptionConfig"></a>

```python
encryption_config: AlloydbClusterContinuousBackupConfigEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfig">AlloydbClusterContinuousBackupConfigEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#encryption_config AlloydbCluster#encryption_config}

---

##### `recovery_window_days`<sup>Optional</sup> <a name="recovery_window_days" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfig.property.recoveryWindowDays"></a>

```python
recovery_window_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The numbers of days that are eligible to restore from using PITR.

To support the entire recovery window, backups and logs are retained for one day more than the recovery window.

If not set, defaults to 14 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#recovery_window_days AlloydbCluster#recovery_window_days}

---

### AlloydbClusterContinuousBackupConfigEncryptionConfig <a name="AlloydbClusterContinuousBackupConfigEncryptionConfig" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfig(
  kms_key_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The fully-qualified resource name of the KMS key. |

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The fully-qualified resource name of the KMS key.

Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#kms_key_name AlloydbCluster#kms_key_name}

---

### AlloydbClusterContinuousBackupInfo <a name="AlloydbClusterContinuousBackupInfo" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterContinuousBackupInfo()
```


### AlloydbClusterContinuousBackupInfoEncryptionInfo <a name="AlloydbClusterContinuousBackupInfoEncryptionInfo" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfo()
```


### AlloydbClusterEncryptionConfig <a name="AlloydbClusterEncryptionConfig" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterEncryptionConfig(
  kms_key_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The fully-qualified resource name of the KMS key. |

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The fully-qualified resource name of the KMS key.

Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#kms_key_name AlloydbCluster#kms_key_name}

---

### AlloydbClusterEncryptionInfo <a name="AlloydbClusterEncryptionInfo" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterEncryptionInfo()
```


### AlloydbClusterInitialUser <a name="AlloydbClusterInitialUser" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUser.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterInitialUser(
  password: str,
  user: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUser.property.password">password</a></code> | <code>str</code> | The initial password for the user. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUser.property.user">user</a></code> | <code>str</code> | The database username. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUser.property.password"></a>

```python
password: str
```

- *Type:* str

The initial password for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#password AlloydbCluster#password}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUser.property.user"></a>

```python
user: str
```

- *Type:* str

The database username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#user AlloydbCluster#user}

---

### AlloydbClusterMigrationSource <a name="AlloydbClusterMigrationSource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterMigrationSource()
```


### AlloydbClusterNetworkConfig <a name="AlloydbClusterNetworkConfig" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterNetworkConfig(
  allocated_ip_range: str = None,
  network: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfig.property.allocatedIpRange">allocated_ip_range</a></code> | <code>str</code> | The name of the allocated IP range for the private IP AlloyDB cluster. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfig.property.network">network</a></code> | <code>str</code> | The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. |

---

##### `allocated_ip_range`<sup>Optional</sup> <a name="allocated_ip_range" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfig.property.allocatedIpRange"></a>

```python
allocated_ip_range: str
```

- *Type:* str

The name of the allocated IP range for the private IP AlloyDB cluster.

For example: "google-managed-services-default".
If set, the instance IPs for this cluster will be created in the allocated range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#allocated_ip_range AlloydbCluster#allocated_ip_range}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP.

The network must belong to the same project as the cluster.
It is specified in the form: "projects/{projectNumber}/global/networks/{network_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#network AlloydbCluster#network}

---

### AlloydbClusterRestoreBackupSource <a name="AlloydbClusterRestoreBackupSource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterRestoreBackupSource(
  backup_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSource.property.backupName">backup_name</a></code> | <code>str</code> | The name of the backup that this cluster is restored from. |

---

##### `backup_name`<sup>Required</sup> <a name="backup_name" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSource.property.backupName"></a>

```python
backup_name: str
```

- *Type:* str

The name of the backup that this cluster is restored from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#backup_name AlloydbCluster#backup_name}

---

### AlloydbClusterRestoreContinuousBackupSource <a name="AlloydbClusterRestoreContinuousBackupSource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterRestoreContinuousBackupSource(
  cluster: str,
  point_in_time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSource.property.cluster">cluster</a></code> | <code>str</code> | The name of the source cluster that this cluster is restored from. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSource.property.pointInTime">point_in_time</a></code> | <code>str</code> | The point in time that this cluster is restored to, in RFC 3339 format. |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSource.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

The name of the source cluster that this cluster is restored from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#cluster AlloydbCluster#cluster}

---

##### `point_in_time`<sup>Required</sup> <a name="point_in_time" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSource.property.pointInTime"></a>

```python
point_in_time: str
```

- *Type:* str

The point in time that this cluster is restored to, in RFC 3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#point_in_time AlloydbCluster#point_in_time}

---

### AlloydbClusterSecondaryConfig <a name="AlloydbClusterSecondaryConfig" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterSecondaryConfig(
  primary_cluster_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfig.property.primaryClusterName">primary_cluster_name</a></code> | <code>str</code> | Name of the primary cluster must be in the format 'projects/{project}/locations/{location}/clusters/{cluster_id}'. |

---

##### `primary_cluster_name`<sup>Required</sup> <a name="primary_cluster_name" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfig.property.primaryClusterName"></a>

```python
primary_cluster_name: str
```

- *Type:* str

Name of the primary cluster must be in the format 'projects/{project}/locations/{location}/clusters/{cluster_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#primary_cluster_name AlloydbCluster#primary_cluster_name}

---

### AlloydbClusterTimeouts <a name="AlloydbClusterTimeouts" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#create AlloydbCluster#create}. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#delete AlloydbCluster#delete}. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#update AlloydbCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#create AlloydbCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#delete AlloydbCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#update AlloydbCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference <a name="AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfig">AlloydbClusterAutomatedBackupPolicyEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: AlloydbClusterAutomatedBackupPolicyEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfig">AlloydbClusterAutomatedBackupPolicyEncryptionConfig</a>

---


### AlloydbClusterAutomatedBackupPolicyOutputReference <a name="AlloydbClusterAutomatedBackupPolicyOutputReference" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.putEncryptionConfig">put_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.putQuantityBasedRetention">put_quantity_based_retention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.putTimeBasedRetention">put_time_based_retention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.putWeeklySchedule">put_weekly_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.resetBackupWindow">reset_backup_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.resetEncryptionConfig">reset_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.resetQuantityBasedRetention">reset_quantity_based_retention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.resetTimeBasedRetention">reset_time_based_retention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.resetWeeklySchedule">reset_weekly_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption_config` <a name="put_encryption_config" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.putEncryptionConfig"></a>

```python
def put_encryption_config(
  kms_key_name: str = None
) -> None
```

###### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.putEncryptionConfig.parameter.kmsKeyName"></a>

- *Type:* str

The fully-qualified resource name of the KMS key.

Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#kms_key_name AlloydbCluster#kms_key_name}

---

##### `put_quantity_based_retention` <a name="put_quantity_based_retention" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.putQuantityBasedRetention"></a>

```python
def put_quantity_based_retention(
  count: typing.Union[int, float] = None
) -> None
```

###### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.putQuantityBasedRetention.parameter.count"></a>

- *Type:* typing.Union[int, float]

The number of backups to retain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#count AlloydbCluster#count}

---

##### `put_time_based_retention` <a name="put_time_based_retention" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.putTimeBasedRetention"></a>

```python
def put_time_based_retention(
  retention_period: str = None
) -> None
```

###### `retention_period`<sup>Optional</sup> <a name="retention_period" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.putTimeBasedRetention.parameter.retentionPeriod"></a>

- *Type:* str

The retention period. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#retention_period AlloydbCluster#retention_period}

---

##### `put_weekly_schedule` <a name="put_weekly_schedule" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.putWeeklySchedule"></a>

```python
def put_weekly_schedule(
  start_times: typing.Union[IResolvable, typing.List[AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes]],
  days_of_week: typing.List[str] = None
) -> None
```

###### `start_times`<sup>Required</sup> <a name="start_times" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.putWeeklySchedule.parameter.startTimes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes">AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes</a>]]

start_times block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#start_times AlloydbCluster#start_times}

---

###### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.putWeeklySchedule.parameter.daysOfWeek"></a>

- *Type:* typing.List[str]

The days of the week to perform a backup.

At least one day of the week must be provided. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#days_of_week AlloydbCluster#days_of_week}

---

##### `reset_backup_window` <a name="reset_backup_window" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.resetBackupWindow"></a>

```python
def reset_backup_window() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_encryption_config` <a name="reset_encryption_config" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.resetEncryptionConfig"></a>

```python
def reset_encryption_config() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_quantity_based_retention` <a name="reset_quantity_based_retention" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.resetQuantityBasedRetention"></a>

```python
def reset_quantity_based_retention() -> None
```

##### `reset_time_based_retention` <a name="reset_time_based_retention" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.resetTimeBasedRetention"></a>

```python
def reset_time_based_retention() -> None
```

##### `reset_weekly_schedule` <a name="reset_weekly_schedule" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.resetWeeklySchedule"></a>

```python
def reset_weekly_schedule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference">AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.quantityBasedRetention">quantity_based_retention</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference">AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.timeBasedRetention">time_based_retention</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference">AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.weeklySchedule">weekly_schedule</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference">AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.backupWindowInput">backup_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.encryptionConfigInput">encryption_config_input</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfig">AlloydbClusterAutomatedBackupPolicyEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.quantityBasedRetentionInput">quantity_based_retention_input</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.timeBasedRetentionInput">time_based_retention_input</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetention">AlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.weeklyScheduleInput">weekly_schedule_input</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklySchedule">AlloydbClusterAutomatedBackupPolicyWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.backupWindow">backup_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy">AlloydbClusterAutomatedBackupPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_config`<sup>Required</sup> <a name="encryption_config" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.encryptionConfig"></a>

```python
encryption_config: AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference">AlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference</a>

---

##### `quantity_based_retention`<sup>Required</sup> <a name="quantity_based_retention" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.quantityBasedRetention"></a>

```python
quantity_based_retention: AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference">AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference</a>

---

##### `time_based_retention`<sup>Required</sup> <a name="time_based_retention" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.timeBasedRetention"></a>

```python
time_based_retention: AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference">AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference</a>

---

##### `weekly_schedule`<sup>Required</sup> <a name="weekly_schedule" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.weeklySchedule"></a>

```python
weekly_schedule: AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference">AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference</a>

---

##### `backup_window_input`<sup>Optional</sup> <a name="backup_window_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.backupWindowInput"></a>

```python
backup_window_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_config_input`<sup>Optional</sup> <a name="encryption_config_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.encryptionConfigInput"></a>

```python
encryption_config_input: AlloydbClusterAutomatedBackupPolicyEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyEncryptionConfig">AlloydbClusterAutomatedBackupPolicyEncryptionConfig</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `quantity_based_retention_input`<sup>Optional</sup> <a name="quantity_based_retention_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.quantityBasedRetentionInput"></a>

```python
quantity_based_retention_input: AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a>

---

##### `time_based_retention_input`<sup>Optional</sup> <a name="time_based_retention_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.timeBasedRetentionInput"></a>

```python
time_based_retention_input: AlloydbClusterAutomatedBackupPolicyTimeBasedRetention
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetention">AlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a>

---

##### `weekly_schedule_input`<sup>Optional</sup> <a name="weekly_schedule_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.weeklyScheduleInput"></a>

```python
weekly_schedule_input: AlloydbClusterAutomatedBackupPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklySchedule">AlloydbClusterAutomatedBackupPolicyWeeklySchedule</a>

---

##### `backup_window`<sup>Required</sup> <a name="backup_window" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.backupWindow"></a>

```python
backup_window: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyOutputReference.property.internalValue"></a>

```python
internal_value: AlloydbClusterAutomatedBackupPolicy
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicy">AlloydbClusterAutomatedBackupPolicy</a>

---


### AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference <a name="AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.resetCount">reset_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_count` <a name="reset_count" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.resetCount"></a>

```python
def reset_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.internalValue"></a>

```python
internal_value: AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">AlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a>

---


### AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference <a name="AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.resetRetentionPeriod">reset_retention_period</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_retention_period` <a name="reset_retention_period" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.resetRetentionPeriod"></a>

```python
def reset_retention_period() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.retentionPeriodInput">retention_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.retentionPeriod">retention_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetention">AlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retention_period_input`<sup>Optional</sup> <a name="retention_period_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.retentionPeriodInput"></a>

```python
retention_period_input: str
```

- *Type:* str

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.retentionPeriod"></a>

```python
retention_period: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.internalValue"></a>

```python
internal_value: AlloydbClusterAutomatedBackupPolicyTimeBasedRetention
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyTimeBasedRetention">AlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a>

---


### AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference <a name="AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.putStartTimes">put_start_times</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.resetDaysOfWeek">reset_days_of_week</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_start_times` <a name="put_start_times" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.putStartTimes"></a>

```python
def put_start_times(
  value: typing.Union[IResolvable, typing.List[AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.putStartTimes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes">AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes</a>]]

---

##### `reset_days_of_week` <a name="reset_days_of_week" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.resetDaysOfWeek"></a>

```python
def reset_days_of_week() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.startTimes">start_times</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList">AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.daysOfWeekInput">days_of_week_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.startTimesInput">start_times_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes">AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklySchedule">AlloydbClusterAutomatedBackupPolicyWeeklySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `start_times`<sup>Required</sup> <a name="start_times" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.startTimes"></a>

```python
start_times: AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList">AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList</a>

---

##### `days_of_week_input`<sup>Optional</sup> <a name="days_of_week_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.daysOfWeekInput"></a>

```python
days_of_week_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `start_times_input`<sup>Optional</sup> <a name="start_times_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.startTimesInput"></a>

```python
start_times_input: typing.Union[IResolvable, typing.List[AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes">AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes</a>]]

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.internalValue"></a>

```python
internal_value: AlloydbClusterAutomatedBackupPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklySchedule">AlloydbClusterAutomatedBackupPolicyWeeklySchedule</a>

---


### AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList <a name="AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes">AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes">AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes</a>]]

---


### AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference <a name="AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetHours">reset_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetNanos">reset_nanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetSeconds">reset_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hours` <a name="reset_hours" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetHours"></a>

```python
def reset_hours() -> None
```

##### `reset_minutes` <a name="reset_minutes" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```

##### `reset_nanos` <a name="reset_nanos" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetNanos"></a>

```python
def reset_nanos() -> None
```

##### `reset_seconds` <a name="reset_seconds" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetSeconds"></a>

```python
def reset_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes">AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.hoursInput"></a>

```python
hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes">AlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes</a>]

---


### AlloydbClusterBackupSourceList <a name="AlloydbClusterBackupSourceList" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterBackupSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AlloydbClusterBackupSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AlloydbClusterBackupSourceOutputReference <a name="AlloydbClusterBackupSourceOutputReference" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterBackupSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.property.backupName">backup_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSource">AlloydbClusterBackupSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_name`<sup>Required</sup> <a name="backup_name" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.property.backupName"></a>

```python
backup_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSourceOutputReference.property.internalValue"></a>

```python
internal_value: AlloydbClusterBackupSource
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterBackupSource">AlloydbClusterBackupSource</a>

---


### AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference <a name="AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfig">AlloydbClusterContinuousBackupConfigEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: AlloydbClusterContinuousBackupConfigEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfig">AlloydbClusterContinuousBackupConfigEncryptionConfig</a>

---


### AlloydbClusterContinuousBackupConfigOutputReference <a name="AlloydbClusterContinuousBackupConfigOutputReference" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.putEncryptionConfig">put_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.resetEncryptionConfig">reset_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.resetRecoveryWindowDays">reset_recovery_window_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption_config` <a name="put_encryption_config" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.putEncryptionConfig"></a>

```python
def put_encryption_config(
  kms_key_name: str = None
) -> None
```

###### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.putEncryptionConfig.parameter.kmsKeyName"></a>

- *Type:* str

The fully-qualified resource name of the KMS key.

Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/alloydb_cluster#kms_key_name AlloydbCluster#kms_key_name}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_encryption_config` <a name="reset_encryption_config" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.resetEncryptionConfig"></a>

```python
def reset_encryption_config() -> None
```

##### `reset_recovery_window_days` <a name="reset_recovery_window_days" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.resetRecoveryWindowDays"></a>

```python
def reset_recovery_window_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference">AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.property.encryptionConfigInput">encryption_config_input</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfig">AlloydbClusterContinuousBackupConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.property.recoveryWindowDaysInput">recovery_window_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.property.recoveryWindowDays">recovery_window_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfig">AlloydbClusterContinuousBackupConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_config`<sup>Required</sup> <a name="encryption_config" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.property.encryptionConfig"></a>

```python
encryption_config: AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference">AlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_config_input`<sup>Optional</sup> <a name="encryption_config_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.property.encryptionConfigInput"></a>

```python
encryption_config_input: AlloydbClusterContinuousBackupConfigEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigEncryptionConfig">AlloydbClusterContinuousBackupConfigEncryptionConfig</a>

---

##### `recovery_window_days_input`<sup>Optional</sup> <a name="recovery_window_days_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.property.recoveryWindowDaysInput"></a>

```python
recovery_window_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `recovery_window_days`<sup>Required</sup> <a name="recovery_window_days" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.property.recoveryWindowDays"></a>

```python
recovery_window_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfigOutputReference.property.internalValue"></a>

```python
internal_value: AlloydbClusterContinuousBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupConfig">AlloydbClusterContinuousBackupConfig</a>

---


### AlloydbClusterContinuousBackupInfoEncryptionInfoList <a name="AlloydbClusterContinuousBackupInfoEncryptionInfoList" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference <a name="AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.kmsKeyVersions">kms_key_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfo">AlloydbClusterContinuousBackupInfoEncryptionInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `kms_key_versions`<sup>Required</sup> <a name="kms_key_versions" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.kmsKeyVersions"></a>

```python
kms_key_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.internalValue"></a>

```python
internal_value: AlloydbClusterContinuousBackupInfoEncryptionInfo
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfo">AlloydbClusterContinuousBackupInfoEncryptionInfo</a>

---


### AlloydbClusterContinuousBackupInfoList <a name="AlloydbClusterContinuousBackupInfoList" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterContinuousBackupInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AlloydbClusterContinuousBackupInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AlloydbClusterContinuousBackupInfoOutputReference <a name="AlloydbClusterContinuousBackupInfoOutputReference" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.property.earliestRestorableTime">earliest_restorable_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.property.enabledTime">enabled_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.property.encryptionInfo">encryption_info</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList">AlloydbClusterContinuousBackupInfoEncryptionInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.property.schedule">schedule</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfo">AlloydbClusterContinuousBackupInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `earliest_restorable_time`<sup>Required</sup> <a name="earliest_restorable_time" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.property.earliestRestorableTime"></a>

```python
earliest_restorable_time: str
```

- *Type:* str

---

##### `enabled_time`<sup>Required</sup> <a name="enabled_time" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.property.enabledTime"></a>

```python
enabled_time: str
```

- *Type:* str

---

##### `encryption_info`<sup>Required</sup> <a name="encryption_info" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.property.encryptionInfo"></a>

```python
encryption_info: AlloydbClusterContinuousBackupInfoEncryptionInfoList
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoEncryptionInfoList">AlloydbClusterContinuousBackupInfoEncryptionInfoList</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.property.schedule"></a>

```python
schedule: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfoOutputReference.property.internalValue"></a>

```python
internal_value: AlloydbClusterContinuousBackupInfo
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterContinuousBackupInfo">AlloydbClusterContinuousBackupInfo</a>

---


### AlloydbClusterEncryptionConfigOutputReference <a name="AlloydbClusterEncryptionConfigOutputReference" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfig">AlloydbClusterEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: AlloydbClusterEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionConfig">AlloydbClusterEncryptionConfig</a>

---


### AlloydbClusterEncryptionInfoList <a name="AlloydbClusterEncryptionInfoList" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterEncryptionInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AlloydbClusterEncryptionInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AlloydbClusterEncryptionInfoOutputReference <a name="AlloydbClusterEncryptionInfoOutputReference" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterEncryptionInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.property.kmsKeyVersions">kms_key_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfo">AlloydbClusterEncryptionInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `kms_key_versions`<sup>Required</sup> <a name="kms_key_versions" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.property.kmsKeyVersions"></a>

```python
kms_key_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfoOutputReference.property.internalValue"></a>

```python
internal_value: AlloydbClusterEncryptionInfo
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterEncryptionInfo">AlloydbClusterEncryptionInfo</a>

---


### AlloydbClusterInitialUserOutputReference <a name="AlloydbClusterInitialUserOutputReference" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterInitialUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.resetUser">reset_user</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_user` <a name="reset_user" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.resetUser"></a>

```python
def reset_user() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUser">AlloydbClusterInitialUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUserOutputReference.property.internalValue"></a>

```python
internal_value: AlloydbClusterInitialUser
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterInitialUser">AlloydbClusterInitialUser</a>

---


### AlloydbClusterMigrationSourceList <a name="AlloydbClusterMigrationSourceList" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterMigrationSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AlloydbClusterMigrationSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AlloydbClusterMigrationSourceOutputReference <a name="AlloydbClusterMigrationSourceOutputReference" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterMigrationSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.property.hostPort">host_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.property.referenceId">reference_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSource">AlloydbClusterMigrationSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_port`<sup>Required</sup> <a name="host_port" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.property.hostPort"></a>

```python
host_port: str
```

- *Type:* str

---

##### `reference_id`<sup>Required</sup> <a name="reference_id" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.property.referenceId"></a>

```python
reference_id: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSourceOutputReference.property.internalValue"></a>

```python
internal_value: AlloydbClusterMigrationSource
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterMigrationSource">AlloydbClusterMigrationSource</a>

---


### AlloydbClusterNetworkConfigOutputReference <a name="AlloydbClusterNetworkConfigOutputReference" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.resetAllocatedIpRange">reset_allocated_ip_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.resetNetwork">reset_network</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allocated_ip_range` <a name="reset_allocated_ip_range" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.resetAllocatedIpRange"></a>

```python
def reset_allocated_ip_range() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.property.allocatedIpRangeInput">allocated_ip_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.property.allocatedIpRange">allocated_ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfig">AlloydbClusterNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocated_ip_range_input`<sup>Optional</sup> <a name="allocated_ip_range_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.property.allocatedIpRangeInput"></a>

```python
allocated_ip_range_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `allocated_ip_range`<sup>Required</sup> <a name="allocated_ip_range" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.property.allocatedIpRange"></a>

```python
allocated_ip_range: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: AlloydbClusterNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterNetworkConfig">AlloydbClusterNetworkConfig</a>

---


### AlloydbClusterRestoreBackupSourceOutputReference <a name="AlloydbClusterRestoreBackupSourceOutputReference" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.property.backupNameInput">backup_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.property.backupName">backup_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSource">AlloydbClusterRestoreBackupSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_name_input`<sup>Optional</sup> <a name="backup_name_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.property.backupNameInput"></a>

```python
backup_name_input: str
```

- *Type:* str

---

##### `backup_name`<sup>Required</sup> <a name="backup_name" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.property.backupName"></a>

```python
backup_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSourceOutputReference.property.internalValue"></a>

```python
internal_value: AlloydbClusterRestoreBackupSource
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreBackupSource">AlloydbClusterRestoreBackupSource</a>

---


### AlloydbClusterRestoreContinuousBackupSourceOutputReference <a name="AlloydbClusterRestoreContinuousBackupSourceOutputReference" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.property.pointInTimeInput">point_in_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.property.pointInTime">point_in_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSource">AlloydbClusterRestoreContinuousBackupSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `point_in_time_input`<sup>Optional</sup> <a name="point_in_time_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.property.pointInTimeInput"></a>

```python
point_in_time_input: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `point_in_time`<sup>Required</sup> <a name="point_in_time" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.property.pointInTime"></a>

```python
point_in_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSourceOutputReference.property.internalValue"></a>

```python
internal_value: AlloydbClusterRestoreContinuousBackupSource
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterRestoreContinuousBackupSource">AlloydbClusterRestoreContinuousBackupSource</a>

---


### AlloydbClusterSecondaryConfigOutputReference <a name="AlloydbClusterSecondaryConfigOutputReference" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterSecondaryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.property.primaryClusterNameInput">primary_cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.property.primaryClusterName">primary_cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfig">AlloydbClusterSecondaryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_cluster_name_input`<sup>Optional</sup> <a name="primary_cluster_name_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.property.primaryClusterNameInput"></a>

```python
primary_cluster_name_input: str
```

- *Type:* str

---

##### `primary_cluster_name`<sup>Required</sup> <a name="primary_cluster_name" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.property.primaryClusterName"></a>

```python
primary_cluster_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfigOutputReference.property.internalValue"></a>

```python
internal_value: AlloydbClusterSecondaryConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterSecondaryConfig">AlloydbClusterSecondaryConfig</a>

---


### AlloydbClusterTimeoutsOutputReference <a name="AlloydbClusterTimeoutsOutputReference" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_cluster

alloydbCluster.AlloydbClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeouts">AlloydbClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AlloydbClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.alloydbCluster.AlloydbClusterTimeouts">AlloydbClusterTimeouts</a>]

---



