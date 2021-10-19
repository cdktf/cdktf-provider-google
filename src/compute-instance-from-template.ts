// https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeInstanceFromTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, allows Terraform to stop the instance to update its properties. If you try to update a property that requires stopping the instance without setting this field, the update will fail.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#allow_stopping_for_update ComputeInstanceFromTemplate#allow_stopping_for_update}
  */
  readonly allowStoppingForUpdate?: boolean | cdktf.IResolvable;
  /**
  * List of disks attached to the instance
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#attached_disk ComputeInstanceFromTemplate#attached_disk}
  */
  readonly attachedDisk?: ComputeInstanceFromTemplateAttachedDisk[];
  /**
  * Whether sending and receiving of packets with non-matching source or destination IPs is allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#can_ip_forward ComputeInstanceFromTemplate#can_ip_forward}
  */
  readonly canIpForward?: boolean | cdktf.IResolvable;
  /**
  * Whether deletion protection is enabled on this instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#deletion_protection ComputeInstanceFromTemplate#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * A brief description of the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#description ComputeInstanceFromTemplate#description}
  */
  readonly description?: string;
  /**
  * Desired status of the instance. Either "RUNNING" or "TERMINATED".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#desired_status ComputeInstanceFromTemplate#desired_status}
  */
  readonly desiredStatus?: string;
  /**
  * Whether the instance has virtual displays enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#enable_display ComputeInstanceFromTemplate#enable_display}
  */
  readonly enableDisplay?: boolean | cdktf.IResolvable;
  /**
  * List of the type and count of accelerator cards attached to the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#guest_accelerator ComputeInstanceFromTemplate#guest_accelerator}
  */
  readonly guestAccelerator?: ComputeInstanceFromTemplateGuestAccelerator[];
  /**
  * A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of labels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]*[a-z0-9]), concatenated with periods. The entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#hostname ComputeInstanceFromTemplate#hostname}
  */
  readonly hostname?: string;
  /**
  * A set of key/value label pairs assigned to the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#labels ComputeInstanceFromTemplate#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The machine type to create.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#machine_type ComputeInstanceFromTemplate#machine_type}
  */
  readonly machineType?: string;
  /**
  * Metadata key/value pairs made available within the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#metadata ComputeInstanceFromTemplate#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Metadata startup scripts made available within the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#metadata_startup_script ComputeInstanceFromTemplate#metadata_startup_script}
  */
  readonly metadataStartupScript?: string;
  /**
  * The minimum CPU platform specified for the VM instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#min_cpu_platform ComputeInstanceFromTemplate#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * The name of the instance. One of name or self_link must be provided.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#name ComputeInstanceFromTemplate#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the resource belongs. If self_link is provided, this value is ignored. If neither self_link nor project are provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#project ComputeInstanceFromTemplate#project}
  */
  readonly project?: string;
  /**
  * A list of short names or self_links of resource policies to attach to the instance. Currently a max of 1 resource policy is supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#resource_policies ComputeInstanceFromTemplate#resource_policies}
  */
  readonly resourcePolicies?: string[];
  /**
  * The scratch disks attached to the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#scratch_disk ComputeInstanceFromTemplate#scratch_disk}
  */
  readonly scratchDisk?: ComputeInstanceFromTemplateScratchDisk[];
  /**
  * The service account to attach to the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#service_account ComputeInstanceFromTemplate#service_account}
  */
  readonly serviceAccount?: ComputeInstanceFromTemplateServiceAccount[];
  /**
  * Name or self link of an instance template to create the instance based on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#source_instance_template ComputeInstanceFromTemplate#source_instance_template}
  */
  readonly sourceInstanceTemplate: string;
  /**
  * The list of tags attached to the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#tags ComputeInstanceFromTemplate#tags}
  */
  readonly tags?: string[];
  /**
  * The zone of the instance. If self_link is provided, this value is ignored. If neither self_link nor zone are provided, the provider zone is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#zone ComputeInstanceFromTemplate#zone}
  */
  readonly zone?: string;
  /**
  * advanced_machine_features block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#advanced_machine_features ComputeInstanceFromTemplate#advanced_machine_features}
  */
  readonly advancedMachineFeatures?: ComputeInstanceFromTemplateAdvancedMachineFeatures;
  /**
  * boot_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#boot_disk ComputeInstanceFromTemplate#boot_disk}
  */
  readonly bootDisk?: ComputeInstanceFromTemplateBootDisk;
  /**
  * confidential_instance_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#confidential_instance_config ComputeInstanceFromTemplate#confidential_instance_config}
  */
  readonly confidentialInstanceConfig?: ComputeInstanceFromTemplateConfidentialInstanceConfig;
  /**
  * network_interface block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#network_interface ComputeInstanceFromTemplate#network_interface}
  */
  readonly networkInterface?: ComputeInstanceFromTemplateNetworkInterface[];
  /**
  * reservation_affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#reservation_affinity ComputeInstanceFromTemplate#reservation_affinity}
  */
  readonly reservationAffinity?: ComputeInstanceFromTemplateReservationAffinity;
  /**
  * scheduling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#scheduling ComputeInstanceFromTemplate#scheduling}
  */
  readonly scheduling?: ComputeInstanceFromTemplateScheduling;
  /**
  * shielded_instance_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#shielded_instance_config ComputeInstanceFromTemplate#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: ComputeInstanceFromTemplateShieldedInstanceConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#timeouts ComputeInstanceFromTemplate#timeouts}
  */
  readonly timeouts?: ComputeInstanceFromTemplateTimeouts;
}
export interface ComputeInstanceFromTemplateAttachedDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#device_name ComputeInstanceFromTemplate#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#disk_encryption_key_raw ComputeInstanceFromTemplate#disk_encryption_key_raw}
  */
  readonly diskEncryptionKeyRaw?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#disk_encryption_key_sha256 ComputeInstanceFromTemplate#disk_encryption_key_sha256}
  */
  readonly diskEncryptionKeySha256?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#kms_key_self_link ComputeInstanceFromTemplate#kms_key_self_link}
  */
  readonly kmsKeySelfLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#mode ComputeInstanceFromTemplate#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#source ComputeInstanceFromTemplate#source}
  */
  readonly source?: string;
}

