// https://www.terraform.io/docs/providers/google/r/compute_instance_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeInstanceTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#can_ip_forward ComputeInstanceTemplate#can_ip_forward}
  */
  readonly canIpForward?: boolean | cdktf.IResolvable;
  /**
  * A brief description of this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#description ComputeInstanceTemplate#description}
  */
  readonly description?: string;
  /**
  * Enable Virtual Displays on this instance. Note: allow_stopping_for_update must be set to true in order to update this field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#enable_display ComputeInstanceTemplate#enable_display}
  */
  readonly enableDisplay?: boolean | cdktf.IResolvable;
  /**
  * A description of the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#instance_description ComputeInstanceTemplate#instance_description}
  */
  readonly instanceDescription?: string;
  /**
  * A set of key/value label pairs to assign to instances created from this template,
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#labels ComputeInstanceTemplate#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The machine type to create. To create a machine with a custom type (such as extended memory), format the value like custom-VCPUS-MEM_IN_MB like custom-6-20480 for 6 vCPU and 20GB of RAM.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#machine_type ComputeInstanceTemplate#machine_type}
  */
  readonly machineType: string;
  /**
  * Metadata key/value pairs to make available from within instances created from this template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#metadata ComputeInstanceTemplate#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * An alternative to using the startup-script metadata key, mostly to match the compute_instance resource. This replaces the startup-script metadata key on the created instance and thus the two mechanisms are not allowed to be used simultaneously.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#metadata_startup_script ComputeInstanceTemplate#metadata_startup_script}
  */
  readonly metadataStartupScript?: string;
  /**
  * Specifies a minimum CPU platform. Applicable values are the friendly names of CPU platforms, such as Intel Haswell or Intel Skylake.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#min_cpu_platform ComputeInstanceTemplate#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#name ComputeInstanceTemplate#name}
  */
  readonly name?: string;
  /**
  * Creates a unique name beginning with the specified prefix. Conflicts with name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#name_prefix ComputeInstanceTemplate#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#project ComputeInstanceTemplate#project}
  */
  readonly project?: string;
  /**
  * An instance template is a global resource that is not bound to a zone or a region. However, you can still specify some regional resources in an instance template, which restricts the template to the region where that resource resides. For example, a custom subnetwork resource is tied to a specific region. Defaults to the region of the Provider if no value is given.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#region ComputeInstanceTemplate#region}
  */
  readonly region?: string;
  /**
  * Tags to attach to the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#tags ComputeInstanceTemplate#tags}
  */
  readonly tags?: string[];
  /**
  * advanced_machine_features block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#advanced_machine_features ComputeInstanceTemplate#advanced_machine_features}
  */
  readonly advancedMachineFeatures?: ComputeInstanceTemplateAdvancedMachineFeatures;
  /**
  * confidential_instance_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#confidential_instance_config ComputeInstanceTemplate#confidential_instance_config}
  */
  readonly confidentialInstanceConfig?: ComputeInstanceTemplateConfidentialInstanceConfig;
  /**
  * disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#disk ComputeInstanceTemplate#disk}
  */
  readonly disk: ComputeInstanceTemplateDisk[];
  /**
  * guest_accelerator block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#guest_accelerator ComputeInstanceTemplate#guest_accelerator}
  */
  readonly guestAccelerator?: ComputeInstanceTemplateGuestAccelerator[];
  /**
  * network_interface block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#network_interface ComputeInstanceTemplate#network_interface}
  */
  readonly networkInterface?: ComputeInstanceTemplateNetworkInterface[];
  /**
  * reservation_affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#reservation_affinity ComputeInstanceTemplate#reservation_affinity}
  */
  readonly reservationAffinity?: ComputeInstanceTemplateReservationAffinity;
  /**
  * scheduling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#scheduling ComputeInstanceTemplate#scheduling}
  */
  readonly scheduling?: ComputeInstanceTemplateScheduling;
  /**
  * service_account block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#service_account ComputeInstanceTemplate#service_account}
  */
  readonly serviceAccount?: ComputeInstanceTemplateServiceAccount;
  /**
  * shielded_instance_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#shielded_instance_config ComputeInstanceTemplate#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: ComputeInstanceTemplateShieldedInstanceConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#timeouts ComputeInstanceTemplate#timeouts}
  */
  readonly timeouts?: ComputeInstanceTemplateTimeouts;
}
export interface ComputeInstanceTemplateAdvancedMachineFeatures {
  /**
  * Whether to enable nested virtualization or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#enable_nested_virtualization ComputeInstanceTemplate#enable_nested_virtualization}
  */
  readonly enableNestedVirtualization?: boolean | cdktf.IResolvable;
  /**
  * The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#threads_per_core ComputeInstanceTemplate#threads_per_core}
  */
  readonly threadsPerCore?: number;
}

