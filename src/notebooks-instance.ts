// https://www.terraform.io/docs/providers/google/r/notebooks_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotebooksInstanceConfig extends cdktf.TerraformMetaArguments {
  /** The size of the boot disk in GB attached to this instance,
up to a maximum of 64000 GB (64 TB). The minimum recommended value is 100 GB.
If not specified, this defaults to 100. */
  readonly bootDiskSizeGb?: number;
  /** Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED"] */
  readonly bootDiskType?: string;
  /** Instance creation time */
  readonly createTime?: string;
  /** Specify a custom Cloud Storage path where the GPU driver is stored.
If not specified, we'll automatically choose from official GPU drivers. */
  readonly customGpuDriverPath?: string;
  /** The size of the data disk in GB attached to this instance,
up to a maximum of 64000 GB (64 TB).
You can choose the size of the data disk based on how big your notebooks and data are.
If not specified, this defaults to 100. */
  readonly dataDiskSizeGb?: number;
  /** Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED"] */
  readonly dataDiskType?: string;
  /** Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["DISK_ENCRYPTION_UNSPECIFIED", "GMEK", "CMEK"] */
  readonly diskEncryption?: string;
  /** Whether the end user authorizes Google Cloud to install GPU driver
on this instance. If this field is empty or set to false, the GPU driver
won't be installed. Only applicable to instances with GPUs. */
  readonly installGpuDriver?: boolean;
  /** The list of owners of this instance after creation.
Format: alias@example.com.
Currently supports one owner only.
If not specified, all of the service account users of
your VM instance's service account can use the instance. */
  readonly instanceOwners?: string[];
  /** The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK.
Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id} */
  readonly kmsKey?: string;
  /** Labels to apply to this instance. These can be later modified by the setLabels method.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. */
  readonly labels?: { [key: string]: string };
  /** A reference to the zone where the machine resides. */
  readonly location: string;
  /** A reference to a machine type which defines VM kind. */
  readonly machineType: string;
  /** Custom metadata to apply to this instance.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. */
  readonly metadata?: { [key: string]: string };
  /** The name specified for the Notebook instance. */
  readonly name: string;
  /** The name of the VPC that this instance is in.
Format: projects/{project_id}/global/networks/{network_id} */
  readonly network?: string;
  /** The notebook instance will not register with the proxy.. */
  readonly noProxyAccess?: boolean;
  /** No public IP will be assigned to this instance. */
  readonly noPublicIp?: boolean;
  /** If true, the data disk will not be auto deleted when deleting the instance. */
  readonly noRemoveDataDisk?: boolean;
  /** Path to a Bash script that automatically runs after a
notebook instance fully boots up. The path must be a URL
or Cloud Storage path (gs://path-to-file/file-name). */
  readonly postStartupScript?: string;
  readonly project?: string;
  /** The service account on this instance, giving access to other
Google Cloud services. You can use any service account within
the same project, but you must have the service account user
permission to use the instance. If not specified,
the Compute Engine default service account is used. */
  readonly serviceAccount?: string;
  /** Optional. The URIs of service account scopes to be included in Compute Engine instances.
If not specified, the following scopes are defined:
- https://www.googleapis.com/auth/cloud-platform
- https://www.googleapis.com/auth/userinfo.email */
  readonly serviceAccountScopes?: string[];
  /** The name of the subnet that this instance is in.
Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id} */
  readonly subnet?: string;
  /** The Compute Engine tags to add to runtime. */
  readonly tags?: string[];
  /** Instance update time. */
  readonly updateTime?: string;
  /** accelerator_config block */
  readonly acceleratorConfig?: NotebooksInstanceAcceleratorConfig[];
  /** container_image block */
  readonly containerImage?: NotebooksInstanceContainerImage[];
  /** shielded_instance_config block */
  readonly shieldedInstanceConfig?: NotebooksInstanceShieldedInstanceConfig[];
  /** timeouts block */
  readonly timeouts?: NotebooksInstanceTimeouts;
  /** vm_image block */
  readonly vmImage?: NotebooksInstanceVmImage[];
}
export interface NotebooksInstanceAcceleratorConfig {
  /** Count of cores of this accelerator. */
  readonly coreCount: number;
  /** Type of this accelerator. Possible values: ["ACCELERATOR_TYPE_UNSPECIFIED", "NVIDIA_TESLA_K80", "NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS", "NVIDIA_TESLA_A100", "TPU_V2", "TPU_V3"] */
  readonly type: string;
}