function computeInstanceFromTemplateAttachedDiskToTerraform(struct?: ComputeInstanceFromTemplateAttachedDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: struct!.deviceName === undefined ? null : cdktf.stringToTerraform(struct!.deviceName),
    disk_encryption_key_raw: struct!.diskEncryptionKeyRaw === undefined ? null : cdktf.stringToTerraform(struct!.diskEncryptionKeyRaw),
    disk_encryption_key_sha256: cdktf.stringToTerraform(struct!.diskEncryptionKeySha256),
    kms_key_self_link: struct!.kmsKeySelfLink === undefined ? null : cdktf.stringToTerraform(struct!.kmsKeySelfLink),
    mode: struct!.mode === undefined ? null : cdktf.stringToTerraform(struct!.mode),
    source: struct!.source === undefined ? null : cdktf.stringToTerraform(struct!.source),
  }
}

export interface ComputeInstanceFromTemplateGuestAccelerator {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#count ComputeInstanceFromTemplate#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#type ComputeInstanceFromTemplate#type}
  */
  readonly type?: string;
}

function computeInstanceFromTemplateGuestAcceleratorToTerraform(struct?: ComputeInstanceFromTemplateGuestAccelerator): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: struct!.count === undefined ? null : cdktf.numberToTerraform(struct!.count),
    type: struct!.type === undefined ? null : cdktf.stringToTerraform(struct!.type),
  }
}

export interface ComputeInstanceFromTemplateScratchDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#interface ComputeInstanceFromTemplate#interface}
  */
  readonly interface?: string;
}

function computeInstanceFromTemplateScratchDiskToTerraform(struct?: ComputeInstanceFromTemplateScratchDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: struct!.interface === undefined ? null : cdktf.stringToTerraform(struct!.interface),
  }
}

export interface ComputeInstanceFromTemplateServiceAccount {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#email ComputeInstanceFromTemplate#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#scopes ComputeInstanceFromTemplate#scopes}
  */
  readonly scopes?: string[];
}

function computeInstanceFromTemplateServiceAccountToTerraform(struct?: ComputeInstanceFromTemplateServiceAccount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: struct!.email === undefined ? null : cdktf.stringToTerraform(struct!.email),
    scopes: struct!.scopes === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.scopes),
  }
}

export interface ComputeInstanceFromTemplateAdvancedMachineFeatures {
  /**
  * Whether to enable nested virtualization or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#enable_nested_virtualization ComputeInstanceFromTemplate#enable_nested_virtualization}
  */
  readonly enableNestedVirtualization?: boolean | cdktf.IResolvable;
  /**
  * The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#threads_per_core ComputeInstanceFromTemplate#threads_per_core}
  */
  readonly threadsPerCore?: number;
}

function computeInstanceFromTemplateAdvancedMachineFeaturesToTerraform(struct?: ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference | ComputeInstanceFromTemplateAdvancedMachineFeatures): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_nested_virtualization: cdktf.booleanToTerraform(struct!.enableNestedVirtualization),
    threads_per_core: cdktf.numberToTerraform(struct!.threadsPerCore),
  }
}

export class ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enable_nested_virtualization - computed: true, optional: true, required: false
  private _enableNestedVirtualization?: boolean | cdktf.IResolvable | undefined; 
  public get enableNestedVirtualization() {
    return this.getBooleanAttribute('enable_nested_virtualization') as any;
  }
  public set enableNestedVirtualization(value: boolean | cdktf.IResolvable | undefined) {
    this._enableNestedVirtualization = value;
  }
  public resetEnableNestedVirtualization() {
    this._enableNestedVirtualization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNestedVirtualizationInput() {
    return this._enableNestedVirtualization
  }

  // threads_per_core - computed: true, optional: true, required: false
  private _threadsPerCore?: number | undefined; 
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }
  public set threadsPerCore(value: number | undefined) {
    this._threadsPerCore = value;
  }
  public resetThreadsPerCore() {
    this._threadsPerCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsPerCoreInput() {
    return this._threadsPerCore
  }
}
export interface ComputeInstanceFromTemplateBootDiskInitializeParams {
  /**
  * The image from which this disk was initialised.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#image ComputeInstanceFromTemplate#image}
  */
  readonly image?: string;
  /**
  * A set of key/value label pairs assigned to the disk.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#labels ComputeInstanceFromTemplate#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The size of the image in gigabytes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#size ComputeInstanceFromTemplate#size}
  */
  readonly size?: number;
  /**
  * The Google Compute Engine disk type. One of pd-standard, pd-ssd or pd-balanced.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#type ComputeInstanceFromTemplate#type}
  */
  readonly type?: string;
}

