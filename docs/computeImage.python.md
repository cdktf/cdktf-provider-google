# `computeImage` Submodule <a name="`computeImage` Submodule" id="@cdktf/provider-google.computeImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeImage <a name="ComputeImage" id="@cdktf/provider-google.computeImage.ComputeImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image google_compute_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImage(
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
  description: str = None,
  disk_size_gb: typing.Union[int, float] = None,
  family: str = None,
  guest_os_features: typing.Union[IResolvable, typing.List[ComputeImageGuestOsFeatures]] = None,
  id: str = None,
  image_encryption_key: ComputeImageImageEncryptionKey = None,
  labels: typing.Mapping[str] = None,
  licenses: typing.List[str] = None,
  project: str = None,
  raw_disk: ComputeImageRawDisk = None,
  shielded_instance_initial_state: ComputeImageShieldedInstanceInitialState = None,
  source_disk: str = None,
  source_disk_encryption_key: ComputeImageSourceDiskEncryptionKey = None,
  source_image: str = None,
  source_image_encryption_key: ComputeImageSourceImageEncryptionKey = None,
  source_snapshot: str = None,
  source_snapshot_encryption_key: ComputeImageSourceSnapshotEncryptionKey = None,
  storage_locations: typing.List[str] = None,
  timeouts: ComputeImageTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Size of the image when restored onto a persistent disk (in GB). |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.family">family</a></code> | <code>str</code> | The name of the image family to which this image belongs. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.guestOsFeatures">guest_os_features</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeatures">ComputeImageGuestOsFeatures</a>]]</code> | guest_os_features block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#id ComputeImage#id}. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.imageEncryptionKey">image_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a></code> | image_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this Image. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.licenses">licenses</a></code> | <code>typing.List[str]</code> | Any applicable license URI. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#project ComputeImage#project}. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.rawDisk">raw_disk</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a></code> | raw_disk block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.shieldedInstanceInitialState">shielded_instance_initial_state</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState">ComputeImageShieldedInstanceInitialState</a></code> | shielded_instance_initial_state block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.sourceDisk">source_disk</a></code> | <code>str</code> | The source disk to create this image based on. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.sourceDiskEncryptionKey">source_disk_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey">ComputeImageSourceDiskEncryptionKey</a></code> | source_disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.sourceImage">source_image</a></code> | <code>str</code> | URL of the source image used to create this image. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.sourceImageEncryptionKey">source_image_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey">ComputeImageSourceImageEncryptionKey</a></code> | source_image_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.sourceSnapshot">source_snapshot</a></code> | <code>str</code> | URL of the source snapshot used to create this image. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.sourceSnapshotEncryptionKey">source_snapshot_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey">ComputeImageSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.storageLocations">storage_locations</a></code> | <code>typing.List[str]</code> | Cloud Storage bucket storage location of the image (regional or multi-regional). Reference link: https://cloud.google.com/compute/docs/reference/rest/v1/images. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeouts">ComputeImageTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#name ComputeImage#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#description ComputeImage#description}

---

##### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.diskSizeGb"></a>

- *Type:* typing.Union[int, float]

