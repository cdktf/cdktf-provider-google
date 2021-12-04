// https://www.terraform.io/docs/providers/google/r/compute_router.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRouterConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router.html#description ComputeRouter#description}
  */
  readonly description?: string;
  /**
  * Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router.html#name ComputeRouter#name}
  */
  readonly name: string;
  /**
  * A reference to the network to which this router belongs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router.html#network ComputeRouter#network}
  */
  readonly network: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router.html#project ComputeRouter#project}
  */
  readonly project?: string;
  /**
  * Region where the router resides.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router.html#region ComputeRouter#region}
  */
  readonly region?: string;
  /**
  * bgp block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router.html#bgp ComputeRouter#bgp}
  */
  readonly bgp?: ComputeRouterBgp;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router.html#timeouts ComputeRouter#timeouts}
  */
  readonly timeouts?: ComputeRouterTimeouts;
}
export interface ComputeRouterBgpAdvertisedIpRanges {
  /**
  * User-specified description for the IP range.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router.html#description ComputeRouter#description}
  */
  readonly description?: string;
  /**
  * The IP range to advertise. The value must be a
CIDR-formatted string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router.html#range ComputeRouter#range}
  */
  readonly range: string;
}

export function computeRouterBgpAdvertisedIpRangesToTerraform(struct?: ComputeRouterBgpAdvertisedIpRanges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    range: cdktf.stringToTerraform(struct!.range),
  }
}

export interface ComputeRouterBgp {
  /**
  * User-specified flag to indicate which mode to use for advertisement. Default value: "DEFAULT" Possible values: ["DEFAULT", "CUSTOM"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router.html#advertise_mode ComputeRouter#advertise_mode}
  */
  readonly advertiseMode?: string;
  /**
  * User-specified list of prefix groups to advertise in custom mode.
This field can only be populated if advertiseMode is CUSTOM and
is advertised to all peers of the router. These groups will be
advertised in addition to any specified prefixes. Leave this field
blank to advertise no custom groups.

This enum field has the one valid value: ALL_SUBNETS
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router.html#advertised_groups ComputeRouter#advertised_groups}
  */
  readonly advertisedGroups?: string[];
  /**
  * Local BGP Autonomous System Number (ASN). Must be an RFC6996
private ASN, either 16-bit or 32-bit. The value will be fixed for
this router resource. All VPN tunnels that link to this router
will have the same local ASN.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router.html#asn ComputeRouter#asn}
  */
  readonly asn: number;
  /**
  * advertised_ip_ranges block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router.html#advertised_ip_ranges ComputeRouter#advertised_ip_ranges}
  */
  readonly advertisedIpRanges?: ComputeRouterBgpAdvertisedIpRanges[];
}

export function computeRouterBgpToTerraform(struct?: ComputeRouterBgpOutputReference | ComputeRouterBgp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_mode: cdktf.stringToTerraform(struct!.advertiseMode),
    advertised_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.advertisedGroups),
    asn: cdktf.numberToTerraform(struct!.asn),
    advertised_ip_ranges: cdktf.listMapper(computeRouterBgpAdvertisedIpRangesToTerraform)(struct!.advertisedIpRanges),
  }
}

export class ComputeRouterBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeRouterBgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseMode) {
      hasAnyValues = true;
      internalValueResult.advertiseMode = this._advertiseMode;
    }
    if (this._advertisedGroups) {
      hasAnyValues = true;
      internalValueResult.advertisedGroups = this._advertisedGroups;
    }
    if (this._asn) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._advertisedIpRanges) {
      hasAnyValues = true;
      internalValueResult.advertisedIpRanges = this._advertisedIpRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRouterBgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advertiseMode = undefined;
      this._advertisedGroups = undefined;
      this._asn = undefined;
      this._advertisedIpRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advertiseMode = value.advertiseMode;
      this._advertisedGroups = value.advertisedGroups;
      this._asn = value.asn;
      this._advertisedIpRanges = value.advertisedIpRanges;
    }
  }

  // advertise_mode - computed: false, optional: true, required: false
  private _advertiseMode?: string; 
  public get advertiseMode() {
    return this.getStringAttribute('advertise_mode');
  }
  public set advertiseMode(value: string) {
    this._advertiseMode = value;
  }
  public resetAdvertiseMode() {
    this._advertiseMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseModeInput() {
    return this._advertiseMode;
  }

  // advertised_groups - computed: false, optional: true, required: false
  private _advertisedGroups?: string[]; 
  public get advertisedGroups() {
    return this.getListAttribute('advertised_groups');
  }
  public set advertisedGroups(value: string[]) {
    this._advertisedGroups = value;
  }
  public resetAdvertisedGroups() {
    this._advertisedGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedGroupsInput() {
    return this._advertisedGroups;
  }

  // asn - computed: false, optional: false, required: true
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // advertised_ip_ranges - computed: false, optional: true, required: false
  private _advertisedIpRanges?: ComputeRouterBgpAdvertisedIpRanges[]; 
  public get advertisedIpRanges() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('advertised_ip_ranges') as any;
  }
  public set advertisedIpRanges(value: ComputeRouterBgpAdvertisedIpRanges[]) {
    this._advertisedIpRanges = value;
  }
  public resetAdvertisedIpRanges() {
    this._advertisedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedIpRangesInput() {
    return this._advertisedIpRanges;
  }
}
export interface ComputeRouterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router.html#create ComputeRouter#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router.html#delete ComputeRouter#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router.html#update ComputeRouter#update}
  */
  readonly update?: string;
}

export function computeRouterTimeoutsToTerraform(struct?: ComputeRouterTimeoutsOutputReference | ComputeRouterTimeouts): any {
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

export class ComputeRouterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeRouterTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRouterTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_router.html google_compute_router}
*/
export class ComputeRouter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_router";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_router.html google_compute_router} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeRouterConfig
  */
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
    this._bgp.internalValue = config.bgp;
    this._timeouts.internalValue = config.timeouts;
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

  // bgp - computed: false, optional: true, required: false
  private _bgp = new ComputeRouterBgpOutputReference(this as any, "bgp", true);
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: ComputeRouterBgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeRouterTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeRouterTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      bgp: computeRouterBgpToTerraform(this._bgp.internalValue),
      timeouts: computeRouterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