function notebooksInstanceAcceleratorConfigToTerraform(struct?: NotebooksInstanceAcceleratorConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    core_count: cdktf.numberToTerraform(struct!.coreCount),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface NotebooksInstanceContainerImage {
  /** The path to the container image repository.
For example: gcr.io/{project_id}/{imageName} */
  readonly repository: string;
  /** The tag of the container image. If not specified, this defaults to the latest tag. */
  readonly tag?: string;
}

function notebooksInstanceContainerImageToTerraform(struct?: NotebooksInstanceContainerImage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}

export interface NotebooksInstanceShieldedInstanceConfig {
  /** Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the
boot integrity of the instance. The attestation is performed against the integrity policy baseline.
This baseline is initially derived from the implicitly trusted boot image when the instance is created.
Enabled by default. */
  readonly enableIntegrityMonitoring?: boolean;
  /** Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs
authentic software by verifying the digital signature of all boot components, and halting the boot process
if signature verification fails.
Disabled by default. */
  readonly enableSecureBoot?: boolean;
  /** Defines whether the instance has the vTPM enabled.
Enabled by default. */
  readonly enableVtpm?: boolean;
}

function notebooksInstanceShieldedInstanceConfigToTerraform(struct?: NotebooksInstanceShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
    enable_vtpm: cdktf.booleanToTerraform(struct!.enableVtpm),
  }
}

