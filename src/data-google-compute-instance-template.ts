// https://www.terraform.io/docs/providers/google/r/data_google_compute_instance_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleComputeInstanceTemplateConfig extends cdktf.TerraformMetaArguments {
  readonly filter?: string;
  readonly mostRecent?: boolean;
  /** The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name. */
  readonly name?: string;
  /** The ID of the project in which the resource belongs. If it is not provided, the provider project is used. */
  readonly project: string;
}
export class DataGoogleComputeInstanceTemplateConfidentialInstanceConfig extends cdktf.ComplexComputedList {

  // enable_confidential_compute - computed: true, optional: false, required: false
  public get enableConfidentialCompute() {
    return this.getBooleanAttribute('enable_confidential_compute');
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
    return this.getBooleanAttribute('auto_delete');
  }

  // boot - computed: true, optional: false, required: false
  public get boot() {
    return this.getBooleanAttribute('boot');
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // disk_encryption_key - computed: true, optional: false, required: false
  public get diskEncryptionKey() {
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
    return this.interpolationForAttribute('labels') as any;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
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
export class DataGoogleComputeInstanceTemplateNetworkInterface extends cdktf.ComplexComputedList {

  // access_config - computed: true, optional: false, required: false
  public get accessConfig() {
    return this.interpolationForAttribute('access_config') as any;
  }

  // alias_ip_range - computed: true, optional: false, required: false
  public get aliasIpRange() {
    return this.interpolationForAttribute('alias_ip_range') as any;
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

  // subnetwork - computed: true, optional: false, required: false
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }

  // subnetwork_project - computed: true, optional: false, required: false
  public get subnetworkProject() {
    return this.getStringAttribute('subnetwork_project');
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
    return this.getBooleanAttribute('automatic_restart');
  }

  // node_affinities - computed: true, optional: false, required: false
  public get nodeAffinities() {
    return this.interpolationForAttribute('node_affinities') as any;
  }

  // on_host_maintenance - computed: true, optional: false, required: false
  public get onHostMaintenance() {
    return this.getStringAttribute('on_host_maintenance');
  }

  // preemptible - computed: true, optional: false, required: false
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
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
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }

  // enable_secure_boot - computed: true, optional: false, required: false
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }

  // enable_vtpm - computed: true, optional: false, required: false
  public get enableVtpm() {
    return this.getBooleanAttribute('enable_vtpm');
  }
}

// Resource

export class DataGoogleComputeInstanceTemplate extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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

  // can_ip_forward - computed: true, optional: false, required: false
  public get canIpForward() {
    return this.getBooleanAttribute('can_ip_forward');
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
    return this.getBooleanAttribute('enable_display');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string;
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string ) {
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
  private _mostRecent?: boolean;
  public get mostRecent() {
    return this.getBooleanAttribute('most_recent');
  }
  public set mostRecent(value: boolean ) {
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
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
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
  private _project: string;
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
