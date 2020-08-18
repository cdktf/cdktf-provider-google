// https://www.terraform.io/docs/providers/google/r/compute_instance_from_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeInstanceFromTemplateConfig extends TerraformMetaArguments {
  /** If true, allows Terraform to stop the instance to update its properties. If you try to update a property that requires stopping the instance without setting this field, the update will fail. */
  readonly allowStoppingForUpdate?: boolean;
  /** List of disks attached to the instance */
  readonly attachedDisk?: ComputeInstanceFromTemplateAttachedDisk[];
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
  readonly guestAccelerator?: ComputeInstanceFromTemplateGuestAccelerator[];
  /** A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of labels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]*[a-z0-9]), concatenated with periods. The entire hostname must not exceed 253 characters. Changing this forces a new resource to be created. */
  readonly hostname?: string;
  /** A set of key/value label pairs assigned to the instance. */
  readonly labels?: { [key: string]: string };
  /** The machine type to create. */
  readonly machineType?: string;
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
  /** The scratch disks attached to the instance. */
  readonly scratchDisk?: ComputeInstanceFromTemplateScratchDisk[];
  /** The service account to attach to the instance. */
  readonly serviceAccount?: ComputeInstanceFromTemplateServiceAccount[];
  /** Name or self link of an instance template to create the instance based on. */
  readonly sourceInstanceTemplate: string;
  /** The list of tags attached to the instance. */
  readonly tags?: string[];
  /** The zone of the instance. If self_link is provided, this value is ignored. If neither self_link nor zone are provided, the provider zone is used. */
  readonly zone?: string;
  /** boot_disk block */
  readonly bootDisk?: ComputeInstanceFromTemplateBootDisk[];
  /** network_interface block */
  readonly networkInterface?: ComputeInstanceFromTemplateNetworkInterface[];
  /** scheduling block */
  readonly scheduling?: ComputeInstanceFromTemplateScheduling[];
  /** shielded_instance_config block */
  readonly shieldedInstanceConfig?: ComputeInstanceFromTemplateShieldedInstanceConfig[];
  /** timeouts block */
  readonly timeouts?: ComputeInstanceFromTemplateTimeouts;
}
export interface ComputeInstanceFromTemplateAttachedDisk {
  readonly deviceName?: string;
  readonly diskEncryptionKeyRaw?: string;
  readonly diskEncryptionKeySha256?: string;
  readonly kmsKeySelfLink?: string;
  readonly mode?: string;
  readonly source?: string;
}
export interface ComputeInstanceFromTemplateGuestAccelerator {
  readonly count?: number;
  readonly type?: string;
}
export interface ComputeInstanceFromTemplateScratchDisk {
  readonly interface?: string;
}
export interface ComputeInstanceFromTemplateServiceAccount {
  readonly email?: string;
  readonly scopes?: string[];
}
export interface ComputeInstanceFromTemplateBootDiskInitializeParams {
  /** The image from which this disk was initialised. */
  readonly image?: string;
  /** A set of key/value label pairs assigned to the disk. */
  readonly labels?: { [key: string]: string };
  /** The size of the image in gigabytes. */
  readonly size?: number;
  /** The GCE disk type. One of pd-standard or pd-ssd. */
  readonly type?: string;
}
export interface ComputeInstanceFromTemplateBootDisk {
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
  readonly initializeParams?: ComputeInstanceFromTemplateBootDiskInitializeParams[];
}
export interface ComputeInstanceFromTemplateNetworkInterfaceAccessConfig {
  readonly natIp?: string;
  readonly networkTier?: string;
  readonly publicPtrDomainName?: string;
}
export interface ComputeInstanceFromTemplateNetworkInterfaceAliasIpRange {
  readonly ipCidrRange?: string;
  readonly subnetworkRangeName?: string;
}
export interface ComputeInstanceFromTemplateNetworkInterface {
  /** Access configurations, i.e. IPs via which this instance can be accessed via the Internet. */
  readonly accessConfig?: ComputeInstanceFromTemplateNetworkInterfaceAccessConfig[];
  /** An array of alias IP ranges for this network interface. */
  readonly aliasIpRange?: ComputeInstanceFromTemplateNetworkInterfaceAliasIpRange[];
  /** The name or self_link of the network attached to this interface. */
  readonly network?: string;
  /** The private IP address assigned to the instance. */
  readonly networkIp?: string;
  /** The name or self_link of the subnetwork attached to this interface. */
  readonly subnetwork?: string;
  /** The project in which the subnetwork belongs. */
  readonly subnetworkProject?: string;
}
export interface ComputeInstanceFromTemplateSchedulingNodeAffinities {
  readonly key: string;
  readonly operator: string;
  readonly values: string[];
}
export interface ComputeInstanceFromTemplateScheduling {
  /** Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user). */
  readonly automaticRestart?: boolean;
  /** Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE, */
  readonly onHostMaintenance?: string;
  /** Whether the instance is preemptible. */
  readonly preemptible?: boolean;
  /** node_affinities block */
  readonly nodeAffinities?: ComputeInstanceFromTemplateSchedulingNodeAffinities[];
}
export interface ComputeInstanceFromTemplateShieldedInstanceConfig {
  /** Whether integrity monitoring is enabled for the instance. */
  readonly enableIntegrityMonitoring?: boolean;
  /** Whether secure boot is enabled for the instance. */
  readonly enableSecureBoot?: boolean;
  /** Whether the instance uses vTPM. */
  readonly enableVtpm?: boolean;
}
export interface ComputeInstanceFromTemplateTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeInstanceFromTemplate extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._bootDisk = config.bootDisk;
    this._networkInterface = config.networkInterface;
    this._scheduling = config.scheduling;
    this._shieldedInstanceConfig = config.shieldedInstanceConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_stopping_for_update - computed: true, optional: true, required: false
  private _allowStoppingForUpdate?: boolean;
  public get allowStoppingForUpdate() {
    return this._allowStoppingForUpdate ?? this.getBooleanAttribute('allow_stopping_for_update');
  }
  public set allowStoppingForUpdate(value: boolean | undefined) {
    this._allowStoppingForUpdate = value;
  }

  // attached_disk - computed: true, optional: true, required: false
  private _attachedDisk?: ComputeInstanceFromTemplateAttachedDisk[]
  public get attachedDisk(): ComputeInstanceFromTemplateAttachedDisk[] | undefined {
    return this._attachedDisk; // Getting the computed value is not yet implemented
  }
  public set attachedDisk(value: ComputeInstanceFromTemplateAttachedDisk[] | undefined) {
    this._attachedDisk = value;
  }

  // can_ip_forward - computed: true, optional: true, required: false
  private _canIpForward?: boolean;
  public get canIpForward() {
    return this._canIpForward ?? this.getBooleanAttribute('can_ip_forward');
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

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean;
  public get deletionProtection() {
    return this._deletionProtection ?? this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | undefined) {
    this._deletionProtection = value;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description ?? this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // desired_status - computed: true, optional: true, required: false
  private _desiredStatus?: string;
  public get desiredStatus() {
    return this._desiredStatus ?? this.getStringAttribute('desired_status');
  }
  public set desiredStatus(value: string | undefined) {
    this._desiredStatus = value;
  }

  // enable_display - computed: true, optional: true, required: false
  private _enableDisplay?: boolean;
  public get enableDisplay() {
    return this._enableDisplay ?? this.getBooleanAttribute('enable_display');
  }
  public set enableDisplay(value: boolean | undefined) {
    this._enableDisplay = value;
  }

  // guest_accelerator - computed: true, optional: true, required: false
  private _guestAccelerator?: ComputeInstanceFromTemplateGuestAccelerator[]
  public get guestAccelerator(): ComputeInstanceFromTemplateGuestAccelerator[] | undefined {
    return this._guestAccelerator; // Getting the computed value is not yet implemented
  }
  public set guestAccelerator(value: ComputeInstanceFromTemplateGuestAccelerator[] | undefined) {
    this._guestAccelerator = value;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string;
  public get hostname() {
    return this._hostname ?? this.getStringAttribute('hostname');
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

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }
  public get labels(): { [key: string]: string } | undefined {
    return this._labels; // Getting the computed value is not yet implemented
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // machine_type - computed: true, optional: true, required: false
  private _machineType?: string;
  public get machineType() {
    return this._machineType ?? this.getStringAttribute('machine_type');
  }
  public set machineType(value: string | undefined) {
    this._machineType = value;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }
  public get metadata(): { [key: string]: string } | undefined {
    return this._metadata; // Getting the computed value is not yet implemented
  }
  public set metadata(value: { [key: string]: string } | undefined) {
    this._metadata = value;
  }

  // metadata_fingerprint - computed: true, optional: false, required: true
  public get metadataFingerprint() {
    return this.getStringAttribute('metadata_fingerprint');
  }

  // metadata_startup_script - computed: true, optional: true, required: false
  private _metadataStartupScript?: string;
  public get metadataStartupScript() {
    return this._metadataStartupScript ?? this.getStringAttribute('metadata_startup_script');
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

  // resource_policies - computed: true, optional: true, required: false
  private _resourcePolicies?: string[];
  public get resourcePolicies() {
    return this._resourcePolicies ?? this.getListAttribute('resource_policies');
  }
  public set resourcePolicies(value: string[] | undefined) {
    this._resourcePolicies = value;
  }

  // scratch_disk - computed: true, optional: true, required: false
  private _scratchDisk?: ComputeInstanceFromTemplateScratchDisk[]
  public get scratchDisk(): ComputeInstanceFromTemplateScratchDisk[] | undefined {
    return this._scratchDisk; // Getting the computed value is not yet implemented
  }
  public set scratchDisk(value: ComputeInstanceFromTemplateScratchDisk[] | undefined) {
    this._scratchDisk = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // service_account - computed: true, optional: true, required: false
  private _serviceAccount?: ComputeInstanceFromTemplateServiceAccount[]
  public get serviceAccount(): ComputeInstanceFromTemplateServiceAccount[] | undefined {
    return this._serviceAccount; // Getting the computed value is not yet implemented
  }
  public set serviceAccount(value: ComputeInstanceFromTemplateServiceAccount[] | undefined) {
    this._serviceAccount = value;
  }

  // source_instance_template - computed: false, optional: false, required: true
  private _sourceInstanceTemplate: string;
  public get sourceInstanceTemplate() {
    return this._sourceInstanceTemplate;
  }
  public set sourceInstanceTemplate(value: string) {
    this._sourceInstanceTemplate = value;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[];
  public get tags() {
    return this._tags ?? this.getListAttribute('tags');
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

  // boot_disk - computed: false, optional: true, required: false
  private _bootDisk?: ComputeInstanceFromTemplateBootDisk[];
  public get bootDisk() {
    return this._bootDisk;
  }
  public set bootDisk(value: ComputeInstanceFromTemplateBootDisk[] | undefined) {
    this._bootDisk = value;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface?: ComputeInstanceFromTemplateNetworkInterface[];
  public get networkInterface() {
    return this._networkInterface;
  }
  public set networkInterface(value: ComputeInstanceFromTemplateNetworkInterface[] | undefined) {
    this._networkInterface = value;
  }

  // scheduling - computed: false, optional: true, required: false
  private _scheduling?: ComputeInstanceFromTemplateScheduling[];
  public get scheduling() {
    return this._scheduling;
  }
  public set scheduling(value: ComputeInstanceFromTemplateScheduling[] | undefined) {
    this._scheduling = value;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig?: ComputeInstanceFromTemplateShieldedInstanceConfig[];
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public set shieldedInstanceConfig(value: ComputeInstanceFromTemplateShieldedInstanceConfig[] | undefined) {
    this._shieldedInstanceConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeInstanceFromTemplateTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeInstanceFromTemplateTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_stopping_for_update: this._allowStoppingForUpdate,
      attached_disk: this._attachedDisk,
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
      scratch_disk: this._scratchDisk,
      service_account: this._serviceAccount,
      source_instance_template: this._sourceInstanceTemplate,
      tags: this._tags,
      zone: this._zone,
      boot_disk: this._bootDisk,
      network_interface: this._networkInterface,
      scheduling: this._scheduling,
      shielded_instance_config: this._shieldedInstanceConfig,
      timeouts: this._timeouts,
    };
  }
}
