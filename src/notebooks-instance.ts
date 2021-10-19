// https://www.terraform.io/docs/providers/google/r/notebooks_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotebooksInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The size of the boot disk in GB attached to this instance,
up to a maximum of 64000 GB (64 TB). The minimum recommended value is 100 GB.
If not specified, this defaults to 100.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#boot_disk_size_gb NotebooksInstance#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#boot_disk_type NotebooksInstance#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * Instance creation time
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#create_time NotebooksInstance#create_time}
  */
  readonly createTime?: string;
  /**
  * Specify a custom Cloud Storage path where the GPU driver is stored.
If not specified, we'll automatically choose from official GPU drivers.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#custom_gpu_driver_path NotebooksInstance#custom_gpu_driver_path}
  */
  readonly customGpuDriverPath?: string;
  /**
  * The size of the data disk in GB attached to this instance,
up to a maximum of 64000 GB (64 TB).
You can choose the size of the data disk based on how big your notebooks and data are.
If not specified, this defaults to 100.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#data_disk_size_gb NotebooksInstance#data_disk_size_gb}
  */
  readonly dataDiskSizeGb?: number;
  /**
  * Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#data_disk_type NotebooksInstance#data_disk_type}
  */
  readonly dataDiskType?: string;
  /**
  * Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["DISK_ENCRYPTION_UNSPECIFIED", "GMEK", "CMEK"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#disk_encryption NotebooksInstance#disk_encryption}
  */
  readonly diskEncryption?: string;
  /**
  * Whether the end user authorizes Google Cloud to install GPU driver
on this instance. If this field is empty or set to false, the GPU driver
won't be installed. Only applicable to instances with GPUs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#install_gpu_driver NotebooksInstance#install_gpu_driver}
  */
  readonly installGpuDriver?: boolean | cdktf.IResolvable;
  /**
  * The list of owners of this instance after creation.
Format: alias@example.com.
Currently supports one owner only.
If not specified, all of the service account users of
your VM instance's service account can use the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#instance_owners NotebooksInstance#instance_owners}
  */
  readonly instanceOwners?: string[];
  /**
  * The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK.
Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#kms_key NotebooksInstance#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Labels to apply to this instance. These can be later modified by the setLabels method.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#labels NotebooksInstance#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * A reference to the zone where the machine resides.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#location NotebooksInstance#location}
  */
  readonly location: string;
  /**
  * A reference to a machine type which defines VM kind.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#machine_type NotebooksInstance#machine_type}
  */
  readonly machineType: string;
  /**
  * Custom metadata to apply to this instance.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#metadata NotebooksInstance#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The name specified for the Notebook instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#name NotebooksInstance#name}
  */
  readonly name: string;
  /**
  * The name of the VPC that this instance is in.
Format: projects/{project_id}/global/networks/{network_id}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#network NotebooksInstance#network}
  */
  readonly network?: string;
  /**
  * The notebook instance will not register with the proxy..
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#no_proxy_access NotebooksInstance#no_proxy_access}
  */
  readonly noProxyAccess?: boolean | cdktf.IResolvable;
  /**
  * No public IP will be assigned to this instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#no_public_ip NotebooksInstance#no_public_ip}
  */
  readonly noPublicIp?: boolean | cdktf.IResolvable;
  /**
  * If true, the data disk will not be auto deleted when deleting the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#no_remove_data_disk NotebooksInstance#no_remove_data_disk}
  */
  readonly noRemoveDataDisk?: boolean | cdktf.IResolvable;
  /**
  * Path to a Bash script that automatically runs after a
notebook instance fully boots up. The path must be a URL
or Cloud Storage path (gs://path-to-file/file-name).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#post_startup_script NotebooksInstance#post_startup_script}
  */
  readonly postStartupScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#project NotebooksInstance#project}
  */
  readonly project?: string;
  /**
  * The service account on this instance, giving access to other
Google Cloud services. You can use any service account within
the same project, but you must have the service account user
permission to use the instance. If not specified,
the Compute Engine default service account is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#service_account NotebooksInstance#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Optional. The URIs of service account scopes to be included in Compute Engine instances.
If not specified, the following scopes are defined:
- https://www.googleapis.com/auth/cloud-platform
- https://www.googleapis.com/auth/userinfo.email
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#service_account_scopes NotebooksInstance#service_account_scopes}
  */
  readonly serviceAccountScopes?: string[];
  /**
  * The name of the subnet that this instance is in.
Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#subnet NotebooksInstance#subnet}
  */
  readonly subnet?: string;
  /**
  * The Compute Engine tags to add to runtime.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#tags NotebooksInstance#tags}
  */
  readonly tags?: string[];
  /**
  * Instance update time.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#update_time NotebooksInstance#update_time}
  */
  readonly updateTime?: string;
  /**
  * accelerator_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#accelerator_config NotebooksInstance#accelerator_config}
  */
  readonly acceleratorConfig?: NotebooksInstanceAcceleratorConfig;
  /**
  * container_image block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#container_image NotebooksInstance#container_image}
  */
  readonly containerImage?: NotebooksInstanceContainerImage;
  /**
  * shielded_instance_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#shielded_instance_config NotebooksInstance#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: NotebooksInstanceShieldedInstanceConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#timeouts NotebooksInstance#timeouts}
  */
  readonly timeouts?: NotebooksInstanceTimeouts;
  /**
  * vm_image block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#vm_image NotebooksInstance#vm_image}
  */
  readonly vmImage?: NotebooksInstanceVmImage;
}
export interface NotebooksInstanceAcceleratorConfig {
  /**
  * Count of cores of this accelerator.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#core_count NotebooksInstance#core_count}
  */
  readonly coreCount: number;
  /**
  * Type of this accelerator. Possible values: ["ACCELERATOR_TYPE_UNSPECIFIED", "NVIDIA_TESLA_K80", "NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS", "NVIDIA_TESLA_A100", "TPU_V2", "TPU_V3"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#type NotebooksInstance#type}
  */
  readonly type: string;
}

