// https://www.terraform.io/docs/providers/google/r/compute_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeInstanceConfig extends cdktf.TerraformMetaArguments {
  /** If true, allows Terraform to stop the instance to update its properties. If you try to update a property that requires stopping the instance without setting this field, the update will fail. */
  readonly allowStoppingForUpdate?: boolean;
  /** Whether sending and receiving of packets with non-matching source or destination IPs is allowed. */
  readonly canIpForward?: boolean;
  /** Whether deletion protection is enabled on this instance. */
  readonly deletionProtection?: boolean;
  /** A brief description of the resource. */
  readonly description?: string;
  /** Desired status of the instance. Either "RUNNING" or "TERMINATED". */
  readonly desiredStatus?: string;
  /** Whether the instance has virtual displays enabled. */
  readonly enableDisplay?: boolean;
  /** List of the type and count of accelerator cards attached to the instance. */
  readonly guestAccelerator?: ComputeInstanceGuestAccelerator[];
  /** A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of labels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]*[a-z0-9]), concatenated with periods. The entire hostname must not exceed 253 characters. Changing this forces a new resource to be created. */
  readonly hostname?: string;
  /** A set of key/value label pairs assigned to the instance. */
  readonly labels?: { [key: string]: string };
  /** The machine type to create. */
  readonly machineType: string;
  /** Metadata key/value pairs made available within the instance. */
  readonly metadata?: { [key: string]: string };
  /** Metadata startup scripts made available within the instance. */
  readonly metadataStartupScript?: string;
  /** The minimum CPU platform specified for the VM instance. */
  readonly minCpuPlatform?: string;
  /** The name of the instance. One of name or self_link must be provided. */
  readonly name: string;
  /** The ID of the project in which the resource belongs. If self_link is provided, this value is ignored. If neither self_link nor project are provided, the provider project is used. */
  readonly project?: string;
  /** A list of short names or self_links of resource policies to attach to the instance. Modifying this list will cause the instance to recreate. Currently a max of 1 resource policy is supported. */
  readonly resourcePolicies?: string[];
  /** The list of tags attached to the instance. */
  readonly tags?: string[];
  /** The zone of the instance. If self_link is provided, this value is ignored. If neither self_link nor zone are provided, the provider zone is used. */
  readonly zone?: string;
  /** attached_disk block */
  readonly attachedDisk?: ComputeInstanceAttachedDisk[];
  /** boot_disk block */
  readonly bootDisk: ComputeInstanceBootDisk[];
  /** confidential_instance_config block */
  readonly confidentialInstanceConfig?: ComputeInstanceConfidentialInstanceConfig[];
  /** network_interface block */
  readonly networkInterface: ComputeInstanceNetworkInterface[];
  /** scheduling block */
  readonly scheduling?: ComputeInstanceScheduling[];
  /** scratch_disk block */
  readonly scratchDisk?: ComputeInstanceScratchDisk[];
  /** service_account block */
  readonly serviceAccount?: ComputeInstanceServiceAccount[];
  /** shielded_instance_config block */
  readonly shieldedInstanceConfig?: ComputeInstanceShieldedInstanceConfig[];
  /** timeouts block */
  readonly timeouts?: ComputeInstanceTimeouts;
}
export interface ComputeInstanceGuestAccelerator {
  readonly count?: number;
  readonly type?: string;
}

function computeInstanceGuestAcceleratorToTerraform(struct?: ComputeInstanceGuestAccelerator): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ComputeInstanceAttachedDisk {
  /** Name with which the attached disk is accessible under /dev/disk/by-id/ */
  readonly deviceName?: string;
  /** A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set. */
  readonly diskEncryptionKeyRaw?: string;
  /** The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set. */
  readonly kmsKeySelfLink?: string;
  /** Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE". */
  readonly mode?: string;
  /** The name or self_link of the disk attached to this instance. */
  readonly source: string;
}

