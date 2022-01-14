// https://www.terraform.io/docs/providers/google/d/compute_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleComputeInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the instance. One of name or self_link must be provided.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_instance#name DataGoogleComputeInstance#name}
  */
  readonly name?: string;
  /**
  * The ID of the project in which the resource belongs. If self_link is provided, this value is ignored. If neither self_link nor project are provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_instance#project DataGoogleComputeInstance#project}
  */
  readonly project?: string;
  /**
  * The URI of the created resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_instance#self_link DataGoogleComputeInstance#self_link}
  */
  readonly selfLink?: string;
  /**
  * The zone of the instance. If self_link is provided, this value is ignored. If neither self_link nor zone are provided, the provider zone is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_instance#zone DataGoogleComputeInstance#zone}
  */
  readonly zone?: string;
}
export class DataGoogleComputeInstanceAdvancedMachineFeatures extends cdktf.ComplexComputedList {

  // enable_nested_virtualization - computed: true, optional: false, required: false
  public get enableNestedVirtualization() {
    return this.getBooleanAttribute('enable_nested_virtualization') as any;
  }

  // threads_per_core - computed: true, optional: false, required: false
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }
}
export class DataGoogleComputeInstanceAttachedDisk extends cdktf.ComplexComputedList {

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // disk_encryption_key_raw - computed: true, optional: false, required: false
  public get diskEncryptionKeyRaw() {
    return this.getStringAttribute('disk_encryption_key_raw');
  }

  // disk_encryption_key_sha256 - computed: true, optional: false, required: false
  public get diskEncryptionKeySha256() {
    return this.getStringAttribute('disk_encryption_key_sha256');
  }

  // kms_key_self_link - computed: true, optional: false, required: false
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }
}
export class DataGoogleComputeInstanceBootDiskInitializeParams extends cdktf.ComplexComputedList {

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataGoogleComputeInstanceBootDisk extends cdktf.ComplexComputedList {

  // auto_delete - computed: true, optional: false, required: false
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete') as any;
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // disk_encryption_key_raw - computed: true, optional: false, required: false
  public get diskEncryptionKeyRaw() {
    return this.getStringAttribute('disk_encryption_key_raw');
  }

  // disk_encryption_key_sha256 - computed: true, optional: false, required: false
  public get diskEncryptionKeySha256() {
    return this.getStringAttribute('disk_encryption_key_sha256');
  }

  // initialize_params - computed: true, optional: false, required: false
  public get initializeParams() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('initialize_params') as any;
  }

  // kms_key_self_link - computed: true, optional: false, required: false
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }
}
export class DataGoogleComputeInstanceConfidentialInstanceConfig extends cdktf.ComplexComputedList {

  // enable_confidential_compute - computed: true, optional: false, required: false
  public get enableConfidentialCompute() {
    return this.getBooleanAttribute('enable_confidential_compute') as any;
  }
}
export class DataGoogleComputeInstanceGuestAccelerator extends cdktf.ComplexComputedList {

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataGoogleComputeInstanceNetworkInterfaceAccessConfig extends cdktf.ComplexComputedList {

  // nat_ip - computed: true, optional: false, required: false
  public get natIp() {
    return this.getStringAttribute('nat_ip');
  }

  // network_tier - computed: true, optional: false, required: false
  public get networkTier() {
    return this.getStringAttribute('network_tier');
  }

  // public_ptr_domain_name - computed: true, optional: false, required: false
  public get publicPtrDomainName() {
    return this.getStringAttribute('public_ptr_domain_name');
  }
}
export class DataGoogleComputeInstanceNetworkInterfaceAliasIpRange extends cdktf.ComplexComputedList {

  // ip_cidr_range - computed: true, optional: false, required: false
  public get ipCidrRange() {
    return this.getStringAttribute('ip_cidr_range');
  }

  // subnetwork_range_name - computed: true, optional: false, required: false
  public get subnetworkRangeName() {
    return this.getStringAttribute('subnetwork_range_name');
  }
}
export class DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfig extends cdktf.ComplexComputedList {

  // external_ipv6 - computed: true, optional: false, required: false
  public get externalIpv6() {
    return this.getStringAttribute('external_ipv6');
  }