function computeInstanceTemplateAdvancedMachineFeaturesToTerraform(struct?: ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference | ComputeInstanceTemplateAdvancedMachineFeatures): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_nested_virtualization: cdktf.booleanToTerraform(struct!.enableNestedVirtualization),
    threads_per_core: cdktf.numberToTerraform(struct!.threadsPerCore),
  }
}

export class ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enable_nested_virtualization - computed: false, optional: true, required: false
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

  // threads_per_core - computed: false, optional: true, required: false
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
export interface ComputeInstanceTemplateConfidentialInstanceConfig {
  /**
  * Defines whether the instance should have confidential compute enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#enable_confidential_compute ComputeInstanceTemplate#enable_confidential_compute}
  */
  readonly enableConfidentialCompute: boolean | cdktf.IResolvable;
}

function computeInstanceTemplateConfidentialInstanceConfigToTerraform(struct?: ComputeInstanceTemplateConfidentialInstanceConfigOutputReference | ComputeInstanceTemplateConfidentialInstanceConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_confidential_compute: cdktf.booleanToTerraform(struct!.enableConfidentialCompute),
  }
}

export class ComputeInstanceTemplateConfidentialInstanceConfigOutputReference extends cdktf.ComplexObject {
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
export interface ComputeInstanceTemplateDiskDiskEncryptionKey {
  /**
  * The self link of the encryption key that is stored in Google Cloud KMS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#kms_key_self_link ComputeInstanceTemplate#kms_key_self_link}
  */
  readonly kmsKeySelfLink: string;
}

function computeInstanceTemplateDiskDiskEncryptionKeyToTerraform(struct?: ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference | ComputeInstanceTemplateDiskDiskEncryptionKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_self_link: cdktf.stringToTerraform(struct!.kmsKeySelfLink),
  }
}

export class ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._kmsKeySelfLink
  }
}
export interface ComputeInstanceTemplateDisk {
  /**
  * Whether or not the disk should be auto-deleted. This defaults to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#auto_delete ComputeInstanceTemplate#auto_delete}
  */
  readonly autoDelete?: boolean | cdktf.IResolvable;
  /**
  * Indicates that this is a boot disk.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#boot ComputeInstanceTemplate#boot}
  */
  readonly boot?: boolean | cdktf.IResolvable;
  /**
  * A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. If not specified, the server chooses a default device name to apply to this disk.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#device_name ComputeInstanceTemplate#device_name}
  */
  readonly deviceName?: string;
  /**
  * Name of the disk. When not provided, this defaults to the name of the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#disk_name ComputeInstanceTemplate#disk_name}
  */
  readonly diskName?: string;
  /**
  * The size of the image in gigabytes. If not specified, it will inherit the size of its base image. For SCRATCH disks, the size must be exactly 375GB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#disk_size_gb ComputeInstanceTemplate#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * The Google Compute Engine disk type. Can be either "pd-ssd", "local-ssd", "pd-balanced" or "pd-standard".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#disk_type ComputeInstanceTemplate#disk_type}
  */
  readonly diskType?: string;
  /**
  * Specifies the disk interface to use for attaching this disk.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#interface ComputeInstanceTemplate#interface}
  */
  readonly interface?: string;
  /**
  * A set of key/value label pairs to assign to disks,
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#labels ComputeInstanceTemplate#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The mode in which to attach this disk, either READ_WRITE or READ_ONLY. If you are attaching or creating a boot disk, this must read-write mode.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#mode ComputeInstanceTemplate#mode}
  */
  readonly mode?: string;
  /**
  * A list (short name or id) of resource policies to attach to this disk. Currently a max of 1 resource policy is supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#resource_policies ComputeInstanceTemplate#resource_policies}
  */
  readonly resourcePolicies?: string[];
  /**
  * The name (not self_link) of the disk (such as those managed by google_compute_disk) to attach. ~> Note: Either source or source_image is required when creating a new instance except for when creating a local SSD.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#source ComputeInstanceTemplate#source}
  */
  readonly source?: string;
  /**
  * The image from which to initialize this disk. This can be one of: the image's self_link, projects/{project}/global/images/{image}, projects/{project}/global/images/family/{family}, global/images/{image}, global/images/family/{family}, family/{family}, {project}/{family}, {project}/{image}, {family}, or {image}. ~> Note: Either source or source_image is required when creating a new instance except for when creating a local SSD.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#source_image ComputeInstanceTemplate#source_image}
  */
  readonly sourceImage?: string;
  /**
  * The type of Google Compute Engine disk, can be either "SCRATCH" or "PERSISTENT".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#type ComputeInstanceTemplate#type}
  */
  readonly type?: string;
  /**
  * disk_encryption_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#disk_encryption_key ComputeInstanceTemplate#disk_encryption_key}
  */
  readonly diskEncryptionKey?: ComputeInstanceTemplateDiskDiskEncryptionKey;
}