function computeInstanceAttachedDiskToTerraform(struct?: ComputeInstanceAttachedDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    disk_encryption_key_raw: cdktf.stringToTerraform(struct!.diskEncryptionKeyRaw),
    kms_key_self_link: cdktf.stringToTerraform(struct!.kmsKeySelfLink),
    mode: cdktf.stringToTerraform(struct!.mode),
    source: cdktf.stringToTerraform(struct!.source),
  }
}

export interface ComputeInstanceBootDiskInitializeParams {
  /** The image from which this disk was initialised. */
  readonly image?: string;
  /** A set of key/value label pairs assigned to the disk. */
  readonly labels?: { [key: string]: string };
  /** The size of the image in gigabytes. */
  readonly size?: number;
  /** The Google Compute Engine disk type. One of pd-standard, pd-ssd or pd-balanced. */
  readonly type?: string;
}

function computeInstanceBootDiskInitializeParamsToTerraform(struct?: ComputeInstanceBootDiskInitializeParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ComputeInstanceBootDisk {
  /** Whether the disk will be auto-deleted when the instance is deleted. */
  readonly autoDelete?: boolean;
  /** Name with which attached disk will be accessible under /dev/disk/by-id/ */
  readonly deviceName?: string;
  /** A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set. */
  readonly diskEncryptionKeyRaw?: string;
  /** The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set. */
  readonly kmsKeySelfLink?: string;
  /** Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE". */
  readonly mode?: string;
  /** The name or self_link of the disk attached to this instance. */
  readonly source?: string;
  /** initialize_params block */
  readonly initializeParams?: ComputeInstanceBootDiskInitializeParams[];
}

function computeInstanceBootDiskToTerraform(struct?: ComputeInstanceBootDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auto_delete: cdktf.booleanToTerraform(struct!.autoDelete),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    disk_encryption_key_raw: cdktf.stringToTerraform(struct!.diskEncryptionKeyRaw),
    kms_key_self_link: cdktf.stringToTerraform(struct!.kmsKeySelfLink),
    mode: cdktf.stringToTerraform(struct!.mode),
    source: cdktf.stringToTerraform(struct!.source),
    initialize_params: cdktf.listMapper(computeInstanceBootDiskInitializeParamsToTerraform)(struct!.initializeParams),
  }
}

export interface ComputeInstanceConfidentialInstanceConfig {
  /** Defines whether the instance should have confidential compute enabled. */
  readonly enableConfidentialCompute: boolean;
}

function computeInstanceConfidentialInstanceConfigToTerraform(struct?: ComputeInstanceConfidentialInstanceConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_confidential_compute: cdktf.booleanToTerraform(struct!.enableConfidentialCompute),
  }
}

export interface ComputeInstanceNetworkInterfaceAccessConfig {
  /** The IP address that is be 1:1 mapped to the instance's network ip. */
  readonly natIp?: string;
  /** The networking tier used for configuring this instance. One of PREMIUM or STANDARD. */
  readonly networkTier?: string;
  /** The DNS domain name for the public PTR record. */
  readonly publicPtrDomainName?: string;
}

function computeInstanceNetworkInterfaceAccessConfigToTerraform(struct?: ComputeInstanceNetworkInterfaceAccessConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nat_ip: cdktf.stringToTerraform(struct!.natIp),
    network_tier: cdktf.stringToTerraform(struct!.networkTier),
    public_ptr_domain_name: cdktf.stringToTerraform(struct!.publicPtrDomainName),
  }
}

export interface ComputeInstanceNetworkInterfaceAliasIpRange {
  /** The IP CIDR range represented by this alias IP range. */
  readonly ipCidrRange: string;
  /** The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range. */
  readonly subnetworkRangeName?: string;
}

function computeInstanceNetworkInterfaceAliasIpRangeToTerraform(struct?: ComputeInstanceNetworkInterfaceAliasIpRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ip_cidr_range: cdktf.stringToTerraform(struct!.ipCidrRange),
    subnetwork_range_name: cdktf.stringToTerraform(struct!.subnetworkRangeName),
  }
}

