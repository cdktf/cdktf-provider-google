// https://www.terraform.io/docs/providers/google/r/compute_route.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of this resource. Provide this property
when you create the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route.html#description ComputeRoute#description}
  */
  readonly description?: string;
  /**
  * The destination range of outgoing packets that this route applies to.
Only IPv4 is supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route.html#dest_range ComputeRoute#dest_range}
  */
  readonly destRange: string;
  /**
  * Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route.html#name ComputeRoute#name}
  */
  readonly name: string;
  /**
  * The network that this route applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route.html#network ComputeRoute#network}
  */
  readonly network: string;
  /**
  * URL to a gateway that should handle matching packets.
Currently, you can only specify the internet gateway, using a full or
partial valid URL:
* 'https://www.googleapis.com/compute/v1/projects/project/global/gateways/default-internet-gateway'
* 'projects/project/global/gateways/default-internet-gateway'
* 'global/gateways/default-internet-gateway'
* The string 'default-internet-gateway'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route.html#next_hop_gateway ComputeRoute#next_hop_gateway}
  */
  readonly nextHopGateway?: string;
  /**
  * The IP address or URL to a forwarding rule of type
loadBalancingScheme=INTERNAL that should handle matching
packets.

With the GA provider you can only specify the forwarding
rule as a partial or full URL. For example, the following
are all valid values:
* 10.128.0.56
* https://www.googleapis.com/compute/v1/projects/project/regions/region/forwardingRules/forwardingRule
* regions/region/forwardingRules/forwardingRule

When the beta provider, you can also specify the IP address
of a forwarding rule from the same VPC or any peered VPC.

Note that this can only be used when the destinationRange is
a public (non-RFC 1918) IP CIDR range.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route.html#next_hop_ilb ComputeRoute#next_hop_ilb}
  */
  readonly nextHopIlb?: string;
  /**
  * URL to an instance that should handle matching packets.
You can specify this as a full or partial URL. For example:
* 'https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance'
* 'projects/project/zones/zone/instances/instance'
* 'zones/zone/instances/instance'
* Just the instance name, with the zone in 'next_hop_instance_zone'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route.html#next_hop_instance ComputeRoute#next_hop_instance}
  */
  readonly nextHopInstance?: string;
  /**
  * The zone of the instance specified in next_hop_instance. Omit if next_hop_instance is specified as a URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route.html#next_hop_instance_zone ComputeRoute#next_hop_instance_zone}
  */
  readonly nextHopInstanceZone?: string;
  /**
  * Network IP address of an instance that should handle matching packets.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route.html#next_hop_ip ComputeRoute#next_hop_ip}
  */
  readonly nextHopIp?: string;
  /**
  * URL to a VpnTunnel that should handle matching packets.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route.html#next_hop_vpn_tunnel ComputeRoute#next_hop_vpn_tunnel}
  */
  readonly nextHopVpnTunnel?: string;
  /**
  * The priority of this route. Priority is used to break ties in cases
where there is more than one matching route of equal prefix length.

In the case of two routes with equal prefix length, the one with the
lowest-numbered priority value wins.

Default value is 1000. Valid range is 0 through 65535.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route.html#priority ComputeRoute#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route.html#project ComputeRoute#project}
  */
  readonly project?: string;
  /**
  * A list of instance tags to which this route applies.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route.html#tags ComputeRoute#tags}
  */
  readonly tags?: string[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route.html#timeouts ComputeRoute#timeouts}
  */
  readonly timeouts?: ComputeRouteTimeouts;
}
export interface ComputeRouteTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route.html#create ComputeRoute#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route.html#delete ComputeRoute#delete}
  */
  readonly delete?: string;
}

function computeRouteTimeoutsToTerraform(struct?: ComputeRouteTimeoutsOutputReference | ComputeRouteTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class ComputeRouteTimeoutsOutputReference extends cdktf.ComplexObject {
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_route.html google_compute_route}
*/
export class ComputeRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_route";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_route.html google_compute_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeRouteConfig
  */
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

  // dest_range - computed: false, optional: false, required: true
  private _destRange?: string; 
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
    return this._network
  }

  // next_hop_gateway - computed: false, optional: true, required: false
  private _nextHopGateway?: string | undefined; 
  public get nextHopGateway() {
    return this.getStringAttribute('next_hop_gateway');
  }
  public set nextHopGateway(value: string | undefined) {
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
  private _nextHopIlb?: string | undefined; 
  public get nextHopIlb() {
    return this.getStringAttribute('next_hop_ilb');
  }
  public set nextHopIlb(value: string | undefined) {
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
  private _nextHopInstance?: string | undefined; 
  public get nextHopInstance() {
    return this.getStringAttribute('next_hop_instance');
  }
  public set nextHopInstance(value: string | undefined) {
    this._nextHopInstance = value;
  }
  public resetNextHopInstance() {
    this._nextHopInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInstanceInput() {
    return this._nextHopInstance
  }

  // next_hop_instance_zone - computed: true, optional: true, required: false
  private _nextHopInstanceZone?: string | undefined; 
  public get nextHopInstanceZone() {
    return this.getStringAttribute('next_hop_instance_zone');
  }
  public set nextHopInstanceZone(value: string | undefined) {
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
  private _nextHopIp?: string | undefined; 
  public get nextHopIp() {
    return this.getStringAttribute('next_hop_ip');
  }
  public set nextHopIp(value: string | undefined) {
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
  private _nextHopVpnTunnel?: string | undefined; 
  public get nextHopVpnTunnel() {
    return this.getStringAttribute('next_hop_vpn_tunnel');
  }
  public set nextHopVpnTunnel(value: string | undefined) {
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
  private _priority?: number | undefined; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number | undefined) {
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[] | undefined; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[] | undefined) {
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
  private _timeouts?: ComputeRouteTimeouts | undefined; 
  private __timeoutsOutput = new ComputeRouteTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ComputeRouteTimeouts | undefined) {
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