export interface NotebooksInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function notebooksInstanceTimeoutsToTerraform(struct?: NotebooksInstanceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface NotebooksInstanceVmImage {
  /** Use this VM image family to find the image; the newest image in this family will be used. */
  readonly imageFamily?: string;
  /** Use VM image name to find the image. */
  readonly imageName?: string;
  /** The name of the Google Cloud project that this VM image belongs to.
Format: projects/{project_id} */
  readonly project: string;
}

function notebooksInstanceVmImageToTerraform(struct?: NotebooksInstanceVmImage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image_family: cdktf.stringToTerraform(struct!.imageFamily),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


// Resource

export class NotebooksInstance extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NotebooksInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_notebooks_instance',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bootDiskSizeGb = config.bootDiskSizeGb;
    this._bootDiskType = config.bootDiskType;
    this._createTime = config.createTime;
    this._customGpuDriverPath = config.customGpuDriverPath;
    this._dataDiskSizeGb = config.dataDiskSizeGb;
    this._dataDiskType = config.dataDiskType;
    this._diskEncryption = config.diskEncryption;
    this._installGpuDriver = config.installGpuDriver;
    this._instanceOwners = config.instanceOwners;
    this._kmsKey = config.kmsKey;
    this._labels = config.labels;
    this._location = config.location;
    this._machineType = config.machineType;
    this._metadata = config.metadata;
    this._name = config.name;
    this._network = config.network;
    this._noProxyAccess = config.noProxyAccess;
    this._noPublicIp = config.noPublicIp;
    this._noRemoveDataDisk = config.noRemoveDataDisk;
    this._postStartupScript = config.postStartupScript;
    this._project = config.project;
    this._serviceAccount = config.serviceAccount;
    this._serviceAccountScopes = config.serviceAccountScopes;
    this._subnet = config.subnet;
    this._tags = config.tags;
    this._updateTime = config.updateTime;
    this._acceleratorConfig = config.acceleratorConfig;
    this._containerImage = config.containerImage;
    this._shieldedInstanceConfig = config.shieldedInstanceConfig;
    this._timeouts = config.timeouts;
    this._vmImage = config.vmImage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // boot_disk_size_gb - computed: false, optional: true, required: false
  private _bootDiskSizeGb?: number;
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number ) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string;
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string ) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType
  }

  // create_time - computed: true, optional: true, required: false
  private _createTime?: string;
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime
  }

  // custom_gpu_driver_path - computed: false, optional: true, required: false
  private _customGpuDriverPath?: string;
  public get customGpuDriverPath() {
    return this.getStringAttribute('custom_gpu_driver_path');
  }
  public set customGpuDriverPath(value: string ) {
    this._customGpuDriverPath = value;
  }
  public resetCustomGpuDriverPath() {
    this._customGpuDriverPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customGpuDriverPathInput() {
    return this._customGpuDriverPath
  }

  // data_disk_size_gb - computed: false, optional: true, required: false
  private _dataDiskSizeGb?: number;
  public get dataDiskSizeGb() {
    return this.getNumberAttribute('data_disk_size_gb');
  }
  public set dataDiskSizeGb(value: number ) {
    this._dataDiskSizeGb = value;
  }
  public resetDataDiskSizeGb() {
    this._dataDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskSizeGbInput() {
    return this._dataDiskSizeGb
  }

  // data_disk_type - computed: false, optional: true, required: false
  private _dataDiskType?: string;
  public get dataDiskType() {
    return this.getStringAttribute('data_disk_type');
  }
  public set dataDiskType(value: string ) {
    this._dataDiskType = value;
  }
  public resetDataDiskType() {
    this._dataDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskTypeInput() {
    return this._dataDiskType
  }

  // disk_encryption - computed: false, optional: true, required: false
  private _diskEncryption?: string;
  public get diskEncryption() {
    return this.getStringAttribute('disk_encryption');
  }
  public set diskEncryption(value: string ) {
    this._diskEncryption = value;
  }
  public resetDiskEncryption() {
    this._diskEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionInput() {
    return this._diskEncryption
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // install_gpu_driver - computed: false, optional: true, required: false
  private _installGpuDriver?: boolean;
  public get installGpuDriver() {
    return this.getBooleanAttribute('install_gpu_driver');
  }
  public set installGpuDriver(value: boolean ) {
    this._installGpuDriver = value;
  }
  public resetInstallGpuDriver() {
    this._installGpuDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installGpuDriverInput() {
    return this._installGpuDriver
  }

  // instance_owners - computed: false, optional: true, required: false
  private _instanceOwners?: string[];
  public get instanceOwners() {
    return this.getListAttribute('instance_owners');
  }
  public set instanceOwners(value: string[] ) {
    this._instanceOwners = value;
  }
  public resetInstanceOwners() {
    this._instanceOwners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceOwnersInput() {
    return this._instanceOwners
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string;
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string ) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // machine_type - computed: false, optional: false, required: true
  private _machineType: string;
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string };
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } ) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // network - computed: true, optional: true, required: false
  private _network?: string;
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network
  }

  // no_proxy_access - computed: false, optional: true, required: false
  private _noProxyAccess?: boolean;
  public get noProxyAccess() {
    return this.getBooleanAttribute('no_proxy_access');
  }
  public set noProxyAccess(value: boolean ) {
    this._noProxyAccess = value;
  }
  public resetNoProxyAccess() {
    this._noProxyAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyAccessInput() {
    return this._noProxyAccess
  }

  // no_public_ip - computed: false, optional: true, required: false
  private _noPublicIp?: boolean;
  public get noPublicIp() {
    return this.getBooleanAttribute('no_public_ip');
  }
  public set noPublicIp(value: boolean ) {
    this._noPublicIp = value;
  }
  public resetNoPublicIp() {
    this._noPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPublicIpInput() {
    return this._noPublicIp
  }

  // no_remove_data_disk - computed: false, optional: true, required: false
  private _noRemoveDataDisk?: boolean;
  public get noRemoveDataDisk() {
    return this.getBooleanAttribute('no_remove_data_disk');
  }
  public set noRemoveDataDisk(value: boolean ) {
    this._noRemoveDataDisk = value;
  }
  public resetNoRemoveDataDisk() {
    this._noRemoveDataDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRemoveDataDiskInput() {
    return this._noRemoveDataDisk
  }

  // post_startup_script - computed: false, optional: true, required: false
  private _postStartupScript?: string;
  public get postStartupScript() {
    return this.getStringAttribute('post_startup_script');
  }
  public set postStartupScript(value: string ) {
    this._postStartupScript = value;
  }
  public resetPostStartupScript() {
    this._postStartupScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartupScriptInput() {
    return this._postStartupScript
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // proxy_uri - computed: true, optional: false, required: false
  public get proxyUri() {
    return this.getStringAttribute('proxy_uri');
  }

  // service_account - computed: true, optional: true, required: false
  private _serviceAccount?: string;
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount
  }

  // service_account_scopes - computed: false, optional: true, required: false
  private _serviceAccountScopes?: string[];
  public get serviceAccountScopes() {
    return this.getListAttribute('service_account_scopes');
  }
  public set serviceAccountScopes(value: string[] ) {
    this._serviceAccountScopes = value;
  }
  public resetServiceAccountScopes() {
    this._serviceAccountScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountScopesInput() {
    return this._serviceAccountScopes
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet - computed: true, optional: true, required: false
  private _subnet?: string;
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[];
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // update_time - computed: true, optional: true, required: false
  private _updateTime?: string;
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
  public set updateTime(value: string) {
    this._updateTime = value;
  }
  public resetUpdateTime() {
    this._updateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTimeInput() {
    return this._updateTime
  }

  // accelerator_config - computed: false, optional: true, required: false
  private _acceleratorConfig?: NotebooksInstanceAcceleratorConfig[];
  public get acceleratorConfig() {
    return this.interpolationForAttribute('accelerator_config') as any;
  }
  public set acceleratorConfig(value: NotebooksInstanceAcceleratorConfig[] ) {
    this._acceleratorConfig = value;
  }
  public resetAcceleratorConfig() {
    this._acceleratorConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorConfigInput() {
    return this._acceleratorConfig
  }

  // container_image - computed: false, optional: true, required: false
  private _containerImage?: NotebooksInstanceContainerImage[];
  public get containerImage() {
    return this.interpolationForAttribute('container_image') as any;
  }
  public set containerImage(value: NotebooksInstanceContainerImage[] ) {
    this._containerImage = value;
  }
  public resetContainerImage() {
    this._containerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerImageInput() {
    return this._containerImage
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig?: NotebooksInstanceShieldedInstanceConfig[];
  public get shieldedInstanceConfig() {
    return this.interpolationForAttribute('shielded_instance_config') as any;
  }
  public set shieldedInstanceConfig(value: NotebooksInstanceShieldedInstanceConfig[] ) {
    this._shieldedInstanceConfig = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NotebooksInstanceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NotebooksInstanceTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // vm_image - computed: false, optional: true, required: false
  private _vmImage?: NotebooksInstanceVmImage[];
  public get vmImage() {
    return this.interpolationForAttribute('vm_image') as any;
  }
  public set vmImage(value: NotebooksInstanceVmImage[] ) {
    this._vmImage = value;
  }
  public resetVmImage() {
    this._vmImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmImageInput() {
    return this._vmImage
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      boot_disk_size_gb: cdktf.numberToTerraform(this._bootDiskSizeGb),
      boot_disk_type: cdktf.stringToTerraform(this._bootDiskType),
      create_time: cdktf.stringToTerraform(this._createTime),
      custom_gpu_driver_path: cdktf.stringToTerraform(this._customGpuDriverPath),
      data_disk_size_gb: cdktf.numberToTerraform(this._dataDiskSizeGb),
      data_disk_type: cdktf.stringToTerraform(this._dataDiskType),
      disk_encryption: cdktf.stringToTerraform(this._diskEncryption),
      install_gpu_driver: cdktf.booleanToTerraform(this._installGpuDriver),
      instance_owners: cdktf.listMapper(cdktf.stringToTerraform)(this._instanceOwners),
      kms_key: cdktf.stringToTerraform(this._kmsKey),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      machine_type: cdktf.stringToTerraform(this._machineType),
      metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      no_proxy_access: cdktf.booleanToTerraform(this._noProxyAccess),
      no_public_ip: cdktf.booleanToTerraform(this._noPublicIp),
      no_remove_data_disk: cdktf.booleanToTerraform(this._noRemoveDataDisk),
      post_startup_script: cdktf.stringToTerraform(this._postStartupScript),
      project: cdktf.stringToTerraform(this._project),
      service_account: cdktf.stringToTerraform(this._serviceAccount),
      service_account_scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._serviceAccountScopes),
      subnet: cdktf.stringToTerraform(this._subnet),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      update_time: cdktf.stringToTerraform(this._updateTime),
      accelerator_config: cdktf.listMapper(notebooksInstanceAcceleratorConfigToTerraform)(this._acceleratorConfig),
      container_image: cdktf.listMapper(notebooksInstanceContainerImageToTerraform)(this._containerImage),
      shielded_instance_config: cdktf.listMapper(notebooksInstanceShieldedInstanceConfigToTerraform)(this._shieldedInstanceConfig),
      timeouts: notebooksInstanceTimeoutsToTerraform(this._timeouts),
      vm_image: cdktf.listMapper(notebooksInstanceVmImageToTerraform)(this._vmImage),
    };
  }
}