export interface ComputeInstanceNetworkInterface {
  /** The name or self_link of the network attached to this interface. */
  readonly network?: string;
  /** The private IP address assigned to the instance. */
  readonly networkIp?: string;
  /** The name or self_link of the subnetwork attached to this interface. */
  readonly subnetwork?: string;
  /** The project in which the subnetwork belongs. */
  readonly subnetworkProject?: string;
  /** access_config block */
  readonly accessConfig?: ComputeInstanceNetworkInterfaceAccessConfig[];
  /** alias_ip_range block */
  readonly aliasIpRange?: ComputeInstanceNetworkInterfaceAliasIpRange[];
}

function computeInstanceNetworkInterfaceToTerraform(struct?: ComputeInstanceNetworkInterface): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    network_ip: cdktf.stringToTerraform(struct!.networkIp),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
    subnetwork_project: cdktf.stringToTerraform(struct!.subnetworkProject),
    access_config: cdktf.listMapper(computeInstanceNetworkInterfaceAccessConfigToTerraform)(struct!.accessConfig),
    alias_ip_range: cdktf.listMapper(computeInstanceNetworkInterfaceAliasIpRangeToTerraform)(struct!.aliasIpRange),
  }
}

export interface ComputeInstanceSchedulingNodeAffinities {
  readonly key: string;
  readonly operator: string;
  readonly values: string[];
}

function computeInstanceSchedulingNodeAffinitiesToTerraform(struct?: ComputeInstanceSchedulingNodeAffinities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ComputeInstanceScheduling {
  /** Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user). */
  readonly automaticRestart?: boolean;
  /** Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE, */
  readonly onHostMaintenance?: string;
  /** Whether the instance is preemptible. */
  readonly preemptible?: boolean;
  /** node_affinities block */
  readonly nodeAffinities?: ComputeInstanceSchedulingNodeAffinities[];
}

function computeInstanceSchedulingToTerraform(struct?: ComputeInstanceScheduling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    automatic_restart: cdktf.booleanToTerraform(struct!.automaticRestart),
    on_host_maintenance: cdktf.stringToTerraform(struct!.onHostMaintenance),
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
    node_affinities: cdktf.listMapper(computeInstanceSchedulingNodeAffinitiesToTerraform)(struct!.nodeAffinities),
  }
}

export interface ComputeInstanceScratchDisk {
  /** The disk interface used for attaching this disk. One of SCSI or NVME. */
  readonly interface: string;
}

function computeInstanceScratchDiskToTerraform(struct?: ComputeInstanceScratchDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
  }
}

export interface ComputeInstanceServiceAccount {
  /** The service account e-mail address. */
  readonly email?: string;
  /** A list of service scopes. */
  readonly scopes: string[];
}

function computeInstanceServiceAccountToTerraform(struct?: ComputeInstanceServiceAccount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.scopes),
  }
}

export interface ComputeInstanceShieldedInstanceConfig {
  /** Whether integrity monitoring is enabled for the instance. */
  readonly enableIntegrityMonitoring?: boolean;
  /** Whether secure boot is enabled for the instance. */
  readonly enableSecureBoot?: boolean;
  /** Whether the instance uses vTPM. */
  readonly enableVtpm?: boolean;
}

function computeInstanceShieldedInstanceConfigToTerraform(struct?: ComputeInstanceShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
    enable_vtpm: cdktf.booleanToTerraform(struct!.enableVtpm),
  }
}

