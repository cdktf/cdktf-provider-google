// https://www.terraform.io/docs/providers/google/r/compute_firewall.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeFirewallConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of this resource. Provide this property when
you create the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#description ComputeFirewall#description}
  */
  readonly description?: string;
  /**
  * If destination ranges are specified, the firewall will apply only to
traffic that has destination IP address in these ranges. These ranges
must be expressed in CIDR format. Only IPv4 is supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#destination_ranges ComputeFirewall#destination_ranges}
  */
  readonly destinationRanges?: string[];
  /**
  * Direction of traffic to which this firewall applies; default is
INGRESS. Note: For INGRESS traffic, it is NOT supported to specify
destinationRanges; For EGRESS traffic, it is NOT supported to specify
sourceRanges OR sourceTags. Possible values: ["INGRESS", "EGRESS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#direction ComputeFirewall#direction}
  */
  readonly direction?: string;
  /**
  * Denotes whether the firewall rule is disabled, i.e not applied to the
network it is associated with. When set to true, the firewall rule is
not enforced and the network behaves as if it did not exist. If this
is unspecified, the firewall rule will be enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#disabled ComputeFirewall#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * This field denotes whether to enable logging for a particular firewall rule. If logging is enabled, logs will be exported to Stackdriver.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#enable_logging ComputeFirewall#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#name ComputeFirewall#name}
  */
  readonly name: string;
  /**
  * The name or self_link of the network to attach this firewall to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#network ComputeFirewall#network}
  */
  readonly network: string;
  /**
  * Priority for this rule. This is an integer between 0 and 65535, both
inclusive. When not specified, the value assumed is 1000. Relative
priorities determine precedence of conflicting rules. Lower value of
priority implies higher precedence (eg, a rule with priority 0 has
higher precedence than a rule with priority 1). DENY rules take
precedence over ALLOW rules having equal priority.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#priority ComputeFirewall#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#project ComputeFirewall#project}
  */
  readonly project?: string;
  /**
  * If source ranges are specified, the firewall will apply only to
traffic that has source IP address in these ranges. These ranges must
be expressed in CIDR format. One or both of sourceRanges and
sourceTags may be set. If both properties are set, the firewall will
apply to traffic that has source IP address within sourceRanges OR the
source IP that belongs to a tag listed in the sourceTags property. The
connection does not need to match both properties for the firewall to
apply. Only IPv4 is supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#source_ranges ComputeFirewall#source_ranges}
  */
  readonly sourceRanges?: string[];
  /**
  * If source service accounts are specified, the firewall will apply only
to traffic originating from an instance with a service account in this
list. Source service accounts cannot be used to control traffic to an
instance's external IP address because service accounts are associated
with an instance, not an IP address. sourceRanges can be set at the
same time as sourceServiceAccounts. If both are set, the firewall will
apply to traffic that has source IP address within sourceRanges OR the
source IP belongs to an instance with service account listed in
sourceServiceAccount. The connection does not need to match both
properties for the firewall to apply. sourceServiceAccounts cannot be
used at the same time as sourceTags or targetTags.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#source_service_accounts ComputeFirewall#source_service_accounts}
  */
  readonly sourceServiceAccounts?: string[];
  /**
  * If source tags are specified, the firewall will apply only to traffic
with source IP that belongs to a tag listed in source tags. Source
tags cannot be used to control traffic to an instance's external IP
address. Because tags are associated with an instance, not an IP
address. One or both of sourceRanges and sourceTags may be set. If
both properties are set, the firewall will apply to traffic that has
source IP address within sourceRanges OR the source IP that belongs to
a tag listed in the sourceTags property. The connection does not need
to match both properties for the firewall to apply.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#source_tags ComputeFirewall#source_tags}
  */
  readonly sourceTags?: string[];
  /**
  * A list of service accounts indicating sets of instances located in the
network that may make network connections as specified in allowed[].
targetServiceAccounts cannot be used at the same time as targetTags or
sourceTags. If neither targetServiceAccounts nor targetTags are
specified, the firewall rule applies to all instances on the specified
network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#target_service_accounts ComputeFirewall#target_service_accounts}
  */
  readonly targetServiceAccounts?: string[];
  /**
  * A list of instance tags indicating sets of instances located in the
network that may make network connections as specified in allowed[].
If no targetTags are specified, the firewall rule applies to all
instances on the specified network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#target_tags ComputeFirewall#target_tags}
  */
  readonly targetTags?: string[];
  /**
  * allow block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#allow ComputeFirewall#allow}
  */
  readonly allow?: ComputeFirewallAllow[];
  /**
  * deny block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#deny ComputeFirewall#deny}
  */
  readonly deny?: ComputeFirewallDeny[];
  /**
  * log_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#log_config ComputeFirewall#log_config}
  */
  readonly logConfig?: ComputeFirewallLogConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#timeouts ComputeFirewall#timeouts}
  */
  readonly timeouts?: ComputeFirewallTimeouts;
}
export interface ComputeFirewallAllow {
  /**
  * An optional list of ports to which this rule applies. This field
is only applicable for UDP or TCP protocol. Each entry must be
either an integer or a range. If not specified, this rule
applies to connections through any port.

Example inputs include: ["22"], ["80","443"], and
["12345-12349"].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#ports ComputeFirewall#ports}
  */
  readonly ports?: string[];
  /**
  * The IP protocol to which this rule applies. The protocol type is
required when creating a firewall rule. This value can either be
one of the following well known protocol strings (tcp, udp,
icmp, esp, ah, sctp, ipip, all), or the IP protocol number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#protocol ComputeFirewall#protocol}
  */
  readonly protocol: string;
}

