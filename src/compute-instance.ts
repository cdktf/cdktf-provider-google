// https://www.terraform.io/docs/providers/google/r/compute_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, allows Terraform to stop the instance to update its properties. If you try to update a property that requires stopping the instance without setting this field, the update will fail.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#allow_stopping_for_update ComputeInstance#allow_stopping_for_update}
  */
  readonly allowStoppingForUpdate?: boolean | cdktf.IResolvable;
  /**
  * Whether sending and receiving of packets with non-matching source or destination IPs is allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#can_ip_forward ComputeInstance#can_ip_forward}
  */
  readonly canIpForward?: boolean | cdktf.IResolvable;
  /**
  * Whether deletion protection is enabled on this instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#deletion_protection ComputeInstance#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * A brief description of the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#description ComputeInstance#description}
  */
  readonly description?: string;
  /**
  * Desired status of the instance. Either "RUNNING" or "TERMINATED".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#desired_status ComputeInstance#desired_status}
  */
  readonly desiredStatus?: string;
  /**
  * Whether the instance has virtual displays enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#enable_display ComputeInstance#enable_display}
  */
  readonly enableDisplay?: boolean | cdktf.IResolvable;
  /**
  * List of the type and count of accelerator cards attached to the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#guest_accelerator ComputeInstance#guest_accelerator}
  */
  readonly guestAccelerator?: ComputeInstanceGuestAccelerator[] | cdktf.IResolvable;
  /**
  * A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of labels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]*[a-z0-9]), concatenated with periods. The entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#hostname ComputeInstance#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#id ComputeInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs assigned to the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#labels ComputeInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The machine type to create.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#machine_type ComputeInstance#machine_type}
  */
  readonly machineType: string;
  /**
  * Metadata key/value pairs made available within the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#metadata ComputeInstance#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Metadata startup scripts made available within the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#metadata_startup_script ComputeInstance#metadata_startup_script}
  */
  readonly metadataStartupScript?: string;
  /**
  * The minimum CPU platform specified for the VM instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#min_cpu_platform ComputeInstance#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * The name of the instance. One of name or self_link must be provided.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#name ComputeInstance#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the resource belongs. If self_link is provided, this value is ignored. If neither self_link nor project are provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#project ComputeInstance#project}
  */
  readonly project?: string;
  /**
  * A list of short names or self_links of resource policies to attach to the instance. Currently a max of 1 resource policy is supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#resource_policies ComputeInstance#resource_policies}
  */
  readonly resourcePolicies?: string[];
  /**
  * The list of tags attached to the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#tags ComputeInstance#tags}
  */
  readonly tags?: string[];
  /**
  * The zone of the instance. If self_link is provided, this value is ignored. If neither self_link nor zone are provided, the provider zone is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#zone ComputeInstance#zone}
  */
  readonly zone?: string;
  /**
  * advanced_machine_features block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#advanced_machine_features ComputeInstance#advanced_machine_features}
  */
  readonly advancedMachineFeatures?: ComputeInstanceAdvancedMachineFeatures;
  /**
  * attached_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#attached_disk ComputeInstance#attached_disk}
  */
  readonly attachedDisk?: ComputeInstanceAttachedDisk[] | cdktf.IResolvable;
  /**
  * boot_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#boot_disk ComputeInstance#boot_disk}
  */
  readonly bootDisk: ComputeInstanceBootDisk;
  /**
  * confidential_instance_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#confidential_instance_config ComputeInstance#confidential_instance_config}
  */
  readonly confidentialInstanceConfig?: ComputeInstanceConfidentialInstanceConfig;
  /**
  * network_interface block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#network_interface ComputeInstance#network_interface}
  */
  readonly networkInterface: ComputeInstanceNetworkInterface[] | cdktf.IResolvable;
  /**
  * reservation_affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#reservation_affinity ComputeInstance#reservation_affinity}
  */
  readonly reservationAffinity?: ComputeInstanceReservationAffinity;
  /**
  * scheduling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#scheduling ComputeInstance#scheduling}
  */
  readonly scheduling?: ComputeInstanceScheduling;
  /**
  * scratch_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#scratch_disk ComputeInstance#scratch_disk}
  */
  readonly scratchDisk?: ComputeInstanceScratchDisk[] | cdktf.IResolvable;
  /**
  * service_account block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#service_account ComputeInstance#service_account}
  */
  readonly serviceAccount?: ComputeInstanceServiceAccount;
  /**
  * shielded_instance_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#shielded_instance_config ComputeInstance#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: ComputeInstanceShieldedInstanceConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#timeouts ComputeInstance#timeouts}
  */
  readonly timeouts?: ComputeInstanceTimeouts;
}
export interface ComputeInstanceGuestAccelerator {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#count ComputeInstance#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#type ComputeInstance#type}
  */
  readonly type?: string;
}

export function computeInstanceGuestAcceleratorToTerraform(struct?: ComputeInstanceGuestAccelerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: struct!.count === undefined ? null : cdktf.numberToTerraform(struct!.count),
    type: struct!.type === undefined ? null : cdktf.stringToTerraform(struct!.type),
  }
}

export class ComputeInstanceGuestAcceleratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeInstanceGuestAccelerator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGuestAccelerator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._type = value.type;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ComputeInstanceGuestAcceleratorList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceGuestAccelerator[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeInstanceGuestAcceleratorOutputReference {
    return new ComputeInstanceGuestAcceleratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceAdvancedMachineFeatures {
  /**
  * Whether to enable nested virtualization or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#enable_nested_virtualization ComputeInstance#enable_nested_virtualization}
  */
  readonly enableNestedVirtualization?: boolean | cdktf.IResolvable;
  /**
  * The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#threads_per_core ComputeInstance#threads_per_core}
  */
  readonly threadsPerCore?: number;
}

export function computeInstanceAdvancedMachineFeaturesToTerraform(struct?: ComputeInstanceAdvancedMachineFeaturesOutputReference | ComputeInstanceAdvancedMachineFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_nested_virtualization: cdktf.booleanToTerraform(struct!.enableNestedVirtualization),
    threads_per_core: cdktf.numberToTerraform(struct!.threadsPerCore),
  }
}

export class ComputeInstanceAdvancedMachineFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceAdvancedMachineFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableNestedVirtualization !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNestedVirtualization = this._enableNestedVirtualization;
    }
    if (this._threadsPerCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadsPerCore = this._threadsPerCore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceAdvancedMachineFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableNestedVirtualization = undefined;
      this._threadsPerCore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableNestedVirtualization = value.enableNestedVirtualization;
      this._threadsPerCore = value.threadsPerCore;
    }
  }

  // enable_nested_virtualization - computed: false, optional: true, required: false
  private _enableNestedVirtualization?: boolean | cdktf.IResolvable; 
  public get enableNestedVirtualization() {
    return this.getBooleanAttribute('enable_nested_virtualization');
  }
  public set enableNestedVirtualization(value: boolean | cdktf.IResolvable) {
    this._enableNestedVirtualization = value;
  }
  public resetEnableNestedVirtualization() {
    this._enableNestedVirtualization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNestedVirtualizationInput() {
    return this._enableNestedVirtualization;
  }

  // threads_per_core - computed: false, optional: true, required: false
  private _threadsPerCore?: number; 
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }
  public set threadsPerCore(value: number) {
    this._threadsPerCore = value;
  }
  public resetThreadsPerCore() {
    this._threadsPerCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsPerCoreInput() {
    return this._threadsPerCore;
  }
}
export interface ComputeInstanceAttachedDisk {
  /**
  * Name with which the attached disk is accessible under /dev/disk/by-id/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#device_name ComputeInstance#device_name}
  */
  readonly deviceName?: string;
  /**
  * A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#disk_encryption_key_raw ComputeInstance#disk_encryption_key_raw}
  */
  readonly diskEncryptionKeyRaw?: string;
  /**
  * The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#kms_key_self_link ComputeInstance#kms_key_self_link}
  */
  readonly kmsKeySelfLink?: string;
  /**
  * Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#mode ComputeInstance#mode}
  */
  readonly mode?: string;
  /**
  * The name or self_link of the disk attached to this instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#source ComputeInstance#source}
  */
  readonly source: string;
}

