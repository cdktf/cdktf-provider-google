// https://www.terraform.io/docs/providers/google/r/notebooks_instance
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#boot_disk_size_gb NotebooksInstance#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#boot_disk_type NotebooksInstance#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * Instance creation time
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#create_time NotebooksInstance#create_time}
  */
  readonly createTime?: string;
  /**
  * Specify a custom Cloud Storage path where the GPU driver is stored.
If not specified, we'll automatically choose from official GPU drivers.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#custom_gpu_driver_path NotebooksInstance#custom_gpu_driver_path}
  */
  readonly customGpuDriverPath?: string;
  /**
  * The size of the data disk in GB attached to this instance,
up to a maximum of 64000 GB (64 TB).
You can choose the size of the data disk based on how big your notebooks and data are.
If not specified, this defaults to 100.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#data_disk_size_gb NotebooksInstance#data_disk_size_gb}
  */
  readonly dataDiskSizeGb?: number;
  /**
  * Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#data_disk_type NotebooksInstance#data_disk_type}
  */
  readonly dataDiskType?: string;
  /**
  * Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["DISK_ENCRYPTION_UNSPECIFIED", "GMEK", "CMEK"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#disk_encryption NotebooksInstance#disk_encryption}
  */
  readonly diskEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#id NotebooksInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the end user authorizes Google Cloud to install GPU driver
on this instance. If this field is empty or set to false, the GPU driver
won't be installed. Only applicable to instances with GPUs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#install_gpu_driver NotebooksInstance#install_gpu_driver}
  */
  readonly installGpuDriver?: boolean | cdktf.IResolvable;
  /**
  * The list of owners of this instance after creation.
Format: alias@example.com.
Currently supports one owner only.
If not specified, all of the service account users of
your VM instance's service account can use the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#instance_owners NotebooksInstance#instance_owners}
  */
  readonly instanceOwners?: string[];
  /**
  * The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK.
Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#kms_key NotebooksInstance#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Labels to apply to this instance. These can be later modified by the setLabels method.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#labels NotebooksInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * A reference to the zone where the machine resides.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#location NotebooksInstance#location}
  */
  readonly location: string;
  /**
  * A reference to a machine type which defines VM kind.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#machine_type NotebooksInstance#machine_type}
  */
  readonly machineType: string;
  /**
  * Custom metadata to apply to this instance.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#metadata NotebooksInstance#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The name specified for the Notebook instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#name NotebooksInstance#name}
  */
  readonly name: string;
  /**
  * The name of the VPC that this instance is in.
Format: projects/{project_id}/global/networks/{network_id}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#network NotebooksInstance#network}
  */
  readonly network?: string;
  /**
  * The type of vNIC driver. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#nic_type NotebooksInstance#nic_type}
  */
  readonly nicType?: string;
  /**
  * The notebook instance will not register with the proxy..
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#no_proxy_access NotebooksInstance#no_proxy_access}
  */
  readonly noProxyAccess?: boolean | cdktf.IResolvable;
  /**
  * No public IP will be assigned to this instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#no_public_ip NotebooksInstance#no_public_ip}
  */
  readonly noPublicIp?: boolean | cdktf.IResolvable;
  /**
  * If true, the data disk will not be auto deleted when deleting the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#no_remove_data_disk NotebooksInstance#no_remove_data_disk}
  */
  readonly noRemoveDataDisk?: boolean | cdktf.IResolvable;
  /**
  * Path to a Bash script that automatically runs after a
notebook instance fully boots up. The path must be a URL
or Cloud Storage path (gs://path-to-file/file-name).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#post_startup_script NotebooksInstance#post_startup_script}
  */
  readonly postStartupScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#project NotebooksInstance#project}
  */
  readonly project?: string;
  /**
  * The service account on this instance, giving access to other
Google Cloud services. You can use any service account within
the same project, but you must have the service account user
permission to use the instance. If not specified,
the Compute Engine default service account is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#service_account NotebooksInstance#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Optional. The URIs of service account scopes to be included in Compute Engine instances.
If not specified, the following scopes are defined:
- https://www.googleapis.com/auth/cloud-platform
- https://www.googleapis.com/auth/userinfo.email
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#service_account_scopes NotebooksInstance#service_account_scopes}
  */
  readonly serviceAccountScopes?: string[];
  /**
  * The name of the subnet that this instance is in.
Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#subnet NotebooksInstance#subnet}
  */
  readonly subnet?: string;
  /**
  * The Compute Engine tags to add to instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#tags NotebooksInstance#tags}
  */
  readonly tags?: string[];
  /**
  * Instance update time.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#update_time NotebooksInstance#update_time}
  */
  readonly updateTime?: string;
  /**
  * accelerator_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#accelerator_config NotebooksInstance#accelerator_config}
  */
  readonly acceleratorConfig?: NotebooksInstanceAcceleratorConfig;
  /**
  * container_image block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#container_image NotebooksInstance#container_image}
  */
  readonly containerImage?: NotebooksInstanceContainerImage;
  /**
  * reservation_affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#reservation_affinity NotebooksInstance#reservation_affinity}
  */
  readonly reservationAffinity?: NotebooksInstanceReservationAffinity;
  /**
  * shielded_instance_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#shielded_instance_config NotebooksInstance#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: NotebooksInstanceShieldedInstanceConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#timeouts NotebooksInstance#timeouts}
  */
  readonly timeouts?: NotebooksInstanceTimeouts;
  /**
  * vm_image block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#vm_image NotebooksInstance#vm_image}
  */
  readonly vmImage?: NotebooksInstanceVmImage;
}
export interface NotebooksInstanceAcceleratorConfig {
  /**
  * Count of cores of this accelerator.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#core_count NotebooksInstance#core_count}
  */
  readonly coreCount: number;
  /**
  * Type of this accelerator. Possible values: ["ACCELERATOR_TYPE_UNSPECIFIED", "NVIDIA_TESLA_K80", "NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS", "NVIDIA_TESLA_A100", "TPU_V2", "TPU_V3"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#type NotebooksInstance#type}
  */
  readonly type: string;
}