export interface ComputeInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function computeInstanceTimeoutsToTerraform(struct?: ComputeInstanceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ComputeInstance extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_instance',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowStoppingForUpdate = config.allowStoppingForUpdate;
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
    this._tags = config.tags;
    this._zone = config.zone;
    this._attachedDisk = config.attachedDisk;
    this._bootDisk = config.bootDisk;
    this._confidentialInstanceConfig = config.confidentialInstanceConfig;
    this._networkInterface = config.networkInterface;
    this._scheduling = config.scheduling;
    this._scratchDisk = config.scratchDisk;
    this._serviceAccount = config.serviceAccount;
    this._shieldedInstanceConfig = config.shieldedInstanceConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_stopping_for_update - computed: false, optional: true, required: false
  private _allowStoppingForUpdate?: boolean;
  public get allowStoppingForUpdate() {
    return this.getBooleanAttribute('allow_stopping_for_update');
  }
  public set allowStoppingForUpdate(value: boolean ) {
    this._allowStoppingForUpdate = value;
  }
  public resetAllowStoppingForUpdate() {
    this._allowStoppingForUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowStoppingForUpdateInput() {
    return this._allowStoppingForUpdate
  }

  // can_ip_forward - computed: false, optional: true, required: false
  private _canIpForward?: boolean;
  public get canIpForward() {
    return this.getBooleanAttribute('can_ip_forward');
  }
  public set canIpForward(value: boolean ) {
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

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean;
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean ) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // desired_status - computed: false, optional: true, required: false
  private _desiredStatus?: string;
  public get desiredStatus() {
    return this.getStringAttribute('desired_status');
  }
  public set desiredStatus(value: string ) {
    this._desiredStatus = value;
  }
  public resetDesiredStatus() {
    this._desiredStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStatusInput() {
    return this._desiredStatus
  }

  // enable_display - computed: false, optional: true, required: false
  private _enableDisplay?: boolean;
  public get enableDisplay() {
    return this.getBooleanAttribute('enable_display');
  }
  public set enableDisplay(value: boolean ) {
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
  private _guestAccelerator?: ComputeInstanceGuestAccelerator[]
  public get guestAccelerator(): ComputeInstanceGuestAccelerator[] {
    return this.interpolationForAttribute('guest_accelerator') as any; // Getting the computed value is not yet implemented
  }
  public set guestAccelerator(value: ComputeInstanceGuestAccelerator[]) {
    this._guestAccelerator = value;
  }
  public resetGuestAccelerator() {
    this._guestAccelerator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorInput() {
    return this._guestAccelerator
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string;
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string ) {
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

  // metadata_fingerprint - computed: true, optional: false, required: false
  public get metadataFingerprint() {
    return this.getStringAttribute('metadata_fingerprint');
  }

  // metadata_startup_script - computed: false, optional: true, required: false
  private _metadataStartupScript?: string;
  public get metadataStartupScript() {
    return this.getStringAttribute('metadata_startup_script');
  }
  public set metadataStartupScript(value: string ) {
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

  // resource_policies - computed: false, optional: true, required: false
  private _resourcePolicies?: string[];
  public get resourcePolicies() {
    return this.getListAttribute('resource_policies');
  }
  public set resourcePolicies(value: string[] ) {
    this._resourcePolicies = value;
  }
  public resetResourcePolicies() {
    this._resourcePolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoliciesInput() {
    return this._resourcePolicies
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
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

  // attached_disk - computed: false, optional: true, required: false
  private _attachedDisk?: ComputeInstanceAttachedDisk[];
  public get attachedDisk() {
    return this.interpolationForAttribute('attached_disk') as any;
  }
  public set attachedDisk(value: ComputeInstanceAttachedDisk[] ) {
    this._attachedDisk = value;
  }
  public resetAttachedDisk() {
    this._attachedDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedDiskInput() {
    return this._attachedDisk
  }

  // boot_disk - computed: false, optional: false, required: true
  private _bootDisk: ComputeInstanceBootDisk[];
  public get bootDisk() {
    return this.interpolationForAttribute('boot_disk') as any;
  }
  public set bootDisk(value: ComputeInstanceBootDisk[]) {
    this._bootDisk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskInput() {
    return this._bootDisk
  }

  // confidential_instance_config - computed: false, optional: true, required: false
  private _confidentialInstanceConfig?: ComputeInstanceConfidentialInstanceConfig[];
  public get confidentialInstanceConfig() {
    return this.interpolationForAttribute('confidential_instance_config') as any;
  }
  public set confidentialInstanceConfig(value: ComputeInstanceConfidentialInstanceConfig[] ) {
    this._confidentialInstanceConfig = value;
  }
  public resetConfidentialInstanceConfig() {
    this._confidentialInstanceConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialInstanceConfigInput() {
    return this._confidentialInstanceConfig
  }

  // network_interface - computed: false, optional: false, required: true
  private _networkInterface: ComputeInstanceNetworkInterface[];
  public get networkInterface() {
    return this.interpolationForAttribute('network_interface') as any;
  }
  public set networkInterface(value: ComputeInstanceNetworkInterface[]) {
    this._networkInterface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface
  }

  // scheduling - computed: false, optional: true, required: false
  private _scheduling?: ComputeInstanceScheduling[];
  public get scheduling() {
    return this.interpolationForAttribute('scheduling') as any;
  }
  public set scheduling(value: ComputeInstanceScheduling[] ) {
    this._scheduling = value;
  }
  public resetScheduling() {
    this._scheduling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingInput() {
    return this._scheduling
  }

  // scratch_disk - computed: false, optional: true, required: false
  private _scratchDisk?: ComputeInstanceScratchDisk[];
  public get scratchDisk() {
    return this.interpolationForAttribute('scratch_disk') as any;
  }
  public set scratchDisk(value: ComputeInstanceScratchDisk[] ) {
    this._scratchDisk = value;
  }
  public resetScratchDisk() {
    this._scratchDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scratchDiskInput() {
    return this._scratchDisk
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: ComputeInstanceServiceAccount[];
  public get serviceAccount() {
    return this.interpolationForAttribute('service_account') as any;
  }
  public set serviceAccount(value: ComputeInstanceServiceAccount[] ) {
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
  private _shieldedInstanceConfig?: ComputeInstanceShieldedInstanceConfig[];
  public get shieldedInstanceConfig() {
    return this.interpolationForAttribute('shielded_instance_config') as any;
  }
  public set shieldedInstanceConfig(value: ComputeInstanceShieldedInstanceConfig[] ) {
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
  private _timeouts?: ComputeInstanceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeInstanceTimeouts ) {
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
      can_ip_forward: cdktf.booleanToTerraform(this._canIpForward),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      desired_status: cdktf.stringToTerraform(this._desiredStatus),
      enable_display: cdktf.booleanToTerraform(this._enableDisplay),
      guest_accelerator: cdktf.listMapper(computeInstanceGuestAcceleratorToTerraform)(this._guestAccelerator),
      hostname: cdktf.stringToTerraform(this._hostname),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      machine_type: cdktf.stringToTerraform(this._machineType),
      metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
      metadata_startup_script: cdktf.stringToTerraform(this._metadataStartupScript),
      min_cpu_platform: cdktf.stringToTerraform(this._minCpuPlatform),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      resource_policies: cdktf.listMapper(cdktf.stringToTerraform)(this._resourcePolicies),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      zone: cdktf.stringToTerraform(this._zone),
      attached_disk: cdktf.listMapper(computeInstanceAttachedDiskToTerraform)(this._attachedDisk),
      boot_disk: cdktf.listMapper(computeInstanceBootDiskToTerraform)(this._bootDisk),
      confidential_instance_config: cdktf.listMapper(computeInstanceConfidentialInstanceConfigToTerraform)(this._confidentialInstanceConfig),
      network_interface: cdktf.listMapper(computeInstanceNetworkInterfaceToTerraform)(this._networkInterface),
      scheduling: cdktf.listMapper(computeInstanceSchedulingToTerraform)(this._scheduling),
      scratch_disk: cdktf.listMapper(computeInstanceScratchDiskToTerraform)(this._scratchDisk),
      service_account: cdktf.listMapper(computeInstanceServiceAccountToTerraform)(this._serviceAccount),
      shielded_instance_config: cdktf.listMapper(computeInstanceShieldedInstanceConfigToTerraform)(this._shieldedInstanceConfig),
      timeouts: computeInstanceTimeoutsToTerraform(this._timeouts),
    };
  }
}
