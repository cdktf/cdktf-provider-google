# `google_compute_region_disk`

Refer to the Terraform Registory for docs: [`google_compute_region_disk`](https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk).

# `computeRegionDisk` Submodule <a name="`computeRegionDisk` Submodule" id="@cdktf/provider-google.computeRegionDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionDisk <a name="ComputeRegionDisk" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk google_compute_region_disk}.

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
  description: str = None,
  disk_encryption_key: ComputeRegionDiskDiskEncryptionKey = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  physical_block_size_bytes: typing.Union[int, float] = None,
  project: str = None,
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
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.diskEncryptionKey">disk_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey">ComputeRegionDiskDiskEncryptionKey</a></code> | disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#id ComputeRegionDisk#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this disk.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.physicalBlockSizeBytes">physical_block_size_bytes</a></code> | <code>typing.Union[int, float]</code> | Physical block size of the persistent disk, in bytes. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#project ComputeRegionDisk#project}. |
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#name ComputeRegionDisk#name}

---

##### `replica_zones`<sup>Required</sup> <a name="replica_zones" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.replicaZones"></a>

- *Type:* typing.List[str]

URLs of the zones where the disk should be replicated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#replica_zones ComputeRegionDisk#replica_zones}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#description ComputeRegionDisk#description}

---

##### `disk_encryption_key`<sup>Optional</sup> <a name="disk_encryption_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.diskEncryptionKey"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey">ComputeRegionDiskDiskEncryptionKey</a>

disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#disk_encryption_key ComputeRegionDisk#disk_encryption_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#id ComputeRegionDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels to apply to this disk.  A list of key->value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#labels ComputeRegionDisk#labels}

---

##### `physical_block_size_bytes`<sup>Optional</sup> <a name="physical_block_size_bytes" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.physicalBlockSizeBytes"></a>

- *Type:* typing.Union[int, float]

Physical block size of the persistent disk, in bytes.

If not present
in a request, a default value is used. Currently supported sizes
are 4096 and 16384, other sizes may be added in the future.
If an unsupported value is requested, the error message will list
the supported values for the caller's project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#physical_block_size_bytes ComputeRegionDisk#physical_block_size_bytes}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#project ComputeRegionDisk#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.region"></a>

- *Type:* str

A reference to the region where the disk resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#region ComputeRegionDisk#region}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#size ComputeRegionDisk#size}

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.snapshot"></a>

- *Type:* str

The source snapshot used to create this disk.

You can provide this as
a partial or full URL to the resource. For example, the following are
valid values:

'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot'
'projects/project/global/snapshots/snapshot'
'global/snapshots/snapshot'
'snapshot'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#snapshot ComputeRegionDisk#snapshot}

---

##### `source_disk`<sup>Optional</sup> <a name="source_disk" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.sourceDisk"></a>

- *Type:* str

The source disk used to create this disk.

You can provide this as a partial or full URL to the resource.
For example, the following are valid values:

https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/disks/{disk}
https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/disks/{disk}
projects/{project}/zones/{zone}/disks/{disk}
projects/{project}/regions/{region}/disks/{disk}
zones/{zone}/disks/{disk}
regions/{region}/disks/{disk}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#source_disk ComputeRegionDisk#source_disk}

---

##### `source_snapshot_encryption_key`<sup>Optional</sup> <a name="source_snapshot_encryption_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.sourceSnapshotEncryptionKey"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKey">ComputeRegionDiskSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#source_snapshot_encryption_key ComputeRegionDisk#source_snapshot_encryption_key}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts">ComputeRegionDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#timeouts ComputeRegionDisk#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.Initializer.parameter.type"></a>

- *Type:* str

URL of the disk type resource describing which disk type to use to create the disk.

Provide this when creating the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#type ComputeRegionDisk#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putDiskEncryptionKey">put_disk_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putSourceSnapshotEncryptionKey">put_source_snapshot_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetDiskEncryptionKey">reset_disk_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetPhysicalBlockSizeBytes">reset_physical_block_size_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetProject">reset_project</a></code> | *No description.* |
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

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

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

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_disk_encryption_key` <a name="put_disk_encryption_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putDiskEncryptionKey"></a>

```python
def put_disk_encryption_key(
  kms_key_name: str = None,
  raw_key: str = None
) -> None
```

###### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putDiskEncryptionKey.parameter.kmsKeyName"></a>

- *Type:* str

The name of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#kms_key_name ComputeRegionDisk#kms_key_name}

---

###### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putDiskEncryptionKey.parameter.rawKey"></a>

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#raw_key ComputeRegionDisk#raw_key}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#raw_key ComputeRegionDisk#raw_key}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#create ComputeRegionDisk#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#delete ComputeRegionDisk#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#update ComputeRegionDisk#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disk_encryption_key` <a name="reset_disk_encryption_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetDiskEncryptionKey"></a>

```python
def reset_disk_encryption_key() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_physical_block_size_bytes` <a name="reset_physical_block_size_bytes" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetPhysicalBlockSizeBytes"></a>

