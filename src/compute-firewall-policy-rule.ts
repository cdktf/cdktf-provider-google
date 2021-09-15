// https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeFirewallPolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Action to perform when the client connection triggers the rule. Can currently be either "allow" or "deny()" where valid values for status are 403, 404, and 502.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_rule.html#action ComputeFirewallPolicyRule#action}
  */
  readonly action: string;
  /**
  * An optional description for this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_rule.html#description ComputeFirewallPolicyRule#description}
  */
  readonly description?: string;
  /**
  * The direction in which this rule applies. Possible values: INGRESS, EGRESS
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_rule.html#direction ComputeFirewallPolicyRule#direction}
  */
  readonly direction: string;
  /**
  * Denotes whether the firewall policy rule is disabled. When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist. If this is unspecified, the firewall policy rule will be enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_rule.html#disabled ComputeFirewallPolicyRule#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Denotes whether to enable logging for a particular rule. If logging is enabled, logs will be exported to the configured export destination in Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you cannot enable logging on "goto_next" rules.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_rule.html#enable_logging ComputeFirewallPolicyRule#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * The firewall policy of the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_rule.html#firewall_policy ComputeFirewallPolicyRule#firewall_policy}
  */
  readonly firewallPolicy: string;
  /**
  * An integer indicating the priority of a rule in the list. The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_rule.html#priority ComputeFirewallPolicyRule#priority}
  */
  readonly priority: number;
  /**
  * A list of network resource URLs to which this rule applies. This field allows you to control which network's VMs get this rule. If this field is left blank, all VMs within the organization will receive the rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_rule.html#target_resources ComputeFirewallPolicyRule#target_resources}
  */
  readonly targetResources?: string[];
  /**
  * A list of service accounts indicating the sets of instances that are applied with this rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_rule.html#target_service_accounts ComputeFirewallPolicyRule#target_service_accounts}
  */
  readonly targetServiceAccounts?: string[];
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_rule.html#match ComputeFirewallPolicyRule#match}
  */
  readonly match: ComputeFirewallPolicyRuleMatch[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_rule.html#timeouts ComputeFirewallPolicyRule#timeouts}
  */
  readonly timeouts?: ComputeFirewallPolicyRuleTimeouts;
}
export interface ComputeFirewallPolicyRuleMatchLayer4Configs {
  /**
  * The IP protocol to which this rule applies. The protocol type is required when creating a firewall rule. This value can either be one of the following well known protocol strings (`tcp`, `udp`, `icmp`, `esp`, `ah`, `ipip`, `sctp`), or the IP protocol number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_rule.html#ip_protocol ComputeFirewallPolicyRule#ip_protocol}
  */
  readonly ipProtocol: string;
  /**
  * An optional list of ports to which this rule applies. This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port. Example inputs include: ``.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_rule.html#ports ComputeFirewallPolicyRule#ports}
  */
  readonly ports?: string[];
}

function computeFirewallPolicyRuleMatchLayer4ConfigsToTerraform(struct?: ComputeFirewallPolicyRuleMatchLayer4Configs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
    ports: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ports),
  }
}

export interface ComputeFirewallPolicyRuleMatch {
  /**
  * CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 256.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_rule.html#dest_ip_ranges ComputeFirewallPolicyRule#dest_ip_ranges}
  */
  readonly destIpRanges?: string[];
  /**
  * CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 256.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_rule.html#src_ip_ranges ComputeFirewallPolicyRule#src_ip_ranges}
  */
  readonly srcIpRanges?: string[];
  /**
  * layer4_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_rule.html#layer4_configs ComputeFirewallPolicyRule#layer4_configs}
  */
  readonly layer4Configs: ComputeFirewallPolicyRuleMatchLayer4Configs[];
}

