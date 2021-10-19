// https://www.terraform.io/docs/providers/google/d/compute_instance_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleComputeInstanceTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_instance_template.html#filter DataGoogleComputeInstanceTemplate#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_instance_template.html#most_recent DataGoogleComputeInstanceTemplate#most_recent}
  */
  readonly mostRecent?: boolean | cdktf.IResolvable;
  /**
  * The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_instance_template.html#name DataGoogleComputeInstanceTemplate#name}
  */
  readonly name?: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_instance_template.html#project DataGoogleComputeInstanceTemplate#project}
  */
  readonly project: string;
}
export class DataGoogleComputeInstanceTemplateAdvancedMachineFeatures extends cdktf.ComplexComputedList {

  // enable_nested_virtualization - computed: true, optional: false, required: false
  public get enableNestedVirtualization() {
    return this.getBooleanAttribute('enable_nested_virtualization') as any;
  }

  // threads_per_core - computed: true, optional: false, required: false
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }
}
export class DataGoogleComputeInstanceTemplateConfidentialInstanceConfig extends cdktf.ComplexComputedList {

  // enable_confidential_compute - computed: true, optional: false, required: false
  public get enableConfidentialCompute() {
    return this.getBooleanAttribute('enable_confidential_compute') as any;
  }
}
export class DataGoogleComputeInstanceTemplateDiskDiskEncryptionKey extends cdktf.ComplexComputedList {

  // kms_key_self_link - computed: true, optional: false, required: false
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }
}
export class DataGoogleComputeInstanceTemplateDisk extends cdktf.ComplexComputedList {

  // auto_delete - computed: true, optional: false, required: false
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete') as any;
  }

  // boot - computed: true, optional: false, required: false
  public get boot() {
    return this.getBooleanAttribute('boot') as any;
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // disk_encryption_key - computed: true, optional: false, required: false
  public get diskEncryptionKey() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('disk_encryption_key') as any;
  }

  // disk_name - computed: true, optional: false, required: false
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }

  // disk_size_gb - computed: true, optional: false, required: false
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // resource_policies - computed: true, optional: false, required: false
  public get resourcePolicies() {
    return this.getListAttribute('resource_policies');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // source_image - computed: true, optional: false, required: false
  public get sourceImage() {
    return this.getStringAttribute('source_image');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataGoogleComputeInstanceTemplateGuestAccelerator extends cdktf.ComplexComputedList {

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfig extends cdktf.ComplexComputedList {

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
export class DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange extends cdktf.ComplexComputedList {

  // ip_cidr_range - computed: true, optional: false, required: false
  public get ipCidrRange() {
    return this.getStringAttribute('ip_cidr_range');
  }

  // subnetwork_range_name - computed: true, optional: false, required: false
  public get subnetworkRangeName() {
    return this.getStringAttribute('subnetwork_range_name');
  }
}
export class DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig extends cdktf.ComplexComputedList {

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
export class DataGoogleComputeInstanceTemplateNetworkInterface extends cdktf.ComplexComputedList {

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
export class DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservation extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataGoogleComputeInstanceTemplateReservationAffinity extends cdktf.ComplexComputedList {

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
export class DataGoogleComputeInstanceTemplateSchedulingNodeAffinities extends cdktf.ComplexComputedList {

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
export class DataGoogleComputeInstanceTemplateScheduling extends cdktf.ComplexComputedList {

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
export class DataGoogleComputeInstanceTemplateServiceAccount extends cdktf.ComplexComputedList {

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }
}
export class DataGoogleComputeInstanceTemplateShieldedInstanceConfig extends cdktf.ComplexComputedList {

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
* Represents a {@link https://www.terraform.io/docs/providers/google/d/compute_instance_template.html google_compute_instance_template}
*/
export class DataGoogleComputeInstanceTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_instance_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/compute_instance_template.html google_compute_instance_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleComputeInstanceTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleComputeInstanceTemplateConfig) {
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
    this._filter = config.filter;
    this._mostRecent = config.mostRecent;
    this._name = config.name;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_machine_features - computed: true, optional: false, required: false
  public advancedMachineFeatures(index: string) {
    return new DataGoogleComputeInstanceTemplateAdvancedMachineFeatures(this, 'advanced_machine_features', index);
  }

  // can_ip_forward - computed: true, optional: false, required: false
  public get canIpForward() {
    return this.getBooleanAttribute('can_ip_forward') as any;
  }

  // confidential_instance_config - computed: true, optional: false, required: false
  public confidentialInstanceConfig(index: string) {
    return new DataGoogleComputeInstanceTemplateConfidentialInstanceConfig(this, 'confidential_instance_config', index);
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disk - computed: true, optional: false, required: false
  public disk(index: string) {
    return new DataGoogleComputeInstanceTemplateDisk(this, 'disk', index);
  }

  // enable_display - computed: true, optional: false, required: false
  public get enableDisplay() {
    return this.getBooleanAttribute('enable_display') as any;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string | undefined; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string | undefined) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // guest_accelerator - computed: true, optional: false, required: false
  public guestAccelerator(index: string) {
    return new DataGoogleComputeInstanceTemplateGuestAccelerator(this, 'guest_accelerator', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_description - computed: true, optional: false, required: false
  public get instanceDescription() {
    return this.getStringAttribute('instance_description');
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

  // most_recent - computed: false, optional: true, required: false
  private _mostRecent?: boolean | cdktf.IResolvable | undefined; 
  public get mostRecent() {
    return this.getBooleanAttribute('most_recent') as any;
  }
  public set mostRecent(value: boolean | cdktf.IResolvable | undefined) {
    this._mostRecent = value;
  }
  public resetMostRecent() {
    this._mostRecent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostRecentInput() {
    return this._mostRecent
  }

  // name - computed: false, optional: true, required: false
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

  // name_prefix - computed: true, optional: false, required: false
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }

  // network_interface - computed: true, optional: false, required: false
  public networkInterface(index: string) {
    return new DataGoogleComputeInstanceTemplateNetworkInterface(this, 'network_interface', index);
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // reservation_affinity - computed: true, optional: false, required: false
  public reservationAffinity(index: string) {
    return new DataGoogleComputeInstanceTemplateReservationAffinity(this, 'reservation_affinity', index);
  }

  // scheduling - computed: true, optional: false, required: false
  public scheduling(index: string) {
    return new DataGoogleComputeInstanceTemplateScheduling(this, 'scheduling', index);
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // service_account - computed: true, optional: false, required: false
  public serviceAccount(index: string) {
    return new DataGoogleComputeInstanceTemplateServiceAccount(this, 'service_account', index);
  }

  // shielded_instance_config - computed: true, optional: false, required: false
  public shieldedInstanceConfig(index: string) {
    return new DataGoogleComputeInstanceTemplateShieldedInstanceConfig(this, 'shielded_instance_config', index);
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // tags_fingerprint - computed: true, optional: false, required: false
  public get tagsFingerprint() {
    return this.getStringAttribute('tags_fingerprint');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      most_recent: cdktf.booleanToTerraform(this._mostRecent),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
