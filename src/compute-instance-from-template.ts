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
  * A list of short names or self_links of resource policies to attach to the instance. Modifying this list will cause the instance to recreate. Currently a max of 1 resource policy is supported.
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
  readonly advancedMachineFeatures?: ComputeInstanceFromTemplateAdvancedMachineFeatures[];
  /**
  * boot_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#boot_disk ComputeInstanceFromTemplate#boot_disk}
  */
  readonly bootDisk?: ComputeInstanceFromTemplateBootDisk[];
  /**
  * confidential_instance_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#confidential_instance_config ComputeInstanceFromTemplate#confidential_instance_config}
  */
  readonly confidentialInstanceConfig?: ComputeInstanceFromTemplateConfidentialInstanceConfig[];
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
  readonly reservationAffinity?: ComputeInstanceFromTemplateReservationAffinity[];
  /**
  * scheduling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#scheduling ComputeInstanceFromTemplate#scheduling}
  */
  readonly scheduling?: ComputeInstanceFromTemplateScheduling[];
  /**
  * shielded_instance_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html#shielded_instance_config ComputeInstanceFromTemplate#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: ComputeInstanceFromTemplateShieldedInstanceConfig[];
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

function computeInstanceFromTemplateAdvancedMachineFeaturesToTerraform(struct?: ComputeInstanceFromTemplateAdvancedMachineFeatures): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_nested_virtualization: cdktf.booleanToTerraform(struct!.enableNestedVirtualization),
    threads_per_core: cdktf.numberToTerraform(struct!.threadsPerCore),
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

function computeInstanceFromTemplateBootDiskInitializeParamsToTerraform(struct?: ComputeInstanceFromTemplateBootDiskInitializeParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
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
  readonly initializeParams?: ComputeInstanceFromTemplateBootDiskInitializeParams[];
}

function computeInstanceFromTemplateBootDiskToTerraform(struct?: ComputeInstanceFromTemplateBootDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auto_delete: cdktf.booleanToTerraform(struct!.autoDelete),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    disk_encryption_key_raw: cdktf.stringToTerraform(struct!.diskEncryptionKeyRaw),
    kms_key_self_link: cdktf.stringToTerraform(struct!.kmsKeySelfLink),
    mode: cdktf.stringToTerraform(struct!.mode),
    source: cdktf.stringToTerraform(struct!.source),
    initialize_params: cdktf.listMapper(computeInstanceFromTemplateBootDiskInitializeParamsToTerraform)(struct!.initializeParams),
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

function computeInstanceFromTemplateConfidentialInstanceConfigToTerraform(struct?: ComputeInstanceFromTemplateConfidentialInstanceConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_confidential_compute: cdktf.booleanToTerraform(struct!.enableConfidentialCompute),
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
  return {
    ip_cidr_range: cdktf.stringToTerraform(struct!.ipCidrRange),
    subnetwork_range_name: cdktf.stringToTerraform(struct!.subnetworkRangeName),
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
}

function computeInstanceFromTemplateNetworkInterfaceToTerraform(struct?: ComputeInstanceFromTemplateNetworkInterface): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_config: cdktf.listMapper(computeInstanceFromTemplateNetworkInterfaceAccessConfigToTerraform)(struct!.accessConfig),
    alias_ip_range: cdktf.listMapper(computeInstanceFromTemplateNetworkInterfaceAliasIpRangeToTerraform)(struct!.aliasIpRange),
    network: cdktf.stringToTerraform(struct!.network),
    network_ip: cdktf.stringToTerraform(struct!.networkIp),
    nic_type: cdktf.stringToTerraform(struct!.nicType),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
    subnetwork_project: cdktf.stringToTerraform(struct!.subnetworkProject),
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

function computeInstanceFromTemplateReservationAffinitySpecificReservationToTerraform(struct?: ComputeInstanceFromTemplateReservationAffinitySpecificReservation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
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
  readonly specificReservation?: ComputeInstanceFromTemplateReservationAffinitySpecificReservation[];
}

function computeInstanceFromTemplateReservationAffinityToTerraform(struct?: ComputeInstanceFromTemplateReservationAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    specific_reservation: cdktf.listMapper(computeInstanceFromTemplateReservationAffinitySpecificReservationToTerraform)(struct!.specificReservation),
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

function computeInstanceFromTemplateSchedulingToTerraform(struct?: ComputeInstanceFromTemplateScheduling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    automatic_restart: cdktf.booleanToTerraform(struct!.automaticRestart),
    min_node_cpus: cdktf.numberToTerraform(struct!.minNodeCpus),
    on_host_maintenance: cdktf.stringToTerraform(struct!.onHostMaintenance),
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
    node_affinities: cdktf.listMapper(computeInstanceFromTemplateSchedulingNodeAffinitiesToTerraform)(struct!.nodeAffinities),
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

function computeInstanceFromTemplateShieldedInstanceConfigToTerraform(struct?: ComputeInstanceFromTemplateShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
    enable_vtpm: cdktf.booleanToTerraform(struct!.enableVtpm),
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

function computeInstanceFromTemplateTimeoutsToTerraform(struct?: ComputeInstanceFromTemplateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
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
    return this._allowStoppingForUpdate
  }

  // attached_disk - computed: true, optional: true, required: false
  private _attachedDisk?: ComputeInstanceFromTemplateAttachedDisk[]
  public get attachedDisk(): ComputeInstanceFromTemplateAttachedDisk[] {
    return this.interpolationForAttribute('attached_disk') as any; // Getting the computed value is not yet implemented
  }
  public set attachedDisk(value: ComputeInstanceFromTemplateAttachedDisk[]) {
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
    return this._deletionProtection
  }

  // description - computed: true, optional: true, required: false
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
    return this._description
  }

  // desired_status - computed: true, optional: true, required: false
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
    return this._desiredStatus
  }

  // enable_display - computed: true, optional: true, required: false
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
    return this._enableDisplay
  }

  // guest_accelerator - computed: true, optional: true, required: false
  private _guestAccelerator?: ComputeInstanceFromTemplateGuestAccelerator[]
  public get guestAccelerator(): ComputeInstanceFromTemplateGuestAccelerator[] {
    return this.interpolationForAttribute('guest_accelerator') as any; // Getting the computed value is not yet implemented
  }
  public set guestAccelerator(value: ComputeInstanceFromTemplateGuestAccelerator[]) {
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
  private _labels?: { [key: string]: string } | cdktf.IResolvable
  public get labels(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('labels') as any; // Getting the computed value is not yet implemented
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _machineType?: string;
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
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
  private _metadata?: { [key: string]: string } | cdktf.IResolvable
  public get metadata(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('metadata') as any; // Getting the computed value is not yet implemented
  }
  public set metadata(value: { [key: string]: string } | cdktf.IResolvable) {
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
    return this._metadataStartupScript
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
    return this._minCpuPlatform
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

  // resource_policies - computed: true, optional: true, required: false
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
    return this._resourcePolicies
  }

  // scratch_disk - computed: true, optional: true, required: false
  private _scratchDisk?: ComputeInstanceFromTemplateScratchDisk[]
  public get scratchDisk(): ComputeInstanceFromTemplateScratchDisk[] {
    return this.interpolationForAttribute('scratch_disk') as any; // Getting the computed value is not yet implemented
  }
  public set scratchDisk(value: ComputeInstanceFromTemplateScratchDisk[]) {
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
  private _serviceAccount?: ComputeInstanceFromTemplateServiceAccount[]
  public get serviceAccount(): ComputeInstanceFromTemplateServiceAccount[] {
    return this.interpolationForAttribute('service_account') as any; // Getting the computed value is not yet implemented
  }
  public set serviceAccount(value: ComputeInstanceFromTemplateServiceAccount[]) {
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
  private _sourceInstanceTemplate: string;
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
    return this._tags
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
    return this._zone
  }

  // advanced_machine_features - computed: false, optional: true, required: false
  private _advancedMachineFeatures?: ComputeInstanceFromTemplateAdvancedMachineFeatures[];
  public get advancedMachineFeatures() {
    return this.interpolationForAttribute('advanced_machine_features') as any;
  }
  public set advancedMachineFeatures(value: ComputeInstanceFromTemplateAdvancedMachineFeatures[] ) {
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
  private _bootDisk?: ComputeInstanceFromTemplateBootDisk[];
  public get bootDisk() {
    return this.interpolationForAttribute('boot_disk') as any;
  }
  public set bootDisk(value: ComputeInstanceFromTemplateBootDisk[] ) {
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
  private _confidentialInstanceConfig?: ComputeInstanceFromTemplateConfidentialInstanceConfig[];
  public get confidentialInstanceConfig() {
    return this.interpolationForAttribute('confidential_instance_config') as any;
  }
  public set confidentialInstanceConfig(value: ComputeInstanceFromTemplateConfidentialInstanceConfig[] ) {
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
  private _networkInterface?: ComputeInstanceFromTemplateNetworkInterface[];
  public get networkInterface() {
    return this.interpolationForAttribute('network_interface') as any;
  }
  public set networkInterface(value: ComputeInstanceFromTemplateNetworkInterface[] ) {
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
  private _reservationAffinity?: ComputeInstanceFromTemplateReservationAffinity[];
  public get reservationAffinity() {
    return this.interpolationForAttribute('reservation_affinity') as any;
  }
  public set reservationAffinity(value: ComputeInstanceFromTemplateReservationAffinity[] ) {
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
  private _scheduling?: ComputeInstanceFromTemplateScheduling[];
  public get scheduling() {
    return this.interpolationForAttribute('scheduling') as any;
  }
  public set scheduling(value: ComputeInstanceFromTemplateScheduling[] ) {
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
  private _shieldedInstanceConfig?: ComputeInstanceFromTemplateShieldedInstanceConfig[];
  public get shieldedInstanceConfig() {
    return this.interpolationForAttribute('shielded_instance_config') as any;
  }
  public set shieldedInstanceConfig(value: ComputeInstanceFromTemplateShieldedInstanceConfig[] ) {
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
  private _timeouts?: ComputeInstanceFromTemplateTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeInstanceFromTemplateTimeouts ) {
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
      advanced_machine_features: cdktf.listMapper(computeInstanceFromTemplateAdvancedMachineFeaturesToTerraform)(this._advancedMachineFeatures),
      boot_disk: cdktf.listMapper(computeInstanceFromTemplateBootDiskToTerraform)(this._bootDisk),
      confidential_instance_config: cdktf.listMapper(computeInstanceFromTemplateConfidentialInstanceConfigToTerraform)(this._confidentialInstanceConfig),
      network_interface: cdktf.listMapper(computeInstanceFromTemplateNetworkInterfaceToTerraform)(this._networkInterface),
      reservation_affinity: cdktf.listMapper(computeInstanceFromTemplateReservationAffinityToTerraform)(this._reservationAffinity),
      scheduling: cdktf.listMapper(computeInstanceFromTemplateSchedulingToTerraform)(this._scheduling),
      shielded_instance_config: cdktf.listMapper(computeInstanceFromTemplateShieldedInstanceConfigToTerraform)(this._shieldedInstanceConfig),
      timeouts: computeInstanceFromTemplateTimeoutsToTerraform(this._timeouts),
    };
  }
}