export function notebooksInstanceAcceleratorConfigToTerraform(struct?: NotebooksInstanceAcceleratorConfigOutputReference | NotebooksInstanceAcceleratorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_count: cdktf.numberToTerraform(struct!.coreCount),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class NotebooksInstanceAcceleratorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotebooksInstanceAcceleratorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreCount = this._coreCount;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotebooksInstanceAcceleratorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coreCount = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coreCount = value.coreCount;
      this._type = value.type;
    }
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
    return this._coreCount;
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
    return this._type;
  }
}
export interface NotebooksInstanceContainerImage {
  /**
  * The path to the container image repository.
For example: gcr.io/{project_id}/{imageName}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#repository NotebooksInstance#repository}
  */
  readonly repository: string;
  /**
  * The tag of the container image. If not specified, this defaults to the latest tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#tag NotebooksInstance#tag}
  */
  readonly tag?: string;
}

export function notebooksInstanceContainerImageToTerraform(struct?: NotebooksInstanceContainerImageOutputReference | NotebooksInstanceContainerImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}

export class NotebooksInstanceContainerImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotebooksInstanceContainerImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotebooksInstanceContainerImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repository = undefined;
      this._tag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repository = value.repository;
      this._tag = value.tag;
    }
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
    return this._repository;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface NotebooksInstanceReservationAffinity {
  /**
  * The type of Compute Reservation. Possible values: ["NO_RESERVATION", "ANY_RESERVATION", "SPECIFIC_RESERVATION"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#consume_reservation_type NotebooksInstance#consume_reservation_type}
  */
  readonly consumeReservationType: string;
  /**
  * Corresponds to the label key of reservation resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#key NotebooksInstance#key}
  */
  readonly key?: string;
  /**
  * Corresponds to the label values of reservation resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#values NotebooksInstance#values}
  */
  readonly values?: string[];
}

