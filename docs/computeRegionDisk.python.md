# `computeRegionDisk` Submodule <a name="`computeRegionDisk` Submodule" id="@cdktf/provider-google.computeRegionDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionDisk <a name="ComputeRegionDisk" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk google_compute_region_disk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_disk

computeRegionDisk.ComputeRegionDisk(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  replica_zones: typing.List[str],
  access_mode: str = None,
  async_primary_disk: ComputeRegionDiskAsyncPrimaryDisk = None,
  create_snapshot_before_destroy: typing.Union[bool, IResolvable] = None,
  create_snapshot_before_destroy_prefix: str = None,
  description: str = None,
  disk_encryption_key: ComputeRegionDiskDiskEncryptionKey = None,
  guest_os_features: typing.Union[IResolvable, typing.List[ComputeRegionDiskGuestOsFeatures]] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  licenses: typing.List[str] = None,
  physical_block_size_bytes: typing.Union[int, float] = None,
  project: str = None,
  provisioned_iops: typing.Union[int, float] = None,
  provisioned_throughput: typing.Union[int, float] = None,
  region: str = None,
  size: typing.Union[int, float] = None,
  snapshot: str = None,
  source_disk: str = None,
  source_snapshot_encryption_key: ComputeRegionDiskSourceSnapshotEncryptionKey = None,
  timeouts: ComputeRegionDiskTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.replicaZones">replica_zones</a></code> | <code>typing.List[str]</code> | URLs of the zones where the disk should be replicated to. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.accessMode">access_mode</a></code> | <code>str</code> | The access mode of the disk. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.asyncPrimaryDisk">async_primary_disk</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDisk">ComputeRegionDiskAsyncPrimaryDisk</a></code> | async_primary_disk block. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.createSnapshotBeforeDestroy">create_snapshot_before_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, a snapshot of the disk will be created before it is destroyed. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.createSnapshotBeforeDestroyPrefix">create_snapshot_before_destroy_prefix</a></code> | <code>str</code> | This will set a custom name prefix for the snapshot that's created when the disk is deleted. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.diskEncryptionKey">disk_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey">ComputeRegionDiskDiskEncryptionKey</a></code> | disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.guestOsFeatures">guest_os_features</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeatures">ComputeRegionDiskGuestOsFeatures</a>]]</code> | guest_os_features block. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#id ComputeRegionDisk#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this disk.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.licenses">licenses</a></code> | <code>typing.List[str]</code> | Any applicable license URI. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.physicalBlockSizeBytes">physical_block_size_bytes</a></code> | <code>typing.Union[int, float]</code> | Physical block size of the persistent disk, in bytes. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#project ComputeRegionDisk#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.provisionedIops">provisioned_iops</a></code> | <code>typing.Union[int, float]</code> | Indicates how many IOPS to provision for the disk. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.provisionedThroughput">provisioned_throughput</a></code> | <code>typing.Union[int, float]</code> | Indicates how much throughput to provision for the disk. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.region">region</a></code> | <code>str</code> | A reference to the region where the disk resides. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.size">size</a></code> | <code>typing.Union[int, float]</code> | Size of the persistent disk, specified in GB. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.snapshot">snapshot</a></code> | <code>str</code> | The source snapshot used to create this disk. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.sourceDisk">source_disk</a></code> | <code>str</code> | The source disk used to create this disk. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.sourceSnapshotEncryptionKey">source_snapshot_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKey">ComputeRegionDiskSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts">ComputeRegionDiskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.type">type</a></code> | <code>str</code> | URL of the disk type resource describing which disk type to use to create the disk. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#name ComputeRegionDisk#name}

---

##### `replica_zones`<sup>Required</sup> <a name="replica_zones" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.replicaZones"></a>

- *Type:* typing.List[str]

URLs of the zones where the disk should be replicated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#replica_zones ComputeRegionDisk#replica_zones}

---

##### `access_mode`<sup>Optional</sup> <a name="access_mode" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.accessMode"></a>

- *Type:* str

The access mode of the disk.

For example:

* READ_WRITE_SINGLE: The default AccessMode, means the disk can be attached to single instance in RW mode.
* READ_WRITE_MANY: The AccessMode means the disk can be attached to multiple instances in RW mode.
* READ_ONLY_SINGLE: The AccessMode means the disk can be attached to multiple instances in RO mode.
  The AccessMode is only valid for Hyperdisk disk types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#access_mode ComputeRegionDisk#access_mode}

---

##### `async_primary_disk`<sup>Optional</sup> <a name="async_primary_disk" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.asyncPrimaryDisk"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDisk">ComputeRegionDiskAsyncPrimaryDisk</a>

async_primary_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#async_primary_disk ComputeRegionDisk#async_primary_disk}

---

##### `create_snapshot_before_destroy`<sup>Optional</sup> <a name="create_snapshot_before_destroy" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.createSnapshotBeforeDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, a snapshot of the disk will be created before it is destroyed.

If your disk is encrypted with customer managed encryption keys these will be reused for the snapshot creation.
The name of the snapshot by default will be '{{disk-name}}-YYYYMMDD-HHmm'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#create_snapshot_before_destroy ComputeRegionDisk#create_snapshot_before_destroy}

---

##### `create_snapshot_before_destroy_prefix`<sup>Optional</sup> <a name="create_snapshot_before_destroy_prefix" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.createSnapshotBeforeDestroyPrefix"></a>

- *Type:* str

This will set a custom name prefix for the snapshot that's created when the disk is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#create_snapshot_before_destroy_prefix ComputeRegionDisk#create_snapshot_before_destroy_prefix}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#description ComputeRegionDisk#description}

---

##### `disk_encryption_key`<sup>Optional</sup> <a name="disk_encryption_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.diskEncryptionKey"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey">ComputeRegionDiskDiskEncryptionKey</a>

disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#disk_encryption_key ComputeRegionDisk#disk_encryption_key}

---

##### `guest_os_features`<sup>Optional</sup> <a name="guest_os_features" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.guestOsFeatures"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeatures">ComputeRegionDiskGuestOsFeatures</a>]]

guest_os_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#guest_os_features ComputeRegionDisk#guest_os_features}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#id ComputeRegionDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels to apply to this disk.  A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#labels ComputeRegionDisk#labels}

---

##### `licenses`<sup>Optional</sup> <a name="licenses" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.licenses"></a>

- *Type:* typing.List[str]

Any applicable license URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#licenses ComputeRegionDisk#licenses}

---

##### `physical_block_size_bytes`<sup>Optional</sup> <a name="physical_block_size_bytes" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.physicalBlockSizeBytes"></a>

- *Type:* typing.Union[int, float]

Physical block size of the persistent disk, in bytes.

If not present
in a request, a default value is used. Currently supported sizes
are 4096 and 16384, other sizes may be added in the future.
If an unsupported value is requested, the error message will list
the supported values for the caller's project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#physical_block_size_bytes ComputeRegionDisk#physical_block_size_bytes}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#project ComputeRegionDisk#project}.

---

##### `provisioned_iops`<sup>Optional</sup> <a name="provisioned_iops" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.provisionedIops"></a>

- *Type:* typing.Union[int, float]

Indicates how many IOPS to provision for the disk.

This sets the number of I/O operations per second
that the disk can handle. Values must be between 10,000 and 120,000.
For more details, see the Extreme persistent disk [documentation](https://cloud.google.com/compute/docs/disks/extreme-persistent-disk).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#provisioned_iops ComputeRegionDisk#provisioned_iops}

---

##### `provisioned_throughput`<sup>Optional</sup> <a name="provisioned_throughput" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.provisionedThroughput"></a>

- *Type:* typing.Union[int, float]

Indicates how much throughput to provision for the disk.

This sets the number of throughput
mb per second that the disk can handle. Values must be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#provisioned_throughput ComputeRegionDisk#provisioned_throughput}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.region"></a>

- *Type:* str

A reference to the region where the disk resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#region ComputeRegionDisk#region}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.size"></a>

- *Type:* typing.Union[int, float]

Size of the persistent disk, specified in GB.

You can specify this
field when creating a persistent disk using the sourceImage or
sourceSnapshot parameter, or specify it alone to create an empty
persistent disk.

If you specify this field along with sourceImage or sourceSnapshot,
the value of sizeGb must not be less than the size of the sourceImage
or the size of the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#size ComputeRegionDisk#size}

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.snapshot"></a>

- *Type:* str

The source snapshot used to create this disk.

You can provide this as
a partial or full URL to the resource. For example, the following are
valid values:

* 'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot'
* 'projects/project/global/snapshots/snapshot'
* 'global/snapshots/snapshot'
* 'snapshot'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#snapshot ComputeRegionDisk#snapshot}

---

##### `source_disk`<sup>Optional</sup> <a name="source_disk" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.sourceDisk"></a>

- *Type:* str

The source disk used to create this disk.

You can provide this as a partial or full URL to the resource.
For example, the following are valid values:

* https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/disks/{disk}
* https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/disks/{disk}
* projects/{project}/zones/{zone}/disks/{disk}
* projects/{project}/regions/{region}/disks/{disk}
* zones/{zone}/disks/{disk}
* regions/{region}/disks/{disk}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#source_disk ComputeRegionDisk#source_disk}

---

##### `source_snapshot_encryption_key`<sup>Optional</sup> <a name="source_snapshot_encryption_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.sourceSnapshotEncryptionKey"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKey">ComputeRegionDiskSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#source_snapshot_encryption_key ComputeRegionDisk#source_snapshot_encryption_key}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts">ComputeRegionDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#timeouts ComputeRegionDisk#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.type"></a>

- *Type:* str

URL of the disk type resource describing which disk type to use to create the disk.

Provide this when creating the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#type ComputeRegionDisk#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putAsyncPrimaryDisk">put_async_primary_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putDiskEncryptionKey">put_disk_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putGuestOsFeatures">put_guest_os_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putSourceSnapshotEncryptionKey">put_source_snapshot_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetAccessMode">reset_access_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetAsyncPrimaryDisk">reset_async_primary_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetCreateSnapshotBeforeDestroy">reset_create_snapshot_before_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetCreateSnapshotBeforeDestroyPrefix">reset_create_snapshot_before_destroy_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetDiskEncryptionKey">reset_disk_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetGuestOsFeatures">reset_guest_os_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetLicenses">reset_licenses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetPhysicalBlockSizeBytes">reset_physical_block_size_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetProvisionedIops">reset_provisioned_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetProvisionedThroughput">reset_provisioned_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetSize">reset_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetSnapshot">reset_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetSourceDisk">reset_source_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetSourceSnapshotEncryptionKey">reset_source_snapshot_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_async_primary_disk` <a name="put_async_primary_disk" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putAsyncPrimaryDisk"></a>

```python
def put_async_primary_disk(
  disk: str
) -> None
```

###### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putAsyncPrimaryDisk.parameter.disk"></a>

- *Type:* str

Primary disk for asynchronous disk replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#disk ComputeRegionDisk#disk}

---

##### `put_disk_encryption_key` <a name="put_disk_encryption_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putDiskEncryptionKey"></a>

```python
def put_disk_encryption_key(
  kms_key_name: str = None,
  raw_key: str = None,
  rsa_encrypted_key: str = None
) -> None
```

###### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putDiskEncryptionKey.parameter.kmsKeyName"></a>

- *Type:* str

The name of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#kms_key_name ComputeRegionDisk#kms_key_name}

---

###### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putDiskEncryptionKey.parameter.rawKey"></a>

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#raw_key ComputeRegionDisk#raw_key}

---

###### `rsa_encrypted_key`<sup>Optional</sup> <a name="rsa_encrypted_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putDiskEncryptionKey.parameter.rsaEncryptedKey"></a>

- *Type:* str

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

You can provide either the rawKey or the rsaEncryptedKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#rsa_encrypted_key ComputeRegionDisk#rsa_encrypted_key}

---

##### `put_guest_os_features` <a name="put_guest_os_features" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putGuestOsFeatures"></a>

```python
def put_guest_os_features(
  value: typing.Union[IResolvable, typing.List[ComputeRegionDiskGuestOsFeatures]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putGuestOsFeatures.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeatures">ComputeRegionDiskGuestOsFeatures</a>]]

---

##### `put_source_snapshot_encryption_key` <a name="put_source_snapshot_encryption_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putSourceSnapshotEncryptionKey"></a>

```python
def put_source_snapshot_encryption_key(
  raw_key: str = None
) -> None
```

###### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putSourceSnapshotEncryptionKey.parameter.rawKey"></a>

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#raw_key ComputeRegionDisk#raw_key}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#create ComputeRegionDisk#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#delete ComputeRegionDisk#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#update ComputeRegionDisk#update}.

---

##### `reset_access_mode` <a name="reset_access_mode" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetAccessMode"></a>

```python
def reset_access_mode() -> None
```

##### `reset_async_primary_disk` <a name="reset_async_primary_disk" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetAsyncPrimaryDisk"></a>

```python
def reset_async_primary_disk() -> None
```

##### `reset_create_snapshot_before_destroy` <a name="reset_create_snapshot_before_destroy" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetCreateSnapshotBeforeDestroy"></a>

```python
def reset_create_snapshot_before_destroy() -> None
```

##### `reset_create_snapshot_before_destroy_prefix` <a name="reset_create_snapshot_before_destroy_prefix" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetCreateSnapshotBeforeDestroyPrefix"></a>

```python
def reset_create_snapshot_before_destroy_prefix() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disk_encryption_key` <a name="reset_disk_encryption_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetDiskEncryptionKey"></a>

```python
def reset_disk_encryption_key() -> None
```

##### `reset_guest_os_features` <a name="reset_guest_os_features" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetGuestOsFeatures"></a>

```python
def reset_guest_os_features() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_licenses` <a name="reset_licenses" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetLicenses"></a>

```python
def reset_licenses() -> None
```

##### `reset_physical_block_size_bytes` <a name="reset_physical_block_size_bytes" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetPhysicalBlockSizeBytes"></a>

```python
def reset_physical_block_size_bytes() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_provisioned_iops` <a name="reset_provisioned_iops" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetProvisionedIops"></a>

```python
def reset_provisioned_iops() -> None
```

##### `reset_provisioned_throughput` <a name="reset_provisioned_throughput" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetProvisionedThroughput"></a>

```python
def reset_provisioned_throughput() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_size` <a name="reset_size" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetSize"></a>

```python
def reset_size() -> None
```

##### `reset_snapshot` <a name="reset_snapshot" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetSnapshot"></a>

```python
def reset_snapshot() -> None
```

##### `reset_source_disk` <a name="reset_source_disk" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetSourceDisk"></a>

```python
def reset_source_disk() -> None
```

##### `reset_source_snapshot_encryption_key` <a name="reset_source_snapshot_encryption_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetSourceSnapshotEncryptionKey"></a>

```python
def reset_source_snapshot_encryption_key() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeRegionDisk resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_region_disk

computeRegionDisk.ComputeRegionDisk.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_region_disk

computeRegionDisk.ComputeRegionDisk.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_region_disk

computeRegionDisk.ComputeRegionDisk.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_region_disk

computeRegionDisk.ComputeRegionDisk.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeRegionDisk resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeRegionDisk to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeRegionDisk that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionDisk to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.asyncPrimaryDisk">async_primary_disk</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference">ComputeRegionDiskAsyncPrimaryDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.diskEncryptionKey">disk_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference">ComputeRegionDiskDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.diskId">disk_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.guestOsFeatures">guest_os_features</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList">ComputeRegionDiskGuestOsFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.labelFingerprint">label_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.lastAttachTimestamp">last_attach_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.lastDetachTimestamp">last_detach_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.sourceDiskId">source_disk_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.sourceSnapshotEncryptionKey">source_snapshot_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference">ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.sourceSnapshotId">source_snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference">ComputeRegionDiskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.users">users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.accessModeInput">access_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.asyncPrimaryDiskInput">async_primary_disk_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDisk">ComputeRegionDiskAsyncPrimaryDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.createSnapshotBeforeDestroyInput">create_snapshot_before_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.createSnapshotBeforeDestroyPrefixInput">create_snapshot_before_destroy_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.diskEncryptionKeyInput">disk_encryption_key_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey">ComputeRegionDiskDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.guestOsFeaturesInput">guest_os_features_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeatures">ComputeRegionDiskGuestOsFeatures</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.licensesInput">licenses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.physicalBlockSizeBytesInput">physical_block_size_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.provisionedIopsInput">provisioned_iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.provisionedThroughputInput">provisioned_throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.replicaZonesInput">replica_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.snapshotInput">snapshot_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.sourceDiskInput">source_disk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.sourceSnapshotEncryptionKeyInput">source_snapshot_encryption_key_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKey">ComputeRegionDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts">ComputeRegionDiskTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.accessMode">access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.createSnapshotBeforeDestroy">create_snapshot_before_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.createSnapshotBeforeDestroyPrefix">create_snapshot_before_destroy_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.licenses">licenses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.physicalBlockSizeBytes">physical_block_size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.provisionedIops">provisioned_iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.provisionedThroughput">provisioned_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.replicaZones">replica_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.snapshot">snapshot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.sourceDisk">source_disk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `async_primary_disk`<sup>Required</sup> <a name="async_primary_disk" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.asyncPrimaryDisk"></a>

```python
async_primary_disk: ComputeRegionDiskAsyncPrimaryDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference">ComputeRegionDiskAsyncPrimaryDiskOutputReference</a>

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `disk_encryption_key`<sup>Required</sup> <a name="disk_encryption_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.diskEncryptionKey"></a>

```python
disk_encryption_key: ComputeRegionDiskDiskEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference">ComputeRegionDiskDiskEncryptionKeyOutputReference</a>

---

##### `disk_id`<sup>Required</sup> <a name="disk_id" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.diskId"></a>

```python
disk_id: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `guest_os_features`<sup>Required</sup> <a name="guest_os_features" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.guestOsFeatures"></a>

```python
guest_os_features: ComputeRegionDiskGuestOsFeaturesList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList">ComputeRegionDiskGuestOsFeaturesList</a>

---

##### `label_fingerprint`<sup>Required</sup> <a name="label_fingerprint" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.labelFingerprint"></a>

```python
label_fingerprint: str
```

- *Type:* str

---

##### `last_attach_timestamp`<sup>Required</sup> <a name="last_attach_timestamp" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.lastAttachTimestamp"></a>

```python
last_attach_timestamp: str
```

- *Type:* str

---

##### `last_detach_timestamp`<sup>Required</sup> <a name="last_detach_timestamp" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.lastDetachTimestamp"></a>

```python
last_detach_timestamp: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `source_disk_id`<sup>Required</sup> <a name="source_disk_id" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.sourceDiskId"></a>

```python
source_disk_id: str
```

- *Type:* str

---

##### `source_snapshot_encryption_key`<sup>Required</sup> <a name="source_snapshot_encryption_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.sourceSnapshotEncryptionKey"></a>

```python
source_snapshot_encryption_key: ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference">ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference</a>

---

##### `source_snapshot_id`<sup>Required</sup> <a name="source_snapshot_id" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.sourceSnapshotId"></a>

```python
source_snapshot_id: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.timeouts"></a>

```python
timeouts: ComputeRegionDiskTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference">ComputeRegionDiskTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `access_mode_input`<sup>Optional</sup> <a name="access_mode_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.accessModeInput"></a>

```python
access_mode_input: str
```

- *Type:* str

---

##### `async_primary_disk_input`<sup>Optional</sup> <a name="async_primary_disk_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.asyncPrimaryDiskInput"></a>

```python
async_primary_disk_input: ComputeRegionDiskAsyncPrimaryDisk
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDisk">ComputeRegionDiskAsyncPrimaryDisk</a>

---

##### `create_snapshot_before_destroy_input`<sup>Optional</sup> <a name="create_snapshot_before_destroy_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.createSnapshotBeforeDestroyInput"></a>

```python
create_snapshot_before_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_snapshot_before_destroy_prefix_input`<sup>Optional</sup> <a name="create_snapshot_before_destroy_prefix_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.createSnapshotBeforeDestroyPrefixInput"></a>

```python
create_snapshot_before_destroy_prefix_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disk_encryption_key_input`<sup>Optional</sup> <a name="disk_encryption_key_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.diskEncryptionKeyInput"></a>

```python
disk_encryption_key_input: ComputeRegionDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey">ComputeRegionDiskDiskEncryptionKey</a>

---

##### `guest_os_features_input`<sup>Optional</sup> <a name="guest_os_features_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.guestOsFeaturesInput"></a>

```python
guest_os_features_input: typing.Union[IResolvable, typing.List[ComputeRegionDiskGuestOsFeatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeatures">ComputeRegionDiskGuestOsFeatures</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `licenses_input`<sup>Optional</sup> <a name="licenses_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.licensesInput"></a>

```python
licenses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `physical_block_size_bytes_input`<sup>Optional</sup> <a name="physical_block_size_bytes_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.physicalBlockSizeBytesInput"></a>

```python
physical_block_size_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `provisioned_iops_input`<sup>Optional</sup> <a name="provisioned_iops_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.provisionedIopsInput"></a>

```python
provisioned_iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_throughput_input`<sup>Optional</sup> <a name="provisioned_throughput_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.provisionedThroughputInput"></a>

```python
provisioned_throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `replica_zones_input`<sup>Optional</sup> <a name="replica_zones_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.replicaZonesInput"></a>

```python
replica_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_input`<sup>Optional</sup> <a name="snapshot_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.snapshotInput"></a>

```python
snapshot_input: str
```

- *Type:* str

---

##### `source_disk_input`<sup>Optional</sup> <a name="source_disk_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.sourceDiskInput"></a>

```python
source_disk_input: str
```

- *Type:* str

---

##### `source_snapshot_encryption_key_input`<sup>Optional</sup> <a name="source_snapshot_encryption_key_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.sourceSnapshotEncryptionKeyInput"></a>

```python
source_snapshot_encryption_key_input: ComputeRegionDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKey">ComputeRegionDiskSourceSnapshotEncryptionKey</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeRegionDiskTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts">ComputeRegionDiskTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `access_mode`<sup>Required</sup> <a name="access_mode" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

---

##### `create_snapshot_before_destroy`<sup>Required</sup> <a name="create_snapshot_before_destroy" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.createSnapshotBeforeDestroy"></a>

```python
create_snapshot_before_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_snapshot_before_destroy_prefix`<sup>Required</sup> <a name="create_snapshot_before_destroy_prefix" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.createSnapshotBeforeDestroyPrefix"></a>

```python
create_snapshot_before_destroy_prefix: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `licenses`<sup>Required</sup> <a name="licenses" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.licenses"></a>

```python
licenses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `physical_block_size_bytes`<sup>Required</sup> <a name="physical_block_size_bytes" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.physicalBlockSizeBytes"></a>

```python
physical_block_size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `provisioned_iops`<sup>Required</sup> <a name="provisioned_iops" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.provisionedIops"></a>

```python
provisioned_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_throughput`<sup>Required</sup> <a name="provisioned_throughput" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.provisionedThroughput"></a>

```python
provisioned_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `replica_zones`<sup>Required</sup> <a name="replica_zones" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.replicaZones"></a>

```python
replica_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.snapshot"></a>

```python
snapshot: str
```

- *Type:* str

---

##### `source_disk`<sup>Required</sup> <a name="source_disk" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.sourceDisk"></a>

```python
source_disk: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionDiskAsyncPrimaryDisk <a name="ComputeRegionDiskAsyncPrimaryDisk" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_disk

computeRegionDisk.ComputeRegionDiskAsyncPrimaryDisk(
  disk: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDisk.property.disk">disk</a></code> | <code>str</code> | Primary disk for asynchronous disk replication. |

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDisk.property.disk"></a>

```python
disk: str
```

- *Type:* str

Primary disk for asynchronous disk replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#disk ComputeRegionDisk#disk}

---

### ComputeRegionDiskConfig <a name="ComputeRegionDiskConfig" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_disk

computeRegionDisk.ComputeRegionDiskConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  replica_zones: typing.List[str],
  access_mode: str = None,
  async_primary_disk: ComputeRegionDiskAsyncPrimaryDisk = None,
  create_snapshot_before_destroy: typing.Union[bool, IResolvable] = None,
  create_snapshot_before_destroy_prefix: str = None,
  description: str = None,
  disk_encryption_key: ComputeRegionDiskDiskEncryptionKey = None,
  guest_os_features: typing.Union[IResolvable, typing.List[ComputeRegionDiskGuestOsFeatures]] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  licenses: typing.List[str] = None,
  physical_block_size_bytes: typing.Union[int, float] = None,
  project: str = None,
  provisioned_iops: typing.Union[int, float] = None,
  provisioned_throughput: typing.Union[int, float] = None,
  region: str = None,
  size: typing.Union[int, float] = None,
  snapshot: str = None,
  source_disk: str = None,
  source_snapshot_encryption_key: ComputeRegionDiskSourceSnapshotEncryptionKey = None,
  timeouts: ComputeRegionDiskTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.replicaZones">replica_zones</a></code> | <code>typing.List[str]</code> | URLs of the zones where the disk should be replicated to. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.accessMode">access_mode</a></code> | <code>str</code> | The access mode of the disk. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.asyncPrimaryDisk">async_primary_disk</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDisk">ComputeRegionDiskAsyncPrimaryDisk</a></code> | async_primary_disk block. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.createSnapshotBeforeDestroy">create_snapshot_before_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, a snapshot of the disk will be created before it is destroyed. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.createSnapshotBeforeDestroyPrefix">create_snapshot_before_destroy_prefix</a></code> | <code>str</code> | This will set a custom name prefix for the snapshot that's created when the disk is deleted. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.diskEncryptionKey">disk_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey">ComputeRegionDiskDiskEncryptionKey</a></code> | disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.guestOsFeatures">guest_os_features</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeatures">ComputeRegionDiskGuestOsFeatures</a>]]</code> | guest_os_features block. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#id ComputeRegionDisk#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this disk.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.licenses">licenses</a></code> | <code>typing.List[str]</code> | Any applicable license URI. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.physicalBlockSizeBytes">physical_block_size_bytes</a></code> | <code>typing.Union[int, float]</code> | Physical block size of the persistent disk, in bytes. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#project ComputeRegionDisk#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.provisionedIops">provisioned_iops</a></code> | <code>typing.Union[int, float]</code> | Indicates how many IOPS to provision for the disk. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.provisionedThroughput">provisioned_throughput</a></code> | <code>typing.Union[int, float]</code> | Indicates how much throughput to provision for the disk. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.region">region</a></code> | <code>str</code> | A reference to the region where the disk resides. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Size of the persistent disk, specified in GB. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.snapshot">snapshot</a></code> | <code>str</code> | The source snapshot used to create this disk. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.sourceDisk">source_disk</a></code> | <code>str</code> | The source disk used to create this disk. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.sourceSnapshotEncryptionKey">source_snapshot_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKey">ComputeRegionDiskSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts">ComputeRegionDiskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.type">type</a></code> | <code>str</code> | URL of the disk type resource describing which disk type to use to create the disk. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#name ComputeRegionDisk#name}

---

##### `replica_zones`<sup>Required</sup> <a name="replica_zones" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.replicaZones"></a>

```python
replica_zones: typing.List[str]
```

- *Type:* typing.List[str]

URLs of the zones where the disk should be replicated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#replica_zones ComputeRegionDisk#replica_zones}

---

##### `access_mode`<sup>Optional</sup> <a name="access_mode" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

The access mode of the disk.

For example:

* READ_WRITE_SINGLE: The default AccessMode, means the disk can be attached to single instance in RW mode.
* READ_WRITE_MANY: The AccessMode means the disk can be attached to multiple instances in RW mode.
* READ_ONLY_SINGLE: The AccessMode means the disk can be attached to multiple instances in RO mode.
  The AccessMode is only valid for Hyperdisk disk types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#access_mode ComputeRegionDisk#access_mode}

---

##### `async_primary_disk`<sup>Optional</sup> <a name="async_primary_disk" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.asyncPrimaryDisk"></a>

```python
async_primary_disk: ComputeRegionDiskAsyncPrimaryDisk
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDisk">ComputeRegionDiskAsyncPrimaryDisk</a>

async_primary_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#async_primary_disk ComputeRegionDisk#async_primary_disk}

---

##### `create_snapshot_before_destroy`<sup>Optional</sup> <a name="create_snapshot_before_destroy" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.createSnapshotBeforeDestroy"></a>

```python
create_snapshot_before_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, a snapshot of the disk will be created before it is destroyed.

If your disk is encrypted with customer managed encryption keys these will be reused for the snapshot creation.
The name of the snapshot by default will be '{{disk-name}}-YYYYMMDD-HHmm'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#create_snapshot_before_destroy ComputeRegionDisk#create_snapshot_before_destroy}

---

##### `create_snapshot_before_destroy_prefix`<sup>Optional</sup> <a name="create_snapshot_before_destroy_prefix" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.createSnapshotBeforeDestroyPrefix"></a>

```python
create_snapshot_before_destroy_prefix: str
```

- *Type:* str

This will set a custom name prefix for the snapshot that's created when the disk is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#create_snapshot_before_destroy_prefix ComputeRegionDisk#create_snapshot_before_destroy_prefix}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#description ComputeRegionDisk#description}

---

##### `disk_encryption_key`<sup>Optional</sup> <a name="disk_encryption_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.diskEncryptionKey"></a>

```python
disk_encryption_key: ComputeRegionDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey">ComputeRegionDiskDiskEncryptionKey</a>

disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#disk_encryption_key ComputeRegionDisk#disk_encryption_key}

---

##### `guest_os_features`<sup>Optional</sup> <a name="guest_os_features" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.guestOsFeatures"></a>

```python
guest_os_features: typing.Union[IResolvable, typing.List[ComputeRegionDiskGuestOsFeatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeatures">ComputeRegionDiskGuestOsFeatures</a>]]

guest_os_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#guest_os_features ComputeRegionDisk#guest_os_features}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#id ComputeRegionDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels to apply to this disk.  A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#labels ComputeRegionDisk#labels}

---

##### `licenses`<sup>Optional</sup> <a name="licenses" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.licenses"></a>

```python
licenses: typing.List[str]
```

- *Type:* typing.List[str]

Any applicable license URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#licenses ComputeRegionDisk#licenses}

---

##### `physical_block_size_bytes`<sup>Optional</sup> <a name="physical_block_size_bytes" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.physicalBlockSizeBytes"></a>

```python
physical_block_size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Physical block size of the persistent disk, in bytes.

If not present
in a request, a default value is used. Currently supported sizes
are 4096 and 16384, other sizes may be added in the future.
If an unsupported value is requested, the error message will list
the supported values for the caller's project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#physical_block_size_bytes ComputeRegionDisk#physical_block_size_bytes}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#project ComputeRegionDisk#project}.

---

##### `provisioned_iops`<sup>Optional</sup> <a name="provisioned_iops" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.provisionedIops"></a>

```python
provisioned_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Indicates how many IOPS to provision for the disk.

This sets the number of I/O operations per second
that the disk can handle. Values must be between 10,000 and 120,000.
For more details, see the Extreme persistent disk [documentation](https://cloud.google.com/compute/docs/disks/extreme-persistent-disk).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#provisioned_iops ComputeRegionDisk#provisioned_iops}

---

##### `provisioned_throughput`<sup>Optional</sup> <a name="provisioned_throughput" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.provisionedThroughput"></a>

```python
provisioned_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Indicates how much throughput to provision for the disk.

This sets the number of throughput
mb per second that the disk can handle. Values must be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#provisioned_throughput ComputeRegionDisk#provisioned_throughput}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.region"></a>

```python
region: str
```

- *Type:* str

A reference to the region where the disk resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#region ComputeRegionDisk#region}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size of the persistent disk, specified in GB.

You can specify this
field when creating a persistent disk using the sourceImage or
sourceSnapshot parameter, or specify it alone to create an empty
persistent disk.

If you specify this field along with sourceImage or sourceSnapshot,
the value of sizeGb must not be less than the size of the sourceImage
or the size of the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#size ComputeRegionDisk#size}

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.snapshot"></a>

```python
snapshot: str
```

- *Type:* str

The source snapshot used to create this disk.

You can provide this as
a partial or full URL to the resource. For example, the following are
valid values:

* 'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot'
* 'projects/project/global/snapshots/snapshot'
* 'global/snapshots/snapshot'
* 'snapshot'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#snapshot ComputeRegionDisk#snapshot}

---

##### `source_disk`<sup>Optional</sup> <a name="source_disk" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.sourceDisk"></a>

```python
source_disk: str
```

- *Type:* str

The source disk used to create this disk.

You can provide this as a partial or full URL to the resource.
For example, the following are valid values:

* https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/disks/{disk}
* https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/disks/{disk}
* projects/{project}/zones/{zone}/disks/{disk}
* projects/{project}/regions/{region}/disks/{disk}
* zones/{zone}/disks/{disk}
* regions/{region}/disks/{disk}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#source_disk ComputeRegionDisk#source_disk}

---

##### `source_snapshot_encryption_key`<sup>Optional</sup> <a name="source_snapshot_encryption_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.sourceSnapshotEncryptionKey"></a>

```python
source_snapshot_encryption_key: ComputeRegionDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKey">ComputeRegionDiskSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#source_snapshot_encryption_key ComputeRegionDisk#source_snapshot_encryption_key}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.timeouts"></a>

```python
timeouts: ComputeRegionDiskTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts">ComputeRegionDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#timeouts ComputeRegionDisk#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.type"></a>

```python
type: str
```

- *Type:* str

URL of the disk type resource describing which disk type to use to create the disk.

Provide this when creating the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#type ComputeRegionDisk#type}

---

### ComputeRegionDiskDiskEncryptionKey <a name="ComputeRegionDiskDiskEncryptionKey" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_disk

computeRegionDisk.ComputeRegionDiskDiskEncryptionKey(
  kms_key_name: str = None,
  raw_key: str = None,
  rsa_encrypted_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The name of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey.property.rawKey">raw_key</a></code> | <code>str</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey.property.rsaEncryptedKey">rsa_encrypted_key</a></code> | <code>str</code> | Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource. |

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The name of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#kms_key_name ComputeRegionDisk#kms_key_name}

---

##### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#raw_key ComputeRegionDisk#raw_key}

---

##### `rsa_encrypted_key`<sup>Optional</sup> <a name="rsa_encrypted_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey.property.rsaEncryptedKey"></a>

```python
rsa_encrypted_key: str
```

- *Type:* str

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

You can provide either the rawKey or the rsaEncryptedKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#rsa_encrypted_key ComputeRegionDisk#rsa_encrypted_key}

---

### ComputeRegionDiskGuestOsFeatures <a name="ComputeRegionDiskGuestOsFeatures" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeatures.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_disk

computeRegionDisk.ComputeRegionDiskGuestOsFeatures(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeatures.property.type">type</a></code> | <code>str</code> | The type of supported feature. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeatures.property.type"></a>

```python
type: str
```

- *Type:* str

The type of supported feature.

Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options. Possible values: ["MULTI_IP_SUBNET", "SECURE_BOOT", "SEV_CAPABLE", "UEFI_COMPATIBLE", "VIRTIO_SCSI_MULTIQUEUE", "WINDOWS", "GVNIC", "SEV_LIVE_MIGRATABLE", "SEV_SNP_CAPABLE", "SUSPEND_RESUME_COMPATIBLE", "TDX_CAPABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#type ComputeRegionDisk#type}

---

### ComputeRegionDiskSourceSnapshotEncryptionKey <a name="ComputeRegionDiskSourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_disk

computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKey(
  raw_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKey.property.rawKey">raw_key</a></code> | <code>str</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |

---

##### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKey.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#raw_key ComputeRegionDisk#raw_key}

---

### ComputeRegionDiskTimeouts <a name="ComputeRegionDiskTimeouts" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_disk

computeRegionDisk.ComputeRegionDiskTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#create ComputeRegionDisk#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#delete ComputeRegionDisk#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#update ComputeRegionDisk#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#create ComputeRegionDisk#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#delete ComputeRegionDisk#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_disk#update ComputeRegionDisk#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionDiskAsyncPrimaryDiskOutputReference <a name="ComputeRegionDiskAsyncPrimaryDiskOutputReference" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_disk

computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.property.diskInput">disk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.property.disk">disk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDisk">ComputeRegionDiskAsyncPrimaryDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_input`<sup>Optional</sup> <a name="disk_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.property.diskInput"></a>

```python
disk_input: str
```

- *Type:* str

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.property.disk"></a>

```python
disk: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDiskOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionDiskAsyncPrimaryDisk
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskAsyncPrimaryDisk">ComputeRegionDiskAsyncPrimaryDisk</a>

---


### ComputeRegionDiskDiskEncryptionKeyOutputReference <a name="ComputeRegionDiskDiskEncryptionKeyOutputReference" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_disk

computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.resetRawKey">reset_raw_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.resetRsaEncryptedKey">reset_rsa_encrypted_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```

##### `reset_raw_key` <a name="reset_raw_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.resetRawKey"></a>

```python
def reset_raw_key() -> None
```

##### `reset_rsa_encrypted_key` <a name="reset_rsa_encrypted_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```python
def reset_rsa_encrypted_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.rawKeyInput">raw_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">rsa_encrypted_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.rawKey">raw_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.rsaEncryptedKey">rsa_encrypted_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey">ComputeRegionDiskDiskEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `raw_key_input`<sup>Optional</sup> <a name="raw_key_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.rawKeyInput"></a>

```python
raw_key_input: str
```

- *Type:* str

---

##### `rsa_encrypted_key_input`<sup>Optional</sup> <a name="rsa_encrypted_key_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```python
rsa_encrypted_key_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `raw_key`<sup>Required</sup> <a name="raw_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

---

##### `rsa_encrypted_key`<sup>Required</sup> <a name="rsa_encrypted_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```python
rsa_encrypted_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey">ComputeRegionDiskDiskEncryptionKey</a>

---


### ComputeRegionDiskGuestOsFeaturesList <a name="ComputeRegionDiskGuestOsFeaturesList" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_disk

computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeRegionDiskGuestOsFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeatures">ComputeRegionDiskGuestOsFeatures</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeRegionDiskGuestOsFeatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeatures">ComputeRegionDiskGuestOsFeatures</a>]]

---


### ComputeRegionDiskGuestOsFeaturesOutputReference <a name="ComputeRegionDiskGuestOsFeaturesOutputReference" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_disk

computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeatures">ComputeRegionDiskGuestOsFeatures</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRegionDiskGuestOsFeatures]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskGuestOsFeatures">ComputeRegionDiskGuestOsFeatures</a>]

---


### ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference <a name="ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_disk

computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.resetRawKey">reset_raw_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_raw_key` <a name="reset_raw_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.resetRawKey"></a>

```python
def reset_raw_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKeyInput">raw_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKey">raw_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKey">ComputeRegionDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `raw_key_input`<sup>Optional</sup> <a name="raw_key_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKeyInput"></a>

```python
raw_key_input: str
```

- *Type:* str

---

##### `raw_key`<sup>Required</sup> <a name="raw_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKey">ComputeRegionDiskSourceSnapshotEncryptionKey</a>

---


### ComputeRegionDiskTimeoutsOutputReference <a name="ComputeRegionDiskTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_disk

computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts">ComputeRegionDiskTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRegionDiskTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts">ComputeRegionDiskTimeouts</a>]

---