  // external_ipv6_prefix_length - computed: true, optional: false, required: false
  public get externalIpv6PrefixLength() {
    return this.getStringAttribute('external_ipv6_prefix_length');
  }

  // network_tier - computed: true, optional: false, required: false
  public get networkTier() {
    return this.getStringAttribute('network_tier');
  }

  // public_ptr_domain_name - computed: true, optional: false, required: false
  public get publicPtrDomainName() {
    return this.getStringAttribute('public_ptr_domain_name');
  }
}
export class DataGoogleComputeInstanceNetworkInterface extends cdktf.ComplexComputedList {

  // access_config - computed: true, optional: false, required: false
  public get accessConfig() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('access_config') as any;
  }

  // alias_ip_range - computed: true, optional: false, required: false
  public get aliasIpRange() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('alias_ip_range') as any;
  }

  // ipv6_access_config - computed: true, optional: false, required: false
  public get ipv6AccessConfig() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ipv6_access_config') as any;
  }

  // ipv6_access_type - computed: true, optional: false, required: false
  public get ipv6AccessType() {
    return this.getStringAttribute('ipv6_access_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // network_ip - computed: true, optional: false, required: false
  public get networkIp() {
    return this.getStringAttribute('network_ip');
  }

  // nic_type - computed: true, optional: false, required: false
  public get nicType() {
    return this.getStringAttribute('nic_type');
  }

  // stack_type - computed: true, optional: false, required: false
  public get stackType() {
    return this.getStringAttribute('stack_type');
  }

  // subnetwork - computed: true, optional: false, required: false
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }

  // subnetwork_project - computed: true, optional: false, required: false
  public get subnetworkProject() {
    return this.getStringAttribute('subnetwork_project');
  }
}
export class DataGoogleComputeInstanceReservationAffinitySpecificReservation extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataGoogleComputeInstanceReservationAffinity extends cdktf.ComplexComputedList {

  // specific_reservation - computed: true, optional: false, required: false
  public get specificReservation() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('specific_reservation') as any;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataGoogleComputeInstanceSchedulingNodeAffinities extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataGoogleComputeInstanceScheduling extends cdktf.ComplexComputedList {

  // automatic_restart - computed: true, optional: false, required: false
  public get automaticRestart() {
    return this.getBooleanAttribute('automatic_restart') as any;
  }

  // min_node_cpus - computed: true, optional: false, required: false
  public get minNodeCpus() {
    return this.getNumberAttribute('min_node_cpus');
  }

  // node_affinities - computed: true, optional: false, required: false
  public get nodeAffinities() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('node_affinities') as any;
  }

  // on_host_maintenance - computed: true, optional: false, required: false
  public get onHostMaintenance() {
    return this.getStringAttribute('on_host_maintenance');
  }

  // preemptible - computed: true, optional: false, required: false
  public get preemptible() {
    return this.getBooleanAttribute('preemptible') as any;
  }
}
export class DataGoogleComputeInstanceScratchDisk extends cdktf.ComplexComputedList {

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }
}
export class DataGoogleComputeInstanceServiceAccount extends cdktf.ComplexComputedList {

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }
}
export class DataGoogleComputeInstanceShieldedInstanceConfig extends cdktf.ComplexComputedList {

  // enable_integrity_monitoring - computed: true, optional: false, required: false
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring') as any;
  }

  // enable_secure_boot - computed: true, optional: false, required: false
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot') as any;
  }

  // enable_vtpm - computed: true, optional: false, required: false
  public get enableVtpm() {
    return this.getBooleanAttribute('enable_vtpm') as any;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/compute_instance google_compute_instance}