function notebooksInstanceAcceleratorConfigToTerraform(struct?: NotebooksInstanceAcceleratorConfigOutputReference | NotebooksInstanceAcceleratorConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_count: cdktf.numberToTerraform(struct!.coreCount),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class NotebooksInstanceAcceleratorConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // core_count - computed: false, optional: false, required: true
  private _coreCount?: number; 
  public get coreCount() {
    return this.getNumberAttribute('core_count');
  }
  public set coreCount(value: number) {
    this._coreCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coreCountInput() {
    return this._coreCount
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}
export interface NotebooksInstanceContainerImage {
  /**
  * The path to the container image repository.
For example: gcr.io/{project_id}/{imageName}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#repository NotebooksInstance#repository}
  */
  readonly repository: string;
  /**
  * The tag of the container image. If not specified, this defaults to the latest tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#tag NotebooksInstance#tag}
  */
  readonly tag?: string;
}

function notebooksInstanceContainerImageToTerraform(struct?: NotebooksInstanceContainerImageOutputReference | NotebooksInstanceContainerImage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}

export class NotebooksInstanceContainerImageOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string | undefined; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string | undefined) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag
  }
}
export interface NotebooksInstanceShieldedInstanceConfig {
  /**
  * Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the
boot integrity of the instance. The attestation is performed against the integrity policy baseline.
This baseline is initially derived from the implicitly trusted boot image when the instance is created.
Enabled by default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#enable_integrity_monitoring NotebooksInstance#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs
authentic software by verifying the digital signature of all boot components, and halting the boot process
if signature verification fails.
Disabled by default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#enable_secure_boot NotebooksInstance#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the instance has the vTPM enabled.
Enabled by default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#enable_vtpm NotebooksInstance#enable_vtpm}
  */
  readonly enableVtpm?: boolean | cdktf.IResolvable;
}

function notebooksInstanceShieldedInstanceConfigToTerraform(struct?: NotebooksInstanceShieldedInstanceConfigOutputReference | NotebooksInstanceShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
    enable_vtpm: cdktf.booleanToTerraform(struct!.enableVtpm),
  }
}

