// https://www.terraform.io/docs/providers/google/r/compute_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeInstanceConfig extends TerraformMetaArguments {
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
export interface ComputeInstanceBootDiskInitializeParams {
  /** The image from which this disk was initialised. */
  readonly image?: string;
  /** A set of key/value label pairs assigned to the disk. */
  readonly labels?: { [key: string]: string };
  /** The size of the image in gigabytes. */
  readonly size?: number;
  /** The GCE disk type. One of pd-standard or pd-ssd. */
  readonly type?: string;
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
export interface ComputeInstanceNetworkInterfaceAccessConfig {
  /** The IP address that is be 1:1 mapped to the instance's network ip. */
  readonly natIp?: string;
  /** The networking tier used for configuring this instance. One of PREMIUM or STANDARD. */
  readonly networkTier?: string;
  /** The DNS domain name for the public PTR record. */
  readonly publicPtrDomainName?: string;
}
export interface ComputeInstanceNetworkInterfaceAliasIpRange {
  /** The IP CIDR range represented by this alias IP range. */
  readonly ipCidrRange: string;
  /** The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range. */
  readonly subnetworkRangeName?: string;
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
export interface ComputeInstanceSchedulingNodeAffinities {
  readonly key: string;
  readonly operator: string;
  readonly values: string[];
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
export interface ComputeInstanceScratchDisk {
  /** The disk interface used for attaching this disk. One of SCSI or NVME. */
  readonly interface: string;
}
export interface ComputeInstanceServiceAccount {
  /** The service account e-mail address. */
  readonly email?: string;
  /** A list of service scopes. */
  readonly scopes: string[];
}
export interface ComputeInstanceShieldedInstanceConfig {
  /** Whether integrity monitoring is enabled for the instance. */
  readonly enableIntegrityMonitoring?: boolean;
  /** Whether secure boot is enabled for the instance. */
  readonly enableSecureBoot?: boolean;
  /** Whether the instance uses vTPM. */
  readonly enableVtpm?: boolean;
}
export interface ComputeInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeInstance extends TerraformResource {

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
    return this._allowStoppingForUpdate;
  }
  public set allowStoppingForUpdate(value: boolean | undefined) {
    this._allowStoppingForUpdate = value;
  }

  // can_ip_forward - computed: false, optional: true, required: false
  private _canIpForward?: boolean;
  public get canIpForward() {
    return this._canIpForward;
  }
  public set canIpForward(value: boolean | undefined) {
    this._canIpForward = value;
  }

  // cpu_platform - computed: true, optional: false, required: true
  public get cpuPlatform() {
    return this.getStringAttribute('cpu_platform');
  }

