// https://www.terraform.io/docs/providers/google/r/vpc_access_connector.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcAccessConnectorConfig extends cdktf.TerraformMetaArguments {
  /** The range of internal addresses that follows RFC 4632 notation. Example: '10.132.0.0/28'. */
  readonly ipCidrRange: string;
  /** Maximum throughput of the connector in Mbps, must be greater than 'min_throughput'. Default is 1000. */
  readonly maxThroughput?: number;
  /** Minimum throughput of the connector in Mbps. Default and min is 200. */
  readonly minThroughput?: number;
  /** The name of the resource (Max 25 characters). */
  readonly name: string;
  /** Name of a VPC network. */
  readonly network: string;
  readonly project?: string;
  /** Region where the VPC Access connector resides. If it is not provided, the provider region is used. */
  readonly region?: string;
  /** timeouts block */
  readonly timeouts?: VpcAccessConnectorTimeouts;
}
export interface VpcAccessConnectorTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function vpcAccessConnectorTimeoutsToTerraform(struct?: VpcAccessConnectorTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class VpcAccessConnector extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VpcAccessConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vpc_access_connector',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ipCidrRange = config.ipCidrRange;
    this._maxThroughput = config.maxThroughput;
    this._minThroughput = config.minThroughput;
    this._name = config.name;
    this._network = config.network;
    this._project = config.project;
    this._region = config.region;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_cidr_range - computed: false, optional: false, required: true
  private _ipCidrRange: string;
  public get ipCidrRange() {
    return this.getStringAttribute('ip_cidr_range');
  }
  public set ipCidrRange(value: string) {
    this._ipCidrRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCidrRangeInput() {
    return this._ipCidrRange
  }

  // max_throughput - computed: false, optional: true, required: false
  private _maxThroughput?: number;
  public get maxThroughput() {
    return this.getNumberAttribute('max_throughput');
  }
  public set maxThroughput(value: number ) {
    this._maxThroughput = value;
  }
  public resetMaxThroughput() {
    this._maxThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxThroughputInput() {
    return this._maxThroughput
  }

  // min_throughput - computed: false, optional: true, required: false
  private _minThroughput?: number;
  public get minThroughput() {
    return this.getNumberAttribute('min_throughput');
  }
  public set minThroughput(value: number ) {
    this._minThroughput = value;
  }
  public resetMinThroughput() {
    this._minThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minThroughputInput() {
    return this._minThroughput
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

  // network - computed: false, optional: false, required: true
  private _network: string;
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VpcAccessConnectorTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VpcAccessConnectorTimeouts ) {
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
      ip_cidr_range: cdktf.stringToTerraform(this._ipCidrRange),
      max_throughput: cdktf.numberToTerraform(this._maxThroughput),
      min_throughput: cdktf.numberToTerraform(this._minThroughput),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      timeouts: vpcAccessConnectorTimeoutsToTerraform(this._timeouts),
    };
  }
}
