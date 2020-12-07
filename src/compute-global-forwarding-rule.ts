// https://www.terraform.io/docs/providers/google/r/compute_global_forwarding_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeGlobalForwardingRuleConfig extends cdktf.TerraformMetaArguments {
  /** An optional description of this resource. Provide this property when
you create the resource. */
  readonly description?: string;
  /** The IP address that this forwarding rule is serving on behalf of.

Addresses are restricted based on the forwarding rule's load balancing
scheme (EXTERNAL or INTERNAL) and scope (global or regional).

When the load balancing scheme is EXTERNAL, for global forwarding
rules, the address must be a global IP, and for regional forwarding
rules, the address must live in the same region as the forwarding
rule. If this field is empty, an ephemeral IPv4 address from the same
scope (global or regional) will be assigned. A regional forwarding
rule supports IPv4 only. A global forwarding rule supports either IPv4
or IPv6.

When the load balancing scheme is INTERNAL, this can only be an RFC
1918 IP address belonging to the network/subnet configured for the
forwarding rule. By default, if this field is empty, an ephemeral
internal IP address will be automatically allocated from the IP range
of the subnet or network configured for this forwarding rule.

An address must be specified by a literal IP address. ~> **NOTE**: While
the API allows you to specify various resource paths for an address resource
instead, Terraform requires this to specifically be an IP address to
avoid needing to fetching the IP address from resource paths on refresh
or unnecessary diffs. */
  readonly ipAddress?: string;
  /** The IP protocol to which this rule applies. When the load balancing scheme is
INTERNAL_SELF_MANAGED, only TCP is valid. Possible values: ["TCP", "UDP", "ESP", "AH", "SCTP", "ICMP"] */
  readonly ipProtocol?: string;
  /** The IP Version that will be used by this global forwarding rule. Possible values: ["IPV4", "IPV6"] */
  readonly ipVersion?: string;
  /** This signifies what the GlobalForwardingRule will be used for.
The value of INTERNAL_SELF_MANAGED means that this will be used for
Internal Global HTTP(S) LB. The value of EXTERNAL means that this
will be used for External Global Load Balancing (HTTP(S) LB,
External TCP/UDP LB, SSL Proxy)

NOTE: Currently global forwarding rules cannot be used for INTERNAL
load balancing. Default value: "EXTERNAL" Possible values: ["EXTERNAL", "INTERNAL_SELF_MANAGED"] */
  readonly loadBalancingScheme?: string;
  /** Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. */
  readonly name: string;
  /** This field is used along with the target field for TargetHttpProxy,
TargetHttpsProxy, TargetSslProxy, TargetTcpProxy, TargetVpnGateway,
TargetPool, TargetInstance.

Applicable only when IPProtocol is TCP, UDP, or SCTP, only packets
addressed to ports in the specified range will be forwarded to target.
Forwarding rules with the same [IPAddress, IPProtocol] pair must have
disjoint port ranges.

Some types of forwarding target have constraints on the acceptable
ports:

* TargetHttpProxy: 80, 8080
* TargetHttpsProxy: 443
* TargetTcpProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995,
                  1883, 5222
* TargetSslProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995,
                  1883, 5222
* TargetVpnGateway: 500, 4500 */
  readonly portRange?: string;
  readonly project?: string;
  /** The URL of the target resource to receive the matched traffic.
The forwarded traffic must be of a type appropriate to the target object.
For INTERNAL_SELF_MANAGED load balancing, only HTTP and HTTPS targets
are valid. */
  readonly target: string;
  /** metadata_filters block */
  readonly metadataFilters?: ComputeGlobalForwardingRuleMetadataFilters[];
  /** timeouts block */
  readonly timeouts?: ComputeGlobalForwardingRuleTimeouts;
}
export interface ComputeGlobalForwardingRuleMetadataFiltersFilterLabels {
  /** Name of the metadata label. The length must be between
1 and 1024 characters, inclusive. */
  readonly name: string;
  /** The value that the label must match. The value has a maximum
length of 1024 characters. */
  readonly value: string;
}

