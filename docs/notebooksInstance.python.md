# `notebooksInstance` Submodule <a name="`notebooksInstance` Submodule" id="@cdktf/provider-google.notebooksInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotebooksInstance <a name="NotebooksInstance" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance google_notebooks_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_instance

notebooksInstance.NotebooksInstance(
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
  machine_type: str,
  name: str,
  accelerator_config: NotebooksInstanceAcceleratorConfig = None,
  boot_disk_size_gb: typing.Union[int, float] = None,
  boot_disk_type: str = None,
  container_image: NotebooksInstanceContainerImage = None,
  create_time: str = None,
  custom_gpu_driver_path: str = None,
  data_disk_size_gb: typing.Union[int, float] = None,
  data_disk_type: str = None,
  desired_state: str = None,
  disk_encryption: str = None,
  id: str = None,
  install_gpu_driver: typing.Union[bool, IResolvable] = None,
  instance_owners: typing.List[str] = None,
  kms_key: str = None,
  labels: typing.Mapping[str] = None,
  metadata: typing.Mapping[str] = None,
  network: str = None,
  nic_type: str = None,
  no_proxy_access: typing.Union[bool, IResolvable] = None,
  no_public_ip: typing.Union[bool, IResolvable] = None,
  no_remove_data_disk: typing.Union[bool, IResolvable] = None,
  post_startup_script: str = None,
  project: str = None,
  reservation_affinity: NotebooksInstanceReservationAffinity = None,
  service_account: str = None,
  service_account_scopes: typing.List[str] = None,
  shielded_instance_config: NotebooksInstanceShieldedInstanceConfig = None,
  subnet: str = None,
  tags: typing.List[str] = None,
  timeouts: NotebooksInstanceTimeouts = None,
  update_time: str = None,
  vm_image: NotebooksInstanceVmImage = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.location">location</a></code> | <code>str</code> | A reference to the zone where the machine resides. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.machineType">machine_type</a></code> | <code>str</code> | A reference to a machine type which defines VM kind. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | The name specified for the Notebook instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.acceleratorConfig">accelerator_config</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a></code> | accelerator_config block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.bootDiskSizeGb">boot_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.bootDiskType">boot_disk_type</a></code> | <code>str</code> | Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.containerImage">container_image</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.createTime">create_time</a></code> | <code>str</code> | Instance creation time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.customGpuDriverPath">custom_gpu_driver_path</a></code> | <code>str</code> | Specify a custom Cloud Storage path where the GPU driver is stored. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.dataDiskSizeGb">data_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.dataDiskType">data_disk_type</a></code> | <code>str</code> | Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.desiredState">desired_state</a></code> | <code>str</code> | Desired state of the Notebook Instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.diskEncryption">disk_encryption</a></code> | <code>str</code> | Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["DISK_ENCRYPTION_UNSPECIFIED", "GMEK", "CMEK"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#id NotebooksInstance#id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.installGpuDriver">install_gpu_driver</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the end user authorizes Google Cloud to install GPU driver on this instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.instanceOwners">instance_owners</a></code> | <code>typing.List[str]</code> | The list of owners of this instance after creation. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.kmsKey">kms_key</a></code> | <code>str</code> | The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK. Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Custom metadata to apply to this instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.network">network</a></code> | <code>str</code> | The name of the VPC that this instance is in. Format: projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.nicType">nic_type</a></code> | <code>str</code> | The type of vNIC driver. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.noProxyAccess">no_proxy_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The notebook instance will not register with the proxy.. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.noPublicIp">no_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | No public IP will be assigned to this instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.noRemoveDataDisk">no_remove_data_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the data disk will not be auto deleted when deleting the instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.postStartupScript">post_startup_script</a></code> | <code>str</code> | Path to a Bash script that automatically runs after a notebook instance fully boots up. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#project NotebooksInstance#project}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.reservationAffinity">reservation_affinity</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | The service account on this instance, giving access to other Google Cloud services. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.serviceAccountScopes">service_account_scopes</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.subnet">subnet</a></code> | <code>str</code> | The name of the subnet that this instance is in. Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | The Compute Engine tags to add to instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.updateTime">update_time</a></code> | <code>str</code> | Instance update time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.vmImage">vm_image</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a></code> | vm_image block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.location"></a>

- *Type:* str

A reference to the zone where the machine resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#location NotebooksInstance#location}

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.machineType"></a>

- *Type:* str

A reference to a machine type which defines VM kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#machine_type NotebooksInstance#machine_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.name"></a>

- *Type:* str

The name specified for the Notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#name NotebooksInstance#name}

---

##### `accelerator_config`<sup>Optional</sup> <a name="accelerator_config" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.acceleratorConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a>

accelerator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#accelerator_config NotebooksInstance#accelerator_config}

---

##### `boot_disk_size_gb`<sup>Optional</sup> <a name="boot_disk_size_gb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.bootDiskSizeGb"></a>

- *Type:* typing.Union[int, float]

The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB).

The minimum recommended value is 100 GB.
If not specified, this defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#boot_disk_size_gb NotebooksInstance#boot_disk_size_gb}

---

##### `boot_disk_type`<sup>Optional</sup> <a name="boot_disk_type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.bootDiskType"></a>

- *Type:* str

Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#boot_disk_type NotebooksInstance#boot_disk_type}

---

##### `container_image`<sup>Optional</sup> <a name="container_image" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.containerImage"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#container_image NotebooksInstance#container_image}

---

##### `create_time`<sup>Optional</sup> <a name="create_time" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.createTime"></a>

- *Type:* str

Instance creation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#create_time NotebooksInstance#create_time}

---

##### `custom_gpu_driver_path`<sup>Optional</sup> <a name="custom_gpu_driver_path" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.customGpuDriverPath"></a>

- *Type:* str

Specify a custom Cloud Storage path where the GPU driver is stored.

If not specified, we'll automatically choose from official GPU drivers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#custom_gpu_driver_path NotebooksInstance#custom_gpu_driver_path}

---

##### `data_disk_size_gb`<sup>Optional</sup> <a name="data_disk_size_gb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.dataDiskSizeGb"></a>

- *Type:* typing.Union[int, float]

The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB).