Size of the image when restored onto a persistent disk (in GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#disk_size_gb ComputeImage#disk_size_gb}

---

##### `family`<sup>Optional</sup> <a name="family" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.family"></a>

- *Type:* str

The name of the image family to which this image belongs.

You can
create disks by specifying an image family instead of a specific
image name. The image family always returns its latest image that is
not deprecated. The name of the image family must comply with
RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#family ComputeImage#family}

---

##### `guest_os_features`<sup>Optional</sup> <a name="guest_os_features" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.guestOsFeatures"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeatures">ComputeImageGuestOsFeatures</a>]]

guest_os_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#guest_os_features ComputeImage#guest_os_features}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#id ComputeImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_encryption_key`<sup>Optional</sup> <a name="image_encryption_key" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.imageEncryptionKey"></a>

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a>

image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#image_encryption_key ComputeImage#image_encryption_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels to apply to this Image.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#labels ComputeImage#labels}

---

##### `licenses`<sup>Optional</sup> <a name="licenses" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.licenses"></a>

- *Type:* typing.List[str]

Any applicable license URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#licenses ComputeImage#licenses}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#project ComputeImage#project}.

---

##### `raw_disk`<sup>Optional</sup> <a name="raw_disk" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.rawDisk"></a>

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a>

raw_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#raw_disk ComputeImage#raw_disk}

---

##### `shielded_instance_initial_state`<sup>Optional</sup> <a name="shielded_instance_initial_state" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.shieldedInstanceInitialState"></a>

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState">ComputeImageShieldedInstanceInitialState</a>

shielded_instance_initial_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#shielded_instance_initial_state ComputeImage#shielded_instance_initial_state}

---

##### `source_disk`<sup>Optional</sup> <a name="source_disk" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.sourceDisk"></a>

- *Type:* str

The source disk to create this image based on.

You must provide either this property or the
rawDisk.source property but not both to create an image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#source_disk ComputeImage#source_disk}

---

##### `source_disk_encryption_key`<sup>Optional</sup> <a name="source_disk_encryption_key" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.sourceDiskEncryptionKey"></a>

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey">ComputeImageSourceDiskEncryptionKey</a>

source_disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#source_disk_encryption_key ComputeImage#source_disk_encryption_key}

---

##### `source_image`<sup>Optional</sup> <a name="source_image" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.sourceImage"></a>

- *Type:* str

URL of the source image used to create this image.

In order to create an image, you must provide the full or partial
URL of one of the following:

* The selfLink URL
* This property
* The rawDisk.source URL
* The sourceDisk URL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#source_image ComputeImage#source_image}

---

##### `source_image_encryption_key`<sup>Optional</sup> <a name="source_image_encryption_key" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.sourceImageEncryptionKey"></a>

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey">ComputeImageSourceImageEncryptionKey</a>

source_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#source_image_encryption_key ComputeImage#source_image_encryption_key}

---

##### `source_snapshot`<sup>Optional</sup> <a name="source_snapshot" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.sourceSnapshot"></a>

- *Type:* str

URL of the source snapshot used to create this image.

In order to create an image, you must provide the full or partial URL of one of the following:

* The selfLink URL
* This property
* The sourceImage URL
* The rawDisk.source URL
* The sourceDisk URL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#source_snapshot ComputeImage#source_snapshot}

---

##### `source_snapshot_encryption_key`<sup>Optional</sup> <a name="source_snapshot_encryption_key" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.sourceSnapshotEncryptionKey"></a>

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey">ComputeImageSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#source_snapshot_encryption_key ComputeImage#source_snapshot_encryption_key}

---

##### `storage_locations`<sup>Optional</sup> <a name="storage_locations" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.storageLocations"></a>

- *Type:* typing.List[str]

Cloud Storage bucket storage location of the image (regional or multi-regional). Reference link: https://cloud.google.com/compute/docs/reference/rest/v1/images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#storage_locations ComputeImage#storage_locations}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeImage.ComputeImage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageTimeouts">ComputeImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#timeouts ComputeImage#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.putGuestOsFeatures">put_guest_os_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.putImageEncryptionKey">put_image_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.putRawDisk">put_raw_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.putShieldedInstanceInitialState">put_shielded_instance_initial_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.putSourceDiskEncryptionKey">put_source_disk_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.putSourceImageEncryptionKey">put_source_image_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.putSourceSnapshotEncryptionKey">put_source_snapshot_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetDiskSizeGb">reset_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetFamily">reset_family</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetGuestOsFeatures">reset_guest_os_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetImageEncryptionKey">reset_image_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetLicenses">reset_licenses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetRawDisk">reset_raw_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetShieldedInstanceInitialState">reset_shielded_instance_initial_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetSourceDisk">reset_source_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetSourceDiskEncryptionKey">reset_source_disk_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetSourceImage">reset_source_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetSourceImageEncryptionKey">reset_source_image_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetSourceSnapshot">reset_source_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetSourceSnapshotEncryptionKey">reset_source_snapshot_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetStorageLocations">reset_storage_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeImage.ComputeImage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeImage.ComputeImage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeImage.ComputeImage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeImage.ComputeImage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeImage.ComputeImage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeImage.ComputeImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeImage.ComputeImage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeImage.ComputeImage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeImage.ComputeImage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeImage.ComputeImage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeImage.ComputeImage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeImage.ComputeImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeImage.ComputeImage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeImage.ComputeImage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeImage.ComputeImage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeImage.ComputeImage.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeImage.ComputeImage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeImage.ComputeImage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeImage.ComputeImage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeImage.ComputeImage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeImage.ComputeImage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeImage.ComputeImage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeImage.ComputeImage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeImage.ComputeImage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeImage.ComputeImage.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeImage.ComputeImage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeImage.ComputeImage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_guest_os_features` <a name="put_guest_os_features" id="@cdktf/provider-google.computeImage.ComputeImage.putGuestOsFeatures"></a>

```python
def put_guest_os_features(
  value: typing.Union[IResolvable, typing.List[ComputeImageGuestOsFeatures]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeImage.ComputeImage.putGuestOsFeatures.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeatures">ComputeImageGuestOsFeatures</a>]]

---

##### `put_image_encryption_key` <a name="put_image_encryption_key" id="@cdktf/provider-google.computeImage.ComputeImage.putImageEncryptionKey"></a>

```python
def put_image_encryption_key(
  kms_key_self_link: str = None,
  kms_key_service_account: str = None,
  raw_key: str = None,
  rsa_encrypted_key: str = None
) -> None
```

###### `kms_key_self_link`<sup>Optional</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeImage.ComputeImage.putImageEncryptionKey.parameter.kmsKeySelfLink"></a>

- *Type:* str

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#kms_key_self_link ComputeImage#kms_key_self_link}

---

###### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeImage.ComputeImage.putImageEncryptionKey.parameter.kmsKeyServiceAccount"></a>

- *Type:* str

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service
account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#kms_key_service_account ComputeImage#kms_key_service_account}

---

###### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google.computeImage.ComputeImage.putImageEncryptionKey.parameter.rawKey"></a>

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#raw_key ComputeImage#raw_key}

---

###### `rsa_encrypted_key`<sup>Optional</sup> <a name="rsa_encrypted_key" id="@cdktf/provider-google.computeImage.ComputeImage.putImageEncryptionKey.parameter.rsaEncryptedKey"></a>

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#rsa_encrypted_key ComputeImage#rsa_encrypted_key}

---

##### `put_raw_disk` <a name="put_raw_disk" id="@cdktf/provider-google.computeImage.ComputeImage.putRawDisk"></a>

```python
def put_raw_disk(
  source: str,
  container_type: str = None,
  sha1: str = None
) -> None
```

###### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.computeImage.ComputeImage.putRawDisk.parameter.source"></a>

- *Type:* str

The full Google Cloud Storage URL where disk storage is stored You must provide either this property or the sourceDisk property but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#source ComputeImage#source}

---

###### `container_type`<sup>Optional</sup> <a name="container_type" id="@cdktf/provider-google.computeImage.ComputeImage.putRawDisk.parameter.containerType"></a>

- *Type:* str

The format used to encode and transmit the block device, which should be TAR.

This is just a container and transmission format
and not a runtime format. Provided by the client when the disk
image is created. Default value: "TAR" Possible values: ["TAR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#container_type ComputeImage#container_type}

---

###### `sha1`<sup>Optional</sup> <a name="sha1" id="@cdktf/provider-google.computeImage.ComputeImage.putRawDisk.parameter.sha1"></a>

- *Type:* str

An optional SHA1 checksum of the disk image before unpackaging.

This is provided by the client when the disk image is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#sha1 ComputeImage#sha1}

---

##### `put_shielded_instance_initial_state` <a name="put_shielded_instance_initial_state" id="@cdktf/provider-google.computeImage.ComputeImage.putShieldedInstanceInitialState"></a>

```python
def put_shielded_instance_initial_state(
  dbs: typing.Union[IResolvable, typing.List[ComputeImageShieldedInstanceInitialStateDbs]] = None,
  dbxs: typing.Union[IResolvable, typing.List[ComputeImageShieldedInstanceInitialStateDbxs]] = None,
  keks: typing.Union[IResolvable, typing.List[ComputeImageShieldedInstanceInitialStateKeks]] = None,
  pk: ComputeImageShieldedInstanceInitialStatePk = None
) -> None
```

###### `dbs`<sup>Optional</sup> <a name="dbs" id="@cdktf/provider-google.computeImage.ComputeImage.putShieldedInstanceInitialState.parameter.dbs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs">ComputeImageShieldedInstanceInitialStateDbs</a>]]

dbs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#dbs ComputeImage#dbs}

---

###### `dbxs`<sup>Optional</sup> <a name="dbxs" id="@cdktf/provider-google.computeImage.ComputeImage.putShieldedInstanceInitialState.parameter.dbxs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs">ComputeImageShieldedInstanceInitialStateDbxs</a>]]

dbxs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#dbxs ComputeImage#dbxs}

---

###### `keks`<sup>Optional</sup> <a name="keks" id="@cdktf/provider-google.computeImage.ComputeImage.putShieldedInstanceInitialState.parameter.keks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks">ComputeImageShieldedInstanceInitialStateKeks</a>]]

keks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#keks ComputeImage#keks}

---

###### `pk`<sup>Optional</sup> <a name="pk" id="@cdktf/provider-google.computeImage.ComputeImage.putShieldedInstanceInitialState.parameter.pk"></a>

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk">ComputeImageShieldedInstanceInitialStatePk</a>

pk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#pk ComputeImage#pk}

---

##### `put_source_disk_encryption_key` <a name="put_source_disk_encryption_key" id="@cdktf/provider-google.computeImage.ComputeImage.putSourceDiskEncryptionKey"></a>

```python
def put_source_disk_encryption_key(
  kms_key_self_link: str = None,
  kms_key_service_account: str = None,
  raw_key: str = None,
  rsa_encrypted_key: str = None
) -> None
```

###### `kms_key_self_link`<sup>Optional</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeImage.ComputeImage.putSourceDiskEncryptionKey.parameter.kmsKeySelfLink"></a>

- *Type:* str

The self link of the encryption key used to decrypt this resource.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#kms_key_self_link ComputeImage#kms_key_self_link}

---

###### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeImage.ComputeImage.putSourceDiskEncryptionKey.parameter.kmsKeyServiceAccount"></a>

- *Type:* str

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service
account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#kms_key_service_account ComputeImage#kms_key_service_account}

---

###### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google.computeImage.ComputeImage.putSourceDiskEncryptionKey.parameter.rawKey"></a>

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#raw_key ComputeImage#raw_key}

---

###### `rsa_encrypted_key`<sup>Optional</sup> <a name="rsa_encrypted_key" id="@cdktf/provider-google.computeImage.ComputeImage.putSourceDiskEncryptionKey.parameter.rsaEncryptedKey"></a>

- *Type:* str

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

You can provide either the rawKey or the rsaEncryptedKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#rsa_encrypted_key ComputeImage#rsa_encrypted_key}

---

##### `put_source_image_encryption_key` <a name="put_source_image_encryption_key" id="@cdktf/provider-google.computeImage.ComputeImage.putSourceImageEncryptionKey"></a>

```python
def put_source_image_encryption_key(
  kms_key_self_link: str = None,
  kms_key_service_account: str = None,
  raw_key: str = None,
  rsa_encrypted_key: str = None
) -> None
```

###### `kms_key_self_link`<sup>Optional</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeImage.ComputeImage.putSourceImageEncryptionKey.parameter.kmsKeySelfLink"></a>

- *Type:* str

The self link of the encryption key used to decrypt this resource.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#kms_key_self_link ComputeImage#kms_key_self_link}

---

###### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeImage.ComputeImage.putSourceImageEncryptionKey.parameter.kmsKeyServiceAccount"></a>

- *Type:* str

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service
account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#kms_key_service_account ComputeImage#kms_key_service_account}

---

###### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google.computeImage.ComputeImage.putSourceImageEncryptionKey.parameter.rawKey"></a>

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#raw_key ComputeImage#raw_key}

---

###### `rsa_encrypted_key`<sup>Optional</sup> <a name="rsa_encrypted_key" id="@cdktf/provider-google.computeImage.ComputeImage.putSourceImageEncryptionKey.parameter.rsaEncryptedKey"></a>

- *Type:* str

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

You can provide either the rawKey or the rsaEncryptedKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#rsa_encrypted_key ComputeImage#rsa_encrypted_key}

---

##### `put_source_snapshot_encryption_key` <a name="put_source_snapshot_encryption_key" id="@cdktf/provider-google.computeImage.ComputeImage.putSourceSnapshotEncryptionKey"></a>

```python
def put_source_snapshot_encryption_key(
  kms_key_self_link: str = None,
  kms_key_service_account: str = None,
  raw_key: str = None,
  rsa_encrypted_key: str = None
) -> None
```

###### `kms_key_self_link`<sup>Optional</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeImage.ComputeImage.putSourceSnapshotEncryptionKey.parameter.kmsKeySelfLink"></a>

- *Type:* str

The self link of the encryption key used to decrypt this resource.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#kms_key_self_link ComputeImage#kms_key_self_link}

---

###### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeImage.ComputeImage.putSourceSnapshotEncryptionKey.parameter.kmsKeyServiceAccount"></a>

- *Type:* str

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service
account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#kms_key_service_account ComputeImage#kms_key_service_account}

---

###### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google.computeImage.ComputeImage.putSourceSnapshotEncryptionKey.parameter.rawKey"></a>

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#raw_key ComputeImage#raw_key}

---

###### `rsa_encrypted_key`<sup>Optional</sup> <a name="rsa_encrypted_key" id="@cdktf/provider-google.computeImage.ComputeImage.putSourceSnapshotEncryptionKey.parameter.rsaEncryptedKey"></a>

- *Type:* str

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

You can provide either the rawKey or the rsaEncryptedKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#rsa_encrypted_key ComputeImage#rsa_encrypted_key}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeImage.ComputeImage.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeImage.ComputeImage.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#create ComputeImage#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeImage.ComputeImage.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#delete ComputeImage#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeImage.ComputeImage.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#update ComputeImage#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeImage.ComputeImage.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disk_size_gb` <a name="reset_disk_size_gb" id="@cdktf/provider-google.computeImage.ComputeImage.resetDiskSizeGb"></a>

```python
def reset_disk_size_gb() -> None
```

##### `reset_family` <a name="reset_family" id="@cdktf/provider-google.computeImage.ComputeImage.resetFamily"></a>

```python
def reset_family() -> None
```

##### `reset_guest_os_features` <a name="reset_guest_os_features" id="@cdktf/provider-google.computeImage.ComputeImage.resetGuestOsFeatures"></a>

```python
def reset_guest_os_features() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeImage.ComputeImage.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_encryption_key` <a name="reset_image_encryption_key" id="@cdktf/provider-google.computeImage.ComputeImage.resetImageEncryptionKey"></a>

```python
def reset_image_encryption_key() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.computeImage.ComputeImage.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_licenses` <a name="reset_licenses" id="@cdktf/provider-google.computeImage.ComputeImage.resetLicenses"></a>

```python
def reset_licenses() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeImage.ComputeImage.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_raw_disk` <a name="reset_raw_disk" id="@cdktf/provider-google.computeImage.ComputeImage.resetRawDisk"></a>

```python
def reset_raw_disk() -> None
```

##### `reset_shielded_instance_initial_state` <a name="reset_shielded_instance_initial_state" id="@cdktf/provider-google.computeImage.ComputeImage.resetShieldedInstanceInitialState"></a>

```python
def reset_shielded_instance_initial_state() -> None
```

##### `reset_source_disk` <a name="reset_source_disk" id="@cdktf/provider-google.computeImage.ComputeImage.resetSourceDisk"></a>

```python
def reset_source_disk() -> None
```

##### `reset_source_disk_encryption_key` <a name="reset_source_disk_encryption_key" id="@cdktf/provider-google.computeImage.ComputeImage.resetSourceDiskEncryptionKey"></a>

```python
def reset_source_disk_encryption_key() -> None
```

##### `reset_source_image` <a name="reset_source_image" id="@cdktf/provider-google.computeImage.ComputeImage.resetSourceImage"></a>

```python
def reset_source_image() -> None
```

##### `reset_source_image_encryption_key` <a name="reset_source_image_encryption_key" id="@cdktf/provider-google.computeImage.ComputeImage.resetSourceImageEncryptionKey"></a>

```python
def reset_source_image_encryption_key() -> None
```

##### `reset_source_snapshot` <a name="reset_source_snapshot" id="@cdktf/provider-google.computeImage.ComputeImage.resetSourceSnapshot"></a>

```python
def reset_source_snapshot() -> None
```

##### `reset_source_snapshot_encryption_key` <a name="reset_source_snapshot_encryption_key" id="@cdktf/provider-google.computeImage.ComputeImage.resetSourceSnapshotEncryptionKey"></a>

```python
def reset_source_snapshot_encryption_key() -> None
```

##### `reset_storage_locations` <a name="reset_storage_locations" id="@cdktf/provider-google.computeImage.ComputeImage.resetStorageLocations"></a>

```python
def reset_storage_locations() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeImage.ComputeImage.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeImage resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeImage.ComputeImage.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeImage.ComputeImage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeImage.ComputeImage.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeImage.ComputeImage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeImage.ComputeImage.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeImage.ComputeImage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeImage.ComputeImage.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeImage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeImage.ComputeImage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeImage.ComputeImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeImage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeImage.ComputeImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeImage.ComputeImage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.archiveSizeBytes">archive_size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.guestOsFeatures">guest_os_features</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList">ComputeImageGuestOsFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.imageEncryptionKey">image_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference">ComputeImageImageEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.labelFingerprint">label_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.rawDisk">raw_disk</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference">ComputeImageRawDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.shieldedInstanceInitialState">shielded_instance_initial_state</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference">ComputeImageShieldedInstanceInitialStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceDiskEncryptionKey">source_disk_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference">ComputeImageSourceDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceImageEncryptionKey">source_image_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference">ComputeImageSourceImageEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceSnapshotEncryptionKey">source_snapshot_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference">ComputeImageSourceSnapshotEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference">ComputeImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.familyInput">family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.guestOsFeaturesInput">guest_os_features_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeatures">ComputeImageGuestOsFeatures</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.imageEncryptionKeyInput">image_encryption_key_input</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.licensesInput">licenses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.rawDiskInput">raw_disk_input</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.shieldedInstanceInitialStateInput">shielded_instance_initial_state_input</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState">ComputeImageShieldedInstanceInitialState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceDiskEncryptionKeyInput">source_disk_encryption_key_input</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey">ComputeImageSourceDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceDiskInput">source_disk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceImageEncryptionKeyInput">source_image_encryption_key_input</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey">ComputeImageSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceImageInput">source_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceSnapshotEncryptionKeyInput">source_snapshot_encryption_key_input</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey">ComputeImageSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceSnapshotInput">source_snapshot_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.storageLocationsInput">storage_locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeImage.ComputeImageTimeouts">ComputeImageTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.family">family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.licenses">licenses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceDisk">source_disk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceImage">source_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.sourceSnapshot">source_snapshot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.storageLocations">storage_locations</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeImage.ComputeImage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeImage.ComputeImage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeImage.ComputeImage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeImage.ComputeImage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeImage.ComputeImage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeImage.ComputeImage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeImage.ComputeImage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeImage.ComputeImage.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeImage.ComputeImage.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeImage.ComputeImage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeImage.ComputeImage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeImage.ComputeImage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeImage.ComputeImage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeImage.ComputeImage.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `archive_size_bytes`<sup>Required</sup> <a name="archive_size_bytes" id="@cdktf/provider-google.computeImage.ComputeImage.property.archiveSizeBytes"></a>

```python
archive_size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeImage.ComputeImage.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.computeImage.ComputeImage.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `guest_os_features`<sup>Required</sup> <a name="guest_os_features" id="@cdktf/provider-google.computeImage.ComputeImage.property.guestOsFeatures"></a>

```python
guest_os_features: ComputeImageGuestOsFeaturesList
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList">ComputeImageGuestOsFeaturesList</a>

---

##### `image_encryption_key`<sup>Required</sup> <a name="image_encryption_key" id="@cdktf/provider-google.computeImage.ComputeImage.property.imageEncryptionKey"></a>

```python
image_encryption_key: ComputeImageImageEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference">ComputeImageImageEncryptionKeyOutputReference</a>

---

##### `label_fingerprint`<sup>Required</sup> <a name="label_fingerprint" id="@cdktf/provider-google.computeImage.ComputeImage.property.labelFingerprint"></a>

```python
label_fingerprint: str
```

- *Type:* str

---

##### `raw_disk`<sup>Required</sup> <a name="raw_disk" id="@cdktf/provider-google.computeImage.ComputeImage.property.rawDisk"></a>

```python
raw_disk: ComputeImageRawDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference">ComputeImageRawDiskOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeImage.ComputeImage.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `shielded_instance_initial_state`<sup>Required</sup> <a name="shielded_instance_initial_state" id="@cdktf/provider-google.computeImage.ComputeImage.property.shieldedInstanceInitialState"></a>

```python
shielded_instance_initial_state: ComputeImageShieldedInstanceInitialStateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference">ComputeImageShieldedInstanceInitialStateOutputReference</a>

---

##### `source_disk_encryption_key`<sup>Required</sup> <a name="source_disk_encryption_key" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceDiskEncryptionKey"></a>

```python
source_disk_encryption_key: ComputeImageSourceDiskEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference">ComputeImageSourceDiskEncryptionKeyOutputReference</a>

---

##### `source_image_encryption_key`<sup>Required</sup> <a name="source_image_encryption_key" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceImageEncryptionKey"></a>

```python
source_image_encryption_key: ComputeImageSourceImageEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference">ComputeImageSourceImageEncryptionKeyOutputReference</a>

---

##### `source_snapshot_encryption_key`<sup>Required</sup> <a name="source_snapshot_encryption_key" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceSnapshotEncryptionKey"></a>

```python
source_snapshot_encryption_key: ComputeImageSourceSnapshotEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference">ComputeImageSourceSnapshotEncryptionKeyOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.computeImage.ComputeImage.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeImage.ComputeImage.property.timeouts"></a>

```python
timeouts: ComputeImageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference">ComputeImageTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeImage.ComputeImage.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-google.computeImage.ComputeImage.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `family_input`<sup>Optional</sup> <a name="family_input" id="@cdktf/provider-google.computeImage.ComputeImage.property.familyInput"></a>

```python
family_input: str
```

- *Type:* str

---

##### `guest_os_features_input`<sup>Optional</sup> <a name="guest_os_features_input" id="@cdktf/provider-google.computeImage.ComputeImage.property.guestOsFeaturesInput"></a>

```python
guest_os_features_input: typing.Union[IResolvable, typing.List[ComputeImageGuestOsFeatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeatures">ComputeImageGuestOsFeatures</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeImage.ComputeImage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_encryption_key_input`<sup>Optional</sup> <a name="image_encryption_key_input" id="@cdktf/provider-google.computeImage.ComputeImage.property.imageEncryptionKeyInput"></a>

```python
image_encryption_key_input: ComputeImageImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.computeImage.ComputeImage.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `licenses_input`<sup>Optional</sup> <a name="licenses_input" id="@cdktf/provider-google.computeImage.ComputeImage.property.licensesInput"></a>

```python
licenses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeImage.ComputeImage.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeImage.ComputeImage.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `raw_disk_input`<sup>Optional</sup> <a name="raw_disk_input" id="@cdktf/provider-google.computeImage.ComputeImage.property.rawDiskInput"></a>

```python
raw_disk_input: ComputeImageRawDisk
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a>

---

##### `shielded_instance_initial_state_input`<sup>Optional</sup> <a name="shielded_instance_initial_state_input" id="@cdktf/provider-google.computeImage.ComputeImage.property.shieldedInstanceInitialStateInput"></a>

```python
shielded_instance_initial_state_input: ComputeImageShieldedInstanceInitialState
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState">ComputeImageShieldedInstanceInitialState</a>

---

##### `source_disk_encryption_key_input`<sup>Optional</sup> <a name="source_disk_encryption_key_input" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceDiskEncryptionKeyInput"></a>

```python
source_disk_encryption_key_input: ComputeImageSourceDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey">ComputeImageSourceDiskEncryptionKey</a>

---

##### `source_disk_input`<sup>Optional</sup> <a name="source_disk_input" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceDiskInput"></a>

```python
source_disk_input: str
```

- *Type:* str

---

##### `source_image_encryption_key_input`<sup>Optional</sup> <a name="source_image_encryption_key_input" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceImageEncryptionKeyInput"></a>

```python
source_image_encryption_key_input: ComputeImageSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey">ComputeImageSourceImageEncryptionKey</a>

---

##### `source_image_input`<sup>Optional</sup> <a name="source_image_input" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceImageInput"></a>

```python
source_image_input: str
```

- *Type:* str

---

##### `source_snapshot_encryption_key_input`<sup>Optional</sup> <a name="source_snapshot_encryption_key_input" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceSnapshotEncryptionKeyInput"></a>

```python
source_snapshot_encryption_key_input: ComputeImageSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey">ComputeImageSourceSnapshotEncryptionKey</a>

---

##### `source_snapshot_input`<sup>Optional</sup> <a name="source_snapshot_input" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceSnapshotInput"></a>

```python
source_snapshot_input: str
```

- *Type:* str

---

##### `storage_locations_input`<sup>Optional</sup> <a name="storage_locations_input" id="@cdktf/provider-google.computeImage.ComputeImage.property.storageLocationsInput"></a>

```python
storage_locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeImage.ComputeImage.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeImageTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeImage.ComputeImageTimeouts">ComputeImageTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeImage.ComputeImage.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-google.computeImage.ComputeImage.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-google.computeImage.ComputeImage.property.family"></a>

```python
family: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeImage.ComputeImage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.computeImage.ComputeImage.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `licenses`<sup>Required</sup> <a name="licenses" id="@cdktf/provider-google.computeImage.ComputeImage.property.licenses"></a>

```python
licenses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeImage.ComputeImage.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeImage.ComputeImage.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `source_disk`<sup>Required</sup> <a name="source_disk" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceDisk"></a>

```python
source_disk: str
```

- *Type:* str

---

##### `source_image`<sup>Required</sup> <a name="source_image" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceImage"></a>

```python
source_image: str
```

- *Type:* str

---

##### `source_snapshot`<sup>Required</sup> <a name="source_snapshot" id="@cdktf/provider-google.computeImage.ComputeImage.property.sourceSnapshot"></a>

```python
source_snapshot: str
```

- *Type:* str

---

##### `storage_locations`<sup>Required</sup> <a name="storage_locations" id="@cdktf/provider-google.computeImage.ComputeImage.property.storageLocations"></a>

```python
storage_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeImage.ComputeImage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeImageConfig <a name="ComputeImageConfig" id="@cdktf/provider-google.computeImage.ComputeImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  description: str = None,
  disk_size_gb: typing.Union[int, float] = None,
  family: str = None,
  guest_os_features: typing.Union[IResolvable, typing.List[ComputeImageGuestOsFeatures]] = None,
  id: str = None,
  image_encryption_key: ComputeImageImageEncryptionKey = None,
  labels: typing.Mapping[str] = None,
  licenses: typing.List[str] = None,
  project: str = None,
  raw_disk: ComputeImageRawDisk = None,
  shielded_instance_initial_state: ComputeImageShieldedInstanceInitialState = None,
  source_disk: str = None,
  source_disk_encryption_key: ComputeImageSourceDiskEncryptionKey = None,
  source_image: str = None,
  source_image_encryption_key: ComputeImageSourceImageEncryptionKey = None,
  source_snapshot: str = None,
  source_snapshot_encryption_key: ComputeImageSourceSnapshotEncryptionKey = None,
  storage_locations: typing.List[str] = None,
  timeouts: ComputeImageTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.name">name</a></code> | <code>str</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Size of the image when restored onto a persistent disk (in GB). |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.family">family</a></code> | <code>str</code> | The name of the image family to which this image belongs. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.guestOsFeatures">guest_os_features</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeatures">ComputeImageGuestOsFeatures</a>]]</code> | guest_os_features block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#id ComputeImage#id}. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.imageEncryptionKey">image_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a></code> | image_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this Image. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.licenses">licenses</a></code> | <code>typing.List[str]</code> | Any applicable license URI. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#project ComputeImage#project}. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.rawDisk">raw_disk</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a></code> | raw_disk block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.shieldedInstanceInitialState">shielded_instance_initial_state</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState">ComputeImageShieldedInstanceInitialState</a></code> | shielded_instance_initial_state block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceDisk">source_disk</a></code> | <code>str</code> | The source disk to create this image based on. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceDiskEncryptionKey">source_disk_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey">ComputeImageSourceDiskEncryptionKey</a></code> | source_disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceImage">source_image</a></code> | <code>str</code> | URL of the source image used to create this image. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceImageEncryptionKey">source_image_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey">ComputeImageSourceImageEncryptionKey</a></code> | source_image_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceSnapshot">source_snapshot</a></code> | <code>str</code> | URL of the source snapshot used to create this image. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceSnapshotEncryptionKey">source_snapshot_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey">ComputeImageSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.storageLocations">storage_locations</a></code> | <code>typing.List[str]</code> | Cloud Storage bucket storage location of the image (regional or multi-regional). Reference link: https://cloud.google.com/compute/docs/reference/rest/v1/images. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeouts">ComputeImageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#name ComputeImage#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#description ComputeImage#description}

---

##### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size of the image when restored onto a persistent disk (in GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#disk_size_gb ComputeImage#disk_size_gb}

---

##### `family`<sup>Optional</sup> <a name="family" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.family"></a>

```python
family: str
```

- *Type:* str

The name of the image family to which this image belongs.

You can
create disks by specifying an image family instead of a specific
image name. The image family always returns its latest image that is
not deprecated. The name of the image family must comply with
RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#family ComputeImage#family}

---

##### `guest_os_features`<sup>Optional</sup> <a name="guest_os_features" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.guestOsFeatures"></a>

```python
guest_os_features: typing.Union[IResolvable, typing.List[ComputeImageGuestOsFeatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeatures">ComputeImageGuestOsFeatures</a>]]

guest_os_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#guest_os_features ComputeImage#guest_os_features}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#id ComputeImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_encryption_key`<sup>Optional</sup> <a name="image_encryption_key" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.imageEncryptionKey"></a>

```python
image_encryption_key: ComputeImageImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a>

image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#image_encryption_key ComputeImage#image_encryption_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels to apply to this Image.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#labels ComputeImage#labels}

---

##### `licenses`<sup>Optional</sup> <a name="licenses" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.licenses"></a>

```python
licenses: typing.List[str]
```

- *Type:* typing.List[str]

Any applicable license URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#licenses ComputeImage#licenses}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#project ComputeImage#project}.

---

##### `raw_disk`<sup>Optional</sup> <a name="raw_disk" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.rawDisk"></a>

```python
raw_disk: ComputeImageRawDisk
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a>

raw_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#raw_disk ComputeImage#raw_disk}

---

##### `shielded_instance_initial_state`<sup>Optional</sup> <a name="shielded_instance_initial_state" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.shieldedInstanceInitialState"></a>

```python
shielded_instance_initial_state: ComputeImageShieldedInstanceInitialState
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState">ComputeImageShieldedInstanceInitialState</a>

shielded_instance_initial_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#shielded_instance_initial_state ComputeImage#shielded_instance_initial_state}

---

##### `source_disk`<sup>Optional</sup> <a name="source_disk" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceDisk"></a>

```python
source_disk: str
```

- *Type:* str

The source disk to create this image based on.

You must provide either this property or the
rawDisk.source property but not both to create an image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#source_disk ComputeImage#source_disk}

---

##### `source_disk_encryption_key`<sup>Optional</sup> <a name="source_disk_encryption_key" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceDiskEncryptionKey"></a>

```python
source_disk_encryption_key: ComputeImageSourceDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey">ComputeImageSourceDiskEncryptionKey</a>

source_disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#source_disk_encryption_key ComputeImage#source_disk_encryption_key}

---

##### `source_image`<sup>Optional</sup> <a name="source_image" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceImage"></a>

```python
source_image: str
```

- *Type:* str

URL of the source image used to create this image.

In order to create an image, you must provide the full or partial
URL of one of the following:

* The selfLink URL
* This property
* The rawDisk.source URL
* The sourceDisk URL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#source_image ComputeImage#source_image}

---

##### `source_image_encryption_key`<sup>Optional</sup> <a name="source_image_encryption_key" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceImageEncryptionKey"></a>

```python
source_image_encryption_key: ComputeImageSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey">ComputeImageSourceImageEncryptionKey</a>

source_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#source_image_encryption_key ComputeImage#source_image_encryption_key}

---

##### `source_snapshot`<sup>Optional</sup> <a name="source_snapshot" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceSnapshot"></a>

```python
source_snapshot: str
```

- *Type:* str

URL of the source snapshot used to create this image.

In order to create an image, you must provide the full or partial URL of one of the following:

* The selfLink URL
* This property
* The sourceImage URL
* The rawDisk.source URL
* The sourceDisk URL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#source_snapshot ComputeImage#source_snapshot}

---

##### `source_snapshot_encryption_key`<sup>Optional</sup> <a name="source_snapshot_encryption_key" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.sourceSnapshotEncryptionKey"></a>

```python
source_snapshot_encryption_key: ComputeImageSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey">ComputeImageSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#source_snapshot_encryption_key ComputeImage#source_snapshot_encryption_key}

---

##### `storage_locations`<sup>Optional</sup> <a name="storage_locations" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.storageLocations"></a>

```python
storage_locations: typing.List[str]
```

- *Type:* typing.List[str]

Cloud Storage bucket storage location of the image (regional or multi-regional). Reference link: https://cloud.google.com/compute/docs/reference/rest/v1/images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#storage_locations ComputeImage#storage_locations}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeImage.ComputeImageConfig.property.timeouts"></a>

```python
timeouts: ComputeImageTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageTimeouts">ComputeImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#timeouts ComputeImage#timeouts}

---

### ComputeImageGuestOsFeatures <a name="ComputeImageGuestOsFeatures" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeatures.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageGuestOsFeatures(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeatures.property.type">type</a></code> | <code>str</code> | The type of supported feature. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeatures.property.type"></a>

```python
type: str
```

- *Type:* str

The type of supported feature.

Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options. Possible values: ["MULTI_IP_SUBNET", "SECURE_BOOT", "SEV_CAPABLE", "UEFI_COMPATIBLE", "VIRTIO_SCSI_MULTIQUEUE", "WINDOWS", "GVNIC", "IDPF", "SEV_LIVE_MIGRATABLE", "SEV_SNP_CAPABLE", "SUSPEND_RESUME_COMPATIBLE", "TDX_CAPABLE", "SEV_LIVE_MIGRATABLE_V2"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#type ComputeImage#type}

---

### ComputeImageImageEncryptionKey <a name="ComputeImageImageEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageImageEncryptionKey(
  kms_key_self_link: str = None,
  kms_key_service_account: str = None,
  raw_key: str = None,
  rsa_encrypted_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | The service account being used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey.property.rawKey">raw_key</a></code> | <code>str</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey.property.rsaEncryptedKey">rsa_encrypted_key</a></code> | <code>str</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |

---

##### `kms_key_self_link`<sup>Optional</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#kms_key_self_link ComputeImage#kms_key_self_link}

---

##### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service
account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#kms_key_service_account ComputeImage#kms_key_service_account}

---

##### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#raw_key ComputeImage#raw_key}

---

##### `rsa_encrypted_key`<sup>Optional</sup> <a name="rsa_encrypted_key" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey.property.rsaEncryptedKey"></a>

```python
rsa_encrypted_key: str
```

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#rsa_encrypted_key ComputeImage#rsa_encrypted_key}

---

### ComputeImageRawDisk <a name="ComputeImageRawDisk" id="@cdktf/provider-google.computeImage.ComputeImageRawDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageRawDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageRawDisk(
  source: str,
  container_type: str = None,
  sha1: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk.property.source">source</a></code> | <code>str</code> | The full Google Cloud Storage URL where disk storage is stored You must provide either this property or the sourceDisk property but not both. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk.property.containerType">container_type</a></code> | <code>str</code> | The format used to encode and transmit the block device, which should be TAR. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk.property.sha1">sha1</a></code> | <code>str</code> | An optional SHA1 checksum of the disk image before unpackaging. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.computeImage.ComputeImageRawDisk.property.source"></a>

```python
source: str
```

- *Type:* str

The full Google Cloud Storage URL where disk storage is stored You must provide either this property or the sourceDisk property but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#source ComputeImage#source}

---

##### `container_type`<sup>Optional</sup> <a name="container_type" id="@cdktf/provider-google.computeImage.ComputeImageRawDisk.property.containerType"></a>

```python
container_type: str
```

- *Type:* str

The format used to encode and transmit the block device, which should be TAR.

This is just a container and transmission format
and not a runtime format. Provided by the client when the disk
image is created. Default value: "TAR" Possible values: ["TAR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#container_type ComputeImage#container_type}

---

##### `sha1`<sup>Optional</sup> <a name="sha1" id="@cdktf/provider-google.computeImage.ComputeImageRawDisk.property.sha1"></a>

```python
sha1: str
```

- *Type:* str

An optional SHA1 checksum of the disk image before unpackaging.

This is provided by the client when the disk image is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#sha1 ComputeImage#sha1}

---

### ComputeImageShieldedInstanceInitialState <a name="ComputeImageShieldedInstanceInitialState" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageShieldedInstanceInitialState(
  dbs: typing.Union[IResolvable, typing.List[ComputeImageShieldedInstanceInitialStateDbs]] = None,
  dbxs: typing.Union[IResolvable, typing.List[ComputeImageShieldedInstanceInitialStateDbxs]] = None,
  keks: typing.Union[IResolvable, typing.List[ComputeImageShieldedInstanceInitialStateKeks]] = None,
  pk: ComputeImageShieldedInstanceInitialStatePk = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.property.dbs">dbs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs">ComputeImageShieldedInstanceInitialStateDbs</a>]]</code> | dbs block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.property.dbxs">dbxs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs">ComputeImageShieldedInstanceInitialStateDbxs</a>]]</code> | dbxs block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.property.keks">keks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks">ComputeImageShieldedInstanceInitialStateKeks</a>]]</code> | keks block. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.property.pk">pk</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk">ComputeImageShieldedInstanceInitialStatePk</a></code> | pk block. |

---

##### `dbs`<sup>Optional</sup> <a name="dbs" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.property.dbs"></a>

```python
dbs: typing.Union[IResolvable, typing.List[ComputeImageShieldedInstanceInitialStateDbs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs">ComputeImageShieldedInstanceInitialStateDbs</a>]]

dbs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#dbs ComputeImage#dbs}

---

##### `dbxs`<sup>Optional</sup> <a name="dbxs" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.property.dbxs"></a>

```python
dbxs: typing.Union[IResolvable, typing.List[ComputeImageShieldedInstanceInitialStateDbxs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs">ComputeImageShieldedInstanceInitialStateDbxs</a>]]

dbxs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#dbxs ComputeImage#dbxs}

---

##### `keks`<sup>Optional</sup> <a name="keks" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.property.keks"></a>

```python
keks: typing.Union[IResolvable, typing.List[ComputeImageShieldedInstanceInitialStateKeks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks">ComputeImageShieldedInstanceInitialStateKeks</a>]]

keks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#keks ComputeImage#keks}

---

##### `pk`<sup>Optional</sup> <a name="pk" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.property.pk"></a>

```python
pk: ComputeImageShieldedInstanceInitialStatePk
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk">ComputeImageShieldedInstanceInitialStatePk</a>

pk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#pk ComputeImage#pk}

---

### ComputeImageShieldedInstanceInitialStateDbs <a name="ComputeImageShieldedInstanceInitialStateDbs" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageShieldedInstanceInitialStateDbs(
  content: str,
  file_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs.property.content">content</a></code> | <code>str</code> | The raw content in the secure keys file. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs.property.fileType">file_type</a></code> | <code>str</code> | The file type of source file. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs.property.content"></a>

```python
content: str
```

- *Type:* str

The raw content in the secure keys file.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#content ComputeImage#content}

---

##### `file_type`<sup>Optional</sup> <a name="file_type" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs.property.fileType"></a>

```python
file_type: str
```

- *Type:* str

The file type of source file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#file_type ComputeImage#file_type}

---

### ComputeImageShieldedInstanceInitialStateDbxs <a name="ComputeImageShieldedInstanceInitialStateDbxs" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageShieldedInstanceInitialStateDbxs(
  content: str,
  file_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs.property.content">content</a></code> | <code>str</code> | The raw content in the secure keys file. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs.property.fileType">file_type</a></code> | <code>str</code> | The file type of source file. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs.property.content"></a>

```python
content: str
```

- *Type:* str

The raw content in the secure keys file.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#content ComputeImage#content}

---

##### `file_type`<sup>Optional</sup> <a name="file_type" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs.property.fileType"></a>

```python
file_type: str
```

- *Type:* str

The file type of source file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#file_type ComputeImage#file_type}

---

### ComputeImageShieldedInstanceInitialStateKeks <a name="ComputeImageShieldedInstanceInitialStateKeks" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageShieldedInstanceInitialStateKeks(
  content: str,
  file_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks.property.content">content</a></code> | <code>str</code> | The raw content in the secure keys file. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks.property.fileType">file_type</a></code> | <code>str</code> | The file type of source file. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks.property.content"></a>

```python
content: str
```

- *Type:* str

The raw content in the secure keys file.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#content ComputeImage#content}

---

##### `file_type`<sup>Optional</sup> <a name="file_type" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks.property.fileType"></a>

```python
file_type: str
```

- *Type:* str

The file type of source file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#file_type ComputeImage#file_type}

---

### ComputeImageShieldedInstanceInitialStatePk <a name="ComputeImageShieldedInstanceInitialStatePk" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageShieldedInstanceInitialStatePk(
  content: str,
  file_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk.property.content">content</a></code> | <code>str</code> | The raw content in the secure keys file. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk.property.fileType">file_type</a></code> | <code>str</code> | The file type of source file. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk.property.content"></a>

```python
content: str
```

- *Type:* str

The raw content in the secure keys file.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#content ComputeImage#content}

---

##### `file_type`<sup>Optional</sup> <a name="file_type" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk.property.fileType"></a>

```python
file_type: str
```

- *Type:* str

The file type of source file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#file_type ComputeImage#file_type}

---

### ComputeImageSourceDiskEncryptionKey <a name="ComputeImageSourceDiskEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageSourceDiskEncryptionKey(
  kms_key_self_link: str = None,
  kms_key_service_account: str = None,
  raw_key: str = None,
  rsa_encrypted_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | The self link of the encryption key used to decrypt this resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | The service account being used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.property.rawKey">raw_key</a></code> | <code>str</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.property.rsaEncryptedKey">rsa_encrypted_key</a></code> | <code>str</code> | Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource. |

---

##### `kms_key_self_link`<sup>Optional</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

The self link of the encryption key used to decrypt this resource.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#kms_key_self_link ComputeImage#kms_key_self_link}

---

##### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service
account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#kms_key_service_account ComputeImage#kms_key_service_account}

---

##### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#raw_key ComputeImage#raw_key}

---

##### `rsa_encrypted_key`<sup>Optional</sup> <a name="rsa_encrypted_key" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.property.rsaEncryptedKey"></a>

```python
rsa_encrypted_key: str
```

- *Type:* str

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

You can provide either the rawKey or the rsaEncryptedKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#rsa_encrypted_key ComputeImage#rsa_encrypted_key}

---

### ComputeImageSourceImageEncryptionKey <a name="ComputeImageSourceImageEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageSourceImageEncryptionKey(
  kms_key_self_link: str = None,
  kms_key_service_account: str = None,
  raw_key: str = None,
  rsa_encrypted_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | The self link of the encryption key used to decrypt this resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | The service account being used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.property.rawKey">raw_key</a></code> | <code>str</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.property.rsaEncryptedKey">rsa_encrypted_key</a></code> | <code>str</code> | Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource. |

---

##### `kms_key_self_link`<sup>Optional</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

The self link of the encryption key used to decrypt this resource.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#kms_key_self_link ComputeImage#kms_key_self_link}

---

##### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service
account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#kms_key_service_account ComputeImage#kms_key_service_account}

---

##### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#raw_key ComputeImage#raw_key}

---

##### `rsa_encrypted_key`<sup>Optional</sup> <a name="rsa_encrypted_key" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.property.rsaEncryptedKey"></a>

```python
rsa_encrypted_key: str
```

- *Type:* str

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

You can provide either the rawKey or the rsaEncryptedKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#rsa_encrypted_key ComputeImage#rsa_encrypted_key}

---

### ComputeImageSourceSnapshotEncryptionKey <a name="ComputeImageSourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageSourceSnapshotEncryptionKey(
  kms_key_self_link: str = None,
  kms_key_service_account: str = None,
  raw_key: str = None,
  rsa_encrypted_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | The self link of the encryption key used to decrypt this resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | The service account being used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.property.rawKey">raw_key</a></code> | <code>str</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.property.rsaEncryptedKey">rsa_encrypted_key</a></code> | <code>str</code> | Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource. |

---

##### `kms_key_self_link`<sup>Optional</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

The self link of the encryption key used to decrypt this resource.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#kms_key_self_link ComputeImage#kms_key_self_link}

---

##### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service
account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#kms_key_service_account ComputeImage#kms_key_service_account}

---

##### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#raw_key ComputeImage#raw_key}

---

##### `rsa_encrypted_key`<sup>Optional</sup> <a name="rsa_encrypted_key" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.property.rsaEncryptedKey"></a>

```python
rsa_encrypted_key: str
```

- *Type:* str

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

You can provide either the rawKey or the rsaEncryptedKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#rsa_encrypted_key ComputeImage#rsa_encrypted_key}

---

### ComputeImageTimeouts <a name="ComputeImageTimeouts" id="@cdktf/provider-google.computeImage.ComputeImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeImage.ComputeImageTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#create ComputeImage#create}. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#delete ComputeImage#delete}. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#update ComputeImage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeImage.ComputeImageTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#create ComputeImage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeImage.ComputeImageTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#delete ComputeImage#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeImage.ComputeImageTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#update ComputeImage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeImageGuestOsFeaturesList <a name="ComputeImageGuestOsFeaturesList" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageGuestOsFeaturesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeImageGuestOsFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeatures">ComputeImageGuestOsFeatures</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeImageGuestOsFeatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeatures">ComputeImageGuestOsFeatures</a>]]

---


### ComputeImageGuestOsFeaturesOutputReference <a name="ComputeImageGuestOsFeaturesOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageGuestOsFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeatures">ComputeImageGuestOsFeatures</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeImageGuestOsFeatures]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeImage.ComputeImageGuestOsFeatures">ComputeImageGuestOsFeatures</a>]

---


### ComputeImageImageEncryptionKeyOutputReference <a name="ComputeImageImageEncryptionKeyOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageImageEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetKmsKeySelfLink">reset_kms_key_self_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount">reset_kms_key_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetRawKey">reset_raw_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetRsaEncryptedKey">reset_rsa_encrypted_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_self_link` <a name="reset_kms_key_self_link" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```python
def reset_kms_key_self_link() -> None
```

##### `reset_kms_key_service_account` <a name="reset_kms_key_service_account" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```python
def reset_kms_key_service_account() -> None
```

##### `reset_raw_key` <a name="reset_raw_key" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetRawKey"></a>

```python
def reset_raw_key() -> None
```

##### `reset_rsa_encrypted_key` <a name="reset_rsa_encrypted_key" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```python
def reset_rsa_encrypted_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kms_key_self_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kms_key_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.rawKeyInput">raw_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">rsa_encrypted_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.rawKey">raw_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.rsaEncryptedKey">rsa_encrypted_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_self_link_input`<sup>Optional</sup> <a name="kms_key_self_link_input" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```python
kms_key_self_link_input: str
```

- *Type:* str

---

##### `kms_key_service_account_input`<sup>Optional</sup> <a name="kms_key_service_account_input" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```python
kms_key_service_account_input: str
```

- *Type:* str

---

##### `raw_key_input`<sup>Optional</sup> <a name="raw_key_input" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.rawKeyInput"></a>

```python
raw_key_input: str
```

- *Type:* str

---

##### `rsa_encrypted_key_input`<sup>Optional</sup> <a name="rsa_encrypted_key_input" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```python
rsa_encrypted_key_input: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `raw_key`<sup>Required</sup> <a name="raw_key" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

---

##### `rsa_encrypted_key`<sup>Required</sup> <a name="rsa_encrypted_key" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```python
rsa_encrypted_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: ComputeImageImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a>

---


### ComputeImageRawDiskOutputReference <a name="ComputeImageRawDiskOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageRawDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.resetContainerType">reset_container_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.resetSha1">reset_sha1</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_container_type` <a name="reset_container_type" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.resetContainerType"></a>

```python
def reset_container_type() -> None
```

##### `reset_sha1` <a name="reset_sha1" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.resetSha1"></a>

```python
def reset_sha1() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.containerTypeInput">container_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.sha1Input">sha1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.containerType">container_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.sha1">sha1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_type_input`<sup>Optional</sup> <a name="container_type_input" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.containerTypeInput"></a>

```python
container_type_input: str
```

- *Type:* str

---

##### `sha1_input`<sup>Optional</sup> <a name="sha1_input" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.sha1Input"></a>

```python
sha1_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `container_type`<sup>Required</sup> <a name="container_type" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.containerType"></a>

```python
container_type: str
```

- *Type:* str

---

##### `sha1`<sup>Required</sup> <a name="sha1" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.sha1"></a>

```python
sha1: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.internalValue"></a>

```python
internal_value: ComputeImageRawDisk
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a>

---


### ComputeImageShieldedInstanceInitialStateDbsList <a name="ComputeImageShieldedInstanceInitialStateDbsList" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageShieldedInstanceInitialStateDbsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeImageShieldedInstanceInitialStateDbsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs">ComputeImageShieldedInstanceInitialStateDbs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeImageShieldedInstanceInitialStateDbs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs">ComputeImageShieldedInstanceInitialStateDbs</a>]]

---


### ComputeImageShieldedInstanceInitialStateDbsOutputReference <a name="ComputeImageShieldedInstanceInitialStateDbsOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.resetFileType">reset_file_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_type` <a name="reset_file_type" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.resetFileType"></a>

```python
def reset_file_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.fileTypeInput">file_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.fileType">file_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs">ComputeImageShieldedInstanceInitialStateDbs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `file_type_input`<sup>Optional</sup> <a name="file_type_input" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.fileTypeInput"></a>

```python
file_type_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `file_type`<sup>Required</sup> <a name="file_type" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.fileType"></a>

```python
file_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeImageShieldedInstanceInitialStateDbs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs">ComputeImageShieldedInstanceInitialStateDbs</a>]

---


### ComputeImageShieldedInstanceInitialStateDbxsList <a name="ComputeImageShieldedInstanceInitialStateDbxsList" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageShieldedInstanceInitialStateDbxsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeImageShieldedInstanceInitialStateDbxsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs">ComputeImageShieldedInstanceInitialStateDbxs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeImageShieldedInstanceInitialStateDbxs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs">ComputeImageShieldedInstanceInitialStateDbxs</a>]]

---


### ComputeImageShieldedInstanceInitialStateDbxsOutputReference <a name="ComputeImageShieldedInstanceInitialStateDbxsOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.resetFileType">reset_file_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_type` <a name="reset_file_type" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.resetFileType"></a>

```python
def reset_file_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.fileTypeInput">file_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.fileType">file_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs">ComputeImageShieldedInstanceInitialStateDbxs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `file_type_input`<sup>Optional</sup> <a name="file_type_input" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.fileTypeInput"></a>

```python
file_type_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `file_type`<sup>Required</sup> <a name="file_type" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.fileType"></a>

```python
file_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeImageShieldedInstanceInitialStateDbxs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs">ComputeImageShieldedInstanceInitialStateDbxs</a>]

---


### ComputeImageShieldedInstanceInitialStateKeksList <a name="ComputeImageShieldedInstanceInitialStateKeksList" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageShieldedInstanceInitialStateKeksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeImageShieldedInstanceInitialStateKeksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks">ComputeImageShieldedInstanceInitialStateKeks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeImageShieldedInstanceInitialStateKeks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks">ComputeImageShieldedInstanceInitialStateKeks</a>]]

---


### ComputeImageShieldedInstanceInitialStateKeksOutputReference <a name="ComputeImageShieldedInstanceInitialStateKeksOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.resetFileType">reset_file_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_type` <a name="reset_file_type" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.resetFileType"></a>

```python
def reset_file_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.fileTypeInput">file_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.fileType">file_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks">ComputeImageShieldedInstanceInitialStateKeks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `file_type_input`<sup>Optional</sup> <a name="file_type_input" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.fileTypeInput"></a>

```python
file_type_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `file_type`<sup>Required</sup> <a name="file_type" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.fileType"></a>

```python
file_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeImageShieldedInstanceInitialStateKeks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks">ComputeImageShieldedInstanceInitialStateKeks</a>]

---


### ComputeImageShieldedInstanceInitialStateOutputReference <a name="ComputeImageShieldedInstanceInitialStateOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageShieldedInstanceInitialStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putDbs">put_dbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putDbxs">put_dbxs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putKeks">put_keks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putPk">put_pk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resetDbs">reset_dbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resetDbxs">reset_dbxs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resetKeks">reset_keks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resetPk">reset_pk</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dbs` <a name="put_dbs" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putDbs"></a>

```python
def put_dbs(
  value: typing.Union[IResolvable, typing.List[ComputeImageShieldedInstanceInitialStateDbs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putDbs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs">ComputeImageShieldedInstanceInitialStateDbs</a>]]

---

##### `put_dbxs` <a name="put_dbxs" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putDbxs"></a>

```python
def put_dbxs(
  value: typing.Union[IResolvable, typing.List[ComputeImageShieldedInstanceInitialStateDbxs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putDbxs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs">ComputeImageShieldedInstanceInitialStateDbxs</a>]]

---

##### `put_keks` <a name="put_keks" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putKeks"></a>

```python
def put_keks(
  value: typing.Union[IResolvable, typing.List[ComputeImageShieldedInstanceInitialStateKeks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putKeks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks">ComputeImageShieldedInstanceInitialStateKeks</a>]]

---

##### `put_pk` <a name="put_pk" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putPk"></a>

```python
def put_pk(
  content: str,
  file_type: str = None
) -> None
```

###### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putPk.parameter.content"></a>

- *Type:* str

The raw content in the secure keys file.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#content ComputeImage#content}

---

###### `file_type`<sup>Optional</sup> <a name="file_type" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putPk.parameter.fileType"></a>

- *Type:* str

The file type of source file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_image#file_type ComputeImage#file_type}

---

##### `reset_dbs` <a name="reset_dbs" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resetDbs"></a>

```python
def reset_dbs() -> None
```

##### `reset_dbxs` <a name="reset_dbxs" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resetDbxs"></a>

```python
def reset_dbxs() -> None
```

##### `reset_keks` <a name="reset_keks" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resetKeks"></a>

```python
def reset_keks() -> None
```

##### `reset_pk` <a name="reset_pk" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resetPk"></a>

```python
def reset_pk() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.dbs">dbs</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList">ComputeImageShieldedInstanceInitialStateDbsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.dbxs">dbxs</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList">ComputeImageShieldedInstanceInitialStateDbxsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.keks">keks</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList">ComputeImageShieldedInstanceInitialStateKeksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.pk">pk</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference">ComputeImageShieldedInstanceInitialStatePkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.dbsInput">dbs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs">ComputeImageShieldedInstanceInitialStateDbs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.dbxsInput">dbxs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs">ComputeImageShieldedInstanceInitialStateDbxs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.keksInput">keks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks">ComputeImageShieldedInstanceInitialStateKeks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.pkInput">pk_input</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk">ComputeImageShieldedInstanceInitialStatePk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState">ComputeImageShieldedInstanceInitialState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dbs`<sup>Required</sup> <a name="dbs" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.dbs"></a>

```python
dbs: ComputeImageShieldedInstanceInitialStateDbsList
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList">ComputeImageShieldedInstanceInitialStateDbsList</a>

---

##### `dbxs`<sup>Required</sup> <a name="dbxs" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.dbxs"></a>

```python
dbxs: ComputeImageShieldedInstanceInitialStateDbxsList
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList">ComputeImageShieldedInstanceInitialStateDbxsList</a>

---

##### `keks`<sup>Required</sup> <a name="keks" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.keks"></a>

```python
keks: ComputeImageShieldedInstanceInitialStateKeksList
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList">ComputeImageShieldedInstanceInitialStateKeksList</a>

---

##### `pk`<sup>Required</sup> <a name="pk" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.pk"></a>

```python
pk: ComputeImageShieldedInstanceInitialStatePkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference">ComputeImageShieldedInstanceInitialStatePkOutputReference</a>

---

##### `dbs_input`<sup>Optional</sup> <a name="dbs_input" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.dbsInput"></a>

```python
dbs_input: typing.Union[IResolvable, typing.List[ComputeImageShieldedInstanceInitialStateDbs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs">ComputeImageShieldedInstanceInitialStateDbs</a>]]

---

##### `dbxs_input`<sup>Optional</sup> <a name="dbxs_input" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.dbxsInput"></a>

```python
dbxs_input: typing.Union[IResolvable, typing.List[ComputeImageShieldedInstanceInitialStateDbxs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs">ComputeImageShieldedInstanceInitialStateDbxs</a>]]

---

##### `keks_input`<sup>Optional</sup> <a name="keks_input" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.keksInput"></a>

```python
keks_input: typing.Union[IResolvable, typing.List[ComputeImageShieldedInstanceInitialStateKeks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks">ComputeImageShieldedInstanceInitialStateKeks</a>]]

---

##### `pk_input`<sup>Optional</sup> <a name="pk_input" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.pkInput"></a>

```python
pk_input: ComputeImageShieldedInstanceInitialStatePk
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk">ComputeImageShieldedInstanceInitialStatePk</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.internalValue"></a>

```python
internal_value: ComputeImageShieldedInstanceInitialState
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialState">ComputeImageShieldedInstanceInitialState</a>

---


### ComputeImageShieldedInstanceInitialStatePkOutputReference <a name="ComputeImageShieldedInstanceInitialStatePkOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.resetFileType">reset_file_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_type` <a name="reset_file_type" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.resetFileType"></a>

```python
def reset_file_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.fileTypeInput">file_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.fileType">file_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk">ComputeImageShieldedInstanceInitialStatePk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `file_type_input`<sup>Optional</sup> <a name="file_type_input" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.fileTypeInput"></a>

```python
file_type_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `file_type`<sup>Required</sup> <a name="file_type" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.fileType"></a>

```python
file_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.internalValue"></a>

```python
internal_value: ComputeImageShieldedInstanceInitialStatePk
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk">ComputeImageShieldedInstanceInitialStatePk</a>

---


### ComputeImageSourceDiskEncryptionKeyOutputReference <a name="ComputeImageSourceDiskEncryptionKeyOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resetKmsKeySelfLink">reset_kms_key_self_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resetKmsKeyServiceAccount">reset_kms_key_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resetRawKey">reset_raw_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resetRsaEncryptedKey">reset_rsa_encrypted_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_self_link` <a name="reset_kms_key_self_link" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```python
def reset_kms_key_self_link() -> None
```

##### `reset_kms_key_service_account` <a name="reset_kms_key_service_account" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```python
def reset_kms_key_service_account() -> None
```

##### `reset_raw_key` <a name="reset_raw_key" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resetRawKey"></a>

```python
def reset_raw_key() -> None
```

##### `reset_rsa_encrypted_key` <a name="reset_rsa_encrypted_key" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```python
def reset_rsa_encrypted_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kms_key_self_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kms_key_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.rawKeyInput">raw_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">rsa_encrypted_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.rawKey">raw_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.rsaEncryptedKey">rsa_encrypted_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey">ComputeImageSourceDiskEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_self_link_input`<sup>Optional</sup> <a name="kms_key_self_link_input" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```python
kms_key_self_link_input: str
```

- *Type:* str

---

##### `kms_key_service_account_input`<sup>Optional</sup> <a name="kms_key_service_account_input" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```python
kms_key_service_account_input: str
```

- *Type:* str

---

##### `raw_key_input`<sup>Optional</sup> <a name="raw_key_input" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.rawKeyInput"></a>

```python
raw_key_input: str
```

- *Type:* str

---

##### `rsa_encrypted_key_input`<sup>Optional</sup> <a name="rsa_encrypted_key_input" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```python
rsa_encrypted_key_input: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `raw_key`<sup>Required</sup> <a name="raw_key" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

---

##### `rsa_encrypted_key`<sup>Required</sup> <a name="rsa_encrypted_key" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```python
rsa_encrypted_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: ComputeImageSourceDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey">ComputeImageSourceDiskEncryptionKey</a>

---


### ComputeImageSourceImageEncryptionKeyOutputReference <a name="ComputeImageSourceImageEncryptionKeyOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageSourceImageEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resetKmsKeySelfLink">reset_kms_key_self_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount">reset_kms_key_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resetRawKey">reset_raw_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resetRsaEncryptedKey">reset_rsa_encrypted_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_self_link` <a name="reset_kms_key_self_link" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```python
def reset_kms_key_self_link() -> None
```

##### `reset_kms_key_service_account` <a name="reset_kms_key_service_account" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```python
def reset_kms_key_service_account() -> None
```

##### `reset_raw_key` <a name="reset_raw_key" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resetRawKey"></a>

```python
def reset_raw_key() -> None
```

##### `reset_rsa_encrypted_key` <a name="reset_rsa_encrypted_key" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```python
def reset_rsa_encrypted_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kms_key_self_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kms_key_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.rawKeyInput">raw_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">rsa_encrypted_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.rawKey">raw_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKey">rsa_encrypted_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey">ComputeImageSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_self_link_input`<sup>Optional</sup> <a name="kms_key_self_link_input" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```python
kms_key_self_link_input: str
```

- *Type:* str

---

##### `kms_key_service_account_input`<sup>Optional</sup> <a name="kms_key_service_account_input" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```python
kms_key_service_account_input: str
```

- *Type:* str

---

##### `raw_key_input`<sup>Optional</sup> <a name="raw_key_input" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.rawKeyInput"></a>

```python
raw_key_input: str
```

- *Type:* str

---

##### `rsa_encrypted_key_input`<sup>Optional</sup> <a name="rsa_encrypted_key_input" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```python
rsa_encrypted_key_input: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `raw_key`<sup>Required</sup> <a name="raw_key" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

---

##### `rsa_encrypted_key`<sup>Required</sup> <a name="rsa_encrypted_key" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```python
rsa_encrypted_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: ComputeImageSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceImageEncryptionKey">ComputeImageSourceImageEncryptionKey</a>

---


### ComputeImageSourceSnapshotEncryptionKeyOutputReference <a name="ComputeImageSourceSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink">reset_kms_key_self_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount">reset_kms_key_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resetRawKey">reset_raw_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resetRsaEncryptedKey">reset_rsa_encrypted_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_self_link` <a name="reset_kms_key_self_link" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```python
def reset_kms_key_self_link() -> None
```

##### `reset_kms_key_service_account` <a name="reset_kms_key_service_account" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```python
def reset_kms_key_service_account() -> None
```

##### `reset_raw_key` <a name="reset_raw_key" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resetRawKey"></a>

```python
def reset_raw_key() -> None
```

##### `reset_rsa_encrypted_key` <a name="reset_rsa_encrypted_key" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```python
def reset_rsa_encrypted_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kms_key_self_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kms_key_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rawKeyInput">raw_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">rsa_encrypted_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rawKey">raw_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKey">rsa_encrypted_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey">ComputeImageSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_self_link_input`<sup>Optional</sup> <a name="kms_key_self_link_input" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```python
kms_key_self_link_input: str
```

- *Type:* str

---

##### `kms_key_service_account_input`<sup>Optional</sup> <a name="kms_key_service_account_input" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```python
kms_key_service_account_input: str
```

- *Type:* str

---

##### `raw_key_input`<sup>Optional</sup> <a name="raw_key_input" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rawKeyInput"></a>

```python
raw_key_input: str
```

- *Type:* str

---

##### `rsa_encrypted_key_input`<sup>Optional</sup> <a name="rsa_encrypted_key_input" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```python
rsa_encrypted_key_input: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `raw_key`<sup>Required</sup> <a name="raw_key" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

---

##### `rsa_encrypted_key`<sup>Required</sup> <a name="rsa_encrypted_key" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```python
rsa_encrypted_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: ComputeImageSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey">ComputeImageSourceSnapshotEncryptionKey</a>

---


### ComputeImageTimeoutsOutputReference <a name="ComputeImageTimeoutsOutputReference" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_image

computeImage.ComputeImageTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeImage.ComputeImageTimeouts">ComputeImageTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeImageTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeImage.ComputeImageTimeouts">ComputeImageTimeouts</a>]

---