function computeInstanceFromTemplateBootDiskInitializeParamsToTerraform(struct?: ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference | ComputeInstanceFromTemplateBootDiskInitializeParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // image - computed: true, optional: true, required: false
  private _image?: string | undefined; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string | undefined) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image
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

  // size - computed: true, optional: true, required: false
  private _size?: number | undefined; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number | undefined) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size
  }

  // type - computed: true, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}
export interface ComputeInstanceFromTemplateBootDisk {
  /**
  * Whether the disk will be auto-deleted when the instance is deleted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#auto_delete ComputeInstanceFromTemplate#auto_delete}
  */
  readonly autoDelete?: boolean | cdktf.IResolvable;
  /**
  * Name with which attached disk will be accessible under /dev/disk/by-id/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#device_name ComputeInstanceFromTemplate#device_name}
  */
  readonly deviceName?: string;
  /**
  * A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#disk_encryption_key_raw ComputeInstanceFromTemplate#disk_encryption_key_raw}
  */
  readonly diskEncryptionKeyRaw?: string;
  /**
  * The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#kms_key_self_link ComputeInstanceFromTemplate#kms_key_self_link}
  */
  readonly kmsKeySelfLink?: string;
  /**
  * Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#mode ComputeInstanceFromTemplate#mode}
  */
  readonly mode?: string;
  /**
  * The name or self_link of the disk attached to this instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#source ComputeInstanceFromTemplate#source}
  */
  readonly source?: string;
  /**
  * initialize_params block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#initialize_params ComputeInstanceFromTemplate#initialize_params}
  */
  readonly initializeParams?: ComputeInstanceFromTemplateBootDiskInitializeParams;
}

function computeInstanceFromTemplateBootDiskToTerraform(struct?: ComputeInstanceFromTemplateBootDiskOutputReference | ComputeInstanceFromTemplateBootDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_delete: cdktf.booleanToTerraform(struct!.autoDelete),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    disk_encryption_key_raw: cdktf.stringToTerraform(struct!.diskEncryptionKeyRaw),
    kms_key_self_link: cdktf.stringToTerraform(struct!.kmsKeySelfLink),
    mode: cdktf.stringToTerraform(struct!.mode),
    source: cdktf.stringToTerraform(struct!.source),
    initialize_params: computeInstanceFromTemplateBootDiskInitializeParamsToTerraform(struct!.initializeParams),
  }
}

export class ComputeInstanceFromTemplateBootDiskOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // auto_delete - computed: true, optional: true, required: false
  private _autoDelete?: boolean | cdktf.IResolvable | undefined; 
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete') as any;
  }
  public set autoDelete(value: boolean | cdktf.IResolvable | undefined) {
    this._autoDelete = value;
  }
  public resetAutoDelete() {
    this._autoDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteInput() {
    return this._autoDelete
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string | undefined; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string | undefined) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName
  }

  // disk_encryption_key_raw - computed: true, optional: true, required: false
  private _diskEncryptionKeyRaw?: string | undefined; 
  public get diskEncryptionKeyRaw() {
    return this.getStringAttribute('disk_encryption_key_raw');
  }
  public set diskEncryptionKeyRaw(value: string | undefined) {
    this._diskEncryptionKeyRaw = value;
  }
  public resetDiskEncryptionKeyRaw() {
    this._diskEncryptionKeyRaw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionKeyRawInput() {
    return this._diskEncryptionKeyRaw
  }

  // kms_key_self_link - computed: true, optional: true, required: false
  private _kmsKeySelfLink?: string | undefined; 
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }
  public set kmsKeySelfLink(value: string | undefined) {
    this._kmsKeySelfLink = value;
  }
  public resetKmsKeySelfLink() {
    this._kmsKeySelfLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeySelfLinkInput() {
    return this._kmsKeySelfLink
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string | undefined; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string | undefined) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode
  }

  // source - computed: true, optional: true, required: false
  private _source?: string | undefined; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string | undefined) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source
  }

  // initialize_params - computed: false, optional: true, required: false
  private _initializeParams?: ComputeInstanceFromTemplateBootDiskInitializeParams | undefined; 
  private __initializeParamsOutput = new ComputeInstanceFromTemplateBootDiskInitializeParamsOutputReference(this as any, "initialize_params", true);
  public get initializeParams() {
    return this.__initializeParamsOutput;
  }
  public putInitializeParams(value: ComputeInstanceFromTemplateBootDiskInitializeParams | undefined) {
    this._initializeParams = value;
  }
  public resetInitializeParams() {
    this._initializeParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializeParamsInput() {
    return this._initializeParams
  }
}
export interface ComputeInstanceFromTemplateConfidentialInstanceConfig {
  /**
  * Defines whether the instance should have confidential compute enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#enable_confidential_compute ComputeInstanceFromTemplate#enable_confidential_compute}
  */
  readonly enableConfidentialCompute: boolean | cdktf.IResolvable;
}

function computeInstanceFromTemplateConfidentialInstanceConfigToTerraform(struct?: ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference | ComputeInstanceFromTemplateConfidentialInstanceConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_confidential_compute: cdktf.booleanToTerraform(struct!.enableConfidentialCompute),
  }
}

