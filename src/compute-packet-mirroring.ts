// https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputePacketMirroringConfig extends cdktf.TerraformMetaArguments {
  /** A human-readable description of the rule. */
  readonly description?: string;
  /** The name of the packet mirroring rule */
  readonly name: string;
  /** Since only one rule can be active at a time, priority is
used to break ties in the case of two rules that apply to
the same instances. */
  readonly priority?: number;
  readonly project?: string;
  /** The Region in which the created address should reside.
If it is not provided, the provider region is used. */
  readonly region?: string;
  /** collector_ilb block */
  readonly collectorIlb: ComputePacketMirroringCollectorIlb[];
  /** filter block */
  readonly filter?: ComputePacketMirroringFilter[];
  /** mirrored_resources block */
  readonly mirroredResources: ComputePacketMirroringMirroredResources[];
  /** network block */
  readonly network: ComputePacketMirroringNetwork[];
  /** timeouts block */
  readonly timeouts?: ComputePacketMirroringTimeouts;
}
export interface ComputePacketMirroringCollectorIlb {
  /** The URL of the forwarding rule. */
  readonly url: string;
}

function computePacketMirroringCollectorIlbToTerraform(struct?: ComputePacketMirroringCollectorIlb): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface ComputePacketMirroringFilter {
  /** IP CIDR ranges that apply as a filter on the source (ingress) or
destination (egress) IP in the IP header. Only IPv4 is supported. */
  readonly cidrRanges?: string[];
  /** Direction of traffic to mirror. Default value: "BOTH" Possible values: ["INGRESS", "EGRESS", "BOTH"] */
  readonly direction?: string;
  /** Protocols that apply as a filter on mirrored traffic. Possible values: ["tcp", "udp", "icmp"] */
  readonly ipProtocols?: string[];
}

function computePacketMirroringFilterToTerraform(struct?: ComputePacketMirroringFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr_ranges: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cidrRanges),
    direction: cdktf.stringToTerraform(struct!.direction),
    ip_protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipProtocols),
  }
}

export interface ComputePacketMirroringMirroredResourcesInstances {
  /** The URL of the instances where this rule should be active. */
  readonly url: string;
}

function computePacketMirroringMirroredResourcesInstancesToTerraform(struct?: ComputePacketMirroringMirroredResourcesInstances): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface ComputePacketMirroringMirroredResourcesSubnetworks {
  /** The URL of the subnetwork where this rule should be active. */
  readonly url: string;
}

function computePacketMirroringMirroredResourcesSubnetworksToTerraform(struct?: ComputePacketMirroringMirroredResourcesSubnetworks): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface ComputePacketMirroringMirroredResources {
  /** All instances with these tags will be mirrored. */
  readonly tags?: string[];
  /** instances block */
  readonly instances?: ComputePacketMirroringMirroredResourcesInstances[];
  /** subnetworks block */
  readonly subnetworks?: ComputePacketMirroringMirroredResourcesSubnetworks[];
}

function computePacketMirroringMirroredResourcesToTerraform(struct?: ComputePacketMirroringMirroredResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    instances: cdktf.listMapper(computePacketMirroringMirroredResourcesInstancesToTerraform)(struct!.instances),
    subnetworks: cdktf.listMapper(computePacketMirroringMirroredResourcesSubnetworksToTerraform)(struct!.subnetworks),
  }
}

export interface ComputePacketMirroringNetwork {
  /** The full self_link URL of the network where this rule is active. */
  readonly url: string;
}

function computePacketMirroringNetworkToTerraform(struct?: ComputePacketMirroringNetwork): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface ComputePacketMirroringTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function computePacketMirroringTimeoutsToTerraform(struct?: ComputePacketMirroringTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ComputePacketMirroring extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputePacketMirroringConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_packet_mirroring',
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
    this._priority = config.priority;
    this._project = config.project;
    this._region = config.region;
    this._collectorIlb = config.collectorIlb;
    this._filter = config.filter;
    this._mirroredResources = config.mirroredResources;
    this._network = config.network;
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number;
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
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

  // collector_ilb - computed: false, optional: false, required: true
  private _collectorIlb: ComputePacketMirroringCollectorIlb[];
  public get collectorIlb() {
    return this.interpolationForAttribute('collector_ilb') as any;
  }
  public set collectorIlb(value: ComputePacketMirroringCollectorIlb[]) {
    this._collectorIlb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorIlbInput() {
    return this._collectorIlb
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: ComputePacketMirroringFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: ComputePacketMirroringFilter[] ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // mirrored_resources - computed: false, optional: false, required: true
  private _mirroredResources: ComputePacketMirroringMirroredResources[];
  public get mirroredResources() {
    return this.interpolationForAttribute('mirrored_resources') as any;
  }
  public set mirroredResources(value: ComputePacketMirroringMirroredResources[]) {
    this._mirroredResources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mirroredResourcesInput() {
    return this._mirroredResources
  }

  // network - computed: false, optional: false, required: true
  private _network: ComputePacketMirroringNetwork[];
  public get network() {
    return this.interpolationForAttribute('network') as any;
  }
  public set network(value: ComputePacketMirroringNetwork[]) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputePacketMirroringTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputePacketMirroringTimeouts ) {
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
      priority: cdktf.numberToTerraform(this._priority),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      collector_ilb: cdktf.listMapper(computePacketMirroringCollectorIlbToTerraform)(this._collectorIlb),
      filter: cdktf.listMapper(computePacketMirroringFilterToTerraform)(this._filter),
      mirrored_resources: cdktf.listMapper(computePacketMirroringMirroredResourcesToTerraform)(this._mirroredResources),
      network: cdktf.listMapper(computePacketMirroringNetworkToTerraform)(this._network),
      timeouts: computePacketMirroringTimeoutsToTerraform(this._timeouts),
    };
  }
}
