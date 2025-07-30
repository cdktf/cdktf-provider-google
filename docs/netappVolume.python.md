# `netappVolume` Submodule <a name="`netappVolume` Submodule" id="@cdktf/provider-google.netappVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolume <a name="NetappVolume" id="@cdktf/provider-google.netappVolume.NetappVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume google_netapp_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolume(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  capacity_gib: str,
  location: str,
  name: str,
  protocols: typing.List[str],
  share_name: str,
  storage_pool: str,
  backup_config: NetappVolumeBackupConfig = None,
  deletion_policy: str = None,
  description: str = None,
  export_policy: NetappVolumeExportPolicy = None,
  hybrid_replication_parameters: NetappVolumeHybridReplicationParameters = None,
  id: str = None,
  kerberos_enabled: typing.Union[bool, IResolvable] = None,
  labels: typing.Mapping[str] = None,
  large_capacity: typing.Union[bool, IResolvable] = None,
  multiple_endpoints: typing.Union[bool, IResolvable] = None,
  project: str = None,
  restore_parameters: NetappVolumeRestoreParameters = None,
  restricted_actions: typing.List[str] = None,
  security_style: str = None,
  smb_settings: typing.List[str] = None,
  snapshot_directory: typing.Union[bool, IResolvable] = None,
  snapshot_policy: NetappVolumeSnapshotPolicy = None,
  tiering_policy: NetappVolumeTieringPolicy = None,
  timeouts: NetappVolumeTimeouts = None,
  unix_permissions: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.capacityGib">capacity_gib</a></code> | <code>str</code> | Capacity of the volume (in GiB). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.location">location</a></code> | <code>str</code> | Name of the pool location. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the volume. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.protocols">protocols</a></code> | <code>typing.List[str]</code> | The protocol of the volume. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.shareName">share_name</a></code> | <code>str</code> | Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.storagePool">storage_pool</a></code> | <code>str</code> | Name of the storage pool to create the volume in. Pool needs enough spare capacity to accommodate the volume. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.backupConfig">backup_config</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a></code> | backup_config block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Policy to determine if the volume should be deleted forcefully. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.exportPolicy">export_policy</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a></code> | export_policy block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.hybridReplicationParameters">hybrid_replication_parameters</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters">NetappVolumeHybridReplicationParameters</a></code> | hybrid_replication_parameters block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#id NetappVolume#id}. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.kerberosEnabled">kerberos_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.largeCapacity">large_capacity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. Flag indicating if the volume will be a large capacity volume or a regular volume. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.multipleEndpoints">multiple_endpoints</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#project NetappVolume#project}. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.restoreParameters">restore_parameters</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a></code> | restore_parameters block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.restrictedActions">restricted_actions</a></code> | <code>typing.List[str]</code> | List of actions that are restricted on this volume. Possible values: ["DELETE"]. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.securityStyle">security_style</a></code> | <code>str</code> | Security Style of the Volume. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.smbSettings">smb_settings</a></code> | <code>typing.List[str]</code> | Settings for volumes with SMB access. Possible values: ["ENCRYPT_DATA", "BROWSABLE", "CHANGE_NOTIFY", "NON_BROWSABLE", "OPLOCKS", "SHOW_SNAPSHOT", "SHOW_PREVIOUS_VERSIONS", "ACCESS_BASED_ENUMERATION", "CONTINUOUSLY_AVAILABLE"]. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.snapshotDirectory">snapshot_directory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.snapshotPolicy">snapshot_policy</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a></code> | snapshot_policy block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.tieringPolicy">tiering_policy</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy">NetappVolumeTieringPolicy</a></code> | tiering_policy block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.unixPermissions">unix_permissions</a></code> | <code>str</code> | Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capacity_gib`<sup>Required</sup> <a name="capacity_gib" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.capacityGib"></a>

- *Type:* str

