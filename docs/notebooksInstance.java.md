# `notebooksInstance` Submodule <a name="`notebooksInstance` Submodule" id="@cdktf/provider-google.notebooksInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotebooksInstance <a name="NotebooksInstance" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance google_notebooks_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance.NotebooksInstance;

NotebooksInstance.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .machineType(java.lang.String)
    .name(java.lang.String)
//  .acceleratorConfig(NotebooksInstanceAcceleratorConfig)
//  .bootDiskSizeGb(java.lang.Number)
//  .bootDiskType(java.lang.String)
//  .containerImage(NotebooksInstanceContainerImage)
//  .createTime(java.lang.String)
//  .customGpuDriverPath(java.lang.String)
//  .dataDiskSizeGb(java.lang.Number)
//  .dataDiskType(java.lang.String)
//  .desiredState(java.lang.String)
//  .diskEncryption(java.lang.String)
//  .id(java.lang.String)
//  .installGpuDriver(java.lang.Boolean)
//  .installGpuDriver(IResolvable)
//  .instanceOwners(java.util.List<java.lang.String>)
//  .kmsKey(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .network(java.lang.String)
//  .nicType(java.lang.String)
//  .noProxyAccess(java.lang.Boolean)
//  .noProxyAccess(IResolvable)
//  .noPublicIp(java.lang.Boolean)
//  .noPublicIp(IResolvable)
//  .noRemoveDataDisk(java.lang.Boolean)
//  .noRemoveDataDisk(IResolvable)
//  .postStartupScript(java.lang.String)
//  .project(java.lang.String)
//  .reservationAffinity(NotebooksInstanceReservationAffinity)
//  .serviceAccount(java.lang.String)
//  .serviceAccountScopes(java.util.List<java.lang.String>)
//  .shieldedInstanceConfig(NotebooksInstanceShieldedInstanceConfig)
//  .subnet(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(NotebooksInstanceTimeouts)
//  .updateTime(java.lang.String)
//  .vmImage(NotebooksInstanceVmImage)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | A reference to the zone where the machine resides. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.machineType">machineType</a></code> | <code>java.lang.String</code> | A reference to a machine type which defines VM kind. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name specified for the Notebook instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.acceleratorConfig">acceleratorConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a></code> | accelerator_config block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>java.lang.Number</code> | The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.bootDiskType">bootDiskType</a></code> | <code>java.lang.String</code> | Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.containerImage">containerImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.createTime">createTime</a></code> | <code>java.lang.String</code> | Instance creation time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.customGpuDriverPath">customGpuDriverPath</a></code> | <code>java.lang.String</code> | Specify a custom Cloud Storage path where the GPU driver is stored. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.dataDiskSizeGb">dataDiskSizeGb</a></code> | <code>java.lang.Number</code> | The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.dataDiskType">dataDiskType</a></code> | <code>java.lang.String</code> | Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.desiredState">desiredState</a></code> | <code>java.lang.String</code> | Desired state of the Notebook Instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.diskEncryption">diskEncryption</a></code> | <code>java.lang.String</code> | Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["DISK_ENCRYPTION_UNSPECIFIED", "GMEK", "CMEK"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#id NotebooksInstance#id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.installGpuDriver">installGpuDriver</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the end user authorizes Google Cloud to install GPU driver on this instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.instanceOwners">instanceOwners</a></code> | <code>java.util.List<java.lang.String></code> | The list of owners of this instance after creation. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK. Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to apply to this instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Custom metadata to apply to this instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The name of the VPC that this instance is in. Format: projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.nicType">nicType</a></code> | <code>java.lang.String</code> | The type of vNIC driver. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.noProxyAccess">noProxyAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The notebook instance will not register with the proxy.. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.noPublicIp">noPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | No public IP will be assigned to this instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.noRemoveDataDisk">noRemoveDataDisk</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the data disk will not be auto deleted when deleting the instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.postStartupScript">postStartupScript</a></code> | <code>java.lang.String</code> | Path to a Bash script that automatically runs after a notebook instance fully boots up. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#project NotebooksInstance#project}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | The service account on this instance, giving access to other Google Cloud services. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.serviceAccountScopes">serviceAccountScopes</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.subnet">subnet</a></code> | <code>java.lang.String</code> | The name of the subnet that this instance is in. Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | The Compute Engine tags to add to instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.updateTime">updateTime</a></code> | <code>java.lang.String</code> | Instance update time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.vmImage">vmImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a></code> | vm_image block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.location"></a>

- *Type:* java.lang.String

A reference to the zone where the machine resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#location NotebooksInstance#location}

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.machineType"></a>

- *Type:* java.lang.String

A reference to a machine type which defines VM kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#machine_type NotebooksInstance#machine_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name specified for the Notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#name NotebooksInstance#name}

---

##### `acceleratorConfig`<sup>Optional</sup> <a name="acceleratorConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.acceleratorConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a>

accelerator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#accelerator_config NotebooksInstance#accelerator_config}

---

##### `bootDiskSizeGb`<sup>Optional</sup> <a name="bootDiskSizeGb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.bootDiskSizeGb"></a>

- *Type:* java.lang.Number

The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB).

The minimum recommended value is 100 GB.
If not specified, this defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#boot_disk_size_gb NotebooksInstance#boot_disk_size_gb}

---

##### `bootDiskType`<sup>Optional</sup> <a name="bootDiskType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.bootDiskType"></a>

- *Type:* java.lang.String

Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#boot_disk_type NotebooksInstance#boot_disk_type}

---

##### `containerImage`<sup>Optional</sup> <a name="containerImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.containerImage"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#container_image NotebooksInstance#container_image}

---

##### `createTime`<sup>Optional</sup> <a name="createTime" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.createTime"></a>

- *Type:* java.lang.String

Instance creation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#create_time NotebooksInstance#create_time}

---

##### `customGpuDriverPath`<sup>Optional</sup> <a name="customGpuDriverPath" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.customGpuDriverPath"></a>

- *Type:* java.lang.String

Specify a custom Cloud Storage path where the GPU driver is stored.

If not specified, we'll automatically choose from official GPU drivers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#custom_gpu_driver_path NotebooksInstance#custom_gpu_driver_path}

---

##### `dataDiskSizeGb`<sup>Optional</sup> <a name="dataDiskSizeGb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.dataDiskSizeGb"></a>

