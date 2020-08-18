// https://www.terraform.io/docs/providers/google/r/app_engine_firewall_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AppEngineFirewallRuleConfig extends TerraformMetaArguments {
  /** The action to take if this rule matches. Possible values: ["UNSPECIFIED_ACTION", "ALLOW", "DENY"] */
  readonly action: string;
  /** An optional string description of this rule. */
  readonly description?: string;
  /** A positive integer that defines the order of rule evaluation.
Rules with the lowest priority are evaluated first.

A default rule at priority Int32.MaxValue matches all IPv4 and
IPv6 traffic when no previous rule matches. Only the action of
this rule can be modified by the user. */
  readonly priority?: number;
  readonly project?: string;
  /** IP address or range, defined using CIDR notation, of requests that this rule applies to. */
  readonly sourceRange: string;
  /** timeouts block */
  readonly timeouts?: AppEngineFirewallRuleTimeouts;
}
export interface AppEngineFirewallRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class AppEngineFirewallRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppEngineFirewallRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_app_engine_firewall_rule',
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
    this._priority = config.priority;
    this._project = config.project;
    this._sourceRange = config.sourceRange;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action: string;
  public get action() {
    return this._action;
  }
  public set action(value: string) {
    this._action = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // source_range - computed: false, optional: false, required: true
  private _sourceRange: string;
  public get sourceRange() {
    return this._sourceRange;
  }
  public set sourceRange(value: string) {
    this._sourceRange = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppEngineFirewallRuleTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AppEngineFirewallRuleTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      action: this._action,
      description: this._description,
      priority: this._priority,
      project: this._project,
      source_range: this._sourceRange,
      timeouts: this._timeouts,
    };
  }
}