function computeGlobalForwardingRuleMetadataFiltersFilterLabelsToTerraform(struct?: ComputeGlobalForwardingRuleMetadataFiltersFilterLabels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ComputeGlobalForwardingRuleMetadataFilters {
  /** Specifies how individual filterLabel matches within the list of
filterLabels contribute towards the overall metadataFilter match.

MATCH_ANY - At least one of the filterLabels must have a matching
label in the provided metadata.
MATCH_ALL - All filterLabels must have matching labels in the
provided metadata. Possible values: ["MATCH_ANY", "MATCH_ALL"] */
  readonly filterMatchCriteria: string;
  /** filter_labels block */
  readonly filterLabels: ComputeGlobalForwardingRuleMetadataFiltersFilterLabels[];
}

function computeGlobalForwardingRuleMetadataFiltersToTerraform(struct?: ComputeGlobalForwardingRuleMetadataFilters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    filter_match_criteria: cdktf.stringToTerraform(struct!.filterMatchCriteria),
    filter_labels: cdktf.listMapper(computeGlobalForwardingRuleMetadataFiltersFilterLabelsToTerraform)(struct!.filterLabels),
  }
}

export interface ComputeGlobalForwardingRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function computeGlobalForwardingRuleTimeoutsToTerraform(struct?: ComputeGlobalForwardingRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ComputeGlobalForwardingRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeGlobalForwardingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_global_forwarding_rule',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._ipAddress = config.ipAddress;
    this._ipProtocol = config.ipProtocol;
    this._ipVersion = config.ipVersion;
    this._loadBalancingScheme = config.loadBalancingScheme;
    this._name = config.name;
    this._portRange = config.portRange;
    this._project = config.project;
    this._target = config.target;
    this._metadataFilters = config.metadataFilters;
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

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string;
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress
  }

  // ip_protocol - computed: true, optional: true, required: false
  private _ipProtocol?: string;
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol
  }

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string;
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string ) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion
  }

  // load_balancing_scheme - computed: false, optional: true, required: false
  private _loadBalancingScheme?: string;
  public get loadBalancingScheme() {
    return this.getStringAttribute('load_balancing_scheme');
  }
  public set loadBalancingScheme(value: string ) {
    this._loadBalancingScheme = value;
  }
  public resetLoadBalancingScheme() {
    this._loadBalancingScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingSchemeInput() {
    return this._loadBalancingScheme
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

  // port_range - computed: false, optional: true, required: false
  private _portRange?: string;
  public get portRange() {
    return this.getStringAttribute('port_range');
  }
  public set portRange(value: string ) {
    this._portRange = value;
  }
  public resetPortRange() {
    this._portRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange
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

  // target - computed: false, optional: false, required: true
  private _target: string;
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target
  }

  // metadata_filters - computed: false, optional: true, required: false
  private _metadataFilters?: ComputeGlobalForwardingRuleMetadataFilters[];
  public get metadataFilters() {
    return this.interpolationForAttribute('metadata_filters') as any;
  }
  public set metadataFilters(value: ComputeGlobalForwardingRuleMetadataFilters[] ) {
    this._metadataFilters = value;
  }
  public resetMetadataFilters() {
    this._metadataFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFiltersInput() {
    return this._metadataFilters
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeGlobalForwardingRuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeGlobalForwardingRuleTimeouts ) {
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
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      ip_protocol: cdktf.stringToTerraform(this._ipProtocol),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      load_balancing_scheme: cdktf.stringToTerraform(this._loadBalancingScheme),
      name: cdktf.stringToTerraform(this._name),
      port_range: cdktf.stringToTerraform(this._portRange),
      project: cdktf.stringToTerraform(this._project),
      target: cdktf.stringToTerraform(this._target),
      metadata_filters: cdktf.listMapper(computeGlobalForwardingRuleMetadataFiltersToTerraform)(this._metadataFilters),
      timeouts: computeGlobalForwardingRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
