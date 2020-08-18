// https://www.terraform.io/docs/providers/google/r/tpu_node.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface TpuNodeConfig extends TerraformMetaArguments {
  /** The type of hardware accelerators associated with this node. */
  readonly acceleratorType: string;
  /** The CIDR block that the TPU node will use when selecting an IP
address. This CIDR block must be a /29 block; the Compute Engine
networks API forbids a smaller block, and using a larger block would
be wasteful (a node can only consume one IP address).

Errors will occur if the CIDR block has already been used for a
currently existing TPU node, the CIDR block conflicts with any
subnetworks in the user's provided network, or the provided network
is peered with another network that is using that CIDR block. */
  readonly cidrBlock: string;
  /** The user-supplied description of the TPU. Maximum of 512 characters. */
  readonly description?: string;
  /** Resource labels to represent user provided metadata. */
  readonly labels?: { [key: string]: string };
  /** The immutable name of the TPU. */
  readonly name: string;
  /** The name of a network to peer the TPU node to. It must be a
preexisting Compute Engine network inside of the project on which
this API has been activated. If none is provided, "default" will be
used. */
  readonly network?: string;
  readonly project?: string;
  /** The version of Tensorflow running in the Node. */
  readonly tensorflowVersion: string;
  /** The GCP location for the TPU. */
  readonly zone: string;
  /** scheduling_config block */
  readonly schedulingConfig?: TpuNodeSchedulingConfig[];
  /** timeouts block */
  readonly timeouts?: TpuNodeTimeouts;
}
export class TpuNodeNetworkEndpoints extends ComplexComputedList {

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface TpuNodeSchedulingConfig {
  /** Defines whether the TPU instance is preemptible. */
  readonly preemptible: boolean;
}
export interface TpuNodeTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class TpuNode extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: TpuNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'google_tpu_node',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._acceleratorType = config.acceleratorType;
    this._cidrBlock = config.cidrBlock;
    this._description = config.description;
    this._labels = config.labels;
    this._name = config.name;
    this._network = config.network;
    this._project = config.project;
    this._tensorflowVersion = config.tensorflowVersion;
    this._zone = config.zone;
    this._schedulingConfig = config.schedulingConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerator_type - computed: false, optional: false, required: true
  private _acceleratorType: string;
  public get acceleratorType() {
    return this._acceleratorType;
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }

  // cidr_block - computed: false, optional: false, required: true
  private _cidrBlock: string;
  public get cidrBlock() {
    return this._cidrBlock;
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // network - computed: true, optional: true, required: false
  private _network?: string;
  public get network() {
    return this._network ?? this.getStringAttribute('network');
  }
  public set network(value: string | undefined) {
    this._network = value;
  }

  // network_endpoints - computed: true, optional: false, required: true
  public networkEndpoints(index: string) {
    return new TpuNodeNetworkEndpoints(this, 'network_endpoints', index);
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // service_account - computed: true, optional: false, required: true
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }

  // tensorflow_version - computed: false, optional: false, required: true
  private _tensorflowVersion: string;
  public get tensorflowVersion() {
    return this._tensorflowVersion;
  }
  public set tensorflowVersion(value: string) {
    this._tensorflowVersion = value;
  }

  // zone - computed: false, optional: false, required: true
  private _zone: string;
  public get zone() {
    return this._zone;
  }
  public set zone(value: string) {
    this._zone = value;
  }

  // scheduling_config - computed: false, optional: true, required: false
  private _schedulingConfig?: TpuNodeSchedulingConfig[];
  public get schedulingConfig() {
    return this._schedulingConfig;
  }
  public set schedulingConfig(value: TpuNodeSchedulingConfig[] | undefined) {
    this._schedulingConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: TpuNodeTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: TpuNodeTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      accelerator_type: this._acceleratorType,
      cidr_block: this._cidrBlock,
      description: this._description,
      labels: this._labels,
      name: this._name,
      network: this._network,
      project: this._project,
      tensorflow_version: this._tensorflowVersion,
      zone: this._zone,
      scheduling_config: this._schedulingConfig,
      timeouts: this._timeouts,
    };
  }
}
