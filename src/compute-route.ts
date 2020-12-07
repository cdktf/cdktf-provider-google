// https://www.terraform.io/docs/providers/google/r/compute_route.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRouteConfig extends cdktf.TerraformMetaArguments {
  /** An optional description of this resource. Provide this property
when you create the resource. */
  readonly description?: string;
  /** The destination range of outgoing packets that this route applies to.
Only IPv4 is supported. */
  readonly destRange: string;
  /** Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash. */
  readonly name: string;
  /** The network that this route applies to. */
  readonly network: string;
  /** URL to a gateway that should handle matching packets.
Currently, you can only specify the internet gateway, using a full or
partial valid URL:
* 'https://www.googleapis.com/compute/v1/projects/project/global/gateways/default-internet-gateway'
* 'projects/project/global/gateways/default-internet-gateway'
* 'global/gateways/default-internet-gateway'
* The string 'default-internet-gateway'. */
  readonly nextHopGateway?: string;
  /** The URL to a forwarding rule of type loadBalancingScheme=INTERNAL that should handle matching packets.
You can only specify the forwarding rule as a partial or full URL. For example, the following are all valid URLs:
https://www.googleapis.com/compute/v1/projects/project/regions/region/forwardingRules/forwardingRule
regions/region/forwardingRules/forwardingRule
Note that this can only be used when the destinationRange is a public (non-RFC 1918) IP CIDR range. */
  readonly nextHopIlb?: string;
  /** URL to an instance that should handle matching packets.
You can specify this as a full or partial URL. For example:
* 'https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance'
* 'projects/project/zones/zone/instances/instance'
* 'zones/zone/instances/instance'
* Just the instance name, with the zone in 'next_hop_instance_zone'. */
  readonly nextHopInstance?: string;
  readonly nextHopInstanceZone?: string;
  /** Network IP address of an instance that should handle matching packets. */
  readonly nextHopIp?: string;
  /** URL to a VpnTunnel that should handle matching packets. */
  readonly nextHopVpnTunnel?: string;
  /** The priority of this route. Priority is used to break ties in cases
where there is more than one matching route of equal prefix length.

In the case of two routes with equal prefix length, the one with the
lowest-numbered priority value wins.

Default value is 1000. Valid range is 0 through 65535. */
  readonly priority?: number;
  readonly project?: string;
  /** A list of instance tags to which this route applies. */
  readonly tags?: string[];
  /** timeouts block */
  readonly timeouts?: ComputeRouteTimeouts;
}
export interface ComputeRouteTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function computeRouteTimeoutsToTerraform(struct?: ComputeRouteTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class ComputeRoute extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_route',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._destRange = config.destRange;
    this._name = config.name;
    this._network = config.network;
    this._nextHopGateway = config.nextHopGateway;
    this._nextHopIlb = config.nextHopIlb;
    this._nextHopInstance = config.nextHopInstance;
    this._nextHopInstanceZone = config.nextHopInstanceZone;
    this._nextHopIp = config.nextHopIp;
    this._nextHopVpnTunnel = config.nextHopVpnTunnel;
    this._priority = config.priority;
    this._project = config.project;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dest_range - computed: false, optional: false, required: true
  private _destRange: string;
  public get destRange() {
    return this.getStringAttribute('dest_range');
  }
  public set destRange(value: string) {
    this._destRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destRangeInput() {
    return this._destRange
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // next_hop_gateway - computed: false, optional: true, required: false
  private _nextHopGateway?: string;
  public get nextHopGateway() {
    return this.getStringAttribute('next_hop_gateway');
  }
  public set nextHopGateway(value: string ) {
    this._nextHopGateway = value;
  }
  public resetNextHopGateway() {
    this._nextHopGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopGatewayInput() {
    return this._nextHopGateway
  }

  // next_hop_ilb - computed: false, optional: true, required: false
  private _nextHopIlb?: string;
  public get nextHopIlb() {
    return this.getStringAttribute('next_hop_ilb');
  }
  public set nextHopIlb(value: string ) {
    this._nextHopIlb = value;
  }
  public resetNextHopIlb() {
    this._nextHopIlb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopIlbInput() {
    return this._nextHopIlb
  }

  // next_hop_instance - computed: false, optional: true, required: false
  private _nextHopInstance?: string;
  public get nextHopInstance() {
    return this.getStringAttribute('next_hop_instance');
  }
  public set nextHopInstance(value: string ) {
    this._nextHopInstance = value;
  }
  public resetNextHopInstance() {
    this._nextHopInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInstanceInput() {
    return this._nextHopInstance
  }

  // next_hop_instance_zone - computed: false, optional: true, required: false
  private _nextHopInstanceZone?: string;
  public get nextHopInstanceZone() {
    return this.getStringAttribute('next_hop_instance_zone');
  }
  public set nextHopInstanceZone(value: string ) {
    this._nextHopInstanceZone = value;
  }
  public resetNextHopInstanceZone() {
    this._nextHopInstanceZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInstanceZoneInput() {
    return this._nextHopInstanceZone
  }

  // next_hop_ip - computed: true, optional: true, required: false
  private _nextHopIp?: string;
  public get nextHopIp() {
    return this.getStringAttribute('next_hop_ip');
  }
  public set nextHopIp(value: string) {
    this._nextHopIp = value;
  }
  public resetNextHopIp() {
    this._nextHopIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopIpInput() {
    return this._nextHopIp
  }

  // next_hop_network - computed: true, optional: false, required: false
  public get nextHopNetwork() {
    return this.getStringAttribute('next_hop_network');
  }

  // next_hop_vpn_tunnel - computed: false, optional: true, required: false
  private _nextHopVpnTunnel?: string;
  public get nextHopVpnTunnel() {
    return this.getStringAttribute('next_hop_vpn_tunnel');
  }
  public set nextHopVpnTunnel(value: string ) {
    this._nextHopVpnTunnel = value;
  }
  public resetNextHopVpnTunnel() {
    this._nextHopVpnTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopVpnTunnelInput() {
    return this._nextHopVpnTunnel
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number;
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number ) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[];
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeRouteTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeRouteTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      dest_range: cdktf.stringToTerraform(this._destRange),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      next_hop_gateway: cdktf.stringToTerraform(this._nextHopGateway),
      next_hop_ilb: cdktf.stringToTerraform(this._nextHopIlb),
      next_hop_instance: cdktf.stringToTerraform(this._nextHopInstance),
      next_hop_instance_zone: cdktf.stringToTerraform(this._nextHopInstanceZone),
      next_hop_ip: cdktf.stringToTerraform(this._nextHopIp),
      next_hop_vpn_tunnel: cdktf.stringToTerraform(this._nextHopVpnTunnel),
      priority: cdktf.numberToTerraform(this._priority),
      project: cdktf.stringToTerraform(this._project),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: computeRouteTimeoutsToTerraform(this._timeouts),
    };
  }
}