export class ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enable_confidential_compute - computed: false, optional: false, required: true
  private _enableConfidentialCompute?: boolean | cdktf.IResolvable; 
  public get enableConfidentialCompute() {
    return this.getBooleanAttribute('enable_confidential_compute') as any;
  }
  public set enableConfidentialCompute(value: boolean | cdktf.IResolvable) {
    this._enableConfidentialCompute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConfidentialComputeInput() {
    return this._enableConfidentialCompute
  }
}
export interface ComputeInstanceFromTemplateNetworkInterfaceAccessConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#nat_ip ComputeInstanceFromTemplate#nat_ip}
  */
  readonly natIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#network_tier ComputeInstanceFromTemplate#network_tier}
  */
  readonly networkTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#public_ptr_domain_name ComputeInstanceFromTemplate#public_ptr_domain_name}
  */
  readonly publicPtrDomainName?: string;
}

function computeInstanceFromTemplateNetworkInterfaceAccessConfigToTerraform(struct?: ComputeInstanceFromTemplateNetworkInterfaceAccessConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat_ip: cdktf.stringToTerraform(struct!.natIp),
    network_tier: cdktf.stringToTerraform(struct!.networkTier),
    public_ptr_domain_name: cdktf.stringToTerraform(struct!.publicPtrDomainName),
  }
}

export interface ComputeInstanceFromTemplateNetworkInterfaceAliasIpRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#ip_cidr_range ComputeInstanceFromTemplate#ip_cidr_range}
  */
  readonly ipCidrRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#subnetwork_range_name ComputeInstanceFromTemplate#subnetwork_range_name}
  */
  readonly subnetworkRangeName?: string;
}

function computeInstanceFromTemplateNetworkInterfaceAliasIpRangeToTerraform(struct?: ComputeInstanceFromTemplateNetworkInterfaceAliasIpRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_cidr_range: cdktf.stringToTerraform(struct!.ipCidrRange),
    subnetwork_range_name: cdktf.stringToTerraform(struct!.subnetworkRangeName),
  }
}

export interface ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig {
  /**
  * The service-level to be provided for IPv6 traffic when the subnet has an external subnet. Only PREMIUM tier is valid for IPv6
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#network_tier ComputeInstanceFromTemplate#network_tier}
  */
  readonly networkTier: string;
  /**
  * The domain name to be used when creating DNSv6 records for the external IPv6 ranges.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#public_ptr_domain_name ComputeInstanceFromTemplate#public_ptr_domain_name}
  */
  readonly publicPtrDomainName?: string;
}

function computeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigToTerraform(struct?: ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_tier: cdktf.stringToTerraform(struct!.networkTier),
    public_ptr_domain_name: cdktf.stringToTerraform(struct!.publicPtrDomainName),
  }
}

export interface ComputeInstanceFromTemplateNetworkInterface {
  /**
  * Access configurations, i.e. IPs via which this instance can be accessed via the Internet.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#access_config ComputeInstanceFromTemplate#access_config}
  */
  readonly accessConfig?: ComputeInstanceFromTemplateNetworkInterfaceAccessConfig[];
  /**
  * An array of alias IP ranges for this network interface.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#alias_ip_range ComputeInstanceFromTemplate#alias_ip_range}
  */
  readonly aliasIpRange?: ComputeInstanceFromTemplateNetworkInterfaceAliasIpRange[];
  /**
  * The name or self_link of the network attached to this interface.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#network ComputeInstanceFromTemplate#network}
  */
  readonly network?: string;
  /**
  * The private IP address assigned to the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#network_ip ComputeInstanceFromTemplate#network_ip}
  */
  readonly networkIp?: string;
  /**
  * The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#nic_type ComputeInstanceFromTemplate#nic_type}
  */
  readonly nicType?: string;
  /**
  * The stack type for this network interface to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#stack_type ComputeInstanceFromTemplate#stack_type}
  */
  readonly stackType?: string;
  /**
  * The name or self_link of the subnetwork attached to this interface.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#subnetwork ComputeInstanceFromTemplate#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * The project in which the subnetwork belongs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#subnetwork_project ComputeInstanceFromTemplate#subnetwork_project}
  */
  readonly subnetworkProject?: string;
  /**
  * ipv6_access_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#ipv6_access_config ComputeInstanceFromTemplate#ipv6_access_config}
  */
  readonly ipv6AccessConfig?: ComputeInstanceFromTemplateNetworkInterfaceIpv6AccessConfig[];
}

function computeInstanceFromTemplateNetworkInterfaceToTerraform(struct?: ComputeInstanceFromTemplateNetworkInterface): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_config: cdktf.listMapper(computeInstanceFromTemplateNetworkInterfaceAccessConfigToTerraform)(struct!.accessConfig),
    alias_ip_range: cdktf.listMapper(computeInstanceFromTemplateNetworkInterfaceAliasIpRangeToTerraform)(struct!.aliasIpRange),
    network: cdktf.stringToTerraform(struct!.network),
    network_ip: cdktf.stringToTerraform(struct!.networkIp),
    nic_type: cdktf.stringToTerraform(struct!.nicType),
    stack_type: cdktf.stringToTerraform(struct!.stackType),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
    subnetwork_project: cdktf.stringToTerraform(struct!.subnetworkProject),
    ipv6_access_config: cdktf.listMapper(computeInstanceFromTemplateNetworkInterfaceIpv6AccessConfigToTerraform)(struct!.ipv6AccessConfig),
  }
}

export interface ComputeInstanceFromTemplateReservationAffinitySpecificReservation {
  /**
  * Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#key ComputeInstanceFromTemplate#key}
  */
  readonly key: string;
  /**
  * Corresponds to the label values of a reservation resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#values ComputeInstanceFromTemplate#values}
  */
  readonly values: string[];
}

