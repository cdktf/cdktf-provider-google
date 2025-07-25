/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tpu_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TpuNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The type of hardware accelerators associated with this node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tpu_node#accelerator_type TpuNode#accelerator_type}
  */
  readonly acceleratorType: string;
  /**
  * The CIDR block that the TPU node will use when selecting an IP
  * address. This CIDR block must be a /29 block; the Compute Engine
  * networks API forbids a smaller block, and using a larger block would
  * be wasteful (a node can only consume one IP address).
  * 
  * Errors will occur if the CIDR block has already been used for a
  * currently existing TPU node, the CIDR block conflicts with any
  * subnetworks in the user's provided network, or the provided network
  * is peered with another network that is using that CIDR block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tpu_node#cidr_block TpuNode#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * The user-supplied description of the TPU. Maximum of 512 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tpu_node#description TpuNode#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tpu_node#id TpuNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource labels to represent user provided metadata.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tpu_node#labels TpuNode#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The immutable name of the TPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tpu_node#name TpuNode#name}
  */
  readonly name: string;
  /**
  * The name of a network to peer the TPU node to. It must be a
  * preexisting Compute Engine network inside of the project on which
  * this API has been activated. If none is provided, "default" will be
  * used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tpu_node#network TpuNode#network}
  */
  readonly network?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tpu_node#project TpuNode#project}
  */
  readonly project?: string;
  /**
  * The version of Tensorflow running in the Node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tpu_node#tensorflow_version TpuNode#tensorflow_version}
  */
  readonly tensorflowVersion: string;
  /**
  * Whether the VPC peering for the node is set up through Service Networking API.
  * The VPC Peering should be set up before provisioning the node. If this field is set,
  * cidr_block field should not be specified. If the network that you want to peer the
  * TPU Node to is a Shared VPC network, the node must be created with this this field enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tpu_node#use_service_networking TpuNode#use_service_networking}
  */
  readonly useServiceNetworking?: boolean | cdktf.IResolvable;
  /**
  * The GCP location for the TPU. If it is not provided, the provider zone is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tpu_node#zone TpuNode#zone}
  */
  readonly zone?: string;
  /**
  * scheduling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tpu_node#scheduling_config TpuNode#scheduling_config}
  */
  readonly schedulingConfig?: TpuNodeSchedulingConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tpu_node#timeouts TpuNode#timeouts}
  */
  readonly timeouts?: TpuNodeTimeouts;
}
export interface TpuNodeNetworkEndpoints {
}

export function tpuNodeNetworkEndpointsToTerraform(struct?: TpuNodeNetworkEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function tpuNodeNetworkEndpointsToHclTerraform(struct?: TpuNodeNetworkEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TpuNodeNetworkEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TpuNodeNetworkEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TpuNodeNetworkEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class TpuNodeNetworkEndpointsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TpuNodeNetworkEndpointsOutputReference {
    return new TpuNodeNetworkEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TpuNodeSchedulingConfig {
  /**
  * Defines whether the TPU instance is preemptible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tpu_node#preemptible TpuNode#preemptible}
  */
  readonly preemptible: boolean | cdktf.IResolvable;
}

export function tpuNodeSchedulingConfigToTerraform(struct?: TpuNodeSchedulingConfigOutputReference | TpuNodeSchedulingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
  }
}


export function tpuNodeSchedulingConfigToHclTerraform(struct?: TpuNodeSchedulingConfigOutputReference | TpuNodeSchedulingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preemptible: {
      value: cdktf.booleanToHclTerraform(struct!.preemptible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TpuNodeSchedulingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TpuNodeSchedulingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preemptible !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TpuNodeSchedulingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preemptible = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preemptible = value.preemptible;
    }
  }

  // preemptible - computed: false, optional: false, required: true
  private _preemptible?: boolean | cdktf.IResolvable; 
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }
  public set preemptible(value: boolean | cdktf.IResolvable) {
    this._preemptible = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInput() {
    return this._preemptible;
  }
}
export interface TpuNodeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tpu_node#create TpuNode#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tpu_node#delete TpuNode#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tpu_node#update TpuNode#update}
  */
  readonly update?: string;
}

export function tpuNodeTimeoutsToTerraform(struct?: TpuNodeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function tpuNodeTimeoutsToHclTerraform(struct?: TpuNodeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TpuNodeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TpuNodeTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TpuNodeTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tpu_node google_tpu_node}
*/
export class TpuNode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_tpu_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TpuNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TpuNode to import
  * @param importFromId The id of the existing TpuNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tpu_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TpuNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_tpu_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tpu_node google_tpu_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TpuNodeConfig
  */
  public constructor(scope: Construct, id: string, config: TpuNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'google_tpu_node',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.45.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceleratorType = config.acceleratorType;
    this._cidrBlock = config.cidrBlock;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._network = config.network;
    this._project = config.project;
    this._tensorflowVersion = config.tensorflowVersion;
    this._useServiceNetworking = config.useServiceNetworking;
    this._zone = config.zone;
    this._schedulingConfig.internalValue = config.schedulingConfig;
    this._timeouts.internalValue = config.timeouts;
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
    return this._acceleratorType;
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
    return this._cidrBlock;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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
    return this._name;
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
    return this._network;
  }

  // network_endpoints - computed: true, optional: false, required: false
  private _networkEndpoints = new TpuNodeNetworkEndpointsList(this, "network_endpoints", false);
  public get networkEndpoints() {
    return this._networkEndpoints;
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
    return this._project;
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
    return this._tensorflowVersion;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // use_service_networking - computed: false, optional: true, required: false
  private _useServiceNetworking?: boolean | cdktf.IResolvable; 
  public get useServiceNetworking() {
    return this.getBooleanAttribute('use_service_networking');
  }
  public set useServiceNetworking(value: boolean | cdktf.IResolvable) {
    this._useServiceNetworking = value;
  }
  public resetUseServiceNetworking() {
    this._useServiceNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useServiceNetworkingInput() {
    return this._useServiceNetworking;
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
    return this._zone;
  }

  // scheduling_config - computed: false, optional: true, required: false
  private _schedulingConfig = new TpuNodeSchedulingConfigOutputReference(this, "scheduling_config");
  public get schedulingConfig() {
    return this._schedulingConfig;
  }
  public putSchedulingConfig(value: TpuNodeSchedulingConfig) {
    this._schedulingConfig.internalValue = value;
  }
  public resetSchedulingConfig() {
    this._schedulingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingConfigInput() {
    return this._schedulingConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TpuNodeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TpuNodeTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accelerator_type: cdktf.stringToTerraform(this._acceleratorType),
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      project: cdktf.stringToTerraform(this._project),
      tensorflow_version: cdktf.stringToTerraform(this._tensorflowVersion),
      use_service_networking: cdktf.booleanToTerraform(this._useServiceNetworking),
      zone: cdktf.stringToTerraform(this._zone),
      scheduling_config: tpuNodeSchedulingConfigToTerraform(this._schedulingConfig.internalValue),
      timeouts: tpuNodeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accelerator_type: {
        value: cdktf.stringToHclTerraform(this._acceleratorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr_block: {
        value: cdktf.stringToHclTerraform(this._cidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tensorflow_version: {
        value: cdktf.stringToHclTerraform(this._tensorflowVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_service_networking: {
        value: cdktf.booleanToHclTerraform(this._useServiceNetworking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduling_config: {
        value: tpuNodeSchedulingConfigToHclTerraform(this._schedulingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TpuNodeSchedulingConfigList",
      },
      timeouts: {
        value: tpuNodeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TpuNodeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