export class NotebooksInstanceShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktf.IResolvable | undefined; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring') as any;
  }
  public set enableIntegrityMonitoring(value: boolean | cdktf.IResolvable | undefined) {
    this._enableIntegrityMonitoring = value;
  }
  public resetEnableIntegrityMonitoring() {
    this._enableIntegrityMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntegrityMonitoringInput() {
    return this._enableIntegrityMonitoring
  }

  // enable_secure_boot - computed: false, optional: true, required: false
  private _enableSecureBoot?: boolean | cdktf.IResolvable | undefined; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot') as any;
  }
  public set enableSecureBoot(value: boolean | cdktf.IResolvable | undefined) {
    this._enableSecureBoot = value;
  }
  public resetEnableSecureBoot() {
    this._enableSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot
  }

  // enable_vtpm - computed: false, optional: true, required: false
  private _enableVtpm?: boolean | cdktf.IResolvable | undefined; 
  public get enableVtpm() {
    return this.getBooleanAttribute('enable_vtpm') as any;
  }
  public set enableVtpm(value: boolean | cdktf.IResolvable | undefined) {
    this._enableVtpm = value;
  }
  public resetEnableVtpm() {
    this._enableVtpm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVtpmInput() {
    return this._enableVtpm
  }
}
export interface NotebooksInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#create NotebooksInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#delete NotebooksInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#update NotebooksInstance#update}
  */
  readonly update?: string;
}

function notebooksInstanceTimeoutsToTerraform(struct?: NotebooksInstanceTimeoutsOutputReference | NotebooksInstanceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class NotebooksInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}
export interface NotebooksInstanceVmImage {
  /**
  * Use this VM image family to find the image; the newest image in this family will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#image_family NotebooksInstance#image_family}
  */
  readonly imageFamily?: string;
  /**
  * Use VM image name to find the image.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#image_name NotebooksInstance#image_name}
  */
  readonly imageName?: string;
  /**
  * The name of the Google Cloud project that this VM image belongs to.
Format: projects/{project_id}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html#project NotebooksInstance#project}
  */
  readonly project: string;
}

function notebooksInstanceVmImageToTerraform(struct?: NotebooksInstanceVmImageOutputReference | NotebooksInstanceVmImage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_family: cdktf.stringToTerraform(struct!.imageFamily),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    project: cdktf.stringToTerraform(struct!.project),
  }
}

export class NotebooksInstanceVmImageOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // image_family - computed: false, optional: true, required: false
  private _imageFamily?: string | undefined; 
  public get imageFamily() {
    return this.getStringAttribute('image_family');
  }
  public set imageFamily(value: string | undefined) {
    this._imageFamily = value;
  }
  public resetImageFamily() {
    this._imageFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageFamilyInput() {
    return this._imageFamily
  }

  // image_name - computed: false, optional: true, required: false
  private _imageName?: string | undefined; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string | undefined) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html google_notebooks_instance}
