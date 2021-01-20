// https://www.terraform.io/docs/providers/google/r/tpu_node.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TpuNodeConfig extends cdktf.TerraformMetaArguments {
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
  readonly cidrBlock?: string;
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
  /** Whether the VPC peering for the node is set up through Service Networking API.
The VPC Peering should be set up before provisioning the node. If this field is set,
cidr_block field should not be specified. If the network that you want to peer the
TPU Node to is a Shared VPC network, the node must be created with this this field enabled. */
  readonly useServiceNetworking?: boolean;
  /** The GCP location for the TPU. If it is not provided, the provider zone is used. */
  readonly zone?: string;
  /** scheduling_config block */
  readonly schedulingConfig?: TpuNodeSchedulingConfig[];
  /** timeouts block */
  readonly timeouts?: TpuNodeTimeouts;
}
export class TpuNodeNetworkEndpoints extends cdktf.ComplexComputedList {

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface TpuNodeSchedulingConfig {
  /** Defines whether the TPU instance is preemptible. */
  readonly preemptible: boolean;
}

function tpuNodeSchedulingConfigToTerraform(struct?: TpuNodeSchedulingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
  }
}

export interface TpuNodeTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function tpuNodeTimeoutsToTerraform(struct?: TpuNodeTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class TpuNode extends cdktf.TerraformResource {

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
    this._useServiceNetworking = config.useServiceNetworking;
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
    return this.getStringAttribute('accelerator_type');
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypeInput() {
    return this._acceleratorType
  }

  // cidr_block - computed: true, optional: true, required: false
  private _cidrBlock?: string;
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock
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

  // network - computed: true, optional: true, required: false
  private _network?: string;
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network
  }

  // network_endpoints - computed: true, optional: false, required: false
  public networkEndpoints(index: string) {
    return new TpuNodeNetworkEndpoints(this, 'network_endpoints', index);
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

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }

  // tensorflow_version - computed: false, optional: false, required: true
  private _tensorflowVersion: string;
  public get tensorflowVersion() {
    return this.getStringAttribute('tensorflow_version');
  }
  public set tensorflowVersion(value: string) {
    this._tensorflowVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tensorflowVersionInput() {
    return this._tensorflowVersion
  }

  // use_service_networking - computed: false, optional: true, required: false
  private _useServiceNetworking?: boolean;
  public get useServiceNetworking() {
    return this.getBooleanAttribute('use_service_networking');
  }
  public set useServiceNetworking(value: boolean ) {
    this._useServiceNetworking = value;
  }
  public resetUseServiceNetworking() {
    this._useServiceNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useServiceNetworkingInput() {
    return this._useServiceNetworking
  }

  // zone - computed: true, optional: true, required: false
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
    return this._zone
  }

  // scheduling_config - computed: false, optional: true, required: false
  private _schedulingConfig?: TpuNodeSchedulingConfig[];
  public get schedulingConfig() {
    return this.interpolationForAttribute('scheduling_config') as any;
  }
  public set schedulingConfig(value: TpuNodeSchedulingConfig[] ) {
    this._schedulingConfig = value;
  }
  public resetSchedulingConfig() {
    this._schedulingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingConfigInput() {
    return this._schedulingConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: TpuNodeTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: TpuNodeTimeouts ) {
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
      accelerator_type: cdktf.stringToTerraform(this._acceleratorType),
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      description: cdktf.stringToTerraform(this._description),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      project: cdktf.stringToTerraform(this._project),
      tensorflow_version: cdktf.stringToTerraform(this._tensorflowVersion),
      use_service_networking: cdktf.booleanToTerraform(this._useServiceNetworking),
      zone: cdktf.stringToTerraform(this._zone),
      scheduling_config: cdktf.listMapper(tpuNodeSchedulingConfigToTerraform)(this._schedulingConfig),
      timeouts: tpuNodeTimeoutsToTerraform(this._timeouts),
    };
  }
}
