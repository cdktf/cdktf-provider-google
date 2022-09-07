// https://www.terraform.io/docs/providers/google/r/app_engine_firewall_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppEngineFirewallRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The action to take if this rule matches. Possible values: ["UNSPECIFIED_ACTION", "ALLOW", "DENY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_firewall_rule#action AppEngineFirewallRule#action}
  */
  readonly action: string;
  /**
  * An optional string description of this rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_firewall_rule#description AppEngineFirewallRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_firewall_rule#id AppEngineFirewallRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A positive integer that defines the order of rule evaluation.
Rules with the lowest priority are evaluated first.

A default rule at priority Int32.MaxValue matches all IPv4 and
IPv6 traffic when no previous rule matches. Only the action of
this rule can be modified by the user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_firewall_rule#priority AppEngineFirewallRule#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_firewall_rule#project AppEngineFirewallRule#project}
  */
  readonly project?: string;
  /**
  * IP address or range, defined using CIDR notation, of requests that this rule applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_firewall_rule#source_range AppEngineFirewallRule#source_range}
  */
  readonly sourceRange: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_firewall_rule#timeouts AppEngineFirewallRule#timeouts}
  */
  readonly timeouts?: AppEngineFirewallRuleTimeouts;
}
export interface AppEngineFirewallRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_firewall_rule#create AppEngineFirewallRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_firewall_rule#delete AppEngineFirewallRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_firewall_rule#update AppEngineFirewallRule#update}
  */
  readonly update?: string;
}

export function appEngineFirewallRuleTimeoutsToTerraform(struct?: AppEngineFirewallRuleTimeoutsOutputReference | AppEngineFirewallRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class AppEngineFirewallRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineFirewallRuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineFirewallRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/app_engine_firewall_rule google_app_engine_firewall_rule}
*/
export class AppEngineFirewallRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_app_engine_firewall_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/app_engine_firewall_rule google_app_engine_firewall_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppEngineFirewallRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AppEngineFirewallRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_app_engine_firewall_rule',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._description = config.description;
    this._id = config.id;
    this._priority = config.priority;
    this._project = config.project;
    this._sourceRange = config.sourceRange;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // priority - computed: false, optional: true, required: false
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
    return this._priority;
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

  // source_range - computed: false, optional: false, required: true
  private _sourceRange?: string; 
  public get sourceRange() {
    return this.getStringAttribute('source_range');
  }
  public set sourceRange(value: string) {
    this._sourceRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRangeInput() {
    return this._sourceRange;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AppEngineFirewallRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppEngineFirewallRuleTimeouts) {
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
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      priority: cdktf.numberToTerraform(this._priority),
      project: cdktf.stringToTerraform(this._project),
      source_range: cdktf.stringToTerraform(this._sourceRange),
      timeouts: appEngineFirewallRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
