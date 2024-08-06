// https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRegionInstanceTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#can_ip_forward ComputeRegionInstanceTemplate#can_ip_forward}
  */
  readonly canIpForward?: boolean | cdktf.IResolvable;
  /**
  * A brief description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#description ComputeRegionInstanceTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#id ComputeRegionInstanceTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A description of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#instance_description ComputeRegionInstanceTemplate#instance_description}
  */
  readonly instanceDescription?: string;
  /**
  * A set of key/value label pairs to assign to instances created from this template,
  * 				
  * 				**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * 				Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#labels ComputeRegionInstanceTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The machine type to create. To create a machine with a custom type (such as extended memory), format the value like custom-VCPUS-MEM_IN_MB like custom-6-20480 for 6 vCPU and 20GB of RAM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#machine_type ComputeRegionInstanceTemplate#machine_type}
  */
  readonly machineType: string;
  /**
  * Metadata key/value pairs to make available from within instances created from this template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#metadata ComputeRegionInstanceTemplate#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * An alternative to using the startup-script metadata key, mostly to match the compute_instance resource. This replaces the startup-script metadata key on the created instance and thus the two mechanisms are not allowed to be used simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#metadata_startup_script ComputeRegionInstanceTemplate#metadata_startup_script}
  */
  readonly metadataStartupScript?: string;
  /**
  * Specifies a minimum CPU platform. Applicable values are the friendly names of CPU platforms, such as Intel Haswell or Intel Skylake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#min_cpu_platform ComputeRegionInstanceTemplate#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#name ComputeRegionInstanceTemplate#name}
  */
  readonly name?: string;
  /**
  * Creates a unique name beginning with the specified prefix. Conflicts with name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#name_prefix ComputeRegionInstanceTemplate#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#project ComputeRegionInstanceTemplate#project}
  */
  readonly project?: string;
  /**
  * The region in which the instance template is located. If it is not provided, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#region ComputeRegionInstanceTemplate#region}
  */
  readonly region?: string;
  /**
  * A map of resource manager tags.
  * 				Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#resource_manager_tags ComputeRegionInstanceTemplate#resource_manager_tags}
  */
  readonly resourceManagerTags?: { [key: string]: string };
  /**
  * A list of self_links of resource policies to attach to the instance. Currently a max of 1 resource policy is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#resource_policies ComputeRegionInstanceTemplate#resource_policies}
  */
  readonly resourcePolicies?: string[];
  /**
  * Tags to attach to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#tags ComputeRegionInstanceTemplate#tags}
  */
  readonly tags?: string[];
  /**
  * advanced_machine_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#advanced_machine_features ComputeRegionInstanceTemplate#advanced_machine_features}
  */
  readonly advancedMachineFeatures?: ComputeRegionInstanceTemplateAdvancedMachineFeatures;
  /**
  * confidential_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#confidential_instance_config ComputeRegionInstanceTemplate#confidential_instance_config}
  */
  readonly confidentialInstanceConfig?: ComputeRegionInstanceTemplateConfidentialInstanceConfig;
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#disk ComputeRegionInstanceTemplate#disk}
  */
  readonly disk: ComputeRegionInstanceTemplateDisk[] | cdktf.IResolvable;
  /**
  * guest_accelerator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#guest_accelerator ComputeRegionInstanceTemplate#guest_accelerator}
  */
  readonly guestAccelerator?: ComputeRegionInstanceTemplateGuestAccelerator[] | cdktf.IResolvable;
  /**
  * network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#network_interface ComputeRegionInstanceTemplate#network_interface}
  */
  readonly networkInterface?: ComputeRegionInstanceTemplateNetworkInterface[] | cdktf.IResolvable;
  /**
  * network_performance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#network_performance_config ComputeRegionInstanceTemplate#network_performance_config}
  */
  readonly networkPerformanceConfig?: ComputeRegionInstanceTemplateNetworkPerformanceConfig;
  /**
  * reservation_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#reservation_affinity ComputeRegionInstanceTemplate#reservation_affinity}
  */
  readonly reservationAffinity?: ComputeRegionInstanceTemplateReservationAffinity;
  /**
  * scheduling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#scheduling ComputeRegionInstanceTemplate#scheduling}
  */
  readonly scheduling?: ComputeRegionInstanceTemplateScheduling;
  /**
  * service_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#service_account ComputeRegionInstanceTemplate#service_account}
  */
  readonly serviceAccount?: ComputeRegionInstanceTemplateServiceAccount;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#shielded_instance_config ComputeRegionInstanceTemplate#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: ComputeRegionInstanceTemplateShieldedInstanceConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#timeouts ComputeRegionInstanceTemplate#timeouts}
  */
  readonly timeouts?: ComputeRegionInstanceTemplateTimeouts;
}
export interface ComputeRegionInstanceTemplateAdvancedMachineFeatures {
  /**
  * Whether to enable nested virtualization or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#enable_nested_virtualization ComputeRegionInstanceTemplate#enable_nested_virtualization}
  */
  readonly enableNestedVirtualization?: boolean | cdktf.IResolvable;
  /**
  * The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#threads_per_core ComputeRegionInstanceTemplate#threads_per_core}
  */
  readonly threadsPerCore?: number;
  /**
  * The number of physical cores to expose to an instance. Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance\'s nominal CPU count and the underlying platform\'s SMT width.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#visible_core_count ComputeRegionInstanceTemplate#visible_core_count}
  */
  readonly visibleCoreCount?: number;
}

export function computeRegionInstanceTemplateAdvancedMachineFeaturesToTerraform(struct?: ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference | ComputeRegionInstanceTemplateAdvancedMachineFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_nested_virtualization: cdktf.booleanToTerraform(struct!.enableNestedVirtualization),
    threads_per_core: cdktf.numberToTerraform(struct!.threadsPerCore),
    visible_core_count: cdktf.numberToTerraform(struct!.visibleCoreCount),
  }
}


