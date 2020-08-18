// https://www.terraform.io/docs/providers/google/r/data_google_compute_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataGoogleComputeInstanceConfig extends TerraformMetaArguments {
  /** The name of the instance. One of name or self_link must be provided. */
  readonly name?: string;
  /** The ID of the project in which the resource belongs. If self_link is provided, this value is ignored. If neither self_link nor project are provided, the provider project is used. */
  readonly project?: string;
  /** The URI of the created resource. */
  readonly selfLink?: string;
  /** The zone of the instance. If self_link is provided, this value is ignored. If neither self_link nor zone are provided, the provider zone is used. */
  readonly zone?: string;
}
export class DataGoogleComputeInstanceAttachedDisk extends ComplexComputedList {

  // device_name - computed: true, optional: false, required: true
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // disk_encryption_key_raw - computed: true, optional: false, required: true
  public get diskEncryptionKeyRaw() {
    return this.getStringAttribute('disk_encryption_key_raw');
  }

  // disk_encryption_key_sha256 - computed: true, optional: false, required: true
  public get diskEncryptionKeySha256() {
    return this.getStringAttribute('disk_encryption_key_sha256');
  }

  // kms_key_self_link - computed: true, optional: false, required: true
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }

  // mode - computed: true, optional: false, required: true
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // source - computed: true, optional: false, required: true
  public get source() {
    return this.getStringAttribute('source');
  }
}
export class DataGoogleComputeInstanceBootDiskInitializeParams extends ComplexComputedList {

  // image - computed: true, optional: false, required: true
  public get image() {
    return this.getStringAttribute('image');
  }

  // labels - computed: true, optional: false, required: true
  public get labels() {
    return 'not implemented' as any;
  }

  // size - computed: true, optional: false, required: true
  public get size() {
    return this.getNumberAttribute('size');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataGoogleComputeInstanceBootDisk extends ComplexComputedList {

  // auto_delete - computed: true, optional: false, required: true
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete');
  }

  // device_name - computed: true, optional: false, required: true
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // disk_encryption_key_raw - computed: true, optional: false, required: true
  public get diskEncryptionKeyRaw() {
    return this.getStringAttribute('disk_encryption_key_raw');
  }

  // disk_encryption_key_sha256 - computed: true, optional: false, required: true
  public get diskEncryptionKeySha256() {
    return this.getStringAttribute('disk_encryption_key_sha256');
  }

  // initialize_params - computed: true, optional: false, required: true
  public get initializeParams() {
    return 'not implemented' as any;
  }

  // kms_key_self_link - computed: true, optional: false, required: true
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }

  // mode - computed: true, optional: false, required: true
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // source - computed: true, optional: false, required: true
  public get source() {
    return this.getStringAttribute('source');
  }
}
export class DataGoogleComputeInstanceGuestAccelerator extends ComplexComputedList {

  // count - computed: true, optional: false, required: true
  public get count() {
    return this.getNumberAttribute('count');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataGoogleComputeInstanceNetworkInterfaceAccessConfig extends ComplexComputedList {

  // nat_ip - computed: true, optional: false, required: true
  public get natIp() {
    return this.getStringAttribute('nat_ip');
  }

  // network_tier - computed: true, optional: false, required: true
  public get networkTier() {
    return this.getStringAttribute('network_tier');
  }

  // public_ptr_domain_name - computed: true, optional: false, required: true
  public get publicPtrDomainName() {
    return this.getStringAttribute('public_ptr_domain_name');
  }
}
export class DataGoogleComputeInstanceNetworkInterfaceAliasIpRange extends ComplexComputedList {

  // ip_cidr_range - computed: true, optional: false, required: true
  public get ipCidrRange() {
    return this.getStringAttribute('ip_cidr_range');
  }

  // subnetwork_range_name - computed: true, optional: false, required: true
  public get subnetworkRangeName() {
    return this.getStringAttribute('subnetwork_range_name');
  }
}
export class DataGoogleComputeInstanceNetworkInterface extends ComplexComputedList {

  // access_config - computed: true, optional: false, required: true
  public get accessConfig() {
    return 'not implemented' as any;
  }

  // alias_ip_range - computed: true, optional: false, required: true
  public get aliasIpRange() {
    return 'not implemented' as any;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: true, optional: false, required: true
  public get network() {
    return this.getStringAttribute('network');
  }

  // network_ip - computed: true, optional: false, required: true
  public get networkIp() {
    return this.getStringAttribute('network_ip');
  }

  // subnetwork - computed: true, optional: false, required: true
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }

  // subnetwork_project - computed: true, optional: false, required: true
  public get subnetworkProject() {
    return this.getStringAttribute('subnetwork_project');
  }
}
export class DataGoogleComputeInstanceSchedulingNodeAffinities extends ComplexComputedList {

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: true
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: true
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataGoogleComputeInstanceScheduling extends ComplexComputedList {

  // automatic_restart - computed: true, optional: false, required: true
  public get automaticRestart() {
    return this.getBooleanAttribute('automatic_restart');
  }

  // node_affinities - computed: true, optional: false, required: true
  public get nodeAffinities() {
    return 'not implemented' as any;
  }

  // on_host_maintenance - computed: true, optional: false, required: true
  public get onHostMaintenance() {
    return this.getStringAttribute('on_host_maintenance');
  }

  // preemptible - computed: true, optional: false, required: true
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }
}
export class DataGoogleComputeInstanceScratchDisk extends ComplexComputedList {

  // interface - computed: true, optional: false, required: true
  public get interface() {
    return this.getStringAttribute('interface');
  }
}
export class DataGoogleComputeInstanceServiceAccount extends ComplexComputedList {

  // email - computed: true, optional: false, required: true
  public get email() {
    return this.getStringAttribute('email');
  }

  // scopes - computed: true, optional: false, required: true
  public get scopes() {
    return this.getListAttribute('scopes');
  }
}
export class DataGoogleComputeInstanceShieldedInstanceConfig extends ComplexComputedList {

  // enable_integrity_monitoring - computed: true, optional: false, required: true
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }

  // enable_secure_boot - computed: true, optional: false, required: true
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }

