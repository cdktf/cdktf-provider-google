// https://www.terraform.io/docs/providers/google/r/vpc_access_connector.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VpcAccessConnectorConfig extends TerraformMetaArguments {
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
  /** Region where the VPC Access connector resides */
  readonly region: string;
  /** timeouts block */
  readonly timeouts?: VpcAccessConnectorTimeouts;
}
export interface VpcAccessConnectorTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class VpcAccessConnector extends TerraformResource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_cidr_range - computed: false, optional: false, required: true
  private _ipCidrRange: string;
  public get ipCidrRange() {
    return this._ipCidrRange;
  }
  public set ipCidrRange(value: string) {
    this._ipCidrRange = value;
  }

  // max_throughput - computed: false, optional: true, required: false
  private _maxThroughput?: number;
  public get maxThroughput() {
    return this._maxThroughput;
  }
  public set maxThroughput(value: number | undefined) {
    this._maxThroughput = value;
  }

  // min_throughput - computed: false, optional: true, required: false
  private _minThroughput?: number;
  public get minThroughput() {
    return this._minThroughput;
  }
  public set minThroughput(value: number | undefined) {
    this._minThroughput = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // network - computed: false, optional: false, required: true
  private _network: string;
  public get network() {
    return this._network;
  }
  public set network(value: string) {
    this._network = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // region - computed: false, optional: false, required: true
  private _region: string;
  public get region() {
    return this._region;
  }
  public set region(value: string) {
    this._region = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VpcAccessConnectorTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: VpcAccessConnectorTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      ip_cidr_range: this._ipCidrRange,
      max_throughput: this._maxThroughput,
      min_throughput: this._minThroughput,
      name: this._name,
      network: this._network,
      project: this._project,
      region: this._region,
      timeouts: this._timeouts,
    };
  }
}
