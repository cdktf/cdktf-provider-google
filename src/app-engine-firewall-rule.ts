// https://www.terraform.io/docs/providers/google/r/app_engine_firewall_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppEngineFirewallRuleConfig extends cdktf.TerraformMetaArguments {
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

function appEngineFirewallRuleTimeoutsToTerraform(struct?: AppEngineFirewallRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class AppEngineFirewallRule extends cdktf.TerraformResource {

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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // source_range - computed: false, optional: false, required: true
  private _sourceRange: string;
  public get sourceRange() {
    return this.getStringAttribute('source_range');
  }
  public set sourceRange(value: string) {
    this._sourceRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRangeInput() {
    return this._sourceRange
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppEngineFirewallRuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AppEngineFirewallRuleTimeouts ) {
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
      priority: cdktf.numberToTerraform(this._priority),
      project: cdktf.stringToTerraform(this._project),
      source_range: cdktf.stringToTerraform(this._sourceRange),
      timeouts: appEngineFirewallRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
