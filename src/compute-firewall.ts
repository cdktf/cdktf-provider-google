// https://www.terraform.io/docs/providers/google/r/compute_firewall.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeFirewallConfig extends TerraformMetaArguments {
  /** An optional description of this resource. Provide this property when
you create the resource. */
  readonly description?: string;
  /** If destination ranges are specified, the firewall will apply only to
traffic that has destination IP address in these ranges. These ranges
must be expressed in CIDR format. Only IPv4 is supported. */
  readonly destinationRanges?: string[];
  /** Direction of traffic to which this firewall applies; default is
INGRESS. Note: For INGRESS traffic, it is NOT supported to specify
destinationRanges; For EGRESS traffic, it is NOT supported to specify
sourceRanges OR sourceTags. Possible values: ["INGRESS", "EGRESS"] */
  readonly direction?: string;
  /** Denotes whether the firewall rule is disabled, i.e not applied to the
network it is associated with. When set to true, the firewall rule is
not enforced and the network behaves as if it did not exist. If this
is unspecified, the firewall rule will be enabled. */
  readonly disabled?: boolean;
  /** This field denotes whether to enable logging for a particular firewall rule. If logging is enabled, logs will be exported to Stackdriver. */
  readonly enableLogging?: boolean;
  /** Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. */
  readonly name: string;
  /** The name or self_link of the network to attach this firewall to. */
  readonly network: string;
  /** Priority for this rule. This is an integer between 0 and 65535, both
inclusive. When not specified, the value assumed is 1000. Relative
priorities determine precedence of conflicting rules. Lower value of
priority implies higher precedence (eg, a rule with priority 0 has
higher precedence than a rule with priority 1). DENY rules take
precedence over ALLOW rules having equal priority. */
  readonly priority?: number;
  readonly project?: string;
  /** If source ranges are specified, the firewall will apply only to
traffic that has source IP address in these ranges. These ranges must
be expressed in CIDR format. One or both of sourceRanges and
sourceTags may be set. If both properties are set, the firewall will
apply to traffic that has source IP address within sourceRanges OR the
source IP that belongs to a tag listed in the sourceTags property. The
connection does not need to match both properties for the firewall to
apply. Only IPv4 is supported. */
  readonly sourceRanges?: string[];
  /** If source service accounts are specified, the firewall will apply only
to traffic originating from an instance with a service account in this
list. Source service accounts cannot be used to control traffic to an
instance's external IP address because service accounts are associated
with an instance, not an IP address. sourceRanges can be set at the
same time as sourceServiceAccounts. If both are set, the firewall will
apply to traffic that has source IP address within sourceRanges OR the
source IP belongs to an instance with service account listed in
sourceServiceAccount. The connection does not need to match both
properties for the firewall to apply. sourceServiceAccounts cannot be
used at the same time as sourceTags or targetTags. */
  readonly sourceServiceAccounts?: string[];
  /** If source tags are specified, the firewall will apply only to traffic
with source IP that belongs to a tag listed in source tags. Source
tags cannot be used to control traffic to an instance's external IP
address. Because tags are associated with an instance, not an IP
address. One or both of sourceRanges and sourceTags may be set. If
both properties are set, the firewall will apply to traffic that has
source IP address within sourceRanges OR the source IP that belongs to
a tag listed in the sourceTags property. The connection does not need
to match both properties for the firewall to apply. */
  readonly sourceTags?: string[];
  /** A list of service accounts indicating sets of instances located in the
network that may make network connections as specified in allowed[].
targetServiceAccounts cannot be used at the same time as targetTags or
sourceTags. If neither targetServiceAccounts nor targetTags are
specified, the firewall rule applies to all instances on the specified
network. */
  readonly targetServiceAccounts?: string[];
  /** A list of instance tags indicating sets of instances located in the
network that may make network connections as specified in allowed[].
If no targetTags are specified, the firewall rule applies to all
instances on the specified network. */
  readonly targetTags?: string[];
  /** allow block */
  readonly allow?: ComputeFirewallAllow[];
  /** deny block */
  readonly deny?: ComputeFirewallDeny[];
  /** log_config block */
  readonly logConfig?: ComputeFirewallLogConfig[];
  /** timeouts block */
  readonly timeouts?: ComputeFirewallTimeouts;
}
export interface ComputeFirewallAllow {
  /** An optional list of ports to which this rule applies. This field
is only applicable for UDP or TCP protocol. Each entry must be
either an integer or a range. If not specified, this rule
applies to connections through any port.

Example inputs include: ["22"], ["80","443"], and
["12345-12349"]. */
  readonly ports?: string[];
  /** The IP protocol to which this rule applies. The protocol type is
required when creating a firewall rule. This value can either be
one of the following well known protocol strings (tcp, udp,
icmp, esp, ah, sctp, ipip), or the IP protocol number. */
  readonly protocol: string;
}
export interface ComputeFirewallDeny {
  /** An optional list of ports to which this rule applies. This field
is only applicable for UDP or TCP protocol. Each entry must be
either an integer or a range. If not specified, this rule
applies to connections through any port.

Example inputs include: ["22"], ["80","443"], and
["12345-12349"]. */
  readonly ports?: string[];
  /** The IP protocol to which this rule applies. The protocol type is
required when creating a firewall rule. This value can either be
one of the following well known protocol strings (tcp, udp,
icmp, esp, ah, sctp, ipip), or the IP protocol number. */
  readonly protocol: string;
}
export interface ComputeFirewallLogConfig {
  /** This field denotes whether to include or exclude metadata for firewall logs. Possible values: ["EXCLUDE_ALL_METADATA", "INCLUDE_ALL_METADATA"] */
  readonly metadata: string;
}
export interface ComputeFirewallTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeFirewall extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeFirewallConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_firewall',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._destinationRanges = config.destinationRanges;
    this._direction = config.direction;
    this._disabled = config.disabled;
    this._enableLogging = config.enableLogging;
    this._name = config.name;
    this._network = config.network;
    this._priority = config.priority;
    this._project = config.project;
    this._sourceRanges = config.sourceRanges;
    this._sourceServiceAccounts = config.sourceServiceAccounts;
    this._sourceTags = config.sourceTags;
    this._targetServiceAccounts = config.targetServiceAccounts;
    this._targetTags = config.targetTags;
    this._allow = config.allow;
    this._deny = config.deny;
    this._logConfig = config.logConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: true
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // destination_ranges - computed: true, optional: true, required: false
  private _destinationRanges?: string[];
  public get destinationRanges() {
    return this._destinationRanges ?? this.getListAttribute('destination_ranges');
  }
  public set destinationRanges(value: string[] | undefined) {
    this._destinationRanges = value;
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string;
  public get direction() {
    return this._direction ?? this.getStringAttribute('direction');
  }
  public set direction(value: string | undefined) {
    this._direction = value;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean;
  public get disabled() {
    return this._disabled;
  }
  public set disabled(value: boolean | undefined) {
    this._disabled = value;
  }

  // enable_logging - computed: true, optional: true, required: false
  private _enableLogging?: boolean;
  public get enableLogging() {
    return this._enableLogging ?? this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean | undefined) {
    this._enableLogging = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // network - computed: false, optional: false, required: true
  private _network: string;
  public get network() {
    return this._network;
  }
  public set network(value: string) {
    this._network = value;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number;
  public get priority() {
    return this._priority;
  }
  public set priority(value: number | undefined) {
    this._priority = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // source_ranges - computed: true, optional: true, required: false
  private _sourceRanges?: string[];
  public get sourceRanges() {
    return this._sourceRanges ?? this.getListAttribute('source_ranges');
  }
  public set sourceRanges(value: string[] | undefined) {
    this._sourceRanges = value;
  }

  // source_service_accounts - computed: false, optional: true, required: false
  private _sourceServiceAccounts?: string[];
  public get sourceServiceAccounts() {
    return this._sourceServiceAccounts;
  }
  public set sourceServiceAccounts(value: string[] | undefined) {
    this._sourceServiceAccounts = value;
  }

  // source_tags - computed: false, optional: true, required: false
  private _sourceTags?: string[];
  public get sourceTags() {
    return this._sourceTags;
  }
  public set sourceTags(value: string[] | undefined) {
    this._sourceTags = value;
  }

  // target_service_accounts - computed: false, optional: true, required: false
  private _targetServiceAccounts?: string[];
  public get targetServiceAccounts() {
    return this._targetServiceAccounts;
  }
  public set targetServiceAccounts(value: string[] | undefined) {
    this._targetServiceAccounts = value;
  }

  // target_tags - computed: false, optional: true, required: false
  private _targetTags?: string[];
  public get targetTags() {
    return this._targetTags;
  }
  public set targetTags(value: string[] | undefined) {
    this._targetTags = value;
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: ComputeFirewallAllow[];
  public get allow() {
    return this._allow;
  }
  public set allow(value: ComputeFirewallAllow[] | undefined) {
    this._allow = value;
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: ComputeFirewallDeny[];
  public get deny() {
    return this._deny;
  }
  public set deny(value: ComputeFirewallDeny[] | undefined) {
    this._deny = value;
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig?: ComputeFirewallLogConfig[];
  public get logConfig() {
    return this._logConfig;
  }
  public set logConfig(value: ComputeFirewallLogConfig[] | undefined) {
    this._logConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeFirewallTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeFirewallTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      destination_ranges: this._destinationRanges,
      direction: this._direction,
      disabled: this._disabled,
      enable_logging: this._enableLogging,
      name: this._name,
      network: this._network,
      priority: this._priority,
      project: this._project,
      source_ranges: this._sourceRanges,
      source_service_accounts: this._sourceServiceAccounts,
      source_tags: this._sourceTags,
      target_service_accounts: this._targetServiceAccounts,
      target_tags: this._targetTags,
      allow: this._allow,
      deny: this._deny,
      log_config: this._logConfig,
      timeouts: this._timeouts,
    };
  }
}