*/
export class DataGoogleComputeInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/compute_instance google_compute_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleComputeInstanceConfig = {}
  */
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

  // advanced_machine_features - computed: true, optional: false, required: false
  public advancedMachineFeatures(index: string) {
    return new DataGoogleComputeInstanceAdvancedMachineFeatures(this, 'advanced_machine_features', index);
  }

  // allow_stopping_for_update - computed: true, optional: false, required: false
  public get allowStoppingForUpdate() {
    return this.getBooleanAttribute('allow_stopping_for_update') as any;
  }

  // attached_disk - computed: true, optional: false, required: false
  public attachedDisk(index: string) {
    return new DataGoogleComputeInstanceAttachedDisk(this, 'attached_disk', index);
  }

  // boot_disk - computed: true, optional: false, required: false
  public bootDisk(index: string) {
    return new DataGoogleComputeInstanceBootDisk(this, 'boot_disk', index);
  }

  // can_ip_forward - computed: true, optional: false, required: false
  public get canIpForward() {
    return this.getBooleanAttribute('can_ip_forward') as any;
  }

  // confidential_instance_config - computed: true, optional: false, required: false
  public confidentialInstanceConfig(index: string) {
    return new DataGoogleComputeInstanceConfidentialInstanceConfig(this, 'confidential_instance_config', index);
  }

  // cpu_platform - computed: true, optional: false, required: false
  public get cpuPlatform() {
    return this.getStringAttribute('cpu_platform');
  }

  // current_status - computed: true, optional: false, required: false
  public get currentStatus() {
    return this.getStringAttribute('current_status');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection') as any;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // desired_status - computed: true, optional: false, required: false
  public get desiredStatus() {
    return this.getStringAttribute('desired_status');
  }

  // enable_display - computed: true, optional: false, required: false
  public get enableDisplay() {
    return this.getBooleanAttribute('enable_display') as any;
  }

  // guest_accelerator - computed: true, optional: false, required: false
  public guestAccelerator(index: string) {
    return new DataGoogleComputeInstanceGuestAccelerator(this, 'guest_accelerator', index);
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
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

  // labels - computed: true, optional: false, required: false
  public labels(key: string): string {
    return new cdktf.StringMap(this, 'labels').lookup(key);
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // metadata - computed: true, optional: false, required: false
  public metadata(key: string): string {
    return new cdktf.StringMap(this, 'metadata').lookup(key);
  }

  // metadata_fingerprint - computed: true, optional: false, required: false
  public get metadataFingerprint() {
    return this.getStringAttribute('metadata_fingerprint');
  }

  // metadata_startup_script - computed: true, optional: false, required: false
  public get metadataStartupScript() {
    return this.getStringAttribute('metadata_startup_script');
  }

  // min_cpu_platform - computed: true, optional: false, required: false
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }

  // name - computed: false, optional: true, required: false
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

  // network_interface - computed: true, optional: false, required: false
  public networkInterface(index: string) {
    return new DataGoogleComputeInstanceNetworkInterface(this, 'network_interface', index);
  }

  // project - computed: false, optional: true, required: false
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

  // reservation_affinity - computed: true, optional: false, required: false
  public reservationAffinity(index: string) {
    return new DataGoogleComputeInstanceReservationAffinity(this, 'reservation_affinity', index);
  }

  // resource_policies - computed: true, optional: false, required: false
  public get resourcePolicies() {
    return this.getListAttribute('resource_policies');
  }

  // scheduling - computed: true, optional: false, required: false
  public scheduling(index: string) {
    return new DataGoogleComputeInstanceScheduling(this, 'scheduling', index);
  }

  // scratch_disk - computed: true, optional: false, required: false
  public scratchDisk(index: string) {
    return new DataGoogleComputeInstanceScratchDisk(this, 'scratch_disk', index);
  }

  // self_link - computed: false, optional: true, required: false
  private _selfLink?: string; 
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }
  public set selfLink(value: string) {
    this._selfLink = value;
  }
  public resetSelfLink() {
    this._selfLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfLinkInput() {
    return this._selfLink;
  }

  // service_account - computed: true, optional: false, required: false
  public serviceAccount(index: string) {
    return new DataGoogleComputeInstanceServiceAccount(this, 'service_account', index);
  }

  // shielded_instance_config - computed: true, optional: false, required: false
  public shieldedInstanceConfig(index: string) {
    return new DataGoogleComputeInstanceShieldedInstanceConfig(this, 'shielded_instance_config', index);
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // tags_fingerprint - computed: true, optional: false, required: false
  public get tagsFingerprint() {
    return this.getStringAttribute('tags_fingerprint');
  }

  // zone - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      self_link: cdktf.stringToTerraform(this._selfLink),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }
}