function computeInstanceTemplateDiskToTerraform(struct?: ComputeInstanceTemplateDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    mode: cdktf.stringToTerraform(struct!.mode),
    resource_policies: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resourcePolicies),
    source: cdktf.stringToTerraform(struct!.source),
    source_image: cdktf.stringToTerraform(struct!.sourceImage),
    type: cdktf.stringToTerraform(struct!.type),
    disk_encryption_key: computeInstanceTemplateDiskDiskEncryptionKeyToTerraform(struct!.diskEncryptionKey),
  }
}

export interface ComputeInstanceTemplateGuestAccelerator {
  /**
  * The number of the guest accelerator cards exposed to this instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#count ComputeInstanceTemplate#count}
  */
  readonly count: number;
  /**
  * The accelerator type resource to expose to this instance. E.g. nvidia-tesla-k80.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#type ComputeInstanceTemplate#type}
  */
  readonly type: string;
}

function computeInstanceTemplateGuestAcceleratorToTerraform(struct?: ComputeInstanceTemplateGuestAccelerator): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ComputeInstanceTemplateNetworkInterfaceAccessConfig {
  /**
  * The IP address that will be 1:1 mapped to the instance's network ip. If not given, one will be generated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#nat_ip ComputeInstanceTemplate#nat_ip}
  */
  readonly natIp?: string;
  /**
  * The networking tier used for configuring this instance template. This field can take the following values: PREMIUM or STANDARD. If this field is not specified, it is assumed to be PREMIUM.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#network_tier ComputeInstanceTemplate#network_tier}
  */
  readonly networkTier?: string;
}

function computeInstanceTemplateNetworkInterfaceAccessConfigToTerraform(struct?: ComputeInstanceTemplateNetworkInterfaceAccessConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat_ip: cdktf.stringToTerraform(struct!.natIp),
    network_tier: cdktf.stringToTerraform(struct!.networkTier),
  }
}

export interface ComputeInstanceTemplateNetworkInterfaceAliasIpRange {
  /**
  * The IP CIDR range represented by this alias IP range. This IP CIDR range must belong to the specified subnetwork and cannot contain IP addresses reserved by system or used by other network interfaces. At the time of writing only a netmask (e.g. /24) may be supplied, with a CIDR format resulting in an API error.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#ip_cidr_range ComputeInstanceTemplate#ip_cidr_range}
  */
  readonly ipCidrRange: string;
  /**
  * The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range. If left unspecified, the primary range of the subnetwork will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#subnetwork_range_name ComputeInstanceTemplate#subnetwork_range_name}
  */
  readonly subnetworkRangeName?: string;
}

function computeInstanceTemplateNetworkInterfaceAliasIpRangeToTerraform(struct?: ComputeInstanceTemplateNetworkInterfaceAliasIpRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_cidr_range: cdktf.stringToTerraform(struct!.ipCidrRange),
    subnetwork_range_name: cdktf.stringToTerraform(struct!.subnetworkRangeName),
  }
}

export interface ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig {
  /**
  * The service-level to be provided for IPv6 traffic when the subnet has an external subnet. Only PREMIUM tier is valid for IPv6
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#network_tier ComputeInstanceTemplate#network_tier}
  */
  readonly networkTier: string;
}