export function notebooksInstanceReservationAffinityToTerraform(struct?: NotebooksInstanceReservationAffinityOutputReference | NotebooksInstanceReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consume_reservation_type: cdktf.stringToTerraform(struct!.consumeReservationType),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class NotebooksInstanceReservationAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotebooksInstanceReservationAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumeReservationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumeReservationType = this._consumeReservationType;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotebooksInstanceReservationAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumeReservationType = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumeReservationType = value.consumeReservationType;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // consume_reservation_type - computed: false, optional: false, required: true
  private _consumeReservationType?: string; 
  public get consumeReservationType() {
    return this.getStringAttribute('consume_reservation_type');
  }
  public set consumeReservationType(value: string) {
    this._consumeReservationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumeReservationTypeInput() {
    return this._consumeReservationType;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface NotebooksInstanceShieldedInstanceConfig {
  /**
  * Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the
boot integrity of the instance. The attestation is performed against the integrity policy baseline.
This baseline is initially derived from the implicitly trusted boot image when the instance is created.
Enabled by default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#enable_integrity_monitoring NotebooksInstance#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs
authentic software by verifying the digital signature of all boot components, and halting the boot process
if signature verification fails.
Disabled by default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#enable_secure_boot NotebooksInstance#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the instance has the vTPM enabled.
Enabled by default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#enable_vtpm NotebooksInstance#enable_vtpm}
  */
  readonly enableVtpm?: boolean | cdktf.IResolvable;
}

export function notebooksInstanceShieldedInstanceConfigToTerraform(struct?: NotebooksInstanceShieldedInstanceConfigOutputReference | NotebooksInstanceShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotebooksInstanceShieldedInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    if (this._enableVtpm !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVtpm = this._enableVtpm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotebooksInstanceShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
      this._enableVtpm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
      this._enableVtpm = value.enableVtpm;
    }
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktf.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }
  public set enableIntegrityMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableIntegrityMonitoring = value;
  }
  public resetEnableIntegrityMonitoring() {
    this._enableIntegrityMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntegrityMonitoringInput() {
    return this._enableIntegrityMonitoring;
  }

  // enable_secure_boot - computed: false, optional: true, required: false
  private _enableSecureBoot?: boolean | cdktf.IResolvable; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
  public set enableSecureBoot(value: boolean | cdktf.IResolvable) {
    this._enableSecureBoot = value;
  }
  public resetEnableSecureBoot() {
    this._enableSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot;
  }

  // enable_vtpm - computed: false, optional: true, required: false
  private _enableVtpm?: boolean | cdktf.IResolvable; 
  public get enableVtpm() {
    return this.getBooleanAttribute('enable_vtpm');
  }
  public set enableVtpm(value: boolean | cdktf.IResolvable) {
    this._enableVtpm = value;
  }
  public resetEnableVtpm() {
    this._enableVtpm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVtpmInput() {
    return this._enableVtpm;
  }
}
export interface NotebooksInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#create NotebooksInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#delete NotebooksInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#update NotebooksInstance#update}
  */
  readonly update?: string;
}

export function notebooksInstanceTimeoutsToTerraform(struct?: NotebooksInstanceTimeoutsOutputReference | NotebooksInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotebooksInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotebooksInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface NotebooksInstanceVmImage {
  /**
  * Use this VM image family to find the image; the newest image in this family will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#image_family NotebooksInstance#image_family}
  */
  readonly imageFamily?: string;
  /**
  * Use VM image name to find the image.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#image_name NotebooksInstance#image_name}
  */
  readonly imageName?: string;
  /**
  * The name of the Google Cloud project that this VM image belongs to.
Format: projects/{project_id}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance#project NotebooksInstance#project}
  */
  readonly project: string;
}

export function notebooksInstanceVmImageToTerraform(struct?: NotebooksInstanceVmImageOutputReference | NotebooksInstanceVmImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotebooksInstanceVmImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageFamily = this._imageFamily;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotebooksInstanceVmImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageFamily = undefined;
      this._imageName = undefined;
      this._project = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageFamily = value.imageFamily;
      this._imageName = value.imageName;
      this._project = value.project;
    }
  }

  // image_family - computed: false, optional: true, required: false
  private _imageFamily?: string; 
  public get imageFamily() {
    return this.getStringAttribute('image_family');
  }
  public set imageFamily(value: string) {
    this._imageFamily = value;
  }
  public resetImageFamily() {
    this._imageFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageFamilyInput() {
    return this._imageFamily;
  }

  // image_name - computed: false, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
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
    return this._project;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance google_notebooks_instance}
*/
export class NotebooksInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_notebooks_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/notebooks_instance google_notebooks_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotebooksInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: NotebooksInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_notebooks_instance',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bootDiskSizeGb = config.bootDiskSizeGb;
    this._bootDiskType = config.bootDiskType;
    this._createTime = config.createTime;
    this._customGpuDriverPath = config.customGpuDriverPath;
    this._dataDiskSizeGb = config.dataDiskSizeGb;
    this._dataDiskType = config.dataDiskType;
    this._diskEncryption = config.diskEncryption;
    this._id = config.id;
    this._installGpuDriver = config.installGpuDriver;
    this._instanceOwners = config.instanceOwners;
    this._kmsKey = config.kmsKey;
    this._labels = config.labels;
    this._location = config.location;
    this._machineType = config.machineType;
    this._metadata = config.metadata;
    this._name = config.name;
    this._network = config.network;
    this._nicType = config.nicType;
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
    this._acceleratorConfig.internalValue = config.acceleratorConfig;
    this._containerImage.internalValue = config.containerImage;
    this._reservationAffinity.internalValue = config.reservationAffinity;
    this._shieldedInstanceConfig.internalValue = config.shieldedInstanceConfig;
    this._timeouts.internalValue = config.timeouts;
    this._vmImage.internalValue = config.vmImage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // boot_disk_size_gb - computed: false, optional: true, required: false
  private _bootDiskSizeGb?: number; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb;
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType;
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
    return this._createTime;
  }

  // custom_gpu_driver_path - computed: false, optional: true, required: false
  private _customGpuDriverPath?: string; 
  public get customGpuDriverPath() {
    return this.getStringAttribute('custom_gpu_driver_path');
  }
  public set customGpuDriverPath(value: string) {
    this._customGpuDriverPath = value;
  }
  public resetCustomGpuDriverPath() {
    this._customGpuDriverPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customGpuDriverPathInput() {
    return this._customGpuDriverPath;
  }

  // data_disk_size_gb - computed: false, optional: true, required: false
  private _dataDiskSizeGb?: number; 
  public get dataDiskSizeGb() {
    return this.getNumberAttribute('data_disk_size_gb');
  }
  public set dataDiskSizeGb(value: number) {
    this._dataDiskSizeGb = value;
  }
  public resetDataDiskSizeGb() {
    this._dataDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskSizeGbInput() {
    return this._dataDiskSizeGb;
  }

  // data_disk_type - computed: false, optional: true, required: false
  private _dataDiskType?: string; 
  public get dataDiskType() {
    return this.getStringAttribute('data_disk_type');
  }
  public set dataDiskType(value: string) {
    this._dataDiskType = value;
  }
  public resetDataDiskType() {
    this._dataDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskTypeInput() {
    return this._dataDiskType;
  }

  // disk_encryption - computed: false, optional: true, required: false
  private _diskEncryption?: string; 
  public get diskEncryption() {
    return this.getStringAttribute('disk_encryption');
  }
  public set diskEncryption(value: string) {
    this._diskEncryption = value;
  }
  public resetDiskEncryption() {
    this._diskEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionInput() {
    return this._diskEncryption;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // install_gpu_driver - computed: false, optional: true, required: false
  private _installGpuDriver?: boolean | cdktf.IResolvable; 
  public get installGpuDriver() {
    return this.getBooleanAttribute('install_gpu_driver');
  }
  public set installGpuDriver(value: boolean | cdktf.IResolvable) {
    this._installGpuDriver = value;
  }
  public resetInstallGpuDriver() {
    this._installGpuDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installGpuDriverInput() {
    return this._installGpuDriver;
  }

  // instance_owners - computed: false, optional: true, required: false
  private _instanceOwners?: string[]; 
  public get instanceOwners() {
    return this.getListAttribute('instance_owners');
  }
  public set instanceOwners(value: string[]) {
    this._instanceOwners = value;
  }
  public resetInstanceOwners() {
    this._instanceOwners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceOwnersInput() {
    return this._instanceOwners;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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
    return this._location;
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
    return this._machineType;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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
    return this._name;
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
    return this._network;
  }

  // nic_type - computed: false, optional: true, required: false
  private _nicType?: string; 
  public get nicType() {
    return this.getStringAttribute('nic_type');
  }
  public set nicType(value: string) {
    this._nicType = value;
  }
  public resetNicType() {
    this._nicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicTypeInput() {
    return this._nicType;
  }

  // no_proxy_access - computed: false, optional: true, required: false
  private _noProxyAccess?: boolean | cdktf.IResolvable; 
  public get noProxyAccess() {
    return this.getBooleanAttribute('no_proxy_access');
  }
  public set noProxyAccess(value: boolean | cdktf.IResolvable) {
    this._noProxyAccess = value;
  }
  public resetNoProxyAccess() {
    this._noProxyAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyAccessInput() {
    return this._noProxyAccess;
  }

  // no_public_ip - computed: false, optional: true, required: false
  private _noPublicIp?: boolean | cdktf.IResolvable; 
  public get noPublicIp() {
    return this.getBooleanAttribute('no_public_ip');
  }
  public set noPublicIp(value: boolean | cdktf.IResolvable) {
    this._noPublicIp = value;
  }
  public resetNoPublicIp() {
    this._noPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPublicIpInput() {
    return this._noPublicIp;
  }

  // no_remove_data_disk - computed: false, optional: true, required: false
  private _noRemoveDataDisk?: boolean | cdktf.IResolvable; 
  public get noRemoveDataDisk() {
    return this.getBooleanAttribute('no_remove_data_disk');
  }
  public set noRemoveDataDisk(value: boolean | cdktf.IResolvable) {
    this._noRemoveDataDisk = value;
  }
  public resetNoRemoveDataDisk() {
    this._noRemoveDataDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRemoveDataDiskInput() {
    return this._noRemoveDataDisk;
  }

  // post_startup_script - computed: false, optional: true, required: false
  private _postStartupScript?: string; 
  public get postStartupScript() {
    return this.getStringAttribute('post_startup_script');
  }
  public set postStartupScript(value: string) {
    this._postStartupScript = value;
  }
  public resetPostStartupScript() {
    this._postStartupScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartupScriptInput() {
    return this._postStartupScript;
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
    return this._project;
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
    return this._serviceAccount;
  }

  // service_account_scopes - computed: false, optional: true, required: false
  private _serviceAccountScopes?: string[]; 
  public get serviceAccountScopes() {
    return this.getListAttribute('service_account_scopes');
  }
  public set serviceAccountScopes(value: string[]) {
    this._serviceAccountScopes = value;
  }
  public resetServiceAccountScopes() {
    this._serviceAccountScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountScopesInput() {
    return this._serviceAccountScopes;
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
    return this._subnet;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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
    return this._updateTime;
  }

  // accelerator_config - computed: false, optional: true, required: false
  private _acceleratorConfig = new NotebooksInstanceAcceleratorConfigOutputReference(this, "accelerator_config");
  public get acceleratorConfig() {
    return this._acceleratorConfig;
  }
  public putAcceleratorConfig(value: NotebooksInstanceAcceleratorConfig) {
    this._acceleratorConfig.internalValue = value;
  }
  public resetAcceleratorConfig() {
    this._acceleratorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorConfigInput() {
    return this._acceleratorConfig.internalValue;
  }

  // container_image - computed: false, optional: true, required: false
  private _containerImage = new NotebooksInstanceContainerImageOutputReference(this, "container_image");
  public get containerImage() {
    return this._containerImage;
  }
  public putContainerImage(value: NotebooksInstanceContainerImage) {
    this._containerImage.internalValue = value;
  }
  public resetContainerImage() {
    this._containerImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerImageInput() {
    return this._containerImage.internalValue;
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity = new NotebooksInstanceReservationAffinityOutputReference(this, "reservation_affinity");
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: NotebooksInstanceReservationAffinity) {
    this._reservationAffinity.internalValue = value;
  }
  public resetReservationAffinity() {
    this._reservationAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityInput() {
    return this._reservationAffinity.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new NotebooksInstanceShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: NotebooksInstanceShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NotebooksInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NotebooksInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vm_image - computed: false, optional: true, required: false
  private _vmImage = new NotebooksInstanceVmImageOutputReference(this, "vm_image");
  public get vmImage() {
    return this._vmImage;
  }
  public putVmImage(value: NotebooksInstanceVmImage) {
    this._vmImage.internalValue = value;
  }
  public resetVmImage() {
    this._vmImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmImageInput() {
    return this._vmImage.internalValue;
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
      id: cdktf.stringToTerraform(this._id),
      install_gpu_driver: cdktf.booleanToTerraform(this._installGpuDriver),
      instance_owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceOwners),
      kms_key: cdktf.stringToTerraform(this._kmsKey),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      machine_type: cdktf.stringToTerraform(this._machineType),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      nic_type: cdktf.stringToTerraform(this._nicType),
      no_proxy_access: cdktf.booleanToTerraform(this._noProxyAccess),
      no_public_ip: cdktf.booleanToTerraform(this._noPublicIp),
      no_remove_data_disk: cdktf.booleanToTerraform(this._noRemoveDataDisk),
      post_startup_script: cdktf.stringToTerraform(this._postStartupScript),
      project: cdktf.stringToTerraform(this._project),
      service_account: cdktf.stringToTerraform(this._serviceAccount),
      service_account_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceAccountScopes),
      subnet: cdktf.stringToTerraform(this._subnet),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      update_time: cdktf.stringToTerraform(this._updateTime),
      accelerator_config: notebooksInstanceAcceleratorConfigToTerraform(this._acceleratorConfig.internalValue),
      container_image: notebooksInstanceContainerImageToTerraform(this._containerImage.internalValue),
      reservation_affinity: notebooksInstanceReservationAffinityToTerraform(this._reservationAffinity.internalValue),
      shielded_instance_config: notebooksInstanceShieldedInstanceConfigToTerraform(this._shieldedInstanceConfig.internalValue),
      timeouts: notebooksInstanceTimeoutsToTerraform(this._timeouts.internalValue),
      vm_image: notebooksInstanceVmImageToTerraform(this._vmImage.internalValue),
    };
  }
}
