/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/compute_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * When set to 'true', the network is created in "auto subnet mode" and
  * it will create a subnet for each region automatically across the
  * '10.128.0.0/9' address range.
  * 
  * When set to 'false', the network is created in "custom subnet mode" so
  * the user can explicitly connect subnetwork resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/compute_network#auto_create_subnetworks ComputeNetwork#auto_create_subnetworks}
  */
  readonly autoCreateSubnetworks?: boolean | cdktf.IResolvable;
  /**
  * If set to 'true', default routes ('0.0.0.0/0') will be deleted
  * immediately after network creation. Defaults to 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/compute_network#delete_default_routes_on_create ComputeNetwork#delete_default_routes_on_create}
  */
  readonly deleteDefaultRoutesOnCreate?: boolean | cdktf.IResolvable;
  /**
  * An optional description of this resource. The resource must be
  * recreated to modify this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/compute_network#description ComputeNetwork#description}
  */
  readonly description?: string;
  /**
  * Enable ULA internal ipv6 on this network. Enabling this feature will assign
  * a /48 from google defined ULA prefix fd20::/20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/compute_network#enable_ula_internal_ipv6 ComputeNetwork#enable_ula_internal_ipv6}
  */
  readonly enableUlaInternalIpv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/compute_network#id ComputeNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When enabling ula internal ipv6, caller optionally can specify the /48 range
  * they want from the google defined ULA prefix fd20::/20. The input must be a
  * valid /48 ULA IPv6 address and must be within the fd20::/20. Operation will
  * fail if the speficied /48 is already in used by another resource.
  * If the field is not speficied, then a /48 range will be randomly allocated from fd20::/20 and returned via this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/compute_network#internal_ipv6_range ComputeNetwork#internal_ipv6_range}
  */
  readonly internalIpv6Range?: string;
  /**
  * Maximum Transmission Unit in bytes. The default value is 1460 bytes.
  * The minimum value for this field is 1300 and the maximum value is 8896 bytes (jumbo frames).
  * Note that packets larger than 1500 bytes (standard Ethernet) can be subject to TCP-MSS clamping or dropped
  * with an ICMP 'Fragmentation-Needed' message if the packets are routed to the Internet or other VPCs
  * with varying MTUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/compute_network#mtu ComputeNetwork#mtu}
  */
  readonly mtu?: number;
  /**
  * Name of the resource. Provided by the client when the resource is
  * created. The name must be 1-63 characters long, and comply with
  * RFC1035. Specifically, the name must be 1-63 characters long and match
  * the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
  * first character must be a lowercase letter, and all following
  * characters must be a dash, lowercase letter, or digit, except the last
  * character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/compute_network#name ComputeNetwork#name}
  */
  readonly name: string;
  /**
  * Set the order that Firewall Rules and Firewall Policies are evaluated. Default value: "AFTER_CLASSIC_FIREWALL" Possible values: ["BEFORE_CLASSIC_FIREWALL", "AFTER_CLASSIC_FIREWALL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/compute_network#network_firewall_policy_enforcement_order ComputeNetwork#network_firewall_policy_enforcement_order}
  */
  readonly networkFirewallPolicyEnforcementOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/compute_network#project ComputeNetwork#project}
  */
  readonly project?: string;
  /**
  * The network-wide routing mode to use. If set to 'REGIONAL', this
  * network's cloud routers will only advertise routes with subnetworks
  * of this network in the same region as the router. If set to 'GLOBAL',
  * this network's cloud routers will advertise routes with all
  * subnetworks of this network, across regions. Possible values: ["REGIONAL", "GLOBAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/compute_network#routing_mode ComputeNetwork#routing_mode}
  */
  readonly routingMode?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/compute_network#timeouts ComputeNetwork#timeouts}
  */
  readonly timeouts?: ComputeNetworkTimeouts;
}
export interface ComputeNetworkTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/compute_network#create ComputeNetwork#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/compute_network#delete ComputeNetwork#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/compute_network#update ComputeNetwork#update}
  */
  readonly update?: string;
}

