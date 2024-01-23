// https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_router_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRouterInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_router_interface#id ComputeRouterInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name or resource link to the VLAN interconnect for this interface. Changing this forces a new interface to be created. Only one of interconnect_attachment, subnetwork or vpn_tunnel can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_router_interface#interconnect_attachment ComputeRouterInterface#interconnect_attachment}
  */
  readonly interconnectAttachment?: string;
  /**
  * The IP address and range of the interface. The IP range must be in the RFC3927 link-local IP space. Changing this forces a new interface to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_router_interface#ip_range ComputeRouterInterface#ip_range}
  */
  readonly ipRange?: string;
  /**
  * A unique name for the interface, required by GCE. Changing this forces a new interface to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_router_interface#name ComputeRouterInterface#name}
  */
  readonly name: string;
  /**
  * The regional private internal IP address that is used to establish BGP sessions to a VM instance acting as a third-party Router Appliance. Changing this forces a new interface to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_router_interface#private_ip_address ComputeRouterInterface#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * The ID of the project in which this interface's router belongs. If it is not provided, the provider project is used. Changing this forces a new interface to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_router_interface#project ComputeRouterInterface#project}
  */
  readonly project?: string;
  /**
  * The name of the interface that is redundant to this interface. Changing this forces a new interface to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_router_interface#redundant_interface ComputeRouterInterface#redundant_interface}
  */
  readonly redundantInterface?: string;
  /**
  * The region this interface's router sits in. If not specified, the project region will be used. Changing this forces a new interface to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_router_interface#region ComputeRouterInterface#region}
  */
  readonly region?: string;
  /**
  * The name of the router this interface will be attached to. Changing this forces a new interface to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_router_interface#router ComputeRouterInterface#router}
  */
  readonly router: string;
  /**
  * The URI of the subnetwork resource that this interface belongs to, which must be in the same region as the Cloud Router. Changing this forces a new interface to be created. Only one of subnetwork, interconnect_attachment or vpn_tunnel can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_router_interface#subnetwork ComputeRouterInterface#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * The name or resource link to the VPN tunnel this interface will be linked to. Changing this forces a new interface to be created. Only one of vpn_tunnel, interconnect_attachment or subnetwork can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_router_interface#vpn_tunnel ComputeRouterInterface#vpn_tunnel}
  */
  readonly vpnTunnel?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_router_interface#timeouts ComputeRouterInterface#timeouts}
  */
  readonly timeouts?: ComputeRouterInterfaceTimeouts;
}
export interface ComputeRouterInterfaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_router_interface#create ComputeRouterInterface#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_router_interface#delete ComputeRouterInterface#delete}
  */
  readonly delete?: string;
}

export function computeRouterInterfaceTimeoutsToTerraform(struct?: ComputeRouterInterfaceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function computeRouterInterfaceTimeoutsToHclTerraform(struct?: ComputeRouterInterfaceTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRouterInterfaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeRouterInterfaceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeRouterInterfaceTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_router_interface google_compute_router_interface}
*/
export class ComputeRouterInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_router_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeRouterInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeRouterInterface to import
  * @param importFromId The id of the existing ComputeRouterInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_router_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeRouterInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_router_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_router_interface google_compute_router_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeRouterInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeRouterInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_router_interface',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.13.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._interconnectAttachment = config.interconnectAttachment;
    this._ipRange = config.ipRange;
    this._name = config.name;
    this._privateIpAddress = config.privateIpAddress;
    this._project = config.project;
    this._redundantInterface = config.redundantInterface;
    this._region = config.region;
    this._router = config.router;
    this._subnetwork = config.subnetwork;
    this._vpnTunnel = config.vpnTunnel;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ip_range - computed: true, optional: true, required: false
  private _ipRange?: string; 
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }
  public set ipRange(value: string) {
    this._ipRange = value;
  }
  public resetIpRange() {
    this._ipRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange;
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

  // private_ip_address - computed: false, optional: true, required: false
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
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

  // redundant_interface - computed: true, optional: true, required: false
  private _redundantInterface?: string; 
  public get redundantInterface() {
    return this.getStringAttribute('redundant_interface');
  }
  public set redundantInterface(value: string) {
    this._redundantInterface = value;
  }
  public resetRedundantInterface() {
    this._redundantInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundantInterfaceInput() {
    return this._redundantInterface;
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

  // router - computed: false, optional: false, required: true
  private _router?: string; 
  public get router() {
    return this.getStringAttribute('router');
  }
  public set router(value: string) {
    this._router = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router;
  }

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }

  // vpn_tunnel - computed: false, optional: true, required: false
  private _vpnTunnel?: string; 
  public get vpnTunnel() {
    return this.getStringAttribute('vpn_tunnel');
  }
  public set vpnTunnel(value: string) {
    this._vpnTunnel = value;
  }
  public resetVpnTunnel() {
    this._vpnTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnTunnelInput() {
    return this._vpnTunnel;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeRouterInterfaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeRouterInterfaceTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      interconnect_attachment: cdktf.stringToTerraform(this._interconnectAttachment),
      ip_range: cdktf.stringToTerraform(this._ipRange),
      name: cdktf.stringToTerraform(this._name),
      private_ip_address: cdktf.stringToTerraform(this._privateIpAddress),
      project: cdktf.stringToTerraform(this._project),
      redundant_interface: cdktf.stringToTerraform(this._redundantInterface),
      region: cdktf.stringToTerraform(this._region),
      router: cdktf.stringToTerraform(this._router),
      subnetwork: cdktf.stringToTerraform(this._subnetwork),
      vpn_tunnel: cdktf.stringToTerraform(this._vpnTunnel),
      timeouts: computeRouterInterfaceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interconnect_attachment: {
        value: cdktf.stringToHclTerraform(this._interconnectAttachment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_range: {
        value: cdktf.stringToHclTerraform(this._ipRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ip_address: {
        value: cdktf.stringToHclTerraform(this._privateIpAddress),
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
      redundant_interface: {
        value: cdktf.stringToHclTerraform(this._redundantInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router: {
        value: cdktf.stringToHclTerraform(this._router),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnetwork: {
        value: cdktf.stringToHclTerraform(this._subnetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_tunnel: {
        value: cdktf.stringToHclTerraform(this._vpnTunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: computeRouterInterfaceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeRouterInterfaceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