function computeInstanceFromTemplateReservationAffinitySpecificReservationToTerraform(struct?: ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference | ComputeInstanceFromTemplateReservationAffinitySpecificReservation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values
  }
}
export interface ComputeInstanceFromTemplateReservationAffinity {
  /**
  * The type of reservation from which this instance can consume resources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#type ComputeInstanceFromTemplate#type}
  */
  readonly type: string;
  /**
  * specific_reservation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#specific_reservation ComputeInstanceFromTemplate#specific_reservation}
  */
  readonly specificReservation?: ComputeInstanceFromTemplateReservationAffinitySpecificReservation;
}

function computeInstanceFromTemplateReservationAffinityToTerraform(struct?: ComputeInstanceFromTemplateReservationAffinityOutputReference | ComputeInstanceFromTemplateReservationAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    specific_reservation: computeInstanceFromTemplateReservationAffinitySpecificReservationToTerraform(struct!.specificReservation),
  }
}

export class ComputeInstanceFromTemplateReservationAffinityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // specific_reservation - computed: false, optional: true, required: false
  private _specificReservation?: ComputeInstanceFromTemplateReservationAffinitySpecificReservation | undefined; 
  private __specificReservationOutput = new ComputeInstanceFromTemplateReservationAffinitySpecificReservationOutputReference(this as any, "specific_reservation", true);
  public get specificReservation() {
    return this.__specificReservationOutput;
  }
  public putSpecificReservation(value: ComputeInstanceFromTemplateReservationAffinitySpecificReservation | undefined) {
    this._specificReservation = value;
  }
  public resetSpecificReservation() {
    this._specificReservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificReservationInput() {
    return this._specificReservation
  }
}
export interface ComputeInstanceFromTemplateSchedulingNodeAffinities {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#key ComputeInstanceFromTemplate#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#operator ComputeInstanceFromTemplate#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#values ComputeInstanceFromTemplate#values}
  */
  readonly values: string[];
}

function computeInstanceFromTemplateSchedulingNodeAffinitiesToTerraform(struct?: ComputeInstanceFromTemplateSchedulingNodeAffinities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ComputeInstanceFromTemplateScheduling {
  /**
  * Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#automatic_restart ComputeInstanceFromTemplate#automatic_restart}
  */
  readonly automaticRestart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#min_node_cpus ComputeInstanceFromTemplate#min_node_cpus}
  */
  readonly minNodeCpus?: number;
  /**
  * Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#on_host_maintenance ComputeInstanceFromTemplate#on_host_maintenance}
  */
  readonly onHostMaintenance?: string;
  /**
  * Whether the instance is preemptible.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#preemptible ComputeInstanceFromTemplate#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
  /**
  * node_affinities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#node_affinities ComputeInstanceFromTemplate#node_affinities}
  */
  readonly nodeAffinities?: ComputeInstanceFromTemplateSchedulingNodeAffinities[];
}

function computeInstanceFromTemplateSchedulingToTerraform(struct?: ComputeInstanceFromTemplateSchedulingOutputReference | ComputeInstanceFromTemplateScheduling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_restart: cdktf.booleanToTerraform(struct!.automaticRestart),
    min_node_cpus: cdktf.numberToTerraform(struct!.minNodeCpus),
    on_host_maintenance: cdktf.stringToTerraform(struct!.onHostMaintenance),
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
    node_affinities: cdktf.listMapper(computeInstanceFromTemplateSchedulingNodeAffinitiesToTerraform)(struct!.nodeAffinities),
  }
}

export class ComputeInstanceFromTemplateSchedulingOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // automatic_restart - computed: true, optional: true, required: false
  private _automaticRestart?: boolean | cdktf.IResolvable | undefined; 
  public get automaticRestart() {
    return this.getBooleanAttribute('automatic_restart') as any;
  }
  public set automaticRestart(value: boolean | cdktf.IResolvable | undefined) {
    this._automaticRestart = value;
  }
  public resetAutomaticRestart() {
    this._automaticRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticRestartInput() {
    return this._automaticRestart
  }

  // min_node_cpus - computed: true, optional: true, required: false
  private _minNodeCpus?: number | undefined; 
  public get minNodeCpus() {
    return this.getNumberAttribute('min_node_cpus');
  }
  public set minNodeCpus(value: number | undefined) {
    this._minNodeCpus = value;
  }
  public resetMinNodeCpus() {
    this._minNodeCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCpusInput() {
    return this._minNodeCpus
  }

  // on_host_maintenance - computed: true, optional: true, required: false
  private _onHostMaintenance?: string | undefined; 
  public get onHostMaintenance() {
    return this.getStringAttribute('on_host_maintenance');
  }
  public set onHostMaintenance(value: string | undefined) {
    this._onHostMaintenance = value;
  }
  public resetOnHostMaintenance() {
    this._onHostMaintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onHostMaintenanceInput() {
    return this._onHostMaintenance
  }

  // preemptible - computed: true, optional: true, required: false
  private _preemptible?: boolean | cdktf.IResolvable | undefined; 
  public get preemptible() {
    return this.getBooleanAttribute('preemptible') as any;
  }
  public set preemptible(value: boolean | cdktf.IResolvable | undefined) {
    this._preemptible = value;
  }
  public resetPreemptible() {
    this._preemptible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInput() {
    return this._preemptible
  }

  // node_affinities - computed: false, optional: true, required: false
  private _nodeAffinities?: ComputeInstanceFromTemplateSchedulingNodeAffinities[] | undefined; 
  public get nodeAffinities() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('node_affinities') as any;
  }
  public set nodeAffinities(value: ComputeInstanceFromTemplateSchedulingNodeAffinities[] | undefined) {
    this._nodeAffinities = value;
  }
  public resetNodeAffinities() {
    this._nodeAffinities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinitiesInput() {
    return this._nodeAffinities
  }
}
export interface ComputeInstanceFromTemplateShieldedInstanceConfig {
  /**
  * Whether integrity monitoring is enabled for the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#enable_integrity_monitoring ComputeInstanceFromTemplate#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Whether secure boot is enabled for the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#enable_secure_boot ComputeInstanceFromTemplate#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
  /**
  * Whether the instance uses vTPM.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#enable_vtpm ComputeInstanceFromTemplate#enable_vtpm}
  */
  readonly enableVtpm?: boolean | cdktf.IResolvable;
}

function computeInstanceFromTemplateShieldedInstanceConfigToTerraform(struct?: ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference | ComputeInstanceFromTemplateShieldedInstanceConfig): any {
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

export class ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enable_integrity_monitoring - computed: true, optional: true, required: false
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

  // enable_secure_boot - computed: true, optional: true, required: false
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

  // enable_vtpm - computed: true, optional: true, required: false
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
export interface ComputeInstanceFromTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#create ComputeInstanceFromTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#delete ComputeInstanceFromTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#update ComputeInstanceFromTemplate#update}
  */
  readonly update?: string;
}

function computeInstanceFromTemplateTimeoutsToTerraform(struct?: ComputeInstanceFromTemplateTimeoutsOutputReference | ComputeInstanceFromTemplateTimeouts): any {
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

export class ComputeInstanceFromTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html google_compute_instance_from_template}
*/
export class ComputeInstanceFromTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_instance_from_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html google_compute_instance_from_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeInstanceFromTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeInstanceFromTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_instance_from_template',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowStoppingForUpdate = config.allowStoppingForUpdate;
    this._attachedDisk = config.attachedDisk;
    this._canIpForward = config.canIpForward;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._desiredStatus = config.desiredStatus;
    this._enableDisplay = config.enableDisplay;
    this._guestAccelerator = config.guestAccelerator;
    this._hostname = config.hostname;
    this._labels = config.labels;
    this._machineType = config.machineType;
    this._metadata = config.metadata;
    this._metadataStartupScript = config.metadataStartupScript;
    this._minCpuPlatform = config.minCpuPlatform;
    this._name = config.name;
    this._project = config.project;
    this._resourcePolicies = config.resourcePolicies;
    this._scratchDisk = config.scratchDisk;
    this._serviceAccount = config.serviceAccount;
    this._sourceInstanceTemplate = config.sourceInstanceTemplate;
    this._tags = config.tags;
    this._zone = config.zone;
    this._advancedMachineFeatures = config.advancedMachineFeatures;
    this._bootDisk = config.bootDisk;
    this._confidentialInstanceConfig = config.confidentialInstanceConfig;
    this._networkInterface = config.networkInterface;
    this._reservationAffinity = config.reservationAffinity;
    this._scheduling = config.scheduling;
    this._shieldedInstanceConfig = config.shieldedInstanceConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_stopping_for_update - computed: true, optional: true, required: false
  private _allowStoppingForUpdate?: boolean | cdktf.IResolvable | undefined; 
  public get allowStoppingForUpdate() {
    return this.getBooleanAttribute('allow_stopping_for_update') as any;
  }
  public set allowStoppingForUpdate(value: boolean | cdktf.IResolvable | undefined) {
    this._allowStoppingForUpdate = value;
  }
  public resetAllowStoppingForUpdate() {
    this._allowStoppingForUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowStoppingForUpdateInput() {
    return this._allowStoppingForUpdate
  }

  // attached_disk - computed: true, optional: true, required: false
  private _attachedDisk?: ComputeInstanceFromTemplateAttachedDisk[] | undefined; 
  public get attachedDisk() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('attached_disk') as any;
  }
  public set attachedDisk(value: ComputeInstanceFromTemplateAttachedDisk[] | undefined) {
    this._attachedDisk = value;
  }
  public resetAttachedDisk() {
    this._attachedDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedDiskInput() {
    return this._attachedDisk
  }

  // can_ip_forward - computed: true, optional: true, required: false
  private _canIpForward?: boolean | cdktf.IResolvable | undefined; 
  public get canIpForward() {
    return this.getBooleanAttribute('can_ip_forward') as any;
  }
  public set canIpForward(value: boolean | cdktf.IResolvable | undefined) {
    this._canIpForward = value;
  }
  public resetCanIpForward() {
    this._canIpForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canIpForwardInput() {
    return this._canIpForward
  }

  // cpu_platform - computed: true, optional: false, required: false
  public get cpuPlatform() {
    return this.getStringAttribute('cpu_platform');
  }

  // current_status - computed: true, optional: false, required: false
  public get currentStatus() {
    return this.getStringAttribute('current_status');
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable | undefined; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection') as any;
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable | undefined) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection
  }

  // description - computed: true, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // desired_status - computed: true, optional: true, required: false
  private _desiredStatus?: string | undefined; 
  public get desiredStatus() {
    return this.getStringAttribute('desired_status');
  }
  public set desiredStatus(value: string | undefined) {
    this._desiredStatus = value;
  }
  public resetDesiredStatus() {
    this._desiredStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStatusInput() {
    return this._desiredStatus
  }

  // enable_display - computed: true, optional: true, required: false
  private _enableDisplay?: boolean | cdktf.IResolvable | undefined; 
  public get enableDisplay() {
    return this.getBooleanAttribute('enable_display') as any;
  }
  public set enableDisplay(value: boolean | cdktf.IResolvable | undefined) {
    this._enableDisplay = value;
  }
  public resetEnableDisplay() {
    this._enableDisplay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDisplayInput() {
    return this._enableDisplay
  }

  // guest_accelerator - computed: true, optional: true, required: false
  private _guestAccelerator?: ComputeInstanceFromTemplateGuestAccelerator[] | undefined; 
  public get guestAccelerator() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('guest_accelerator') as any;
  }
  public set guestAccelerator(value: ComputeInstanceFromTemplateGuestAccelerator[] | undefined) {
    this._guestAccelerator = value;
  }
  public resetGuestAccelerator() {
    this._guestAccelerator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorInput() {
    return this._guestAccelerator
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string | undefined; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string | undefined) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // label_fingerprint - computed: true, optional: false, required: false
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
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

  // machine_type - computed: true, optional: true, required: false
  private _machineType?: string | undefined; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string | undefined) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType
  }

  // metadata - computed: true, optional: true, required: false
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

  // metadata_fingerprint - computed: true, optional: false, required: false
  public get metadataFingerprint() {
    return this.getStringAttribute('metadata_fingerprint');
  }

  // metadata_startup_script - computed: true, optional: true, required: false
  private _metadataStartupScript?: string | undefined; 
  public get metadataStartupScript() {
    return this.getStringAttribute('metadata_startup_script');
  }
  public set metadataStartupScript(value: string | undefined) {
    this._metadataStartupScript = value;
  }
  public resetMetadataStartupScript() {
    this._metadataStartupScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataStartupScriptInput() {
    return this._metadataStartupScript
  }

  // min_cpu_platform - computed: true, optional: true, required: false
  private _minCpuPlatform?: string | undefined; 
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string | undefined) {
    this._minCpuPlatform = value;
  }
  public resetMinCpuPlatform() {
    this._minCpuPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuPlatformInput() {
    return this._minCpuPlatform
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

  // resource_policies - computed: true, optional: true, required: false
  private _resourcePolicies?: string[] | undefined; 
  public get resourcePolicies() {
    return this.getListAttribute('resource_policies');
  }
  public set resourcePolicies(value: string[] | undefined) {
    this._resourcePolicies = value;
  }
  public resetResourcePolicies() {
    this._resourcePolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoliciesInput() {
    return this._resourcePolicies
  }

  // scratch_disk - computed: true, optional: true, required: false
  private _scratchDisk?: ComputeInstanceFromTemplateScratchDisk[] | undefined; 
  public get scratchDisk() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('scratch_disk') as any;
  }
  public set scratchDisk(value: ComputeInstanceFromTemplateScratchDisk[] | undefined) {
    this._scratchDisk = value;
  }
  public resetScratchDisk() {
    this._scratchDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scratchDiskInput() {
    return this._scratchDisk
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // service_account - computed: true, optional: true, required: false
  private _serviceAccount?: ComputeInstanceFromTemplateServiceAccount[] | undefined; 
  public get serviceAccount() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('service_account') as any;
  }
  public set serviceAccount(value: ComputeInstanceFromTemplateServiceAccount[] | undefined) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount
  }

  // source_instance_template - computed: false, optional: false, required: true
  private _sourceInstanceTemplate?: string; 
  public get sourceInstanceTemplate() {
    return this.getStringAttribute('source_instance_template');
  }
  public set sourceInstanceTemplate(value: string) {
    this._sourceInstanceTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInstanceTemplateInput() {
    return this._sourceInstanceTemplate
  }

  // tags - computed: true, optional: true, required: false
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

  // tags_fingerprint - computed: true, optional: false, required: false
  public get tagsFingerprint() {
    return this.getStringAttribute('tags_fingerprint');
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string | undefined; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone
  }

  // advanced_machine_features - computed: false, optional: true, required: false
  private _advancedMachineFeatures?: ComputeInstanceFromTemplateAdvancedMachineFeatures | undefined; 
  private __advancedMachineFeaturesOutput = new ComputeInstanceFromTemplateAdvancedMachineFeaturesOutputReference(this as any, "advanced_machine_features", true);
  public get advancedMachineFeatures() {
    return this.__advancedMachineFeaturesOutput;
  }
  public putAdvancedMachineFeatures(value: ComputeInstanceFromTemplateAdvancedMachineFeatures | undefined) {
    this._advancedMachineFeatures = value;
  }
  public resetAdvancedMachineFeatures() {
    this._advancedMachineFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedMachineFeaturesInput() {
    return this._advancedMachineFeatures
  }

  // boot_disk - computed: false, optional: true, required: false
  private _bootDisk?: ComputeInstanceFromTemplateBootDisk | undefined; 
  private __bootDiskOutput = new ComputeInstanceFromTemplateBootDiskOutputReference(this as any, "boot_disk", true);
  public get bootDisk() {
    return this.__bootDiskOutput;
  }
  public putBootDisk(value: ComputeInstanceFromTemplateBootDisk | undefined) {
    this._bootDisk = value;
  }
  public resetBootDisk() {
    this._bootDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskInput() {
    return this._bootDisk
  }

  // confidential_instance_config - computed: false, optional: true, required: false
  private _confidentialInstanceConfig?: ComputeInstanceFromTemplateConfidentialInstanceConfig | undefined; 
  private __confidentialInstanceConfigOutput = new ComputeInstanceFromTemplateConfidentialInstanceConfigOutputReference(this as any, "confidential_instance_config", true);
  public get confidentialInstanceConfig() {
    return this.__confidentialInstanceConfigOutput;
  }
  public putConfidentialInstanceConfig(value: ComputeInstanceFromTemplateConfidentialInstanceConfig | undefined) {
    this._confidentialInstanceConfig = value;
  }
  public resetConfidentialInstanceConfig() {
    this._confidentialInstanceConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialInstanceConfigInput() {
    return this._confidentialInstanceConfig
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface?: ComputeInstanceFromTemplateNetworkInterface[] | undefined; 
  public get networkInterface() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network_interface') as any;
  }
  public set networkInterface(value: ComputeInstanceFromTemplateNetworkInterface[] | undefined) {
    this._networkInterface = value;
  }
  public resetNetworkInterface() {
    this._networkInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity?: ComputeInstanceFromTemplateReservationAffinity | undefined; 
  private __reservationAffinityOutput = new ComputeInstanceFromTemplateReservationAffinityOutputReference(this as any, "reservation_affinity", true);
  public get reservationAffinity() {
    return this.__reservationAffinityOutput;
  }
  public putReservationAffinity(value: ComputeInstanceFromTemplateReservationAffinity | undefined) {
    this._reservationAffinity = value;
  }
  public resetReservationAffinity() {
    this._reservationAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityInput() {
    return this._reservationAffinity
  }

  // scheduling - computed: false, optional: true, required: false
  private _scheduling?: ComputeInstanceFromTemplateScheduling | undefined; 
  private __schedulingOutput = new ComputeInstanceFromTemplateSchedulingOutputReference(this as any, "scheduling", true);
  public get scheduling() {
    return this.__schedulingOutput;
  }
  public putScheduling(value: ComputeInstanceFromTemplateScheduling | undefined) {
    this._scheduling = value;
  }
  public resetScheduling() {
    this._scheduling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingInput() {
    return this._scheduling
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig?: ComputeInstanceFromTemplateShieldedInstanceConfig | undefined; 
  private __shieldedInstanceConfigOutput = new ComputeInstanceFromTemplateShieldedInstanceConfigOutputReference(this as any, "shielded_instance_config", true);
  public get shieldedInstanceConfig() {
    return this.__shieldedInstanceConfigOutput;
  }
  public putShieldedInstanceConfig(value: ComputeInstanceFromTemplateShieldedInstanceConfig | undefined) {
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
  private _timeouts?: ComputeInstanceFromTemplateTimeouts | undefined; 
  private __timeoutsOutput = new ComputeInstanceFromTemplateTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ComputeInstanceFromTemplateTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_stopping_for_update: cdktf.booleanToTerraform(this._allowStoppingForUpdate),
      attached_disk: cdktf.listMapper(computeInstanceFromTemplateAttachedDiskToTerraform)(this._attachedDisk),
      can_ip_forward: cdktf.booleanToTerraform(this._canIpForward),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      desired_status: cdktf.stringToTerraform(this._desiredStatus),
      enable_display: cdktf.booleanToTerraform(this._enableDisplay),
      guest_accelerator: cdktf.listMapper(computeInstanceFromTemplateGuestAcceleratorToTerraform)(this._guestAccelerator),
      hostname: cdktf.stringToTerraform(this._hostname),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      machine_type: cdktf.stringToTerraform(this._machineType),
      metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
      metadata_startup_script: cdktf.stringToTerraform(this._metadataStartupScript),
      min_cpu_platform: cdktf.stringToTerraform(this._minCpuPlatform),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      resource_policies: cdktf.listMapper(cdktf.stringToTerraform)(this._resourcePolicies),
      scratch_disk: cdktf.listMapper(computeInstanceFromTemplateScratchDiskToTerraform)(this._scratchDisk),
      service_account: cdktf.listMapper(computeInstanceFromTemplateServiceAccountToTerraform)(this._serviceAccount),
      source_instance_template: cdktf.stringToTerraform(this._sourceInstanceTemplate),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      zone: cdktf.stringToTerraform(this._zone),
      advanced_machine_features: computeInstanceFromTemplateAdvancedMachineFeaturesToTerraform(this._advancedMachineFeatures),
      boot_disk: computeInstanceFromTemplateBootDiskToTerraform(this._bootDisk),
      confidential_instance_config: computeInstanceFromTemplateConfidentialInstanceConfigToTerraform(this._confidentialInstanceConfig),
      network_interface: cdktf.listMapper(computeInstanceFromTemplateNetworkInterfaceToTerraform)(this._networkInterface),
      reservation_affinity: computeInstanceFromTemplateReservationAffinityToTerraform(this._reservationAffinity),
      scheduling: computeInstanceFromTemplateSchedulingToTerraform(this._scheduling),
      shielded_instance_config: computeInstanceFromTemplateShieldedInstanceConfigToTerraform(this._shieldedInstanceConfig),
      timeouts: computeInstanceFromTemplateTimeoutsToTerraform(this._timeouts),
    };
  }
}