Capacity of the volume (in GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#capacity_gib NetappVolume#capacity_gib}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.location"></a>

- *Type:* str

Name of the pool location.

Usually a region name, expect for some STANDARD service level pools which require a zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#location NetappVolume#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.name"></a>

- *Type:* str

The name of the volume. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#name NetappVolume#name}

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.protocols"></a>

- *Type:* typing.List[str]

The protocol of the volume.

Allowed combinations are '['NFSV3']', '['NFSV4']', '['SMB']', '['NFSV3', 'NFSV4']', '['SMB', 'NFSV3']' and '['SMB', 'NFSV4']'. Possible values: ["NFSV3", "NFSV4", "SMB"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#protocols NetappVolume#protocols}

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.shareName"></a>

- *Type:* str

Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#share_name NetappVolume#share_name}

---

##### `storage_pool`<sup>Required</sup> <a name="storage_pool" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.storagePool"></a>

- *Type:* str

Name of the storage pool to create the volume in. Pool needs enough spare capacity to accommodate the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#storage_pool NetappVolume#storage_pool}

---

##### `backup_config`<sup>Optional</sup> <a name="backup_config" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.backupConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a>

backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#backup_config NetappVolume#backup_config}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Policy to determine if the volume should be deleted forcefully.

Volumes may have nested snapshot resources. Deleting such a volume will fail.
Setting this parameter to FORCE will delete volumes including nested snapshots.
Possible values: DEFAULT, FORCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#deletion_policy NetappVolume#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#description NetappVolume#description}

---

##### `export_policy`<sup>Optional</sup> <a name="export_policy" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.exportPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a>

export_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#export_policy NetappVolume#export_policy}

---

##### `hybrid_replication_parameters`<sup>Optional</sup> <a name="hybrid_replication_parameters" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.hybridReplicationParameters"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters">NetappVolumeHybridReplicationParameters</a>

hybrid_replication_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#hybrid_replication_parameters NetappVolume#hybrid_replication_parameters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#id NetappVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kerberos_enabled`<sup>Optional</sup> <a name="kerberos_enabled" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.kerberosEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#kerberos_enabled NetappVolume#kerberos_enabled}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#labels NetappVolume#labels}

---

##### `large_capacity`<sup>Optional</sup> <a name="large_capacity" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.largeCapacity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Flag indicating if the volume will be a large capacity volume or a regular volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#large_capacity NetappVolume#large_capacity}

---

##### `multiple_endpoints`<sup>Optional</sup> <a name="multiple_endpoints" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.multipleEndpoints"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Flag indicating if the volume will have an IP address per node for volumes supporting multiple IP endpoints.
Only the volume with largeCapacity will be allowed to have multiple endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#multiple_endpoints NetappVolume#multiple_endpoints}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#project NetappVolume#project}.

---

##### `restore_parameters`<sup>Optional</sup> <a name="restore_parameters" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.restoreParameters"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a>

restore_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#restore_parameters NetappVolume#restore_parameters}

---

##### `restricted_actions`<sup>Optional</sup> <a name="restricted_actions" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.restrictedActions"></a>

- *Type:* typing.List[str]

List of actions that are restricted on this volume. Possible values: ["DELETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#restricted_actions NetappVolume#restricted_actions}

---

##### `security_style`<sup>Optional</sup> <a name="security_style" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.securityStyle"></a>

- *Type:* str

Security Style of the Volume.

Use UNIX to use UNIX or NFSV4 ACLs for file permissions.
Use NTFS to use NTFS ACLs for file permissions. Can only be set for volumes which use SMB together with NFS as protocol. Possible values: ["NTFS", "UNIX"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#security_style NetappVolume#security_style}

---

##### `smb_settings`<sup>Optional</sup> <a name="smb_settings" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.smbSettings"></a>

- *Type:* typing.List[str]

Settings for volumes with SMB access. Possible values: ["ENCRYPT_DATA", "BROWSABLE", "CHANGE_NOTIFY", "NON_BROWSABLE", "OPLOCKS", "SHOW_SNAPSHOT", "SHOW_PREVIOUS_VERSIONS", "ACCESS_BASED_ENUMERATION", "CONTINUOUSLY_AVAILABLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#smb_settings NetappVolume#smb_settings}

---

##### `snapshot_directory`<sup>Optional</sup> <a name="snapshot_directory" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.snapshotDirectory"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#snapshot_directory NetappVolume#snapshot_directory}

---

##### `snapshot_policy`<sup>Optional</sup> <a name="snapshot_policy" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.snapshotPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a>

snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#snapshot_policy NetappVolume#snapshot_policy}

---

##### `tiering_policy`<sup>Optional</sup> <a name="tiering_policy" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.tieringPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy">NetappVolumeTieringPolicy</a>

tiering_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#tiering_policy NetappVolume#tiering_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#timeouts NetappVolume#timeouts}

---

##### `unix_permissions`<sup>Optional</sup> <a name="unix_permissions" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.unixPermissions"></a>

- *Type:* str

Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#unix_permissions NetappVolume#unix_permissions}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.putBackupConfig">put_backup_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.putExportPolicy">put_export_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.putHybridReplicationParameters">put_hybrid_replication_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.putRestoreParameters">put_restore_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.putSnapshotPolicy">put_snapshot_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.putTieringPolicy">put_tiering_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetBackupConfig">reset_backup_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetExportPolicy">reset_export_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetHybridReplicationParameters">reset_hybrid_replication_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetKerberosEnabled">reset_kerberos_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetLargeCapacity">reset_large_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetMultipleEndpoints">reset_multiple_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetRestoreParameters">reset_restore_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetRestrictedActions">reset_restricted_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetSecurityStyle">reset_security_style</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetSmbSettings">reset_smb_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetSnapshotDirectory">reset_snapshot_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetSnapshotPolicy">reset_snapshot_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetTieringPolicy">reset_tiering_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetUnixPermissions">reset_unix_permissions</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolume.NetappVolume.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.netappVolume.NetappVolume.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.netappVolume.NetappVolume.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolume.NetappVolume.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.netappVolume.NetappVolume.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.netappVolume.NetappVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.netappVolume.NetappVolume.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.netappVolume.NetappVolume.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.netappVolume.NetappVolume.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.netappVolume.NetappVolume.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.netappVolume.NetappVolume.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.netappVolume.NetappVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.netappVolume.NetappVolume.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.netappVolume.NetappVolume.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolume.NetappVolume.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolume.NetappVolume.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappVolume.NetappVolume.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.netappVolume.NetappVolume.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolume.NetappVolume.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.netappVolume.NetappVolume.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.netappVolume.NetappVolume.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.netappVolume.NetappVolume.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.netappVolume.NetappVolume.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolume.NetappVolume.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backup_config` <a name="put_backup_config" id="@cdktf/provider-google.netappVolume.NetappVolume.putBackupConfig"></a>

```python
def put_backup_config(
  backup_policies: typing.List[str] = None,
  backup_vault: str = None,
  scheduled_backup_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `backup_policies`<sup>Optional</sup> <a name="backup_policies" id="@cdktf/provider-google.netappVolume.NetappVolume.putBackupConfig.parameter.backupPolicies"></a>

- *Type:* typing.List[str]

Specify a single backup policy ID for scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupPolicies/{{backupPolicyName}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#backup_policies NetappVolume#backup_policies}

---

###### `backup_vault`<sup>Optional</sup> <a name="backup_vault" id="@cdktf/provider-google.netappVolume.NetappVolume.putBackupConfig.parameter.backupVault"></a>

- *Type:* str

ID of the backup vault to use. A backup vault is reqired to create manual or scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupVaults/{{backupVaultName}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#backup_vault NetappVolume#backup_vault}

---

###### `scheduled_backup_enabled`<sup>Optional</sup> <a name="scheduled_backup_enabled" id="@cdktf/provider-google.netappVolume.NetappVolume.putBackupConfig.parameter.scheduledBackupEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, scheduled backup is enabled on the volume. Omit if no backup_policy is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#scheduled_backup_enabled NetappVolume#scheduled_backup_enabled}

---

##### `put_export_policy` <a name="put_export_policy" id="@cdktf/provider-google.netappVolume.NetappVolume.putExportPolicy"></a>

```python
def put_export_policy(
  rules: typing.Union[IResolvable, typing.List[NetappVolumeExportPolicyRules]]
) -> None
```

###### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.netappVolume.NetappVolume.putExportPolicy.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#rules NetappVolume#rules}

---

##### `put_hybrid_replication_parameters` <a name="put_hybrid_replication_parameters" id="@cdktf/provider-google.netappVolume.NetappVolume.putHybridReplicationParameters"></a>

```python
def put_hybrid_replication_parameters(
  cluster_location: str = None,
  description: str = None,
  labels: typing.Mapping[str] = None,
  peer_cluster_name: str = None,
  peer_ip_addresses: str = None,
  peer_svm_name: str = None,
  peer_volume_name: str = None,
  replication: str = None
) -> None
```

###### `cluster_location`<sup>Optional</sup> <a name="cluster_location" id="@cdktf/provider-google.netappVolume.NetappVolume.putHybridReplicationParameters.parameter.clusterLocation"></a>

- *Type:* str

Optional.

Name of source cluster location associated with the Hybrid replication. This is a free-form field for the display purpose only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#cluster_location NetappVolume#cluster_location}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappVolume.NetappVolume.putHybridReplicationParameters.parameter.description"></a>

- *Type:* str

Optional. Description of the replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#description NetappVolume#description}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.netappVolume.NetappVolume.putHybridReplicationParameters.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional.

Labels to be added to the replication as the key value pairs.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#labels NetappVolume#labels}

---

###### `peer_cluster_name`<sup>Optional</sup> <a name="peer_cluster_name" id="@cdktf/provider-google.netappVolume.NetappVolume.putHybridReplicationParameters.parameter.peerClusterName"></a>

- *Type:* str

Required. Name of the user's local source cluster to be peered with the destination cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#peer_cluster_name NetappVolume#peer_cluster_name}

---

###### `peer_ip_addresses`<sup>Optional</sup> <a name="peer_ip_addresses" id="@cdktf/provider-google.netappVolume.NetappVolume.putHybridReplicationParameters.parameter.peerIpAddresses"></a>

- *Type:* str

Required. List of node ip addresses to be peered with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#peer_ip_addresses NetappVolume#peer_ip_addresses}

---

###### `peer_svm_name`<sup>Optional</sup> <a name="peer_svm_name" id="@cdktf/provider-google.netappVolume.NetappVolume.putHybridReplicationParameters.parameter.peerSvmName"></a>

- *Type:* str

Required. Name of the user's local source vserver svm to be peered with the destination vserver svm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#peer_svm_name NetappVolume#peer_svm_name}

---

###### `peer_volume_name`<sup>Optional</sup> <a name="peer_volume_name" id="@cdktf/provider-google.netappVolume.NetappVolume.putHybridReplicationParameters.parameter.peerVolumeName"></a>

- *Type:* str

Required. Name of the user's local source volume to be peered with the destination volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#peer_volume_name NetappVolume#peer_volume_name}

---

###### `replication`<sup>Optional</sup> <a name="replication" id="@cdktf/provider-google.netappVolume.NetappVolume.putHybridReplicationParameters.parameter.replication"></a>

- *Type:* str

Required. Desired name for the replication of this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#replication NetappVolume#replication}

---

##### `put_restore_parameters` <a name="put_restore_parameters" id="@cdktf/provider-google.netappVolume.NetappVolume.putRestoreParameters"></a>

```python
def put_restore_parameters(
  source_backup: str = None,
  source_snapshot: str = None
) -> None
```

###### `source_backup`<sup>Optional</sup> <a name="source_backup" id="@cdktf/provider-google.netappVolume.NetappVolume.putRestoreParameters.parameter.sourceBackup"></a>

- *Type:* str

Full name of the backup to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/backupVaults/{{backupVaultId}}/backups/{{backup}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#source_backup NetappVolume#source_backup}

---

###### `source_snapshot`<sup>Optional</sup> <a name="source_snapshot" id="@cdktf/provider-google.netappVolume.NetappVolume.putRestoreParameters.parameter.sourceSnapshot"></a>

- *Type:* str

Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/volumes/{{volume}}/snapshots/{{snapshot}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#source_snapshot NetappVolume#source_snapshot}

---

##### `put_snapshot_policy` <a name="put_snapshot_policy" id="@cdktf/provider-google.netappVolume.NetappVolume.putSnapshotPolicy"></a>

```python
def put_snapshot_policy(
  daily_schedule: NetappVolumeSnapshotPolicyDailySchedule = None,
  enabled: typing.Union[bool, IResolvable] = None,
  hourly_schedule: NetappVolumeSnapshotPolicyHourlySchedule = None,
  monthly_schedule: NetappVolumeSnapshotPolicyMonthlySchedule = None,
  weekly_schedule: NetappVolumeSnapshotPolicyWeeklySchedule = None
) -> None
```

###### `daily_schedule`<sup>Optional</sup> <a name="daily_schedule" id="@cdktf/provider-google.netappVolume.NetappVolume.putSnapshotPolicy.parameter.dailySchedule"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a>

daily_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#daily_schedule NetappVolume#daily_schedule}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.netappVolume.NetappVolume.putSnapshotPolicy.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables automated snapshot creation according to defined schedule.

Default is false.
To disable automatic snapshot creation you have to remove the whole snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#enabled NetappVolume#enabled}

---

###### `hourly_schedule`<sup>Optional</sup> <a name="hourly_schedule" id="@cdktf/provider-google.netappVolume.NetappVolume.putSnapshotPolicy.parameter.hourlySchedule"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a>

hourly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#hourly_schedule NetappVolume#hourly_schedule}

---

###### `monthly_schedule`<sup>Optional</sup> <a name="monthly_schedule" id="@cdktf/provider-google.netappVolume.NetappVolume.putSnapshotPolicy.parameter.monthlySchedule"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a>

monthly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#monthly_schedule NetappVolume#monthly_schedule}

---

###### `weekly_schedule`<sup>Optional</sup> <a name="weekly_schedule" id="@cdktf/provider-google.netappVolume.NetappVolume.putSnapshotPolicy.parameter.weeklySchedule"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#weekly_schedule NetappVolume#weekly_schedule}

---

##### `put_tiering_policy` <a name="put_tiering_policy" id="@cdktf/provider-google.netappVolume.NetappVolume.putTieringPolicy"></a>

```python
def put_tiering_policy(
  cooling_threshold_days: typing.Union[int, float] = None,
  tier_action: str = None
) -> None
```

###### `cooling_threshold_days`<sup>Optional</sup> <a name="cooling_threshold_days" id="@cdktf/provider-google.netappVolume.NetappVolume.putTieringPolicy.parameter.coolingThresholdDays"></a>

- *Type:* typing.Union[int, float]

Optional.

Time in days to mark the volume's data block as cold and make it eligible for tiering, can be range from 2-183.
Default is 31.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#cooling_threshold_days NetappVolume#cooling_threshold_days}

---

###### `tier_action`<sup>Optional</sup> <a name="tier_action" id="@cdktf/provider-google.netappVolume.NetappVolume.putTieringPolicy.parameter.tierAction"></a>

- *Type:* str

Optional.

Flag indicating if the volume has tiering policy enable/pause. Default is PAUSED. Default value: "PAUSED" Possible values: ["ENABLED", "PAUSED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#tier_action NetappVolume#tier_action}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.netappVolume.NetappVolume.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.netappVolume.NetappVolume.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#create NetappVolume#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.netappVolume.NetappVolume.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#delete NetappVolume#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.netappVolume.NetappVolume.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#update NetappVolume#update}.

---

##### `reset_backup_config` <a name="reset_backup_config" id="@cdktf/provider-google.netappVolume.NetappVolume.resetBackupConfig"></a>

```python
def reset_backup_config() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktf/provider-google.netappVolume.NetappVolume.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.netappVolume.NetappVolume.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_export_policy` <a name="reset_export_policy" id="@cdktf/provider-google.netappVolume.NetappVolume.resetExportPolicy"></a>

```python
def reset_export_policy() -> None
```

##### `reset_hybrid_replication_parameters` <a name="reset_hybrid_replication_parameters" id="@cdktf/provider-google.netappVolume.NetappVolume.resetHybridReplicationParameters"></a>

```python
def reset_hybrid_replication_parameters() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.netappVolume.NetappVolume.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kerberos_enabled` <a name="reset_kerberos_enabled" id="@cdktf/provider-google.netappVolume.NetappVolume.resetKerberosEnabled"></a>

```python
def reset_kerberos_enabled() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.netappVolume.NetappVolume.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_large_capacity` <a name="reset_large_capacity" id="@cdktf/provider-google.netappVolume.NetappVolume.resetLargeCapacity"></a>

```python
def reset_large_capacity() -> None
```

##### `reset_multiple_endpoints` <a name="reset_multiple_endpoints" id="@cdktf/provider-google.netappVolume.NetappVolume.resetMultipleEndpoints"></a>

```python
def reset_multiple_endpoints() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.netappVolume.NetappVolume.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_restore_parameters` <a name="reset_restore_parameters" id="@cdktf/provider-google.netappVolume.NetappVolume.resetRestoreParameters"></a>

```python
def reset_restore_parameters() -> None
```

##### `reset_restricted_actions` <a name="reset_restricted_actions" id="@cdktf/provider-google.netappVolume.NetappVolume.resetRestrictedActions"></a>

```python
def reset_restricted_actions() -> None
```

##### `reset_security_style` <a name="reset_security_style" id="@cdktf/provider-google.netappVolume.NetappVolume.resetSecurityStyle"></a>

```python
def reset_security_style() -> None
```

##### `reset_smb_settings` <a name="reset_smb_settings" id="@cdktf/provider-google.netappVolume.NetappVolume.resetSmbSettings"></a>

```python
def reset_smb_settings() -> None
```

##### `reset_snapshot_directory` <a name="reset_snapshot_directory" id="@cdktf/provider-google.netappVolume.NetappVolume.resetSnapshotDirectory"></a>

```python
def reset_snapshot_directory() -> None
```

##### `reset_snapshot_policy` <a name="reset_snapshot_policy" id="@cdktf/provider-google.netappVolume.NetappVolume.resetSnapshotPolicy"></a>

```python
def reset_snapshot_policy() -> None
```

##### `reset_tiering_policy` <a name="reset_tiering_policy" id="@cdktf/provider-google.netappVolume.NetappVolume.resetTieringPolicy"></a>

```python
def reset_tiering_policy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.netappVolume.NetappVolume.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_unix_permissions` <a name="reset_unix_permissions" id="@cdktf/provider-google.netappVolume.NetappVolume.resetUnixPermissions"></a>

```python
def reset_unix_permissions() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetappVolume resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.netappVolume.NetappVolume.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolume.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolume.NetappVolume.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.netappVolume.NetappVolume.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolume.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolume.NetappVolume.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.netappVolume.NetappVolume.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolume.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolume.NetappVolume.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.netappVolume.NetappVolume.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolume.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetappVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappVolume.NetappVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.netappVolume.NetappVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetappVolume to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.netappVolume.NetappVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetappVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolume.NetappVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetappVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.activeDirectory">active_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.backupConfig">backup_config</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference">NetappVolumeBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.coldTierSizeGib">cold_tier_size_gib</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.exportPolicy">export_policy</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference">NetappVolumeExportPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.hasReplication">has_replication</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.hybridReplicationParameters">hybrid_replication_parameters</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference">NetappVolumeHybridReplicationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.kmsConfig">kms_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.ldapEnabled">ldap_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.mountOptions">mount_options</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList">NetappVolumeMountOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.psaRange">psa_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.replicaZone">replica_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.restoreParameters">restore_parameters</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference">NetappVolumeRestoreParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.serviceLevel">service_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotPolicy">snapshot_policy</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference">NetappVolumeSnapshotPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.stateDetails">state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.tieringPolicy">tiering_policy</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference">NetappVolumeTieringPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference">NetappVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.usedGib">used_gib</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.backupConfigInput">backup_config_input</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.capacityGibInput">capacity_gib_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.exportPolicyInput">export_policy_input</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.hybridReplicationParametersInput">hybrid_replication_parameters_input</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters">NetappVolumeHybridReplicationParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.kerberosEnabledInput">kerberos_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.largeCapacityInput">large_capacity_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.multipleEndpointsInput">multiple_endpoints_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.protocolsInput">protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.restoreParametersInput">restore_parameters_input</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.restrictedActionsInput">restricted_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.securityStyleInput">security_style_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.shareNameInput">share_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.smbSettingsInput">smb_settings_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotDirectoryInput">snapshot_directory_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotPolicyInput">snapshot_policy_input</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.storagePoolInput">storage_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.tieringPolicyInput">tiering_policy_input</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy">NetappVolumeTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.unixPermissionsInput">unix_permissions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.capacityGib">capacity_gib</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.kerberosEnabled">kerberos_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.largeCapacity">large_capacity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.multipleEndpoints">multiple_endpoints</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.restrictedActions">restricted_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.securityStyle">security_style</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.shareName">share_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.smbSettings">smb_settings</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotDirectory">snapshot_directory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.storagePool">storage_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.unixPermissions">unix_permissions</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.netappVolume.NetappVolume.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.netappVolume.NetappVolume.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolume.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.netappVolume.NetappVolume.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.netappVolume.NetappVolume.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.netappVolume.NetappVolume.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.netappVolume.NetappVolume.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappVolume.NetappVolume.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappVolume.NetappVolume.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.netappVolume.NetappVolume.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.netappVolume.NetappVolume.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappVolume.NetappVolume.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolume.NetappVolume.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappVolume.NetappVolume.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active_directory`<sup>Required</sup> <a name="active_directory" id="@cdktf/provider-google.netappVolume.NetappVolume.property.activeDirectory"></a>

```python
active_directory: str
```

- *Type:* str

---

##### `backup_config`<sup>Required</sup> <a name="backup_config" id="@cdktf/provider-google.netappVolume.NetappVolume.property.backupConfig"></a>

```python
backup_config: NetappVolumeBackupConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference">NetappVolumeBackupConfigOutputReference</a>

---

##### `cold_tier_size_gib`<sup>Required</sup> <a name="cold_tier_size_gib" id="@cdktf/provider-google.netappVolume.NetappVolume.property.coldTierSizeGib"></a>

```python
cold_tier_size_gib: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.netappVolume.NetappVolume.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.netappVolume.NetappVolume.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktf/provider-google.netappVolume.NetappVolume.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `export_policy`<sup>Required</sup> <a name="export_policy" id="@cdktf/provider-google.netappVolume.NetappVolume.property.exportPolicy"></a>

```python
export_policy: NetappVolumeExportPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference">NetappVolumeExportPolicyOutputReference</a>

---

##### `has_replication`<sup>Required</sup> <a name="has_replication" id="@cdktf/provider-google.netappVolume.NetappVolume.property.hasReplication"></a>

```python
has_replication: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `hybrid_replication_parameters`<sup>Required</sup> <a name="hybrid_replication_parameters" id="@cdktf/provider-google.netappVolume.NetappVolume.property.hybridReplicationParameters"></a>

```python
hybrid_replication_parameters: NetappVolumeHybridReplicationParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference">NetappVolumeHybridReplicationParametersOutputReference</a>

---

##### `kms_config`<sup>Required</sup> <a name="kms_config" id="@cdktf/provider-google.netappVolume.NetappVolume.property.kmsConfig"></a>

```python
kms_config: str
```

- *Type:* str

---

##### `ldap_enabled`<sup>Required</sup> <a name="ldap_enabled" id="@cdktf/provider-google.netappVolume.NetappVolume.property.ldapEnabled"></a>

```python
ldap_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktf/provider-google.netappVolume.NetappVolume.property.mountOptions"></a>

```python
mount_options: NetappVolumeMountOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList">NetappVolumeMountOptionsList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.netappVolume.NetappVolume.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `psa_range`<sup>Required</sup> <a name="psa_range" id="@cdktf/provider-google.netappVolume.NetappVolume.property.psaRange"></a>

```python
psa_range: str
```

- *Type:* str

---

##### `replica_zone`<sup>Required</sup> <a name="replica_zone" id="@cdktf/provider-google.netappVolume.NetappVolume.property.replicaZone"></a>

```python
replica_zone: str
```

- *Type:* str

---

##### `restore_parameters`<sup>Required</sup> <a name="restore_parameters" id="@cdktf/provider-google.netappVolume.NetappVolume.property.restoreParameters"></a>

```python
restore_parameters: NetappVolumeRestoreParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference">NetappVolumeRestoreParametersOutputReference</a>

---

##### `service_level`<sup>Required</sup> <a name="service_level" id="@cdktf/provider-google.netappVolume.NetappVolume.property.serviceLevel"></a>

```python
service_level: str
```

- *Type:* str

---

##### `snapshot_policy`<sup>Required</sup> <a name="snapshot_policy" id="@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotPolicy"></a>

```python
snapshot_policy: NetappVolumeSnapshotPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference">NetappVolumeSnapshotPolicyOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.netappVolume.NetappVolume.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_details`<sup>Required</sup> <a name="state_details" id="@cdktf/provider-google.netappVolume.NetappVolume.property.stateDetails"></a>

```python
state_details: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.netappVolume.NetappVolume.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `tiering_policy`<sup>Required</sup> <a name="tiering_policy" id="@cdktf/provider-google.netappVolume.NetappVolume.property.tieringPolicy"></a>

```python
tiering_policy: NetappVolumeTieringPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference">NetappVolumeTieringPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.netappVolume.NetappVolume.property.timeouts"></a>

```python
timeouts: NetappVolumeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference">NetappVolumeTimeoutsOutputReference</a>

---

##### `used_gib`<sup>Required</sup> <a name="used_gib" id="@cdktf/provider-google.netappVolume.NetappVolume.property.usedGib"></a>

```python
used_gib: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.netappVolume.NetappVolume.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `backup_config_input`<sup>Optional</sup> <a name="backup_config_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.backupConfigInput"></a>

```python
backup_config_input: NetappVolumeBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a>

---

##### `capacity_gib_input`<sup>Optional</sup> <a name="capacity_gib_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.capacityGibInput"></a>

```python
capacity_gib_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `export_policy_input`<sup>Optional</sup> <a name="export_policy_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.exportPolicyInput"></a>

```python
export_policy_input: NetappVolumeExportPolicy
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a>

---

##### `hybrid_replication_parameters_input`<sup>Optional</sup> <a name="hybrid_replication_parameters_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.hybridReplicationParametersInput"></a>

```python
hybrid_replication_parameters_input: NetappVolumeHybridReplicationParameters
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters">NetappVolumeHybridReplicationParameters</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kerberos_enabled_input`<sup>Optional</sup> <a name="kerberos_enabled_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.kerberosEnabledInput"></a>

```python
kerberos_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `large_capacity_input`<sup>Optional</sup> <a name="large_capacity_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.largeCapacityInput"></a>

```python
large_capacity_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `multiple_endpoints_input`<sup>Optional</sup> <a name="multiple_endpoints_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.multipleEndpointsInput"></a>

```python
multiple_endpoints_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `protocols_input`<sup>Optional</sup> <a name="protocols_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.protocolsInput"></a>

```python
protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restore_parameters_input`<sup>Optional</sup> <a name="restore_parameters_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.restoreParametersInput"></a>

```python
restore_parameters_input: NetappVolumeRestoreParameters
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a>

---

##### `restricted_actions_input`<sup>Optional</sup> <a name="restricted_actions_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.restrictedActionsInput"></a>

```python
restricted_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_style_input`<sup>Optional</sup> <a name="security_style_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.securityStyleInput"></a>

```python
security_style_input: str
```

- *Type:* str

---

##### `share_name_input`<sup>Optional</sup> <a name="share_name_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.shareNameInput"></a>

```python
share_name_input: str
```

- *Type:* str

---

##### `smb_settings_input`<sup>Optional</sup> <a name="smb_settings_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.smbSettingsInput"></a>

```python
smb_settings_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_directory_input`<sup>Optional</sup> <a name="snapshot_directory_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotDirectoryInput"></a>

```python
snapshot_directory_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `snapshot_policy_input`<sup>Optional</sup> <a name="snapshot_policy_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotPolicyInput"></a>

```python
snapshot_policy_input: NetappVolumeSnapshotPolicy
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a>

---

##### `storage_pool_input`<sup>Optional</sup> <a name="storage_pool_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.storagePoolInput"></a>

```python
storage_pool_input: str
```

- *Type:* str

---

##### `tiering_policy_input`<sup>Optional</sup> <a name="tiering_policy_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.tieringPolicyInput"></a>

```python
tiering_policy_input: NetappVolumeTieringPolicy
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy">NetappVolumeTieringPolicy</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetappVolumeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>]

---

##### `unix_permissions_input`<sup>Optional</sup> <a name="unix_permissions_input" id="@cdktf/provider-google.netappVolume.NetappVolume.property.unixPermissionsInput"></a>

```python
unix_permissions_input: str
```

- *Type:* str

---

##### `capacity_gib`<sup>Required</sup> <a name="capacity_gib" id="@cdktf/provider-google.netappVolume.NetappVolume.property.capacityGib"></a>

```python
capacity_gib: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktf/provider-google.netappVolume.NetappVolume.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.netappVolume.NetappVolume.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolume.NetappVolume.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kerberos_enabled`<sup>Required</sup> <a name="kerberos_enabled" id="@cdktf/provider-google.netappVolume.NetappVolume.property.kerberosEnabled"></a>

```python
kerberos_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.netappVolume.NetappVolume.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `large_capacity`<sup>Required</sup> <a name="large_capacity" id="@cdktf/provider-google.netappVolume.NetappVolume.property.largeCapacity"></a>

```python
large_capacity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappVolume.NetappVolume.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `multiple_endpoints`<sup>Required</sup> <a name="multiple_endpoints" id="@cdktf/provider-google.netappVolume.NetappVolume.property.multipleEndpoints"></a>

```python
multiple_endpoints: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappVolume.NetappVolume.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.netappVolume.NetappVolume.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-google.netappVolume.NetappVolume.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restricted_actions`<sup>Required</sup> <a name="restricted_actions" id="@cdktf/provider-google.netappVolume.NetappVolume.property.restrictedActions"></a>

```python
restricted_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_style`<sup>Required</sup> <a name="security_style" id="@cdktf/provider-google.netappVolume.NetappVolume.property.securityStyle"></a>

```python
security_style: str
```

- *Type:* str

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktf/provider-google.netappVolume.NetappVolume.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

---

##### `smb_settings`<sup>Required</sup> <a name="smb_settings" id="@cdktf/provider-google.netappVolume.NetappVolume.property.smbSettings"></a>

```python
smb_settings: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_directory`<sup>Required</sup> <a name="snapshot_directory" id="@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotDirectory"></a>

```python
snapshot_directory: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_pool`<sup>Required</sup> <a name="storage_pool" id="@cdktf/provider-google.netappVolume.NetappVolume.property.storagePool"></a>

```python
storage_pool: str
```

- *Type:* str

---

##### `unix_permissions`<sup>Required</sup> <a name="unix_permissions" id="@cdktf/provider-google.netappVolume.NetappVolume.property.unixPermissions"></a>

```python
unix_permissions: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.netappVolume.NetappVolume.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeBackupConfig <a name="NetappVolumeBackupConfig" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeBackupConfig(
  backup_policies: typing.List[str] = None,
  backup_vault: str = None,
  scheduled_backup_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig.property.backupPolicies">backup_policies</a></code> | <code>typing.List[str]</code> | Specify a single backup policy ID for scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupPolicies/{{backupPolicyName}}'. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig.property.backupVault">backup_vault</a></code> | <code>str</code> | ID of the backup vault to use. A backup vault is reqired to create manual or scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupVaults/{{backupVaultName}}'. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig.property.scheduledBackupEnabled">scheduled_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, scheduled backup is enabled on the volume. Omit if no backup_policy is specified. |

---

##### `backup_policies`<sup>Optional</sup> <a name="backup_policies" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig.property.backupPolicies"></a>

```python
backup_policies: typing.List[str]
```

- *Type:* typing.List[str]

Specify a single backup policy ID for scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupPolicies/{{backupPolicyName}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#backup_policies NetappVolume#backup_policies}

---

##### `backup_vault`<sup>Optional</sup> <a name="backup_vault" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig.property.backupVault"></a>

```python
backup_vault: str
```

- *Type:* str

ID of the backup vault to use. A backup vault is reqired to create manual or scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupVaults/{{backupVaultName}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#backup_vault NetappVolume#backup_vault}

---

##### `scheduled_backup_enabled`<sup>Optional</sup> <a name="scheduled_backup_enabled" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig.property.scheduledBackupEnabled"></a>

```python
scheduled_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, scheduled backup is enabled on the volume. Omit if no backup_policy is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#scheduled_backup_enabled NetappVolume#scheduled_backup_enabled}

---

### NetappVolumeConfig <a name="NetappVolumeConfig" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  capacity_gib: str,
  location: str,
  name: str,
  protocols: typing.List[str],
  share_name: str,
  storage_pool: str,
  backup_config: NetappVolumeBackupConfig = None,
  deletion_policy: str = None,
  description: str = None,
  export_policy: NetappVolumeExportPolicy = None,
  hybrid_replication_parameters: NetappVolumeHybridReplicationParameters = None,
  id: str = None,
  kerberos_enabled: typing.Union[bool, IResolvable] = None,
  labels: typing.Mapping[str] = None,
  large_capacity: typing.Union[bool, IResolvable] = None,
  multiple_endpoints: typing.Union[bool, IResolvable] = None,
  project: str = None,
  restore_parameters: NetappVolumeRestoreParameters = None,
  restricted_actions: typing.List[str] = None,
  security_style: str = None,
  smb_settings: typing.List[str] = None,
  snapshot_directory: typing.Union[bool, IResolvable] = None,
  snapshot_policy: NetappVolumeSnapshotPolicy = None,
  tiering_policy: NetappVolumeTieringPolicy = None,
  timeouts: NetappVolumeTimeouts = None,
  unix_permissions: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.capacityGib">capacity_gib</a></code> | <code>str</code> | Capacity of the volume (in GiB). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.location">location</a></code> | <code>str</code> | Name of the pool location. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.name">name</a></code> | <code>str</code> | The name of the volume. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | The protocol of the volume. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.shareName">share_name</a></code> | <code>str</code> | Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.storagePool">storage_pool</a></code> | <code>str</code> | Name of the storage pool to create the volume in. Pool needs enough spare capacity to accommodate the volume. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.backupConfig">backup_config</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a></code> | backup_config block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Policy to determine if the volume should be deleted forcefully. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.exportPolicy">export_policy</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a></code> | export_policy block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.hybridReplicationParameters">hybrid_replication_parameters</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters">NetappVolumeHybridReplicationParameters</a></code> | hybrid_replication_parameters block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#id NetappVolume#id}. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.kerberosEnabled">kerberos_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.largeCapacity">large_capacity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. Flag indicating if the volume will be a large capacity volume or a regular volume. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.multipleEndpoints">multiple_endpoints</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#project NetappVolume#project}. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.restoreParameters">restore_parameters</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a></code> | restore_parameters block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.restrictedActions">restricted_actions</a></code> | <code>typing.List[str]</code> | List of actions that are restricted on this volume. Possible values: ["DELETE"]. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.securityStyle">security_style</a></code> | <code>str</code> | Security Style of the Volume. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.smbSettings">smb_settings</a></code> | <code>typing.List[str]</code> | Settings for volumes with SMB access. Possible values: ["ENCRYPT_DATA", "BROWSABLE", "CHANGE_NOTIFY", "NON_BROWSABLE", "OPLOCKS", "SHOW_SNAPSHOT", "SHOW_PREVIOUS_VERSIONS", "ACCESS_BASED_ENUMERATION", "CONTINUOUSLY_AVAILABLE"]. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.snapshotDirectory">snapshot_directory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.snapshotPolicy">snapshot_policy</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a></code> | snapshot_policy block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.tieringPolicy">tiering_policy</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy">NetappVolumeTieringPolicy</a></code> | tiering_policy block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.unixPermissions">unix_permissions</a></code> | <code>str</code> | Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capacity_gib`<sup>Required</sup> <a name="capacity_gib" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.capacityGib"></a>

```python
capacity_gib: str
```

- *Type:* str

Capacity of the volume (in GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#capacity_gib NetappVolume#capacity_gib}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Name of the pool location.

Usually a region name, expect for some STANDARD service level pools which require a zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#location NetappVolume#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the volume. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#name NetappVolume#name}

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

The protocol of the volume.

Allowed combinations are '['NFSV3']', '['NFSV4']', '['SMB']', '['NFSV3', 'NFSV4']', '['SMB', 'NFSV3']' and '['SMB', 'NFSV4']'. Possible values: ["NFSV3", "NFSV4", "SMB"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#protocols NetappVolume#protocols}

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#share_name NetappVolume#share_name}

---

##### `storage_pool`<sup>Required</sup> <a name="storage_pool" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.storagePool"></a>

```python
storage_pool: str
```

- *Type:* str

Name of the storage pool to create the volume in. Pool needs enough spare capacity to accommodate the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#storage_pool NetappVolume#storage_pool}

---

##### `backup_config`<sup>Optional</sup> <a name="backup_config" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.backupConfig"></a>

```python
backup_config: NetappVolumeBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a>

backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#backup_config NetappVolume#backup_config}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Policy to determine if the volume should be deleted forcefully.

Volumes may have nested snapshot resources. Deleting such a volume will fail.
Setting this parameter to FORCE will delete volumes including nested snapshots.
Possible values: DEFAULT, FORCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#deletion_policy NetappVolume#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#description NetappVolume#description}

---

##### `export_policy`<sup>Optional</sup> <a name="export_policy" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.exportPolicy"></a>

```python
export_policy: NetappVolumeExportPolicy
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a>

export_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#export_policy NetappVolume#export_policy}

---

##### `hybrid_replication_parameters`<sup>Optional</sup> <a name="hybrid_replication_parameters" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.hybridReplicationParameters"></a>

```python
hybrid_replication_parameters: NetappVolumeHybridReplicationParameters
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters">NetappVolumeHybridReplicationParameters</a>

hybrid_replication_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#hybrid_replication_parameters NetappVolume#hybrid_replication_parameters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#id NetappVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kerberos_enabled`<sup>Optional</sup> <a name="kerberos_enabled" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.kerberosEnabled"></a>

```python
kerberos_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#kerberos_enabled NetappVolume#kerberos_enabled}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#labels NetappVolume#labels}

---

##### `large_capacity`<sup>Optional</sup> <a name="large_capacity" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.largeCapacity"></a>

```python
large_capacity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Flag indicating if the volume will be a large capacity volume or a regular volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#large_capacity NetappVolume#large_capacity}

---

##### `multiple_endpoints`<sup>Optional</sup> <a name="multiple_endpoints" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.multipleEndpoints"></a>

```python
multiple_endpoints: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Flag indicating if the volume will have an IP address per node for volumes supporting multiple IP endpoints.
Only the volume with largeCapacity will be allowed to have multiple endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#multiple_endpoints NetappVolume#multiple_endpoints}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#project NetappVolume#project}.

---

##### `restore_parameters`<sup>Optional</sup> <a name="restore_parameters" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.restoreParameters"></a>

```python
restore_parameters: NetappVolumeRestoreParameters
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a>

restore_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#restore_parameters NetappVolume#restore_parameters}

---

##### `restricted_actions`<sup>Optional</sup> <a name="restricted_actions" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.restrictedActions"></a>

```python
restricted_actions: typing.List[str]
```

- *Type:* typing.List[str]

List of actions that are restricted on this volume. Possible values: ["DELETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#restricted_actions NetappVolume#restricted_actions}

---

##### `security_style`<sup>Optional</sup> <a name="security_style" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.securityStyle"></a>

```python
security_style: str
```

- *Type:* str

Security Style of the Volume.

Use UNIX to use UNIX or NFSV4 ACLs for file permissions.
Use NTFS to use NTFS ACLs for file permissions. Can only be set for volumes which use SMB together with NFS as protocol. Possible values: ["NTFS", "UNIX"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#security_style NetappVolume#security_style}

---

##### `smb_settings`<sup>Optional</sup> <a name="smb_settings" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.smbSettings"></a>

```python
smb_settings: typing.List[str]
```

- *Type:* typing.List[str]

Settings for volumes with SMB access. Possible values: ["ENCRYPT_DATA", "BROWSABLE", "CHANGE_NOTIFY", "NON_BROWSABLE", "OPLOCKS", "SHOW_SNAPSHOT", "SHOW_PREVIOUS_VERSIONS", "ACCESS_BASED_ENUMERATION", "CONTINUOUSLY_AVAILABLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#smb_settings NetappVolume#smb_settings}

---

##### `snapshot_directory`<sup>Optional</sup> <a name="snapshot_directory" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.snapshotDirectory"></a>

```python
snapshot_directory: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#snapshot_directory NetappVolume#snapshot_directory}

---

##### `snapshot_policy`<sup>Optional</sup> <a name="snapshot_policy" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.snapshotPolicy"></a>

```python
snapshot_policy: NetappVolumeSnapshotPolicy
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a>

snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#snapshot_policy NetappVolume#snapshot_policy}

---

##### `tiering_policy`<sup>Optional</sup> <a name="tiering_policy" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.tieringPolicy"></a>

```python
tiering_policy: NetappVolumeTieringPolicy
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy">NetappVolumeTieringPolicy</a>

tiering_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#tiering_policy NetappVolume#tiering_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.timeouts"></a>

```python
timeouts: NetappVolumeTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#timeouts NetappVolume#timeouts}

---

##### `unix_permissions`<sup>Optional</sup> <a name="unix_permissions" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.unixPermissions"></a>

```python
unix_permissions: str
```

- *Type:* str

Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#unix_permissions NetappVolume#unix_permissions}

---

### NetappVolumeExportPolicy <a name="NetappVolumeExportPolicy" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeExportPolicy(
  rules: typing.Union[IResolvable, typing.List[NetappVolumeExportPolicyRules]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>]]</code> | rules block. |

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[NetappVolumeExportPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#rules NetappVolume#rules}

---

### NetappVolumeExportPolicyRules <a name="NetappVolumeExportPolicyRules" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeExportPolicyRules(
  access_type: str = None,
  allowed_clients: str = None,
  has_root_access: str = None,
  kerberos5_i_read_only: typing.Union[bool, IResolvable] = None,
  kerberos5_i_read_write: typing.Union[bool, IResolvable] = None,
  kerberos5_p_read_only: typing.Union[bool, IResolvable] = None,
  kerberos5_p_read_write: typing.Union[bool, IResolvable] = None,
  kerberos5_read_only: typing.Union[bool, IResolvable] = None,
  kerberos5_read_write: typing.Union[bool, IResolvable] = None,
  nfsv3: typing.Union[bool, IResolvable] = None,
  nfsv4: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.accessType">access_type</a></code> | <code>str</code> | Defines the access type for clients matching the 'allowedClients' specification. Possible values: ["READ_ONLY", "READ_WRITE", "READ_NONE"]. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.allowedClients">allowed_clients</a></code> | <code>str</code> | Defines the client ingress specification (allowed clients) as a comma separated list with IPv4 CIDRs or IPv4 host addresses. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.hasRootAccess">has_root_access</a></code> | <code>str</code> | If enabled, the root user (UID = 0) of the specified clients doesn't get mapped to nobody (UID = 65534). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5IReadOnly">kerberos5_i_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5IReadWrite">kerberos5_i_read_write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5PReadOnly">kerberos5_p_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5PReadWrite">kerberos5_p_read_write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5ReadOnly">kerberos5_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5ReadWrite">kerberos5_read_write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.nfsv3">nfsv3</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable to apply the export rule to NFSV3 clients. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.nfsv4">nfsv4</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable to apply the export rule to NFSV4.1 clients. |

---

##### `access_type`<sup>Optional</sup> <a name="access_type" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

Defines the access type for clients matching the 'allowedClients' specification. Possible values: ["READ_ONLY", "READ_WRITE", "READ_NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#access_type NetappVolume#access_type}

---

##### `allowed_clients`<sup>Optional</sup> <a name="allowed_clients" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.allowedClients"></a>

```python
allowed_clients: str
```

- *Type:* str

Defines the client ingress specification (allowed clients) as a comma separated list with IPv4 CIDRs or IPv4 host addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#allowed_clients NetappVolume#allowed_clients}

---

##### `has_root_access`<sup>Optional</sup> <a name="has_root_access" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.hasRootAccess"></a>

```python
has_root_access: str
```

- *Type:* str

If enabled, the root user (UID = 0) of the specified clients doesn't get mapped to nobody (UID = 65534).

This is also known as no_root_squash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#has_root_access NetappVolume#has_root_access}

---

##### `kerberos5_i_read_only`<sup>Optional</sup> <a name="kerberos5_i_read_only" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5IReadOnly"></a>

```python
kerberos5_i_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'integrity' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#kerberos5i_read_only NetappVolume#kerberos5i_read_only}

---

##### `kerberos5_i_read_write`<sup>Optional</sup> <a name="kerberos5_i_read_write" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5IReadWrite"></a>

```python
kerberos5_i_read_write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'integrity' kerberos security mode. The 'kerberos5iReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#kerberos5i_read_write NetappVolume#kerberos5i_read_write}

---

##### `kerberos5_p_read_only`<sup>Optional</sup> <a name="kerberos5_p_read_only" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5PReadOnly"></a>

```python
kerberos5_p_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'privacy' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#kerberos5p_read_only NetappVolume#kerberos5p_read_only}

---

##### `kerberos5_p_read_write`<sup>Optional</sup> <a name="kerberos5_p_read_write" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5PReadWrite"></a>

```python
kerberos5_p_read_write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'privacy' kerberos security mode. The 'kerberos5pReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#kerberos5p_read_write NetappVolume#kerberos5p_read_write}

---

##### `kerberos5_read_only`<sup>Optional</sup> <a name="kerberos5_read_only" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5ReadOnly"></a>

```python
kerberos5_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'authentication' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#kerberos5_read_only NetappVolume#kerberos5_read_only}

---

##### `kerberos5_read_write`<sup>Optional</sup> <a name="kerberos5_read_write" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5ReadWrite"></a>

```python
kerberos5_read_write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'authentication' kerberos security mode. The 'kerberos5ReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#kerberos5_read_write NetappVolume#kerberos5_read_write}

---

##### `nfsv3`<sup>Optional</sup> <a name="nfsv3" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.nfsv3"></a>

```python
nfsv3: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable to apply the export rule to NFSV3 clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#nfsv3 NetappVolume#nfsv3}

---

##### `nfsv4`<sup>Optional</sup> <a name="nfsv4" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.nfsv4"></a>

```python
nfsv4: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable to apply the export rule to NFSV4.1 clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#nfsv4 NetappVolume#nfsv4}

---

### NetappVolumeHybridReplicationParameters <a name="NetappVolumeHybridReplicationParameters" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeHybridReplicationParameters(
  cluster_location: str = None,
  description: str = None,
  labels: typing.Mapping[str] = None,
  peer_cluster_name: str = None,
  peer_ip_addresses: str = None,
  peer_svm_name: str = None,
  peer_volume_name: str = None,
  replication: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.clusterLocation">cluster_location</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.description">description</a></code> | <code>str</code> | Optional. Description of the replication. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.peerClusterName">peer_cluster_name</a></code> | <code>str</code> | Required. Name of the user's local source cluster to be peered with the destination cluster. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.peerIpAddresses">peer_ip_addresses</a></code> | <code>str</code> | Required. List of node ip addresses to be peered with. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.peerSvmName">peer_svm_name</a></code> | <code>str</code> | Required. Name of the user's local source vserver svm to be peered with the destination vserver svm. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.peerVolumeName">peer_volume_name</a></code> | <code>str</code> | Required. Name of the user's local source volume to be peered with the destination volume. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.replication">replication</a></code> | <code>str</code> | Required. Desired name for the replication of this volume. |

---

##### `cluster_location`<sup>Optional</sup> <a name="cluster_location" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.clusterLocation"></a>

```python
cluster_location: str
```

- *Type:* str

Optional.

Name of source cluster location associated with the Hybrid replication. This is a free-form field for the display purpose only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#cluster_location NetappVolume#cluster_location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. Description of the replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#description NetappVolume#description}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

Labels to be added to the replication as the key value pairs.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#labels NetappVolume#labels}

---

##### `peer_cluster_name`<sup>Optional</sup> <a name="peer_cluster_name" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.peerClusterName"></a>

```python
peer_cluster_name: str
```

- *Type:* str

Required. Name of the user's local source cluster to be peered with the destination cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#peer_cluster_name NetappVolume#peer_cluster_name}

---

##### `peer_ip_addresses`<sup>Optional</sup> <a name="peer_ip_addresses" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.peerIpAddresses"></a>

```python
peer_ip_addresses: str
```

- *Type:* str

Required. List of node ip addresses to be peered with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#peer_ip_addresses NetappVolume#peer_ip_addresses}

---

##### `peer_svm_name`<sup>Optional</sup> <a name="peer_svm_name" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.peerSvmName"></a>

```python
peer_svm_name: str
```

- *Type:* str

Required. Name of the user's local source vserver svm to be peered with the destination vserver svm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#peer_svm_name NetappVolume#peer_svm_name}

---

##### `peer_volume_name`<sup>Optional</sup> <a name="peer_volume_name" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.peerVolumeName"></a>

```python
peer_volume_name: str
```

- *Type:* str

Required. Name of the user's local source volume to be peered with the destination volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#peer_volume_name NetappVolume#peer_volume_name}

---

##### `replication`<sup>Optional</sup> <a name="replication" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.replication"></a>

```python
replication: str
```

- *Type:* str

Required. Desired name for the replication of this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#replication NetappVolume#replication}

---

### NetappVolumeMountOptions <a name="NetappVolumeMountOptions" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeMountOptions()
```


### NetappVolumeRestoreParameters <a name="NetappVolumeRestoreParameters" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeRestoreParameters(
  source_backup: str = None,
  source_snapshot: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters.property.sourceBackup">source_backup</a></code> | <code>str</code> | Full name of the backup to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/backupVaults/{{backupVaultId}}/backups/{{backup}}'. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters.property.sourceSnapshot">source_snapshot</a></code> | <code>str</code> | Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/volumes/{{volume}}/snapshots/{{snapshot}}'. |

---

##### `source_backup`<sup>Optional</sup> <a name="source_backup" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters.property.sourceBackup"></a>

```python
source_backup: str
```

- *Type:* str

Full name of the backup to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/backupVaults/{{backupVaultId}}/backups/{{backup}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#source_backup NetappVolume#source_backup}

---

##### `source_snapshot`<sup>Optional</sup> <a name="source_snapshot" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters.property.sourceSnapshot"></a>

```python
source_snapshot: str
```

- *Type:* str

Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/volumes/{{volume}}/snapshots/{{snapshot}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#source_snapshot NetappVolume#source_snapshot}

---

### NetappVolumeSnapshotPolicy <a name="NetappVolumeSnapshotPolicy" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeSnapshotPolicy(
  daily_schedule: NetappVolumeSnapshotPolicyDailySchedule = None,
  enabled: typing.Union[bool, IResolvable] = None,
  hourly_schedule: NetappVolumeSnapshotPolicyHourlySchedule = None,
  monthly_schedule: NetappVolumeSnapshotPolicyMonthlySchedule = None,
  weekly_schedule: NetappVolumeSnapshotPolicyWeeklySchedule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.dailySchedule">daily_schedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a></code> | daily_schedule block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables automated snapshot creation according to defined schedule. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.hourlySchedule">hourly_schedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a></code> | hourly_schedule block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.monthlySchedule">monthly_schedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a></code> | monthly_schedule block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.weeklySchedule">weekly_schedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a></code> | weekly_schedule block. |

---

##### `daily_schedule`<sup>Optional</sup> <a name="daily_schedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.dailySchedule"></a>

```python
daily_schedule: NetappVolumeSnapshotPolicyDailySchedule
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a>

daily_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#daily_schedule NetappVolume#daily_schedule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables automated snapshot creation according to defined schedule.

Default is false.
To disable automatic snapshot creation you have to remove the whole snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#enabled NetappVolume#enabled}

---

##### `hourly_schedule`<sup>Optional</sup> <a name="hourly_schedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.hourlySchedule"></a>

```python
hourly_schedule: NetappVolumeSnapshotPolicyHourlySchedule
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a>

hourly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#hourly_schedule NetappVolume#hourly_schedule}

---

##### `monthly_schedule`<sup>Optional</sup> <a name="monthly_schedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.monthlySchedule"></a>

```python
monthly_schedule: NetappVolumeSnapshotPolicyMonthlySchedule
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a>

monthly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#monthly_schedule NetappVolume#monthly_schedule}

---

##### `weekly_schedule`<sup>Optional</sup> <a name="weekly_schedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.weeklySchedule"></a>

```python
weekly_schedule: NetappVolumeSnapshotPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#weekly_schedule NetappVolume#weekly_schedule}

---

### NetappVolumeSnapshotPolicyDailySchedule <a name="NetappVolumeSnapshotPolicyDailySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeSnapshotPolicyDailySchedule(
  snapshots_to_keep: typing.Union[int, float],
  hour: typing.Union[int, float] = None,
  minute: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | The maximum number of snapshots to keep for the daily schedule. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of snapshots to keep for the daily schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#snapshots_to_keep NetappVolume#snapshots_to_keep}

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#hour NetappVolume#hour}

---

##### `minute`<sup>Optional</sup> <a name="minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#minute NetappVolume#minute}

---

### NetappVolumeSnapshotPolicyHourlySchedule <a name="NetappVolumeSnapshotPolicyHourlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeSnapshotPolicyHourlySchedule(
  snapshots_to_keep: typing.Union[int, float],
  minute: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | The maximum number of snapshots to keep for the hourly schedule. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of snapshots to keep for the hourly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#snapshots_to_keep NetappVolume#snapshots_to_keep}

---

##### `minute`<sup>Optional</sup> <a name="minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#minute NetappVolume#minute}

---

### NetappVolumeSnapshotPolicyMonthlySchedule <a name="NetappVolumeSnapshotPolicyMonthlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule(
  snapshots_to_keep: typing.Union[int, float],
  days_of_month: str = None,
  hour: typing.Union[int, float] = None,
  minute: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | The maximum number of snapshots to keep for the monthly schedule. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.daysOfMonth">days_of_month</a></code> | <code>str</code> | Set the day or days of the month to make a snapshot (1-31). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of snapshots to keep for the monthly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#snapshots_to_keep NetappVolume#snapshots_to_keep}

---

##### `days_of_month`<sup>Optional</sup> <a name="days_of_month" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.daysOfMonth"></a>

```python
days_of_month: str
```

- *Type:* str

Set the day or days of the month to make a snapshot (1-31).

Accepts a comma separated number of days. Defaults to '1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#days_of_month NetappVolume#days_of_month}

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#hour NetappVolume#hour}

---

##### `minute`<sup>Optional</sup> <a name="minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#minute NetappVolume#minute}

---

### NetappVolumeSnapshotPolicyWeeklySchedule <a name="NetappVolumeSnapshotPolicyWeeklySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule(
  snapshots_to_keep: typing.Union[int, float],
  day: str = None,
  hour: typing.Union[int, float] = None,
  minute: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | The maximum number of snapshots to keep for the weekly schedule. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.day">day</a></code> | <code>str</code> | Set the day or days of the week to make a snapshot. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of snapshots to keep for the weekly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#snapshots_to_keep NetappVolume#snapshots_to_keep}

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.day"></a>

```python
day: str
```

- *Type:* str

Set the day or days of the week to make a snapshot.

Accepts a comma separated days of the week. Defaults to 'Sunday'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#day NetappVolume#day}

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#hour NetappVolume#hour}

---

##### `minute`<sup>Optional</sup> <a name="minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#minute NetappVolume#minute}

---

### NetappVolumeTieringPolicy <a name="NetappVolumeTieringPolicy" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeTieringPolicy(
  cooling_threshold_days: typing.Union[int, float] = None,
  tier_action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy.property.coolingThresholdDays">cooling_threshold_days</a></code> | <code>typing.Union[int, float]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy.property.tierAction">tier_action</a></code> | <code>str</code> | Optional. |

---

##### `cooling_threshold_days`<sup>Optional</sup> <a name="cooling_threshold_days" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy.property.coolingThresholdDays"></a>

```python
cooling_threshold_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

Time in days to mark the volume's data block as cold and make it eligible for tiering, can be range from 2-183.
Default is 31.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#cooling_threshold_days NetappVolume#cooling_threshold_days}

---

##### `tier_action`<sup>Optional</sup> <a name="tier_action" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy.property.tierAction"></a>

```python
tier_action: str
```

- *Type:* str

Optional.

Flag indicating if the volume has tiering policy enable/pause. Default is PAUSED. Default value: "PAUSED" Possible values: ["ENABLED", "PAUSED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#tier_action NetappVolume#tier_action}

---

### NetappVolumeTimeouts <a name="NetappVolumeTimeouts" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#create NetappVolume#create}. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#delete NetappVolume#delete}. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#update NetappVolume#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#create NetappVolume#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#delete NetappVolume#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#update NetappVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeBackupConfigOutputReference <a name="NetappVolumeBackupConfigOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeBackupConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resetBackupPolicies">reset_backup_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resetBackupVault">reset_backup_vault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resetScheduledBackupEnabled">reset_scheduled_backup_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backup_policies` <a name="reset_backup_policies" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resetBackupPolicies"></a>

```python
def reset_backup_policies() -> None
```

##### `reset_backup_vault` <a name="reset_backup_vault" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resetBackupVault"></a>

```python
def reset_backup_vault() -> None
```

##### `reset_scheduled_backup_enabled` <a name="reset_scheduled_backup_enabled" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resetScheduledBackupEnabled"></a>

```python
def reset_scheduled_backup_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupPoliciesInput">backup_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupVaultInput">backup_vault_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabledInput">scheduled_backup_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupPolicies">backup_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupVault">backup_vault</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabled">scheduled_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_policies_input`<sup>Optional</sup> <a name="backup_policies_input" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupPoliciesInput"></a>

```python
backup_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_vault_input`<sup>Optional</sup> <a name="backup_vault_input" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupVaultInput"></a>

```python
backup_vault_input: str
```

- *Type:* str

---

##### `scheduled_backup_enabled_input`<sup>Optional</sup> <a name="scheduled_backup_enabled_input" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabledInput"></a>

```python
scheduled_backup_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backup_policies`<sup>Required</sup> <a name="backup_policies" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupPolicies"></a>

```python
backup_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_vault`<sup>Required</sup> <a name="backup_vault" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupVault"></a>

```python
backup_vault: str
```

- *Type:* str

---

##### `scheduled_backup_enabled`<sup>Required</sup> <a name="scheduled_backup_enabled" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabled"></a>

```python
scheduled_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.internalValue"></a>

```python
internal_value: NetappVolumeBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a>

---


### NetappVolumeExportPolicyOutputReference <a name="NetappVolumeExportPolicyOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeExportPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.putRules">put_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[NetappVolumeExportPolicyRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList">NetappVolumeExportPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.rules"></a>

```python
rules: NetappVolumeExportPolicyRulesList
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList">NetappVolumeExportPolicyRulesList</a>

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[NetappVolumeExportPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.internalValue"></a>

```python
internal_value: NetappVolumeExportPolicy
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a>

---


### NetappVolumeExportPolicyRulesList <a name="NetappVolumeExportPolicyRulesList" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeExportPolicyRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetappVolumeExportPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetappVolumeExportPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>]]

---


### NetappVolumeExportPolicyRulesOutputReference <a name="NetappVolumeExportPolicyRulesOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeExportPolicyRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetAccessType">reset_access_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetAllowedClients">reset_allowed_clients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetHasRootAccess">reset_has_root_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadOnly">reset_kerberos5_i_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadWrite">reset_kerberos5_i_read_write</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadOnly">reset_kerberos5_p_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadWrite">reset_kerberos5_p_read_write</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadOnly">reset_kerberos5_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadWrite">reset_kerberos5_read_write</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetNfsv3">reset_nfsv3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetNfsv4">reset_nfsv4</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_type` <a name="reset_access_type" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetAccessType"></a>

```python
def reset_access_type() -> None
```

##### `reset_allowed_clients` <a name="reset_allowed_clients" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetAllowedClients"></a>

```python
def reset_allowed_clients() -> None
```

##### `reset_has_root_access` <a name="reset_has_root_access" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetHasRootAccess"></a>

```python
def reset_has_root_access() -> None
```

##### `reset_kerberos5_i_read_only` <a name="reset_kerberos5_i_read_only" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadOnly"></a>

```python
def reset_kerberos5_i_read_only() -> None
```

##### `reset_kerberos5_i_read_write` <a name="reset_kerberos5_i_read_write" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadWrite"></a>

```python
def reset_kerberos5_i_read_write() -> None
```

##### `reset_kerberos5_p_read_only` <a name="reset_kerberos5_p_read_only" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadOnly"></a>

```python
def reset_kerberos5_p_read_only() -> None
```

##### `reset_kerberos5_p_read_write` <a name="reset_kerberos5_p_read_write" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadWrite"></a>

```python
def reset_kerberos5_p_read_write() -> None
```

##### `reset_kerberos5_read_only` <a name="reset_kerberos5_read_only" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadOnly"></a>

```python
def reset_kerberos5_read_only() -> None
```

##### `reset_kerberos5_read_write` <a name="reset_kerberos5_read_write" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadWrite"></a>

```python
def reset_kerberos5_read_write() -> None
```

##### `reset_nfsv3` <a name="reset_nfsv3" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetNfsv3"></a>

```python
def reset_nfsv3() -> None
```

##### `reset_nfsv4` <a name="reset_nfsv4" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetNfsv4"></a>

```python
def reset_nfsv4() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.accessTypeInput">access_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.allowedClientsInput">allowed_clients_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.hasRootAccessInput">has_root_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnlyInput">kerberos5_i_read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWriteInput">kerberos5_i_read_write_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnlyInput">kerberos5_p_read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWriteInput">kerberos5_p_read_write_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnlyInput">kerberos5_read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWriteInput">kerberos5_read_write_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv3Input">nfsv3_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv4Input">nfsv4_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.allowedClients">allowed_clients</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.hasRootAccess">has_root_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnly">kerberos5_i_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWrite">kerberos5_i_read_write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnly">kerberos5_p_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWrite">kerberos5_p_read_write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnly">kerberos5_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWrite">kerberos5_read_write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv3">nfsv3</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv4">nfsv4</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_type_input`<sup>Optional</sup> <a name="access_type_input" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.accessTypeInput"></a>

```python
access_type_input: str
```

- *Type:* str

---

##### `allowed_clients_input`<sup>Optional</sup> <a name="allowed_clients_input" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.allowedClientsInput"></a>

```python
allowed_clients_input: str
```

- *Type:* str

---

##### `has_root_access_input`<sup>Optional</sup> <a name="has_root_access_input" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.hasRootAccessInput"></a>

```python
has_root_access_input: str
```

- *Type:* str

---

##### `kerberos5_i_read_only_input`<sup>Optional</sup> <a name="kerberos5_i_read_only_input" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnlyInput"></a>

```python
kerberos5_i_read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kerberos5_i_read_write_input`<sup>Optional</sup> <a name="kerberos5_i_read_write_input" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWriteInput"></a>

```python
kerberos5_i_read_write_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kerberos5_p_read_only_input`<sup>Optional</sup> <a name="kerberos5_p_read_only_input" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnlyInput"></a>

```python
kerberos5_p_read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kerberos5_p_read_write_input`<sup>Optional</sup> <a name="kerberos5_p_read_write_input" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWriteInput"></a>

```python
kerberos5_p_read_write_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kerberos5_read_only_input`<sup>Optional</sup> <a name="kerberos5_read_only_input" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnlyInput"></a>

```python
kerberos5_read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kerberos5_read_write_input`<sup>Optional</sup> <a name="kerberos5_read_write_input" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWriteInput"></a>

```python
kerberos5_read_write_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nfsv3_input`<sup>Optional</sup> <a name="nfsv3_input" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv3Input"></a>

```python
nfsv3_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nfsv4_input`<sup>Optional</sup> <a name="nfsv4_input" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv4Input"></a>

```python
nfsv4_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `allowed_clients`<sup>Required</sup> <a name="allowed_clients" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.allowedClients"></a>

```python
allowed_clients: str
```

- *Type:* str

---

##### `has_root_access`<sup>Required</sup> <a name="has_root_access" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.hasRootAccess"></a>

```python
has_root_access: str
```

- *Type:* str

---

##### `kerberos5_i_read_only`<sup>Required</sup> <a name="kerberos5_i_read_only" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnly"></a>

```python
kerberos5_i_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kerberos5_i_read_write`<sup>Required</sup> <a name="kerberos5_i_read_write" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWrite"></a>

```python
kerberos5_i_read_write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kerberos5_p_read_only`<sup>Required</sup> <a name="kerberos5_p_read_only" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnly"></a>

```python
kerberos5_p_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kerberos5_p_read_write`<sup>Required</sup> <a name="kerberos5_p_read_write" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWrite"></a>

```python
kerberos5_p_read_write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kerberos5_read_only`<sup>Required</sup> <a name="kerberos5_read_only" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnly"></a>

```python
kerberos5_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kerberos5_read_write`<sup>Required</sup> <a name="kerberos5_read_write" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWrite"></a>

```python
kerberos5_read_write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nfsv3`<sup>Required</sup> <a name="nfsv3" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv3"></a>

```python
nfsv3: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nfsv4`<sup>Required</sup> <a name="nfsv4" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv4"></a>

```python
nfsv4: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetappVolumeExportPolicyRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>]

---


### NetappVolumeHybridReplicationParametersOutputReference <a name="NetappVolumeHybridReplicationParametersOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeHybridReplicationParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetClusterLocation">reset_cluster_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetPeerClusterName">reset_peer_cluster_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetPeerIpAddresses">reset_peer_ip_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetPeerSvmName">reset_peer_svm_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetPeerVolumeName">reset_peer_volume_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetReplication">reset_replication</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster_location` <a name="reset_cluster_location" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetClusterLocation"></a>

```python
def reset_cluster_location() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_peer_cluster_name` <a name="reset_peer_cluster_name" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetPeerClusterName"></a>

```python
def reset_peer_cluster_name() -> None
```

##### `reset_peer_ip_addresses` <a name="reset_peer_ip_addresses" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetPeerIpAddresses"></a>

```python
def reset_peer_ip_addresses() -> None
```

##### `reset_peer_svm_name` <a name="reset_peer_svm_name" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetPeerSvmName"></a>

```python
def reset_peer_svm_name() -> None
```

##### `reset_peer_volume_name` <a name="reset_peer_volume_name" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetPeerVolumeName"></a>

```python
def reset_peer_volume_name() -> None
```

##### `reset_replication` <a name="reset_replication" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetReplication"></a>

```python
def reset_replication() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.clusterLocationInput">cluster_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerClusterNameInput">peer_cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerIpAddressesInput">peer_ip_addresses_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerSvmNameInput">peer_svm_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerVolumeNameInput">peer_volume_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.replicationInput">replication_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.clusterLocation">cluster_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerClusterName">peer_cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerIpAddresses">peer_ip_addresses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerSvmName">peer_svm_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerVolumeName">peer_volume_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.replication">replication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters">NetappVolumeHybridReplicationParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_location_input`<sup>Optional</sup> <a name="cluster_location_input" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.clusterLocationInput"></a>

```python
cluster_location_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `peer_cluster_name_input`<sup>Optional</sup> <a name="peer_cluster_name_input" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerClusterNameInput"></a>

```python
peer_cluster_name_input: str
```

- *Type:* str

---

##### `peer_ip_addresses_input`<sup>Optional</sup> <a name="peer_ip_addresses_input" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerIpAddressesInput"></a>

```python
peer_ip_addresses_input: str
```

- *Type:* str

---

##### `peer_svm_name_input`<sup>Optional</sup> <a name="peer_svm_name_input" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerSvmNameInput"></a>

```python
peer_svm_name_input: str
```

- *Type:* str

---

##### `peer_volume_name_input`<sup>Optional</sup> <a name="peer_volume_name_input" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerVolumeNameInput"></a>

```python
peer_volume_name_input: str
```

- *Type:* str

---

##### `replication_input`<sup>Optional</sup> <a name="replication_input" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.replicationInput"></a>

```python
replication_input: str
```

- *Type:* str

---

##### `cluster_location`<sup>Required</sup> <a name="cluster_location" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.clusterLocation"></a>

```python
cluster_location: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `peer_cluster_name`<sup>Required</sup> <a name="peer_cluster_name" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerClusterName"></a>

```python
peer_cluster_name: str
```

- *Type:* str

---

##### `peer_ip_addresses`<sup>Required</sup> <a name="peer_ip_addresses" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerIpAddresses"></a>

```python
peer_ip_addresses: str
```

- *Type:* str

---

##### `peer_svm_name`<sup>Required</sup> <a name="peer_svm_name" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerSvmName"></a>

```python
peer_svm_name: str
```

- *Type:* str

---

##### `peer_volume_name`<sup>Required</sup> <a name="peer_volume_name" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerVolumeName"></a>

```python
peer_volume_name: str
```

- *Type:* str

---

##### `replication`<sup>Required</sup> <a name="replication" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.replication"></a>

```python
replication: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.internalValue"></a>

```python
internal_value: NetappVolumeHybridReplicationParameters
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeHybridReplicationParameters">NetappVolumeHybridReplicationParameters</a>

---


### NetappVolumeMountOptionsList <a name="NetappVolumeMountOptionsList" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeMountOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetappVolumeMountOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### NetappVolumeMountOptionsOutputReference <a name="NetappVolumeMountOptionsOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeMountOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.export">export</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.exportFull">export_full</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.instructions">instructions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptions">NetappVolumeMountOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `export`<sup>Required</sup> <a name="export" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.export"></a>

```python
export: str
```

- *Type:* str

---

##### `export_full`<sup>Required</sup> <a name="export_full" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.exportFull"></a>

```python
export_full: str
```

- *Type:* str

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.instructions"></a>

```python
instructions: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.internalValue"></a>

```python
internal_value: NetappVolumeMountOptions
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptions">NetappVolumeMountOptions</a>

---


### NetappVolumeRestoreParametersOutputReference <a name="NetappVolumeRestoreParametersOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeRestoreParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resetSourceBackup">reset_source_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resetSourceSnapshot">reset_source_snapshot</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_backup` <a name="reset_source_backup" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resetSourceBackup"></a>

```python
def reset_source_backup() -> None
```

##### `reset_source_snapshot` <a name="reset_source_snapshot" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resetSourceSnapshot"></a>

```python
def reset_source_snapshot() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceBackupInput">source_backup_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceSnapshotInput">source_snapshot_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceBackup">source_backup</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceSnapshot">source_snapshot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_backup_input`<sup>Optional</sup> <a name="source_backup_input" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceBackupInput"></a>

```python
source_backup_input: str
```

- *Type:* str

---

##### `source_snapshot_input`<sup>Optional</sup> <a name="source_snapshot_input" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceSnapshotInput"></a>

```python
source_snapshot_input: str
```

- *Type:* str

---

##### `source_backup`<sup>Required</sup> <a name="source_backup" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceBackup"></a>

```python
source_backup: str
```

- *Type:* str

---

##### `source_snapshot`<sup>Required</sup> <a name="source_snapshot" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceSnapshot"></a>

```python
source_snapshot: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.internalValue"></a>

```python
internal_value: NetappVolumeRestoreParameters
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a>

---


### NetappVolumeSnapshotPolicyDailyScheduleOutputReference <a name="NetappVolumeSnapshotPolicyDailyScheduleOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetHour">reset_hour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetMinute">reset_minute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hour` <a name="reset_hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetHour"></a>

```python
def reset_hour() -> None
```

##### `reset_minute` <a name="reset_minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetMinute"></a>

```python
def reset_minute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hourInput">hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minuteInput">minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeepInput">snapshots_to_keep_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hour_input`<sup>Optional</sup> <a name="hour_input" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hourInput"></a>

```python
hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_input`<sup>Optional</sup> <a name="minute_input" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minuteInput"></a>

```python
minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep_input`<sup>Optional</sup> <a name="snapshots_to_keep_input" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```python
snapshots_to_keep_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.internalValue"></a>

```python
internal_value: NetappVolumeSnapshotPolicyDailySchedule
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a>

---


### NetappVolumeSnapshotPolicyHourlyScheduleOutputReference <a name="NetappVolumeSnapshotPolicyHourlyScheduleOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resetMinute">reset_minute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_minute` <a name="reset_minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resetMinute"></a>

```python
def reset_minute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minuteInput">minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeepInput">snapshots_to_keep_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `minute_input`<sup>Optional</sup> <a name="minute_input" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minuteInput"></a>

```python
minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep_input`<sup>Optional</sup> <a name="snapshots_to_keep_input" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```python
snapshots_to_keep_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.internalValue"></a>

```python
internal_value: NetappVolumeSnapshotPolicyHourlySchedule
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a>

---


### NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference <a name="NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetDaysOfMonth">reset_days_of_month</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetHour">reset_hour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetMinute">reset_minute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days_of_month` <a name="reset_days_of_month" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetDaysOfMonth"></a>

```python
def reset_days_of_month() -> None
```

##### `reset_hour` <a name="reset_hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetHour"></a>

```python
def reset_hour() -> None
```

##### `reset_minute` <a name="reset_minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetMinute"></a>

```python
def reset_minute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonthInput">days_of_month_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hourInput">hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minuteInput">minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeepInput">snapshots_to_keep_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth">days_of_month</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_of_month_input`<sup>Optional</sup> <a name="days_of_month_input" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonthInput"></a>

```python
days_of_month_input: str
```

- *Type:* str

---

##### `hour_input`<sup>Optional</sup> <a name="hour_input" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hourInput"></a>

```python
hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_input`<sup>Optional</sup> <a name="minute_input" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minuteInput"></a>

```python
minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep_input`<sup>Optional</sup> <a name="snapshots_to_keep_input" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```python
snapshots_to_keep_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_of_month`<sup>Required</sup> <a name="days_of_month" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth"></a>

```python
days_of_month: str
```

- *Type:* str

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue"></a>

```python
internal_value: NetappVolumeSnapshotPolicyMonthlySchedule
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a>

---


### NetappVolumeSnapshotPolicyOutputReference <a name="NetappVolumeSnapshotPolicyOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeSnapshotPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putDailySchedule">put_daily_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putHourlySchedule">put_hourly_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule">put_monthly_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule">put_weekly_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetDailySchedule">reset_daily_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetHourlySchedule">reset_hourly_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetMonthlySchedule">reset_monthly_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetWeeklySchedule">reset_weekly_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_daily_schedule` <a name="put_daily_schedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putDailySchedule"></a>

```python
def put_daily_schedule(
  snapshots_to_keep: typing.Union[int, float],
  hour: typing.Union[int, float] = None,
  minute: typing.Union[int, float] = None
) -> None
```

###### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putDailySchedule.parameter.snapshotsToKeep"></a>

- *Type:* typing.Union[int, float]

The maximum number of snapshots to keep for the daily schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#snapshots_to_keep NetappVolume#snapshots_to_keep}

---

###### `hour`<sup>Optional</sup> <a name="hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putDailySchedule.parameter.hour"></a>

- *Type:* typing.Union[int, float]

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#hour NetappVolume#hour}

---

###### `minute`<sup>Optional</sup> <a name="minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putDailySchedule.parameter.minute"></a>

- *Type:* typing.Union[int, float]

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#minute NetappVolume#minute}

---

##### `put_hourly_schedule` <a name="put_hourly_schedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putHourlySchedule"></a>

```python
def put_hourly_schedule(
  snapshots_to_keep: typing.Union[int, float],
  minute: typing.Union[int, float] = None
) -> None
```

###### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putHourlySchedule.parameter.snapshotsToKeep"></a>

- *Type:* typing.Union[int, float]

The maximum number of snapshots to keep for the hourly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#snapshots_to_keep NetappVolume#snapshots_to_keep}

---

###### `minute`<sup>Optional</sup> <a name="minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putHourlySchedule.parameter.minute"></a>

- *Type:* typing.Union[int, float]

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#minute NetappVolume#minute}

---

##### `put_monthly_schedule` <a name="put_monthly_schedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule"></a>

```python
def put_monthly_schedule(
  snapshots_to_keep: typing.Union[int, float],
  days_of_month: str = None,
  hour: typing.Union[int, float] = None,
  minute: typing.Union[int, float] = None
) -> None
```

###### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule.parameter.snapshotsToKeep"></a>

- *Type:* typing.Union[int, float]

The maximum number of snapshots to keep for the monthly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#snapshots_to_keep NetappVolume#snapshots_to_keep}

---

###### `days_of_month`<sup>Optional</sup> <a name="days_of_month" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule.parameter.daysOfMonth"></a>

- *Type:* str

Set the day or days of the month to make a snapshot (1-31).

Accepts a comma separated number of days. Defaults to '1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#days_of_month NetappVolume#days_of_month}

---

###### `hour`<sup>Optional</sup> <a name="hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule.parameter.hour"></a>

- *Type:* typing.Union[int, float]

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#hour NetappVolume#hour}

---

###### `minute`<sup>Optional</sup> <a name="minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule.parameter.minute"></a>

- *Type:* typing.Union[int, float]

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#minute NetappVolume#minute}

---

##### `put_weekly_schedule` <a name="put_weekly_schedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule"></a>

```python
def put_weekly_schedule(
  snapshots_to_keep: typing.Union[int, float],
  day: str = None,
  hour: typing.Union[int, float] = None,
  minute: typing.Union[int, float] = None
) -> None
```

###### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule.parameter.snapshotsToKeep"></a>

- *Type:* typing.Union[int, float]

The maximum number of snapshots to keep for the weekly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#snapshots_to_keep NetappVolume#snapshots_to_keep}

---

###### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule.parameter.day"></a>

- *Type:* str

Set the day or days of the week to make a snapshot.

Accepts a comma separated days of the week. Defaults to 'Sunday'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#day NetappVolume#day}

---

###### `hour`<sup>Optional</sup> <a name="hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule.parameter.hour"></a>

- *Type:* typing.Union[int, float]

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#hour NetappVolume#hour}

---

###### `minute`<sup>Optional</sup> <a name="minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule.parameter.minute"></a>

- *Type:* typing.Union[int, float]

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/netapp_volume#minute NetappVolume#minute}

---

##### `reset_daily_schedule` <a name="reset_daily_schedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetDailySchedule"></a>

```python
def reset_daily_schedule() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_hourly_schedule` <a name="reset_hourly_schedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetHourlySchedule"></a>

```python
def reset_hourly_schedule() -> None
```

##### `reset_monthly_schedule` <a name="reset_monthly_schedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetMonthlySchedule"></a>

```python
def reset_monthly_schedule() -> None
```

##### `reset_weekly_schedule` <a name="reset_weekly_schedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetWeeklySchedule"></a>

```python
def reset_weekly_schedule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.dailySchedule">daily_schedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference">NetappVolumeSnapshotPolicyDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.hourlySchedule">hourly_schedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference">NetappVolumeSnapshotPolicyHourlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.monthlySchedule">monthly_schedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference">NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.weeklySchedule">weekly_schedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference">NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.dailyScheduleInput">daily_schedule_input</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.hourlyScheduleInput">hourly_schedule_input</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.monthlyScheduleInput">monthly_schedule_input</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.weeklyScheduleInput">weekly_schedule_input</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `daily_schedule`<sup>Required</sup> <a name="daily_schedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.dailySchedule"></a>

```python
daily_schedule: NetappVolumeSnapshotPolicyDailyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference">NetappVolumeSnapshotPolicyDailyScheduleOutputReference</a>

---

##### `hourly_schedule`<sup>Required</sup> <a name="hourly_schedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.hourlySchedule"></a>

```python
hourly_schedule: NetappVolumeSnapshotPolicyHourlyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference">NetappVolumeSnapshotPolicyHourlyScheduleOutputReference</a>

---

##### `monthly_schedule`<sup>Required</sup> <a name="monthly_schedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.monthlySchedule"></a>

```python
monthly_schedule: NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference">NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference</a>

---

##### `weekly_schedule`<sup>Required</sup> <a name="weekly_schedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.weeklySchedule"></a>

```python
weekly_schedule: NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference">NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference</a>

---

##### `daily_schedule_input`<sup>Optional</sup> <a name="daily_schedule_input" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.dailyScheduleInput"></a>

```python
daily_schedule_input: NetappVolumeSnapshotPolicyDailySchedule
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hourly_schedule_input`<sup>Optional</sup> <a name="hourly_schedule_input" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.hourlyScheduleInput"></a>

```python
hourly_schedule_input: NetappVolumeSnapshotPolicyHourlySchedule
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a>

---

##### `monthly_schedule_input`<sup>Optional</sup> <a name="monthly_schedule_input" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.monthlyScheduleInput"></a>

```python
monthly_schedule_input: NetappVolumeSnapshotPolicyMonthlySchedule
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a>

---

##### `weekly_schedule_input`<sup>Optional</sup> <a name="weekly_schedule_input" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.weeklyScheduleInput"></a>

```python
weekly_schedule_input: NetappVolumeSnapshotPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.internalValue"></a>

```python
internal_value: NetappVolumeSnapshotPolicy
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a>

---


### NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference <a name="NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetDay">reset_day</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetHour">reset_hour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetMinute">reset_minute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_day` <a name="reset_day" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetDay"></a>

```python
def reset_day() -> None
```

##### `reset_hour` <a name="reset_hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetHour"></a>

```python
def reset_hour() -> None
```

##### `reset_minute` <a name="reset_minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetMinute"></a>

```python
def reset_minute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.dayInput">day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hourInput">hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minuteInput">minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeepInput">snapshots_to_keep_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.day">day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.dayInput"></a>

```python
day_input: str
```

- *Type:* str

---

##### `hour_input`<sup>Optional</sup> <a name="hour_input" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hourInput"></a>

```python
hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_input`<sup>Optional</sup> <a name="minute_input" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minuteInput"></a>

```python
minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep_input`<sup>Optional</sup> <a name="snapshots_to_keep_input" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```python
snapshots_to_keep_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.day"></a>

```python
day: str
```

- *Type:* str

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue"></a>

```python
internal_value: NetappVolumeSnapshotPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a>

---


### NetappVolumeTieringPolicyOutputReference <a name="NetappVolumeTieringPolicyOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeTieringPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.resetCoolingThresholdDays">reset_cooling_threshold_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.resetTierAction">reset_tier_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cooling_threshold_days` <a name="reset_cooling_threshold_days" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.resetCoolingThresholdDays"></a>

```python
def reset_cooling_threshold_days() -> None
```

##### `reset_tier_action` <a name="reset_tier_action" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.resetTierAction"></a>

```python
def reset_tier_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.coolingThresholdDaysInput">cooling_threshold_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.tierActionInput">tier_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.coolingThresholdDays">cooling_threshold_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.tierAction">tier_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy">NetappVolumeTieringPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cooling_threshold_days_input`<sup>Optional</sup> <a name="cooling_threshold_days_input" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.coolingThresholdDaysInput"></a>

```python
cooling_threshold_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_action_input`<sup>Optional</sup> <a name="tier_action_input" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.tierActionInput"></a>

```python
tier_action_input: str
```

- *Type:* str

---

##### `cooling_threshold_days`<sup>Required</sup> <a name="cooling_threshold_days" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.coolingThresholdDays"></a>

```python
cooling_threshold_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_action`<sup>Required</sup> <a name="tier_action" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.tierAction"></a>

```python
tier_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.internalValue"></a>

```python
internal_value: NetappVolumeTieringPolicy
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTieringPolicy">NetappVolumeTieringPolicy</a>

---


### NetappVolumeTimeoutsOutputReference <a name="NetappVolumeTimeoutsOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume

netappVolume.NetappVolumeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetappVolumeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>]

---