export function computeRegionInstanceTemplateAdvancedMachineFeaturesToHclTerraform(struct?: ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference | ComputeRegionInstanceTemplateAdvancedMachineFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_nested_virtualization: {
      value: cdktf.booleanToHclTerraform(struct!.enableNestedVirtualization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threads_per_core: {
      value: cdktf.numberToHclTerraform(struct!.threadsPerCore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    visible_core_count: {
      value: cdktf.numberToHclTerraform(struct!.visibleCoreCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionInstanceTemplateAdvancedMachineFeatures | undefined {
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
    if (this._visibleCoreCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibleCoreCount = this._visibleCoreCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionInstanceTemplateAdvancedMachineFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableNestedVirtualization = undefined;
      this._threadsPerCore = undefined;
      this._visibleCoreCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableNestedVirtualization = value.enableNestedVirtualization;
      this._threadsPerCore = value.threadsPerCore;
      this._visibleCoreCount = value.visibleCoreCount;
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

  // visible_core_count - computed: false, optional: true, required: false
  private _visibleCoreCount?: number; 
  public get visibleCoreCount() {
    return this.getNumberAttribute('visible_core_count');
  }
  public set visibleCoreCount(value: number) {
    this._visibleCoreCount = value;
  }
  public resetVisibleCoreCount() {
    this._visibleCoreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleCoreCountInput() {
    return this._visibleCoreCount;
  }
}
export interface ComputeRegionInstanceTemplateConfidentialInstanceConfig {
  /**
  * 
  * 								Specifies which confidential computing technology to use.
  * 								This could be one of the following values: SEV, SEV_SNP.
  * 								If SEV_SNP, min_cpu_platform = "AMD Milan" is currently required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#confidential_instance_type ComputeRegionInstanceTemplate#confidential_instance_type}
  */
  readonly confidentialInstanceType?: string;
  /**
  * Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#enable_confidential_compute ComputeRegionInstanceTemplate#enable_confidential_compute}
  */
  readonly enableConfidentialCompute?: boolean | cdktf.IResolvable;
}

export function computeRegionInstanceTemplateConfidentialInstanceConfigToTerraform(struct?: ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference | ComputeRegionInstanceTemplateConfidentialInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confidential_instance_type: cdktf.stringToTerraform(struct!.confidentialInstanceType),
    enable_confidential_compute: cdktf.booleanToTerraform(struct!.enableConfidentialCompute),
  }
}


export function computeRegionInstanceTemplateConfidentialInstanceConfigToHclTerraform(struct?: ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference | ComputeRegionInstanceTemplateConfidentialInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confidential_instance_type: {
      value: cdktf.stringToHclTerraform(struct!.confidentialInstanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_confidential_compute: {
      value: cdktf.booleanToHclTerraform(struct!.enableConfidentialCompute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionInstanceTemplateConfidentialInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidentialInstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialInstanceType = this._confidentialInstanceType;
    }
    if (this._enableConfidentialCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConfidentialCompute = this._enableConfidentialCompute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionInstanceTemplateConfidentialInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._confidentialInstanceType = undefined;
      this._enableConfidentialCompute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._confidentialInstanceType = value.confidentialInstanceType;
      this._enableConfidentialCompute = value.enableConfidentialCompute;
    }
  }

  // confidential_instance_type - computed: false, optional: true, required: false
  private _confidentialInstanceType?: string; 
  public get confidentialInstanceType() {
    return this.getStringAttribute('confidential_instance_type');
  }
  public set confidentialInstanceType(value: string) {
    this._confidentialInstanceType = value;
  }
  public resetConfidentialInstanceType() {
    this._confidentialInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialInstanceTypeInput() {
    return this._confidentialInstanceType;
  }

  // enable_confidential_compute - computed: false, optional: true, required: false
  private _enableConfidentialCompute?: boolean | cdktf.IResolvable; 
  public get enableConfidentialCompute() {
    return this.getBooleanAttribute('enable_confidential_compute');
  }
  public set enableConfidentialCompute(value: boolean | cdktf.IResolvable) {
    this._enableConfidentialCompute = value;
  }
  public resetEnableConfidentialCompute() {
    this._enableConfidentialCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConfidentialComputeInput() {
    return this._enableConfidentialCompute;
  }
}
export interface ComputeRegionInstanceTemplateDiskDiskEncryptionKey {
  /**
  * The self link of the encryption key that is stored in Google Cloud KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#kms_key_self_link ComputeRegionInstanceTemplate#kms_key_self_link}
  */
  readonly kmsKeySelfLink: string;
}

export function computeRegionInstanceTemplateDiskDiskEncryptionKeyToTerraform(struct?: ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference | ComputeRegionInstanceTemplateDiskDiskEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_self_link: cdktf.stringToTerraform(struct!.kmsKeySelfLink),
  }
}


export function computeRegionInstanceTemplateDiskDiskEncryptionKeyToHclTerraform(struct?: ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference | ComputeRegionInstanceTemplateDiskDiskEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_self_link: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeySelfLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionInstanceTemplateDiskDiskEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeySelfLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeySelfLink = this._kmsKeySelfLink;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionInstanceTemplateDiskDiskEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeySelfLink = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeySelfLink = value.kmsKeySelfLink;
    }
  }

  // kms_key_self_link - computed: false, optional: false, required: true
  private _kmsKeySelfLink?: string; 
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }
  public set kmsKeySelfLink(value: string) {
    this._kmsKeySelfLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeySelfLinkInput() {
    return this._kmsKeySelfLink;
  }
}
export interface ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey {
  /**
  * The self link of the encryption key that is stored in
  * Google Cloud KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#kms_key_self_link ComputeRegionInstanceTemplate#kms_key_self_link}
  */
  readonly kmsKeySelfLink: string;
  /**
  * The service account being used for the encryption
  * request for the given KMS key. If absent, the Compute
  * Engine default service account is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#kms_key_service_account ComputeRegionInstanceTemplate#kms_key_service_account}
  */
  readonly kmsKeyServiceAccount?: string;
}

export function computeRegionInstanceTemplateDiskSourceImageEncryptionKeyToTerraform(struct?: ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference | ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_self_link: cdktf.stringToTerraform(struct!.kmsKeySelfLink),
    kms_key_service_account: cdktf.stringToTerraform(struct!.kmsKeyServiceAccount),
  }
}


export function computeRegionInstanceTemplateDiskSourceImageEncryptionKeyToHclTerraform(struct?: ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference | ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_self_link: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeySelfLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_service_account: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeySelfLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeySelfLink = this._kmsKeySelfLink;
    }
    if (this._kmsKeyServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyServiceAccount = this._kmsKeyServiceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeySelfLink = undefined;
      this._kmsKeyServiceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeySelfLink = value.kmsKeySelfLink;
      this._kmsKeyServiceAccount = value.kmsKeyServiceAccount;
    }
  }

  // kms_key_self_link - computed: false, optional: false, required: true
  private _kmsKeySelfLink?: string; 
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }
  public set kmsKeySelfLink(value: string) {
    this._kmsKeySelfLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeySelfLinkInput() {
    return this._kmsKeySelfLink;
  }

  // kms_key_service_account - computed: false, optional: true, required: false
  private _kmsKeyServiceAccount?: string; 
  public get kmsKeyServiceAccount() {
    return this.getStringAttribute('kms_key_service_account');
  }
  public set kmsKeyServiceAccount(value: string) {
    this._kmsKeyServiceAccount = value;
  }
  public resetKmsKeyServiceAccount() {
    this._kmsKeyServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyServiceAccountInput() {
    return this._kmsKeyServiceAccount;
  }
}
export interface ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey {
  /**
  * The self link of the encryption key that is stored in
  * Google Cloud KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#kms_key_self_link ComputeRegionInstanceTemplate#kms_key_self_link}
  */
  readonly kmsKeySelfLink: string;
  /**
  * The service account being used for the encryption
  * request for the given KMS key. If absent, the Compute
  * Engine default service account is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#kms_key_service_account ComputeRegionInstanceTemplate#kms_key_service_account}
  */
  readonly kmsKeyServiceAccount?: string;
}

export function computeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyToTerraform(struct?: ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference | ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_self_link: cdktf.stringToTerraform(struct!.kmsKeySelfLink),
    kms_key_service_account: cdktf.stringToTerraform(struct!.kmsKeyServiceAccount),
  }
}


export function computeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyToHclTerraform(struct?: ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference | ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_self_link: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeySelfLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_service_account: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeySelfLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeySelfLink = this._kmsKeySelfLink;
    }
    if (this._kmsKeyServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyServiceAccount = this._kmsKeyServiceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeySelfLink = undefined;
      this._kmsKeyServiceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeySelfLink = value.kmsKeySelfLink;
      this._kmsKeyServiceAccount = value.kmsKeyServiceAccount;
    }
  }

  // kms_key_self_link - computed: false, optional: false, required: true
  private _kmsKeySelfLink?: string; 
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }
  public set kmsKeySelfLink(value: string) {
    this._kmsKeySelfLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeySelfLinkInput() {
    return this._kmsKeySelfLink;
  }

  // kms_key_service_account - computed: false, optional: true, required: false
  private _kmsKeyServiceAccount?: string; 
  public get kmsKeyServiceAccount() {
    return this.getStringAttribute('kms_key_service_account');
  }
  public set kmsKeyServiceAccount(value: string) {
    this._kmsKeyServiceAccount = value;
  }
  public resetKmsKeyServiceAccount() {
    this._kmsKeyServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyServiceAccountInput() {
    return this._kmsKeyServiceAccount;
  }
}
export interface ComputeRegionInstanceTemplateDisk {
  /**
  * Whether or not the disk should be auto-deleted. This defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#auto_delete ComputeRegionInstanceTemplate#auto_delete}
  */
  readonly autoDelete?: boolean | cdktf.IResolvable;
  /**
  * Indicates that this is a boot disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#boot ComputeRegionInstanceTemplate#boot}
  */
  readonly boot?: boolean | cdktf.IResolvable;
  /**
  * A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. If not specified, the server chooses a default device name to apply to this disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#device_name ComputeRegionInstanceTemplate#device_name}
  */
  readonly deviceName?: string;
  /**
  * Name of the disk. When not provided, this defaults to the name of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#disk_name ComputeRegionInstanceTemplate#disk_name}
  */
  readonly diskName?: string;
  /**
  * The size of the image in gigabytes. If not specified, it will inherit the size of its base image. For SCRATCH disks, the size must be one of 375 or 3000 GB, with a default of 375 GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#disk_size_gb ComputeRegionInstanceTemplate#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * The Google Compute Engine disk type. Such as "pd-ssd", "local-ssd", "pd-balanced" or "pd-standard".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#disk_type ComputeRegionInstanceTemplate#disk_type}
  */
  readonly diskType?: string;
  /**
  * Specifies the disk interface to use for attaching this disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#interface ComputeRegionInstanceTemplate#interface}
  */
  readonly interface?: string;
  /**
  * A set of key/value label pairs to assign to disks,
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#labels ComputeRegionInstanceTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The mode in which to attach this disk, either READ_WRITE or READ_ONLY. If you are attaching or creating a boot disk, this must read-write mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#mode ComputeRegionInstanceTemplate#mode}
  */
  readonly mode?: string;
  /**
  * Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle. Values must be between 10,000 and 120,000. For more details, see the [Extreme persistent disk documentation](https://cloud.google.com/compute/docs/disks/extreme-persistent-disk).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#provisioned_iops ComputeRegionInstanceTemplate#provisioned_iops}
  */
  readonly provisionedIops?: number;
  /**
  * A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#resource_manager_tags ComputeRegionInstanceTemplate#resource_manager_tags}
  */
  readonly resourceManagerTags?: { [key: string]: string };
  /**
  * A list (short name or id) of resource policies to attach to this disk. Currently a max of 1 resource policy is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#resource_policies ComputeRegionInstanceTemplate#resource_policies}
  */
  readonly resourcePolicies?: string[];
  /**
  * The name (not self_link) of the disk (such as those managed by google_compute_disk) to attach. ~> Note: Either source or source_image is required when creating a new instance except for when creating a local SSD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#source ComputeRegionInstanceTemplate#source}
  */
  readonly source?: string;
  /**
  * The image from which to initialize this disk. This can be one of: the image's self_link, projects/{project}/global/images/{image}, projects/{project}/global/images/family/{family}, global/images/{image}, global/images/family/{family}, family/{family}, {project}/{family}, {project}/{image}, {family}, or {image}. ~> Note: Either source or source_image is required when creating a new instance except for when creating a local SSD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#source_image ComputeRegionInstanceTemplate#source_image}
  */
  readonly sourceImage?: string;
  /**
  * The source snapshot to create this disk. When creating
  * a new instance, one of initializeParams.sourceSnapshot,
  * initializeParams.sourceImage, or disks.source is
  * required except for local SSD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#source_snapshot ComputeRegionInstanceTemplate#source_snapshot}
  */
  readonly sourceSnapshot?: string;
  /**
  * The type of Google Compute Engine disk, can be either "SCRATCH" or "PERSISTENT".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#type ComputeRegionInstanceTemplate#type}
  */
  readonly type?: string;
  /**
  * disk_encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#disk_encryption_key ComputeRegionInstanceTemplate#disk_encryption_key}
  */
  readonly diskEncryptionKey?: ComputeRegionInstanceTemplateDiskDiskEncryptionKey;
  /**
  * source_image_encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#source_image_encryption_key ComputeRegionInstanceTemplate#source_image_encryption_key}
  */
  readonly sourceImageEncryptionKey?: ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey;
  /**
  * source_snapshot_encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#source_snapshot_encryption_key ComputeRegionInstanceTemplate#source_snapshot_encryption_key}
  */
  readonly sourceSnapshotEncryptionKey?: ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey;
}

export function computeRegionInstanceTemplateDiskToTerraform(struct?: ComputeRegionInstanceTemplateDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_delete: cdktf.booleanToTerraform(struct!.autoDelete),
    boot: cdktf.booleanToTerraform(struct!.boot),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    disk_name: cdktf.stringToTerraform(struct!.diskName),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    interface: cdktf.stringToTerraform(struct!.interface),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    mode: cdktf.stringToTerraform(struct!.mode),
    provisioned_iops: cdktf.numberToTerraform(struct!.provisionedIops),
    resource_manager_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceManagerTags),
    resource_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourcePolicies),
    source: cdktf.stringToTerraform(struct!.source),
    source_image: cdktf.stringToTerraform(struct!.sourceImage),
    source_snapshot: cdktf.stringToTerraform(struct!.sourceSnapshot),
    type: cdktf.stringToTerraform(struct!.type),
    disk_encryption_key: computeRegionInstanceTemplateDiskDiskEncryptionKeyToTerraform(struct!.diskEncryptionKey),
    source_image_encryption_key: computeRegionInstanceTemplateDiskSourceImageEncryptionKeyToTerraform(struct!.sourceImageEncryptionKey),
    source_snapshot_encryption_key: computeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyToTerraform(struct!.sourceSnapshotEncryptionKey),
  }
}


export function computeRegionInstanceTemplateDiskToHclTerraform(struct?: ComputeRegionInstanceTemplateDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_delete: {
      value: cdktf.booleanToHclTerraform(struct!.autoDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    boot: {
      value: cdktf.booleanToHclTerraform(struct!.boot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_name: {
      value: cdktf.stringToHclTerraform(struct!.diskName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioned_iops: {
      value: cdktf.numberToHclTerraform(struct!.provisionedIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_manager_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceManagerTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resource_policies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourcePolicies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_image: {
      value: cdktf.stringToHclTerraform(struct!.sourceImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_snapshot: {
      value: cdktf.stringToHclTerraform(struct!.sourceSnapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_encryption_key: {
      value: computeRegionInstanceTemplateDiskDiskEncryptionKeyToHclTerraform(struct!.diskEncryptionKey),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeRegionInstanceTemplateDiskDiskEncryptionKeyList",
    },
    source_image_encryption_key: {
      value: computeRegionInstanceTemplateDiskSourceImageEncryptionKeyToHclTerraform(struct!.sourceImageEncryptionKey),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList",
    },
    source_snapshot_encryption_key: {
      value: computeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyToHclTerraform(struct!.sourceSnapshotEncryptionKey),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionInstanceTemplateDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionInstanceTemplateDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDelete = this._autoDelete;
    }
    if (this._boot !== undefined) {
      hasAnyValues = true;
      internalValueResult.boot = this._boot;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._diskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskName = this._diskName;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._provisionedIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedIops = this._provisionedIops;
    }
    if (this._resourceManagerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagerTags = this._resourceManagerTags;
    }
    if (this._resourcePolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePolicies = this._resourcePolicies;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sourceImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceImage = this._sourceImage;
    }
    if (this._sourceSnapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSnapshot = this._sourceSnapshot;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._diskEncryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionKey = this._diskEncryptionKey?.internalValue;
    }
    if (this._sourceImageEncryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceImageEncryptionKey = this._sourceImageEncryptionKey?.internalValue;
    }
    if (this._sourceSnapshotEncryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSnapshotEncryptionKey = this._sourceSnapshotEncryptionKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionInstanceTemplateDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoDelete = undefined;
      this._boot = undefined;
      this._deviceName = undefined;
      this._diskName = undefined;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._interface = undefined;
      this._labels = undefined;
      this._mode = undefined;
      this._provisionedIops = undefined;
      this._resourceManagerTags = undefined;
      this._resourcePolicies = undefined;
      this._source = undefined;
      this._sourceImage = undefined;
      this._sourceSnapshot = undefined;
      this._type = undefined;
      this._diskEncryptionKey.internalValue = undefined;
      this._sourceImageEncryptionKey.internalValue = undefined;
      this._sourceSnapshotEncryptionKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoDelete = value.autoDelete;
      this._boot = value.boot;
      this._deviceName = value.deviceName;
      this._diskName = value.diskName;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
      this._interface = value.interface;
      this._labels = value.labels;
      this._mode = value.mode;
      this._provisionedIops = value.provisionedIops;
      this._resourceManagerTags = value.resourceManagerTags;
      this._resourcePolicies = value.resourcePolicies;
      this._source = value.source;
      this._sourceImage = value.sourceImage;
      this._sourceSnapshot = value.sourceSnapshot;
      this._type = value.type;
      this._diskEncryptionKey.internalValue = value.diskEncryptionKey;
      this._sourceImageEncryptionKey.internalValue = value.sourceImageEncryptionKey;
      this._sourceSnapshotEncryptionKey.internalValue = value.sourceSnapshotEncryptionKey;
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

  // boot - computed: true, optional: true, required: false
  private _boot?: boolean | cdktf.IResolvable; 
  public get boot() {
    return this.getBooleanAttribute('boot');
  }
  public set boot(value: boolean | cdktf.IResolvable) {
    this._boot = value;
  }
  public resetBoot() {
    this._boot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootInput() {
    return this._boot;
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

  // disk_name - computed: false, optional: true, required: false
  private _diskName?: string; 
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }
  public set diskName(value: string) {
    this._diskName = value;
  }
  public resetDiskName() {
    this._diskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNameInput() {
    return this._diskName;
  }

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // disk_type - computed: true, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // interface - computed: true, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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

  // mode - computed: true, optional: true, required: false
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

  // provisioned_iops - computed: true, optional: true, required: false
  private _provisionedIops?: number; 
  public get provisionedIops() {
    return this.getNumberAttribute('provisioned_iops');
  }
  public set provisionedIops(value: number) {
    this._provisionedIops = value;
  }
  public resetProvisionedIops() {
    this._provisionedIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedIopsInput() {
    return this._provisionedIops;
  }

  // resource_manager_tags - computed: false, optional: true, required: false
  private _resourceManagerTags?: { [key: string]: string }; 
  public get resourceManagerTags() {
    return this.getStringMapAttribute('resource_manager_tags');
  }
  public set resourceManagerTags(value: { [key: string]: string }) {
    this._resourceManagerTags = value;
  }
  public resetResourceManagerTags() {
    this._resourceManagerTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerTagsInput() {
    return this._resourceManagerTags;
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

  // source - computed: false, optional: true, required: false
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

  // source_image - computed: true, optional: true, required: false
  private _sourceImage?: string; 
  public get sourceImage() {
    return this.getStringAttribute('source_image');
  }
  public set sourceImage(value: string) {
    this._sourceImage = value;
  }
  public resetSourceImage() {
    this._sourceImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageInput() {
    return this._sourceImage;
  }

  // source_snapshot - computed: false, optional: true, required: false
  private _sourceSnapshot?: string; 
  public get sourceSnapshot() {
    return this.getStringAttribute('source_snapshot');
  }
  public set sourceSnapshot(value: string) {
    this._sourceSnapshot = value;
  }
  public resetSourceSnapshot() {
    this._sourceSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSnapshotInput() {
    return this._sourceSnapshot;
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

  // disk_encryption_key - computed: false, optional: true, required: false
  private _diskEncryptionKey = new ComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference(this, "disk_encryption_key");
  public get diskEncryptionKey() {
    return this._diskEncryptionKey;
  }
  public putDiskEncryptionKey(value: ComputeRegionInstanceTemplateDiskDiskEncryptionKey) {
    this._diskEncryptionKey.internalValue = value;
  }
  public resetDiskEncryptionKey() {
    this._diskEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionKeyInput() {
    return this._diskEncryptionKey.internalValue;
  }

  // source_image_encryption_key - computed: false, optional: true, required: false
  private _sourceImageEncryptionKey = new ComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference(this, "source_image_encryption_key");
  public get sourceImageEncryptionKey() {
    return this._sourceImageEncryptionKey;
  }
  public putSourceImageEncryptionKey(value: ComputeRegionInstanceTemplateDiskSourceImageEncryptionKey) {
    this._sourceImageEncryptionKey.internalValue = value;
  }
  public resetSourceImageEncryptionKey() {
    this._sourceImageEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageEncryptionKeyInput() {
    return this._sourceImageEncryptionKey.internalValue;
  }

  // source_snapshot_encryption_key - computed: false, optional: true, required: false
  private _sourceSnapshotEncryptionKey = new ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference(this, "source_snapshot_encryption_key");
  public get sourceSnapshotEncryptionKey() {
    return this._sourceSnapshotEncryptionKey;
  }
  public putSourceSnapshotEncryptionKey(value: ComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey) {
    this._sourceSnapshotEncryptionKey.internalValue = value;
  }
  public resetSourceSnapshotEncryptionKey() {
    this._sourceSnapshotEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSnapshotEncryptionKeyInput() {
    return this._sourceSnapshotEncryptionKey.internalValue;
  }
}

export class ComputeRegionInstanceTemplateDiskList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionInstanceTemplateDisk[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionInstanceTemplateDiskOutputReference {
    return new ComputeRegionInstanceTemplateDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionInstanceTemplateGuestAccelerator {
  /**
  * The number of the guest accelerator cards exposed to this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#count ComputeRegionInstanceTemplate#count}
  */
  readonly count: number;
  /**
  * The accelerator type resource to expose to this instance. E.g. nvidia-tesla-k80.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#type ComputeRegionInstanceTemplate#type}
  */
  readonly type: string;
}

export function computeRegionInstanceTemplateGuestAcceleratorToTerraform(struct?: ComputeRegionInstanceTemplateGuestAccelerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function computeRegionInstanceTemplateGuestAcceleratorToHclTerraform(struct?: ComputeRegionInstanceTemplateGuestAccelerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionInstanceTemplateGuestAcceleratorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionInstanceTemplateGuestAccelerator | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeRegionInstanceTemplateGuestAccelerator | cdktf.IResolvable | undefined) {
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

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
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

export class ComputeRegionInstanceTemplateGuestAcceleratorList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionInstanceTemplateGuestAccelerator[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionInstanceTemplateGuestAcceleratorOutputReference {
    return new ComputeRegionInstanceTemplateGuestAcceleratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig {
  /**
  * The IP address that will be 1:1 mapped to the instance's network ip. If not given, one will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#nat_ip ComputeRegionInstanceTemplate#nat_ip}
  */
  readonly natIp?: string;
  /**
  * The networking tier used for configuring this instance template. This field can take the following values: PREMIUM, STANDARD, FIXED_STANDARD. If this field is not specified, it is assumed to be PREMIUM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#network_tier ComputeRegionInstanceTemplate#network_tier}
  */
  readonly networkTier?: string;
}

export function computeRegionInstanceTemplateNetworkInterfaceAccessConfigToTerraform(struct?: ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat_ip: cdktf.stringToTerraform(struct!.natIp),
    network_tier: cdktf.stringToTerraform(struct!.networkTier),
  }
}


export function computeRegionInstanceTemplateNetworkInterfaceAccessConfigToHclTerraform(struct?: ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nat_ip: {
      value: cdktf.stringToHclTerraform(struct!.natIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_tier: {
      value: cdktf.stringToHclTerraform(struct!.networkTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._natIp = undefined;
      this._networkTier = undefined;
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

  // public_ptr_domain_name - computed: true, optional: false, required: false
  public get publicPtrDomainName() {
    return this.getStringAttribute('public_ptr_domain_name');
  }
}

export class ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference {
    return new ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange {
  /**
  * The IP CIDR range represented by this alias IP range. This IP CIDR range must belong to the specified subnetwork and cannot contain IP addresses reserved by system or used by other network interfaces. At the time of writing only a netmask (e.g. /24) may be supplied, with a CIDR format resulting in an API error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#ip_cidr_range ComputeRegionInstanceTemplate#ip_cidr_range}
  */
  readonly ipCidrRange: string;
  /**
  * The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range. If left unspecified, the primary range of the subnetwork will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#subnetwork_range_name ComputeRegionInstanceTemplate#subnetwork_range_name}
  */
  readonly subnetworkRangeName?: string;
}

export function computeRegionInstanceTemplateNetworkInterfaceAliasIpRangeToTerraform(struct?: ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_cidr_range: cdktf.stringToTerraform(struct!.ipCidrRange),
    subnetwork_range_name: cdktf.stringToTerraform(struct!.subnetworkRangeName),
  }
}


export function computeRegionInstanceTemplateNetworkInterfaceAliasIpRangeToHclTerraform(struct?: ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_cidr_range: {
      value: cdktf.stringToHclTerraform(struct!.ipCidrRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork_range_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetworkRangeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange | cdktf.IResolvable | undefined) {
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

export class ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference {
    return new ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig {
  /**
  * The service-level to be provided for IPv6 traffic when the subnet has an external subnet. Only PREMIUM tier is valid for IPv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#network_tier ComputeRegionInstanceTemplate#network_tier}
  */
  readonly networkTier: string;
}

export function computeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigToTerraform(struct?: ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_tier: cdktf.stringToTerraform(struct!.networkTier),
  }
}


export function computeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigToHclTerraform(struct?: ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_tier: {
      value: cdktf.stringToHclTerraform(struct!.networkTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTier = this._networkTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkTier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkTier = value.networkTier;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // public_ptr_domain_name - computed: true, optional: false, required: false
  public get publicPtrDomainName() {
    return this.getStringAttribute('public_ptr_domain_name');
  }
}

export class ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference {
    return new ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionInstanceTemplateNetworkInterface {
  /**
  * The prefix length of the primary internal IPv6 range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#internal_ipv6_prefix_length ComputeRegionInstanceTemplate#internal_ipv6_prefix_length}
  */
  readonly internalIpv6PrefixLength?: number;
  /**
  * An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#ipv6_address ComputeRegionInstanceTemplate#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * The name or self_link of the network to attach this interface to. Use network attribute for Legacy or Auto subnetted networks and subnetwork for custom subnetted networks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#network ComputeRegionInstanceTemplate#network}
  */
  readonly network?: string;
  /**
  * The private IP address to assign to the instance. If empty, the address will be automatically assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#network_ip ComputeRegionInstanceTemplate#network_ip}
  */
  readonly networkIp?: string;
  /**
  * The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#nic_type ComputeRegionInstanceTemplate#nic_type}
  */
  readonly nicType?: string;
  /**
  * The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#queue_count ComputeRegionInstanceTemplate#queue_count}
  */
  readonly queueCount?: number;
  /**
  * The stack type for this network interface to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#stack_type ComputeRegionInstanceTemplate#stack_type}
  */
  readonly stackType?: string;
  /**
  * The name of the subnetwork to attach this interface to. The subnetwork must exist in the same region this instance will be created in. Either network or subnetwork must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#subnetwork ComputeRegionInstanceTemplate#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * The ID of the project in which the subnetwork belongs. If it is not provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#subnetwork_project ComputeRegionInstanceTemplate#subnetwork_project}
  */
  readonly subnetworkProject?: string;
  /**
  * access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#access_config ComputeRegionInstanceTemplate#access_config}
  */
  readonly accessConfig?: ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig[] | cdktf.IResolvable;
  /**
  * alias_ip_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#alias_ip_range ComputeRegionInstanceTemplate#alias_ip_range}
  */
  readonly aliasIpRange?: ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange[] | cdktf.IResolvable;
  /**
  * ipv6_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#ipv6_access_config ComputeRegionInstanceTemplate#ipv6_access_config}
  */
  readonly ipv6AccessConfig?: ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig[] | cdktf.IResolvable;
}

export function computeRegionInstanceTemplateNetworkInterfaceToTerraform(struct?: ComputeRegionInstanceTemplateNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internal_ipv6_prefix_length: cdktf.numberToTerraform(struct!.internalIpv6PrefixLength),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    network: cdktf.stringToTerraform(struct!.network),
    network_ip: cdktf.stringToTerraform(struct!.networkIp),
    nic_type: cdktf.stringToTerraform(struct!.nicType),
    queue_count: cdktf.numberToTerraform(struct!.queueCount),
    stack_type: cdktf.stringToTerraform(struct!.stackType),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
    subnetwork_project: cdktf.stringToTerraform(struct!.subnetworkProject),
    access_config: cdktf.listMapper(computeRegionInstanceTemplateNetworkInterfaceAccessConfigToTerraform, true)(struct!.accessConfig),
    alias_ip_range: cdktf.listMapper(computeRegionInstanceTemplateNetworkInterfaceAliasIpRangeToTerraform, true)(struct!.aliasIpRange),
    ipv6_access_config: cdktf.listMapper(computeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigToTerraform, true)(struct!.ipv6AccessConfig),
  }
}


export function computeRegionInstanceTemplateNetworkInterfaceToHclTerraform(struct?: ComputeRegionInstanceTemplateNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    internal_ipv6_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.internalIpv6PrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_ip: {
      value: cdktf.stringToHclTerraform(struct!.networkIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nic_type: {
      value: cdktf.stringToHclTerraform(struct!.nicType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_count: {
      value: cdktf.numberToHclTerraform(struct!.queueCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stack_type: {
      value: cdktf.stringToHclTerraform(struct!.stackType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork: {
      value: cdktf.stringToHclTerraform(struct!.subnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork_project: {
      value: cdktf.stringToHclTerraform(struct!.subnetworkProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_config: {
      value: cdktf.listMapperHcl(computeRegionInstanceTemplateNetworkInterfaceAccessConfigToHclTerraform, true)(struct!.accessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList",
    },
    alias_ip_range: {
      value: cdktf.listMapperHcl(computeRegionInstanceTemplateNetworkInterfaceAliasIpRangeToHclTerraform, true)(struct!.aliasIpRange),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList",
    },
    ipv6_access_config: {
      value: cdktf.listMapperHcl(computeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigToHclTerraform, true)(struct!.ipv6AccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionInstanceTemplateNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionInstanceTemplateNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalIpv6PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIpv6PrefixLength = this._internalIpv6PrefixLength;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
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

  public set internalValue(value: ComputeRegionInstanceTemplateNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._internalIpv6PrefixLength = undefined;
      this._ipv6Address = undefined;
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
      this._internalIpv6PrefixLength = value.internalIpv6PrefixLength;
      this._ipv6Address = value.ipv6Address;
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

  // internal_ipv6_prefix_length - computed: true, optional: true, required: false
  private _internalIpv6PrefixLength?: number; 
  public get internalIpv6PrefixLength() {
    return this.getNumberAttribute('internal_ipv6_prefix_length');
  }
  public set internalIpv6PrefixLength(value: number) {
    this._internalIpv6PrefixLength = value;
  }
  public resetInternalIpv6PrefixLength() {
    this._internalIpv6PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpv6PrefixLengthInput() {
    return this._internalIpv6PrefixLength;
  }

  // ipv6_access_type - computed: true, optional: false, required: false
  public get ipv6AccessType() {
    return this.getStringAttribute('ipv6_access_type');
  }

  // ipv6_address - computed: true, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
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

  // network_ip - computed: false, optional: true, required: false
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
  private _accessConfig = new ComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList(this, "access_config", false);
  public get accessConfig() {
    return this._accessConfig;
  }
  public putAccessConfig(value: ComputeRegionInstanceTemplateNetworkInterfaceAccessConfig[] | cdktf.IResolvable) {
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
  private _aliasIpRange = new ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList(this, "alias_ip_range", false);
  public get aliasIpRange() {
    return this._aliasIpRange;
  }
  public putAliasIpRange(value: ComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange[] | cdktf.IResolvable) {
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
  private _ipv6AccessConfig = new ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList(this, "ipv6_access_config", false);
  public get ipv6AccessConfig() {
    return this._ipv6AccessConfig;
  }
  public putIpv6AccessConfig(value: ComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig[] | cdktf.IResolvable) {
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

export class ComputeRegionInstanceTemplateNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionInstanceTemplateNetworkInterface[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionInstanceTemplateNetworkInterfaceOutputReference {
    return new ComputeRegionInstanceTemplateNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionInstanceTemplateNetworkPerformanceConfig {
  /**
  * The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#total_egress_bandwidth_tier ComputeRegionInstanceTemplate#total_egress_bandwidth_tier}
  */
  readonly totalEgressBandwidthTier: string;
}

export function computeRegionInstanceTemplateNetworkPerformanceConfigToTerraform(struct?: ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference | ComputeRegionInstanceTemplateNetworkPerformanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_egress_bandwidth_tier: cdktf.stringToTerraform(struct!.totalEgressBandwidthTier),
  }
}


export function computeRegionInstanceTemplateNetworkPerformanceConfigToHclTerraform(struct?: ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference | ComputeRegionInstanceTemplateNetworkPerformanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    total_egress_bandwidth_tier: {
      value: cdktf.stringToHclTerraform(struct!.totalEgressBandwidthTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionInstanceTemplateNetworkPerformanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalEgressBandwidthTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEgressBandwidthTier = this._totalEgressBandwidthTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionInstanceTemplateNetworkPerformanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalEgressBandwidthTier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalEgressBandwidthTier = value.totalEgressBandwidthTier;
    }
  }

  // total_egress_bandwidth_tier - computed: false, optional: false, required: true
  private _totalEgressBandwidthTier?: string; 
  public get totalEgressBandwidthTier() {
    return this.getStringAttribute('total_egress_bandwidth_tier');
  }
  public set totalEgressBandwidthTier(value: string) {
    this._totalEgressBandwidthTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEgressBandwidthTierInput() {
    return this._totalEgressBandwidthTier;
  }
}
export interface ComputeRegionInstanceTemplateReservationAffinitySpecificReservation {
  /**
  * Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#key ComputeRegionInstanceTemplate#key}
  */
  readonly key: string;
  /**
  * Corresponds to the label values of a reservation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#values ComputeRegionInstanceTemplate#values}
  */
  readonly values: string[];
}

export function computeRegionInstanceTemplateReservationAffinitySpecificReservationToTerraform(struct?: ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference | ComputeRegionInstanceTemplateReservationAffinitySpecificReservation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function computeRegionInstanceTemplateReservationAffinitySpecificReservationToHclTerraform(struct?: ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference | ComputeRegionInstanceTemplateReservationAffinitySpecificReservation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionInstanceTemplateReservationAffinitySpecificReservation | undefined {
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

  public set internalValue(value: ComputeRegionInstanceTemplateReservationAffinitySpecificReservation | undefined) {
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
export interface ComputeRegionInstanceTemplateReservationAffinity {
  /**
  * The type of reservation from which this instance can consume resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#type ComputeRegionInstanceTemplate#type}
  */
  readonly type: string;
  /**
  * specific_reservation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#specific_reservation ComputeRegionInstanceTemplate#specific_reservation}
  */
  readonly specificReservation?: ComputeRegionInstanceTemplateReservationAffinitySpecificReservation;
}

export function computeRegionInstanceTemplateReservationAffinityToTerraform(struct?: ComputeRegionInstanceTemplateReservationAffinityOutputReference | ComputeRegionInstanceTemplateReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    specific_reservation: computeRegionInstanceTemplateReservationAffinitySpecificReservationToTerraform(struct!.specificReservation),
  }
}


export function computeRegionInstanceTemplateReservationAffinityToHclTerraform(struct?: ComputeRegionInstanceTemplateReservationAffinityOutputReference | ComputeRegionInstanceTemplateReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_reservation: {
      value: computeRegionInstanceTemplateReservationAffinitySpecificReservationToHclTerraform(struct!.specificReservation),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeRegionInstanceTemplateReservationAffinitySpecificReservationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionInstanceTemplateReservationAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionInstanceTemplateReservationAffinity | undefined {
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

  public set internalValue(value: ComputeRegionInstanceTemplateReservationAffinity | undefined) {
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
  private _specificReservation = new ComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference(this, "specific_reservation");
  public get specificReservation() {
    return this._specificReservation;
  }
  public putSpecificReservation(value: ComputeRegionInstanceTemplateReservationAffinitySpecificReservation) {
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
export interface ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond
  * resolution. Durations less than one second are represented
  * with a 0 seconds field and a positive nanos field. Must
  * be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#nanos ComputeRegionInstanceTemplate#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second.
  * Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#seconds ComputeRegionInstanceTemplate#seconds}
  */
  readonly seconds: number;
}

export function computeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutToTerraform(struct?: ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function computeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutToHclTerraform(struct?: ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}

export class ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference {
    return new ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionInstanceTemplateSchedulingMaxRunDuration {
  /**
  * Span of time that's a fraction of a second at nanosecond
  * resolution. Durations less than one second are represented
  * with a 0 seconds field and a positive nanos field. Must
  * be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#nanos ComputeRegionInstanceTemplate#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second.
  * Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#seconds ComputeRegionInstanceTemplate#seconds}
  */
  readonly seconds: number;
}

export function computeRegionInstanceTemplateSchedulingMaxRunDurationToTerraform(struct?: ComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference | ComputeRegionInstanceTemplateSchedulingMaxRunDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function computeRegionInstanceTemplateSchedulingMaxRunDurationToHclTerraform(struct?: ComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference | ComputeRegionInstanceTemplateSchedulingMaxRunDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionInstanceTemplateSchedulingMaxRunDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionInstanceTemplateSchedulingMaxRunDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeRegionInstanceTemplateSchedulingNodeAffinities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#key ComputeRegionInstanceTemplate#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#operator ComputeRegionInstanceTemplate#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#values ComputeRegionInstanceTemplate#values}
  */
  readonly values: string[];
}

export function computeRegionInstanceTemplateSchedulingNodeAffinitiesToTerraform(struct?: ComputeRegionInstanceTemplateSchedulingNodeAffinities | cdktf.IResolvable): any {
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


export function computeRegionInstanceTemplateSchedulingNodeAffinitiesToHclTerraform(struct?: ComputeRegionInstanceTemplateSchedulingNodeAffinities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionInstanceTemplateSchedulingNodeAffinities | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeRegionInstanceTemplateSchedulingNodeAffinities | cdktf.IResolvable | undefined) {
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

export class ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionInstanceTemplateSchedulingNodeAffinities[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference {
    return new ComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionInstanceTemplateSchedulingOnInstanceStopAction {
  /**
  * If true, the contents of any attached Local SSD disks will be discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#discard_local_ssd ComputeRegionInstanceTemplate#discard_local_ssd}
  */
  readonly discardLocalSsd?: boolean | cdktf.IResolvable;
}

export function computeRegionInstanceTemplateSchedulingOnInstanceStopActionToTerraform(struct?: ComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference | ComputeRegionInstanceTemplateSchedulingOnInstanceStopAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discard_local_ssd: cdktf.booleanToTerraform(struct!.discardLocalSsd),
  }
}


export function computeRegionInstanceTemplateSchedulingOnInstanceStopActionToHclTerraform(struct?: ComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference | ComputeRegionInstanceTemplateSchedulingOnInstanceStopAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discard_local_ssd: {
      value: cdktf.booleanToHclTerraform(struct!.discardLocalSsd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionInstanceTemplateSchedulingOnInstanceStopAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discardLocalSsd !== undefined) {
      hasAnyValues = true;
      internalValueResult.discardLocalSsd = this._discardLocalSsd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionInstanceTemplateSchedulingOnInstanceStopAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._discardLocalSsd = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._discardLocalSsd = value.discardLocalSsd;
    }
  }

  // discard_local_ssd - computed: false, optional: true, required: false
  private _discardLocalSsd?: boolean | cdktf.IResolvable; 
  public get discardLocalSsd() {
    return this.getBooleanAttribute('discard_local_ssd');
  }
  public set discardLocalSsd(value: boolean | cdktf.IResolvable) {
    this._discardLocalSsd = value;
  }
  public resetDiscardLocalSsd() {
    this._discardLocalSsd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardLocalSsdInput() {
    return this._discardLocalSsd;
  }
}
export interface ComputeRegionInstanceTemplateScheduling {
  /**
  * Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user). This defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#automatic_restart ComputeRegionInstanceTemplate#automatic_restart}
  */
  readonly automaticRestart?: boolean | cdktf.IResolvable;
  /**
  * Specifies the action GCE should take when SPOT VM is preempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#instance_termination_action ComputeRegionInstanceTemplate#instance_termination_action}
  */
  readonly instanceTerminationAction?: string;
  /**
  * Minimum number of cpus for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#min_node_cpus ComputeRegionInstanceTemplate#min_node_cpus}
  */
  readonly minNodeCpus?: number;
  /**
  * Defines the maintenance behavior for this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#on_host_maintenance ComputeRegionInstanceTemplate#on_host_maintenance}
  */
  readonly onHostMaintenance?: string;
  /**
  * Allows instance to be preempted. This defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#preemptible ComputeRegionInstanceTemplate#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
  /**
  * Whether the instance is spot. If this is set as SPOT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#provisioning_model ComputeRegionInstanceTemplate#provisioning_model}
  */
  readonly provisioningModel?: string;
  /**
  * local_ssd_recovery_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#local_ssd_recovery_timeout ComputeRegionInstanceTemplate#local_ssd_recovery_timeout}
  */
  readonly localSsdRecoveryTimeout?: ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout[] | cdktf.IResolvable;
  /**
  * max_run_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#max_run_duration ComputeRegionInstanceTemplate#max_run_duration}
  */
  readonly maxRunDuration?: ComputeRegionInstanceTemplateSchedulingMaxRunDuration;
  /**
  * node_affinities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#node_affinities ComputeRegionInstanceTemplate#node_affinities}
  */
  readonly nodeAffinities?: ComputeRegionInstanceTemplateSchedulingNodeAffinities[] | cdktf.IResolvable;
  /**
  * on_instance_stop_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#on_instance_stop_action ComputeRegionInstanceTemplate#on_instance_stop_action}
  */
  readonly onInstanceStopAction?: ComputeRegionInstanceTemplateSchedulingOnInstanceStopAction;
}

export function computeRegionInstanceTemplateSchedulingToTerraform(struct?: ComputeRegionInstanceTemplateSchedulingOutputReference | ComputeRegionInstanceTemplateScheduling): any {
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
    local_ssd_recovery_timeout: cdktf.listMapper(computeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutToTerraform, true)(struct!.localSsdRecoveryTimeout),
    max_run_duration: computeRegionInstanceTemplateSchedulingMaxRunDurationToTerraform(struct!.maxRunDuration),
    node_affinities: cdktf.listMapper(computeRegionInstanceTemplateSchedulingNodeAffinitiesToTerraform, true)(struct!.nodeAffinities),
    on_instance_stop_action: computeRegionInstanceTemplateSchedulingOnInstanceStopActionToTerraform(struct!.onInstanceStopAction),
  }
}


export function computeRegionInstanceTemplateSchedulingToHclTerraform(struct?: ComputeRegionInstanceTemplateSchedulingOutputReference | ComputeRegionInstanceTemplateScheduling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_restart: {
      value: cdktf.booleanToHclTerraform(struct!.automaticRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_termination_action: {
      value: cdktf.stringToHclTerraform(struct!.instanceTerminationAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_node_cpus: {
      value: cdktf.numberToHclTerraform(struct!.minNodeCpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_host_maintenance: {
      value: cdktf.stringToHclTerraform(struct!.onHostMaintenance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preemptible: {
      value: cdktf.booleanToHclTerraform(struct!.preemptible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    provisioning_model: {
      value: cdktf.stringToHclTerraform(struct!.provisioningModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ssd_recovery_timeout: {
      value: cdktf.listMapperHcl(computeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutToHclTerraform, true)(struct!.localSsdRecoveryTimeout),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList",
    },
    max_run_duration: {
      value: computeRegionInstanceTemplateSchedulingMaxRunDurationToHclTerraform(struct!.maxRunDuration),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeRegionInstanceTemplateSchedulingMaxRunDurationList",
    },
    node_affinities: {
      value: cdktf.listMapperHcl(computeRegionInstanceTemplateSchedulingNodeAffinitiesToHclTerraform, true)(struct!.nodeAffinities),
      isBlock: true,
      type: "set",
      storageClassType: "ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList",
    },
    on_instance_stop_action: {
      value: computeRegionInstanceTemplateSchedulingOnInstanceStopActionToHclTerraform(struct!.onInstanceStopAction),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionInstanceTemplateSchedulingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionInstanceTemplateScheduling | undefined {
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
    if (this._localSsdRecoveryTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdRecoveryTimeout = this._localSsdRecoveryTimeout?.internalValue;
    }
    if (this._maxRunDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRunDuration = this._maxRunDuration?.internalValue;
    }
    if (this._nodeAffinities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinities = this._nodeAffinities?.internalValue;
    }
    if (this._onInstanceStopAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onInstanceStopAction = this._onInstanceStopAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionInstanceTemplateScheduling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticRestart = undefined;
      this._instanceTerminationAction = undefined;
      this._minNodeCpus = undefined;
      this._onHostMaintenance = undefined;
      this._preemptible = undefined;
      this._provisioningModel = undefined;
      this._localSsdRecoveryTimeout.internalValue = undefined;
      this._maxRunDuration.internalValue = undefined;
      this._nodeAffinities.internalValue = undefined;
      this._onInstanceStopAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticRestart = value.automaticRestart;
      this._instanceTerminationAction = value.instanceTerminationAction;
      this._minNodeCpus = value.minNodeCpus;
      this._onHostMaintenance = value.onHostMaintenance;
      this._preemptible = value.preemptible;
      this._provisioningModel = value.provisioningModel;
      this._localSsdRecoveryTimeout.internalValue = value.localSsdRecoveryTimeout;
      this._maxRunDuration.internalValue = value.maxRunDuration;
      this._nodeAffinities.internalValue = value.nodeAffinities;
      this._onInstanceStopAction.internalValue = value.onInstanceStopAction;
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

  // local_ssd_recovery_timeout - computed: false, optional: true, required: false
  private _localSsdRecoveryTimeout = new ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList(this, "local_ssd_recovery_timeout", false);
  public get localSsdRecoveryTimeout() {
    return this._localSsdRecoveryTimeout;
  }
  public putLocalSsdRecoveryTimeout(value: ComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout[] | cdktf.IResolvable) {
    this._localSsdRecoveryTimeout.internalValue = value;
  }
  public resetLocalSsdRecoveryTimeout() {
    this._localSsdRecoveryTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdRecoveryTimeoutInput() {
    return this._localSsdRecoveryTimeout.internalValue;
  }

  // max_run_duration - computed: false, optional: true, required: false
  private _maxRunDuration = new ComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference(this, "max_run_duration");
  public get maxRunDuration() {
    return this._maxRunDuration;
  }
  public putMaxRunDuration(value: ComputeRegionInstanceTemplateSchedulingMaxRunDuration) {
    this._maxRunDuration.internalValue = value;
  }
  public resetMaxRunDuration() {
    this._maxRunDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRunDurationInput() {
    return this._maxRunDuration.internalValue;
  }

  // node_affinities - computed: false, optional: true, required: false
  private _nodeAffinities = new ComputeRegionInstanceTemplateSchedulingNodeAffinitiesList(this, "node_affinities", true);
  public get nodeAffinities() {
    return this._nodeAffinities;
  }
  public putNodeAffinities(value: ComputeRegionInstanceTemplateSchedulingNodeAffinities[] | cdktf.IResolvable) {
    this._nodeAffinities.internalValue = value;
  }
  public resetNodeAffinities() {
    this._nodeAffinities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinitiesInput() {
    return this._nodeAffinities.internalValue;
  }

  // on_instance_stop_action - computed: false, optional: true, required: false
  private _onInstanceStopAction = new ComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference(this, "on_instance_stop_action");
  public get onInstanceStopAction() {
    return this._onInstanceStopAction;
  }
  public putOnInstanceStopAction(value: ComputeRegionInstanceTemplateSchedulingOnInstanceStopAction) {
    this._onInstanceStopAction.internalValue = value;
  }
  public resetOnInstanceStopAction() {
    this._onInstanceStopAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onInstanceStopActionInput() {
    return this._onInstanceStopAction.internalValue;
  }
}
export interface ComputeRegionInstanceTemplateServiceAccount {
  /**
  * The service account e-mail address. If not given, the default Google Compute Engine service account is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#email ComputeRegionInstanceTemplate#email}
  */
  readonly email?: string;
  /**
  * A list of service scopes. Both OAuth2 URLs and gcloud short names are supported. To allow full access to all Cloud APIs, use the cloud-platform scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#scopes ComputeRegionInstanceTemplate#scopes}
  */
  readonly scopes: string[];
}

export function computeRegionInstanceTemplateServiceAccountToTerraform(struct?: ComputeRegionInstanceTemplateServiceAccountOutputReference | ComputeRegionInstanceTemplateServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
  }
}


export function computeRegionInstanceTemplateServiceAccountToHclTerraform(struct?: ComputeRegionInstanceTemplateServiceAccountOutputReference | ComputeRegionInstanceTemplateServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionInstanceTemplateServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionInstanceTemplateServiceAccount | undefined {
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

  public set internalValue(value: ComputeRegionInstanceTemplateServiceAccount | undefined) {
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
export interface ComputeRegionInstanceTemplateShieldedInstanceConfig {
  /**
  * Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#enable_integrity_monitoring ComputeRegionInstanceTemplate#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Verify the digital signature of all boot components, and halt the boot process if signature verification fails. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#enable_secure_boot ComputeRegionInstanceTemplate#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
  /**
  * Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#enable_vtpm ComputeRegionInstanceTemplate#enable_vtpm}
  */
  readonly enableVtpm?: boolean | cdktf.IResolvable;
}

export function computeRegionInstanceTemplateShieldedInstanceConfigToTerraform(struct?: ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference | ComputeRegionInstanceTemplateShieldedInstanceConfig): any {
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


export function computeRegionInstanceTemplateShieldedInstanceConfigToHclTerraform(struct?: ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference | ComputeRegionInstanceTemplateShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_integrity_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.enableIntegrityMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_secure_boot: {
      value: cdktf.booleanToHclTerraform(struct!.enableSecureBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_vtpm: {
      value: cdktf.booleanToHclTerraform(struct!.enableVtpm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionInstanceTemplateShieldedInstanceConfig | undefined {
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

  public set internalValue(value: ComputeRegionInstanceTemplateShieldedInstanceConfig | undefined) {
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
export interface ComputeRegionInstanceTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#create ComputeRegionInstanceTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#delete ComputeRegionInstanceTemplate#delete}
  */
  readonly delete?: string;
}

export function computeRegionInstanceTemplateTimeoutsToTerraform(struct?: ComputeRegionInstanceTemplateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function computeRegionInstanceTemplateTimeoutsToHclTerraform(struct?: ComputeRegionInstanceTemplateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRegionInstanceTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeRegionInstanceTemplateTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionInstanceTemplateTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template google_compute_region_instance_template}
*/
export class ComputeRegionInstanceTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_region_instance_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeRegionInstanceTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeRegionInstanceTemplate to import
  * @param importFromId The id of the existing ComputeRegionInstanceTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeRegionInstanceTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_region_instance_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_instance_template google_compute_region_instance_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeRegionInstanceTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeRegionInstanceTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_instance_template',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.40.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._canIpForward = config.canIpForward;
    this._description = config.description;
    this._id = config.id;
    this._instanceDescription = config.instanceDescription;
    this._labels = config.labels;
    this._machineType = config.machineType;
    this._metadata = config.metadata;
    this._metadataStartupScript = config.metadataStartupScript;
    this._minCpuPlatform = config.minCpuPlatform;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._project = config.project;
    this._region = config.region;
    this._resourceManagerTags = config.resourceManagerTags;
    this._resourcePolicies = config.resourcePolicies;
    this._tags = config.tags;
    this._advancedMachineFeatures.internalValue = config.advancedMachineFeatures;
    this._confidentialInstanceConfig.internalValue = config.confidentialInstanceConfig;
    this._disk.internalValue = config.disk;
    this._guestAccelerator.internalValue = config.guestAccelerator;
    this._networkInterface.internalValue = config.networkInterface;
    this._networkPerformanceConfig.internalValue = config.networkPerformanceConfig;
    this._reservationAffinity.internalValue = config.reservationAffinity;
    this._scheduling.internalValue = config.scheduling;
    this._serviceAccount.internalValue = config.serviceAccount;
    this._shieldedInstanceConfig.internalValue = config.shieldedInstanceConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // instance_description - computed: false, optional: true, required: false
  private _instanceDescription?: string; 
  public get instanceDescription() {
    return this.getStringAttribute('instance_description');
  }
  public set instanceDescription(value: string) {
    this._instanceDescription = value;
  }
  public resetInstanceDescription() {
    this._instanceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceDescriptionInput() {
    return this._instanceDescription;
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

  // min_cpu_platform - computed: false, optional: true, required: false
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resource_manager_tags - computed: false, optional: true, required: false
  private _resourceManagerTags?: { [key: string]: string }; 
  public get resourceManagerTags() {
    return this.getStringMapAttribute('resource_manager_tags');
  }
  public set resourceManagerTags(value: { [key: string]: string }) {
    this._resourceManagerTags = value;
  }
  public resetResourceManagerTags() {
    this._resourceManagerTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerTagsInput() {
    return this._resourceManagerTags;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // advanced_machine_features - computed: false, optional: true, required: false
  private _advancedMachineFeatures = new ComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference(this, "advanced_machine_features");
  public get advancedMachineFeatures() {
    return this._advancedMachineFeatures;
  }
  public putAdvancedMachineFeatures(value: ComputeRegionInstanceTemplateAdvancedMachineFeatures) {
    this._advancedMachineFeatures.internalValue = value;
  }
  public resetAdvancedMachineFeatures() {
    this._advancedMachineFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedMachineFeaturesInput() {
    return this._advancedMachineFeatures.internalValue;
  }

  // confidential_instance_config - computed: false, optional: true, required: false
  private _confidentialInstanceConfig = new ComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference(this, "confidential_instance_config");
  public get confidentialInstanceConfig() {
    return this._confidentialInstanceConfig;
  }
  public putConfidentialInstanceConfig(value: ComputeRegionInstanceTemplateConfidentialInstanceConfig) {
    this._confidentialInstanceConfig.internalValue = value;
  }
  public resetConfidentialInstanceConfig() {
    this._confidentialInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialInstanceConfigInput() {
    return this._confidentialInstanceConfig.internalValue;
  }

  // disk - computed: false, optional: false, required: true
  private _disk = new ComputeRegionInstanceTemplateDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ComputeRegionInstanceTemplateDisk[] | cdktf.IResolvable) {
    this._disk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // guest_accelerator - computed: false, optional: true, required: false
  private _guestAccelerator = new ComputeRegionInstanceTemplateGuestAcceleratorList(this, "guest_accelerator", false);
  public get guestAccelerator() {
    return this._guestAccelerator;
  }
  public putGuestAccelerator(value: ComputeRegionInstanceTemplateGuestAccelerator[] | cdktf.IResolvable) {
    this._guestAccelerator.internalValue = value;
  }
  public resetGuestAccelerator() {
    this._guestAccelerator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorInput() {
    return this._guestAccelerator.internalValue;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface = new ComputeRegionInstanceTemplateNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: ComputeRegionInstanceTemplateNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  public resetNetworkInterface() {
    this._networkInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // network_performance_config - computed: false, optional: true, required: false
  private _networkPerformanceConfig = new ComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference(this, "network_performance_config");
  public get networkPerformanceConfig() {
    return this._networkPerformanceConfig;
  }
  public putNetworkPerformanceConfig(value: ComputeRegionInstanceTemplateNetworkPerformanceConfig) {
    this._networkPerformanceConfig.internalValue = value;
  }
  public resetNetworkPerformanceConfig() {
    this._networkPerformanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPerformanceConfigInput() {
    return this._networkPerformanceConfig.internalValue;
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity = new ComputeRegionInstanceTemplateReservationAffinityOutputReference(this, "reservation_affinity");
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: ComputeRegionInstanceTemplateReservationAffinity) {
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
  private _scheduling = new ComputeRegionInstanceTemplateSchedulingOutputReference(this, "scheduling");
  public get scheduling() {
    return this._scheduling;
  }
  public putScheduling(value: ComputeRegionInstanceTemplateScheduling) {
    this._scheduling.internalValue = value;
  }
  public resetScheduling() {
    this._scheduling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingInput() {
    return this._scheduling.internalValue;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount = new ComputeRegionInstanceTemplateServiceAccountOutputReference(this, "service_account");
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public putServiceAccount(value: ComputeRegionInstanceTemplateServiceAccount) {
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
  private _shieldedInstanceConfig = new ComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: ComputeRegionInstanceTemplateShieldedInstanceConfig) {
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
  private _timeouts = new ComputeRegionInstanceTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeRegionInstanceTemplateTimeouts) {
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
      can_ip_forward: cdktf.booleanToTerraform(this._canIpForward),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      instance_description: cdktf.stringToTerraform(this._instanceDescription),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      machine_type: cdktf.stringToTerraform(this._machineType),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      metadata_startup_script: cdktf.stringToTerraform(this._metadataStartupScript),
      min_cpu_platform: cdktf.stringToTerraform(this._minCpuPlatform),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      resource_manager_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._resourceManagerTags),
      resource_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourcePolicies),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      advanced_machine_features: computeRegionInstanceTemplateAdvancedMachineFeaturesToTerraform(this._advancedMachineFeatures.internalValue),
      confidential_instance_config: computeRegionInstanceTemplateConfidentialInstanceConfigToTerraform(this._confidentialInstanceConfig.internalValue),
      disk: cdktf.listMapper(computeRegionInstanceTemplateDiskToTerraform, true)(this._disk.internalValue),
      guest_accelerator: cdktf.listMapper(computeRegionInstanceTemplateGuestAcceleratorToTerraform, true)(this._guestAccelerator.internalValue),
      network_interface: cdktf.listMapper(computeRegionInstanceTemplateNetworkInterfaceToTerraform, true)(this._networkInterface.internalValue),
      network_performance_config: computeRegionInstanceTemplateNetworkPerformanceConfigToTerraform(this._networkPerformanceConfig.internalValue),
      reservation_affinity: computeRegionInstanceTemplateReservationAffinityToTerraform(this._reservationAffinity.internalValue),
      scheduling: computeRegionInstanceTemplateSchedulingToTerraform(this._scheduling.internalValue),
      service_account: computeRegionInstanceTemplateServiceAccountToTerraform(this._serviceAccount.internalValue),
      shielded_instance_config: computeRegionInstanceTemplateShieldedInstanceConfigToTerraform(this._shieldedInstanceConfig.internalValue),
      timeouts: computeRegionInstanceTemplateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      can_ip_forward: {
        value: cdktf.booleanToHclTerraform(this._canIpForward),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_description: {
        value: cdktf.stringToHclTerraform(this._instanceDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      machine_type: {
        value: cdktf.stringToHclTerraform(this._machineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      metadata_startup_script: {
        value: cdktf.stringToHclTerraform(this._metadataStartupScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_cpu_platform: {
        value: cdktf.stringToHclTerraform(this._minCpuPlatform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_manager_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._resourceManagerTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      resource_policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourcePolicies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      advanced_machine_features: {
        value: computeRegionInstanceTemplateAdvancedMachineFeaturesToHclTerraform(this._advancedMachineFeatures.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeRegionInstanceTemplateAdvancedMachineFeaturesList",
      },
      confidential_instance_config: {
        value: computeRegionInstanceTemplateConfidentialInstanceConfigToHclTerraform(this._confidentialInstanceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeRegionInstanceTemplateConfidentialInstanceConfigList",
      },
      disk: {
        value: cdktf.listMapperHcl(computeRegionInstanceTemplateDiskToHclTerraform, true)(this._disk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeRegionInstanceTemplateDiskList",
      },
      guest_accelerator: {
        value: cdktf.listMapperHcl(computeRegionInstanceTemplateGuestAcceleratorToHclTerraform, true)(this._guestAccelerator.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeRegionInstanceTemplateGuestAcceleratorList",
      },
      network_interface: {
        value: cdktf.listMapperHcl(computeRegionInstanceTemplateNetworkInterfaceToHclTerraform, true)(this._networkInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeRegionInstanceTemplateNetworkInterfaceList",
      },
      network_performance_config: {
        value: computeRegionInstanceTemplateNetworkPerformanceConfigToHclTerraform(this._networkPerformanceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeRegionInstanceTemplateNetworkPerformanceConfigList",
      },
      reservation_affinity: {
        value: computeRegionInstanceTemplateReservationAffinityToHclTerraform(this._reservationAffinity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeRegionInstanceTemplateReservationAffinityList",
      },
      scheduling: {
        value: computeRegionInstanceTemplateSchedulingToHclTerraform(this._scheduling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeRegionInstanceTemplateSchedulingList",
      },
      service_account: {
        value: computeRegionInstanceTemplateServiceAccountToHclTerraform(this._serviceAccount.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeRegionInstanceTemplateServiceAccountList",
      },
      shielded_instance_config: {
        value: computeRegionInstanceTemplateShieldedInstanceConfigToHclTerraform(this._shieldedInstanceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeRegionInstanceTemplateShieldedInstanceConfigList",
      },
      timeouts: {
        value: computeRegionInstanceTemplateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeRegionInstanceTemplateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