function computeFirewallAllowToTerraform(struct?: ComputeFirewallAllow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ports),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface ComputeFirewallDeny {
  /**
  * An optional list of ports to which this rule applies. This field
is only applicable for UDP or TCP protocol. Each entry must be
either an integer or a range. If not specified, this rule
applies to connections through any port.

Example inputs include: ["22"], ["80","443"], and
["12345-12349"].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#ports ComputeFirewall#ports}
  */
  readonly ports?: string[];
  /**
  * The IP protocol to which this rule applies. The protocol type is
required when creating a firewall rule. This value can either be
one of the following well known protocol strings (tcp, udp,
icmp, esp, ah, sctp, ipip, all), or the IP protocol number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#protocol ComputeFirewall#protocol}
  */
  readonly protocol: string;
}

function computeFirewallDenyToTerraform(struct?: ComputeFirewallDeny): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ports),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface ComputeFirewallLogConfig {
  /**
  * This field denotes whether to include or exclude metadata for firewall logs. Possible values: ["EXCLUDE_ALL_METADATA", "INCLUDE_ALL_METADATA"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#metadata ComputeFirewall#metadata}
  */
  readonly metadata: string;
}

function computeFirewallLogConfigToTerraform(struct?: ComputeFirewallLogConfigOutputReference | ComputeFirewallLogConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}

export class ComputeFirewallLogConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }
}
export interface ComputeFirewallTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#create ComputeFirewall#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#delete ComputeFirewall#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html#update ComputeFirewall#update}
  */
  readonly update?: string;
}

