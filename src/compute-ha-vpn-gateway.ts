// https://www.terraform.io/docs/providers/google/r/compute_ha_vpn_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeHaVpnGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_ha_vpn_gateway#description ComputeHaVpnGateway#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_ha_vpn_gateway#id ComputeHaVpnGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_ha_vpn_gateway#name ComputeHaVpnGateway#name}
  */
  readonly name: string;
  /**
  * The network this VPN gateway is accepting traffic for.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_ha_vpn_gateway#network ComputeHaVpnGateway#network}
  */
  readonly network: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_ha_vpn_gateway#project ComputeHaVpnGateway#project}
  */
  readonly project?: string;
  /**
  * The region this gateway should sit in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_ha_vpn_gateway#region ComputeHaVpnGateway#region}
  */
  readonly region?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_ha_vpn_gateway#timeouts ComputeHaVpnGateway#timeouts}
  */
  readonly timeouts?: ComputeHaVpnGatewayTimeouts;
  /**
  * vpn_interfaces block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_ha_vpn_gateway#vpn_interfaces ComputeHaVpnGateway#vpn_interfaces}
  */
  readonly vpnInterfaces?: ComputeHaVpnGatewayVpnInterfaces[] | cdktf.IResolvable;
}
export interface ComputeHaVpnGatewayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_ha_vpn_gateway#create ComputeHaVpnGateway#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_ha_vpn_gateway#delete ComputeHaVpnGateway#delete}
  */
  readonly delete?: string;
}

export function computeHaVpnGatewayTimeoutsToTerraform(struct?: ComputeHaVpnGatewayTimeoutsOutputReference | ComputeHaVpnGatewayTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class ComputeHaVpnGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeHaVpnGatewayTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeHaVpnGatewayTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}
export interface ComputeHaVpnGatewayVpnInterfaces {
  /**
  * The numeric ID of this VPN gateway interface.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_ha_vpn_gateway#id ComputeHaVpnGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * URL of the interconnect attachment resource. When the value
of this field is present, the VPN Gateway will be used for
IPsec-encrypted Cloud Interconnect; all Egress or Ingress
traffic for this VPN Gateway interface will go through the
specified interconnect attachment resource.

Not currently available publicly.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_ha_vpn_gateway#interconnect_attachment ComputeHaVpnGateway#interconnect_attachment}
  */
  readonly interconnectAttachment?: string;
}

export function computeHaVpnGatewayVpnInterfacesToTerraform(struct?: ComputeHaVpnGatewayVpnInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    interconnect_attachment: cdktf.stringToTerraform(struct!.interconnectAttachment),
  }
}

export class ComputeHaVpnGatewayVpnInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeHaVpnGatewayVpnInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._interconnectAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.interconnectAttachment = this._interconnectAttachment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeHaVpnGatewayVpnInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._interconnectAttachment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._interconnectAttachment = value.interconnectAttachment;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // interconnect_attachment - computed: false, optional: true, required: false
  private _interconnectAttachment?: string; 
  public get interconnectAttachment() {
    return this.getStringAttribute('interconnect_attachment');
  }
  public set interconnectAttachment(value: string) {
    this._interconnectAttachment = value;
  }
  public resetInterconnectAttachment() {
    this._interconnectAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interconnectAttachmentInput() {
    return this._interconnectAttachment;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
}

export class ComputeHaVpnGatewayVpnInterfacesList extends cdktf.ComplexList {
  public internalValue? : ComputeHaVpnGatewayVpnInterfaces[] | cdktf.IResolvable

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
  public get(index: number): ComputeHaVpnGatewayVpnInterfacesOutputReference {
    return new ComputeHaVpnGatewayVpnInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_ha_vpn_gateway google_compute_ha_vpn_gateway}
*/
export class ComputeHaVpnGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_ha_vpn_gateway";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_ha_vpn_gateway google_compute_ha_vpn_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeHaVpnGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeHaVpnGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_ha_vpn_gateway',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._network = config.network;
    this._project = config.project;
    this._region = config.region;
    this._timeouts.internalValue = config.timeouts;
    this._vpnInterfaces.internalValue = config.vpnInterfaces;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
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
    return this._region;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeHaVpnGatewayTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeHaVpnGatewayTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpn_interfaces - computed: false, optional: true, required: false
  private _vpnInterfaces = new ComputeHaVpnGatewayVpnInterfacesList(this, "vpn_interfaces", false);
  public get vpnInterfaces() {
    return this._vpnInterfaces;
  }
  public putVpnInterfaces(value: ComputeHaVpnGatewayVpnInterfaces[] | cdktf.IResolvable) {
    this._vpnInterfaces.internalValue = value;
  }
  public resetVpnInterfaces() {
    this._vpnInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInterfacesInput() {
    return this._vpnInterfaces.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      timeouts: computeHaVpnGatewayTimeoutsToTerraform(this._timeouts.internalValue),
      vpn_interfaces: cdktf.listMapper(computeHaVpnGatewayVpnInterfacesToTerraform, true)(this._vpnInterfaces.internalValue),
    };
  }
}