export function computeInstanceAttachedDiskToTerraform(struct?: ComputeInstanceAttachedDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    disk_encryption_key_raw: cdktf.stringToTerraform(struct!.diskEncryptionKeyRaw),
    kms_key_self_link: cdktf.stringToTerraform(struct!.kmsKeySelfLink),
    mode: cdktf.stringToTerraform(struct!.mode),
    source: cdktf.stringToTerraform(struct!.source),
  }
}

export class ComputeInstanceAttachedDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeInstanceAttachedDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._diskEncryptionKeyRaw !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionKeyRaw = this._diskEncryptionKeyRaw;
    }
    if (this._kmsKeySelfLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeySelfLink = this._kmsKeySelfLink;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceAttachedDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
      this._diskEncryptionKeyRaw = undefined;
      this._kmsKeySelfLink = undefined;
      this._mode = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceName = value.deviceName;
      this._diskEncryptionKeyRaw = value.diskEncryptionKeyRaw;
      this._kmsKeySelfLink = value.kmsKeySelfLink;
      this._mode = value.mode;
      this._source = value.source;
    }
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // disk_encryption_key_raw - computed: false, optional: true, required: false
  private _diskEncryptionKeyRaw?: string; 
  public get diskEncryptionKeyRaw() {
    return this.getStringAttribute('disk_encryption_key_raw');
  }
  public set diskEncryptionKeyRaw(value: string) {
    this._diskEncryptionKeyRaw = value;
  }
  public resetDiskEncryptionKeyRaw() {
    this._diskEncryptionKeyRaw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionKeyRawInput() {
    return this._diskEncryptionKeyRaw;
  }

  // disk_encryption_key_sha256 - computed: true, optional: false, required: false
  public get diskEncryptionKeySha256() {
    return this.getStringAttribute('disk_encryption_key_sha256');
  }

  // kms_key_self_link - computed: true, optional: true, required: false
  private _kmsKeySelfLink?: string; 
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }
  public set kmsKeySelfLink(value: string) {
    this._kmsKeySelfLink = value;
  }
  public resetKmsKeySelfLink() {
    this._kmsKeySelfLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeySelfLinkInput() {
    return this._kmsKeySelfLink;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ComputeInstanceAttachedDiskList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceAttachedDisk[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeInstanceAttachedDiskOutputReference {
    return new ComputeInstanceAttachedDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceBootDiskInitializeParams {
  /**
  * The image from which this disk was initialised.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#image ComputeInstance#image}
  */
  readonly image?: string;
  /**
  * A set of key/value label pairs assigned to the disk.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#labels ComputeInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The size of the image in gigabytes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#size ComputeInstance#size}
  */
  readonly size?: number;
  /**
  * The Google Compute Engine disk type. Such as pd-standard, pd-ssd or pd-balanced.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#type ComputeInstance#type}
  */
  readonly type?: string;
}

export function computeInstanceBootDiskInitializeParamsToTerraform(struct?: ComputeInstanceBootDiskInitializeParamsOutputReference | ComputeInstanceBootDiskInitializeParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ComputeInstanceBootDiskInitializeParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceBootDiskInitializeParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceBootDiskInitializeParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._image = undefined;
      this._labels = undefined;
      this._size = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._image = value.image;
      this._labels = value.labels;
      this._size = value.size;
      this._type = value.type;
    }
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
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

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ComputeInstanceBootDisk {
  /**
  * Whether the disk will be auto-deleted when the instance is deleted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#auto_delete ComputeInstance#auto_delete}
  */
  readonly autoDelete?: boolean | cdktf.IResolvable;
  /**
  * Name with which attached disk will be accessible under /dev/disk/by-id/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#device_name ComputeInstance#device_name}
  */
  readonly deviceName?: string;
  /**
  * A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#disk_encryption_key_raw ComputeInstance#disk_encryption_key_raw}
  */
  readonly diskEncryptionKeyRaw?: string;
  /**
  * The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#kms_key_self_link ComputeInstance#kms_key_self_link}
  */
  readonly kmsKeySelfLink?: string;
  /**
  * Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#mode ComputeInstance#mode}
  */
  readonly mode?: string;
  /**
  * The name or self_link of the disk attached to this instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#source ComputeInstance#source}
  */
  readonly source?: string;
  /**
  * initialize_params block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#initialize_params ComputeInstance#initialize_params}
  */
  readonly initializeParams?: ComputeInstanceBootDiskInitializeParams;
}

export function computeInstanceBootDiskToTerraform(struct?: ComputeInstanceBootDiskOutputReference | ComputeInstanceBootDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
    initialize_params: computeInstanceBootDiskInitializeParamsToTerraform(struct!.initializeParams),
  }
}

export class ComputeInstanceBootDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceBootDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDelete = this._autoDelete;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._diskEncryptionKeyRaw !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionKeyRaw = this._diskEncryptionKeyRaw;
    }
    if (this._kmsKeySelfLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeySelfLink = this._kmsKeySelfLink;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._initializeParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initializeParams = this._initializeParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceBootDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoDelete = undefined;
      this._deviceName = undefined;
      this._diskEncryptionKeyRaw = undefined;
      this._kmsKeySelfLink = undefined;
      this._mode = undefined;
      this._source = undefined;
      this._initializeParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoDelete = value.autoDelete;
      this._deviceName = value.deviceName;
      this._diskEncryptionKeyRaw = value.diskEncryptionKeyRaw;
      this._kmsKeySelfLink = value.kmsKeySelfLink;
      this._mode = value.mode;
      this._source = value.source;
      this._initializeParams.internalValue = value.initializeParams;
    }
  }

  // auto_delete - computed: false, optional: true, required: false
  private _autoDelete?: boolean | cdktf.IResolvable; 
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete');
  }
  public set autoDelete(value: boolean | cdktf.IResolvable) {
    this._autoDelete = value;
  }
  public resetAutoDelete() {
    this._autoDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteInput() {
    return this._autoDelete;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // disk_encryption_key_raw - computed: false, optional: true, required: false
  private _diskEncryptionKeyRaw?: string; 
  public get diskEncryptionKeyRaw() {
    return this.getStringAttribute('disk_encryption_key_raw');
  }
  public set diskEncryptionKeyRaw(value: string) {
    this._diskEncryptionKeyRaw = value;
  }
  public resetDiskEncryptionKeyRaw() {
    this._diskEncryptionKeyRaw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionKeyRawInput() {
    return this._diskEncryptionKeyRaw;
  }

  // disk_encryption_key_sha256 - computed: true, optional: false, required: false
  public get diskEncryptionKeySha256() {
    return this.getStringAttribute('disk_encryption_key_sha256');
  }

  // kms_key_self_link - computed: true, optional: true, required: false
  private _kmsKeySelfLink?: string; 
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }
  public set kmsKeySelfLink(value: string) {
    this._kmsKeySelfLink = value;
  }
  public resetKmsKeySelfLink() {
    this._kmsKeySelfLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeySelfLinkInput() {
    return this._kmsKeySelfLink;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // initialize_params - computed: false, optional: true, required: false
  private _initializeParams = new ComputeInstanceBootDiskInitializeParamsOutputReference(this, "initialize_params");
  public get initializeParams() {
    return this._initializeParams;
  }
  public putInitializeParams(value: ComputeInstanceBootDiskInitializeParams) {
    this._initializeParams.internalValue = value;
  }
  public resetInitializeParams() {
    this._initializeParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializeParamsInput() {
    return this._initializeParams.internalValue;
  }
}
export interface ComputeInstanceConfidentialInstanceConfig {
  /**
  * Defines whether the instance should have confidential compute enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#enable_confidential_compute ComputeInstance#enable_confidential_compute}
  */
  readonly enableConfidentialCompute: boolean | cdktf.IResolvable;
}

export function computeInstanceConfidentialInstanceConfigToTerraform(struct?: ComputeInstanceConfidentialInstanceConfigOutputReference | ComputeInstanceConfidentialInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_confidential_compute: cdktf.booleanToTerraform(struct!.enableConfidentialCompute),
  }
}

export class ComputeInstanceConfidentialInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceConfidentialInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableConfidentialCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConfidentialCompute = this._enableConfidentialCompute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceConfidentialInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableConfidentialCompute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableConfidentialCompute = value.enableConfidentialCompute;
    }
  }

  // enable_confidential_compute - computed: false, optional: false, required: true
  private _enableConfidentialCompute?: boolean | cdktf.IResolvable; 
  public get enableConfidentialCompute() {
    return this.getBooleanAttribute('enable_confidential_compute');
  }
  public set enableConfidentialCompute(value: boolean | cdktf.IResolvable) {
    this._enableConfidentialCompute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConfidentialComputeInput() {
    return this._enableConfidentialCompute;
  }
}
export interface ComputeInstanceNetworkInterfaceAccessConfig {
  /**
  * The IP address that is be 1:1 mapped to the instance's network ip.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#nat_ip ComputeInstance#nat_ip}
  */
  readonly natIp?: string;
  /**
  * The networking tier used for configuring this instance. One of PREMIUM or STANDARD.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#network_tier ComputeInstance#network_tier}
  */
  readonly networkTier?: string;
  /**
  * The DNS domain name for the public PTR record.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#public_ptr_domain_name ComputeInstance#public_ptr_domain_name}
  */
  readonly publicPtrDomainName?: string;
}

export function computeInstanceNetworkInterfaceAccessConfigToTerraform(struct?: ComputeInstanceNetworkInterfaceAccessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat_ip: cdktf.stringToTerraform(struct!.natIp),
    network_tier: cdktf.stringToTerraform(struct!.networkTier),
    public_ptr_domain_name: cdktf.stringToTerraform(struct!.publicPtrDomainName),
  }
}

export class ComputeInstanceNetworkInterfaceAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeInstanceNetworkInterfaceAccessConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._natIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.natIp = this._natIp;
    }
    if (this._networkTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTier = this._networkTier;
    }
    if (this._publicPtrDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicPtrDomainName = this._publicPtrDomainName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceNetworkInterfaceAccessConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._natIp = undefined;
      this._networkTier = undefined;
      this._publicPtrDomainName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._natIp = value.natIp;
      this._networkTier = value.networkTier;
      this._publicPtrDomainName = value.publicPtrDomainName;
    }
  }

  // nat_ip - computed: true, optional: true, required: false
  private _natIp?: string; 
  public get natIp() {
    return this.getStringAttribute('nat_ip');
  }
  public set natIp(value: string) {
    this._natIp = value;
  }
  public resetNatIp() {
    this._natIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpInput() {
    return this._natIp;
  }

  // network_tier - computed: true, optional: true, required: false
  private _networkTier?: string; 
  public get networkTier() {
    return this.getStringAttribute('network_tier');
  }
  public set networkTier(value: string) {
    this._networkTier = value;
  }
  public resetNetworkTier() {
    this._networkTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTierInput() {
    return this._networkTier;
  }

  // public_ptr_domain_name - computed: false, optional: true, required: false
  private _publicPtrDomainName?: string; 
  public get publicPtrDomainName() {
    return this.getStringAttribute('public_ptr_domain_name');
  }
  public set publicPtrDomainName(value: string) {
    this._publicPtrDomainName = value;
  }
  public resetPublicPtrDomainName() {
    this._publicPtrDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicPtrDomainNameInput() {
    return this._publicPtrDomainName;
  }
}

export class ComputeInstanceNetworkInterfaceAccessConfigList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceNetworkInterfaceAccessConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeInstanceNetworkInterfaceAccessConfigOutputReference {
    return new ComputeInstanceNetworkInterfaceAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceNetworkInterfaceAliasIpRange {
  /**
  * The IP CIDR range represented by this alias IP range.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#ip_cidr_range ComputeInstance#ip_cidr_range}
  */
  readonly ipCidrRange: string;
  /**
  * The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#subnetwork_range_name ComputeInstance#subnetwork_range_name}
  */
  readonly subnetworkRangeName?: string;
}

export function computeInstanceNetworkInterfaceAliasIpRangeToTerraform(struct?: ComputeInstanceNetworkInterfaceAliasIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_cidr_range: cdktf.stringToTerraform(struct!.ipCidrRange),
    subnetwork_range_name: cdktf.stringToTerraform(struct!.subnetworkRangeName),
  }
}

export class ComputeInstanceNetworkInterfaceAliasIpRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeInstanceNetworkInterfaceAliasIpRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipCidrRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipCidrRange = this._ipCidrRange;
    }
    if (this._subnetworkRangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetworkRangeName = this._subnetworkRangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceNetworkInterfaceAliasIpRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipCidrRange = undefined;
      this._subnetworkRangeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipCidrRange = value.ipCidrRange;
      this._subnetworkRangeName = value.subnetworkRangeName;
    }
  }

  // ip_cidr_range - computed: false, optional: false, required: true
  private _ipCidrRange?: string; 
  public get ipCidrRange() {
    return this.getStringAttribute('ip_cidr_range');
  }
  public set ipCidrRange(value: string) {
    this._ipCidrRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCidrRangeInput() {
    return this._ipCidrRange;
  }

  // subnetwork_range_name - computed: false, optional: true, required: false
  private _subnetworkRangeName?: string; 
  public get subnetworkRangeName() {
    return this.getStringAttribute('subnetwork_range_name');
  }
  public set subnetworkRangeName(value: string) {
    this._subnetworkRangeName = value;
  }
  public resetSubnetworkRangeName() {
    this._subnetworkRangeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkRangeNameInput() {
    return this._subnetworkRangeName;
  }
}

export class ComputeInstanceNetworkInterfaceAliasIpRangeList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceNetworkInterfaceAliasIpRange[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeInstanceNetworkInterfaceAliasIpRangeOutputReference {
    return new ComputeInstanceNetworkInterfaceAliasIpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceNetworkInterfaceIpv6AccessConfig {
  /**
  * The service-level to be provided for IPv6 traffic when the subnet has an external subnet. Only PREMIUM tier is valid for IPv6
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#network_tier ComputeInstance#network_tier}
  */
  readonly networkTier: string;
  /**
  * The domain name to be used when creating DNSv6 records for the external IPv6 ranges.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#public_ptr_domain_name ComputeInstance#public_ptr_domain_name}
  */
  readonly publicPtrDomainName?: string;
}

export function computeInstanceNetworkInterfaceIpv6AccessConfigToTerraform(struct?: ComputeInstanceNetworkInterfaceIpv6AccessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_tier: cdktf.stringToTerraform(struct!.networkTier),
    public_ptr_domain_name: cdktf.stringToTerraform(struct!.publicPtrDomainName),
  }
}

export class ComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeInstanceNetworkInterfaceIpv6AccessConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTier = this._networkTier;
    }
    if (this._publicPtrDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicPtrDomainName = this._publicPtrDomainName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceNetworkInterfaceIpv6AccessConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkTier = undefined;
      this._publicPtrDomainName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkTier = value.networkTier;
      this._publicPtrDomainName = value.publicPtrDomainName;
    }
  }

  // external_ipv6 - computed: true, optional: false, required: false
  public get externalIpv6() {
    return this.getStringAttribute('external_ipv6');
  }

  // external_ipv6_prefix_length - computed: true, optional: false, required: false
  public get externalIpv6PrefixLength() {
    return this.getStringAttribute('external_ipv6_prefix_length');
  }

  // network_tier - computed: false, optional: false, required: true
  private _networkTier?: string; 
  public get networkTier() {
    return this.getStringAttribute('network_tier');
  }
  public set networkTier(value: string) {
    this._networkTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTierInput() {
    return this._networkTier;
  }

  // public_ptr_domain_name - computed: false, optional: true, required: false
  private _publicPtrDomainName?: string; 
  public get publicPtrDomainName() {
    return this.getStringAttribute('public_ptr_domain_name');
  }
  public set publicPtrDomainName(value: string) {
    this._publicPtrDomainName = value;
  }
  public resetPublicPtrDomainName() {
    this._publicPtrDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicPtrDomainNameInput() {
    return this._publicPtrDomainName;
  }
}

export class ComputeInstanceNetworkInterfaceIpv6AccessConfigList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceNetworkInterfaceIpv6AccessConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference {
    return new ComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceNetworkInterface {
  /**
  * The name or self_link of the network attached to this interface.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#network ComputeInstance#network}
  */
  readonly network?: string;
  /**
  * The private IP address assigned to the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#network_ip ComputeInstance#network_ip}
  */
  readonly networkIp?: string;
  /**
  * The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#nic_type ComputeInstance#nic_type}
  */
  readonly nicType?: string;
  /**
  * The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#queue_count ComputeInstance#queue_count}
  */
  readonly queueCount?: number;
  /**
  * The stack type for this network interface to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#stack_type ComputeInstance#stack_type}
  */
  readonly stackType?: string;
  /**
  * The name or self_link of the subnetwork attached to this interface.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#subnetwork ComputeInstance#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * The project in which the subnetwork belongs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#subnetwork_project ComputeInstance#subnetwork_project}
  */
  readonly subnetworkProject?: string;
  /**
  * access_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#access_config ComputeInstance#access_config}
  */
  readonly accessConfig?: ComputeInstanceNetworkInterfaceAccessConfig[] | cdktf.IResolvable;
  /**
  * alias_ip_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#alias_ip_range ComputeInstance#alias_ip_range}
  */
  readonly aliasIpRange?: ComputeInstanceNetworkInterfaceAliasIpRange[] | cdktf.IResolvable;
  /**
  * ipv6_access_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#ipv6_access_config ComputeInstance#ipv6_access_config}
  */
  readonly ipv6AccessConfig?: ComputeInstanceNetworkInterfaceIpv6AccessConfig[] | cdktf.IResolvable;
}

export function computeInstanceNetworkInterfaceToTerraform(struct?: ComputeInstanceNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    network_ip: cdktf.stringToTerraform(struct!.networkIp),
    nic_type: cdktf.stringToTerraform(struct!.nicType),
    queue_count: cdktf.numberToTerraform(struct!.queueCount),
    stack_type: cdktf.stringToTerraform(struct!.stackType),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
    subnetwork_project: cdktf.stringToTerraform(struct!.subnetworkProject),
    access_config: cdktf.listMapper(computeInstanceNetworkInterfaceAccessConfigToTerraform, true)(struct!.accessConfig),
    alias_ip_range: cdktf.listMapper(computeInstanceNetworkInterfaceAliasIpRangeToTerraform, true)(struct!.aliasIpRange),
    ipv6_access_config: cdktf.listMapper(computeInstanceNetworkInterfaceIpv6AccessConfigToTerraform, true)(struct!.ipv6AccessConfig),
  }
}

export class ComputeInstanceNetworkInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeInstanceNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._networkIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkIp = this._networkIp;
    }
    if (this._nicType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nicType = this._nicType;
    }
    if (this._queueCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueCount = this._queueCount;
    }
    if (this._stackType !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackType = this._stackType;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    if (this._subnetworkProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetworkProject = this._subnetworkProject;
    }
    if (this._accessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessConfig = this._accessConfig?.internalValue;
    }
    if (this._aliasIpRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliasIpRange = this._aliasIpRange?.internalValue;
    }
    if (this._ipv6AccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AccessConfig = this._ipv6AccessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._networkIp = undefined;
      this._nicType = undefined;
      this._queueCount = undefined;
      this._stackType = undefined;
      this._subnetwork = undefined;
      this._subnetworkProject = undefined;
      this._accessConfig.internalValue = undefined;
      this._aliasIpRange.internalValue = undefined;
      this._ipv6AccessConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._networkIp = value.networkIp;
      this._nicType = value.nicType;
      this._queueCount = value.queueCount;
      this._stackType = value.stackType;
      this._subnetwork = value.subnetwork;
      this._subnetworkProject = value.subnetworkProject;
      this._accessConfig.internalValue = value.accessConfig;
      this._aliasIpRange.internalValue = value.aliasIpRange;
      this._ipv6AccessConfig.internalValue = value.ipv6AccessConfig;
    }
  }

  // ipv6_access_type - computed: true, optional: false, required: false
  public get ipv6AccessType() {
    return this.getStringAttribute('ipv6_access_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // network_ip - computed: true, optional: true, required: false
  private _networkIp?: string; 
  public get networkIp() {
    return this.getStringAttribute('network_ip');
  }
  public set networkIp(value: string) {
    this._networkIp = value;
  }
  public resetNetworkIp() {
    this._networkIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIpInput() {
    return this._networkIp;
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

  // queue_count - computed: false, optional: true, required: false
  private _queueCount?: number; 
  public get queueCount() {
    return this.getNumberAttribute('queue_count');
  }
  public set queueCount(value: number) {
    this._queueCount = value;
  }
  public resetQueueCount() {
    this._queueCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueCountInput() {
    return this._queueCount;
  }

  // stack_type - computed: true, optional: true, required: false
  private _stackType?: string; 
  public get stackType() {
    return this.getStringAttribute('stack_type');
  }
  public set stackType(value: string) {
    this._stackType = value;
  }
  public resetStackType() {
    this._stackType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackTypeInput() {
    return this._stackType;
  }

  // subnetwork - computed: true, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }

  // subnetwork_project - computed: true, optional: true, required: false
  private _subnetworkProject?: string; 
  public get subnetworkProject() {
    return this.getStringAttribute('subnetwork_project');
  }
  public set subnetworkProject(value: string) {
    this._subnetworkProject = value;
  }
  public resetSubnetworkProject() {
    this._subnetworkProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkProjectInput() {
    return this._subnetworkProject;
  }

  // access_config - computed: false, optional: true, required: false
  private _accessConfig = new ComputeInstanceNetworkInterfaceAccessConfigList(this, "access_config", false);
  public get accessConfig() {
    return this._accessConfig;
  }
  public putAccessConfig(value: ComputeInstanceNetworkInterfaceAccessConfig[] | cdktf.IResolvable) {
    this._accessConfig.internalValue = value;
  }
  public resetAccessConfig() {
    this._accessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigInput() {
    return this._accessConfig.internalValue;
  }

  // alias_ip_range - computed: false, optional: true, required: false
  private _aliasIpRange = new ComputeInstanceNetworkInterfaceAliasIpRangeList(this, "alias_ip_range", false);
  public get aliasIpRange() {
    return this._aliasIpRange;
  }
  public putAliasIpRange(value: ComputeInstanceNetworkInterfaceAliasIpRange[] | cdktf.IResolvable) {
    this._aliasIpRange.internalValue = value;
  }
  public resetAliasIpRange() {
    this._aliasIpRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasIpRangeInput() {
    return this._aliasIpRange.internalValue;
  }

  // ipv6_access_config - computed: false, optional: true, required: false
  private _ipv6AccessConfig = new ComputeInstanceNetworkInterfaceIpv6AccessConfigList(this, "ipv6_access_config", false);
  public get ipv6AccessConfig() {
    return this._ipv6AccessConfig;
  }
  public putIpv6AccessConfig(value: ComputeInstanceNetworkInterfaceIpv6AccessConfig[] | cdktf.IResolvable) {
    this._ipv6AccessConfig.internalValue = value;
  }
  public resetIpv6AccessConfig() {
    this._ipv6AccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AccessConfigInput() {
    return this._ipv6AccessConfig.internalValue;
  }
}

export class ComputeInstanceNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceNetworkInterface[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeInstanceNetworkInterfaceOutputReference {
    return new ComputeInstanceNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceReservationAffinitySpecificReservation {
  /**
  * Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#key ComputeInstance#key}
  */
  readonly key: string;
  /**
  * Corresponds to the label values of a reservation resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#values ComputeInstance#values}
  */
  readonly values: string[];
}

export function computeInstanceReservationAffinitySpecificReservationToTerraform(struct?: ComputeInstanceReservationAffinitySpecificReservationOutputReference | ComputeInstanceReservationAffinitySpecificReservation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class ComputeInstanceReservationAffinitySpecificReservationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceReservationAffinitySpecificReservation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: ComputeInstanceReservationAffinitySpecificReservation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._values = value.values;
    }
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
    return this._key;
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
    return this._values;
  }
}
export interface ComputeInstanceReservationAffinity {
  /**
  * The type of reservation from which this instance can consume resources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#type ComputeInstance#type}
  */
  readonly type: string;
  /**
  * specific_reservation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#specific_reservation ComputeInstance#specific_reservation}
  */
  readonly specificReservation?: ComputeInstanceReservationAffinitySpecificReservation;
}

export function computeInstanceReservationAffinityToTerraform(struct?: ComputeInstanceReservationAffinityOutputReference | ComputeInstanceReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    specific_reservation: computeInstanceReservationAffinitySpecificReservationToTerraform(struct!.specificReservation),
  }
}

export class ComputeInstanceReservationAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceReservationAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._specificReservation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificReservation = this._specificReservation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceReservationAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._specificReservation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._specificReservation.internalValue = value.specificReservation;
    }
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

  // specific_reservation - computed: false, optional: true, required: false
  private _specificReservation = new ComputeInstanceReservationAffinitySpecificReservationOutputReference(this, "specific_reservation");
  public get specificReservation() {
    return this._specificReservation;
  }
  public putSpecificReservation(value: ComputeInstanceReservationAffinitySpecificReservation) {
    this._specificReservation.internalValue = value;
  }
  public resetSpecificReservation() {
    this._specificReservation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificReservationInput() {
    return this._specificReservation.internalValue;
  }
}
export interface ComputeInstanceSchedulingNodeAffinities {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#key ComputeInstance#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#operator ComputeInstance#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#values ComputeInstance#values}
  */
  readonly values: string[];
}

export function computeInstanceSchedulingNodeAffinitiesToTerraform(struct?: ComputeInstanceSchedulingNodeAffinities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class ComputeInstanceSchedulingNodeAffinitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeInstanceSchedulingNodeAffinities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceSchedulingNodeAffinities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
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
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ComputeInstanceSchedulingNodeAffinitiesList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceSchedulingNodeAffinities[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeInstanceSchedulingNodeAffinitiesOutputReference {
    return new ComputeInstanceSchedulingNodeAffinitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceScheduling {
  /**
  * Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#automatic_restart ComputeInstance#automatic_restart}
  */
  readonly automaticRestart?: boolean | cdktf.IResolvable;
  /**
  * Specifies the action GCE should take when SPOT VM is preempted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#instance_termination_action ComputeInstance#instance_termination_action}
  */
  readonly instanceTerminationAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#min_node_cpus ComputeInstance#min_node_cpus}
  */
  readonly minNodeCpus?: number;
  /**
  * Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#on_host_maintenance ComputeInstance#on_host_maintenance}
  */
  readonly onHostMaintenance?: string;
  /**
  * Whether the instance is preemptible.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#preemptible ComputeInstance#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
  /**
  * Whether the instance is spot. If this is set as SPOT.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#provisioning_model ComputeInstance#provisioning_model}
  */
  readonly provisioningModel?: string;
  /**
  * node_affinities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#node_affinities ComputeInstance#node_affinities}
  */
  readonly nodeAffinities?: ComputeInstanceSchedulingNodeAffinities[] | cdktf.IResolvable;
}

export function computeInstanceSchedulingToTerraform(struct?: ComputeInstanceSchedulingOutputReference | ComputeInstanceScheduling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_restart: cdktf.booleanToTerraform(struct!.automaticRestart),
    instance_termination_action: cdktf.stringToTerraform(struct!.instanceTerminationAction),
    min_node_cpus: cdktf.numberToTerraform(struct!.minNodeCpus),
    on_host_maintenance: cdktf.stringToTerraform(struct!.onHostMaintenance),
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
    provisioning_model: cdktf.stringToTerraform(struct!.provisioningModel),
    node_affinities: cdktf.listMapper(computeInstanceSchedulingNodeAffinitiesToTerraform, true)(struct!.nodeAffinities),
  }
}

export class ComputeInstanceSchedulingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceScheduling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticRestart = this._automaticRestart;
    }
    if (this._instanceTerminationAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTerminationAction = this._instanceTerminationAction;
    }
    if (this._minNodeCpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCpus = this._minNodeCpus;
    }
    if (this._onHostMaintenance !== undefined) {
      hasAnyValues = true;
      internalValueResult.onHostMaintenance = this._onHostMaintenance;
    }
    if (this._preemptible !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    if (this._provisioningModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioningModel = this._provisioningModel;
    }
    if (this._nodeAffinities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinities = this._nodeAffinities?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceScheduling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticRestart = undefined;
      this._instanceTerminationAction = undefined;
      this._minNodeCpus = undefined;
      this._onHostMaintenance = undefined;
      this._preemptible = undefined;
      this._provisioningModel = undefined;
      this._nodeAffinities.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticRestart = value.automaticRestart;
      this._instanceTerminationAction = value.instanceTerminationAction;
      this._minNodeCpus = value.minNodeCpus;
      this._onHostMaintenance = value.onHostMaintenance;
      this._preemptible = value.preemptible;
      this._provisioningModel = value.provisioningModel;
      this._nodeAffinities.internalValue = value.nodeAffinities;
    }
  }

  // automatic_restart - computed: false, optional: true, required: false
  private _automaticRestart?: boolean | cdktf.IResolvable; 
  public get automaticRestart() {
    return this.getBooleanAttribute('automatic_restart');
  }
  public set automaticRestart(value: boolean | cdktf.IResolvable) {
    this._automaticRestart = value;
  }
  public resetAutomaticRestart() {
    this._automaticRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticRestartInput() {
    return this._automaticRestart;
  }

  // instance_termination_action - computed: false, optional: true, required: false
  private _instanceTerminationAction?: string; 
  public get instanceTerminationAction() {
    return this.getStringAttribute('instance_termination_action');
  }
  public set instanceTerminationAction(value: string) {
    this._instanceTerminationAction = value;
  }
  public resetInstanceTerminationAction() {
    this._instanceTerminationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTerminationActionInput() {
    return this._instanceTerminationAction;
  }

  // min_node_cpus - computed: false, optional: true, required: false
  private _minNodeCpus?: number; 
  public get minNodeCpus() {
    return this.getNumberAttribute('min_node_cpus');
  }
  public set minNodeCpus(value: number) {
    this._minNodeCpus = value;
  }
  public resetMinNodeCpus() {
    this._minNodeCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCpusInput() {
    return this._minNodeCpus;
  }

  // on_host_maintenance - computed: true, optional: true, required: false
  private _onHostMaintenance?: string; 
  public get onHostMaintenance() {
    return this.getStringAttribute('on_host_maintenance');
  }
  public set onHostMaintenance(value: string) {
    this._onHostMaintenance = value;
  }
  public resetOnHostMaintenance() {
    this._onHostMaintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onHostMaintenanceInput() {
    return this._onHostMaintenance;
  }

  // preemptible - computed: false, optional: true, required: false
  private _preemptible?: boolean | cdktf.IResolvable; 
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }
  public set preemptible(value: boolean | cdktf.IResolvable) {
    this._preemptible = value;
  }
  public resetPreemptible() {
    this._preemptible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInput() {
    return this._preemptible;
  }

  // provisioning_model - computed: true, optional: true, required: false
  private _provisioningModel?: string; 
  public get provisioningModel() {
    return this.getStringAttribute('provisioning_model');
  }
  public set provisioningModel(value: string) {
    this._provisioningModel = value;
  }
  public resetProvisioningModel() {
    this._provisioningModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningModelInput() {
    return this._provisioningModel;
  }

  // node_affinities - computed: false, optional: true, required: false
  private _nodeAffinities = new ComputeInstanceSchedulingNodeAffinitiesList(this, "node_affinities", true);
  public get nodeAffinities() {
    return this._nodeAffinities;
  }
  public putNodeAffinities(value: ComputeInstanceSchedulingNodeAffinities[] | cdktf.IResolvable) {
    this._nodeAffinities.internalValue = value;
  }
  public resetNodeAffinities() {
    this._nodeAffinities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinitiesInput() {
    return this._nodeAffinities.internalValue;
  }
}
export interface ComputeInstanceScratchDisk {
  /**
  * The disk interface used for attaching this disk. One of SCSI or NVME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#interface ComputeInstance#interface}
  */
  readonly interface: string;
}

export function computeInstanceScratchDiskToTerraform(struct?: ComputeInstanceScratchDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
  }
}

export class ComputeInstanceScratchDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeInstanceScratchDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceScratchDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
    }
  }

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }
}

export class ComputeInstanceScratchDiskList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceScratchDisk[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeInstanceScratchDiskOutputReference {
    return new ComputeInstanceScratchDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceServiceAccount {
  /**
  * The service account e-mail address.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#email ComputeInstance#email}
  */
  readonly email?: string;
  /**
  * A list of service scopes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#scopes ComputeInstance#scopes}
  */
  readonly scopes: string[];
}

export function computeInstanceServiceAccountToTerraform(struct?: ComputeInstanceServiceAccountOutputReference | ComputeInstanceServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
  }
}

export class ComputeInstanceServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceServiceAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceServiceAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._scopes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._scopes = value.scopes;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface ComputeInstanceShieldedInstanceConfig {
  /**
  * Whether integrity monitoring is enabled for the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#enable_integrity_monitoring ComputeInstance#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Whether secure boot is enabled for the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#enable_secure_boot ComputeInstance#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
  /**
  * Whether the instance uses vTPM.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#enable_vtpm ComputeInstance#enable_vtpm}
  */
  readonly enableVtpm?: boolean | cdktf.IResolvable;
}

export function computeInstanceShieldedInstanceConfigToTerraform(struct?: ComputeInstanceShieldedInstanceConfigOutputReference | ComputeInstanceShieldedInstanceConfig): any {
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

export class ComputeInstanceShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceShieldedInstanceConfig | undefined {
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

  public set internalValue(value: ComputeInstanceShieldedInstanceConfig | undefined) {
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
export interface ComputeInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#create ComputeInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#delete ComputeInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance#update ComputeInstance#update}
  */
  readonly update?: string;
}

export function computeInstanceTimeoutsToTerraform(struct?: ComputeInstanceTimeoutsOutputReference | ComputeInstanceTimeouts | cdktf.IResolvable): any {
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

export class ComputeInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeInstanceTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_instance google_compute_instance}
*/
export class ComputeInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_instance google_compute_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_instance',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
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
    this._allowStoppingForUpdate = config.allowStoppingForUpdate;
    this._canIpForward = config.canIpForward;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._desiredStatus = config.desiredStatus;
    this._enableDisplay = config.enableDisplay;
    this._guestAccelerator.internalValue = config.guestAccelerator;
    this._hostname = config.hostname;
    this._id = config.id;
    this._labels = config.labels;
    this._machineType = config.machineType;
    this._metadata = config.metadata;
    this._metadataStartupScript = config.metadataStartupScript;
    this._minCpuPlatform = config.minCpuPlatform;
    this._name = config.name;
    this._project = config.project;
    this._resourcePolicies = config.resourcePolicies;
    this._tags = config.tags;
    this._zone = config.zone;
    this._advancedMachineFeatures.internalValue = config.advancedMachineFeatures;
    this._attachedDisk.internalValue = config.attachedDisk;
    this._bootDisk.internalValue = config.bootDisk;
    this._confidentialInstanceConfig.internalValue = config.confidentialInstanceConfig;
    this._networkInterface.internalValue = config.networkInterface;
    this._reservationAffinity.internalValue = config.reservationAffinity;
    this._scheduling.internalValue = config.scheduling;
    this._scratchDisk.internalValue = config.scratchDisk;
    this._serviceAccount.internalValue = config.serviceAccount;
    this._shieldedInstanceConfig.internalValue = config.shieldedInstanceConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_stopping_for_update - computed: false, optional: true, required: false
  private _allowStoppingForUpdate?: boolean | cdktf.IResolvable; 
  public get allowStoppingForUpdate() {
    return this.getBooleanAttribute('allow_stopping_for_update');
  }
  public set allowStoppingForUpdate(value: boolean | cdktf.IResolvable) {
    this._allowStoppingForUpdate = value;
  }
  public resetAllowStoppingForUpdate() {
    this._allowStoppingForUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowStoppingForUpdateInput() {
    return this._allowStoppingForUpdate;
  }

  // can_ip_forward - computed: false, optional: true, required: false
  private _canIpForward?: boolean | cdktf.IResolvable; 
  public get canIpForward() {
    return this.getBooleanAttribute('can_ip_forward');
  }
  public set canIpForward(value: boolean | cdktf.IResolvable) {
    this._canIpForward = value;
  }
  public resetCanIpForward() {
    this._canIpForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canIpForwardInput() {
    return this._canIpForward;
  }

  // cpu_platform - computed: true, optional: false, required: false
  public get cpuPlatform() {
    return this.getStringAttribute('cpu_platform');
  }

  // current_status - computed: true, optional: false, required: false
  public get currentStatus() {
    return this.getStringAttribute('current_status');
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // desired_status - computed: false, optional: true, required: false
  private _desiredStatus?: string; 
  public get desiredStatus() {
    return this.getStringAttribute('desired_status');
  }
  public set desiredStatus(value: string) {
    this._desiredStatus = value;
  }
  public resetDesiredStatus() {
    this._desiredStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStatusInput() {
    return this._desiredStatus;
  }

  // enable_display - computed: false, optional: true, required: false
  private _enableDisplay?: boolean | cdktf.IResolvable; 
  public get enableDisplay() {
    return this.getBooleanAttribute('enable_display');
  }
  public set enableDisplay(value: boolean | cdktf.IResolvable) {
    this._enableDisplay = value;
  }
  public resetEnableDisplay() {
    this._enableDisplay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDisplayInput() {
    return this._enableDisplay;
  }

  // guest_accelerator - computed: true, optional: true, required: false
  private _guestAccelerator = new ComputeInstanceGuestAcceleratorList(this, "guest_accelerator", false);
  public get guestAccelerator() {
    return this._guestAccelerator;
  }
  public putGuestAccelerator(value: ComputeInstanceGuestAccelerator[] | cdktf.IResolvable) {
    this._guestAccelerator.internalValue = value;
  }
  public resetGuestAccelerator() {
    this._guestAccelerator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorInput() {
    return this._guestAccelerator.internalValue;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // label_fingerprint - computed: true, optional: false, required: false
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
  }

  // labels - computed: false, optional: true, required: false
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

  // metadata_fingerprint - computed: true, optional: false, required: false
  public get metadataFingerprint() {
    return this.getStringAttribute('metadata_fingerprint');
  }

  // metadata_startup_script - computed: false, optional: true, required: false
  private _metadataStartupScript?: string; 
  public get metadataStartupScript() {
    return this.getStringAttribute('metadata_startup_script');
  }
  public set metadataStartupScript(value: string) {
    this._metadataStartupScript = value;
  }
  public resetMetadataStartupScript() {
    this._metadataStartupScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataStartupScriptInput() {
    return this._metadataStartupScript;
  }

  // min_cpu_platform - computed: true, optional: true, required: false
  private _minCpuPlatform?: string; 
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string) {
    this._minCpuPlatform = value;
  }
  public resetMinCpuPlatform() {
    this._minCpuPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuPlatformInput() {
    return this._minCpuPlatform;
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

  // resource_policies - computed: false, optional: true, required: false
  private _resourcePolicies?: string[]; 
  public get resourcePolicies() {
    return this.getListAttribute('resource_policies');
  }
  public set resourcePolicies(value: string[]) {
    this._resourcePolicies = value;
  }
  public resetResourcePolicies() {
    this._resourcePolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoliciesInput() {
    return this._resourcePolicies;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
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

  // tags_fingerprint - computed: true, optional: false, required: false
  public get tagsFingerprint() {
    return this.getStringAttribute('tags_fingerprint');
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // advanced_machine_features - computed: false, optional: true, required: false
  private _advancedMachineFeatures = new ComputeInstanceAdvancedMachineFeaturesOutputReference(this, "advanced_machine_features");
  public get advancedMachineFeatures() {
    return this._advancedMachineFeatures;
  }
  public putAdvancedMachineFeatures(value: ComputeInstanceAdvancedMachineFeatures) {
    this._advancedMachineFeatures.internalValue = value;
  }
  public resetAdvancedMachineFeatures() {
    this._advancedMachineFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedMachineFeaturesInput() {
    return this._advancedMachineFeatures.internalValue;
  }

  // attached_disk - computed: false, optional: true, required: false
  private _attachedDisk = new ComputeInstanceAttachedDiskList(this, "attached_disk", false);
  public get attachedDisk() {
    return this._attachedDisk;
  }
  public putAttachedDisk(value: ComputeInstanceAttachedDisk[] | cdktf.IResolvable) {
    this._attachedDisk.internalValue = value;
  }
  public resetAttachedDisk() {
    this._attachedDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedDiskInput() {
    return this._attachedDisk.internalValue;
  }

  // boot_disk - computed: false, optional: false, required: true
  private _bootDisk = new ComputeInstanceBootDiskOutputReference(this, "boot_disk");
  public get bootDisk() {
    return this._bootDisk;
  }
  public putBootDisk(value: ComputeInstanceBootDisk) {
    this._bootDisk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskInput() {
    return this._bootDisk.internalValue;
  }

  // confidential_instance_config - computed: false, optional: true, required: false
  private _confidentialInstanceConfig = new ComputeInstanceConfidentialInstanceConfigOutputReference(this, "confidential_instance_config");
  public get confidentialInstanceConfig() {
    return this._confidentialInstanceConfig;
  }
  public putConfidentialInstanceConfig(value: ComputeInstanceConfidentialInstanceConfig) {
    this._confidentialInstanceConfig.internalValue = value;
  }
  public resetConfidentialInstanceConfig() {
    this._confidentialInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialInstanceConfigInput() {
    return this._confidentialInstanceConfig.internalValue;
  }

  // network_interface - computed: false, optional: false, required: true
  private _networkInterface = new ComputeInstanceNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: ComputeInstanceNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity = new ComputeInstanceReservationAffinityOutputReference(this, "reservation_affinity");
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: ComputeInstanceReservationAffinity) {
    this._reservationAffinity.internalValue = value;
  }
  public resetReservationAffinity() {
    this._reservationAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityInput() {
    return this._reservationAffinity.internalValue;
  }

  // scheduling - computed: false, optional: true, required: false
  private _scheduling = new ComputeInstanceSchedulingOutputReference(this, "scheduling");
  public get scheduling() {
    return this._scheduling;
  }
  public putScheduling(value: ComputeInstanceScheduling) {
    this._scheduling.internalValue = value;
  }
  public resetScheduling() {
    this._scheduling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingInput() {
    return this._scheduling.internalValue;
  }

  // scratch_disk - computed: false, optional: true, required: false
  private _scratchDisk = new ComputeInstanceScratchDiskList(this, "scratch_disk", false);
  public get scratchDisk() {
    return this._scratchDisk;
  }
  public putScratchDisk(value: ComputeInstanceScratchDisk[] | cdktf.IResolvable) {
    this._scratchDisk.internalValue = value;
  }
  public resetScratchDisk() {
    this._scratchDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scratchDiskInput() {
    return this._scratchDisk.internalValue;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount = new ComputeInstanceServiceAccountOutputReference(this, "service_account");
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public putServiceAccount(value: ComputeInstanceServiceAccount) {
    this._serviceAccount.internalValue = value;
  }
  public resetServiceAccount() {
    this._serviceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new ComputeInstanceShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: ComputeInstanceShieldedInstanceConfig) {
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
  private _timeouts = new ComputeInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_stopping_for_update: cdktf.booleanToTerraform(this._allowStoppingForUpdate),
      can_ip_forward: cdktf.booleanToTerraform(this._canIpForward),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      desired_status: cdktf.stringToTerraform(this._desiredStatus),
      enable_display: cdktf.booleanToTerraform(this._enableDisplay),
      guest_accelerator: cdktf.listMapper(computeInstanceGuestAcceleratorToTerraform, false)(this._guestAccelerator.internalValue),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      machine_type: cdktf.stringToTerraform(this._machineType),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      metadata_startup_script: cdktf.stringToTerraform(this._metadataStartupScript),
      min_cpu_platform: cdktf.stringToTerraform(this._minCpuPlatform),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      resource_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourcePolicies),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      zone: cdktf.stringToTerraform(this._zone),
      advanced_machine_features: computeInstanceAdvancedMachineFeaturesToTerraform(this._advancedMachineFeatures.internalValue),
      attached_disk: cdktf.listMapper(computeInstanceAttachedDiskToTerraform, true)(this._attachedDisk.internalValue),
      boot_disk: computeInstanceBootDiskToTerraform(this._bootDisk.internalValue),
      confidential_instance_config: computeInstanceConfidentialInstanceConfigToTerraform(this._confidentialInstanceConfig.internalValue),
      network_interface: cdktf.listMapper(computeInstanceNetworkInterfaceToTerraform, true)(this._networkInterface.internalValue),
      reservation_affinity: computeInstanceReservationAffinityToTerraform(this._reservationAffinity.internalValue),
      scheduling: computeInstanceSchedulingToTerraform(this._scheduling.internalValue),
      scratch_disk: cdktf.listMapper(computeInstanceScratchDiskToTerraform, true)(this._scratchDisk.internalValue),
      service_account: computeInstanceServiceAccountToTerraform(this._serviceAccount.internalValue),
      shielded_instance_config: computeInstanceShieldedInstanceConfigToTerraform(this._shieldedInstanceConfig.internalValue),
      timeouts: computeInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