export function computeNetworkTimeoutsToTerraform(struct?: ComputeNetworkTimeouts | cdktf.IResolvable): any {
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


export function computeNetworkTimeoutsToHclTerraform(struct?: ComputeNetworkTimeouts | cdktf.IResolvable): any {
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

export class ComputeNetworkTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeNetworkTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeNetworkTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/compute_network google_compute_network}
*/
export class ComputeNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeNetwork to import
  * @param importFromId The id of the existing ComputeNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/compute_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.35.0/docs/resources/compute_network google_compute_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_network',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.35.0',
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
    this._autoCreateSubnetworks = config.autoCreateSubnetworks;
    this._deleteDefaultRoutesOnCreate = config.deleteDefaultRoutesOnCreate;
    this._description = config.description;
    this._enableUlaInternalIpv6 = config.enableUlaInternalIpv6;
    this._id = config.id;
    this._internalIpv6Range = config.internalIpv6Range;
    this._mtu = config.mtu;
    this._name = config.name;
    this._networkFirewallPolicyEnforcementOrder = config.networkFirewallPolicyEnforcementOrder;
    this._project = config.project;
    this._routingMode = config.routingMode;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_create_subnetworks - computed: false, optional: true, required: false
  private _autoCreateSubnetworks?: boolean | cdktf.IResolvable; 
  public get autoCreateSubnetworks() {
    return this.getBooleanAttribute('auto_create_subnetworks');
  }
  public set autoCreateSubnetworks(value: boolean | cdktf.IResolvable) {
    this._autoCreateSubnetworks = value;
  }
  public resetAutoCreateSubnetworks() {
    this._autoCreateSubnetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateSubnetworksInput() {
    return this._autoCreateSubnetworks;
  }

  // delete_default_routes_on_create - computed: false, optional: true, required: false
  private _deleteDefaultRoutesOnCreate?: boolean | cdktf.IResolvable; 
  public get deleteDefaultRoutesOnCreate() {
    return this.getBooleanAttribute('delete_default_routes_on_create');
  }
  public set deleteDefaultRoutesOnCreate(value: boolean | cdktf.IResolvable) {
    this._deleteDefaultRoutesOnCreate = value;
  }
  public resetDeleteDefaultRoutesOnCreate() {
    this._deleteDefaultRoutesOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDefaultRoutesOnCreateInput() {
    return this._deleteDefaultRoutesOnCreate;
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

  // enable_ula_internal_ipv6 - computed: false, optional: true, required: false
  private _enableUlaInternalIpv6?: boolean | cdktf.IResolvable; 
  public get enableUlaInternalIpv6() {
    return this.getBooleanAttribute('enable_ula_internal_ipv6');
  }
  public set enableUlaInternalIpv6(value: boolean | cdktf.IResolvable) {
    this._enableUlaInternalIpv6 = value;
  }
  public resetEnableUlaInternalIpv6() {
    this._enableUlaInternalIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUlaInternalIpv6Input() {
    return this._enableUlaInternalIpv6;
  }

  // gateway_ipv4 - computed: true, optional: false, required: false
  public get gatewayIpv4() {
    return this.getStringAttribute('gateway_ipv4');
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

  // internal_ipv6_range - computed: true, optional: true, required: false
  private _internalIpv6Range?: string; 
  public get internalIpv6Range() {
    return this.getStringAttribute('internal_ipv6_range');
  }
  public set internalIpv6Range(value: string) {
    this._internalIpv6Range = value;
  }
  public resetInternalIpv6Range() {
    this._internalIpv6Range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpv6RangeInput() {
    return this._internalIpv6Range;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // network_firewall_policy_enforcement_order - computed: false, optional: true, required: false
  private _networkFirewallPolicyEnforcementOrder?: string; 
  public get networkFirewallPolicyEnforcementOrder() {
    return this.getStringAttribute('network_firewall_policy_enforcement_order');
  }
  public set networkFirewallPolicyEnforcementOrder(value: string) {
    this._networkFirewallPolicyEnforcementOrder = value;
  }
  public resetNetworkFirewallPolicyEnforcementOrder() {
    this._networkFirewallPolicyEnforcementOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFirewallPolicyEnforcementOrderInput() {
    return this._networkFirewallPolicyEnforcementOrder;
  }

  // numeric_id - computed: true, optional: false, required: false
  public get numericId() {
    return this.getStringAttribute('numeric_id');
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

  // routing_mode - computed: true, optional: true, required: false
  private _routingMode?: string; 
  public get routingMode() {
    return this.getStringAttribute('routing_mode');
  }
  public set routingMode(value: string) {
    this._routingMode = value;
  }
  public resetRoutingMode() {
    this._routingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingModeInput() {
    return this._routingMode;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeNetworkTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeNetworkTimeouts) {
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
      auto_create_subnetworks: cdktf.booleanToTerraform(this._autoCreateSubnetworks),
      delete_default_routes_on_create: cdktf.booleanToTerraform(this._deleteDefaultRoutesOnCreate),
      description: cdktf.stringToTerraform(this._description),
      enable_ula_internal_ipv6: cdktf.booleanToTerraform(this._enableUlaInternalIpv6),
      id: cdktf.stringToTerraform(this._id),
      internal_ipv6_range: cdktf.stringToTerraform(this._internalIpv6Range),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      network_firewall_policy_enforcement_order: cdktf.stringToTerraform(this._networkFirewallPolicyEnforcementOrder),
      project: cdktf.stringToTerraform(this._project),
      routing_mode: cdktf.stringToTerraform(this._routingMode),
      timeouts: computeNetworkTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_create_subnetworks: {
        value: cdktf.booleanToHclTerraform(this._autoCreateSubnetworks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_default_routes_on_create: {
        value: cdktf.booleanToHclTerraform(this._deleteDefaultRoutesOnCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_ula_internal_ipv6: {
        value: cdktf.booleanToHclTerraform(this._enableUlaInternalIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_ipv6_range: {
        value: cdktf.stringToHclTerraform(this._internalIpv6Range),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_firewall_policy_enforcement_order: {
        value: cdktf.stringToHclTerraform(this._networkFirewallPolicyEnforcementOrder),
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
      routing_mode: {
        value: cdktf.stringToHclTerraform(this._routingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: computeNetworkTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeNetworkTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