You can choose the size of the data disk based on how big your notebooks and data are.
If not specified, this defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#data_disk_size_gb NotebooksInstance#data_disk_size_gb}

---

##### `data_disk_type`<sup>Optional</sup> <a name="data_disk_type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.dataDiskType"></a>

- *Type:* str

Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#data_disk_type NotebooksInstance#data_disk_type}

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.desiredState"></a>

- *Type:* str

Desired state of the Notebook Instance.

Set this field to 'ACTIVE' to start the Instance, and 'STOPPED' to stop the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#desired_state NotebooksInstance#desired_state}

---

##### `disk_encryption`<sup>Optional</sup> <a name="disk_encryption" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.diskEncryption"></a>

- *Type:* str

Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["DISK_ENCRYPTION_UNSPECIFIED", "GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#disk_encryption NotebooksInstance#disk_encryption}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#id NotebooksInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `install_gpu_driver`<sup>Optional</sup> <a name="install_gpu_driver" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.installGpuDriver"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the end user authorizes Google Cloud to install GPU driver on this instance.

If this field is empty or set to false, the GPU driver
won't be installed. Only applicable to instances with GPUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#install_gpu_driver NotebooksInstance#install_gpu_driver}

---

##### `instance_owners`<sup>Optional</sup> <a name="instance_owners" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.instanceOwners"></a>

- *Type:* typing.List[str]

The list of owners of this instance after creation.

Format: alias@example.com.
Currently supports one owner only.
If not specified, all of the service account users of
your VM instance's service account can use the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#instance_owners NotebooksInstance#instance_owners}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.kmsKey"></a>

- *Type:* str

The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK. Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#kms_key NotebooksInstance#kms_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels to apply to this instance.

These can be later modified by the setLabels method.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#labels NotebooksInstance#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Custom metadata to apply to this instance.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#metadata NotebooksInstance#metadata}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.network"></a>

- *Type:* str

The name of the VPC that this instance is in. Format: projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#network NotebooksInstance#network}

---

##### `nic_type`<sup>Optional</sup> <a name="nic_type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.nicType"></a>

- *Type:* str

The type of vNIC driver. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#nic_type NotebooksInstance#nic_type}

---

##### `no_proxy_access`<sup>Optional</sup> <a name="no_proxy_access" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.noProxyAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The notebook instance will not register with the proxy..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#no_proxy_access NotebooksInstance#no_proxy_access}

---

##### `no_public_ip`<sup>Optional</sup> <a name="no_public_ip" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.noPublicIp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

No public IP will be assigned to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#no_public_ip NotebooksInstance#no_public_ip}

---

##### `no_remove_data_disk`<sup>Optional</sup> <a name="no_remove_data_disk" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.noRemoveDataDisk"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the data disk will not be auto deleted when deleting the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#no_remove_data_disk NotebooksInstance#no_remove_data_disk}

---

##### `post_startup_script`<sup>Optional</sup> <a name="post_startup_script" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.postStartupScript"></a>

- *Type:* str

Path to a Bash script that automatically runs after a notebook instance fully boots up.

The path must be a URL
or Cloud Storage path (gs://path-to-file/file-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#post_startup_script NotebooksInstance#post_startup_script}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#project NotebooksInstance#project}.

---

##### `reservation_affinity`<sup>Optional</sup> <a name="reservation_affinity" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.reservationAffinity"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#reservation_affinity NotebooksInstance#reservation_affinity}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.serviceAccount"></a>

- *Type:* str

The service account on this instance, giving access to other Google Cloud services.

You can use any service account within
the same project, but you must have the service account user
permission to use the instance. If not specified,
the Compute Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#service_account NotebooksInstance#service_account}

---

##### `service_account_scopes`<sup>Optional</sup> <a name="service_account_scopes" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.serviceAccountScopes"></a>

- *Type:* typing.List[str]

Optional.

The URIs of service account scopes to be included in Compute Engine instances.
If not specified, the following scopes are defined:

* https://www.googleapis.com/auth/cloud-platform
* https://www.googleapis.com/auth/userinfo.email

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#service_account_scopes NotebooksInstance#service_account_scopes}

---

##### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.shieldedInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#shielded_instance_config NotebooksInstance#shielded_instance_config}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.subnet"></a>

- *Type:* str

The name of the subnet that this instance is in. Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#subnet NotebooksInstance#subnet}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

The Compute Engine tags to add to instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#tags NotebooksInstance#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#timeouts NotebooksInstance#timeouts}

---

##### `update_time`<sup>Optional</sup> <a name="update_time" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.updateTime"></a>

- *Type:* str

Instance update time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#update_time NotebooksInstance#update_time}

---

##### `vm_image`<sup>Optional</sup> <a name="vm_image" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.vmImage"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#vm_image NotebooksInstance#vm_image}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.putAcceleratorConfig">put_accelerator_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.putContainerImage">put_container_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.putReservationAffinity">put_reservation_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.putShieldedInstanceConfig">put_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.putVmImage">put_vm_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetAcceleratorConfig">reset_accelerator_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetBootDiskSizeGb">reset_boot_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetBootDiskType">reset_boot_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetContainerImage">reset_container_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetCreateTime">reset_create_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetCustomGpuDriverPath">reset_custom_gpu_driver_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDataDiskSizeGb">reset_data_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDataDiskType">reset_data_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDesiredState">reset_desired_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDiskEncryption">reset_disk_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetInstallGpuDriver">reset_install_gpu_driver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetInstanceOwners">reset_instance_owners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNicType">reset_nic_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNoProxyAccess">reset_no_proxy_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNoPublicIp">reset_no_public_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNoRemoveDataDisk">reset_no_remove_data_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetPostStartupScript">reset_post_startup_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetReservationAffinity">reset_reservation_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetServiceAccountScopes">reset_service_account_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetShieldedInstanceConfig">reset_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetSubnet">reset_subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetUpdateTime">reset_update_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetVmImage">reset_vm_image</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_accelerator_config` <a name="put_accelerator_config" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putAcceleratorConfig"></a>

```python
def put_accelerator_config(
  core_count: typing.Union[int, float],
  type: str
) -> None
```

###### `core_count`<sup>Required</sup> <a name="core_count" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putAcceleratorConfig.parameter.coreCount"></a>

- *Type:* typing.Union[int, float]

Count of cores of this accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#core_count NotebooksInstance#core_count}

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putAcceleratorConfig.parameter.type"></a>

- *Type:* str

Type of this accelerator. Possible values: ["ACCELERATOR_TYPE_UNSPECIFIED", "NVIDIA_TESLA_K80", "NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS", "NVIDIA_TESLA_A100", "TPU_V2", "TPU_V3"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#type NotebooksInstance#type}

---

##### `put_container_image` <a name="put_container_image" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putContainerImage"></a>

```python
def put_container_image(
  repository: str,
  tag: str = None
) -> None
```

###### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putContainerImage.parameter.repository"></a>

- *Type:* str

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#repository NotebooksInstance#repository}

---

###### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putContainerImage.parameter.tag"></a>

- *Type:* str

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#tag NotebooksInstance#tag}

---

##### `put_reservation_affinity` <a name="put_reservation_affinity" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putReservationAffinity"></a>

```python
def put_reservation_affinity(
  consume_reservation_type: str,
  key: str = None,
  values: typing.List[str] = None
) -> None
```

###### `consume_reservation_type`<sup>Required</sup> <a name="consume_reservation_type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putReservationAffinity.parameter.consumeReservationType"></a>

- *Type:* str

The type of Compute Reservation. Possible values: ["NO_RESERVATION", "ANY_RESERVATION", "SPECIFIC_RESERVATION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#consume_reservation_type NotebooksInstance#consume_reservation_type}

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putReservationAffinity.parameter.key"></a>

- *Type:* str

Corresponds to the label key of reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#key NotebooksInstance#key}

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putReservationAffinity.parameter.values"></a>

- *Type:* typing.List[str]

Corresponds to the label values of reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#values NotebooksInstance#values}

---

##### `put_shielded_instance_config` <a name="put_shielded_instance_config" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putShieldedInstanceConfig"></a>

```python
def put_shielded_instance_config(
  enable_integrity_monitoring: typing.Union[bool, IResolvable] = None,
  enable_secure_boot: typing.Union[bool, IResolvable] = None,
  enable_vtpm: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putShieldedInstanceConfig.parameter.enableIntegrityMonitoring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has integrity monitoring enabled.

Enables monitoring and attestation of the
boot integrity of the instance. The attestation is performed against the integrity policy baseline.
This baseline is initially derived from the implicitly trusted boot image when the instance is created.
Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#enable_integrity_monitoring NotebooksInstance#enable_integrity_monitoring}

---

###### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putShieldedInstanceConfig.parameter.enableSecureBoot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has Secure Boot enabled.

Secure Boot helps ensure that the system only runs
authentic software by verifying the digital signature of all boot components, and halting the boot process
if signature verification fails.
Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#enable_secure_boot NotebooksInstance#enable_secure_boot}

---

###### `enable_vtpm`<sup>Optional</sup> <a name="enable_vtpm" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putShieldedInstanceConfig.parameter.enableVtpm"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#enable_vtpm NotebooksInstance#enable_vtpm}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#create NotebooksInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#delete NotebooksInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#update NotebooksInstance#update}.

---

##### `put_vm_image` <a name="put_vm_image" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putVmImage"></a>

```python
def put_vm_image(
  project: str,
  image_family: str = None,
  image_name: str = None
) -> None
```

###### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putVmImage.parameter.project"></a>

- *Type:* str

The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#project NotebooksInstance#project}

---

###### `image_family`<sup>Optional</sup> <a name="image_family" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putVmImage.parameter.imageFamily"></a>

- *Type:* str

Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#image_family NotebooksInstance#image_family}

---

###### `image_name`<sup>Optional</sup> <a name="image_name" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putVmImage.parameter.imageName"></a>

- *Type:* str

Use VM image name to find the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#image_name NotebooksInstance#image_name}

---

##### `reset_accelerator_config` <a name="reset_accelerator_config" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetAcceleratorConfig"></a>

```python
def reset_accelerator_config() -> None
```

##### `reset_boot_disk_size_gb` <a name="reset_boot_disk_size_gb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetBootDiskSizeGb"></a>

```python
def reset_boot_disk_size_gb() -> None
```

##### `reset_boot_disk_type` <a name="reset_boot_disk_type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetBootDiskType"></a>

```python
def reset_boot_disk_type() -> None
```

##### `reset_container_image` <a name="reset_container_image" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetContainerImage"></a>

```python
def reset_container_image() -> None
```

##### `reset_create_time` <a name="reset_create_time" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetCreateTime"></a>

```python
def reset_create_time() -> None
```

##### `reset_custom_gpu_driver_path` <a name="reset_custom_gpu_driver_path" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetCustomGpuDriverPath"></a>

```python
def reset_custom_gpu_driver_path() -> None
```

##### `reset_data_disk_size_gb` <a name="reset_data_disk_size_gb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDataDiskSizeGb"></a>

```python
def reset_data_disk_size_gb() -> None
```

##### `reset_data_disk_type` <a name="reset_data_disk_type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDataDiskType"></a>

```python
def reset_data_disk_type() -> None
```

##### `reset_desired_state` <a name="reset_desired_state" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDesiredState"></a>

```python
def reset_desired_state() -> None
```

##### `reset_disk_encryption` <a name="reset_disk_encryption" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDiskEncryption"></a>

```python
def reset_disk_encryption() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_install_gpu_driver` <a name="reset_install_gpu_driver" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetInstallGpuDriver"></a>

```python
def reset_install_gpu_driver() -> None
```

##### `reset_instance_owners` <a name="reset_instance_owners" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetInstanceOwners"></a>

```python
def reset_instance_owners() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_nic_type` <a name="reset_nic_type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNicType"></a>

```python
def reset_nic_type() -> None
```

##### `reset_no_proxy_access` <a name="reset_no_proxy_access" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNoProxyAccess"></a>

```python
def reset_no_proxy_access() -> None
```

##### `reset_no_public_ip` <a name="reset_no_public_ip" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNoPublicIp"></a>

```python
def reset_no_public_ip() -> None
```

##### `reset_no_remove_data_disk` <a name="reset_no_remove_data_disk" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNoRemoveDataDisk"></a>

```python
def reset_no_remove_data_disk() -> None
```

##### `reset_post_startup_script` <a name="reset_post_startup_script" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetPostStartupScript"></a>

```python
def reset_post_startup_script() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_reservation_affinity` <a name="reset_reservation_affinity" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetReservationAffinity"></a>

```python
def reset_reservation_affinity() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_service_account_scopes` <a name="reset_service_account_scopes" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetServiceAccountScopes"></a>

```python
def reset_service_account_scopes() -> None
```

##### `reset_shielded_instance_config` <a name="reset_shielded_instance_config" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetShieldedInstanceConfig"></a>

```python
def reset_shielded_instance_config() -> None
```

##### `reset_subnet` <a name="reset_subnet" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetSubnet"></a>

```python
def reset_subnet() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_update_time` <a name="reset_update_time" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetUpdateTime"></a>

```python
def reset_update_time() -> None
```

##### `reset_vm_image` <a name="reset_vm_image" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetVmImage"></a>

```python
def reset_vm_image() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NotebooksInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import notebooks_instance

notebooksInstance.NotebooksInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import notebooks_instance

notebooksInstance.NotebooksInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import notebooks_instance

notebooksInstance.NotebooksInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import notebooks_instance

notebooksInstance.NotebooksInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NotebooksInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NotebooksInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NotebooksInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NotebooksInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.acceleratorConfig">accelerator_config</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference">NotebooksInstanceAcceleratorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.containerImage">container_image</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference">NotebooksInstanceContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.proxyUri">proxy_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.reservationAffinity">reservation_affinity</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference">NotebooksInstanceReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference">NotebooksInstanceShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference">NotebooksInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.vmImage">vm_image</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference">NotebooksInstanceVmImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.acceleratorConfigInput">accelerator_config_input</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskSizeGbInput">boot_disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskTypeInput">boot_disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.containerImageInput">container_image_input</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.createTimeInput">create_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.customGpuDriverPathInput">custom_gpu_driver_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskSizeGbInput">data_disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskTypeInput">data_disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.desiredStateInput">desired_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.diskEncryptionInput">disk_encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.installGpuDriverInput">install_gpu_driver_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.instanceOwnersInput">instance_owners_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.nicTypeInput">nic_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noProxyAccessInput">no_proxy_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noPublicIpInput">no_public_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noRemoveDataDiskInput">no_remove_data_disk_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.postStartupScriptInput">post_startup_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.reservationAffinityInput">reservation_affinity_input</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccountScopesInput">service_account_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.shieldedInstanceConfigInput">shielded_instance_config_input</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.subnetInput">subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.updateTimeInput">update_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.vmImageInput">vm_image_input</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskSizeGb">boot_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskType">boot_disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.customGpuDriverPath">custom_gpu_driver_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskSizeGb">data_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskType">data_disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.desiredState">desired_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.diskEncryption">disk_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.installGpuDriver">install_gpu_driver</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.instanceOwners">instance_owners</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.nicType">nic_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noProxyAccess">no_proxy_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noPublicIp">no_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noRemoveDataDisk">no_remove_data_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.postStartupScript">post_startup_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccountScopes">service_account_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.subnet">subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accelerator_config`<sup>Required</sup> <a name="accelerator_config" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.acceleratorConfig"></a>

```python
accelerator_config: NotebooksInstanceAcceleratorConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference">NotebooksInstanceAcceleratorConfigOutputReference</a>

---

##### `container_image`<sup>Required</sup> <a name="container_image" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.containerImage"></a>

```python
container_image: NotebooksInstanceContainerImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference">NotebooksInstanceContainerImageOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `proxy_uri`<sup>Required</sup> <a name="proxy_uri" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.proxyUri"></a>

```python
proxy_uri: str
```

- *Type:* str

---

##### `reservation_affinity`<sup>Required</sup> <a name="reservation_affinity" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.reservationAffinity"></a>

```python
reservation_affinity: NotebooksInstanceReservationAffinityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference">NotebooksInstanceReservationAffinityOutputReference</a>

---

##### `shielded_instance_config`<sup>Required</sup> <a name="shielded_instance_config" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: NotebooksInstanceShieldedInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference">NotebooksInstanceShieldedInstanceConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.timeouts"></a>

```python
timeouts: NotebooksInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference">NotebooksInstanceTimeoutsOutputReference</a>

---

##### `vm_image`<sup>Required</sup> <a name="vm_image" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.vmImage"></a>

```python
vm_image: NotebooksInstanceVmImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference">NotebooksInstanceVmImageOutputReference</a>

---

##### `accelerator_config_input`<sup>Optional</sup> <a name="accelerator_config_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.acceleratorConfigInput"></a>

```python
accelerator_config_input: NotebooksInstanceAcceleratorConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a>

---

##### `boot_disk_size_gb_input`<sup>Optional</sup> <a name="boot_disk_size_gb_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskSizeGbInput"></a>

```python
boot_disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `boot_disk_type_input`<sup>Optional</sup> <a name="boot_disk_type_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskTypeInput"></a>

```python
boot_disk_type_input: str
```

- *Type:* str

---

##### `container_image_input`<sup>Optional</sup> <a name="container_image_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.containerImageInput"></a>

```python
container_image_input: NotebooksInstanceContainerImage
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a>

---

##### `create_time_input`<sup>Optional</sup> <a name="create_time_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.createTimeInput"></a>

```python
create_time_input: str
```

- *Type:* str

---

##### `custom_gpu_driver_path_input`<sup>Optional</sup> <a name="custom_gpu_driver_path_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.customGpuDriverPathInput"></a>

```python
custom_gpu_driver_path_input: str
```

- *Type:* str

---

##### `data_disk_size_gb_input`<sup>Optional</sup> <a name="data_disk_size_gb_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskSizeGbInput"></a>

```python
data_disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_disk_type_input`<sup>Optional</sup> <a name="data_disk_type_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskTypeInput"></a>

```python
data_disk_type_input: str
```

- *Type:* str

---

##### `desired_state_input`<sup>Optional</sup> <a name="desired_state_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.desiredStateInput"></a>

```python
desired_state_input: str
```

- *Type:* str

---

##### `disk_encryption_input`<sup>Optional</sup> <a name="disk_encryption_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.diskEncryptionInput"></a>

```python
disk_encryption_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `install_gpu_driver_input`<sup>Optional</sup> <a name="install_gpu_driver_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.installGpuDriverInput"></a>

```python
install_gpu_driver_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `instance_owners_input`<sup>Optional</sup> <a name="instance_owners_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.instanceOwnersInput"></a>

```python
instance_owners_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `nic_type_input`<sup>Optional</sup> <a name="nic_type_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.nicTypeInput"></a>

```python
nic_type_input: str
```

- *Type:* str

---

##### `no_proxy_access_input`<sup>Optional</sup> <a name="no_proxy_access_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noProxyAccessInput"></a>

```python
no_proxy_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `no_public_ip_input`<sup>Optional</sup> <a name="no_public_ip_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noPublicIpInput"></a>

```python
no_public_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `no_remove_data_disk_input`<sup>Optional</sup> <a name="no_remove_data_disk_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noRemoveDataDiskInput"></a>

```python
no_remove_data_disk_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `post_startup_script_input`<sup>Optional</sup> <a name="post_startup_script_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.postStartupScriptInput"></a>

```python
post_startup_script_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `reservation_affinity_input`<sup>Optional</sup> <a name="reservation_affinity_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.reservationAffinityInput"></a>

```python
reservation_affinity_input: NotebooksInstanceReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a>

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `service_account_scopes_input`<sup>Optional</sup> <a name="service_account_scopes_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccountScopesInput"></a>

```python
service_account_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shielded_instance_config_input`<sup>Optional</sup> <a name="shielded_instance_config_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.shieldedInstanceConfigInput"></a>

```python
shielded_instance_config_input: NotebooksInstanceShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a>

---

##### `subnet_input`<sup>Optional</sup> <a name="subnet_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.subnetInput"></a>

```python
subnet_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NotebooksInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a>]

---

##### `update_time_input`<sup>Optional</sup> <a name="update_time_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.updateTimeInput"></a>

```python
update_time_input: str
```

- *Type:* str

---

##### `vm_image_input`<sup>Optional</sup> <a name="vm_image_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.vmImageInput"></a>

```python
vm_image_input: NotebooksInstanceVmImage
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a>

---

##### `boot_disk_size_gb`<sup>Required</sup> <a name="boot_disk_size_gb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskSizeGb"></a>

```python
boot_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `boot_disk_type`<sup>Required</sup> <a name="boot_disk_type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskType"></a>

```python
boot_disk_type: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `custom_gpu_driver_path`<sup>Required</sup> <a name="custom_gpu_driver_path" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.customGpuDriverPath"></a>

```python
custom_gpu_driver_path: str
```

- *Type:* str

---

##### `data_disk_size_gb`<sup>Required</sup> <a name="data_disk_size_gb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskSizeGb"></a>

```python
data_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_disk_type`<sup>Required</sup> <a name="data_disk_type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskType"></a>

```python
data_disk_type: str
```

- *Type:* str

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

---

##### `disk_encryption`<sup>Required</sup> <a name="disk_encryption" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.diskEncryption"></a>

```python
disk_encryption: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `install_gpu_driver`<sup>Required</sup> <a name="install_gpu_driver" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.installGpuDriver"></a>

```python
install_gpu_driver: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `instance_owners`<sup>Required</sup> <a name="instance_owners" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.instanceOwners"></a>

```python
instance_owners: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `nic_type`<sup>Required</sup> <a name="nic_type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.nicType"></a>

```python
nic_type: str
```

- *Type:* str

---

##### `no_proxy_access`<sup>Required</sup> <a name="no_proxy_access" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noProxyAccess"></a>

```python
no_proxy_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `no_public_ip`<sup>Required</sup> <a name="no_public_ip" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noPublicIp"></a>

```python
no_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `no_remove_data_disk`<sup>Required</sup> <a name="no_remove_data_disk" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noRemoveDataDisk"></a>

```python
no_remove_data_disk: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `post_startup_script`<sup>Required</sup> <a name="post_startup_script" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.postStartupScript"></a>

```python
post_startup_script: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `service_account_scopes`<sup>Required</sup> <a name="service_account_scopes" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccountScopes"></a>

```python
service_account_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.subnet"></a>

```python
subnet: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NotebooksInstanceAcceleratorConfig <a name="NotebooksInstanceAcceleratorConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_instance

notebooksInstance.NotebooksInstanceAcceleratorConfig(
  core_count: typing.Union[int, float],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig.property.coreCount">core_count</a></code> | <code>typing.Union[int, float]</code> | Count of cores of this accelerator. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig.property.type">type</a></code> | <code>str</code> | Type of this accelerator. Possible values: ["ACCELERATOR_TYPE_UNSPECIFIED", "NVIDIA_TESLA_K80", "NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS", "NVIDIA_TESLA_A100", "TPU_V2", "TPU_V3"]. |

---

##### `core_count`<sup>Required</sup> <a name="core_count" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig.property.coreCount"></a>

```python
core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Count of cores of this accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#core_count NotebooksInstance#core_count}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Type of this accelerator. Possible values: ["ACCELERATOR_TYPE_UNSPECIFIED", "NVIDIA_TESLA_K80", "NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS", "NVIDIA_TESLA_A100", "TPU_V2", "TPU_V3"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#type NotebooksInstance#type}

---

### NotebooksInstanceConfig <a name="NotebooksInstanceConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_instance

notebooksInstance.NotebooksInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  machine_type: str,
  name: str,
  accelerator_config: NotebooksInstanceAcceleratorConfig = None,
  boot_disk_size_gb: typing.Union[int, float] = None,
  boot_disk_type: str = None,
  container_image: NotebooksInstanceContainerImage = None,
  create_time: str = None,
  custom_gpu_driver_path: str = None,
  data_disk_size_gb: typing.Union[int, float] = None,
  data_disk_type: str = None,
  desired_state: str = None,
  disk_encryption: str = None,
  id: str = None,
  install_gpu_driver: typing.Union[bool, IResolvable] = None,
  instance_owners: typing.List[str] = None,
  kms_key: str = None,
  labels: typing.Mapping[str] = None,
  metadata: typing.Mapping[str] = None,
  network: str = None,
  nic_type: str = None,
  no_proxy_access: typing.Union[bool, IResolvable] = None,
  no_public_ip: typing.Union[bool, IResolvable] = None,
  no_remove_data_disk: typing.Union[bool, IResolvable] = None,
  post_startup_script: str = None,
  project: str = None,
  reservation_affinity: NotebooksInstanceReservationAffinity = None,
  service_account: str = None,
  service_account_scopes: typing.List[str] = None,
  shielded_instance_config: NotebooksInstanceShieldedInstanceConfig = None,
  subnet: str = None,
  tags: typing.List[str] = None,
  timeouts: NotebooksInstanceTimeouts = None,
  update_time: str = None,
  vm_image: NotebooksInstanceVmImage = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.location">location</a></code> | <code>str</code> | A reference to the zone where the machine resides. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.machineType">machine_type</a></code> | <code>str</code> | A reference to a machine type which defines VM kind. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.name">name</a></code> | <code>str</code> | The name specified for the Notebook instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.acceleratorConfig">accelerator_config</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a></code> | accelerator_config block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.bootDiskSizeGb">boot_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.bootDiskType">boot_disk_type</a></code> | <code>str</code> | Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.containerImage">container_image</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.createTime">create_time</a></code> | <code>str</code> | Instance creation time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.customGpuDriverPath">custom_gpu_driver_path</a></code> | <code>str</code> | Specify a custom Cloud Storage path where the GPU driver is stored. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.dataDiskSizeGb">data_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.dataDiskType">data_disk_type</a></code> | <code>str</code> | Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.desiredState">desired_state</a></code> | <code>str</code> | Desired state of the Notebook Instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.diskEncryption">disk_encryption</a></code> | <code>str</code> | Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["DISK_ENCRYPTION_UNSPECIFIED", "GMEK", "CMEK"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#id NotebooksInstance#id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.installGpuDriver">install_gpu_driver</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the end user authorizes Google Cloud to install GPU driver on this instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.instanceOwners">instance_owners</a></code> | <code>typing.List[str]</code> | The list of owners of this instance after creation. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.kmsKey">kms_key</a></code> | <code>str</code> | The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK. Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Custom metadata to apply to this instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.network">network</a></code> | <code>str</code> | The name of the VPC that this instance is in. Format: projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.nicType">nic_type</a></code> | <code>str</code> | The type of vNIC driver. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.noProxyAccess">no_proxy_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The notebook instance will not register with the proxy.. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.noPublicIp">no_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | No public IP will be assigned to this instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.noRemoveDataDisk">no_remove_data_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the data disk will not be auto deleted when deleting the instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.postStartupScript">post_startup_script</a></code> | <code>str</code> | Path to a Bash script that automatically runs after a notebook instance fully boots up. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#project NotebooksInstance#project}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.reservationAffinity">reservation_affinity</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | The service account on this instance, giving access to other Google Cloud services. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.serviceAccountScopes">service_account_scopes</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.subnet">subnet</a></code> | <code>str</code> | The name of the subnet that this instance is in. Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | The Compute Engine tags to add to instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.updateTime">update_time</a></code> | <code>str</code> | Instance update time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.vmImage">vm_image</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a></code> | vm_image block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

A reference to the zone where the machine resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#location NotebooksInstance#location}

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

A reference to a machine type which defines VM kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#machine_type NotebooksInstance#machine_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name specified for the Notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#name NotebooksInstance#name}

---

##### `accelerator_config`<sup>Optional</sup> <a name="accelerator_config" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.acceleratorConfig"></a>

```python
accelerator_config: NotebooksInstanceAcceleratorConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a>

accelerator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#accelerator_config NotebooksInstance#accelerator_config}

---

##### `boot_disk_size_gb`<sup>Optional</sup> <a name="boot_disk_size_gb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.bootDiskSizeGb"></a>

```python
boot_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB).

The minimum recommended value is 100 GB.
If not specified, this defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#boot_disk_size_gb NotebooksInstance#boot_disk_size_gb}

---

##### `boot_disk_type`<sup>Optional</sup> <a name="boot_disk_type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.bootDiskType"></a>

```python
boot_disk_type: str
```

- *Type:* str

Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#boot_disk_type NotebooksInstance#boot_disk_type}

---

##### `container_image`<sup>Optional</sup> <a name="container_image" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.containerImage"></a>

```python
container_image: NotebooksInstanceContainerImage
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#container_image NotebooksInstance#container_image}

---

##### `create_time`<sup>Optional</sup> <a name="create_time" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

Instance creation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#create_time NotebooksInstance#create_time}

---

##### `custom_gpu_driver_path`<sup>Optional</sup> <a name="custom_gpu_driver_path" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.customGpuDriverPath"></a>

```python
custom_gpu_driver_path: str
```

- *Type:* str

Specify a custom Cloud Storage path where the GPU driver is stored.

If not specified, we'll automatically choose from official GPU drivers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#custom_gpu_driver_path NotebooksInstance#custom_gpu_driver_path}

---

##### `data_disk_size_gb`<sup>Optional</sup> <a name="data_disk_size_gb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.dataDiskSizeGb"></a>

```python
data_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB).

You can choose the size of the data disk based on how big your notebooks and data are.
If not specified, this defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#data_disk_size_gb NotebooksInstance#data_disk_size_gb}

---

##### `data_disk_type`<sup>Optional</sup> <a name="data_disk_type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.dataDiskType"></a>

```python
data_disk_type: str
```

- *Type:* str

Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#data_disk_type NotebooksInstance#data_disk_type}

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

Desired state of the Notebook Instance.

Set this field to 'ACTIVE' to start the Instance, and 'STOPPED' to stop the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#desired_state NotebooksInstance#desired_state}

---

##### `disk_encryption`<sup>Optional</sup> <a name="disk_encryption" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.diskEncryption"></a>

```python
disk_encryption: str
```

- *Type:* str

Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["DISK_ENCRYPTION_UNSPECIFIED", "GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#disk_encryption NotebooksInstance#disk_encryption}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#id NotebooksInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `install_gpu_driver`<sup>Optional</sup> <a name="install_gpu_driver" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.installGpuDriver"></a>

```python
install_gpu_driver: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the end user authorizes Google Cloud to install GPU driver on this instance.

If this field is empty or set to false, the GPU driver
won't be installed. Only applicable to instances with GPUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#install_gpu_driver NotebooksInstance#install_gpu_driver}

---

##### `instance_owners`<sup>Optional</sup> <a name="instance_owners" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.instanceOwners"></a>

```python
instance_owners: typing.List[str]
```

- *Type:* typing.List[str]

The list of owners of this instance after creation.

Format: alias@example.com.
Currently supports one owner only.
If not specified, all of the service account users of
your VM instance's service account can use the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#instance_owners NotebooksInstance#instance_owners}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK. Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#kms_key NotebooksInstance#kms_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels to apply to this instance.

These can be later modified by the setLabels method.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#labels NotebooksInstance#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Custom metadata to apply to this instance.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#metadata NotebooksInstance#metadata}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The name of the VPC that this instance is in. Format: projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#network NotebooksInstance#network}

---

##### `nic_type`<sup>Optional</sup> <a name="nic_type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.nicType"></a>

```python
nic_type: str
```

- *Type:* str

The type of vNIC driver. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#nic_type NotebooksInstance#nic_type}

---

##### `no_proxy_access`<sup>Optional</sup> <a name="no_proxy_access" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.noProxyAccess"></a>

```python
no_proxy_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The notebook instance will not register with the proxy..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#no_proxy_access NotebooksInstance#no_proxy_access}

---

##### `no_public_ip`<sup>Optional</sup> <a name="no_public_ip" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.noPublicIp"></a>

```python
no_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

No public IP will be assigned to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#no_public_ip NotebooksInstance#no_public_ip}

---

##### `no_remove_data_disk`<sup>Optional</sup> <a name="no_remove_data_disk" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.noRemoveDataDisk"></a>

```python
no_remove_data_disk: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the data disk will not be auto deleted when deleting the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#no_remove_data_disk NotebooksInstance#no_remove_data_disk}

---

##### `post_startup_script`<sup>Optional</sup> <a name="post_startup_script" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.postStartupScript"></a>

```python
post_startup_script: str
```

- *Type:* str

Path to a Bash script that automatically runs after a notebook instance fully boots up.

The path must be a URL
or Cloud Storage path (gs://path-to-file/file-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#post_startup_script NotebooksInstance#post_startup_script}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#project NotebooksInstance#project}.

---

##### `reservation_affinity`<sup>Optional</sup> <a name="reservation_affinity" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.reservationAffinity"></a>

```python
reservation_affinity: NotebooksInstanceReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#reservation_affinity NotebooksInstance#reservation_affinity}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

The service account on this instance, giving access to other Google Cloud services.

You can use any service account within
the same project, but you must have the service account user
permission to use the instance. If not specified,
the Compute Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#service_account NotebooksInstance#service_account}

---

##### `service_account_scopes`<sup>Optional</sup> <a name="service_account_scopes" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.serviceAccountScopes"></a>

```python
service_account_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

The URIs of service account scopes to be included in Compute Engine instances.
If not specified, the following scopes are defined:

* https://www.googleapis.com/auth/cloud-platform
* https://www.googleapis.com/auth/userinfo.email

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#service_account_scopes NotebooksInstance#service_account_scopes}

---

##### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: NotebooksInstanceShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#shielded_instance_config NotebooksInstance#shielded_instance_config}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.subnet"></a>

```python
subnet: str
```

- *Type:* str

The name of the subnet that this instance is in. Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#subnet NotebooksInstance#subnet}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

The Compute Engine tags to add to instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#tags NotebooksInstance#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.timeouts"></a>

```python
timeouts: NotebooksInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#timeouts NotebooksInstance#timeouts}

---

##### `update_time`<sup>Optional</sup> <a name="update_time" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

Instance update time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#update_time NotebooksInstance#update_time}

---

##### `vm_image`<sup>Optional</sup> <a name="vm_image" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.vmImage"></a>

```python
vm_image: NotebooksInstanceVmImage
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#vm_image NotebooksInstance#vm_image}

---

### NotebooksInstanceContainerImage <a name="NotebooksInstanceContainerImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_instance

notebooksInstance.NotebooksInstanceContainerImage(
  repository: str,
  tag: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage.property.repository">repository</a></code> | <code>str</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage.property.tag">tag</a></code> | <code>str</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage.property.repository"></a>

```python
repository: str
```

- *Type:* str

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#repository NotebooksInstance#repository}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage.property.tag"></a>

```python
tag: str
```

- *Type:* str

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#tag NotebooksInstance#tag}

---

### NotebooksInstanceReservationAffinity <a name="NotebooksInstanceReservationAffinity" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_instance

notebooksInstance.NotebooksInstanceReservationAffinity(
  consume_reservation_type: str,
  key: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.property.consumeReservationType">consume_reservation_type</a></code> | <code>str</code> | The type of Compute Reservation. Possible values: ["NO_RESERVATION", "ANY_RESERVATION", "SPECIFIC_RESERVATION"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.property.key">key</a></code> | <code>str</code> | Corresponds to the label key of reservation resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.property.values">values</a></code> | <code>typing.List[str]</code> | Corresponds to the label values of reservation resource. |

---

##### `consume_reservation_type`<sup>Required</sup> <a name="consume_reservation_type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.property.consumeReservationType"></a>

```python
consume_reservation_type: str
```

- *Type:* str

The type of Compute Reservation. Possible values: ["NO_RESERVATION", "ANY_RESERVATION", "SPECIFIC_RESERVATION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#consume_reservation_type NotebooksInstance#consume_reservation_type}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.property.key"></a>

```python
key: str
```

- *Type:* str

Corresponds to the label key of reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#key NotebooksInstance#key}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Corresponds to the label values of reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#values NotebooksInstance#values}

---

### NotebooksInstanceShieldedInstanceConfig <a name="NotebooksInstanceShieldedInstanceConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_instance

notebooksInstance.NotebooksInstanceShieldedInstanceConfig(
  enable_integrity_monitoring: typing.Union[bool, IResolvable] = None,
  enable_secure_boot: typing.Union[bool, IResolvable] = None,
  enable_vtpm: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines whether the instance has integrity monitoring enabled. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines whether the instance has Secure Boot enabled. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.property.enableVtpm">enable_vtpm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines whether the instance has the vTPM enabled. Enabled by default. |

---

##### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has integrity monitoring enabled.

Enables monitoring and attestation of the
boot integrity of the instance. The attestation is performed against the integrity policy baseline.
This baseline is initially derived from the implicitly trusted boot image when the instance is created.
Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#enable_integrity_monitoring NotebooksInstance#enable_integrity_monitoring}

---

##### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has Secure Boot enabled.

Secure Boot helps ensure that the system only runs
authentic software by verifying the digital signature of all boot components, and halting the boot process
if signature verification fails.
Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#enable_secure_boot NotebooksInstance#enable_secure_boot}

---

##### `enable_vtpm`<sup>Optional</sup> <a name="enable_vtpm" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.property.enableVtpm"></a>

```python
enable_vtpm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#enable_vtpm NotebooksInstance#enable_vtpm}

---

### NotebooksInstanceTimeouts <a name="NotebooksInstanceTimeouts" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_instance

notebooksInstance.NotebooksInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#create NotebooksInstance#create}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#delete NotebooksInstance#delete}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#update NotebooksInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#create NotebooksInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#delete NotebooksInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#update NotebooksInstance#update}.

---

### NotebooksInstanceVmImage <a name="NotebooksInstanceVmImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_instance

notebooksInstance.NotebooksInstanceVmImage(
  project: str,
  image_family: str = None,
  image_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.property.project">project</a></code> | <code>str</code> | The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.property.imageFamily">image_family</a></code> | <code>str</code> | Use this VM image family to find the image; the newest image in this family will be used. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.property.imageName">image_name</a></code> | <code>str</code> | Use VM image name to find the image. |

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.property.project"></a>

```python
project: str
```

- *Type:* str

The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#project NotebooksInstance#project}

---

##### `image_family`<sup>Optional</sup> <a name="image_family" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.property.imageFamily"></a>

```python
image_family: str
```

- *Type:* str

Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#image_family NotebooksInstance#image_family}

---

##### `image_name`<sup>Optional</sup> <a name="image_name" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

Use VM image name to find the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/notebooks_instance#image_name NotebooksInstance#image_name}

---

## Classes <a name="Classes" id="Classes"></a>

### NotebooksInstanceAcceleratorConfigOutputReference <a name="NotebooksInstanceAcceleratorConfigOutputReference" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_instance

notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.coreCountInput">core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.coreCount">core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `core_count_input`<sup>Optional</sup> <a name="core_count_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.coreCountInput"></a>

```python
core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `core_count`<sup>Required</sup> <a name="core_count" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.coreCount"></a>

```python
core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.internalValue"></a>

```python
internal_value: NotebooksInstanceAcceleratorConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a>

---


### NotebooksInstanceContainerImageOutputReference <a name="NotebooksInstanceContainerImageOutputReference" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_instance

notebooksInstance.NotebooksInstanceContainerImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.resetTag">reset_tag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.internalValue"></a>

```python
internal_value: NotebooksInstanceContainerImage
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a>

---


### NotebooksInstanceReservationAffinityOutputReference <a name="NotebooksInstanceReservationAffinityOutputReference" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_instance

notebooksInstance.NotebooksInstanceReservationAffinityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.consumeReservationTypeInput">consume_reservation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.consumeReservationType">consume_reservation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consume_reservation_type_input`<sup>Optional</sup> <a name="consume_reservation_type_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.consumeReservationTypeInput"></a>

```python
consume_reservation_type_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `consume_reservation_type`<sup>Required</sup> <a name="consume_reservation_type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.consumeReservationType"></a>

```python
consume_reservation_type: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.internalValue"></a>

```python
internal_value: NotebooksInstanceReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a>

---


### NotebooksInstanceShieldedInstanceConfigOutputReference <a name="NotebooksInstanceShieldedInstanceConfigOutputReference" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_instance

notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">reset_enable_integrity_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot">reset_enable_secure_boot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm">reset_enable_vtpm</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_integrity_monitoring` <a name="reset_enable_integrity_monitoring" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```python
def reset_enable_integrity_monitoring() -> None
```

##### `reset_enable_secure_boot` <a name="reset_enable_secure_boot" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```python
def reset_enable_secure_boot() -> None
```

##### `reset_enable_vtpm` <a name="reset_enable_vtpm" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```python
def reset_enable_vtpm() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enable_integrity_monitoring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enable_secure_boot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput">enable_vtpm_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpm">enable_vtpm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_integrity_monitoring_input`<sup>Optional</sup> <a name="enable_integrity_monitoring_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```python
enable_integrity_monitoring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot_input`<sup>Optional</sup> <a name="enable_secure_boot_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```python
enable_secure_boot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_vtpm_input`<sup>Optional</sup> <a name="enable_vtpm_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```python
enable_vtpm_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_integrity_monitoring`<sup>Required</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot`<sup>Required</sup> <a name="enable_secure_boot" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_vtpm`<sup>Required</sup> <a name="enable_vtpm" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```python
enable_vtpm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: NotebooksInstanceShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a>

---


### NotebooksInstanceTimeoutsOutputReference <a name="NotebooksInstanceTimeoutsOutputReference" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_instance

notebooksInstance.NotebooksInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NotebooksInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a>]

---


### NotebooksInstanceVmImageOutputReference <a name="NotebooksInstanceVmImageOutputReference" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_instance

notebooksInstance.NotebooksInstanceVmImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resetImageFamily">reset_image_family</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resetImageName">reset_image_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_image_family` <a name="reset_image_family" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resetImageFamily"></a>

```python
def reset_image_family() -> None
```

##### `reset_image_name` <a name="reset_image_name" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resetImageName"></a>

```python
def reset_image_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageFamilyInput">image_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageNameInput">image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageFamily">image_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_family_input`<sup>Optional</sup> <a name="image_family_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageFamilyInput"></a>

```python
image_family_input: str
```

- *Type:* str

---

##### `image_name_input`<sup>Optional</sup> <a name="image_name_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageNameInput"></a>

```python
image_name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `image_family`<sup>Required</sup> <a name="image_family" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageFamily"></a>

```python
image_family: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.internalValue"></a>

```python
internal_value: NotebooksInstanceVmImage
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a>

---