*/
export class NotebooksInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_notebooks_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance.html google_notebooks_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotebooksInstanceConfig
  */
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
  private _bootDiskSizeGb?: number | undefined; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number | undefined) {
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
  private _bootDiskType?: string | undefined; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string | undefined) {
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
  private _createTime?: string | undefined; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string | undefined) {
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
  private _customGpuDriverPath?: string | undefined; 
  public get customGpuDriverPath() {
    return this.getStringAttribute('custom_gpu_driver_path');
  }
  public set customGpuDriverPath(value: string | undefined) {
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
  private _dataDiskSizeGb?: number | undefined; 
  public get dataDiskSizeGb() {
    return this.getNumberAttribute('data_disk_size_gb');
  }
  public set dataDiskSizeGb(value: number | undefined) {
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
  private _dataDiskType?: string | undefined; 
  public get dataDiskType() {
    return this.getStringAttribute('data_disk_type');
  }
  public set dataDiskType(value: string | undefined) {
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
  private _diskEncryption?: string | undefined; 
  public get diskEncryption() {
    return this.getStringAttribute('disk_encryption');
  }
  public set diskEncryption(value: string | undefined) {
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
  private _installGpuDriver?: boolean | cdktf.IResolvable | undefined; 
  public get installGpuDriver() {
    return this.getBooleanAttribute('install_gpu_driver') as any;
  }
  public set installGpuDriver(value: boolean | cdktf.IResolvable | undefined) {
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
  private _instanceOwners?: string[] | undefined; 
  public get instanceOwners() {
    return this.getListAttribute('instance_owners');
  }
  public set instanceOwners(value: string[] | undefined) {
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
  private _kmsKey?: string | undefined; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string | undefined) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  private _location?: string; 
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
  private _machineType?: string; 
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
  private _metadata?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get metadata() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  private _name?: string; 
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
  private _network?: string | undefined; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string | undefined) {
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
  private _noProxyAccess?: boolean | cdktf.IResolvable | undefined; 
  public get noProxyAccess() {
    return this.getBooleanAttribute('no_proxy_access') as any;
  }
  public set noProxyAccess(value: boolean | cdktf.IResolvable | undefined) {
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
  private _noPublicIp?: boolean | cdktf.IResolvable | undefined; 
  public get noPublicIp() {
    return this.getBooleanAttribute('no_public_ip') as any;
  }
  public set noPublicIp(value: boolean | cdktf.IResolvable | undefined) {
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
  private _noRemoveDataDisk?: boolean | cdktf.IResolvable | undefined; 
  public get noRemoveDataDisk() {
    return this.getBooleanAttribute('no_remove_data_disk') as any;
  }
  public set noRemoveDataDisk(value: boolean | cdktf.IResolvable | undefined) {
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
  private _postStartupScript?: string | undefined; 
  public get postStartupScript() {
    return this.getStringAttribute('post_startup_script');
  }
  public set postStartupScript(value: string | undefined) {
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
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
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
  private _serviceAccount?: string | undefined; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string | undefined) {
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
  private _serviceAccountScopes?: string[] | undefined; 
  public get serviceAccountScopes() {
    return this.getListAttribute('service_account_scopes');
  }
  public set serviceAccountScopes(value: string[] | undefined) {
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
  private _subnet?: string | undefined; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string | undefined) {
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
  private _tags?: string[] | undefined; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[] | undefined) {
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
  private _updateTime?: string | undefined; 
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
  public set updateTime(value: string | undefined) {
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
  private _acceleratorConfig?: NotebooksInstanceAcceleratorConfig | undefined; 
  private __acceleratorConfigOutput = new NotebooksInstanceAcceleratorConfigOutputReference(this as any, "accelerator_config", true);
  public get acceleratorConfig() {
    return this.__acceleratorConfigOutput;
  }
  public putAcceleratorConfig(value: NotebooksInstanceAcceleratorConfig | undefined) {
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
  private _containerImage?: NotebooksInstanceContainerImage | undefined; 
  private __containerImageOutput = new NotebooksInstanceContainerImageOutputReference(this as any, "container_image", true);
  public get containerImage() {
    return this.__containerImageOutput;
  }
  public putContainerImage(value: NotebooksInstanceContainerImage | undefined) {
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
  private _shieldedInstanceConfig?: NotebooksInstanceShieldedInstanceConfig | undefined; 
  private __shieldedInstanceConfigOutput = new NotebooksInstanceShieldedInstanceConfigOutputReference(this as any, "shielded_instance_config", true);
  public get shieldedInstanceConfig() {
    return this.__shieldedInstanceConfigOutput;
  }
  public putShieldedInstanceConfig(value: NotebooksInstanceShieldedInstanceConfig | undefined) {
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
  private _timeouts?: NotebooksInstanceTimeouts | undefined; 
  private __timeoutsOutput = new NotebooksInstanceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: NotebooksInstanceTimeouts | undefined) {
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
  private _vmImage?: NotebooksInstanceVmImage | undefined; 
  private __vmImageOutput = new NotebooksInstanceVmImageOutputReference(this as any, "vm_image", true);
  public get vmImage() {
    return this.__vmImageOutput;
  }
  public putVmImage(value: NotebooksInstanceVmImage | undefined) {
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
      accelerator_config: notebooksInstanceAcceleratorConfigToTerraform(this._acceleratorConfig),
      container_image: notebooksInstanceContainerImageToTerraform(this._containerImage),
      shielded_instance_config: notebooksInstanceShieldedInstanceConfigToTerraform(this._shieldedInstanceConfig),
      timeouts: notebooksInstanceTimeoutsToTerraform(this._timeouts),
      vm_image: notebooksInstanceVmImageToTerraform(this._vmImage),
    };
  }
}
