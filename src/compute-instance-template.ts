// https://www.terraform.io/docs/providers/google/r/compute_instance_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeInstanceTemplateConfig extends TerraformMetaArguments {
  /** Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false. */
  readonly canIpForward?: boolean;
  /** A brief description of this resource. */
  readonly description?: string;
  /** Enable Virtual Displays on this instance. Note: allow_stopping_for_update must be set to true in order to update this field. */
  readonly enableDisplay?: boolean;
  /** A description of the instance. */
  readonly instanceDescription?: string;
  /** A set of key/value label pairs to assign to instances created from this template, */
  readonly labels?: { [key: string]: string };
  /** The machine type to create. To create a machine with a custom type (such as extended memory), format the value like custom-VCPUS-MEM_IN_MB like custom-6-20480 for 6 vCPU and 20GB of RAM. */
  readonly machineType: string;
  /** Metadata key/value pairs to make available from within instances created from this template. */
  readonly metadata?: { [key: string]: string };
  /** An alternative to using the startup-script metadata key, mostly to match the compute_instance resource. This replaces the startup-script metadata key on the created instance and thus the two mechanisms are not allowed to be used simultaneously. */
  readonly metadataStartupScript?: string;
  /** Specifies a minimum CPU platform. Applicable values are the friendly names of CPU platforms, such as Intel Haswell or Intel Skylake. */
  readonly minCpuPlatform?: string;
  /** The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name. */
  readonly name?: string;
  /** Creates a unique name beginning with the specified prefix. Conflicts with name. */
  readonly namePrefix?: string;
  /** The ID of the project in which the resource belongs. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** An instance template is a global resource that is not bound to a zone or a region. However, you can still specify some regional resources in an instance template, which restricts the template to the region where that resource resides. For example, a custom subnetwork resource is tied to a specific region. Defaults to the region of the Provider if no value is given. */
  readonly region?: string;
  /** Tags to attach to the instance. */
  readonly tags?: string[];
  /** disk block */
  readonly disk: ComputeInstanceTemplateDisk[];
  /** guest_accelerator block */
  readonly guestAccelerator?: ComputeInstanceTemplateGuestAccelerator[];
  /** network_interface block */
  readonly networkInterface?: ComputeInstanceTemplateNetworkInterface[];
  /** scheduling block */
  readonly scheduling?: ComputeInstanceTemplateScheduling[];
  /** service_account block */
  readonly serviceAccount?: ComputeInstanceTemplateServiceAccount[];
  /** shielded_instance_config block */
  readonly shieldedInstanceConfig?: ComputeInstanceTemplateShieldedInstanceConfig[];
  /** timeouts block */
  readonly timeouts?: ComputeInstanceTemplateTimeouts;
}
export interface ComputeInstanceTemplateDiskDiskEncryptionKey {
  /** The self link of the encryption key that is stored in Google Cloud KMS. */
  readonly kmsKeySelfLink: string;
}
export interface ComputeInstanceTemplateDisk {
  /** Whether or not the disk should be auto-deleted. This defaults to true. */
  readonly autoDelete?: boolean;
  /** Indicates that this is a boot disk. */
  readonly boot?: boolean;
  /** A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. If not specified, the server chooses a default device name to apply to this disk. */
  readonly deviceName?: string;
  /** Name of the disk. When not provided, this defaults to the name of the instance. */
  readonly diskName?: string;
  /** The size of the image in gigabytes. If not specified, it will inherit the size of its base image. For SCRATCH disks, the size must be exactly 375GB. */
  readonly diskSizeGb?: number;
  /** The Google Compute Engine disk type. Can be either "pd-ssd", "local-ssd", "pd-balanced" or "pd-standard". */
  readonly diskType?: string;
  /** Specifies the disk interface to use for attaching this disk. */
  readonly interface?: string;
  /** A set of key/value label pairs to assign to disks, */
  readonly labels?: { [key: string]: string };
  /** The mode in which to attach this disk, either READ_WRITE or READ_ONLY. If you are attaching or creating a boot disk, this must read-write mode. */
  readonly mode?: string;
  /** The name (not self_link) of the disk (such as those managed by google_compute_disk) to attach. ~> Note: Either source or source_image is required when creating a new instance except for when creating a local SSD. */
  readonly source?: string;
  /** The image from which to initialize this disk. This can be one of: the image's self_link, projects/{project}/global/images/{image}, projects/{project}/global/images/family/{family}, global/images/{image}, global/images/family/{family}, family/{family}, {project}/{family}, {project}/{image}, {family}, or {image}. ~> Note: Either source or source_image is required when creating a new instance except for when creating a local SSD. */
  readonly sourceImage?: string;
  /** The type of Google Compute Engine disk, can be either "SCRATCH" or "PERSISTENT". */
  readonly type?: string;
  /** disk_encryption_key block */
  readonly diskEncryptionKey?: ComputeInstanceTemplateDiskDiskEncryptionKey[];
}
export interface ComputeInstanceTemplateGuestAccelerator {
  /** The number of the guest accelerator cards exposed to this instance. */
  readonly count: number;
  /** The accelerator type resource to expose to this instance. E.g. nvidia-tesla-k80. */
  readonly type: string;
}
export interface ComputeInstanceTemplateNetworkInterfaceAccessConfig {
  /** The IP address that will be 1:1 mapped to the instance's network ip. If not given, one will be generated. */
  readonly natIp?: string;
  /** The networking tier used for configuring this instance template. This field can take the following values: PREMIUM or STANDARD. If this field is not specified, it is assumed to be PREMIUM. */
  readonly networkTier?: string;
}
export interface ComputeInstanceTemplateNetworkInterfaceAliasIpRange {
  /** The IP CIDR range represented by this alias IP range. This IP CIDR range must belong to the specified subnetwork and cannot contain IP addresses reserved by system or used by other network interfaces. At the time of writing only a netmask (e.g. /24) may be supplied, with a CIDR format resulting in an API error. */
  readonly ipCidrRange: string;
  /** The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range. If left unspecified, the primary range of the subnetwork will be used. */
  readonly subnetworkRangeName?: string;
}
export interface ComputeInstanceTemplateNetworkInterface {
  /** The name or self_link of the network to attach this interface to. Use network attribute for Legacy or Auto subnetted networks and subnetwork for custom subnetted networks. */
  readonly network?: string;
  /** The private IP address to assign to the instance. If empty, the address will be automatically assigned. */
  readonly networkIp?: string;
  /** The name of the subnetwork to attach this interface to. The subnetwork must exist in the same region this instance will be created in. Either network or subnetwork must be provided. */
  readonly subnetwork?: string;
  /** The ID of the project in which the subnetwork belongs. If it is not provided, the provider project is used. */
  readonly subnetworkProject?: string;
  /** access_config block */
  readonly accessConfig?: ComputeInstanceTemplateNetworkInterfaceAccessConfig[];
  /** alias_ip_range block */
  readonly aliasIpRange?: ComputeInstanceTemplateNetworkInterfaceAliasIpRange[];
}
export interface ComputeInstanceTemplateSchedulingNodeAffinities {
  readonly key: string;
  readonly operator: string;
  readonly values: string[];
}
export interface ComputeInstanceTemplateScheduling {
  /** Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user). This defaults to true. */
  readonly automaticRestart?: boolean;
  /** Defines the maintenance behavior for this instance. */
  readonly onHostMaintenance?: string;
  /** Allows instance to be preempted. This defaults to false. */
  readonly preemptible?: boolean;
  /** node_affinities block */
  readonly nodeAffinities?: ComputeInstanceTemplateSchedulingNodeAffinities[];
}
export interface ComputeInstanceTemplateServiceAccount {
  /** The service account e-mail address. If not given, the default Google Compute Engine service account is used. */
  readonly email?: string;
  /** A list of service scopes. Both OAuth2 URLs and gcloud short names are supported. To allow full access to all Cloud APIs, use the cloud-platform scope. */
  readonly scopes: string[];
}
export interface ComputeInstanceTemplateShieldedInstanceConfig {
  /** Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not. Defaults to true. */
  readonly enableIntegrityMonitoring?: boolean;
  /** Verify the digital signature of all boot components, and halt the boot process if signature verification fails. Defaults to false. */
  readonly enableSecureBoot?: boolean;
  /** Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates. Defaults to true. */
  readonly enableVtpm?: boolean;
}
export interface ComputeInstanceTemplateTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class ComputeInstanceTemplate extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._disk = config.disk;
    this._guestAccelerator = config.guestAccelerator;
    this._networkInterface = config.networkInterface;
    this._scheduling = config.scheduling;
    this._serviceAccount = config.serviceAccount;
    this._shieldedInstanceConfig = config.shieldedInstanceConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_description - computed: false, optional: true, required: false
  private _instanceDescription?: string;
  public get instanceDescription() {
    return this.getStringAttribute('instance_description');
  }
  public set instanceDescription(value: string ) {
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

  // min_cpu_platform - computed: false, optional: true, required: false
  private _minCpuPlatform?: string;
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string ) {
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
    return this._name
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
    return this._namePrefix
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
    return this._region
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

  // disk - computed: false, optional: false, required: true
  private _disk: ComputeInstanceTemplateDisk[];
  public get disk() {
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
  private _guestAccelerator?: ComputeInstanceTemplateGuestAccelerator[];
  public get guestAccelerator() {
    return this.interpolationForAttribute('guest_accelerator') as any;
  }
  public set guestAccelerator(value: ComputeInstanceTemplateGuestAccelerator[] ) {
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
  private _networkInterface?: ComputeInstanceTemplateNetworkInterface[];
  public get networkInterface() {
    return this.interpolationForAttribute('network_interface') as any;
  }
  public set networkInterface(value: ComputeInstanceTemplateNetworkInterface[] ) {
    this._networkInterface = value;
  }
  public resetNetworkInterface() {
    this._networkInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface
  }

  // scheduling - computed: false, optional: true, required: false
  private _scheduling?: ComputeInstanceTemplateScheduling[];
  public get scheduling() {
    return this.interpolationForAttribute('scheduling') as any;
  }
  public set scheduling(value: ComputeInstanceTemplateScheduling[] ) {
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
  private _serviceAccount?: ComputeInstanceTemplateServiceAccount[];
  public get serviceAccount() {
    return this.interpolationForAttribute('service_account') as any;
  }
  public set serviceAccount(value: ComputeInstanceTemplateServiceAccount[] ) {
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
  private _shieldedInstanceConfig?: ComputeInstanceTemplateShieldedInstanceConfig[];
  public get shieldedInstanceConfig() {
    return this.interpolationForAttribute('shielded_instance_config') as any;
  }
  public set shieldedInstanceConfig(value: ComputeInstanceTemplateShieldedInstanceConfig[] ) {
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
  private _timeouts?: ComputeInstanceTemplateTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeInstanceTemplateTimeouts ) {
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
      can_ip_forward: this._canIpForward,
      description: this._description,
      enable_display: this._enableDisplay,
      instance_description: this._instanceDescription,
      labels: this._labels,
      machine_type: this._machineType,
      metadata: this._metadata,
      metadata_startup_script: this._metadataStartupScript,
      min_cpu_platform: this._minCpuPlatform,
      name: this._name,
      name_prefix: this._namePrefix,
      project: this._project,
      region: this._region,
      tags: this._tags,
      disk: this._disk,
      guest_accelerator: this._guestAccelerator,
      network_interface: this._networkInterface,
      scheduling: this._scheduling,
      service_account: this._serviceAccount,
      shielded_instance_config: this._shieldedInstanceConfig,
      timeouts: this._timeouts,
    };
  }
}
