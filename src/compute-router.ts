// https://www.terraform.io/docs/providers/google/r/compute_router.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRouterConfig extends cdktf.TerraformMetaArguments {
  /** An optional description of this resource. */
  readonly description?: string;
  /** Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash. */
  readonly name: string;
  /** A reference to the network to which this router belongs. */
  readonly network: string;
  readonly project?: string;
  /** Region where the router resides. */
  readonly region?: string;
  /** bgp block */
  readonly bgp?: ComputeRouterBgp[];
  /** timeouts block */
  readonly timeouts?: ComputeRouterTimeouts;
}
export interface ComputeRouterBgpAdvertisedIpRanges {
  /** User-specified description for the IP range. */
  readonly description?: string;
  /** The IP range to advertise. The value must be a
CIDR-formatted string. */
  readonly range: string;
}

function computeRouterBgpAdvertisedIpRangesToTerraform(struct?: ComputeRouterBgpAdvertisedIpRanges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    range: cdktf.stringToTerraform(struct!.range),
  }
}

export interface ComputeRouterBgp {
  /** User-specified flag to indicate which mode to use for advertisement. Default value: "DEFAULT" Possible values: ["DEFAULT", "CUSTOM"] */
  readonly advertiseMode?: string;
  /** User-specified list of prefix groups to advertise in custom mode.
This field can only be populated if advertiseMode is CUSTOM and
is advertised to all peers of the router. These groups will be
advertised in addition to any specified prefixes. Leave this field
blank to advertise no custom groups.

This enum field has the one valid value: ALL_SUBNETS */
  readonly advertisedGroups?: string[];
  /** Local BGP Autonomous System Number (ASN). Must be an RFC6996
private ASN, either 16-bit or 32-bit. The value will be fixed for
this router resource. All VPN tunnels that link to this router
will have the same local ASN. */
  readonly asn: number;
  /** advertised_ip_ranges block */
  readonly advertisedIpRanges?: ComputeRouterBgpAdvertisedIpRanges[];
}

function computeRouterBgpToTerraform(struct?: ComputeRouterBgp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    advertise_mode: cdktf.stringToTerraform(struct!.advertiseMode),
    advertised_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.advertisedGroups),
    asn: cdktf.numberToTerraform(struct!.asn),
    advertised_ip_ranges: cdktf.listMapper(computeRouterBgpAdvertisedIpRangesToTerraform)(struct!.advertisedIpRanges),
  }
}

export interface ComputeRouterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function computeRouterTimeoutsToTerraform(struct?: ComputeRouterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ComputeRouter extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeRouterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_router',
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
    this._bgp = config.bgp;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
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
    return this._region
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp?: ComputeRouterBgp[];
  public get bgp() {
    return this.interpolationForAttribute('bgp') as any;
  }
  public set bgp(value: ComputeRouterBgp[] ) {
    this._bgp = value;
  }
  public resetBgp() {
    this._bgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeRouterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeRouterTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      bgp: cdktf.listMapper(computeRouterBgpToTerraform)(this._bgp),
      timeouts: computeRouterTimeoutsToTerraform(this._timeouts),
    };
  }
}