function computeInstanceTemplateNetworkInterfaceIpv6AccessConfigToTerraform(struct?: ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_tier: cdktf.stringToTerraform(struct!.networkTier),
  }
}

export interface ComputeInstanceTemplateNetworkInterface {
  /**
  * The name or self_link of the network to attach this interface to. Use network attribute for Legacy or Auto subnetted networks and subnetwork for custom subnetted networks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#network ComputeInstanceTemplate#network}
  */
  readonly network?: string;
  /**
  * The private IP address to assign to the instance. If empty, the address will be automatically assigned.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#network_ip ComputeInstanceTemplate#network_ip}
  */
  readonly networkIp?: string;
  /**
  * The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#nic_type ComputeInstanceTemplate#nic_type}
  */
  readonly nicType?: string;
  /**
  * The stack type for this network interface to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#stack_type ComputeInstanceTemplate#stack_type}
  */
  readonly stackType?: string;
  /**
  * The name of the subnetwork to attach this interface to. The subnetwork must exist in the same region this instance will be created in. Either network or subnetwork must be provided.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#subnetwork ComputeInstanceTemplate#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * The ID of the project in which the subnetwork belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#subnetwork_project ComputeInstanceTemplate#subnetwork_project}
  */
  readonly subnetworkProject?: string;
  /**
  * access_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#access_config ComputeInstanceTemplate#access_config}
  */
  readonly accessConfig?: ComputeInstanceTemplateNetworkInterfaceAccessConfig[];
  /**
  * alias_ip_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#alias_ip_range ComputeInstanceTemplate#alias_ip_range}
  */
  readonly aliasIpRange?: ComputeInstanceTemplateNetworkInterfaceAliasIpRange[];
  /**
  * ipv6_access_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#ipv6_access_config ComputeInstanceTemplate#ipv6_access_config}
  */
  readonly ipv6AccessConfig?: ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig[];
}

function computeInstanceTemplateNetworkInterfaceToTerraform(struct?: ComputeInstanceTemplateNetworkInterface): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    network_ip: cdktf.stringToTerraform(struct!.networkIp),
    nic_type: cdktf.stringToTerraform(struct!.nicType),
    stack_type: cdktf.stringToTerraform(struct!.stackType),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
    subnetwork_project: cdktf.stringToTerraform(struct!.subnetworkProject),
    access_config: cdktf.listMapper(computeInstanceTemplateNetworkInterfaceAccessConfigToTerraform)(struct!.accessConfig),
    alias_ip_range: cdktf.listMapper(computeInstanceTemplateNetworkInterfaceAliasIpRangeToTerraform)(struct!.aliasIpRange),
    ipv6_access_config: cdktf.listMapper(computeInstanceTemplateNetworkInterfaceIpv6AccessConfigToTerraform)(struct!.ipv6AccessConfig),
  }
}

export interface ComputeInstanceTemplateReservationAffinitySpecificReservation {
  /**
  * Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#key ComputeInstanceTemplate#key}
  */
  readonly key: string;
  /**
  * Corresponds to the label values of a reservation resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#values ComputeInstanceTemplate#values}
  */
  readonly values: string[];
}