function computeFirewallPolicyRuleMatchToTerraform(struct?: ComputeFirewallPolicyRuleMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dest_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destIpRanges),
    src_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform)(struct!.srcIpRanges),
    layer4_configs: cdktf.listMapper(computeFirewallPolicyRuleMatchLayer4ConfigsToTerraform)(struct!.layer4Configs),
  }
}

export interface ComputeFirewallPolicyRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_rule.html#create ComputeFirewallPolicyRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_rule.html#delete ComputeFirewallPolicyRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_rule.html#update ComputeFirewallPolicyRule#update}
  */
  readonly update?: string;
}

function computeFirewallPolicyRuleTimeoutsToTerraform(struct?: ComputeFirewallPolicyRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_rule.html google_compute_firewall_policy_rule}
*/
export class ComputeFirewallPolicyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_firewall_policy_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_rule.html google_compute_firewall_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeFirewallPolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeFirewallPolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_firewall_policy_rule',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._action = config.action;
    this._description = config.description;
    this._direction = config.direction;
    this._disabled = config.disabled;
    this._enableLogging = config.enableLogging;
    this._firewallPolicy = config.firewallPolicy;
    this._priority = config.priority;
    this._targetResources = config.targetResources;
    this._targetServiceAccounts = config.targetServiceAccounts;
    this._match = config.match;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action: string;
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
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

  // direction - computed: false, optional: false, required: true
  private _direction: string;
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable;
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable ) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled
  }

  // enable_logging - computed: false, optional: true, required: false
  private _enableLogging?: boolean | cdktf.IResolvable;
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean | cdktf.IResolvable ) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging
  }

  // firewall_policy - computed: false, optional: false, required: true
  private _firewallPolicy: string;
  public get firewallPolicy() {
    return this.getStringAttribute('firewall_policy');
  }
  public set firewallPolicy(value: string) {
    this._firewallPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyInput() {
    return this._firewallPolicy
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // priority - computed: false, optional: false, required: true
  private _priority: number;
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority
  }

  // rule_tuple_count - computed: true, optional: false, required: false
  public get ruleTupleCount() {
    return this.getNumberAttribute('rule_tuple_count');
  }

  // target_resources - computed: false, optional: true, required: false
  private _targetResources?: string[];
  public get targetResources() {
    return this.getListAttribute('target_resources');
  }
  public set targetResources(value: string[] ) {
    this._targetResources = value;
  }
  public resetTargetResources() {
    this._targetResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourcesInput() {
    return this._targetResources
  }

  // target_service_accounts - computed: false, optional: true, required: false
  private _targetServiceAccounts?: string[];
  public get targetServiceAccounts() {
    return this.getListAttribute('target_service_accounts');
  }
  public set targetServiceAccounts(value: string[] ) {
    this._targetServiceAccounts = value;
  }
  public resetTargetServiceAccounts() {
    this._targetServiceAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetServiceAccountsInput() {
    return this._targetServiceAccounts
  }

  // match - computed: false, optional: false, required: true
  private _match: ComputeFirewallPolicyRuleMatch[];
  public get match() {
    return this.interpolationForAttribute('match') as any;
  }
  public set match(value: ComputeFirewallPolicyRuleMatch[]) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeFirewallPolicyRuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeFirewallPolicyRuleTimeouts ) {
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
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      direction: cdktf.stringToTerraform(this._direction),
      disabled: cdktf.booleanToTerraform(this._disabled),
      enable_logging: cdktf.booleanToTerraform(this._enableLogging),
      firewall_policy: cdktf.stringToTerraform(this._firewallPolicy),
      priority: cdktf.numberToTerraform(this._priority),
      target_resources: cdktf.listMapper(cdktf.stringToTerraform)(this._targetResources),
      target_service_accounts: cdktf.listMapper(cdktf.stringToTerraform)(this._targetServiceAccounts),
      match: cdktf.listMapper(computeFirewallPolicyRuleMatchToTerraform)(this._match),
      timeouts: computeFirewallPolicyRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