  // current_status - computed: true, optional: false, required: true
  public get currentStatus() {
    return this.getStringAttribute('current_status');
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean;
  public get deletionProtection() {
    return this._deletionProtection;
  }
  public set deletionProtection(value: boolean | undefined) {
    this._deletionProtection = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // desired_status - computed: false, optional: true, required: false
  private _desiredStatus?: string;
  public get desiredStatus() {
    return this._desiredStatus;
  }
  public set desiredStatus(value: string | undefined) {
    this._desiredStatus = value;
  }

  // enable_display - computed: false, optional: true, required: false
  private _enableDisplay?: boolean;
  public get enableDisplay() {
    return this._enableDisplay;
  }
  public set enableDisplay(value: boolean | undefined) {
    this._enableDisplay = value;
  }

  // guest_accelerator - computed: true, optional: true, required: false
  private _guestAccelerator?: ComputeInstanceGuestAccelerator[]
  public get guestAccelerator(): ComputeInstanceGuestAccelerator[] | undefined {
    return this._guestAccelerator; // Getting the computed value is not yet implemented
  }
  public set guestAccelerator(value: ComputeInstanceGuestAccelerator[] | undefined) {
    this._guestAccelerator = value;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string;
  public get hostname() {
    return this._hostname;
  }
  public set hostname(value: string | undefined) {
    this._hostname = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_id - computed: true, optional: false, required: true
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // label_fingerprint - computed: true, optional: false, required: true
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // machine_type - computed: false, optional: false, required: true
  private _machineType: string;
  public get machineType() {
    return this._machineType;
  }
  public set machineType(value: string) {
    this._machineType = value;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string };
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: { [key: string]: string } | undefined) {
    this._metadata = value;
  }

  // metadata_fingerprint - computed: true, optional: false, required: true
  public get metadataFingerprint() {
    return this.getStringAttribute('metadata_fingerprint');
  }

  // metadata_startup_script - computed: false, optional: true, required: false
  private _metadataStartupScript?: string;
  public get metadataStartupScript() {
    return this._metadataStartupScript;
  }
  public set metadataStartupScript(value: string | undefined) {
    this._metadataStartupScript = value;
  }

  // min_cpu_platform - computed: true, optional: true, required: false
  private _minCpuPlatform?: string;
  public get minCpuPlatform() {
    return this._minCpuPlatform ?? this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string | undefined) {
    this._minCpuPlatform = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // resource_policies - computed: false, optional: true, required: false
  private _resourcePolicies?: string[];
  public get resourcePolicies() {
    return this._resourcePolicies;
  }
  public set resourcePolicies(value: string[] | undefined) {
    this._resourcePolicies = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[];
  public get tags() {
    return this._tags;
  }
  public set tags(value: string[] | undefined) {
    this._tags = value;
  }

  // tags_fingerprint - computed: true, optional: false, required: true
  public get tagsFingerprint() {
    return this.getStringAttribute('tags_fingerprint');
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this._zone ?? this.getStringAttribute('zone');
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }

  // attached_disk - computed: false, optional: true, required: false
  private _attachedDisk?: ComputeInstanceAttachedDisk[];
  public get attachedDisk() {
    return this._attachedDisk;
  }
  public set attachedDisk(value: ComputeInstanceAttachedDisk[] | undefined) {
    this._attachedDisk = value;
  }

  // boot_disk - computed: false, optional: false, required: true
  private _bootDisk: ComputeInstanceBootDisk[];
  public get bootDisk() {
    return this._bootDisk;
  }
  public set bootDisk(value: ComputeInstanceBootDisk[]) {
    this._bootDisk = value;
  }

  // network_interface - computed: false, optional: false, required: true
  private _networkInterface: ComputeInstanceNetworkInterface[];
  public get networkInterface() {
    return this._networkInterface;
  }
  public set networkInterface(value: ComputeInstanceNetworkInterface[]) {
    this._networkInterface = value;
  }

  // scheduling - computed: false, optional: true, required: false
  private _scheduling?: ComputeInstanceScheduling[];
  public get scheduling() {
    return this._scheduling;
  }
  public set scheduling(value: ComputeInstanceScheduling[] | undefined) {
    this._scheduling = value;
  }

  // scratch_disk - computed: false, optional: true, required: false
  private _scratchDisk?: ComputeInstanceScratchDisk[];
  public get scratchDisk() {
    return this._scratchDisk;
  }
  public set scratchDisk(value: ComputeInstanceScratchDisk[] | undefined) {
    this._scratchDisk = value;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: ComputeInstanceServiceAccount[];
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public set serviceAccount(value: ComputeInstanceServiceAccount[] | undefined) {
    this._serviceAccount = value;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig?: ComputeInstanceShieldedInstanceConfig[];
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public set shieldedInstanceConfig(value: ComputeInstanceShieldedInstanceConfig[] | undefined) {
    this._shieldedInstanceConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeInstanceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeInstanceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_stopping_for_update: this._allowStoppingForUpdate,
      can_ip_forward: this._canIpForward,
      deletion_protection: this._deletionProtection,
      description: this._description,
      desired_status: this._desiredStatus,
      enable_display: this._enableDisplay,
      guest_accelerator: this._guestAccelerator,
      hostname: this._hostname,
      labels: this._labels,
      machine_type: this._machineType,
      metadata: this._metadata,
      metadata_startup_script: this._metadataStartupScript,
      min_cpu_platform: this._minCpuPlatform,
      name: this._name,
      project: this._project,
      resource_policies: this._resourcePolicies,
      tags: this._tags,
      zone: this._zone,
      attached_disk: this._attachedDisk,
      boot_disk: this._bootDisk,
      network_interface: this._networkInterface,
      scheduling: this._scheduling,
      scratch_disk: this._scratchDisk,
      service_account: this._serviceAccount,
      shielded_instance_config: this._shieldedInstanceConfig,
      timeouts: this._timeouts,
    };
  }
}