function computeInstanceTemplateReservationAffinitySpecificReservationToTerraform(struct?: ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference | ComputeInstanceTemplateReservationAffinitySpecificReservation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference extends cdktf.ComplexObject {
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
export interface ComputeInstanceTemplateReservationAffinity {
  /**
  * The type of reservation from which this instance can consume resources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#type ComputeInstanceTemplate#type}
  */
  readonly type: string;
  /**
  * specific_reservation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#specific_reservation ComputeInstanceTemplate#specific_reservation}
  */
  readonly specificReservation?: ComputeInstanceTemplateReservationAffinitySpecificReservation;
}

function computeInstanceTemplateReservationAffinityToTerraform(struct?: ComputeInstanceTemplateReservationAffinityOutputReference | ComputeInstanceTemplateReservationAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    specific_reservation: computeInstanceTemplateReservationAffinitySpecificReservationToTerraform(struct!.specificReservation),
  }
}

export class ComputeInstanceTemplateReservationAffinityOutputReference extends cdktf.ComplexObject {
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
  private _specificReservation?: ComputeInstanceTemplateReservationAffinitySpecificReservation | undefined; 
  private __specificReservationOutput = new ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference(this as any, "specific_reservation", true);
  public get specificReservation() {
    return this.__specificReservationOutput;
  }
  public putSpecificReservation(value: ComputeInstanceTemplateReservationAffinitySpecificReservation | undefined) {
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
export interface ComputeInstanceTemplateSchedulingNodeAffinities {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#key ComputeInstanceTemplate#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#operator ComputeInstanceTemplate#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#values ComputeInstanceTemplate#values}
  */
  readonly values: string[];
}

function computeInstanceTemplateSchedulingNodeAffinitiesToTerraform(struct?: ComputeInstanceTemplateSchedulingNodeAffinities): any {
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

export interface ComputeInstanceTemplateScheduling {
  /**
  * Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user). This defaults to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#automatic_restart ComputeInstanceTemplate#automatic_restart}
  */
  readonly automaticRestart?: boolean | cdktf.IResolvable;
  /**
  * Minimum number of cpus for the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#min_node_cpus ComputeInstanceTemplate#min_node_cpus}
  */
  readonly minNodeCpus?: number;
  /**
  * Defines the maintenance behavior for this instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#on_host_maintenance ComputeInstanceTemplate#on_host_maintenance}
  */
  readonly onHostMaintenance?: string;
  /**
  * Allows instance to be preempted. This defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#preemptible ComputeInstanceTemplate#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
  /**
  * node_affinities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#node_affinities ComputeInstanceTemplate#node_affinities}
  */
  readonly nodeAffinities?: ComputeInstanceTemplateSchedulingNodeAffinities[];
}

function computeInstanceTemplateSchedulingToTerraform(struct?: ComputeInstanceTemplateSchedulingOutputReference | ComputeInstanceTemplateScheduling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_restart: cdktf.booleanToTerraform(struct!.automaticRestart),
    min_node_cpus: cdktf.numberToTerraform(struct!.minNodeCpus),
    on_host_maintenance: cdktf.stringToTerraform(struct!.onHostMaintenance),
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
    node_affinities: cdktf.listMapper(computeInstanceTemplateSchedulingNodeAffinitiesToTerraform)(struct!.nodeAffinities),
  }
}

export class ComputeInstanceTemplateSchedulingOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // automatic_restart - computed: false, optional: true, required: false
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

  // min_node_cpus - computed: false, optional: true, required: false
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

  // preemptible - computed: false, optional: true, required: false
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
  private _nodeAffinities?: ComputeInstanceTemplateSchedulingNodeAffinities[] | undefined; 
  public get nodeAffinities() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('node_affinities') as any;
  }
  public set nodeAffinities(value: ComputeInstanceTemplateSchedulingNodeAffinities[] | undefined) {
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
export interface ComputeInstanceTemplateServiceAccount {
  /**
  * The service account e-mail address. If not given, the default Google Compute Engine service account is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#email ComputeInstanceTemplate#email}
  */
  readonly email?: string;
  /**
  * A list of service scopes. Both OAuth2 URLs and gcloud short names are supported. To allow full access to all Cloud APIs, use the cloud-platform scope.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#scopes ComputeInstanceTemplate#scopes}
  */
  readonly scopes: string[];
}

function computeInstanceTemplateServiceAccountToTerraform(struct?: ComputeInstanceTemplateServiceAccountOutputReference | ComputeInstanceTemplateServiceAccount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.scopes),
  }
}

export class ComputeInstanceTemplateServiceAccountOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // email - computed: true, optional: true, required: false
  private _email?: string | undefined; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string | undefined) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes
  }
}
export interface ComputeInstanceTemplateShieldedInstanceConfig {
  /**
  * Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not. Defaults to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#enable_integrity_monitoring ComputeInstanceTemplate#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Verify the digital signature of all boot components, and halt the boot process if signature verification fails. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#enable_secure_boot ComputeInstanceTemplate#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
  /**
  * Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates. Defaults to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#enable_vtpm ComputeInstanceTemplate#enable_vtpm}
  */
  readonly enableVtpm?: boolean | cdktf.IResolvable;
}