function computeFirewallTimeoutsToTerraform(struct?: ComputeFirewallTimeoutsOutputReference | ComputeFirewallTimeouts): any {
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

export class ComputeFirewallTimeoutsOutputReference extends cdktf.ComplexObject {
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

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html google_compute_firewall}
*/
export class ComputeFirewall extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_firewall";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_firewall.html google_compute_firewall} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeFirewallConfig
  */
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

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

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

  // destination_ranges - computed: true, optional: true, required: false
  private _destinationRanges?: string[] | undefined; 
  public get destinationRanges() {
    return this.getListAttribute('destination_ranges');
  }
  public set destinationRanges(value: string[] | undefined) {
    this._destinationRanges = value;
  }
  public resetDestinationRanges() {
    this._destinationRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRangesInput() {
    return this._destinationRanges
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string | undefined; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string | undefined) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable | undefined; 
  public get disabled() {
    return this.getBooleanAttribute('disabled') as any;
  }
  public set disabled(value: boolean | cdktf.IResolvable | undefined) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled
  }

  // enable_logging - computed: true, optional: true, required: false
  private _enableLogging?: boolean | cdktf.IResolvable | undefined; 
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging') as any;
  }
  public set enableLogging(value: boolean | cdktf.IResolvable | undefined) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging
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

  // source_ranges - computed: true, optional: true, required: false
  private _sourceRanges?: string[] | undefined; 
  public get sourceRanges() {
    return this.getListAttribute('source_ranges');
  }
  public set sourceRanges(value: string[] | undefined) {
    this._sourceRanges = value;
  }
  public resetSourceRanges() {
    this._sourceRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRangesInput() {
    return this._sourceRanges
  }

  // source_service_accounts - computed: false, optional: true, required: false
  private _sourceServiceAccounts?: string[] | undefined; 
  public get sourceServiceAccounts() {
    return this.getListAttribute('source_service_accounts');
  }
  public set sourceServiceAccounts(value: string[] | undefined) {
    this._sourceServiceAccounts = value;
  }
  public resetSourceServiceAccounts() {
    this._sourceServiceAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServiceAccountsInput() {
    return this._sourceServiceAccounts
  }

  // source_tags - computed: false, optional: true, required: false
  private _sourceTags?: string[] | undefined; 
  public get sourceTags() {
    return this.getListAttribute('source_tags');
  }
  public set sourceTags(value: string[] | undefined) {
    this._sourceTags = value;
  }
  public resetSourceTags() {
    this._sourceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTagsInput() {
    return this._sourceTags
  }

  // target_service_accounts - computed: false, optional: true, required: false
  private _targetServiceAccounts?: string[] | undefined; 
  public get targetServiceAccounts() {
    return this.getListAttribute('target_service_accounts');
  }
  public set targetServiceAccounts(value: string[] | undefined) {
    this._targetServiceAccounts = value;
  }
  public resetTargetServiceAccounts() {
    this._targetServiceAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetServiceAccountsInput() {
    return this._targetServiceAccounts
  }

  // target_tags - computed: false, optional: true, required: false
  private _targetTags?: string[] | undefined; 
  public get targetTags() {
    return this.getListAttribute('target_tags');
  }
  public set targetTags(value: string[] | undefined) {
    this._targetTags = value;
  }
  public resetTargetTags() {
    this._targetTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTagsInput() {
    return this._targetTags
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: ComputeFirewallAllow[] | undefined; 
  public get allow() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('allow') as any;
  }
  public set allow(value: ComputeFirewallAllow[] | undefined) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: ComputeFirewallDeny[] | undefined; 
  public get deny() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('deny') as any;
  }
  public set deny(value: ComputeFirewallDeny[] | undefined) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig?: ComputeFirewallLogConfig | undefined; 
  private __logConfigOutput = new ComputeFirewallLogConfigOutputReference(this as any, "log_config", true);
  public get logConfig() {
    return this.__logConfigOutput;
  }
  public putLogConfig(value: ComputeFirewallLogConfig | undefined) {
    this._logConfig = value;
  }
  public resetLogConfig() {
    this._logConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeFirewallTimeouts | undefined; 
  private __timeoutsOutput = new ComputeFirewallTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ComputeFirewallTimeouts | undefined) {
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
      destination_ranges: cdktf.listMapper(cdktf.stringToTerraform)(this._destinationRanges),
      direction: cdktf.stringToTerraform(this._direction),
      disabled: cdktf.booleanToTerraform(this._disabled),
      enable_logging: cdktf.booleanToTerraform(this._enableLogging),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      priority: cdktf.numberToTerraform(this._priority),
      project: cdktf.stringToTerraform(this._project),
      source_ranges: cdktf.listMapper(cdktf.stringToTerraform)(this._sourceRanges),
      source_service_accounts: cdktf.listMapper(cdktf.stringToTerraform)(this._sourceServiceAccounts),
      source_tags: cdktf.listMapper(cdktf.stringToTerraform)(this._sourceTags),
      target_service_accounts: cdktf.listMapper(cdktf.stringToTerraform)(this._targetServiceAccounts),
      target_tags: cdktf.listMapper(cdktf.stringToTerraform)(this._targetTags),
      allow: cdktf.listMapper(computeFirewallAllowToTerraform)(this._allow),
      deny: cdktf.listMapper(computeFirewallDenyToTerraform)(this._deny),
      log_config: computeFirewallLogConfigToTerraform(this._logConfig),
      timeouts: computeFirewallTimeoutsToTerraform(this._timeouts),
    };
  }
}
