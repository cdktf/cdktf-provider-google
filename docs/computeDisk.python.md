# `computeDisk` Submodule <a name="`computeDisk` Submodule" id="@cdktf/provider-google.computeDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeDisk <a name="ComputeDisk" id="@cdktf/provider-google.computeDisk.ComputeDisk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk google_compute_disk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_disk

computeDisk.ComputeDisk(
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
  access_mode: str = None,
  architecture: str = None,
  async_primary_disk: ComputeDiskAsyncPrimaryDisk = None,
  create_snapshot_before_destroy: typing.Union[bool, IResolvable] = None,
  create_snapshot_before_destroy_prefix: str = None,
  description: str = None,
  disk_encryption_key: ComputeDiskDiskEncryptionKey = None,
  enable_confidential_compute: typing.Union[bool, IResolvable] = None,
  guest_os_features: typing.Union[IResolvable, typing.List[ComputeDiskGuestOsFeatures]] = None,
  id: str = None,
  image: str = None,
  labels: typing.Mapping[str] = None,
  licenses: typing.List[str] = None,
  params: ComputeDiskParams = None,
  physical_block_size_bytes: typing.Union[int, float] = None,
  project: str = None,
  provisioned_iops: typing.Union[int, float] = None,
  provisioned_throughput: typing.Union[int, float] = None,
  size: typing.Union[int, float] = None,
  snapshot: str = None,
  source_disk: str = None,
  source_image_encryption_key: ComputeDiskSourceImageEncryptionKey = None,
  source_instant_snapshot: str = None,
  source_snapshot_encryption_key: ComputeDiskSourceSnapshotEncryptionKey = None,
  source_storage_object: str = None,
  storage_pool: str = None,
  timeouts: ComputeDiskTimeouts = None,
  type: str = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.accessMode">access_mode</a></code> | <code>str</code> | The accessMode of the disk. For example: * READ_WRITE_SINGLE * READ_WRITE_MANY * READ_ONLY_SINGLE. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.architecture">architecture</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#architecture ComputeDisk#architecture}. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.asyncPrimaryDisk">async_primary_disk</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDisk">ComputeDiskAsyncPrimaryDisk</a></code> | async_primary_disk block. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.createSnapshotBeforeDestroy">create_snapshot_before_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, a snapshot of the disk will be created before it is destroyed. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.createSnapshotBeforeDestroyPrefix">create_snapshot_before_destroy_prefix</a></code> | <code>str</code> | This will set a custom name prefix for the snapshot that's created when the disk is deleted. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.diskEncryptionKey">disk_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey">ComputeDiskDiskEncryptionKey</a></code> | disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.enableConfidentialCompute">enable_confidential_compute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this disk is using confidential compute mode. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.guestOsFeatures">guest_os_features</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeatures">ComputeDiskGuestOsFeatures</a>]]</code> | guest_os_features block. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#id ComputeDisk#id}. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.image">image</a></code> | <code>str</code> | The image from which to initialize this disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this disk.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.licenses">licenses</a></code> | <code>typing.List[str]</code> | Any applicable license URI. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.params">params</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParams">ComputeDiskParams</a></code> | params block. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.physicalBlockSizeBytes">physical_block_size_bytes</a></code> | <code>typing.Union[int, float]</code> | Physical block size of the persistent disk, in bytes. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#project ComputeDisk#project}. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.provisionedIops">provisioned_iops</a></code> | <code>typing.Union[int, float]</code> | Indicates how many IOPS must be provisioned for the disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.provisionedThroughput">provisioned_throughput</a></code> | <code>typing.Union[int, float]</code> | Indicates how much Throughput must be provisioned for the disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.size">size</a></code> | <code>typing.Union[int, float]</code> | Size of the persistent disk, specified in GB. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.snapshot">snapshot</a></code> | <code>str</code> | The source snapshot used to create this disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.sourceDisk">source_disk</a></code> | <code>str</code> | The source disk used to create this disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.sourceImageEncryptionKey">source_image_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey">ComputeDiskSourceImageEncryptionKey</a></code> | source_image_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.sourceInstantSnapshot">source_instant_snapshot</a></code> | <code>str</code> | The source instant snapshot used to create this disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.sourceSnapshotEncryptionKey">source_snapshot_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey">ComputeDiskSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.sourceStorageObject">source_storage_object</a></code> | <code>str</code> | The full Google Cloud Storage URI where the disk image is stored. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.storagePool">storage_pool</a></code> | <code>str</code> | The URL or the name of the storage pool in which the new disk is created. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeouts">ComputeDiskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.type">type</a></code> | <code>str</code> | URL of the disk type resource describing which disk type to use to create the disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.zone">zone</a></code> | <code>str</code> | A reference to the zone where the disk resides. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#name ComputeDisk#name}

---

##### `access_mode`<sup>Optional</sup> <a name="access_mode" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.accessMode"></a>

- *Type:* str

The accessMode of the disk. For example: * READ_WRITE_SINGLE * READ_WRITE_MANY * READ_ONLY_SINGLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#access_mode ComputeDisk#access_mode}

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.architecture"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#architecture ComputeDisk#architecture}.

---

##### `async_primary_disk`<sup>Optional</sup> <a name="async_primary_disk" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.asyncPrimaryDisk"></a>

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDisk">ComputeDiskAsyncPrimaryDisk</a>

async_primary_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#async_primary_disk ComputeDisk#async_primary_disk}

---

##### `create_snapshot_before_destroy`<sup>Optional</sup> <a name="create_snapshot_before_destroy" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.createSnapshotBeforeDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, a snapshot of the disk will be created before it is destroyed.

If your disk is encrypted with customer managed encryption keys these will be reused for the snapshot creation.
The name of the snapshot by default will be '{{disk-name}}-YYYYMMDD-HHmm'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#create_snapshot_before_destroy ComputeDisk#create_snapshot_before_destroy}

---

##### `create_snapshot_before_destroy_prefix`<sup>Optional</sup> <a name="create_snapshot_before_destroy_prefix" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.createSnapshotBeforeDestroyPrefix"></a>

- *Type:* str

This will set a custom name prefix for the snapshot that's created when the disk is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#create_snapshot_before_destroy_prefix ComputeDisk#create_snapshot_before_destroy_prefix}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#description ComputeDisk#description}

---

##### `disk_encryption_key`<sup>Optional</sup> <a name="disk_encryption_key" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.diskEncryptionKey"></a>

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey">ComputeDiskDiskEncryptionKey</a>

disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#disk_encryption_key ComputeDisk#disk_encryption_key}

---

##### `enable_confidential_compute`<sup>Optional</sup> <a name="enable_confidential_compute" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.enableConfidentialCompute"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this disk is using confidential compute mode.

Note: Only supported on hyperdisk skus, disk_encryption_key is required when setting to true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#enable_confidential_compute ComputeDisk#enable_confidential_compute}

---

##### `guest_os_features`<sup>Optional</sup> <a name="guest_os_features" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.guestOsFeatures"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeatures">ComputeDiskGuestOsFeatures</a>]]

guest_os_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#guest_os_features ComputeDisk#guest_os_features}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#id ComputeDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.image"></a>

- *Type:* str

The image from which to initialize this disk.

This can be
one of: the image's 'self_link', 'projects/{project}/global/images/{image}',
'projects/{project}/global/images/family/{family}', 'global/images/{image}',
'global/images/family/{family}', 'family/{family}', '{project}/{family}',
'{project}/{image}', '{family}', or '{image}'. If referred by family, the
images names must include the family name. If they don't, use the
[google_compute_image data source](/docs/providers/google/d/compute_image.html).
For instance, the image 'centos-6-v20180104' includes its family name 'centos-6'.
These images can be referred by family name here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#image ComputeDisk#image}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels to apply to this disk.  A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#labels ComputeDisk#labels}

---

##### `licenses`<sup>Optional</sup> <a name="licenses" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.licenses"></a>

- *Type:* typing.List[str]

Any applicable license URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#licenses ComputeDisk#licenses}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.params"></a>

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskParams">ComputeDiskParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#params ComputeDisk#params}

---

##### `physical_block_size_bytes`<sup>Optional</sup> <a name="physical_block_size_bytes" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.physicalBlockSizeBytes"></a>

- *Type:* typing.Union[int, float]

Physical block size of the persistent disk, in bytes.

If not present
in a request, a default value is used. Currently supported sizes
are 4096 and 16384, other sizes may be added in the future.
If an unsupported value is requested, the error message will list
the supported values for the caller's project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#physical_block_size_bytes ComputeDisk#physical_block_size_bytes}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#project ComputeDisk#project}.

---

##### `provisioned_iops`<sup>Optional</sup> <a name="provisioned_iops" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.provisionedIops"></a>

- *Type:* typing.Union[int, float]

Indicates how many IOPS must be provisioned for the disk.

Note: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk
allows for an update of IOPS every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#provisioned_iops ComputeDisk#provisioned_iops}

---

##### `provisioned_throughput`<sup>Optional</sup> <a name="provisioned_throughput" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.provisionedThroughput"></a>

- *Type:* typing.Union[int, float]

Indicates how much Throughput must be provisioned for the disk.

Note: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk
allows for an update of Throughput every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#provisioned_throughput ComputeDisk#provisioned_throughput}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.size"></a>

- *Type:* typing.Union[int, float]

Size of the persistent disk, specified in GB.

You can specify this
field when creating a persistent disk using the 'image' or
'snapshot' parameter, or specify it alone to create an empty
persistent disk.

If you specify this field along with 'image' or 'snapshot',
the value must not be less than the size of the image
or the size of the snapshot.

~>**NOTE** If you change the size, Terraform updates the disk size
if upsizing is detected but recreates the disk if downsizing is requested.
You can add 'lifecycle.prevent_destroy' in the config to prevent destroying
and recreating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#size ComputeDisk#size}

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.snapshot"></a>

- *Type:* str

The source snapshot used to create this disk.

You can provide this as
a partial or full URL to the resource. If the snapshot is in another
project than this disk, you must supply a full URL. For example, the
following are valid values:

* 'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot'
* 'projects/project/global/snapshots/snapshot'
* 'global/snapshots/snapshot'
* 'snapshot'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#snapshot ComputeDisk#snapshot}

---

##### `source_disk`<sup>Optional</sup> <a name="source_disk" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.sourceDisk"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#source_disk ComputeDisk#source_disk}

---

##### `source_image_encryption_key`<sup>Optional</sup> <a name="source_image_encryption_key" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.sourceImageEncryptionKey"></a>

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey">ComputeDiskSourceImageEncryptionKey</a>

source_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#source_image_encryption_key ComputeDisk#source_image_encryption_key}

---

##### `source_instant_snapshot`<sup>Optional</sup> <a name="source_instant_snapshot" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.sourceInstantSnapshot"></a>

- *Type:* str

The source instant snapshot used to create this disk.

You can provide this as a partial or full URL to the resource.
For example, the following are valid values:

* 'https://www.googleapis.com/compute/v1/projects/project/zones/zone/instantSnapshots/instantSnapshot'
* 'projects/project/zones/zone/instantSnapshots/instantSnapshot'
* 'zones/zone/instantSnapshots/instantSnapshot'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#source_instant_snapshot ComputeDisk#source_instant_snapshot}

---

##### `source_snapshot_encryption_key`<sup>Optional</sup> <a name="source_snapshot_encryption_key" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.sourceSnapshotEncryptionKey"></a>

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey">ComputeDiskSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#source_snapshot_encryption_key ComputeDisk#source_snapshot_encryption_key}

---

##### `source_storage_object`<sup>Optional</sup> <a name="source_storage_object" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.sourceStorageObject"></a>

- *Type:* str

The full Google Cloud Storage URI where the disk image is stored.

This file must be a gzip-compressed tarball whose name ends in .tar.gz or virtual machine disk whose name ends in vmdk.
Valid URIs may start with gs:// or https://storage.googleapis.com/.
This flag is not optimized for creating multiple disks from a source storage object.
To create many disks from a source storage object, use gcloud compute images import instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#source_storage_object ComputeDisk#source_storage_object}

---

##### `storage_pool`<sup>Optional</sup> <a name="storage_pool" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.storagePool"></a>

- *Type:* str

The URL or the name of the storage pool in which the new disk is created.

For example:

* https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/storagePools/{storagePool}
* /projects/{project}/zones/{zone}/storagePools/{storagePool}
* /zones/{zone}/storagePools/{storagePool}
* /{storagePool}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#storage_pool ComputeDisk#storage_pool}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeouts">ComputeDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#timeouts ComputeDisk#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.type"></a>

- *Type:* str

URL of the disk type resource describing which disk type to use to create the disk.

Provide this when creating the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#type ComputeDisk#type}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeDisk.ComputeDisk.Initializer.parameter.zone"></a>

- *Type:* str

A reference to the zone where the disk resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#zone ComputeDisk#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.putAsyncPrimaryDisk">put_async_primary_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.putDiskEncryptionKey">put_disk_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.putGuestOsFeatures">put_guest_os_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.putParams">put_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.putSourceImageEncryptionKey">put_source_image_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.putSourceSnapshotEncryptionKey">put_source_snapshot_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetAccessMode">reset_access_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetArchitecture">reset_architecture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetAsyncPrimaryDisk">reset_async_primary_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetCreateSnapshotBeforeDestroy">reset_create_snapshot_before_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetCreateSnapshotBeforeDestroyPrefix">reset_create_snapshot_before_destroy_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetDiskEncryptionKey">reset_disk_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetEnableConfidentialCompute">reset_enable_confidential_compute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetGuestOsFeatures">reset_guest_os_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetImage">reset_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetLicenses">reset_licenses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetParams">reset_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetPhysicalBlockSizeBytes">reset_physical_block_size_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetProvisionedIops">reset_provisioned_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetProvisionedThroughput">reset_provisioned_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetSize">reset_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetSnapshot">reset_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetSourceDisk">reset_source_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetSourceImageEncryptionKey">reset_source_image_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetSourceInstantSnapshot">reset_source_instant_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetSourceSnapshotEncryptionKey">reset_source_snapshot_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetSourceStorageObject">reset_source_storage_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetStoragePool">reset_storage_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeDisk.ComputeDisk.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeDisk.ComputeDisk.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeDisk.ComputeDisk.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeDisk.ComputeDisk.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeDisk.ComputeDisk.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeDisk.ComputeDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeDisk.ComputeDisk.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeDisk.ComputeDisk.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeDisk.ComputeDisk.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeDisk.ComputeDisk.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeDisk.ComputeDisk.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeDisk.ComputeDisk.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeDisk.ComputeDisk.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeDisk.ComputeDisk.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeDisk.ComputeDisk.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeDisk.ComputeDisk.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeDisk.ComputeDisk.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeDisk.ComputeDisk.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeDisk.ComputeDisk.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeDisk.ComputeDisk.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeDisk.ComputeDisk.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeDisk.ComputeDisk.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_async_primary_disk` <a name="put_async_primary_disk" id="@cdktf/provider-google.computeDisk.ComputeDisk.putAsyncPrimaryDisk"></a>

```python
def put_async_primary_disk(
  disk: str
) -> None
```

###### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeDisk.ComputeDisk.putAsyncPrimaryDisk.parameter.disk"></a>

- *Type:* str

Primary disk for asynchronous disk replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#disk ComputeDisk#disk}

---

##### `put_disk_encryption_key` <a name="put_disk_encryption_key" id="@cdktf/provider-google.computeDisk.ComputeDisk.putDiskEncryptionKey"></a>

```python
def put_disk_encryption_key(
  kms_key_self_link: str = None,
  kms_key_service_account: str = None,
  raw_key: str = None,
  rsa_encrypted_key: str = None
) -> None
```

###### `kms_key_self_link`<sup>Optional</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeDisk.ComputeDisk.putDiskEncryptionKey.parameter.kmsKeySelfLink"></a>

- *Type:* str

The self link of the encryption key used to encrypt the disk.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#kms_key_self_link ComputeDisk#kms_key_self_link}

---

###### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeDisk.ComputeDisk.putDiskEncryptionKey.parameter.kmsKeyServiceAccount"></a>

- *Type:* str

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#kms_key_service_account ComputeDisk#kms_key_service_account}

---

###### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google.computeDisk.ComputeDisk.putDiskEncryptionKey.parameter.rawKey"></a>

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#raw_key ComputeDisk#raw_key}

---

###### `rsa_encrypted_key`<sup>Optional</sup> <a name="rsa_encrypted_key" id="@cdktf/provider-google.computeDisk.ComputeDisk.putDiskEncryptionKey.parameter.rsaEncryptedKey"></a>

- *Type:* str

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

You can provide either the rawKey or the rsaEncryptedKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#rsa_encrypted_key ComputeDisk#rsa_encrypted_key}

---

##### `put_guest_os_features` <a name="put_guest_os_features" id="@cdktf/provider-google.computeDisk.ComputeDisk.putGuestOsFeatures"></a>

```python
def put_guest_os_features(
  value: typing.Union[IResolvable, typing.List[ComputeDiskGuestOsFeatures]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeDisk.ComputeDisk.putGuestOsFeatures.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeatures">ComputeDiskGuestOsFeatures</a>]]

---

##### `put_params` <a name="put_params" id="@cdktf/provider-google.computeDisk.ComputeDisk.putParams"></a>

```python
def put_params(
  resource_manager_tags: typing.Mapping[str] = None
) -> None
```

###### `resource_manager_tags`<sup>Optional</sup> <a name="resource_manager_tags" id="@cdktf/provider-google.computeDisk.ComputeDisk.putParams.parameter.resourceManagerTags"></a>

- *Type:* typing.Mapping[str]

Resource manager tags to be bound to the disk.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#resource_manager_tags ComputeDisk#resource_manager_tags}

---

##### `put_source_image_encryption_key` <a name="put_source_image_encryption_key" id="@cdktf/provider-google.computeDisk.ComputeDisk.putSourceImageEncryptionKey"></a>

```python
def put_source_image_encryption_key(
  kms_key_self_link: str = None,
  kms_key_service_account: str = None,
  raw_key: str = None
) -> None
```

###### `kms_key_self_link`<sup>Optional</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeDisk.ComputeDisk.putSourceImageEncryptionKey.parameter.kmsKeySelfLink"></a>

- *Type:* str

The self link of the encryption key used to encrypt the disk.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#kms_key_self_link ComputeDisk#kms_key_self_link}

---

###### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeDisk.ComputeDisk.putSourceImageEncryptionKey.parameter.kmsKeyServiceAccount"></a>

- *Type:* str

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#kms_key_service_account ComputeDisk#kms_key_service_account}

---

###### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google.computeDisk.ComputeDisk.putSourceImageEncryptionKey.parameter.rawKey"></a>

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#raw_key ComputeDisk#raw_key}

---

##### `put_source_snapshot_encryption_key` <a name="put_source_snapshot_encryption_key" id="@cdktf/provider-google.computeDisk.ComputeDisk.putSourceSnapshotEncryptionKey"></a>

```python
def put_source_snapshot_encryption_key(
  kms_key_self_link: str = None,
  kms_key_service_account: str = None,
  raw_key: str = None
) -> None
```

###### `kms_key_self_link`<sup>Optional</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeDisk.ComputeDisk.putSourceSnapshotEncryptionKey.parameter.kmsKeySelfLink"></a>

- *Type:* str

The self link of the encryption key used to encrypt the disk.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#kms_key_self_link ComputeDisk#kms_key_self_link}

---

###### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeDisk.ComputeDisk.putSourceSnapshotEncryptionKey.parameter.kmsKeyServiceAccount"></a>

- *Type:* str

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#kms_key_service_account ComputeDisk#kms_key_service_account}

---

###### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google.computeDisk.ComputeDisk.putSourceSnapshotEncryptionKey.parameter.rawKey"></a>

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#raw_key ComputeDisk#raw_key}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeDisk.ComputeDisk.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeDisk.ComputeDisk.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#create ComputeDisk#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeDisk.ComputeDisk.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#delete ComputeDisk#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeDisk.ComputeDisk.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#update ComputeDisk#update}.

---

##### `reset_access_mode` <a name="reset_access_mode" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetAccessMode"></a>

```python
def reset_access_mode() -> None
```

##### `reset_architecture` <a name="reset_architecture" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetArchitecture"></a>

```python
def reset_architecture() -> None
```

##### `reset_async_primary_disk` <a name="reset_async_primary_disk" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetAsyncPrimaryDisk"></a>

```python
def reset_async_primary_disk() -> None
```

##### `reset_create_snapshot_before_destroy` <a name="reset_create_snapshot_before_destroy" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetCreateSnapshotBeforeDestroy"></a>

```python
def reset_create_snapshot_before_destroy() -> None
```

##### `reset_create_snapshot_before_destroy_prefix` <a name="reset_create_snapshot_before_destroy_prefix" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetCreateSnapshotBeforeDestroyPrefix"></a>

```python
def reset_create_snapshot_before_destroy_prefix() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disk_encryption_key` <a name="reset_disk_encryption_key" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetDiskEncryptionKey"></a>

```python
def reset_disk_encryption_key() -> None
```

##### `reset_enable_confidential_compute` <a name="reset_enable_confidential_compute" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetEnableConfidentialCompute"></a>

```python
def reset_enable_confidential_compute() -> None
```

##### `reset_guest_os_features` <a name="reset_guest_os_features" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetGuestOsFeatures"></a>

```python
def reset_guest_os_features() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image` <a name="reset_image" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetImage"></a>

```python
def reset_image() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_licenses` <a name="reset_licenses" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetLicenses"></a>

```python
def reset_licenses() -> None
```

##### `reset_params` <a name="reset_params" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetParams"></a>

```python
def reset_params() -> None
```

##### `reset_physical_block_size_bytes` <a name="reset_physical_block_size_bytes" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetPhysicalBlockSizeBytes"></a>

```python
def reset_physical_block_size_bytes() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_provisioned_iops` <a name="reset_provisioned_iops" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetProvisionedIops"></a>

```python
def reset_provisioned_iops() -> None
```

##### `reset_provisioned_throughput` <a name="reset_provisioned_throughput" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetProvisionedThroughput"></a>

```python
def reset_provisioned_throughput() -> None
```

##### `reset_size` <a name="reset_size" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetSize"></a>

```python
def reset_size() -> None
```

##### `reset_snapshot` <a name="reset_snapshot" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetSnapshot"></a>

```python
def reset_snapshot() -> None
```

##### `reset_source_disk` <a name="reset_source_disk" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetSourceDisk"></a>

```python
def reset_source_disk() -> None
```

##### `reset_source_image_encryption_key` <a name="reset_source_image_encryption_key" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetSourceImageEncryptionKey"></a>

```python
def reset_source_image_encryption_key() -> None
```

##### `reset_source_instant_snapshot` <a name="reset_source_instant_snapshot" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetSourceInstantSnapshot"></a>

```python
def reset_source_instant_snapshot() -> None
```

##### `reset_source_snapshot_encryption_key` <a name="reset_source_snapshot_encryption_key" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetSourceSnapshotEncryptionKey"></a>

```python
def reset_source_snapshot_encryption_key() -> None
```

##### `reset_source_storage_object` <a name="reset_source_storage_object" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetSourceStorageObject"></a>

```python
def reset_source_storage_object() -> None
```

##### `reset_storage_pool` <a name="reset_storage_pool" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetStoragePool"></a>

```python
def reset_storage_pool() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google.computeDisk.ComputeDisk.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeDisk resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeDisk.ComputeDisk.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_disk

computeDisk.ComputeDisk.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeDisk.ComputeDisk.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeDisk.ComputeDisk.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_disk

computeDisk.ComputeDisk.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeDisk.ComputeDisk.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeDisk.ComputeDisk.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_disk

computeDisk.ComputeDisk.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeDisk.ComputeDisk.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeDisk.ComputeDisk.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_disk

computeDisk.ComputeDisk.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeDisk resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeDisk.ComputeDisk.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeDisk.ComputeDisk.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeDisk to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeDisk.ComputeDisk.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeDisk that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeDisk.ComputeDisk.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeDisk to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.asyncPrimaryDisk">async_primary_disk</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference">ComputeDiskAsyncPrimaryDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.diskEncryptionKey">disk_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference">ComputeDiskDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.diskId">disk_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.guestOsFeatures">guest_os_features</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList">ComputeDiskGuestOsFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.labelFingerprint">label_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.lastAttachTimestamp">last_attach_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.lastDetachTimestamp">last_detach_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.params">params</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference">ComputeDiskParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceDiskId">source_disk_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceImageEncryptionKey">source_image_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference">ComputeDiskSourceImageEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceImageId">source_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceInstantSnapshotId">source_instant_snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceSnapshotEncryptionKey">source_snapshot_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference">ComputeDiskSourceSnapshotEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceSnapshotId">source_snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference">ComputeDiskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.users">users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.accessModeInput">access_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.architectureInput">architecture_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.asyncPrimaryDiskInput">async_primary_disk_input</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDisk">ComputeDiskAsyncPrimaryDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.createSnapshotBeforeDestroyInput">create_snapshot_before_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.createSnapshotBeforeDestroyPrefixInput">create_snapshot_before_destroy_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.diskEncryptionKeyInput">disk_encryption_key_input</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey">ComputeDiskDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.enableConfidentialComputeInput">enable_confidential_compute_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.guestOsFeaturesInput">guest_os_features_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeatures">ComputeDiskGuestOsFeatures</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.licensesInput">licenses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.paramsInput">params_input</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParams">ComputeDiskParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.physicalBlockSizeBytesInput">physical_block_size_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.provisionedIopsInput">provisioned_iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.provisionedThroughputInput">provisioned_throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.snapshotInput">snapshot_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceDiskInput">source_disk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceImageEncryptionKeyInput">source_image_encryption_key_input</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey">ComputeDiskSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceInstantSnapshotInput">source_instant_snapshot_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceSnapshotEncryptionKeyInput">source_snapshot_encryption_key_input</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey">ComputeDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceStorageObjectInput">source_storage_object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.storagePoolInput">storage_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeouts">ComputeDiskTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.accessMode">access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.createSnapshotBeforeDestroy">create_snapshot_before_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.createSnapshotBeforeDestroyPrefix">create_snapshot_before_destroy_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.enableConfidentialCompute">enable_confidential_compute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.licenses">licenses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.physicalBlockSizeBytes">physical_block_size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.provisionedIops">provisioned_iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.provisionedThroughput">provisioned_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.snapshot">snapshot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceDisk">source_disk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceInstantSnapshot">source_instant_snapshot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceStorageObject">source_storage_object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.storagePool">storage_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `async_primary_disk`<sup>Required</sup> <a name="async_primary_disk" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.asyncPrimaryDisk"></a>

```python
async_primary_disk: ComputeDiskAsyncPrimaryDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference">ComputeDiskAsyncPrimaryDiskOutputReference</a>

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `disk_encryption_key`<sup>Required</sup> <a name="disk_encryption_key" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.diskEncryptionKey"></a>

```python
disk_encryption_key: ComputeDiskDiskEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference">ComputeDiskDiskEncryptionKeyOutputReference</a>

---

##### `disk_id`<sup>Required</sup> <a name="disk_id" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.diskId"></a>

```python
disk_id: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `guest_os_features`<sup>Required</sup> <a name="guest_os_features" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.guestOsFeatures"></a>

```python
guest_os_features: ComputeDiskGuestOsFeaturesList
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList">ComputeDiskGuestOsFeaturesList</a>

---

##### `label_fingerprint`<sup>Required</sup> <a name="label_fingerprint" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.labelFingerprint"></a>

```python
label_fingerprint: str
```

- *Type:* str

---

##### `last_attach_timestamp`<sup>Required</sup> <a name="last_attach_timestamp" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.lastAttachTimestamp"></a>

```python
last_attach_timestamp: str
```

- *Type:* str

---

##### `last_detach_timestamp`<sup>Required</sup> <a name="last_detach_timestamp" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.lastDetachTimestamp"></a>

```python
last_detach_timestamp: str
```

- *Type:* str

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.params"></a>

```python
params: ComputeDiskParamsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference">ComputeDiskParamsOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `source_disk_id`<sup>Required</sup> <a name="source_disk_id" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceDiskId"></a>

```python
source_disk_id: str
```

- *Type:* str

---

##### `source_image_encryption_key`<sup>Required</sup> <a name="source_image_encryption_key" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceImageEncryptionKey"></a>

```python
source_image_encryption_key: ComputeDiskSourceImageEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference">ComputeDiskSourceImageEncryptionKeyOutputReference</a>

---

##### `source_image_id`<sup>Required</sup> <a name="source_image_id" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceImageId"></a>

```python
source_image_id: str
```

- *Type:* str

---

##### `source_instant_snapshot_id`<sup>Required</sup> <a name="source_instant_snapshot_id" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceInstantSnapshotId"></a>

```python
source_instant_snapshot_id: str
```

- *Type:* str

---

##### `source_snapshot_encryption_key`<sup>Required</sup> <a name="source_snapshot_encryption_key" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceSnapshotEncryptionKey"></a>

```python
source_snapshot_encryption_key: ComputeDiskSourceSnapshotEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference">ComputeDiskSourceSnapshotEncryptionKeyOutputReference</a>

---

##### `source_snapshot_id`<sup>Required</sup> <a name="source_snapshot_id" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceSnapshotId"></a>

```python
source_snapshot_id: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.timeouts"></a>

```python
timeouts: ComputeDiskTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference">ComputeDiskTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `access_mode_input`<sup>Optional</sup> <a name="access_mode_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.accessModeInput"></a>

```python
access_mode_input: str
```

- *Type:* str

---

##### `architecture_input`<sup>Optional</sup> <a name="architecture_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.architectureInput"></a>

```python
architecture_input: str
```

- *Type:* str

---

##### `async_primary_disk_input`<sup>Optional</sup> <a name="async_primary_disk_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.asyncPrimaryDiskInput"></a>

```python
async_primary_disk_input: ComputeDiskAsyncPrimaryDisk
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDisk">ComputeDiskAsyncPrimaryDisk</a>

---

##### `create_snapshot_before_destroy_input`<sup>Optional</sup> <a name="create_snapshot_before_destroy_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.createSnapshotBeforeDestroyInput"></a>

```python
create_snapshot_before_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_snapshot_before_destroy_prefix_input`<sup>Optional</sup> <a name="create_snapshot_before_destroy_prefix_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.createSnapshotBeforeDestroyPrefixInput"></a>

```python
create_snapshot_before_destroy_prefix_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disk_encryption_key_input`<sup>Optional</sup> <a name="disk_encryption_key_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.diskEncryptionKeyInput"></a>

```python
disk_encryption_key_input: ComputeDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey">ComputeDiskDiskEncryptionKey</a>

---

##### `enable_confidential_compute_input`<sup>Optional</sup> <a name="enable_confidential_compute_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.enableConfidentialComputeInput"></a>

```python
enable_confidential_compute_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `guest_os_features_input`<sup>Optional</sup> <a name="guest_os_features_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.guestOsFeaturesInput"></a>

```python
guest_os_features_input: typing.Union[IResolvable, typing.List[ComputeDiskGuestOsFeatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeatures">ComputeDiskGuestOsFeatures</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `licenses_input`<sup>Optional</sup> <a name="licenses_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.licensesInput"></a>

```python
licenses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `params_input`<sup>Optional</sup> <a name="params_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.paramsInput"></a>

```python
params_input: ComputeDiskParams
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskParams">ComputeDiskParams</a>

---

##### `physical_block_size_bytes_input`<sup>Optional</sup> <a name="physical_block_size_bytes_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.physicalBlockSizeBytesInput"></a>

```python
physical_block_size_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `provisioned_iops_input`<sup>Optional</sup> <a name="provisioned_iops_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.provisionedIopsInput"></a>

```python
provisioned_iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_throughput_input`<sup>Optional</sup> <a name="provisioned_throughput_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.provisionedThroughputInput"></a>

```python
provisioned_throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_input`<sup>Optional</sup> <a name="snapshot_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.snapshotInput"></a>

```python
snapshot_input: str
```

- *Type:* str

---

##### `source_disk_input`<sup>Optional</sup> <a name="source_disk_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceDiskInput"></a>

```python
source_disk_input: str
```

- *Type:* str

---

##### `source_image_encryption_key_input`<sup>Optional</sup> <a name="source_image_encryption_key_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceImageEncryptionKeyInput"></a>

```python
source_image_encryption_key_input: ComputeDiskSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey">ComputeDiskSourceImageEncryptionKey</a>

---

##### `source_instant_snapshot_input`<sup>Optional</sup> <a name="source_instant_snapshot_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceInstantSnapshotInput"></a>

```python
source_instant_snapshot_input: str
```

- *Type:* str

---

##### `source_snapshot_encryption_key_input`<sup>Optional</sup> <a name="source_snapshot_encryption_key_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceSnapshotEncryptionKeyInput"></a>

```python
source_snapshot_encryption_key_input: ComputeDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey">ComputeDiskSourceSnapshotEncryptionKey</a>

---

##### `source_storage_object_input`<sup>Optional</sup> <a name="source_storage_object_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceStorageObjectInput"></a>

```python
source_storage_object_input: str
```

- *Type:* str

---

##### `storage_pool_input`<sup>Optional</sup> <a name="storage_pool_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.storagePoolInput"></a>

```python
storage_pool_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeDiskTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeouts">ComputeDiskTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `access_mode`<sup>Required</sup> <a name="access_mode" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `create_snapshot_before_destroy`<sup>Required</sup> <a name="create_snapshot_before_destroy" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.createSnapshotBeforeDestroy"></a>

```python
create_snapshot_before_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_snapshot_before_destroy_prefix`<sup>Required</sup> <a name="create_snapshot_before_destroy_prefix" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.createSnapshotBeforeDestroyPrefix"></a>

```python
create_snapshot_before_destroy_prefix: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_confidential_compute`<sup>Required</sup> <a name="enable_confidential_compute" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.enableConfidentialCompute"></a>

```python
enable_confidential_compute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `licenses`<sup>Required</sup> <a name="licenses" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.licenses"></a>

```python
licenses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `physical_block_size_bytes`<sup>Required</sup> <a name="physical_block_size_bytes" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.physicalBlockSizeBytes"></a>

```python
physical_block_size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `provisioned_iops`<sup>Required</sup> <a name="provisioned_iops" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.provisionedIops"></a>

```python
provisioned_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_throughput`<sup>Required</sup> <a name="provisioned_throughput" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.provisionedThroughput"></a>

```python
provisioned_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.snapshot"></a>

```python
snapshot: str
```

- *Type:* str

---

##### `source_disk`<sup>Required</sup> <a name="source_disk" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceDisk"></a>

```python
source_disk: str
```

- *Type:* str

---

##### `source_instant_snapshot`<sup>Required</sup> <a name="source_instant_snapshot" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceInstantSnapshot"></a>

```python
source_instant_snapshot: str
```

- *Type:* str

---

##### `source_storage_object`<sup>Required</sup> <a name="source_storage_object" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.sourceStorageObject"></a>

```python
source_storage_object: str
```

- *Type:* str

---

##### `storage_pool`<sup>Required</sup> <a name="storage_pool" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.storagePool"></a>

```python
storage_pool: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDisk.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeDisk.ComputeDisk.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeDiskAsyncPrimaryDisk <a name="ComputeDiskAsyncPrimaryDisk" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_disk

computeDisk.ComputeDiskAsyncPrimaryDisk(
  disk: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDisk.property.disk">disk</a></code> | <code>str</code> | Primary disk for asynchronous disk replication. |

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDisk.property.disk"></a>

```python
disk: str
```

- *Type:* str

Primary disk for asynchronous disk replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#disk ComputeDisk#disk}

---

### ComputeDiskConfig <a name="ComputeDiskConfig" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_disk

computeDisk.ComputeDiskConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  access_mode: str = None,
  architecture: str = None,
  async_primary_disk: ComputeDiskAsyncPrimaryDisk = None,
  create_snapshot_before_destroy: typing.Union[bool, IResolvable] = None,
  create_snapshot_before_destroy_prefix: str = None,
  description: str = None,
  disk_encryption_key: ComputeDiskDiskEncryptionKey = None,
  enable_confidential_compute: typing.Union[bool, IResolvable] = None,
  guest_os_features: typing.Union[IResolvable, typing.List[ComputeDiskGuestOsFeatures]] = None,
  id: str = None,
  image: str = None,
  labels: typing.Mapping[str] = None,
  licenses: typing.List[str] = None,
  params: ComputeDiskParams = None,
  physical_block_size_bytes: typing.Union[int, float] = None,
  project: str = None,
  provisioned_iops: typing.Union[int, float] = None,
  provisioned_throughput: typing.Union[int, float] = None,
  size: typing.Union[int, float] = None,
  snapshot: str = None,
  source_disk: str = None,
  source_image_encryption_key: ComputeDiskSourceImageEncryptionKey = None,
  source_instant_snapshot: str = None,
  source_snapshot_encryption_key: ComputeDiskSourceSnapshotEncryptionKey = None,
  source_storage_object: str = None,
  storage_pool: str = None,
  timeouts: ComputeDiskTimeouts = None,
  type: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.accessMode">access_mode</a></code> | <code>str</code> | The accessMode of the disk. For example: * READ_WRITE_SINGLE * READ_WRITE_MANY * READ_ONLY_SINGLE. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.architecture">architecture</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#architecture ComputeDisk#architecture}. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.asyncPrimaryDisk">async_primary_disk</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDisk">ComputeDiskAsyncPrimaryDisk</a></code> | async_primary_disk block. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.createSnapshotBeforeDestroy">create_snapshot_before_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, a snapshot of the disk will be created before it is destroyed. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.createSnapshotBeforeDestroyPrefix">create_snapshot_before_destroy_prefix</a></code> | <code>str</code> | This will set a custom name prefix for the snapshot that's created when the disk is deleted. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.diskEncryptionKey">disk_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey">ComputeDiskDiskEncryptionKey</a></code> | disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.enableConfidentialCompute">enable_confidential_compute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this disk is using confidential compute mode. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.guestOsFeatures">guest_os_features</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeatures">ComputeDiskGuestOsFeatures</a>]]</code> | guest_os_features block. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#id ComputeDisk#id}. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.image">image</a></code> | <code>str</code> | The image from which to initialize this disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this disk.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.licenses">licenses</a></code> | <code>typing.List[str]</code> | Any applicable license URI. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.params">params</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParams">ComputeDiskParams</a></code> | params block. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.physicalBlockSizeBytes">physical_block_size_bytes</a></code> | <code>typing.Union[int, float]</code> | Physical block size of the persistent disk, in bytes. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#project ComputeDisk#project}. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.provisionedIops">provisioned_iops</a></code> | <code>typing.Union[int, float]</code> | Indicates how many IOPS must be provisioned for the disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.provisionedThroughput">provisioned_throughput</a></code> | <code>typing.Union[int, float]</code> | Indicates how much Throughput must be provisioned for the disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Size of the persistent disk, specified in GB. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.snapshot">snapshot</a></code> | <code>str</code> | The source snapshot used to create this disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.sourceDisk">source_disk</a></code> | <code>str</code> | The source disk used to create this disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.sourceImageEncryptionKey">source_image_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey">ComputeDiskSourceImageEncryptionKey</a></code> | source_image_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.sourceInstantSnapshot">source_instant_snapshot</a></code> | <code>str</code> | The source instant snapshot used to create this disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.sourceSnapshotEncryptionKey">source_snapshot_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey">ComputeDiskSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.sourceStorageObject">source_storage_object</a></code> | <code>str</code> | The full Google Cloud Storage URI where the disk image is stored. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.storagePool">storage_pool</a></code> | <code>str</code> | The URL or the name of the storage pool in which the new disk is created. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeouts">ComputeDiskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.type">type</a></code> | <code>str</code> | URL of the disk type resource describing which disk type to use to create the disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.zone">zone</a></code> | <code>str</code> | A reference to the zone where the disk resides. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#name ComputeDisk#name}

---

##### `access_mode`<sup>Optional</sup> <a name="access_mode" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

The accessMode of the disk. For example: * READ_WRITE_SINGLE * READ_WRITE_MANY * READ_ONLY_SINGLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#access_mode ComputeDisk#access_mode}

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#architecture ComputeDisk#architecture}.

---

##### `async_primary_disk`<sup>Optional</sup> <a name="async_primary_disk" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.asyncPrimaryDisk"></a>

```python
async_primary_disk: ComputeDiskAsyncPrimaryDisk
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDisk">ComputeDiskAsyncPrimaryDisk</a>

async_primary_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#async_primary_disk ComputeDisk#async_primary_disk}

---

##### `create_snapshot_before_destroy`<sup>Optional</sup> <a name="create_snapshot_before_destroy" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.createSnapshotBeforeDestroy"></a>

```python
create_snapshot_before_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, a snapshot of the disk will be created before it is destroyed.

If your disk is encrypted with customer managed encryption keys these will be reused for the snapshot creation.
The name of the snapshot by default will be '{{disk-name}}-YYYYMMDD-HHmm'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#create_snapshot_before_destroy ComputeDisk#create_snapshot_before_destroy}

---

##### `create_snapshot_before_destroy_prefix`<sup>Optional</sup> <a name="create_snapshot_before_destroy_prefix" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.createSnapshotBeforeDestroyPrefix"></a>

```python
create_snapshot_before_destroy_prefix: str
```

- *Type:* str

This will set a custom name prefix for the snapshot that's created when the disk is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#create_snapshot_before_destroy_prefix ComputeDisk#create_snapshot_before_destroy_prefix}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#description ComputeDisk#description}

---

##### `disk_encryption_key`<sup>Optional</sup> <a name="disk_encryption_key" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.diskEncryptionKey"></a>

```python
disk_encryption_key: ComputeDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey">ComputeDiskDiskEncryptionKey</a>

disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#disk_encryption_key ComputeDisk#disk_encryption_key}

---

##### `enable_confidential_compute`<sup>Optional</sup> <a name="enable_confidential_compute" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.enableConfidentialCompute"></a>

```python
enable_confidential_compute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this disk is using confidential compute mode.

Note: Only supported on hyperdisk skus, disk_encryption_key is required when setting to true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#enable_confidential_compute ComputeDisk#enable_confidential_compute}

---

##### `guest_os_features`<sup>Optional</sup> <a name="guest_os_features" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.guestOsFeatures"></a>

```python
guest_os_features: typing.Union[IResolvable, typing.List[ComputeDiskGuestOsFeatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeatures">ComputeDiskGuestOsFeatures</a>]]

guest_os_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#guest_os_features ComputeDisk#guest_os_features}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#id ComputeDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.image"></a>

```python
image: str
```

- *Type:* str

The image from which to initialize this disk.

This can be
one of: the image's 'self_link', 'projects/{project}/global/images/{image}',
'projects/{project}/global/images/family/{family}', 'global/images/{image}',
'global/images/family/{family}', 'family/{family}', '{project}/{family}',
'{project}/{image}', '{family}', or '{image}'. If referred by family, the
images names must include the family name. If they don't, use the
[google_compute_image data source](/docs/providers/google/d/compute_image.html).
For instance, the image 'centos-6-v20180104' includes its family name 'centos-6'.
These images can be referred by family name here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#image ComputeDisk#image}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels to apply to this disk.  A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#labels ComputeDisk#labels}

---

##### `licenses`<sup>Optional</sup> <a name="licenses" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.licenses"></a>

```python
licenses: typing.List[str]
```

- *Type:* typing.List[str]

Any applicable license URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#licenses ComputeDisk#licenses}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.params"></a>

```python
params: ComputeDiskParams
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskParams">ComputeDiskParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#params ComputeDisk#params}

---

##### `physical_block_size_bytes`<sup>Optional</sup> <a name="physical_block_size_bytes" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.physicalBlockSizeBytes"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#physical_block_size_bytes ComputeDisk#physical_block_size_bytes}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#project ComputeDisk#project}.

---

##### `provisioned_iops`<sup>Optional</sup> <a name="provisioned_iops" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.provisionedIops"></a>

```python
provisioned_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Indicates how many IOPS must be provisioned for the disk.

Note: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk
allows for an update of IOPS every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#provisioned_iops ComputeDisk#provisioned_iops}

---

##### `provisioned_throughput`<sup>Optional</sup> <a name="provisioned_throughput" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.provisionedThroughput"></a>

```python
provisioned_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Indicates how much Throughput must be provisioned for the disk.

Note: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk
allows for an update of Throughput every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#provisioned_throughput ComputeDisk#provisioned_throughput}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size of the persistent disk, specified in GB.

You can specify this
field when creating a persistent disk using the 'image' or
'snapshot' parameter, or specify it alone to create an empty
persistent disk.

If you specify this field along with 'image' or 'snapshot',
the value must not be less than the size of the image
or the size of the snapshot.

~>**NOTE** If you change the size, Terraform updates the disk size
if upsizing is detected but recreates the disk if downsizing is requested.
You can add 'lifecycle.prevent_destroy' in the config to prevent destroying
and recreating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#size ComputeDisk#size}

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.snapshot"></a>

```python
snapshot: str
```

- *Type:* str

The source snapshot used to create this disk.

You can provide this as
a partial or full URL to the resource. If the snapshot is in another
project than this disk, you must supply a full URL. For example, the
following are valid values:

* 'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot'
* 'projects/project/global/snapshots/snapshot'
* 'global/snapshots/snapshot'
* 'snapshot'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#snapshot ComputeDisk#snapshot}

---

##### `source_disk`<sup>Optional</sup> <a name="source_disk" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.sourceDisk"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#source_disk ComputeDisk#source_disk}

---

##### `source_image_encryption_key`<sup>Optional</sup> <a name="source_image_encryption_key" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.sourceImageEncryptionKey"></a>

```python
source_image_encryption_key: ComputeDiskSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey">ComputeDiskSourceImageEncryptionKey</a>

source_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#source_image_encryption_key ComputeDisk#source_image_encryption_key}

---

##### `source_instant_snapshot`<sup>Optional</sup> <a name="source_instant_snapshot" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.sourceInstantSnapshot"></a>

```python
source_instant_snapshot: str
```

- *Type:* str

The source instant snapshot used to create this disk.

You can provide this as a partial or full URL to the resource.
For example, the following are valid values:

* 'https://www.googleapis.com/compute/v1/projects/project/zones/zone/instantSnapshots/instantSnapshot'
* 'projects/project/zones/zone/instantSnapshots/instantSnapshot'
* 'zones/zone/instantSnapshots/instantSnapshot'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#source_instant_snapshot ComputeDisk#source_instant_snapshot}

---

##### `source_snapshot_encryption_key`<sup>Optional</sup> <a name="source_snapshot_encryption_key" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.sourceSnapshotEncryptionKey"></a>

```python
source_snapshot_encryption_key: ComputeDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey">ComputeDiskSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#source_snapshot_encryption_key ComputeDisk#source_snapshot_encryption_key}

---

##### `source_storage_object`<sup>Optional</sup> <a name="source_storage_object" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.sourceStorageObject"></a>

```python
source_storage_object: str
```

- *Type:* str

The full Google Cloud Storage URI where the disk image is stored.

This file must be a gzip-compressed tarball whose name ends in .tar.gz or virtual machine disk whose name ends in vmdk.
Valid URIs may start with gs:// or https://storage.googleapis.com/.
This flag is not optimized for creating multiple disks from a source storage object.
To create many disks from a source storage object, use gcloud compute images import instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#source_storage_object ComputeDisk#source_storage_object}

---

##### `storage_pool`<sup>Optional</sup> <a name="storage_pool" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.storagePool"></a>

```python
storage_pool: str
```

- *Type:* str

The URL or the name of the storage pool in which the new disk is created.

For example:

* https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/storagePools/{storagePool}
* /projects/{project}/zones/{zone}/storagePools/{storagePool}
* /zones/{zone}/storagePools/{storagePool}
* /{storagePool}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#storage_pool ComputeDisk#storage_pool}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.timeouts"></a>

```python
timeouts: ComputeDiskTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeouts">ComputeDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#timeouts ComputeDisk#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.type"></a>

```python
type: str
```

- *Type:* str

URL of the disk type resource describing which disk type to use to create the disk.

Provide this when creating the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#type ComputeDisk#type}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeDisk.ComputeDiskConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

A reference to the zone where the disk resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#zone ComputeDisk#zone}

---

### ComputeDiskDiskEncryptionKey <a name="ComputeDiskDiskEncryptionKey" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_disk

computeDisk.ComputeDiskDiskEncryptionKey(
  kms_key_self_link: str = None,
  kms_key_service_account: str = None,
  raw_key: str = None,
  rsa_encrypted_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | The self link of the encryption key used to encrypt the disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | The service account used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey.property.rawKey">raw_key</a></code> | <code>str</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey.property.rsaEncryptedKey">rsa_encrypted_key</a></code> | <code>str</code> | Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource. |

---

##### `kms_key_self_link`<sup>Optional</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

The self link of the encryption key used to encrypt the disk.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#kms_key_self_link ComputeDisk#kms_key_self_link}

---

##### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#kms_key_service_account ComputeDisk#kms_key_service_account}

---

##### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#raw_key ComputeDisk#raw_key}

---

##### `rsa_encrypted_key`<sup>Optional</sup> <a name="rsa_encrypted_key" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey.property.rsaEncryptedKey"></a>

```python
rsa_encrypted_key: str
```

- *Type:* str

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

You can provide either the rawKey or the rsaEncryptedKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#rsa_encrypted_key ComputeDisk#rsa_encrypted_key}

---

### ComputeDiskGuestOsFeatures <a name="ComputeDiskGuestOsFeatures" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeatures.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_disk

computeDisk.ComputeDiskGuestOsFeatures(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeatures.property.type">type</a></code> | <code>str</code> | The type of supported feature. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeatures.property.type"></a>

```python
type: str
```

- *Type:* str

The type of supported feature. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#type ComputeDisk#type}

---

### ComputeDiskParams <a name="ComputeDiskParams" id="@cdktf/provider-google.computeDisk.ComputeDiskParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDisk.ComputeDiskParams.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_disk

computeDisk.ComputeDiskParams(
  resource_manager_tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParams.property.resourceManagerTags">resource_manager_tags</a></code> | <code>typing.Mapping[str]</code> | Resource manager tags to be bound to the disk. |

---

##### `resource_manager_tags`<sup>Optional</sup> <a name="resource_manager_tags" id="@cdktf/provider-google.computeDisk.ComputeDiskParams.property.resourceManagerTags"></a>

```python
resource_manager_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource manager tags to be bound to the disk.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#resource_manager_tags ComputeDisk#resource_manager_tags}

---

### ComputeDiskSourceImageEncryptionKey <a name="ComputeDiskSourceImageEncryptionKey" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_disk

computeDisk.ComputeDiskSourceImageEncryptionKey(
  kms_key_self_link: str = None,
  kms_key_service_account: str = None,
  raw_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | The self link of the encryption key used to encrypt the disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | The service account used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey.property.rawKey">raw_key</a></code> | <code>str</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |

---

##### `kms_key_self_link`<sup>Optional</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

The self link of the encryption key used to encrypt the disk.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#kms_key_self_link ComputeDisk#kms_key_self_link}

---

##### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#kms_key_service_account ComputeDisk#kms_key_service_account}

---

##### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#raw_key ComputeDisk#raw_key}

---

### ComputeDiskSourceSnapshotEncryptionKey <a name="ComputeDiskSourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_disk

computeDisk.ComputeDiskSourceSnapshotEncryptionKey(
  kms_key_self_link: str = None,
  kms_key_service_account: str = None,
  raw_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | The self link of the encryption key used to encrypt the disk. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | The service account used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey.property.rawKey">raw_key</a></code> | <code>str</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |

---

##### `kms_key_self_link`<sup>Optional</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

The self link of the encryption key used to encrypt the disk.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#kms_key_self_link ComputeDisk#kms_key_self_link}

---

##### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#kms_key_service_account ComputeDisk#kms_key_service_account}

---

##### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#raw_key ComputeDisk#raw_key}

---

### ComputeDiskTimeouts <a name="ComputeDiskTimeouts" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_disk

computeDisk.ComputeDiskTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#create ComputeDisk#create}. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#delete ComputeDisk#delete}. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#update ComputeDisk#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#create ComputeDisk#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#delete ComputeDisk#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/compute_disk#update ComputeDisk#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeDiskAsyncPrimaryDiskOutputReference <a name="ComputeDiskAsyncPrimaryDiskOutputReference" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_disk

computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.property.diskInput">disk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.property.disk">disk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDisk">ComputeDiskAsyncPrimaryDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_input`<sup>Optional</sup> <a name="disk_input" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.property.diskInput"></a>

```python
disk_input: str
```

- *Type:* str

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.property.disk"></a>

```python
disk: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDiskOutputReference.property.internalValue"></a>

```python
internal_value: ComputeDiskAsyncPrimaryDisk
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskAsyncPrimaryDisk">ComputeDiskAsyncPrimaryDisk</a>

---


### ComputeDiskDiskEncryptionKeyOutputReference <a name="ComputeDiskDiskEncryptionKeyOutputReference" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_disk

computeDisk.ComputeDiskDiskEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.resetKmsKeySelfLink">reset_kms_key_self_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.resetKmsKeyServiceAccount">reset_kms_key_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.resetRawKey">reset_raw_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.resetRsaEncryptedKey">reset_rsa_encrypted_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_self_link` <a name="reset_kms_key_self_link" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```python
def reset_kms_key_self_link() -> None
```

##### `reset_kms_key_service_account` <a name="reset_kms_key_service_account" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```python
def reset_kms_key_service_account() -> None
```

##### `reset_raw_key` <a name="reset_raw_key" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.resetRawKey"></a>

```python
def reset_raw_key() -> None
```

##### `reset_rsa_encrypted_key` <a name="reset_rsa_encrypted_key" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```python
def reset_rsa_encrypted_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kms_key_self_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kms_key_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.rawKeyInput">raw_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">rsa_encrypted_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.rawKey">raw_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.rsaEncryptedKey">rsa_encrypted_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey">ComputeDiskDiskEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `kms_key_self_link_input`<sup>Optional</sup> <a name="kms_key_self_link_input" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```python
kms_key_self_link_input: str
```

- *Type:* str

---

##### `kms_key_service_account_input`<sup>Optional</sup> <a name="kms_key_service_account_input" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```python
kms_key_service_account_input: str
```

- *Type:* str

---

##### `raw_key_input`<sup>Optional</sup> <a name="raw_key_input" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.rawKeyInput"></a>

```python
raw_key_input: str
```

- *Type:* str

---

##### `rsa_encrypted_key_input`<sup>Optional</sup> <a name="rsa_encrypted_key_input" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```python
rsa_encrypted_key_input: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `raw_key`<sup>Required</sup> <a name="raw_key" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

---

##### `rsa_encrypted_key`<sup>Required</sup> <a name="rsa_encrypted_key" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```python
rsa_encrypted_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: ComputeDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskDiskEncryptionKey">ComputeDiskDiskEncryptionKey</a>

---


### ComputeDiskGuestOsFeaturesList <a name="ComputeDiskGuestOsFeaturesList" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_disk

computeDisk.ComputeDiskGuestOsFeaturesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeDiskGuestOsFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeatures">ComputeDiskGuestOsFeatures</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeDiskGuestOsFeatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeatures">ComputeDiskGuestOsFeatures</a>]]

---


### ComputeDiskGuestOsFeaturesOutputReference <a name="ComputeDiskGuestOsFeaturesOutputReference" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_disk

computeDisk.ComputeDiskGuestOsFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeatures">ComputeDiskGuestOsFeatures</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeDiskGuestOsFeatures]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeDisk.ComputeDiskGuestOsFeatures">ComputeDiskGuestOsFeatures</a>]

---


### ComputeDiskParamsOutputReference <a name="ComputeDiskParamsOutputReference" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_disk

computeDisk.ComputeDiskParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.resetResourceManagerTags">reset_resource_manager_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_manager_tags` <a name="reset_resource_manager_tags" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.resetResourceManagerTags"></a>

```python
def reset_resource_manager_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.property.resourceManagerTagsInput">resource_manager_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.property.resourceManagerTags">resource_manager_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskParams">ComputeDiskParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_manager_tags_input`<sup>Optional</sup> <a name="resource_manager_tags_input" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.property.resourceManagerTagsInput"></a>

```python
resource_manager_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_manager_tags`<sup>Required</sup> <a name="resource_manager_tags" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.property.resourceManagerTags"></a>

```python
resource_manager_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeDisk.ComputeDiskParamsOutputReference.property.internalValue"></a>

```python
internal_value: ComputeDiskParams
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskParams">ComputeDiskParams</a>

---


### ComputeDiskSourceImageEncryptionKeyOutputReference <a name="ComputeDiskSourceImageEncryptionKeyOutputReference" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_disk

computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.resetKmsKeySelfLink">reset_kms_key_self_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount">reset_kms_key_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.resetRawKey">reset_raw_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_self_link` <a name="reset_kms_key_self_link" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```python
def reset_kms_key_self_link() -> None
```

##### `reset_kms_key_service_account` <a name="reset_kms_key_service_account" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```python
def reset_kms_key_service_account() -> None
```

##### `reset_raw_key` <a name="reset_raw_key" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.resetRawKey"></a>

```python
def reset_raw_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kms_key_self_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kms_key_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.rawKeyInput">raw_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.rawKey">raw_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey">ComputeDiskSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `kms_key_self_link_input`<sup>Optional</sup> <a name="kms_key_self_link_input" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```python
kms_key_self_link_input: str
```

- *Type:* str

---

##### `kms_key_service_account_input`<sup>Optional</sup> <a name="kms_key_service_account_input" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```python
kms_key_service_account_input: str
```

- *Type:* str

---

##### `raw_key_input`<sup>Optional</sup> <a name="raw_key_input" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.rawKeyInput"></a>

```python
raw_key_input: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `raw_key`<sup>Required</sup> <a name="raw_key" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: ComputeDiskSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceImageEncryptionKey">ComputeDiskSourceImageEncryptionKey</a>

---


### ComputeDiskSourceSnapshotEncryptionKeyOutputReference <a name="ComputeDiskSourceSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_disk

computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink">reset_kms_key_self_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount">reset_kms_key_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.resetRawKey">reset_raw_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_self_link` <a name="reset_kms_key_self_link" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```python
def reset_kms_key_self_link() -> None
```

##### `reset_kms_key_service_account` <a name="reset_kms_key_service_account" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```python
def reset_kms_key_service_account() -> None
```

##### `reset_raw_key` <a name="reset_raw_key" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.resetRawKey"></a>

```python
def reset_raw_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kms_key_self_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kms_key_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKeyInput">raw_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKey">raw_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey">ComputeDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `kms_key_self_link_input`<sup>Optional</sup> <a name="kms_key_self_link_input" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```python
kms_key_self_link_input: str
```

- *Type:* str

---

##### `kms_key_service_account_input`<sup>Optional</sup> <a name="kms_key_service_account_input" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```python
kms_key_service_account_input: str
```

- *Type:* str

---

##### `raw_key_input`<sup>Optional</sup> <a name="raw_key_input" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKeyInput"></a>

```python
raw_key_input: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `raw_key`<sup>Required</sup> <a name="raw_key" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: ComputeDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeDisk.ComputeDiskSourceSnapshotEncryptionKey">ComputeDiskSourceSnapshotEncryptionKey</a>

---


### ComputeDiskTimeoutsOutputReference <a name="ComputeDiskTimeoutsOutputReference" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_disk

computeDisk.ComputeDiskTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeouts">ComputeDiskTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeDisk.ComputeDiskTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeDiskTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeDisk.ComputeDiskTimeouts">ComputeDiskTimeouts</a>]

---