- *Type:* java.lang.Number

The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB).

You can choose the size of the data disk based on how big your notebooks and data are.
If not specified, this defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#data_disk_size_gb NotebooksInstance#data_disk_size_gb}

---

##### `dataDiskType`<sup>Optional</sup> <a name="dataDiskType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.dataDiskType"></a>

- *Type:* java.lang.String

Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#data_disk_type NotebooksInstance#data_disk_type}

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.desiredState"></a>

- *Type:* java.lang.String

Desired state of the Notebook Instance.

Set this field to 'ACTIVE' to start the Instance, and 'STOPPED' to stop the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#desired_state NotebooksInstance#desired_state}

---

##### `diskEncryption`<sup>Optional</sup> <a name="diskEncryption" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.diskEncryption"></a>

- *Type:* java.lang.String

Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["DISK_ENCRYPTION_UNSPECIFIED", "GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#disk_encryption NotebooksInstance#disk_encryption}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#id NotebooksInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installGpuDriver`<sup>Optional</sup> <a name="installGpuDriver" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.installGpuDriver"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the end user authorizes Google Cloud to install GPU driver on this instance.

If this field is empty or set to false, the GPU driver
won't be installed. Only applicable to instances with GPUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#install_gpu_driver NotebooksInstance#install_gpu_driver}

---

##### `instanceOwners`<sup>Optional</sup> <a name="instanceOwners" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.instanceOwners"></a>

- *Type:* java.util.List<java.lang.String>

The list of owners of this instance after creation.

Format: alias@example.com.
Currently supports one owner only.
If not specified, all of the service account users of
your VM instance's service account can use the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#instance_owners NotebooksInstance#instance_owners}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.kmsKey"></a>

- *Type:* java.lang.String

The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK. Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#kms_key NotebooksInstance#kms_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to apply to this instance.

These can be later modified by the setLabels method.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#labels NotebooksInstance#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Custom metadata to apply to this instance.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#metadata NotebooksInstance#metadata}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The name of the VPC that this instance is in. Format: projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#network NotebooksInstance#network}

---

##### `nicType`<sup>Optional</sup> <a name="nicType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.nicType"></a>

- *Type:* java.lang.String

The type of vNIC driver. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#nic_type NotebooksInstance#nic_type}

---

##### `noProxyAccess`<sup>Optional</sup> <a name="noProxyAccess" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.noProxyAccess"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The notebook instance will not register with the proxy..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#no_proxy_access NotebooksInstance#no_proxy_access}

---

##### `noPublicIp`<sup>Optional</sup> <a name="noPublicIp" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.noPublicIp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

No public IP will be assigned to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#no_public_ip NotebooksInstance#no_public_ip}

---

##### `noRemoveDataDisk`<sup>Optional</sup> <a name="noRemoveDataDisk" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.noRemoveDataDisk"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the data disk will not be auto deleted when deleting the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#no_remove_data_disk NotebooksInstance#no_remove_data_disk}

---

##### `postStartupScript`<sup>Optional</sup> <a name="postStartupScript" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.postStartupScript"></a>

- *Type:* java.lang.String

Path to a Bash script that automatically runs after a notebook instance fully boots up.

The path must be a URL
or Cloud Storage path (gs://path-to-file/file-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#post_startup_script NotebooksInstance#post_startup_script}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#project NotebooksInstance#project}.

---

##### `reservationAffinity`<sup>Optional</sup> <a name="reservationAffinity" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.reservationAffinity"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#reservation_affinity NotebooksInstance#reservation_affinity}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.serviceAccount"></a>

- *Type:* java.lang.String

The service account on this instance, giving access to other Google Cloud services.

You can use any service account within
the same project, but you must have the service account user
permission to use the instance. If not specified,
the Compute Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#service_account NotebooksInstance#service_account}

---

##### `serviceAccountScopes`<sup>Optional</sup> <a name="serviceAccountScopes" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.serviceAccountScopes"></a>

- *Type:* java.util.List<java.lang.String>

Optional.

The URIs of service account scopes to be included in Compute Engine instances.
If not specified, the following scopes are defined:

* https://www.googleapis.com/auth/cloud-platform
* https://www.googleapis.com/auth/userinfo.email

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#service_account_scopes NotebooksInstance#service_account_scopes}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.shieldedInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#shielded_instance_config NotebooksInstance#shielded_instance_config}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.subnet"></a>

- *Type:* java.lang.String

The name of the subnet that this instance is in. Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#subnet NotebooksInstance#subnet}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

The Compute Engine tags to add to instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#tags NotebooksInstance#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#timeouts NotebooksInstance#timeouts}

---

##### `updateTime`<sup>Optional</sup> <a name="updateTime" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.updateTime"></a>

- *Type:* java.lang.String

Instance update time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#update_time NotebooksInstance#update_time}

---

##### `vmImage`<sup>Optional</sup> <a name="vmImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.vmImage"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#vm_image NotebooksInstance#vm_image}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.putAcceleratorConfig">putAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.putContainerImage">putContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.putReservationAffinity">putReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.putShieldedInstanceConfig">putShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.putVmImage">putVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetAcceleratorConfig">resetAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetBootDiskSizeGb">resetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetBootDiskType">resetBootDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetContainerImage">resetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetCreateTime">resetCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetCustomGpuDriverPath">resetCustomGpuDriverPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDataDiskSizeGb">resetDataDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDataDiskType">resetDataDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDesiredState">resetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDiskEncryption">resetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetInstallGpuDriver">resetInstallGpuDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetInstanceOwners">resetInstanceOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNicType">resetNicType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNoProxyAccess">resetNoProxyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNoPublicIp">resetNoPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNoRemoveDataDisk">resetNoRemoveDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetPostStartupScript">resetPostStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetReservationAffinity">resetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetServiceAccountScopes">resetServiceAccountScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetShieldedInstanceConfig">resetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetSubnet">resetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetUpdateTime">resetUpdateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetVmImage">resetVmImage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAcceleratorConfig` <a name="putAcceleratorConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putAcceleratorConfig"></a>

```java
public void putAcceleratorConfig(NotebooksInstanceAcceleratorConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putAcceleratorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a>

---

##### `putContainerImage` <a name="putContainerImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putContainerImage"></a>

```java
public void putContainerImage(NotebooksInstanceContainerImage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putContainerImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a>

---

##### `putReservationAffinity` <a name="putReservationAffinity" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putReservationAffinity"></a>

```java
public void putReservationAffinity(NotebooksInstanceReservationAffinity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a>

---

##### `putShieldedInstanceConfig` <a name="putShieldedInstanceConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putShieldedInstanceConfig"></a>

```java
public void putShieldedInstanceConfig(NotebooksInstanceShieldedInstanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putTimeouts"></a>

```java
public void putTimeouts(NotebooksInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a>

---

##### `putVmImage` <a name="putVmImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putVmImage"></a>

```java
public void putVmImage(NotebooksInstanceVmImage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putVmImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a>

---

##### `resetAcceleratorConfig` <a name="resetAcceleratorConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetAcceleratorConfig"></a>

```java
public void resetAcceleratorConfig()
```

##### `resetBootDiskSizeGb` <a name="resetBootDiskSizeGb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetBootDiskSizeGb"></a>

```java
public void resetBootDiskSizeGb()
```

##### `resetBootDiskType` <a name="resetBootDiskType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetBootDiskType"></a>

```java
public void resetBootDiskType()
```

##### `resetContainerImage` <a name="resetContainerImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetContainerImage"></a>

```java
public void resetContainerImage()
```

##### `resetCreateTime` <a name="resetCreateTime" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetCreateTime"></a>

```java
public void resetCreateTime()
```

##### `resetCustomGpuDriverPath` <a name="resetCustomGpuDriverPath" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetCustomGpuDriverPath"></a>

```java
public void resetCustomGpuDriverPath()
```

##### `resetDataDiskSizeGb` <a name="resetDataDiskSizeGb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDataDiskSizeGb"></a>

```java
public void resetDataDiskSizeGb()
```

##### `resetDataDiskType` <a name="resetDataDiskType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDataDiskType"></a>

```java
public void resetDataDiskType()
```

##### `resetDesiredState` <a name="resetDesiredState" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDesiredState"></a>

```java
public void resetDesiredState()
```

##### `resetDiskEncryption` <a name="resetDiskEncryption" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDiskEncryption"></a>

```java
public void resetDiskEncryption()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetId"></a>

```java
public void resetId()
```

##### `resetInstallGpuDriver` <a name="resetInstallGpuDriver" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetInstallGpuDriver"></a>

```java
public void resetInstallGpuDriver()
```

##### `resetInstanceOwners` <a name="resetInstanceOwners" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetInstanceOwners"></a>

```java
public void resetInstanceOwners()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetKmsKey"></a>

```java
public void resetKmsKey()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetNicType` <a name="resetNicType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNicType"></a>

```java
public void resetNicType()
```

##### `resetNoProxyAccess` <a name="resetNoProxyAccess" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNoProxyAccess"></a>

```java
public void resetNoProxyAccess()
```

##### `resetNoPublicIp` <a name="resetNoPublicIp" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNoPublicIp"></a>

```java
public void resetNoPublicIp()
```

##### `resetNoRemoveDataDisk` <a name="resetNoRemoveDataDisk" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNoRemoveDataDisk"></a>

```java
public void resetNoRemoveDataDisk()
```

##### `resetPostStartupScript` <a name="resetPostStartupScript" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetPostStartupScript"></a>

```java
public void resetPostStartupScript()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetProject"></a>

```java
public void resetProject()
```

##### `resetReservationAffinity` <a name="resetReservationAffinity" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetReservationAffinity"></a>

```java
public void resetReservationAffinity()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetServiceAccountScopes` <a name="resetServiceAccountScopes" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetServiceAccountScopes"></a>

```java
public void resetServiceAccountScopes()
```

##### `resetShieldedInstanceConfig` <a name="resetShieldedInstanceConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetShieldedInstanceConfig"></a>

```java
public void resetShieldedInstanceConfig()
```

##### `resetSubnet` <a name="resetSubnet" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetSubnet"></a>

```java
public void resetSubnet()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUpdateTime` <a name="resetUpdateTime" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetUpdateTime"></a>

```java
public void resetUpdateTime()
```

##### `resetVmImage` <a name="resetVmImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetVmImage"></a>

```java
public void resetVmImage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NotebooksInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance.NotebooksInstance;

NotebooksInstance.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance.NotebooksInstance;

NotebooksInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance.NotebooksInstance;

NotebooksInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance.NotebooksInstance;

NotebooksInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NotebooksInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NotebooksInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NotebooksInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NotebooksInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NotebooksInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.acceleratorConfig">acceleratorConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference">NotebooksInstanceAcceleratorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.containerImage">containerImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference">NotebooksInstanceContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.proxyUri">proxyUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference">NotebooksInstanceReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference">NotebooksInstanceShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference">NotebooksInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.vmImage">vmImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference">NotebooksInstanceVmImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.acceleratorConfigInput">acceleratorConfigInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskSizeGbInput">bootDiskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskTypeInput">bootDiskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.containerImageInput">containerImageInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.createTimeInput">createTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.customGpuDriverPathInput">customGpuDriverPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskSizeGbInput">dataDiskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskTypeInput">dataDiskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.desiredStateInput">desiredStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.diskEncryptionInput">diskEncryptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.installGpuDriverInput">installGpuDriverInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.instanceOwnersInput">instanceOwnersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.nicTypeInput">nicTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noProxyAccessInput">noProxyAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noPublicIpInput">noPublicIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noRemoveDataDiskInput">noRemoveDataDiskInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.postStartupScriptInput">postStartupScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.reservationAffinityInput">reservationAffinityInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccountScopesInput">serviceAccountScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.shieldedInstanceConfigInput">shieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.subnetInput">subnetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.updateTimeInput">updateTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.vmImageInput">vmImageInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskType">bootDiskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.customGpuDriverPath">customGpuDriverPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskSizeGb">dataDiskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskType">dataDiskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.diskEncryption">diskEncryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.installGpuDriver">installGpuDriver</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.instanceOwners">instanceOwners</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.nicType">nicType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noProxyAccess">noProxyAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noPublicIp">noPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noRemoveDataDisk">noRemoveDataDisk</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.postStartupScript">postStartupScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccountScopes">serviceAccountScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.subnet">subnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `acceleratorConfig`<sup>Required</sup> <a name="acceleratorConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.acceleratorConfig"></a>

```java
public NotebooksInstanceAcceleratorConfigOutputReference getAcceleratorConfig();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference">NotebooksInstanceAcceleratorConfigOutputReference</a>

---

##### `containerImage`<sup>Required</sup> <a name="containerImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.containerImage"></a>

```java
public NotebooksInstanceContainerImageOutputReference getContainerImage();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference">NotebooksInstanceContainerImageOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `proxyUri`<sup>Required</sup> <a name="proxyUri" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.proxyUri"></a>

```java
public java.lang.String getProxyUri();
```

- *Type:* java.lang.String

---

##### `reservationAffinity`<sup>Required</sup> <a name="reservationAffinity" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.reservationAffinity"></a>

```java
public NotebooksInstanceReservationAffinityOutputReference getReservationAffinity();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference">NotebooksInstanceReservationAffinityOutputReference</a>

---

##### `shieldedInstanceConfig`<sup>Required</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.shieldedInstanceConfig"></a>

```java
public NotebooksInstanceShieldedInstanceConfigOutputReference getShieldedInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference">NotebooksInstanceShieldedInstanceConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.timeouts"></a>

```java
public NotebooksInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference">NotebooksInstanceTimeoutsOutputReference</a>

---

##### `vmImage`<sup>Required</sup> <a name="vmImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.vmImage"></a>

```java
public NotebooksInstanceVmImageOutputReference getVmImage();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference">NotebooksInstanceVmImageOutputReference</a>

---

##### `acceleratorConfigInput`<sup>Optional</sup> <a name="acceleratorConfigInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.acceleratorConfigInput"></a>

```java
public NotebooksInstanceAcceleratorConfig getAcceleratorConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a>

---

##### `bootDiskSizeGbInput`<sup>Optional</sup> <a name="bootDiskSizeGbInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskSizeGbInput"></a>

```java
public java.lang.Number getBootDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `bootDiskTypeInput`<sup>Optional</sup> <a name="bootDiskTypeInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskTypeInput"></a>

```java
public java.lang.String getBootDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `containerImageInput`<sup>Optional</sup> <a name="containerImageInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.containerImageInput"></a>

```java
public NotebooksInstanceContainerImage getContainerImageInput();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a>

---

##### `createTimeInput`<sup>Optional</sup> <a name="createTimeInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.createTimeInput"></a>

```java
public java.lang.String getCreateTimeInput();
```

- *Type:* java.lang.String

---

##### `customGpuDriverPathInput`<sup>Optional</sup> <a name="customGpuDriverPathInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.customGpuDriverPathInput"></a>

```java
public java.lang.String getCustomGpuDriverPathInput();
```

- *Type:* java.lang.String

---

##### `dataDiskSizeGbInput`<sup>Optional</sup> <a name="dataDiskSizeGbInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskSizeGbInput"></a>

```java
public java.lang.Number getDataDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `dataDiskTypeInput`<sup>Optional</sup> <a name="dataDiskTypeInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskTypeInput"></a>

```java
public java.lang.String getDataDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.desiredStateInput"></a>

```java
public java.lang.String getDesiredStateInput();
```

- *Type:* java.lang.String

---

##### `diskEncryptionInput`<sup>Optional</sup> <a name="diskEncryptionInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.diskEncryptionInput"></a>

```java
public java.lang.String getDiskEncryptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `installGpuDriverInput`<sup>Optional</sup> <a name="installGpuDriverInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.installGpuDriverInput"></a>

```java
public java.lang.Object getInstallGpuDriverInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `instanceOwnersInput`<sup>Optional</sup> <a name="instanceOwnersInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.instanceOwnersInput"></a>

```java
public java.util.List<java.lang.String> getInstanceOwnersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `nicTypeInput`<sup>Optional</sup> <a name="nicTypeInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.nicTypeInput"></a>

```java
public java.lang.String getNicTypeInput();
```

- *Type:* java.lang.String

---

##### `noProxyAccessInput`<sup>Optional</sup> <a name="noProxyAccessInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noProxyAccessInput"></a>

```java
public java.lang.Object getNoProxyAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `noPublicIpInput`<sup>Optional</sup> <a name="noPublicIpInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noPublicIpInput"></a>

```java
public java.lang.Object getNoPublicIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `noRemoveDataDiskInput`<sup>Optional</sup> <a name="noRemoveDataDiskInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noRemoveDataDiskInput"></a>

```java
public java.lang.Object getNoRemoveDataDiskInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `postStartupScriptInput`<sup>Optional</sup> <a name="postStartupScriptInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.postStartupScriptInput"></a>

```java
public java.lang.String getPostStartupScriptInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `reservationAffinityInput`<sup>Optional</sup> <a name="reservationAffinityInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.reservationAffinityInput"></a>

```java
public NotebooksInstanceReservationAffinity getReservationAffinityInput();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountScopesInput`<sup>Optional</sup> <a name="serviceAccountScopesInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccountScopesInput"></a>

```java
public java.util.List<java.lang.String> getServiceAccountScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shieldedInstanceConfigInput`<sup>Optional</sup> <a name="shieldedInstanceConfigInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.shieldedInstanceConfigInput"></a>

```java
public NotebooksInstanceShieldedInstanceConfig getShieldedInstanceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a>

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.subnetInput"></a>

```java
public java.lang.String getSubnetInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a>

---

##### `updateTimeInput`<sup>Optional</sup> <a name="updateTimeInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.updateTimeInput"></a>

```java
public java.lang.String getUpdateTimeInput();
```

- *Type:* java.lang.String

---

##### `vmImageInput`<sup>Optional</sup> <a name="vmImageInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.vmImageInput"></a>

```java
public NotebooksInstanceVmImage getVmImageInput();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a>

---

##### `bootDiskSizeGb`<sup>Required</sup> <a name="bootDiskSizeGb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskSizeGb"></a>

```java
public java.lang.Number getBootDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `bootDiskType`<sup>Required</sup> <a name="bootDiskType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskType"></a>

```java
public java.lang.String getBootDiskType();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `customGpuDriverPath`<sup>Required</sup> <a name="customGpuDriverPath" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.customGpuDriverPath"></a>

```java
public java.lang.String getCustomGpuDriverPath();
```

- *Type:* java.lang.String

---

##### `dataDiskSizeGb`<sup>Required</sup> <a name="dataDiskSizeGb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskSizeGb"></a>

```java
public java.lang.Number getDataDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `dataDiskType`<sup>Required</sup> <a name="dataDiskType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskType"></a>

```java
public java.lang.String getDataDiskType();
```

- *Type:* java.lang.String

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

---

##### `diskEncryption`<sup>Required</sup> <a name="diskEncryption" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.diskEncryption"></a>

```java
public java.lang.String getDiskEncryption();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `installGpuDriver`<sup>Required</sup> <a name="installGpuDriver" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.installGpuDriver"></a>

```java
public java.lang.Object getInstallGpuDriver();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `instanceOwners`<sup>Required</sup> <a name="instanceOwners" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.instanceOwners"></a>

```java
public java.util.List<java.lang.String> getInstanceOwners();
```

- *Type:* java.util.List<java.lang.String>

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `nicType`<sup>Required</sup> <a name="nicType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.nicType"></a>

```java
public java.lang.String getNicType();
```

- *Type:* java.lang.String

---

##### `noProxyAccess`<sup>Required</sup> <a name="noProxyAccess" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noProxyAccess"></a>

```java
public java.lang.Object getNoProxyAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `noPublicIp`<sup>Required</sup> <a name="noPublicIp" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noPublicIp"></a>

```java
public java.lang.Object getNoPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `noRemoveDataDisk`<sup>Required</sup> <a name="noRemoveDataDisk" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noRemoveDataDisk"></a>

```java
public java.lang.Object getNoRemoveDataDisk();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `postStartupScript`<sup>Required</sup> <a name="postStartupScript" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.postStartupScript"></a>

```java
public java.lang.String getPostStartupScript();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `serviceAccountScopes`<sup>Required</sup> <a name="serviceAccountScopes" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccountScopes"></a>

```java
public java.util.List<java.lang.String> getServiceAccountScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.subnet"></a>

```java
public java.lang.String getSubnet();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NotebooksInstanceAcceleratorConfig <a name="NotebooksInstanceAcceleratorConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance.NotebooksInstanceAcceleratorConfig;

NotebooksInstanceAcceleratorConfig.builder()
    .coreCount(java.lang.Number)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig.property.coreCount">coreCount</a></code> | <code>java.lang.Number</code> | Count of cores of this accelerator. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig.property.type">type</a></code> | <code>java.lang.String</code> | Type of this accelerator. Possible values: ["ACCELERATOR_TYPE_UNSPECIFIED", "NVIDIA_TESLA_K80", "NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS", "NVIDIA_TESLA_A100", "TPU_V2", "TPU_V3"]. |

---

##### `coreCount`<sup>Required</sup> <a name="coreCount" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig.property.coreCount"></a>

```java
public java.lang.Number getCoreCount();
```

- *Type:* java.lang.Number

Count of cores of this accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#core_count NotebooksInstance#core_count}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of this accelerator. Possible values: ["ACCELERATOR_TYPE_UNSPECIFIED", "NVIDIA_TESLA_K80", "NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS", "NVIDIA_TESLA_A100", "TPU_V2", "TPU_V3"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#type NotebooksInstance#type}

---

### NotebooksInstanceConfig <a name="NotebooksInstanceConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance.NotebooksInstanceConfig;

NotebooksInstanceConfig.builder()
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
    .location(java.lang.String)
    .machineType(java.lang.String)
    .name(java.lang.String)
//  .acceleratorConfig(NotebooksInstanceAcceleratorConfig)
//  .bootDiskSizeGb(java.lang.Number)
//  .bootDiskType(java.lang.String)
//  .containerImage(NotebooksInstanceContainerImage)
//  .createTime(java.lang.String)
//  .customGpuDriverPath(java.lang.String)
//  .dataDiskSizeGb(java.lang.Number)
//  .dataDiskType(java.lang.String)
//  .desiredState(java.lang.String)
//  .diskEncryption(java.lang.String)
//  .id(java.lang.String)
//  .installGpuDriver(java.lang.Boolean)
//  .installGpuDriver(IResolvable)
//  .instanceOwners(java.util.List<java.lang.String>)
//  .kmsKey(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .network(java.lang.String)
//  .nicType(java.lang.String)
//  .noProxyAccess(java.lang.Boolean)
//  .noProxyAccess(IResolvable)
//  .noPublicIp(java.lang.Boolean)
//  .noPublicIp(IResolvable)
//  .noRemoveDataDisk(java.lang.Boolean)
//  .noRemoveDataDisk(IResolvable)
//  .postStartupScript(java.lang.String)
//  .project(java.lang.String)
//  .reservationAffinity(NotebooksInstanceReservationAffinity)
//  .serviceAccount(java.lang.String)
//  .serviceAccountScopes(java.util.List<java.lang.String>)
//  .shieldedInstanceConfig(NotebooksInstanceShieldedInstanceConfig)
//  .subnet(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(NotebooksInstanceTimeouts)
//  .updateTime(java.lang.String)
//  .vmImage(NotebooksInstanceVmImage)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.location">location</a></code> | <code>java.lang.String</code> | A reference to the zone where the machine resides. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.machineType">machineType</a></code> | <code>java.lang.String</code> | A reference to a machine type which defines VM kind. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name specified for the Notebook instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.acceleratorConfig">acceleratorConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a></code> | accelerator_config block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>java.lang.Number</code> | The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.bootDiskType">bootDiskType</a></code> | <code>java.lang.String</code> | Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.containerImage">containerImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.createTime">createTime</a></code> | <code>java.lang.String</code> | Instance creation time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.customGpuDriverPath">customGpuDriverPath</a></code> | <code>java.lang.String</code> | Specify a custom Cloud Storage path where the GPU driver is stored. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.dataDiskSizeGb">dataDiskSizeGb</a></code> | <code>java.lang.Number</code> | The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.dataDiskType">dataDiskType</a></code> | <code>java.lang.String</code> | Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | Desired state of the Notebook Instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.diskEncryption">diskEncryption</a></code> | <code>java.lang.String</code> | Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["DISK_ENCRYPTION_UNSPECIFIED", "GMEK", "CMEK"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#id NotebooksInstance#id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.installGpuDriver">installGpuDriver</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the end user authorizes Google Cloud to install GPU driver on this instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.instanceOwners">instanceOwners</a></code> | <code>java.util.List<java.lang.String></code> | The list of owners of this instance after creation. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK. Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to apply to this instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Custom metadata to apply to this instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.network">network</a></code> | <code>java.lang.String</code> | The name of the VPC that this instance is in. Format: projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.nicType">nicType</a></code> | <code>java.lang.String</code> | The type of vNIC driver. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.noProxyAccess">noProxyAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The notebook instance will not register with the proxy.. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.noPublicIp">noPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | No public IP will be assigned to this instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.noRemoveDataDisk">noRemoveDataDisk</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the data disk will not be auto deleted when deleting the instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.postStartupScript">postStartupScript</a></code> | <code>java.lang.String</code> | Path to a Bash script that automatically runs after a notebook instance fully boots up. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#project NotebooksInstance#project}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | The service account on this instance, giving access to other Google Cloud services. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.serviceAccountScopes">serviceAccountScopes</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.subnet">subnet</a></code> | <code>java.lang.String</code> | The name of the subnet that this instance is in. Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | The Compute Engine tags to add to instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | Instance update time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.vmImage">vmImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a></code> | vm_image block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

A reference to the zone where the machine resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#location NotebooksInstance#location}

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

A reference to a machine type which defines VM kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#machine_type NotebooksInstance#machine_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name specified for the Notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#name NotebooksInstance#name}

---

##### `acceleratorConfig`<sup>Optional</sup> <a name="acceleratorConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.acceleratorConfig"></a>

```java
public NotebooksInstanceAcceleratorConfig getAcceleratorConfig();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a>

accelerator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#accelerator_config NotebooksInstance#accelerator_config}

---

##### `bootDiskSizeGb`<sup>Optional</sup> <a name="bootDiskSizeGb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.bootDiskSizeGb"></a>

```java
public java.lang.Number getBootDiskSizeGb();
```

- *Type:* java.lang.Number

The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB).

The minimum recommended value is 100 GB.
If not specified, this defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#boot_disk_size_gb NotebooksInstance#boot_disk_size_gb}

---

##### `bootDiskType`<sup>Optional</sup> <a name="bootDiskType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.bootDiskType"></a>

```java
public java.lang.String getBootDiskType();
```

- *Type:* java.lang.String

Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#boot_disk_type NotebooksInstance#boot_disk_type}

---

##### `containerImage`<sup>Optional</sup> <a name="containerImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.containerImage"></a>

```java
public NotebooksInstanceContainerImage getContainerImage();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#container_image NotebooksInstance#container_image}

---

##### `createTime`<sup>Optional</sup> <a name="createTime" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

Instance creation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#create_time NotebooksInstance#create_time}

---

##### `customGpuDriverPath`<sup>Optional</sup> <a name="customGpuDriverPath" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.customGpuDriverPath"></a>

```java
public java.lang.String getCustomGpuDriverPath();
```

- *Type:* java.lang.String

Specify a custom Cloud Storage path where the GPU driver is stored.

If not specified, we'll automatically choose from official GPU drivers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#custom_gpu_driver_path NotebooksInstance#custom_gpu_driver_path}

---

##### `dataDiskSizeGb`<sup>Optional</sup> <a name="dataDiskSizeGb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.dataDiskSizeGb"></a>

```java
public java.lang.Number getDataDiskSizeGb();
```

- *Type:* java.lang.Number

The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB).

You can choose the size of the data disk based on how big your notebooks and data are.
If not specified, this defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#data_disk_size_gb NotebooksInstance#data_disk_size_gb}

---

##### `dataDiskType`<sup>Optional</sup> <a name="dataDiskType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.dataDiskType"></a>

```java
public java.lang.String getDataDiskType();
```

- *Type:* java.lang.String

Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#data_disk_type NotebooksInstance#data_disk_type}

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

Desired state of the Notebook Instance.

Set this field to 'ACTIVE' to start the Instance, and 'STOPPED' to stop the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#desired_state NotebooksInstance#desired_state}

---

##### `diskEncryption`<sup>Optional</sup> <a name="diskEncryption" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.diskEncryption"></a>

```java
public java.lang.String getDiskEncryption();
```

- *Type:* java.lang.String

Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["DISK_ENCRYPTION_UNSPECIFIED", "GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#disk_encryption NotebooksInstance#disk_encryption}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#id NotebooksInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installGpuDriver`<sup>Optional</sup> <a name="installGpuDriver" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.installGpuDriver"></a>

```java
public java.lang.Object getInstallGpuDriver();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the end user authorizes Google Cloud to install GPU driver on this instance.

If this field is empty or set to false, the GPU driver
won't be installed. Only applicable to instances with GPUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#install_gpu_driver NotebooksInstance#install_gpu_driver}

---

##### `instanceOwners`<sup>Optional</sup> <a name="instanceOwners" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.instanceOwners"></a>

```java
public java.util.List<java.lang.String> getInstanceOwners();
```

- *Type:* java.util.List<java.lang.String>

The list of owners of this instance after creation.

Format: alias@example.com.
Currently supports one owner only.
If not specified, all of the service account users of
your VM instance's service account can use the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#instance_owners NotebooksInstance#instance_owners}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK. Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#kms_key NotebooksInstance#kms_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to apply to this instance.

These can be later modified by the setLabels method.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#labels NotebooksInstance#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Custom metadata to apply to this instance.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#metadata NotebooksInstance#metadata}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The name of the VPC that this instance is in. Format: projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#network NotebooksInstance#network}

---

##### `nicType`<sup>Optional</sup> <a name="nicType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.nicType"></a>

```java
public java.lang.String getNicType();
```

- *Type:* java.lang.String

The type of vNIC driver. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#nic_type NotebooksInstance#nic_type}

---

##### `noProxyAccess`<sup>Optional</sup> <a name="noProxyAccess" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.noProxyAccess"></a>

```java
public java.lang.Object getNoProxyAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The notebook instance will not register with the proxy..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#no_proxy_access NotebooksInstance#no_proxy_access}

---

##### `noPublicIp`<sup>Optional</sup> <a name="noPublicIp" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.noPublicIp"></a>

```java
public java.lang.Object getNoPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

No public IP will be assigned to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#no_public_ip NotebooksInstance#no_public_ip}

---

##### `noRemoveDataDisk`<sup>Optional</sup> <a name="noRemoveDataDisk" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.noRemoveDataDisk"></a>

```java
public java.lang.Object getNoRemoveDataDisk();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the data disk will not be auto deleted when deleting the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#no_remove_data_disk NotebooksInstance#no_remove_data_disk}

---

##### `postStartupScript`<sup>Optional</sup> <a name="postStartupScript" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.postStartupScript"></a>

```java
public java.lang.String getPostStartupScript();
```

- *Type:* java.lang.String

Path to a Bash script that automatically runs after a notebook instance fully boots up.

The path must be a URL
or Cloud Storage path (gs://path-to-file/file-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#post_startup_script NotebooksInstance#post_startup_script}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#project NotebooksInstance#project}.

---

##### `reservationAffinity`<sup>Optional</sup> <a name="reservationAffinity" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.reservationAffinity"></a>

```java
public NotebooksInstanceReservationAffinity getReservationAffinity();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#reservation_affinity NotebooksInstance#reservation_affinity}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

The service account on this instance, giving access to other Google Cloud services.

You can use any service account within
the same project, but you must have the service account user
permission to use the instance. If not specified,
the Compute Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#service_account NotebooksInstance#service_account}

---

##### `serviceAccountScopes`<sup>Optional</sup> <a name="serviceAccountScopes" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.serviceAccountScopes"></a>

```java
public java.util.List<java.lang.String> getServiceAccountScopes();
```

- *Type:* java.util.List<java.lang.String>

Optional.

The URIs of service account scopes to be included in Compute Engine instances.
If not specified, the following scopes are defined:

* https://www.googleapis.com/auth/cloud-platform
* https://www.googleapis.com/auth/userinfo.email

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#service_account_scopes NotebooksInstance#service_account_scopes}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.shieldedInstanceConfig"></a>

```java
public NotebooksInstanceShieldedInstanceConfig getShieldedInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#shielded_instance_config NotebooksInstance#shielded_instance_config}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.subnet"></a>

```java
public java.lang.String getSubnet();
```

- *Type:* java.lang.String

The name of the subnet that this instance is in. Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#subnet NotebooksInstance#subnet}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

The Compute Engine tags to add to instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#tags NotebooksInstance#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.timeouts"></a>

```java
public NotebooksInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#timeouts NotebooksInstance#timeouts}

---

##### `updateTime`<sup>Optional</sup> <a name="updateTime" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

Instance update time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#update_time NotebooksInstance#update_time}

---

##### `vmImage`<sup>Optional</sup> <a name="vmImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.vmImage"></a>

```java
public NotebooksInstanceVmImage getVmImage();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#vm_image NotebooksInstance#vm_image}

---

### NotebooksInstanceContainerImage <a name="NotebooksInstanceContainerImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance.NotebooksInstanceContainerImage;

NotebooksInstanceContainerImage.builder()
    .repository(java.lang.String)
//  .tag(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage.property.repository">repository</a></code> | <code>java.lang.String</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage.property.tag">tag</a></code> | <code>java.lang.String</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#repository NotebooksInstance#repository}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#tag NotebooksInstance#tag}

---

### NotebooksInstanceReservationAffinity <a name="NotebooksInstanceReservationAffinity" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance.NotebooksInstanceReservationAffinity;

NotebooksInstanceReservationAffinity.builder()
    .consumeReservationType(java.lang.String)
//  .key(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.property.consumeReservationType">consumeReservationType</a></code> | <code>java.lang.String</code> | The type of Compute Reservation. Possible values: ["NO_RESERVATION", "ANY_RESERVATION", "SPECIFIC_RESERVATION"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.property.key">key</a></code> | <code>java.lang.String</code> | Corresponds to the label key of reservation resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Corresponds to the label values of reservation resource. |

---

##### `consumeReservationType`<sup>Required</sup> <a name="consumeReservationType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.property.consumeReservationType"></a>

```java
public java.lang.String getConsumeReservationType();
```

- *Type:* java.lang.String

The type of Compute Reservation. Possible values: ["NO_RESERVATION", "ANY_RESERVATION", "SPECIFIC_RESERVATION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#consume_reservation_type NotebooksInstance#consume_reservation_type}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Corresponds to the label key of reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#key NotebooksInstance#key}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Corresponds to the label values of reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#values NotebooksInstance#values}

---

### NotebooksInstanceShieldedInstanceConfig <a name="NotebooksInstanceShieldedInstanceConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance.NotebooksInstanceShieldedInstanceConfig;

NotebooksInstanceShieldedInstanceConfig.builder()
//  .enableIntegrityMonitoring(java.lang.Boolean)
//  .enableIntegrityMonitoring(IResolvable)
//  .enableSecureBoot(java.lang.Boolean)
//  .enableSecureBoot(IResolvable)
//  .enableVtpm(java.lang.Boolean)
//  .enableVtpm(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defines whether the instance has integrity monitoring enabled. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defines whether the instance has Secure Boot enabled. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.property.enableVtpm">enableVtpm</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defines whether the instance has the vTPM enabled. Enabled by default. |

---

##### `enableIntegrityMonitoring`<sup>Optional</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```java
public java.lang.Object getEnableIntegrityMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defines whether the instance has integrity monitoring enabled.

Enables monitoring and attestation of the
boot integrity of the instance. The attestation is performed against the integrity policy baseline.
This baseline is initially derived from the implicitly trusted boot image when the instance is created.
Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#enable_integrity_monitoring NotebooksInstance#enable_integrity_monitoring}

---

##### `enableSecureBoot`<sup>Optional</sup> <a name="enableSecureBoot" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.property.enableSecureBoot"></a>

```java
public java.lang.Object getEnableSecureBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defines whether the instance has Secure Boot enabled.

Secure Boot helps ensure that the system only runs
authentic software by verifying the digital signature of all boot components, and halting the boot process
if signature verification fails.
Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#enable_secure_boot NotebooksInstance#enable_secure_boot}

---

##### `enableVtpm`<sup>Optional</sup> <a name="enableVtpm" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.property.enableVtpm"></a>

```java
public java.lang.Object getEnableVtpm();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defines whether the instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#enable_vtpm NotebooksInstance#enable_vtpm}

---

### NotebooksInstanceTimeouts <a name="NotebooksInstanceTimeouts" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance.NotebooksInstanceTimeouts;

NotebooksInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#create NotebooksInstance#create}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#delete NotebooksInstance#delete}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#update NotebooksInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#create NotebooksInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#delete NotebooksInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#update NotebooksInstance#update}.

---

### NotebooksInstanceVmImage <a name="NotebooksInstanceVmImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance.NotebooksInstanceVmImage;

NotebooksInstanceVmImage.builder()
    .project(java.lang.String)
//  .imageFamily(java.lang.String)
//  .imageName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.property.project">project</a></code> | <code>java.lang.String</code> | The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.property.imageFamily">imageFamily</a></code> | <code>java.lang.String</code> | Use this VM image family to find the image; the newest image in this family will be used. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.property.imageName">imageName</a></code> | <code>java.lang.String</code> | Use VM image name to find the image. |

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#project NotebooksInstance#project}

---

##### `imageFamily`<sup>Optional</sup> <a name="imageFamily" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.property.imageFamily"></a>

```java
public java.lang.String getImageFamily();
```

- *Type:* java.lang.String

Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#image_family NotebooksInstance#image_family}

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

Use VM image name to find the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/notebooks_instance#image_name NotebooksInstance#image_name}

---

## Classes <a name="Classes" id="Classes"></a>

### NotebooksInstanceAcceleratorConfigOutputReference <a name="NotebooksInstanceAcceleratorConfigOutputReference" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance.NotebooksInstanceAcceleratorConfigOutputReference;

new NotebooksInstanceAcceleratorConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.coreCountInput">coreCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.coreCount">coreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coreCountInput`<sup>Optional</sup> <a name="coreCountInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.coreCountInput"></a>

```java
public java.lang.Number getCoreCountInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `coreCount`<sup>Required</sup> <a name="coreCount" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.coreCount"></a>

```java
public java.lang.Number getCoreCount();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.internalValue"></a>

```java
public NotebooksInstanceAcceleratorConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a>

---


### NotebooksInstanceContainerImageOutputReference <a name="NotebooksInstanceContainerImageOutputReference" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance.NotebooksInstanceContainerImageOutputReference;

new NotebooksInstanceContainerImageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.resetTag">resetTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTag` <a name="resetTag" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.resetTag"></a>

```java
public void resetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.tagInput">tagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.tagInput"></a>

```java
public java.lang.String getTagInput();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.internalValue"></a>

```java
public NotebooksInstanceContainerImage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a>

---


### NotebooksInstanceReservationAffinityOutputReference <a name="NotebooksInstanceReservationAffinityOutputReference" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance.NotebooksInstanceReservationAffinityOutputReference;

new NotebooksInstanceReservationAffinityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.consumeReservationTypeInput">consumeReservationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.consumeReservationType">consumeReservationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumeReservationTypeInput`<sup>Optional</sup> <a name="consumeReservationTypeInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.consumeReservationTypeInput"></a>

```java
public java.lang.String getConsumeReservationTypeInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `consumeReservationType`<sup>Required</sup> <a name="consumeReservationType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.consumeReservationType"></a>

```java
public java.lang.String getConsumeReservationType();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.internalValue"></a>

```java
public NotebooksInstanceReservationAffinity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a>

---


### NotebooksInstanceShieldedInstanceConfigOutputReference <a name="NotebooksInstanceShieldedInstanceConfigOutputReference" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance.NotebooksInstanceShieldedInstanceConfigOutputReference;

new NotebooksInstanceShieldedInstanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">resetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot">resetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm">resetEnableVtpm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableIntegrityMonitoring` <a name="resetEnableIntegrityMonitoring" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```java
public void resetEnableIntegrityMonitoring()
```

##### `resetEnableSecureBoot` <a name="resetEnableSecureBoot" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```java
public void resetEnableSecureBoot()
```

##### `resetEnableVtpm` <a name="resetEnableVtpm" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```java
public void resetEnableVtpm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enableIntegrityMonitoringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput">enableVtpmInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpm">enableVtpm</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableIntegrityMonitoringInput`<sup>Optional</sup> <a name="enableIntegrityMonitoringInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```java
public java.lang.Object getEnableIntegrityMonitoringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```java
public java.lang.Object getEnableSecureBootInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableVtpmInput`<sup>Optional</sup> <a name="enableVtpmInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```java
public java.lang.Object getEnableVtpmInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableIntegrityMonitoring`<sup>Required</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```java
public java.lang.Object getEnableIntegrityMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```java
public java.lang.Object getEnableSecureBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableVtpm`<sup>Required</sup> <a name="enableVtpm" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```java
public java.lang.Object getEnableVtpm();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.internalValue"></a>

```java
public NotebooksInstanceShieldedInstanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a>

---


### NotebooksInstanceTimeoutsOutputReference <a name="NotebooksInstanceTimeoutsOutputReference" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance.NotebooksInstanceTimeoutsOutputReference;

new NotebooksInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a>

---


### NotebooksInstanceVmImageOutputReference <a name="NotebooksInstanceVmImageOutputReference" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.notebooks_instance.NotebooksInstanceVmImageOutputReference;

new NotebooksInstanceVmImageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resetImageFamily">resetImageFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resetImageName">resetImageName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageFamily` <a name="resetImageFamily" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resetImageFamily"></a>

```java
public void resetImageFamily()
```

##### `resetImageName` <a name="resetImageName" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resetImageName"></a>

```java
public void resetImageName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageFamilyInput">imageFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageFamily">imageFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `imageFamilyInput`<sup>Optional</sup> <a name="imageFamilyInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageFamilyInput"></a>

```java
public java.lang.String getImageFamilyInput();
```

- *Type:* java.lang.String

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageNameInput"></a>

```java
public java.lang.String getImageNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `imageFamily`<sup>Required</sup> <a name="imageFamily" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageFamily"></a>

```java
public java.lang.String getImageFamily();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.internalValue"></a>

```java
public NotebooksInstanceVmImage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a>

---



