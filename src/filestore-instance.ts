// https://www.terraform.io/docs/providers/google/r/filestore_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FilestoreInstanceConfig extends cdktf.TerraformMetaArguments {
  /** A description of the instance. */
  readonly description?: string;
  /** Resource labels to represent user-provided metadata. */
  readonly labels?: { [key: string]: string };
  /** The resource name of the instance. */
  readonly name: string;
  readonly project?: string;
  /** The service tier of the instance. Possible values: ["TIER_UNSPECIFIED", "STANDARD", "PREMIUM", "BASIC_HDD", "BASIC_SSD", "HIGH_SCALE_SSD"] */
  readonly tier: string;
  /** The name of the Filestore zone of the instance. */
  readonly zone: string;
  /** file_shares block */
  readonly fileShares: FilestoreInstanceFileShares[];
  /** networks block */
  readonly networks: FilestoreInstanceNetworks[];
  /** timeouts block */
  readonly timeouts?: FilestoreInstanceTimeouts;
}
export interface FilestoreInstanceFileShares {
  /** File share capacity in GiB. This must be at least 1024 GiB
for the standard tier, or 2560 GiB for the premium tier. */
  readonly capacityGb: number;
  /** The name of the fileshare (16 characters or less) */
  readonly name: string;
}

function filestoreInstanceFileSharesToTerraform(struct?: FilestoreInstanceFileShares): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capacity_gb: cdktf.numberToTerraform(struct!.capacityGb),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface FilestoreInstanceNetworks {
  /** IP versions for which the instance has
IP addresses assigned. Possible values: ["ADDRESS_MODE_UNSPECIFIED", "MODE_IPV4", "MODE_IPV6"] */
  readonly modes: string[];
  /** The name of the GCE VPC network to which the
instance is connected. */
  readonly network: string;
  /** A /29 CIDR block that identifies the range of IP
addresses reserved for this instance. */
  readonly reservedIpRange?: string;
}

function filestoreInstanceNetworksToTerraform(struct?: FilestoreInstanceNetworks): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    modes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.modes),
    network: cdktf.stringToTerraform(struct!.network),
    reserved_ip_range: cdktf.stringToTerraform(struct!.reservedIpRange),
  }
}

export interface FilestoreInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function filestoreInstanceTimeoutsToTerraform(struct?: FilestoreInstanceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class FilestoreInstance extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: FilestoreInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_filestore_instance',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._tier = config.tier;
    this._zone = config.zone;
    this._fileShares = config.fileShares;
    this._networks = config.networks;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // tier - computed: false, optional: false, required: true
  private _tier: string;
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier
  }

  // zone - computed: false, optional: false, required: true
  private _zone: string;
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone
  }

  // file_shares - computed: false, optional: false, required: true
  private _fileShares: FilestoreInstanceFileShares[];
  public get fileShares() {
    return this.interpolationForAttribute('file_shares') as any;
  }
  public set fileShares(value: FilestoreInstanceFileShares[]) {
    this._fileShares = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSharesInput() {
    return this._fileShares
  }

  // networks - computed: false, optional: false, required: true
  private _networks: FilestoreInstanceNetworks[];
  public get networks() {
    return this.interpolationForAttribute('networks') as any;
  }
  public set networks(value: FilestoreInstanceNetworks[]) {
    this._networks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FilestoreInstanceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: FilestoreInstanceTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      tier: cdktf.stringToTerraform(this._tier),
      zone: cdktf.stringToTerraform(this._zone),
      file_shares: cdktf.listMapper(filestoreInstanceFileSharesToTerraform)(this._fileShares),
      networks: cdktf.listMapper(filestoreInstanceNetworksToTerraform)(this._networks),
      timeouts: filestoreInstanceTimeoutsToTerraform(this._timeouts),
    };
  }
}