  // enable_vtpm - computed: true, optional: false, required: true
  public get enableVtpm() {
    return this.getBooleanAttribute('enable_vtpm');
  }
}

// Resource

export class DataGoogleComputeInstance extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleComputeInstanceConfig = {}) {
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
    this._name = config.name;
    this._project = config.project;
    this._selfLink = config.selfLink;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_stopping_for_update - computed: true, optional: false, required: true
  public get allowStoppingForUpdate() {
    return this.getBooleanAttribute('allow_stopping_for_update');
  }

  // attached_disk - computed: true, optional: false, required: true
  public attachedDisk(index: string) {
    return new DataGoogleComputeInstanceAttachedDisk(this, 'attached_disk', index);
  }

  // boot_disk - computed: true, optional: false, required: true
  public bootDisk(index: string) {
    return new DataGoogleComputeInstanceBootDisk(this, 'boot_disk', index);
  }

  // can_ip_forward - computed: true, optional: false, required: true
  public get canIpForward() {
    return this.getBooleanAttribute('can_ip_forward');
  }

  // cpu_platform - computed: true, optional: false, required: true
  public get cpuPlatform() {
    return this.getStringAttribute('cpu_platform');
  }

  // current_status - computed: true, optional: false, required: true
  public get currentStatus() {
    return this.getStringAttribute('current_status');
  }

  // deletion_protection - computed: true, optional: false, required: true
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // desired_status - computed: true, optional: false, required: true
  public get desiredStatus() {
    return this.getStringAttribute('desired_status');
  }

  // enable_display - computed: true, optional: false, required: true
  public get enableDisplay() {
    return this.getBooleanAttribute('enable_display');
  }

  // guest_accelerator - computed: true, optional: false, required: true
  public guestAccelerator(index: string) {
    return new DataGoogleComputeInstanceGuestAccelerator(this, 'guest_accelerator', index);
  }

  // hostname - computed: true, optional: false, required: true
  public get hostname() {
    return this.getStringAttribute('hostname');
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

  // labels - computed: true, optional: false, required: true
  public labels(key: string): string {
    return new StringMap(this, 'labels').lookup(key);
  }

  // machine_type - computed: true, optional: false, required: true
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // metadata - computed: true, optional: false, required: true
  public metadata(key: string): string {
    return new StringMap(this, 'metadata').lookup(key);
  }

  // metadata_fingerprint - computed: true, optional: false, required: true
  public get metadataFingerprint() {
    return this.getStringAttribute('metadata_fingerprint');
  }

  // metadata_startup_script - computed: true, optional: false, required: true
  public get metadataStartupScript() {
    return this.getStringAttribute('metadata_startup_script');
  }

  // min_cpu_platform - computed: true, optional: false, required: true
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // network_interface - computed: true, optional: false, required: true
  public networkInterface(index: string) {
    return new DataGoogleComputeInstanceNetworkInterface(this, 'network_interface', index);
  }

  // project - computed: false, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // resource_policies - computed: true, optional: false, required: true
  public get resourcePolicies() {
    return this.getListAttribute('resource_policies');
  }

  // scheduling - computed: true, optional: false, required: true
  public scheduling(index: string) {
    return new DataGoogleComputeInstanceScheduling(this, 'scheduling', index);
  }

  // scratch_disk - computed: true, optional: false, required: true
  public scratchDisk(index: string) {
    return new DataGoogleComputeInstanceScratchDisk(this, 'scratch_disk', index);
  }

  // self_link - computed: false, optional: true, required: false
  private _selfLink?: string;
  public get selfLink() {
    return this._selfLink;
  }
  public set selfLink(value: string | undefined) {
    this._selfLink = value;
  }

  // service_account - computed: true, optional: false, required: true
  public serviceAccount(index: string) {
    return new DataGoogleComputeInstanceServiceAccount(this, 'service_account', index);
  }

  // shielded_instance_config - computed: true, optional: false, required: true
  public shieldedInstanceConfig(index: string) {
    return new DataGoogleComputeInstanceShieldedInstanceConfig(this, 'shielded_instance_config', index);
  }

  // tags - computed: true, optional: false, required: true
  public get tags() {
    return this.getListAttribute('tags');
  }

  // tags_fingerprint - computed: true, optional: false, required: true
  public get tagsFingerprint() {
    return this.getStringAttribute('tags_fingerprint');
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this._zone;
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      project: this._project,
      self_link: this._selfLink,
      zone: this._zone,
    };
  }
}