function computeInstanceTemplateShieldedInstanceConfigToTerraform(struct?: ComputeInstanceTemplateShieldedInstanceConfigOutputReference | ComputeInstanceTemplateShieldedInstanceConfig): any {
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

export class ComputeInstanceTemplateShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
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
export interface ComputeInstanceTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#create ComputeInstanceTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html#delete ComputeInstanceTemplate#delete}
  */
  readonly delete?: string;
}

function computeInstanceTemplateTimeoutsToTerraform(struct?: ComputeInstanceTemplateTimeoutsOutputReference | ComputeInstanceTemplateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class ComputeInstanceTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html google_compute_instance_template}
*/
export class ComputeInstanceTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_instance_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_instance_template.html google_compute_instance_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeInstanceTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeInstanceTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_instance_template',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._canIpForward = config.canIpForward;
    this._description = config.description;
    this._enableDisplay = config.enableDisplay;
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
    this._tags = config.tags;
    this._advancedMachineFeatures = config.advancedMachineFeatures;
    this._confidentialInstanceConfig = config.confidentialInstanceConfig;
    this._disk = config.disk;
    this._guestAccelerator = config.guestAccelerator;
    this._networkInterface = config.networkInterface;
    this._reservationAffinity = config.reservationAffinity;
    this._scheduling = config.scheduling;
    this._serviceAccount = config.serviceAccount;
    this._shieldedInstanceConfig = config.shieldedInstanceConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_ip_forward - computed: false, optional: true, required: false
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

  // description - computed: false, optional: true, required: false
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

  // enable_display - computed: false, optional: true, required: false
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_description - computed: false, optional: true, required: false
  private _instanceDescription?: string | undefined; 
  public get instanceDescription() {
    return this.getStringAttribute('instance_description');
  }
  public set instanceDescription(value: string | undefined) {
    this._instanceDescription = value;
  }
  public resetInstanceDescription() {
    this._instanceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceDescriptionInput() {
    return this._instanceDescription
  }

  // labels - computed: false, optional: true, required: false
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

  // metadata_fingerprint - computed: true, optional: false, required: false
  public get metadataFingerprint() {
    return this.getStringAttribute('metadata_fingerprint');
  }

  // metadata_startup_script - computed: false, optional: true, required: false
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

  // min_cpu_platform - computed: false, optional: true, required: false
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

  // name - computed: true, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string | undefined; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string | undefined) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix
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

  // region - computed: true, optional: true, required: false
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
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

  // tags_fingerprint - computed: true, optional: false, required: false
  public get tagsFingerprint() {
    return this.getStringAttribute('tags_fingerprint');
  }

  // advanced_machine_features - computed: false, optional: true, required: false
  private _advancedMachineFeatures?: ComputeInstanceTemplateAdvancedMachineFeatures | undefined; 
  private __advancedMachineFeaturesOutput = new ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference(this as any, "advanced_machine_features", true);
  public get advancedMachineFeatures() {
    return this.__advancedMachineFeaturesOutput;
  }
  public putAdvancedMachineFeatures(value: ComputeInstanceTemplateAdvancedMachineFeatures | undefined) {
    this._advancedMachineFeatures = value;
  }
  public resetAdvancedMachineFeatures() {
    this._advancedMachineFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedMachineFeaturesInput() {
    return this._advancedMachineFeatures
  }

  // confidential_instance_config - computed: false, optional: true, required: false
  private _confidentialInstanceConfig?: ComputeInstanceTemplateConfidentialInstanceConfig | undefined; 
  private __confidentialInstanceConfigOutput = new ComputeInstanceTemplateConfidentialInstanceConfigOutputReference(this as any, "confidential_instance_config", true);
  public get confidentialInstanceConfig() {
    return this.__confidentialInstanceConfigOutput;
  }
  public putConfidentialInstanceConfig(value: ComputeInstanceTemplateConfidentialInstanceConfig | undefined) {
    this._confidentialInstanceConfig = value;
  }
  public resetConfidentialInstanceConfig() {
    this._confidentialInstanceConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialInstanceConfigInput() {
    return this._confidentialInstanceConfig
  }

  // disk - computed: false, optional: false, required: true
  private _disk?: ComputeInstanceTemplateDisk[]; 
  public get disk() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('disk') as any;
  }
  public set disk(value: ComputeInstanceTemplateDisk[]) {
    this._disk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk
  }

  // guest_accelerator - computed: false, optional: true, required: false
  private _guestAccelerator?: ComputeInstanceTemplateGuestAccelerator[] | undefined; 
  public get guestAccelerator() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('guest_accelerator') as any;
  }
  public set guestAccelerator(value: ComputeInstanceTemplateGuestAccelerator[] | undefined) {
    this._guestAccelerator = value;
  }
  public resetGuestAccelerator() {
    this._guestAccelerator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorInput() {
    return this._guestAccelerator
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface?: ComputeInstanceTemplateNetworkInterface[] | undefined; 
  public get networkInterface() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network_interface') as any;
  }
  public set networkInterface(value: ComputeInstanceTemplateNetworkInterface[] | undefined) {
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
  private _reservationAffinity?: ComputeInstanceTemplateReservationAffinity | undefined; 
  private __reservationAffinityOutput = new ComputeInstanceTemplateReservationAffinityOutputReference(this as any, "reservation_affinity", true);
  public get reservationAffinity() {
    return this.__reservationAffinityOutput;
  }
  public putReservationAffinity(value: ComputeInstanceTemplateReservationAffinity | undefined) {
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
  private _scheduling?: ComputeInstanceTemplateScheduling | undefined; 
  private __schedulingOutput = new ComputeInstanceTemplateSchedulingOutputReference(this as any, "scheduling", true);
  public get scheduling() {
    return this.__schedulingOutput;
  }
  public putScheduling(value: ComputeInstanceTemplateScheduling | undefined) {
    this._scheduling = value;
  }
  public resetScheduling() {
    this._scheduling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingInput() {
    return this._scheduling
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: ComputeInstanceTemplateServiceAccount | undefined; 
  private __serviceAccountOutput = new ComputeInstanceTemplateServiceAccountOutputReference(this as any, "service_account", true);
  public get serviceAccount() {
    return this.__serviceAccountOutput;
  }
  public putServiceAccount(value: ComputeInstanceTemplateServiceAccount | undefined) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig?: ComputeInstanceTemplateShieldedInstanceConfig | undefined; 
  private __shieldedInstanceConfigOutput = new ComputeInstanceTemplateShieldedInstanceConfigOutputReference(this as any, "shielded_instance_config", true);
  public get shieldedInstanceConfig() {
    return this.__shieldedInstanceConfigOutput;
  }
  public putShieldedInstanceConfig(value: ComputeInstanceTemplateShieldedInstanceConfig | undefined) {
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
  private _timeouts?: ComputeInstanceTemplateTimeouts | undefined; 
  private __timeoutsOutput = new ComputeInstanceTemplateTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ComputeInstanceTemplateTimeouts | undefined) {
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
      can_ip_forward: cdktf.booleanToTerraform(this._canIpForward),
      description: cdktf.stringToTerraform(this._description),
      enable_display: cdktf.booleanToTerraform(this._enableDisplay),
      instance_description: cdktf.stringToTerraform(this._instanceDescription),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      machine_type: cdktf.stringToTerraform(this._machineType),
      metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
      metadata_startup_script: cdktf.stringToTerraform(this._metadataStartupScript),
      min_cpu_platform: cdktf.stringToTerraform(this._minCpuPlatform),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      advanced_machine_features: computeInstanceTemplateAdvancedMachineFeaturesToTerraform(this._advancedMachineFeatures),
      confidential_instance_config: computeInstanceTemplateConfidentialInstanceConfigToTerraform(this._confidentialInstanceConfig),
      disk: cdktf.listMapper(computeInstanceTemplateDiskToTerraform)(this._disk),
      guest_accelerator: cdktf.listMapper(computeInstanceTemplateGuestAcceleratorToTerraform)(this._guestAccelerator),
      network_interface: cdktf.listMapper(computeInstanceTemplateNetworkInterfaceToTerraform)(this._networkInterface),
      reservation_affinity: computeInstanceTemplateReservationAffinityToTerraform(this._reservationAffinity),
      scheduling: computeInstanceTemplateSchedulingToTerraform(this._scheduling),
      service_account: computeInstanceTemplateServiceAccountToTerraform(this._serviceAccount),
      shielded_instance_config: computeInstanceTemplateShieldedInstanceConfigToTerraform(this._shieldedInstanceConfig),
      timeouts: computeInstanceTemplateTimeoutsToTerraform(this._timeouts),
    };
  }
}