```python
def reset_physical_block_size_bytes() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.resetProject"></a>

```python
def reset_project() -> None
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
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.diskEncryptionKey">disk_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference">ComputeRegionDiskDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.labelFingerprint">label_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.lastAttachTimestamp">last_attach_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.lastDetachTimestamp">last_detach_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.sourceDiskId">source_disk_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.sourceSnapshotEncryptionKey">source_snapshot_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference">ComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.sourceSnapshotId">source_snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference">ComputeRegionDiskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.users">users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.diskEncryptionKeyInput">disk_encryption_key_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey">ComputeRegionDiskDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.physicalBlockSizeBytesInput">physical_block_size_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.replicaZonesInput">replica_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.snapshotInput">snapshot_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.sourceDiskInput">source_disk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.sourceSnapshotEncryptionKeyInput">source_snapshot_encryption_key_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKey">ComputeRegionDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts">ComputeRegionDiskTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.physicalBlockSizeBytes">physical_block_size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.project">project</a></code> | <code>str</code> | *No description.* |
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
timeouts_input: typing.Union[ComputeRegionDiskTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts">ComputeRegionDiskTimeouts</a>, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDisk.property.typeInput"></a>

```python
type_input: str
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
  description: str = None,
  disk_encryption_key: ComputeRegionDiskDiskEncryptionKey = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  physical_block_size_bytes: typing.Union[int, float] = None,
  project: str = None,
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
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.diskEncryptionKey">disk_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey">ComputeRegionDiskDiskEncryptionKey</a></code> | disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#id ComputeRegionDisk#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this disk.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.physicalBlockSizeBytes">physical_block_size_bytes</a></code> | <code>typing.Union[int, float]</code> | Physical block size of the persistent disk, in bytes. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#project ComputeRegionDisk#project}. |
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#name ComputeRegionDisk#name}

---

##### `replica_zones`<sup>Required</sup> <a name="replica_zones" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.replicaZones"></a>

```python
replica_zones: typing.List[str]
```

- *Type:* typing.List[str]

URLs of the zones where the disk should be replicated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#replica_zones ComputeRegionDisk#replica_zones}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#description ComputeRegionDisk#description}

---

##### `disk_encryption_key`<sup>Optional</sup> <a name="disk_encryption_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.diskEncryptionKey"></a>

```python
disk_encryption_key: ComputeRegionDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey">ComputeRegionDiskDiskEncryptionKey</a>

disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#disk_encryption_key ComputeRegionDisk#disk_encryption_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#id ComputeRegionDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels to apply to this disk.  A list of key->value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#labels ComputeRegionDisk#labels}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#physical_block_size_bytes ComputeRegionDisk#physical_block_size_bytes}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#project ComputeRegionDisk#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.region"></a>

```python
region: str
```

- *Type:* str

A reference to the region where the disk resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#region ComputeRegionDisk#region}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#size ComputeRegionDisk#size}

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

'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot'
'projects/project/global/snapshots/snapshot'
'global/snapshots/snapshot'
'snapshot'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#snapshot ComputeRegionDisk#snapshot}

---

##### `source_disk`<sup>Optional</sup> <a name="source_disk" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.sourceDisk"></a>

```python
source_disk: str
```

- *Type:* str

The source disk used to create this disk.

You can provide this as a partial or full URL to the resource.
For example, the following are valid values:

https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/disks/{disk}
https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/disks/{disk}
projects/{project}/zones/{zone}/disks/{disk}
projects/{project}/regions/{region}/disks/{disk}
zones/{zone}/disks/{disk}
regions/{region}/disks/{disk}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#source_disk ComputeRegionDisk#source_disk}

---

##### `source_snapshot_encryption_key`<sup>Optional</sup> <a name="source_snapshot_encryption_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.sourceSnapshotEncryptionKey"></a>

```python
source_snapshot_encryption_key: ComputeRegionDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskSourceSnapshotEncryptionKey">ComputeRegionDiskSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#source_snapshot_encryption_key ComputeRegionDisk#source_snapshot_encryption_key}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.timeouts"></a>

```python
timeouts: ComputeRegionDiskTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts">ComputeRegionDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#timeouts ComputeRegionDisk#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskConfig.property.type"></a>

```python
type: str
```

- *Type:* str

URL of the disk type resource describing which disk type to use to create the disk.

Provide this when creating the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#type ComputeRegionDisk#type}

---

### ComputeRegionDiskDiskEncryptionKey <a name="ComputeRegionDiskDiskEncryptionKey" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_disk

computeRegionDisk.ComputeRegionDiskDiskEncryptionKey(
  kms_key_name: str = None,
  raw_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The name of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey.property.rawKey">raw_key</a></code> | <code>str</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The name of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#kms_key_name ComputeRegionDisk#kms_key_name}

---

##### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#raw_key ComputeRegionDisk#raw_key}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#raw_key ComputeRegionDisk#raw_key}

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
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#create ComputeRegionDisk#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#delete ComputeRegionDisk#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#update ComputeRegionDisk#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#create ComputeRegionDisk#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#delete ComputeRegionDisk#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/compute_region_disk#update ComputeRegionDisk#update}.

---

## Classes <a name="Classes" id="Classes"></a>

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


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.rawKeyInput">raw_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.rawKey">raw_key</a></code> | <code>str</code> | *No description.* |
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

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskDiskEncryptionKey">ComputeRegionDiskDiskEncryptionKey</a>

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
| <code><a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts">ComputeRegionDiskTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

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
internal_value: typing.Union[ComputeRegionDiskTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.computeRegionDisk.ComputeRegionDiskTimeouts">ComputeRegionDiskTimeouts</a>, cdktf.IResolvable]

---



