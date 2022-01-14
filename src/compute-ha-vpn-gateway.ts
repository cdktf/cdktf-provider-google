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
  readonly vpnInterfaces?: ComputeHaVpnGatewayVpnInterfaces[];
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

export function computeHaVpnGatewayTimeoutsToTerraform(struct?: ComputeHaVpnGatewayTimeoutsOutputReference | ComputeHaVpnGatewayTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeHaVpnGatewayTimeouts | undefined {
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

  public set internalValue(value: ComputeHaVpnGatewayTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

export function computeHaVpnGatewayVpnInterfacesToTerraform(struct?: ComputeHaVpnGatewayVpnInterfaces): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    interconnect_attachment: cdktf.stringToTerraform(struct!.interconnectAttachment),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_ha_vpn_gateway google_compute_ha_vpn_gateway}
*/
export class ComputeHaVpnGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_ha_vpn_gateway";

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
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._network = config.network;
    this._project = config.project;
    this._region = config.region;
    this._timeouts.internalValue = config.timeouts;
    this._vpnInterfaces = config.vpnInterfaces;
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
  public get id() {
    return this.getStringAttribute('id');
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
  private _timeouts = new ComputeHaVpnGatewayTimeoutsOutputReference(this as any, "timeouts", true);
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
  private _vpnInterfaces?: ComputeHaVpnGatewayVpnInterfaces[]; 
  public get vpnInterfaces() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('vpn_interfaces') as any;
  }
  public set vpnInterfaces(value: ComputeHaVpnGatewayVpnInterfaces[]) {
    this._vpnInterfaces = value;
  }
  public resetVpnInterfaces() {
    this._vpnInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInterfacesInput() {
    return this._vpnInterfaces;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      timeouts: computeHaVpnGatewayTimeoutsToTerraform(this._timeouts.internalValue),
      vpn_interfaces: cdktf.listMapper(computeHaVpnGatewayVpnInterfacesToTerraform)(this._vpnInterfaces),
    };
  }
}
