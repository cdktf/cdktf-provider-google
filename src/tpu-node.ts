// https://www.terraform.io/docs/providers/google/r/tpu_node.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TpuNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The type of hardware accelerators associated with this node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tpu_node.html#accelerator_type TpuNode#accelerator_type}
  */
  readonly acceleratorType: string;
  /**
  * The CIDR block that the TPU node will use when selecting an IP
address. This CIDR block must be a /29 block; the Compute Engine
networks API forbids a smaller block, and using a larger block would
be wasteful (a node can only consume one IP address).

Errors will occur if the CIDR block has already been used for a
currently existing TPU node, the CIDR block conflicts with any
subnetworks in the user's provided network, or the provided network
is peered with another network that is using that CIDR block.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tpu_node.html#cidr_block TpuNode#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * The user-supplied description of the TPU. Maximum of 512 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tpu_node.html#description TpuNode#description}
  */
  readonly description?: string;
  /**
  * Resource labels to represent user provided metadata.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tpu_node.html#labels TpuNode#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The immutable name of the TPU.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tpu_node.html#name TpuNode#name}
  */
  readonly name: string;
  /**
  * The name of a network to peer the TPU node to. It must be a
preexisting Compute Engine network inside of the project on which
this API has been activated. If none is provided, "default" will be
used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tpu_node.html#network TpuNode#network}
  */
  readonly network?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tpu_node.html#project TpuNode#project}
  */
  readonly project?: string;
  /**
  * The version of Tensorflow running in the Node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tpu_node.html#tensorflow_version TpuNode#tensorflow_version}
  */
  readonly tensorflowVersion: string;
  /**
  * Whether the VPC peering for the node is set up through Service Networking API.
The VPC Peering should be set up before provisioning the node. If this field is set,
cidr_block field should not be specified. If the network that you want to peer the
TPU Node to is a Shared VPC network, the node must be created with this this field enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tpu_node.html#use_service_networking TpuNode#use_service_networking}
  */
  readonly useServiceNetworking?: boolean | cdktf.IResolvable;
  /**
  * The GCP location for the TPU. If it is not provided, the provider zone is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tpu_node.html#zone TpuNode#zone}
  */
  readonly zone?: string;
  /**
  * scheduling_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tpu_node.html#scheduling_config TpuNode#scheduling_config}
  */
  readonly schedulingConfig?: TpuNodeSchedulingConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tpu_node.html#timeouts TpuNode#timeouts}
  */
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
  /**
  * Defines whether the TPU instance is preemptible.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tpu_node.html#preemptible TpuNode#preemptible}
  */
  readonly preemptible: boolean | cdktf.IResolvable;
}

function tpuNodeSchedulingConfigToTerraform(struct?: TpuNodeSchedulingConfigOutputReference | TpuNodeSchedulingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
  }
}

export class TpuNodeSchedulingConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // preemptible - computed: false, optional: false, required: true
  private _preemptible?: boolean | cdktf.IResolvable; 
  public get preemptible() {
    return this.getBooleanAttribute('preemptible') as any;
  }
  public set preemptible(value: boolean | cdktf.IResolvable) {
    this._preemptible = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInput() {
    return this._preemptible
  }
}
export interface TpuNodeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tpu_node.html#create TpuNode#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tpu_node.html#delete TpuNode#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tpu_node.html#update TpuNode#update}
  */
  readonly update?: string;
}

function tpuNodeTimeoutsToTerraform(struct?: TpuNodeTimeoutsOutputReference | TpuNodeTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class TpuNodeTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/tpu_node.html google_tpu_node}
*/
export class TpuNode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_tpu_node";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/tpu_node.html google_tpu_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TpuNodeConfig
  */
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
  private _acceleratorType?: string; 
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
  private _cidrBlock?: string | undefined; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string | undefined) {
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
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
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
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  private _name?: string; 
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
  private _network?: string | undefined; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string | undefined) {
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
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
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
  private _tensorflowVersion?: string; 
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
  private _useServiceNetworking?: boolean | cdktf.IResolvable | undefined; 
  public get useServiceNetworking() {
    return this.getBooleanAttribute('use_service_networking') as any;
  }
  public set useServiceNetworking(value: boolean | cdktf.IResolvable | undefined) {
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
  private _zone?: string | undefined; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string | undefined) {
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
  private _schedulingConfig?: TpuNodeSchedulingConfig | undefined; 
  private __schedulingConfigOutput = new TpuNodeSchedulingConfigOutputReference(this as any, "scheduling_config", true);
  public get schedulingConfig() {
    return this.__schedulingConfigOutput;
  }
  public putSchedulingConfig(value: TpuNodeSchedulingConfig | undefined) {
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
  private _timeouts?: TpuNodeTimeouts | undefined; 
  private __timeoutsOutput = new TpuNodeTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: TpuNodeTimeouts | undefined) {
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
      scheduling_config: tpuNodeSchedulingConfigToTerraform(this._schedulingConfig),
      timeouts: tpuNodeTimeoutsToTerraform(this._timeouts),
    };
  }
}
