# `netappVolume` Submodule <a name="`netappVolume` Submodule" id="@cdktf/provider-google.netappVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolume <a name="NetappVolume" id="@cdktf/provider-google.netappVolume.NetappVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume google_netapp_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolume;

NetappVolume.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .capacityGib(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .protocols(java.util.List<java.lang.String>)
    .shareName(java.lang.String)
    .storagePool(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .exportPolicy(NetappVolumeExportPolicy)
//  .id(java.lang.String)
//  .kerberosEnabled(java.lang.Boolean)
//  .kerberosEnabled(IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .restoreParameters(NetappVolumeRestoreParameters)
//  .restrictedActions(java.util.List<java.lang.String>)
//  .securityStyle(java.lang.String)
//  .smbSettings(java.util.List<java.lang.String>)
//  .snapshotDirectory(java.lang.Boolean)
//  .snapshotDirectory(IResolvable)
//  .snapshotPolicy(NetappVolumeSnapshotPolicy)
//  .timeouts(NetappVolumeTimeouts)
//  .unixPermissions(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.capacityGib">capacityGib</a></code> | <code>java.lang.String</code> | Capacity of the volume (in GiB). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Name of the pool location. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the volume. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | The protocol of the volume. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.shareName">shareName</a></code> | <code>java.lang.String</code> | Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.storagePool">storagePool</a></code> | <code>java.lang.String</code> | Name of the storage pool to create the volume in. Pool needs enough spare capacity to accomodate the volume. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Policy to determine if the volume should be deleted forcefully. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.exportPolicy">exportPolicy</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a></code> | export_policy block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#id NetappVolume#id}. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.kerberosEnabled">kerberosEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#project NetappVolume#project}. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.restoreParameters">restoreParameters</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a></code> | restore_parameters block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.restrictedActions">restrictedActions</a></code> | <code>java.util.List<java.lang.String></code> | List of actions that are restricted on this volume. Possible values: ["DELETE"]. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.securityStyle">securityStyle</a></code> | <code>java.lang.String</code> | Security Style of the Volume. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.smbSettings">smbSettings</a></code> | <code>java.util.List<java.lang.String></code> | Settings for volumes with SMB access. Possible values: ["ENCRYPT_DATA", "BROWSABLE", "CHANGE_NOTIFY", "NON_BROWSABLE", "OPLOCKS", "SHOW_SNAPSHOT", "SHOW_PREVIOUS_VERSIONS", "ACCESS_BASED_ENUMERATION", "CONTINUOUSLY_AVAILABLE"]. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.snapshotDirectory">snapshotDirectory</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.snapshotPolicy">snapshotPolicy</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a></code> | snapshot_policy block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.unixPermissions">unixPermissions</a></code> | <code>java.lang.String</code> | Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capacityGib`<sup>Required</sup> <a name="capacityGib" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.capacityGib"></a>

- *Type:* java.lang.String

Capacity of the volume (in GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#capacity_gib NetappVolume#capacity_gib}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Name of the pool location.

Usually a region name, expect for some STANDARD service level pools which require a zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#location NetappVolume#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the volume. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#name NetappVolume#name}

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.protocols"></a>

- *Type:* java.util.List<java.lang.String>

The protocol of the volume.

Allowed combinations are '['NFSV3']', '['NFSV4']', '['SMB']', '['NFSV3', 'NFSV4']', '['SMB', 'NFSV3']' and '['SMB', 'NFSV4']'. Possible values: ["NFSV3", "NFSV4", "SMB"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#protocols NetappVolume#protocols}

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.shareName"></a>

- *Type:* java.lang.String

Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#share_name NetappVolume#share_name}

---

##### `storagePool`<sup>Required</sup> <a name="storagePool" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.storagePool"></a>

- *Type:* java.lang.String

Name of the storage pool to create the volume in. Pool needs enough spare capacity to accomodate the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#storage_pool NetappVolume#storage_pool}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Policy to determine if the volume should be deleted forcefully.

Volumes may have nested snapshot resources. Deleting such a volume will fail.
Setting this parameter to FORCE will delete volumes including nested snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#deletion_policy NetappVolume#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#description NetappVolume#description}

---

##### `exportPolicy`<sup>Optional</sup> <a name="exportPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.exportPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a>

export_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#export_policy NetappVolume#export_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#id NetappVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kerberosEnabled`<sup>Optional</sup> <a name="kerberosEnabled" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.kerberosEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#kerberos_enabled NetappVolume#kerberos_enabled}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#labels NetappVolume#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#project NetappVolume#project}.

---

##### `restoreParameters`<sup>Optional</sup> <a name="restoreParameters" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.restoreParameters"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a>

restore_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#restore_parameters NetappVolume#restore_parameters}

---

##### `restrictedActions`<sup>Optional</sup> <a name="restrictedActions" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.restrictedActions"></a>

- *Type:* java.util.List<java.lang.String>

List of actions that are restricted on this volume. Possible values: ["DELETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#restricted_actions NetappVolume#restricted_actions}

---

##### `securityStyle`<sup>Optional</sup> <a name="securityStyle" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.securityStyle"></a>

- *Type:* java.lang.String

Security Style of the Volume.

Use UNIX to use UNIX or NFSV4 ACLs for file permissions.
Use NTFS to use NTFS ACLs for file permissions. Can only be set for volumes which use SMB together with NFS as protocol. Possible values: ["NTFS", "UNIX"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#security_style NetappVolume#security_style}

---

##### `smbSettings`<sup>Optional</sup> <a name="smbSettings" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.smbSettings"></a>

- *Type:* java.util.List<java.lang.String>

Settings for volumes with SMB access. Possible values: ["ENCRYPT_DATA", "BROWSABLE", "CHANGE_NOTIFY", "NON_BROWSABLE", "OPLOCKS", "SHOW_SNAPSHOT", "SHOW_PREVIOUS_VERSIONS", "ACCESS_BASED_ENUMERATION", "CONTINUOUSLY_AVAILABLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#smb_settings NetappVolume#smb_settings}

---

##### `snapshotDirectory`<sup>Optional</sup> <a name="snapshotDirectory" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.snapshotDirectory"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#snapshot_directory NetappVolume#snapshot_directory}

---

##### `snapshotPolicy`<sup>Optional</sup> <a name="snapshotPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.snapshotPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a>

snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#snapshot_policy NetappVolume#snapshot_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#timeouts NetappVolume#timeouts}

---

##### `unixPermissions`<sup>Optional</sup> <a name="unixPermissions" id="@cdktf/provider-google.netappVolume.NetappVolume.Initializer.parameter.unixPermissions"></a>

- *Type:* java.lang.String

Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#unix_permissions NetappVolume#unix_permissions}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.putExportPolicy">putExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.putRestoreParameters">putRestoreParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.putSnapshotPolicy">putSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetExportPolicy">resetExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetKerberosEnabled">resetKerberosEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetRestoreParameters">resetRestoreParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetRestrictedActions">resetRestrictedActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetSecurityStyle">resetSecurityStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetSmbSettings">resetSmbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetSnapshotDirectory">resetSnapshotDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetSnapshotPolicy">resetSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.resetUnixPermissions">resetUnixPermissions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolume.NetappVolume.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.netappVolume.NetappVolume.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.netappVolume.NetappVolume.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolume.NetappVolume.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.netappVolume.NetappVolume.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.netappVolume.NetappVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.netappVolume.NetappVolume.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.netappVolume.NetappVolume.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.netappVolume.NetappVolume.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.netappVolume.NetappVolume.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.netappVolume.NetappVolume.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.netappVolume.NetappVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.netappVolume.NetappVolume.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.netappVolume.NetappVolume.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolume.NetappVolume.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolume.NetappVolume.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.netappVolume.NetappVolume.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolume.NetappVolume.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.netappVolume.NetappVolume.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.netappVolume.NetappVolume.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.netappVolume.NetappVolume.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.netappVolume.NetappVolume.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolume.NetappVolume.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExportPolicy` <a name="putExportPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.putExportPolicy"></a>

```java
public void putExportPolicy(NetappVolumeExportPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolume.NetappVolume.putExportPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a>

---

##### `putRestoreParameters` <a name="putRestoreParameters" id="@cdktf/provider-google.netappVolume.NetappVolume.putRestoreParameters"></a>

```java
public void putRestoreParameters(NetappVolumeRestoreParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolume.NetappVolume.putRestoreParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a>

---

##### `putSnapshotPolicy` <a name="putSnapshotPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.putSnapshotPolicy"></a>

```java
public void putSnapshotPolicy(NetappVolumeSnapshotPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolume.NetappVolume.putSnapshotPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.netappVolume.NetappVolume.putTimeouts"></a>

```java
public void putTimeouts(NetappVolumeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolume.NetappVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.netappVolume.NetappVolume.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExportPolicy` <a name="resetExportPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.resetExportPolicy"></a>

```java
public void resetExportPolicy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.netappVolume.NetappVolume.resetId"></a>

```java
public void resetId()
```

##### `resetKerberosEnabled` <a name="resetKerberosEnabled" id="@cdktf/provider-google.netappVolume.NetappVolume.resetKerberosEnabled"></a>

```java
public void resetKerberosEnabled()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.netappVolume.NetappVolume.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.netappVolume.NetappVolume.resetProject"></a>

```java
public void resetProject()
```

##### `resetRestoreParameters` <a name="resetRestoreParameters" id="@cdktf/provider-google.netappVolume.NetappVolume.resetRestoreParameters"></a>

```java
public void resetRestoreParameters()
```

##### `resetRestrictedActions` <a name="resetRestrictedActions" id="@cdktf/provider-google.netappVolume.NetappVolume.resetRestrictedActions"></a>

```java
public void resetRestrictedActions()
```

##### `resetSecurityStyle` <a name="resetSecurityStyle" id="@cdktf/provider-google.netappVolume.NetappVolume.resetSecurityStyle"></a>

```java
public void resetSecurityStyle()
```

##### `resetSmbSettings` <a name="resetSmbSettings" id="@cdktf/provider-google.netappVolume.NetappVolume.resetSmbSettings"></a>

```java
public void resetSmbSettings()
```

##### `resetSnapshotDirectory` <a name="resetSnapshotDirectory" id="@cdktf/provider-google.netappVolume.NetappVolume.resetSnapshotDirectory"></a>

```java
public void resetSnapshotDirectory()
```

##### `resetSnapshotPolicy` <a name="resetSnapshotPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.resetSnapshotPolicy"></a>

```java
public void resetSnapshotPolicy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.netappVolume.NetappVolume.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUnixPermissions` <a name="resetUnixPermissions" id="@cdktf/provider-google.netappVolume.NetappVolume.resetUnixPermissions"></a>

```java
public void resetUnixPermissions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetappVolume resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.netappVolume.NetappVolume.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolume;

NetappVolume.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.netappVolume.NetappVolume.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolume;

NetappVolume.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolume.NetappVolume.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.netappVolume.NetappVolume.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolume;

NetappVolume.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolume.NetappVolume.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.netappVolume.NetappVolume.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolume;

NetappVolume.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetappVolume.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetappVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappVolume.NetappVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.netappVolume.NetappVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetappVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.netappVolume.NetappVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetappVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolume.NetappVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetappVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.activeDirectory">activeDirectory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.exportPolicy">exportPolicy</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference">NetappVolumeExportPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.hasReplication">hasReplication</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.kmsConfig">kmsConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.ldapEnabled">ldapEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList">NetappVolumeMountOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.psaRange">psaRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.restoreParameters">restoreParameters</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference">NetappVolumeRestoreParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.serviceLevel">serviceLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotPolicy">snapshotPolicy</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference">NetappVolumeSnapshotPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.stateDetails">stateDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference">NetappVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.usedGib">usedGib</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.capacityGibInput">capacityGibInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.exportPolicyInput">exportPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.kerberosEnabledInput">kerberosEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.protocolsInput">protocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.restoreParametersInput">restoreParametersInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.restrictedActionsInput">restrictedActionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.securityStyleInput">securityStyleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.shareNameInput">shareNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.smbSettingsInput">smbSettingsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotDirectoryInput">snapshotDirectoryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotPolicyInput">snapshotPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.storagePoolInput">storagePoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.unixPermissionsInput">unixPermissionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.capacityGib">capacityGib</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.kerberosEnabled">kerberosEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.restrictedActions">restrictedActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.securityStyle">securityStyle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.shareName">shareName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.smbSettings">smbSettings</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotDirectory">snapshotDirectory</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.storagePool">storagePool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.unixPermissions">unixPermissions</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.netappVolume.NetappVolume.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.netappVolume.NetappVolume.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolume.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.netappVolume.NetappVolume.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.netappVolume.NetappVolume.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.netappVolume.NetappVolume.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.netappVolume.NetappVolume.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappVolume.NetappVolume.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappVolume.NetappVolume.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.netappVolume.NetappVolume.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.netappVolume.NetappVolume.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappVolume.NetappVolume.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolume.NetappVolume.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappVolume.NetappVolume.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `activeDirectory`<sup>Required</sup> <a name="activeDirectory" id="@cdktf/provider-google.netappVolume.NetappVolume.property.activeDirectory"></a>

```java
public java.lang.String getActiveDirectory();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.netappVolume.NetappVolume.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.netappVolume.NetappVolume.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-google.netappVolume.NetappVolume.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `exportPolicy`<sup>Required</sup> <a name="exportPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.property.exportPolicy"></a>

```java
public NetappVolumeExportPolicyOutputReference getExportPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference">NetappVolumeExportPolicyOutputReference</a>

---

##### `hasReplication`<sup>Required</sup> <a name="hasReplication" id="@cdktf/provider-google.netappVolume.NetappVolume.property.hasReplication"></a>

```java
public IResolvable getHasReplication();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `kmsConfig`<sup>Required</sup> <a name="kmsConfig" id="@cdktf/provider-google.netappVolume.NetappVolume.property.kmsConfig"></a>

```java
public java.lang.String getKmsConfig();
```

- *Type:* java.lang.String

---

##### `ldapEnabled`<sup>Required</sup> <a name="ldapEnabled" id="@cdktf/provider-google.netappVolume.NetappVolume.property.ldapEnabled"></a>

```java
public IResolvable getLdapEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-google.netappVolume.NetappVolume.property.mountOptions"></a>

```java
public NetappVolumeMountOptionsList getMountOptions();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList">NetappVolumeMountOptionsList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.netappVolume.NetappVolume.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `psaRange`<sup>Required</sup> <a name="psaRange" id="@cdktf/provider-google.netappVolume.NetappVolume.property.psaRange"></a>

```java
public java.lang.String getPsaRange();
```

- *Type:* java.lang.String

---

##### `restoreParameters`<sup>Required</sup> <a name="restoreParameters" id="@cdktf/provider-google.netappVolume.NetappVolume.property.restoreParameters"></a>

```java
public NetappVolumeRestoreParametersOutputReference getRestoreParameters();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference">NetappVolumeRestoreParametersOutputReference</a>

---

##### `serviceLevel`<sup>Required</sup> <a name="serviceLevel" id="@cdktf/provider-google.netappVolume.NetappVolume.property.serviceLevel"></a>

```java
public java.lang.String getServiceLevel();
```

- *Type:* java.lang.String

---

##### `snapshotPolicy`<sup>Required</sup> <a name="snapshotPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotPolicy"></a>

```java
public NetappVolumeSnapshotPolicyOutputReference getSnapshotPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference">NetappVolumeSnapshotPolicyOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.netappVolume.NetappVolume.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateDetails`<sup>Required</sup> <a name="stateDetails" id="@cdktf/provider-google.netappVolume.NetappVolume.property.stateDetails"></a>

```java
public java.lang.String getStateDetails();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.netappVolume.NetappVolume.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.netappVolume.NetappVolume.property.timeouts"></a>

```java
public NetappVolumeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference">NetappVolumeTimeoutsOutputReference</a>

---

##### `usedGib`<sup>Required</sup> <a name="usedGib" id="@cdktf/provider-google.netappVolume.NetappVolume.property.usedGib"></a>

```java
public java.lang.String getUsedGib();
```

- *Type:* java.lang.String

---

##### `capacityGibInput`<sup>Optional</sup> <a name="capacityGibInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.capacityGibInput"></a>

```java
public java.lang.String getCapacityGibInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `exportPolicyInput`<sup>Optional</sup> <a name="exportPolicyInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.exportPolicyInput"></a>

```java
public NetappVolumeExportPolicy getExportPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kerberosEnabledInput`<sup>Optional</sup> <a name="kerberosEnabledInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.kerberosEnabledInput"></a>

```java
public java.lang.Object getKerberosEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.protocolsInput"></a>

```java
public java.util.List<java.lang.String> getProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restoreParametersInput`<sup>Optional</sup> <a name="restoreParametersInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.restoreParametersInput"></a>

```java
public NetappVolumeRestoreParameters getRestoreParametersInput();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a>

---

##### `restrictedActionsInput`<sup>Optional</sup> <a name="restrictedActionsInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.restrictedActionsInput"></a>

```java
public java.util.List<java.lang.String> getRestrictedActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityStyleInput`<sup>Optional</sup> <a name="securityStyleInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.securityStyleInput"></a>

```java
public java.lang.String getSecurityStyleInput();
```

- *Type:* java.lang.String

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.shareNameInput"></a>

```java
public java.lang.String getShareNameInput();
```

- *Type:* java.lang.String

---

##### `smbSettingsInput`<sup>Optional</sup> <a name="smbSettingsInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.smbSettingsInput"></a>

```java
public java.util.List<java.lang.String> getSmbSettingsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotDirectoryInput`<sup>Optional</sup> <a name="snapshotDirectoryInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotDirectoryInput"></a>

```java
public java.lang.Object getSnapshotDirectoryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotPolicyInput`<sup>Optional</sup> <a name="snapshotPolicyInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotPolicyInput"></a>

```java
public NetappVolumeSnapshotPolicy getSnapshotPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a>

---

##### `storagePoolInput`<sup>Optional</sup> <a name="storagePoolInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.storagePoolInput"></a>

```java
public java.lang.String getStoragePoolInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

---

##### `unixPermissionsInput`<sup>Optional</sup> <a name="unixPermissionsInput" id="@cdktf/provider-google.netappVolume.NetappVolume.property.unixPermissionsInput"></a>

```java
public java.lang.String getUnixPermissionsInput();
```

- *Type:* java.lang.String

---

##### `capacityGib`<sup>Required</sup> <a name="capacityGib" id="@cdktf/provider-google.netappVolume.NetappVolume.property.capacityGib"></a>

```java
public java.lang.String getCapacityGib();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktf/provider-google.netappVolume.NetappVolume.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.netappVolume.NetappVolume.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolume.NetappVolume.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kerberosEnabled`<sup>Required</sup> <a name="kerberosEnabled" id="@cdktf/provider-google.netappVolume.NetappVolume.property.kerberosEnabled"></a>

```java
public java.lang.Object getKerberosEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.netappVolume.NetappVolume.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappVolume.NetappVolume.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappVolume.NetappVolume.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.netappVolume.NetappVolume.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-google.netappVolume.NetappVolume.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restrictedActions`<sup>Required</sup> <a name="restrictedActions" id="@cdktf/provider-google.netappVolume.NetappVolume.property.restrictedActions"></a>

```java
public java.util.List<java.lang.String> getRestrictedActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityStyle`<sup>Required</sup> <a name="securityStyle" id="@cdktf/provider-google.netappVolume.NetappVolume.property.securityStyle"></a>

```java
public java.lang.String getSecurityStyle();
```

- *Type:* java.lang.String

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-google.netappVolume.NetappVolume.property.shareName"></a>

```java
public java.lang.String getShareName();
```

- *Type:* java.lang.String

---

##### `smbSettings`<sup>Required</sup> <a name="smbSettings" id="@cdktf/provider-google.netappVolume.NetappVolume.property.smbSettings"></a>

```java
public java.util.List<java.lang.String> getSmbSettings();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotDirectory`<sup>Required</sup> <a name="snapshotDirectory" id="@cdktf/provider-google.netappVolume.NetappVolume.property.snapshotDirectory"></a>

```java
public java.lang.Object getSnapshotDirectory();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storagePool`<sup>Required</sup> <a name="storagePool" id="@cdktf/provider-google.netappVolume.NetappVolume.property.storagePool"></a>

```java
public java.lang.String getStoragePool();
```

- *Type:* java.lang.String

---

##### `unixPermissions`<sup>Required</sup> <a name="unixPermissions" id="@cdktf/provider-google.netappVolume.NetappVolume.property.unixPermissions"></a>

```java
public java.lang.String getUnixPermissions();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolume.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.netappVolume.NetappVolume.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeConfig <a name="NetappVolumeConfig" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolumeConfig;

NetappVolumeConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .capacityGib(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .protocols(java.util.List<java.lang.String>)
    .shareName(java.lang.String)
    .storagePool(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .exportPolicy(NetappVolumeExportPolicy)
//  .id(java.lang.String)
//  .kerberosEnabled(java.lang.Boolean)
//  .kerberosEnabled(IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .restoreParameters(NetappVolumeRestoreParameters)
//  .restrictedActions(java.util.List<java.lang.String>)
//  .securityStyle(java.lang.String)
//  .smbSettings(java.util.List<java.lang.String>)
//  .snapshotDirectory(java.lang.Boolean)
//  .snapshotDirectory(IResolvable)
//  .snapshotPolicy(NetappVolumeSnapshotPolicy)
//  .timeouts(NetappVolumeTimeouts)
//  .unixPermissions(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.capacityGib">capacityGib</a></code> | <code>java.lang.String</code> | Capacity of the volume (in GiB). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.location">location</a></code> | <code>java.lang.String</code> | Name of the pool location. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the volume. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | The protocol of the volume. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.shareName">shareName</a></code> | <code>java.lang.String</code> | Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.storagePool">storagePool</a></code> | <code>java.lang.String</code> | Name of the storage pool to create the volume in. Pool needs enough spare capacity to accomodate the volume. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Policy to determine if the volume should be deleted forcefully. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.exportPolicy">exportPolicy</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a></code> | export_policy block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#id NetappVolume#id}. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.kerberosEnabled">kerberosEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#project NetappVolume#project}. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.restoreParameters">restoreParameters</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a></code> | restore_parameters block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.restrictedActions">restrictedActions</a></code> | <code>java.util.List<java.lang.String></code> | List of actions that are restricted on this volume. Possible values: ["DELETE"]. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.securityStyle">securityStyle</a></code> | <code>java.lang.String</code> | Security Style of the Volume. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.smbSettings">smbSettings</a></code> | <code>java.util.List<java.lang.String></code> | Settings for volumes with SMB access. Possible values: ["ENCRYPT_DATA", "BROWSABLE", "CHANGE_NOTIFY", "NON_BROWSABLE", "OPLOCKS", "SHOW_SNAPSHOT", "SHOW_PREVIOUS_VERSIONS", "ACCESS_BASED_ENUMERATION", "CONTINUOUSLY_AVAILABLE"]. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.snapshotDirectory">snapshotDirectory</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.snapshotPolicy">snapshotPolicy</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a></code> | snapshot_policy block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.unixPermissions">unixPermissions</a></code> | <code>java.lang.String</code> | Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capacityGib`<sup>Required</sup> <a name="capacityGib" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.capacityGib"></a>

```java
public java.lang.String getCapacityGib();
```

- *Type:* java.lang.String

Capacity of the volume (in GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#capacity_gib NetappVolume#capacity_gib}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Name of the pool location.

Usually a region name, expect for some STANDARD service level pools which require a zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#location NetappVolume#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the volume. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#name NetappVolume#name}

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

The protocol of the volume.

Allowed combinations are '['NFSV3']', '['NFSV4']', '['SMB']', '['NFSV3', 'NFSV4']', '['SMB', 'NFSV3']' and '['SMB', 'NFSV4']'. Possible values: ["NFSV3", "NFSV4", "SMB"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#protocols NetappVolume#protocols}

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.shareName"></a>

```java
public java.lang.String getShareName();
```

- *Type:* java.lang.String

Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#share_name NetappVolume#share_name}

---

##### `storagePool`<sup>Required</sup> <a name="storagePool" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.storagePool"></a>

```java
public java.lang.String getStoragePool();
```

- *Type:* java.lang.String

Name of the storage pool to create the volume in. Pool needs enough spare capacity to accomodate the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#storage_pool NetappVolume#storage_pool}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Policy to determine if the volume should be deleted forcefully.

Volumes may have nested snapshot resources. Deleting such a volume will fail.
Setting this parameter to FORCE will delete volumes including nested snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#deletion_policy NetappVolume#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#description NetappVolume#description}

---

##### `exportPolicy`<sup>Optional</sup> <a name="exportPolicy" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.exportPolicy"></a>

```java
public NetappVolumeExportPolicy getExportPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a>

export_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#export_policy NetappVolume#export_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#id NetappVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kerberosEnabled`<sup>Optional</sup> <a name="kerberosEnabled" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.kerberosEnabled"></a>

```java
public java.lang.Object getKerberosEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#kerberos_enabled NetappVolume#kerberos_enabled}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#labels NetappVolume#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#project NetappVolume#project}.

---

##### `restoreParameters`<sup>Optional</sup> <a name="restoreParameters" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.restoreParameters"></a>

```java
public NetappVolumeRestoreParameters getRestoreParameters();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a>

restore_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#restore_parameters NetappVolume#restore_parameters}

---

##### `restrictedActions`<sup>Optional</sup> <a name="restrictedActions" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.restrictedActions"></a>

```java
public java.util.List<java.lang.String> getRestrictedActions();
```

- *Type:* java.util.List<java.lang.String>

List of actions that are restricted on this volume. Possible values: ["DELETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#restricted_actions NetappVolume#restricted_actions}

---

##### `securityStyle`<sup>Optional</sup> <a name="securityStyle" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.securityStyle"></a>

```java
public java.lang.String getSecurityStyle();
```

- *Type:* java.lang.String

Security Style of the Volume.

Use UNIX to use UNIX or NFSV4 ACLs for file permissions.
Use NTFS to use NTFS ACLs for file permissions. Can only be set for volumes which use SMB together with NFS as protocol. Possible values: ["NTFS", "UNIX"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#security_style NetappVolume#security_style}

---

##### `smbSettings`<sup>Optional</sup> <a name="smbSettings" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.smbSettings"></a>

```java
public java.util.List<java.lang.String> getSmbSettings();
```

- *Type:* java.util.List<java.lang.String>

Settings for volumes with SMB access. Possible values: ["ENCRYPT_DATA", "BROWSABLE", "CHANGE_NOTIFY", "NON_BROWSABLE", "OPLOCKS", "SHOW_SNAPSHOT", "SHOW_PREVIOUS_VERSIONS", "ACCESS_BASED_ENUMERATION", "CONTINUOUSLY_AVAILABLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#smb_settings NetappVolume#smb_settings}

---

##### `snapshotDirectory`<sup>Optional</sup> <a name="snapshotDirectory" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.snapshotDirectory"></a>

```java
public java.lang.Object getSnapshotDirectory();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#snapshot_directory NetappVolume#snapshot_directory}

---

##### `snapshotPolicy`<sup>Optional</sup> <a name="snapshotPolicy" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.snapshotPolicy"></a>

```java
public NetappVolumeSnapshotPolicy getSnapshotPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a>

snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#snapshot_policy NetappVolume#snapshot_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.timeouts"></a>

```java
public NetappVolumeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#timeouts NetappVolume#timeouts}

---

##### `unixPermissions`<sup>Optional</sup> <a name="unixPermissions" id="@cdktf/provider-google.netappVolume.NetappVolumeConfig.property.unixPermissions"></a>

```java
public java.lang.String getUnixPermissions();
```

- *Type:* java.lang.String

Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#unix_permissions NetappVolume#unix_permissions}

---

### NetappVolumeExportPolicy <a name="NetappVolumeExportPolicy" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolumeExportPolicy;

NetappVolumeExportPolicy.builder()
    .rules(IResolvable)
    .rules(java.util.List<NetappVolumeExportPolicyRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>></code> | rules block. |

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#rules NetappVolume#rules}

---

### NetappVolumeExportPolicyRules <a name="NetappVolumeExportPolicyRules" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolumeExportPolicyRules;

NetappVolumeExportPolicyRules.builder()
//  .accessType(java.lang.String)
//  .allowedClients(java.lang.String)
//  .hasRootAccess(java.lang.String)
//  .kerberos5IReadOnly(java.lang.Boolean)
//  .kerberos5IReadOnly(IResolvable)
//  .kerberos5IReadWrite(java.lang.Boolean)
//  .kerberos5IReadWrite(IResolvable)
//  .kerberos5PReadOnly(java.lang.Boolean)
//  .kerberos5PReadOnly(IResolvable)
//  .kerberos5PReadWrite(java.lang.Boolean)
//  .kerberos5PReadWrite(IResolvable)
//  .kerberos5ReadOnly(java.lang.Boolean)
//  .kerberos5ReadOnly(IResolvable)
//  .kerberos5ReadWrite(java.lang.Boolean)
//  .kerberos5ReadWrite(IResolvable)
//  .nfsv3(java.lang.Boolean)
//  .nfsv3(IResolvable)
//  .nfsv4(java.lang.Boolean)
//  .nfsv4(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.accessType">accessType</a></code> | <code>java.lang.String</code> | Defines the access type for clients matching the 'allowedClients' specification. Possible values: ["READ_ONLY", "READ_WRITE", "READ_NONE"]. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.allowedClients">allowedClients</a></code> | <code>java.lang.String</code> | Defines the client ingress specification (allowed clients) as a comma seperated list with IPv4 CIDRs or IPv4 host addresses. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.hasRootAccess">hasRootAccess</a></code> | <code>java.lang.String</code> | If enabled, the root user (UID = 0) of the specified clients doesn't get mapped to nobody (UID = 65534). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5IReadOnly">kerberos5IReadOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5IReadWrite">kerberos5IReadWrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5PReadOnly">kerberos5PReadOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5PReadWrite">kerberos5PReadWrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5ReadOnly">kerberos5ReadOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5ReadWrite">kerberos5ReadWrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.nfsv3">nfsv3</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable to apply the export rule to NFSV3 clients. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.nfsv4">nfsv4</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable to apply the export rule to NFSV4.1 clients. |

---

##### `accessType`<sup>Optional</sup> <a name="accessType" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.accessType"></a>

```java
public java.lang.String getAccessType();
```

- *Type:* java.lang.String

Defines the access type for clients matching the 'allowedClients' specification. Possible values: ["READ_ONLY", "READ_WRITE", "READ_NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#access_type NetappVolume#access_type}

---

##### `allowedClients`<sup>Optional</sup> <a name="allowedClients" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.allowedClients"></a>

```java
public java.lang.String getAllowedClients();
```

- *Type:* java.lang.String

Defines the client ingress specification (allowed clients) as a comma seperated list with IPv4 CIDRs or IPv4 host addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#allowed_clients NetappVolume#allowed_clients}

---

##### `hasRootAccess`<sup>Optional</sup> <a name="hasRootAccess" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.hasRootAccess"></a>

```java
public java.lang.String getHasRootAccess();
```

- *Type:* java.lang.String

If enabled, the root user (UID = 0) of the specified clients doesn't get mapped to nobody (UID = 65534).

This is also known as no_root_squash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#has_root_access NetappVolume#has_root_access}

---

##### `kerberos5IReadOnly`<sup>Optional</sup> <a name="kerberos5IReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5IReadOnly"></a>

```java
public java.lang.Object getKerberos5IReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'integrity' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#kerberos5i_read_only NetappVolume#kerberos5i_read_only}

---

##### `kerberos5IReadWrite`<sup>Optional</sup> <a name="kerberos5IReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5IReadWrite"></a>

```java
public java.lang.Object getKerberos5IReadWrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'integrity' kerberos security mode. The 'kerberos5iReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#kerberos5i_read_write NetappVolume#kerberos5i_read_write}

---

##### `kerberos5PReadOnly`<sup>Optional</sup> <a name="kerberos5PReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5PReadOnly"></a>

```java
public java.lang.Object getKerberos5PReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'privacy' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#kerberos5p_read_only NetappVolume#kerberos5p_read_only}

---

##### `kerberos5PReadWrite`<sup>Optional</sup> <a name="kerberos5PReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5PReadWrite"></a>

```java
public java.lang.Object getKerberos5PReadWrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'privacy' kerberos security mode. The 'kerberos5pReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#kerberos5p_read_write NetappVolume#kerberos5p_read_write}

---

##### `kerberos5ReadOnly`<sup>Optional</sup> <a name="kerberos5ReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5ReadOnly"></a>

```java
public java.lang.Object getKerberos5ReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'authentication' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#kerberos5_read_only NetappVolume#kerberos5_read_only}

---

##### `kerberos5ReadWrite`<sup>Optional</sup> <a name="kerberos5ReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5ReadWrite"></a>

```java
public java.lang.Object getKerberos5ReadWrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'authentication' kerberos security mode. The 'kerberos5ReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#kerberos5_read_write NetappVolume#kerberos5_read_write}

---

##### `nfsv3`<sup>Optional</sup> <a name="nfsv3" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.nfsv3"></a>

```java
public java.lang.Object getNfsv3();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable to apply the export rule to NFSV3 clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#nfsv3 NetappVolume#nfsv3}

---

##### `nfsv4`<sup>Optional</sup> <a name="nfsv4" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.nfsv4"></a>

```java
public java.lang.Object getNfsv4();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable to apply the export rule to NFSV4.1 clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#nfsv4 NetappVolume#nfsv4}

---

### NetappVolumeMountOptions <a name="NetappVolumeMountOptions" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolumeMountOptions;

NetappVolumeMountOptions.builder()
    .build();
```


### NetappVolumeRestoreParameters <a name="NetappVolumeRestoreParameters" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolumeRestoreParameters;

NetappVolumeRestoreParameters.builder()
//  .sourceBackup(java.lang.String)
//  .sourceSnapshot(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters.property.sourceBackup">sourceBackup</a></code> | <code>java.lang.String</code> | Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/backupVaults/{{backupVaultId}}/backups/{{backup}}'. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters.property.sourceSnapshot">sourceSnapshot</a></code> | <code>java.lang.String</code> | Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/volumes/{{volume}}/snapshots/{{snapshot}}'. |

---

##### `sourceBackup`<sup>Optional</sup> <a name="sourceBackup" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters.property.sourceBackup"></a>

```java
public java.lang.String getSourceBackup();
```

- *Type:* java.lang.String

Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/backupVaults/{{backupVaultId}}/backups/{{backup}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#source_backup NetappVolume#source_backup}

---

##### `sourceSnapshot`<sup>Optional</sup> <a name="sourceSnapshot" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters.property.sourceSnapshot"></a>

```java
public java.lang.String getSourceSnapshot();
```

- *Type:* java.lang.String

Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/volumes/{{volume}}/snapshots/{{snapshot}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#source_snapshot NetappVolume#source_snapshot}

---

### NetappVolumeSnapshotPolicy <a name="NetappVolumeSnapshotPolicy" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolumeSnapshotPolicy;

NetappVolumeSnapshotPolicy.builder()
//  .dailySchedule(NetappVolumeSnapshotPolicyDailySchedule)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .hourlySchedule(NetappVolumeSnapshotPolicyHourlySchedule)
//  .monthlySchedule(NetappVolumeSnapshotPolicyMonthlySchedule)
//  .weeklySchedule(NetappVolumeSnapshotPolicyWeeklySchedule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.dailySchedule">dailySchedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a></code> | daily_schedule block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables automated snapshot creation according to defined schedule. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.hourlySchedule">hourlySchedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a></code> | hourly_schedule block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.monthlySchedule">monthlySchedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a></code> | monthly_schedule block. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a></code> | weekly_schedule block. |

---

##### `dailySchedule`<sup>Optional</sup> <a name="dailySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.dailySchedule"></a>

```java
public NetappVolumeSnapshotPolicyDailySchedule getDailySchedule();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a>

daily_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#daily_schedule NetappVolume#daily_schedule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables automated snapshot creation according to defined schedule.

Default is false.
To disable automatic snapshot creation you have to remove the whole snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#enabled NetappVolume#enabled}

---

##### `hourlySchedule`<sup>Optional</sup> <a name="hourlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.hourlySchedule"></a>

```java
public NetappVolumeSnapshotPolicyHourlySchedule getHourlySchedule();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a>

hourly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#hourly_schedule NetappVolume#hourly_schedule}

---

##### `monthlySchedule`<sup>Optional</sup> <a name="monthlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.monthlySchedule"></a>

```java
public NetappVolumeSnapshotPolicyMonthlySchedule getMonthlySchedule();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a>

monthly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#monthly_schedule NetappVolume#monthly_schedule}

---

##### `weeklySchedule`<sup>Optional</sup> <a name="weeklySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.weeklySchedule"></a>

```java
public NetappVolumeSnapshotPolicyWeeklySchedule getWeeklySchedule();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#weekly_schedule NetappVolume#weekly_schedule}

---

### NetappVolumeSnapshotPolicyDailySchedule <a name="NetappVolumeSnapshotPolicyDailySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolumeSnapshotPolicyDailySchedule;

NetappVolumeSnapshotPolicyDailySchedule.builder()
    .snapshotsToKeep(java.lang.Number)
//  .hour(java.lang.Number)
//  .minute(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>java.lang.Number</code> | The maximum number of snapshots to keep for the daily schedule. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.hour">hour</a></code> | <code>java.lang.Number</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.minute">minute</a></code> | <code>java.lang.Number</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.snapshotsToKeep"></a>

```java
public java.lang.Number getSnapshotsToKeep();
```

- *Type:* java.lang.Number

The maximum number of snapshots to keep for the daily schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#snapshots_to_keep NetappVolume#snapshots_to_keep}

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#hour NetappVolume#hour}

---

##### `minute`<sup>Optional</sup> <a name="minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.minute"></a>

```java
public java.lang.Number getMinute();
```

- *Type:* java.lang.Number

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#minute NetappVolume#minute}

---

### NetappVolumeSnapshotPolicyHourlySchedule <a name="NetappVolumeSnapshotPolicyHourlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolumeSnapshotPolicyHourlySchedule;

NetappVolumeSnapshotPolicyHourlySchedule.builder()
    .snapshotsToKeep(java.lang.Number)
//  .minute(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>java.lang.Number</code> | The maximum number of snapshots to keep for the hourly schedule. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule.property.minute">minute</a></code> | <code>java.lang.Number</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule.property.snapshotsToKeep"></a>

```java
public java.lang.Number getSnapshotsToKeep();
```

- *Type:* java.lang.Number

The maximum number of snapshots to keep for the hourly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#snapshots_to_keep NetappVolume#snapshots_to_keep}

---

##### `minute`<sup>Optional</sup> <a name="minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule.property.minute"></a>

```java
public java.lang.Number getMinute();
```

- *Type:* java.lang.Number

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#minute NetappVolume#minute}

---

### NetappVolumeSnapshotPolicyMonthlySchedule <a name="NetappVolumeSnapshotPolicyMonthlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolumeSnapshotPolicyMonthlySchedule;

NetappVolumeSnapshotPolicyMonthlySchedule.builder()
    .snapshotsToKeep(java.lang.Number)
//  .daysOfMonth(java.lang.String)
//  .hour(java.lang.Number)
//  .minute(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>java.lang.Number</code> | The maximum number of snapshots to keep for the monthly schedule. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.daysOfMonth">daysOfMonth</a></code> | <code>java.lang.String</code> | Set the day or days of the month to make a snapshot (1-31). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.hour">hour</a></code> | <code>java.lang.Number</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.minute">minute</a></code> | <code>java.lang.Number</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.snapshotsToKeep"></a>

```java
public java.lang.Number getSnapshotsToKeep();
```

- *Type:* java.lang.Number

The maximum number of snapshots to keep for the monthly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#snapshots_to_keep NetappVolume#snapshots_to_keep}

---

##### `daysOfMonth`<sup>Optional</sup> <a name="daysOfMonth" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.daysOfMonth"></a>

```java
public java.lang.String getDaysOfMonth();
```

- *Type:* java.lang.String

Set the day or days of the month to make a snapshot (1-31).

Accepts a comma separated number of days. Defaults to '1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#days_of_month NetappVolume#days_of_month}

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#hour NetappVolume#hour}

---

##### `minute`<sup>Optional</sup> <a name="minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.minute"></a>

```java
public java.lang.Number getMinute();
```

- *Type:* java.lang.Number

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#minute NetappVolume#minute}

---

### NetappVolumeSnapshotPolicyWeeklySchedule <a name="NetappVolumeSnapshotPolicyWeeklySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolumeSnapshotPolicyWeeklySchedule;

NetappVolumeSnapshotPolicyWeeklySchedule.builder()
    .snapshotsToKeep(java.lang.Number)
//  .day(java.lang.String)
//  .hour(java.lang.Number)
//  .minute(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>java.lang.Number</code> | The maximum number of snapshots to keep for the weekly schedule. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.day">day</a></code> | <code>java.lang.String</code> | Set the day or days of the week to make a snapshot. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.hour">hour</a></code> | <code>java.lang.Number</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.minute">minute</a></code> | <code>java.lang.Number</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.snapshotsToKeep"></a>

```java
public java.lang.Number getSnapshotsToKeep();
```

- *Type:* java.lang.Number

The maximum number of snapshots to keep for the weekly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#snapshots_to_keep NetappVolume#snapshots_to_keep}

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

Set the day or days of the week to make a snapshot.

Accepts a comma separated days of the week. Defaults to 'Sunday'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#day NetappVolume#day}

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#hour NetappVolume#hour}

---

##### `minute`<sup>Optional</sup> <a name="minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.minute"></a>

```java
public java.lang.Number getMinute();
```

- *Type:* java.lang.Number

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#minute NetappVolume#minute}

---

### NetappVolumeTimeouts <a name="NetappVolumeTimeouts" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolumeTimeouts;

NetappVolumeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#create NetappVolume#create}. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#delete NetappVolume#delete}. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#update NetappVolume#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#create NetappVolume#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#delete NetappVolume#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/netapp_volume#update NetappVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeExportPolicyOutputReference <a name="NetappVolumeExportPolicyOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolumeExportPolicyOutputReference;

new NetappVolumeExportPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.putRules">putRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<NetappVolumeExportPolicyRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList">NetappVolumeExportPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.rules"></a>

```java
public NetappVolumeExportPolicyRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList">NetappVolumeExportPolicyRulesList</a>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.internalValue"></a>

```java
public NetappVolumeExportPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a>

---


### NetappVolumeExportPolicyRulesList <a name="NetappVolumeExportPolicyRulesList" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolumeExportPolicyRulesList;

new NetappVolumeExportPolicyRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.get"></a>

```java
public NetappVolumeExportPolicyRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>>

---


### NetappVolumeExportPolicyRulesOutputReference <a name="NetappVolumeExportPolicyRulesOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolumeExportPolicyRulesOutputReference;

new NetappVolumeExportPolicyRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetAccessType">resetAccessType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetAllowedClients">resetAllowedClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetHasRootAccess">resetHasRootAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadOnly">resetKerberos5IReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadWrite">resetKerberos5IReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadOnly">resetKerberos5PReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadWrite">resetKerberos5PReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadOnly">resetKerberos5ReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadWrite">resetKerberos5ReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetNfsv3">resetNfsv3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetNfsv4">resetNfsv4</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessType` <a name="resetAccessType" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetAccessType"></a>

```java
public void resetAccessType()
```

##### `resetAllowedClients` <a name="resetAllowedClients" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetAllowedClients"></a>

```java
public void resetAllowedClients()
```

##### `resetHasRootAccess` <a name="resetHasRootAccess" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetHasRootAccess"></a>

```java
public void resetHasRootAccess()
```

##### `resetKerberos5IReadOnly` <a name="resetKerberos5IReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadOnly"></a>

```java
public void resetKerberos5IReadOnly()
```

##### `resetKerberos5IReadWrite` <a name="resetKerberos5IReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadWrite"></a>

```java
public void resetKerberos5IReadWrite()
```

##### `resetKerberos5PReadOnly` <a name="resetKerberos5PReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadOnly"></a>

```java
public void resetKerberos5PReadOnly()
```

##### `resetKerberos5PReadWrite` <a name="resetKerberos5PReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadWrite"></a>

```java
public void resetKerberos5PReadWrite()
```

##### `resetKerberos5ReadOnly` <a name="resetKerberos5ReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadOnly"></a>

```java
public void resetKerberos5ReadOnly()
```

##### `resetKerberos5ReadWrite` <a name="resetKerberos5ReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadWrite"></a>

```java
public void resetKerberos5ReadWrite()
```

##### `resetNfsv3` <a name="resetNfsv3" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetNfsv3"></a>

```java
public void resetNfsv3()
```

##### `resetNfsv4` <a name="resetNfsv4" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetNfsv4"></a>

```java
public void resetNfsv4()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.accessTypeInput">accessTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.allowedClientsInput">allowedClientsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.hasRootAccessInput">hasRootAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnlyInput">kerberos5IReadOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWriteInput">kerberos5IReadWriteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnlyInput">kerberos5PReadOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWriteInput">kerberos5PReadWriteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnlyInput">kerberos5ReadOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWriteInput">kerberos5ReadWriteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv3Input">nfsv3Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv4Input">nfsv4Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.accessType">accessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.allowedClients">allowedClients</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.hasRootAccess">hasRootAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnly">kerberos5IReadOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWrite">kerberos5IReadWrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnly">kerberos5PReadOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWrite">kerberos5PReadWrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnly">kerberos5ReadOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWrite">kerberos5ReadWrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv3">nfsv3</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv4">nfsv4</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessTypeInput`<sup>Optional</sup> <a name="accessTypeInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.accessTypeInput"></a>

```java
public java.lang.String getAccessTypeInput();
```

- *Type:* java.lang.String

---

##### `allowedClientsInput`<sup>Optional</sup> <a name="allowedClientsInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.allowedClientsInput"></a>

```java
public java.lang.String getAllowedClientsInput();
```

- *Type:* java.lang.String

---

##### `hasRootAccessInput`<sup>Optional</sup> <a name="hasRootAccessInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.hasRootAccessInput"></a>

```java
public java.lang.String getHasRootAccessInput();
```

- *Type:* java.lang.String

---

##### `kerberos5IReadOnlyInput`<sup>Optional</sup> <a name="kerberos5IReadOnlyInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnlyInput"></a>

```java
public java.lang.Object getKerberos5IReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kerberos5IReadWriteInput`<sup>Optional</sup> <a name="kerberos5IReadWriteInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWriteInput"></a>

```java
public java.lang.Object getKerberos5IReadWriteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kerberos5PReadOnlyInput`<sup>Optional</sup> <a name="kerberos5PReadOnlyInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnlyInput"></a>

```java
public java.lang.Object getKerberos5PReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kerberos5PReadWriteInput`<sup>Optional</sup> <a name="kerberos5PReadWriteInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWriteInput"></a>

```java
public java.lang.Object getKerberos5PReadWriteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kerberos5ReadOnlyInput`<sup>Optional</sup> <a name="kerberos5ReadOnlyInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnlyInput"></a>

```java
public java.lang.Object getKerberos5ReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kerberos5ReadWriteInput`<sup>Optional</sup> <a name="kerberos5ReadWriteInput" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWriteInput"></a>

```java
public java.lang.Object getKerberos5ReadWriteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nfsv3Input`<sup>Optional</sup> <a name="nfsv3Input" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv3Input"></a>

```java
public java.lang.Object getNfsv3Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nfsv4Input`<sup>Optional</sup> <a name="nfsv4Input" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv4Input"></a>

```java
public java.lang.Object getNfsv4Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.accessType"></a>

```java
public java.lang.String getAccessType();
```

- *Type:* java.lang.String

---

##### `allowedClients`<sup>Required</sup> <a name="allowedClients" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.allowedClients"></a>

```java
public java.lang.String getAllowedClients();
```

- *Type:* java.lang.String

---

##### `hasRootAccess`<sup>Required</sup> <a name="hasRootAccess" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.hasRootAccess"></a>

```java
public java.lang.String getHasRootAccess();
```

- *Type:* java.lang.String

---

##### `kerberos5IReadOnly`<sup>Required</sup> <a name="kerberos5IReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnly"></a>

```java
public java.lang.Object getKerberos5IReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kerberos5IReadWrite`<sup>Required</sup> <a name="kerberos5IReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWrite"></a>

```java
public java.lang.Object getKerberos5IReadWrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kerberos5PReadOnly`<sup>Required</sup> <a name="kerberos5PReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnly"></a>

```java
public java.lang.Object getKerberos5PReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kerberos5PReadWrite`<sup>Required</sup> <a name="kerberos5PReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWrite"></a>

```java
public java.lang.Object getKerberos5PReadWrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kerberos5ReadOnly`<sup>Required</sup> <a name="kerberos5ReadOnly" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnly"></a>

```java
public java.lang.Object getKerberos5ReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kerberos5ReadWrite`<sup>Required</sup> <a name="kerberos5ReadWrite" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWrite"></a>

```java
public java.lang.Object getKerberos5ReadWrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nfsv3`<sup>Required</sup> <a name="nfsv3" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv3"></a>

```java
public java.lang.Object getNfsv3();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nfsv4`<sup>Required</sup> <a name="nfsv4" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv4"></a>

```java
public java.lang.Object getNfsv4();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>

---


### NetappVolumeMountOptionsList <a name="NetappVolumeMountOptionsList" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolumeMountOptionsList;

new NetappVolumeMountOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.get"></a>

```java
public NetappVolumeMountOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### NetappVolumeMountOptionsOutputReference <a name="NetappVolumeMountOptionsOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolumeMountOptionsOutputReference;

new NetappVolumeMountOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.export">export</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.exportFull">exportFull</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.instructions">instructions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptions">NetappVolumeMountOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `export`<sup>Required</sup> <a name="export" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.export"></a>

```java
public java.lang.String getExport();
```

- *Type:* java.lang.String

---

##### `exportFull`<sup>Required</sup> <a name="exportFull" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.exportFull"></a>

```java
public java.lang.String getExportFull();
```

- *Type:* java.lang.String

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.instructions"></a>

```java
public java.lang.String getInstructions();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.internalValue"></a>

```java
public NetappVolumeMountOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeMountOptions">NetappVolumeMountOptions</a>

---


### NetappVolumeRestoreParametersOutputReference <a name="NetappVolumeRestoreParametersOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolumeRestoreParametersOutputReference;

new NetappVolumeRestoreParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resetSourceBackup">resetSourceBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resetSourceSnapshot">resetSourceSnapshot</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceBackup` <a name="resetSourceBackup" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resetSourceBackup"></a>

```java
public void resetSourceBackup()
```

##### `resetSourceSnapshot` <a name="resetSourceSnapshot" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resetSourceSnapshot"></a>

```java
public void resetSourceSnapshot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceBackupInput">sourceBackupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceSnapshotInput">sourceSnapshotInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceBackup">sourceBackup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceSnapshot">sourceSnapshot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceBackupInput`<sup>Optional</sup> <a name="sourceBackupInput" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceBackupInput"></a>

```java
public java.lang.String getSourceBackupInput();
```

- *Type:* java.lang.String

---

##### `sourceSnapshotInput`<sup>Optional</sup> <a name="sourceSnapshotInput" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceSnapshotInput"></a>

```java
public java.lang.String getSourceSnapshotInput();
```

- *Type:* java.lang.String

---

##### `sourceBackup`<sup>Required</sup> <a name="sourceBackup" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceBackup"></a>

```java
public java.lang.String getSourceBackup();
```

- *Type:* java.lang.String

---

##### `sourceSnapshot`<sup>Required</sup> <a name="sourceSnapshot" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceSnapshot"></a>

```java
public java.lang.String getSourceSnapshot();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.internalValue"></a>

```java
public NetappVolumeRestoreParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a>

---


### NetappVolumeSnapshotPolicyDailyScheduleOutputReference <a name="NetappVolumeSnapshotPolicyDailyScheduleOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference;

new NetappVolumeSnapshotPolicyDailyScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetHour">resetHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetMinute">resetMinute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHour` <a name="resetHour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetHour"></a>

```java
public void resetHour()
```

##### `resetMinute` <a name="resetMinute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetMinute"></a>

```java
public void resetMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hourInput">hourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minuteInput">minuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeepInput">snapshotsToKeepInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hour">hour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minute">minute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hourInput"></a>

```java
public java.lang.Number getHourInput();
```

- *Type:* java.lang.Number

---

##### `minuteInput`<sup>Optional</sup> <a name="minuteInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minuteInput"></a>

```java
public java.lang.Number getMinuteInput();
```

- *Type:* java.lang.Number

---

##### `snapshotsToKeepInput`<sup>Optional</sup> <a name="snapshotsToKeepInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```java
public java.lang.Number getSnapshotsToKeepInput();
```

- *Type:* java.lang.Number

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minute"></a>

```java
public java.lang.Number getMinute();
```

- *Type:* java.lang.Number

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep"></a>

```java
public java.lang.Number getSnapshotsToKeep();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.internalValue"></a>

```java
public NetappVolumeSnapshotPolicyDailySchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a>

---


### NetappVolumeSnapshotPolicyHourlyScheduleOutputReference <a name="NetappVolumeSnapshotPolicyHourlyScheduleOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference;

new NetappVolumeSnapshotPolicyHourlyScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resetMinute">resetMinute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinute` <a name="resetMinute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resetMinute"></a>

```java
public void resetMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minuteInput">minuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeepInput">snapshotsToKeepInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minute">minute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `minuteInput`<sup>Optional</sup> <a name="minuteInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minuteInput"></a>

```java
public java.lang.Number getMinuteInput();
```

- *Type:* java.lang.Number

---

##### `snapshotsToKeepInput`<sup>Optional</sup> <a name="snapshotsToKeepInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```java
public java.lang.Number getSnapshotsToKeepInput();
```

- *Type:* java.lang.Number

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minute"></a>

```java
public java.lang.Number getMinute();
```

- *Type:* java.lang.Number

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep"></a>

```java
public java.lang.Number getSnapshotsToKeep();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.internalValue"></a>

```java
public NetappVolumeSnapshotPolicyHourlySchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a>

---


### NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference <a name="NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference;

new NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetDaysOfMonth">resetDaysOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetHour">resetHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetMinute">resetMinute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysOfMonth` <a name="resetDaysOfMonth" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetDaysOfMonth"></a>

```java
public void resetDaysOfMonth()
```

##### `resetHour` <a name="resetHour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetHour"></a>

```java
public void resetHour()
```

##### `resetMinute` <a name="resetMinute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetMinute"></a>

```java
public void resetMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonthInput">daysOfMonthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hourInput">hourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minuteInput">minuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeepInput">snapshotsToKeepInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth">daysOfMonth</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hour">hour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minute">minute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysOfMonthInput`<sup>Optional</sup> <a name="daysOfMonthInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonthInput"></a>

```java
public java.lang.String getDaysOfMonthInput();
```

- *Type:* java.lang.String

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hourInput"></a>

```java
public java.lang.Number getHourInput();
```

- *Type:* java.lang.Number

---

##### `minuteInput`<sup>Optional</sup> <a name="minuteInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minuteInput"></a>

```java
public java.lang.Number getMinuteInput();
```

- *Type:* java.lang.Number

---

##### `snapshotsToKeepInput`<sup>Optional</sup> <a name="snapshotsToKeepInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```java
public java.lang.Number getSnapshotsToKeepInput();
```

- *Type:* java.lang.Number

---

##### `daysOfMonth`<sup>Required</sup> <a name="daysOfMonth" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth"></a>

```java
public java.lang.String getDaysOfMonth();
```

- *Type:* java.lang.String

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minute"></a>

```java
public java.lang.Number getMinute();
```

- *Type:* java.lang.Number

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep"></a>

```java
public java.lang.Number getSnapshotsToKeep();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue"></a>

```java
public NetappVolumeSnapshotPolicyMonthlySchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a>

---


### NetappVolumeSnapshotPolicyOutputReference <a name="NetappVolumeSnapshotPolicyOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolumeSnapshotPolicyOutputReference;

new NetappVolumeSnapshotPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putDailySchedule">putDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putHourlySchedule">putHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule">putMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule">putWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetDailySchedule">resetDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetHourlySchedule">resetHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetMonthlySchedule">resetMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetWeeklySchedule">resetWeeklySchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDailySchedule` <a name="putDailySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putDailySchedule"></a>

```java
public void putDailySchedule(NetappVolumeSnapshotPolicyDailySchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putDailySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a>

---

##### `putHourlySchedule` <a name="putHourlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putHourlySchedule"></a>

```java
public void putHourlySchedule(NetappVolumeSnapshotPolicyHourlySchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putHourlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a>

---

##### `putMonthlySchedule` <a name="putMonthlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule"></a>

```java
public void putMonthlySchedule(NetappVolumeSnapshotPolicyMonthlySchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a>

---

##### `putWeeklySchedule` <a name="putWeeklySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule"></a>

```java
public void putWeeklySchedule(NetappVolumeSnapshotPolicyWeeklySchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a>

---

##### `resetDailySchedule` <a name="resetDailySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetDailySchedule"></a>

```java
public void resetDailySchedule()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetHourlySchedule` <a name="resetHourlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetHourlySchedule"></a>

```java
public void resetHourlySchedule()
```

##### `resetMonthlySchedule` <a name="resetMonthlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetMonthlySchedule"></a>

```java
public void resetMonthlySchedule()
```

##### `resetWeeklySchedule` <a name="resetWeeklySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetWeeklySchedule"></a>

```java
public void resetWeeklySchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.dailySchedule">dailySchedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference">NetappVolumeSnapshotPolicyDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.hourlySchedule">hourlySchedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference">NetappVolumeSnapshotPolicyHourlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.monthlySchedule">monthlySchedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference">NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference">NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.dailyScheduleInput">dailyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.hourlyScheduleInput">hourlyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.monthlyScheduleInput">monthlyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.weeklyScheduleInput">weeklyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dailySchedule`<sup>Required</sup> <a name="dailySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.dailySchedule"></a>

```java
public NetappVolumeSnapshotPolicyDailyScheduleOutputReference getDailySchedule();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference">NetappVolumeSnapshotPolicyDailyScheduleOutputReference</a>

---

##### `hourlySchedule`<sup>Required</sup> <a name="hourlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.hourlySchedule"></a>

```java
public NetappVolumeSnapshotPolicyHourlyScheduleOutputReference getHourlySchedule();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference">NetappVolumeSnapshotPolicyHourlyScheduleOutputReference</a>

---

##### `monthlySchedule`<sup>Required</sup> <a name="monthlySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.monthlySchedule"></a>

```java
public NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference getMonthlySchedule();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference">NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference</a>

---

##### `weeklySchedule`<sup>Required</sup> <a name="weeklySchedule" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.weeklySchedule"></a>

```java
public NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference getWeeklySchedule();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference">NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference</a>

---

##### `dailyScheduleInput`<sup>Optional</sup> <a name="dailyScheduleInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.dailyScheduleInput"></a>

```java
public NetappVolumeSnapshotPolicyDailySchedule getDailyScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hourlyScheduleInput`<sup>Optional</sup> <a name="hourlyScheduleInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.hourlyScheduleInput"></a>

```java
public NetappVolumeSnapshotPolicyHourlySchedule getHourlyScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a>

---

##### `monthlyScheduleInput`<sup>Optional</sup> <a name="monthlyScheduleInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.monthlyScheduleInput"></a>

```java
public NetappVolumeSnapshotPolicyMonthlySchedule getMonthlyScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a>

---

##### `weeklyScheduleInput`<sup>Optional</sup> <a name="weeklyScheduleInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.weeklyScheduleInput"></a>

```java
public NetappVolumeSnapshotPolicyWeeklySchedule getWeeklyScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.internalValue"></a>

```java
public NetappVolumeSnapshotPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a>

---


### NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference <a name="NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference;

new NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetHour">resetHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetMinute">resetMinute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetDay"></a>

```java
public void resetDay()
```

##### `resetHour` <a name="resetHour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetHour"></a>

```java
public void resetHour()
```

##### `resetMinute` <a name="resetMinute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetMinute"></a>

```java
public void resetMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hourInput">hourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minuteInput">minuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeepInput">snapshotsToKeepInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.day">day</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hour">hour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minute">minute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.dayInput"></a>

```java
public java.lang.String getDayInput();
```

- *Type:* java.lang.String

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hourInput"></a>

```java
public java.lang.Number getHourInput();
```

- *Type:* java.lang.Number

---

##### `minuteInput`<sup>Optional</sup> <a name="minuteInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minuteInput"></a>

```java
public java.lang.Number getMinuteInput();
```

- *Type:* java.lang.Number

---

##### `snapshotsToKeepInput`<sup>Optional</sup> <a name="snapshotsToKeepInput" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```java
public java.lang.Number getSnapshotsToKeepInput();
```

- *Type:* java.lang.Number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minute"></a>

```java
public java.lang.Number getMinute();
```

- *Type:* java.lang.Number

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep"></a>

```java
public java.lang.Number getSnapshotsToKeep();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue"></a>

```java
public NetappVolumeSnapshotPolicyWeeklySchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a>

---


### NetappVolumeTimeoutsOutputReference <a name="NetappVolumeTimeoutsOutputReference" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.netapp_volume.NetappVolumeTimeoutsOutputReference;

new NetappVolumeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

---



