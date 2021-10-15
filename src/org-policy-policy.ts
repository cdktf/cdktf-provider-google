// https://www.terraform.io/docs/providers/google/r/org_policy_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgPolicyPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Immutable. The resource name of the Policy. Must be one of the following forms, where constraint_name is the name of the constraint which this Policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy.html#name OrgPolicyPolicy#name}
  */
  readonly name: string;
  /**
  * The parent of the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy.html#parent OrgPolicyPolicy#parent}
  */
  readonly parent: string;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy.html#spec OrgPolicyPolicy#spec}
  */
  readonly spec?: OrgPolicyPolicySpec[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy.html#timeouts OrgPolicyPolicy#timeouts}
  */
  readonly timeouts?: OrgPolicyPolicyTimeouts;
}
export interface OrgPolicyPolicySpecRulesCondition {
  /**
  * Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy.html#description OrgPolicyPolicy#description}
  */
  readonly description?: string;
  /**
  * Textual representation of an expression in Common Expression Language syntax.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy.html#expression OrgPolicyPolicy#expression}
  */
  readonly expression?: string;
  /**
  * Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy.html#location OrgPolicyPolicy#location}
  */
  readonly location?: string;
  /**
  * Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy.html#title OrgPolicyPolicy#title}
  */
  readonly title?: string;
}

function orgPolicyPolicySpecRulesConditionToTerraform(struct?: OrgPolicyPolicySpecRulesCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    location: cdktf.stringToTerraform(struct!.location),
    title: cdktf.stringToTerraform(struct!.title),
  }
}

export interface OrgPolicyPolicySpecRulesValues {
  /**
  * List of values allowed at this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy.html#allowed_values OrgPolicyPolicy#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * List of values denied at this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy.html#denied_values OrgPolicyPolicy#denied_values}
  */
  readonly deniedValues?: string[];
}

function orgPolicyPolicySpecRulesValuesToTerraform(struct?: OrgPolicyPolicySpecRulesValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedValues),
    denied_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.deniedValues),
  }
}

export interface OrgPolicyPolicySpecRules {
  /**
  * Setting this to true means that all values are allowed. This field can be set only in Policies for list constraints.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy.html#allow_all OrgPolicyPolicy#allow_all}
  */
  readonly allowAll?: string;
  /**
  * Setting this to true means that all values are denied. This field can be set only in Policies for list constraints.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy.html#deny_all OrgPolicyPolicy#deny_all}
  */
  readonly denyAll?: string;
  /**
  * If `true`, then the `Policy` is enforced. If `false`, then any configuration is acceptable. This field can be set only in Policies for boolean constraints.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy.html#enforce OrgPolicyPolicy#enforce}
  */
  readonly enforce?: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy.html#condition OrgPolicyPolicy#condition}
  */
  readonly condition?: OrgPolicyPolicySpecRulesCondition[];
  /**
  * values block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy.html#values OrgPolicyPolicy#values}
  */
  readonly values?: OrgPolicyPolicySpecRulesValues[];
}

function orgPolicyPolicySpecRulesToTerraform(struct?: OrgPolicyPolicySpecRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_all: cdktf.stringToTerraform(struct!.allowAll),
    deny_all: cdktf.stringToTerraform(struct!.denyAll),
    enforce: cdktf.stringToTerraform(struct!.enforce),
    condition: cdktf.listMapper(orgPolicyPolicySpecRulesConditionToTerraform)(struct!.condition),
    values: cdktf.listMapper(orgPolicyPolicySpecRulesValuesToTerraform)(struct!.values),
  }
}

export interface OrgPolicyPolicySpec {
  /**
  * Determines the inheritance behavior for this `Policy`. If `inherit_from_parent` is true, PolicyRules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this Policy becomes the new root for evaluation. This field can be set only for Policies which configure list constraints.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy.html#inherit_from_parent OrgPolicyPolicy#inherit_from_parent}
  */
  readonly inheritFromParent?: boolean | cdktf.IResolvable;
  /**
  * Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific `Constraint` at this resource. This field can be set in policies for either list or boolean constraints. If set, `rules` must be empty and `inherit_from_parent` must be set to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy.html#reset OrgPolicyPolicy#reset}
  */
  readonly reset?: boolean | cdktf.IResolvable;
  /**
  * rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy.html#rules OrgPolicyPolicy#rules}
  */
  readonly rules?: OrgPolicyPolicySpecRules[];
}

function orgPolicyPolicySpecToTerraform(struct?: OrgPolicyPolicySpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    inherit_from_parent: cdktf.booleanToTerraform(struct!.inheritFromParent),
    reset: cdktf.booleanToTerraform(struct!.reset),
    rules: cdktf.listMapper(orgPolicyPolicySpecRulesToTerraform)(struct!.rules),
  }
}

export interface OrgPolicyPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy.html#create OrgPolicyPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy.html#delete OrgPolicyPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy.html#update OrgPolicyPolicy#update}
  */
  readonly update?: string;
}

function orgPolicyPolicyTimeoutsToTerraform(struct?: OrgPolicyPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy.html google_org_policy_policy}
*/
export class OrgPolicyPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_org_policy_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy.html google_org_policy_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgPolicyPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: OrgPolicyPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_org_policy_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._parent = config.parent;
    this._spec = config.spec;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // parent - computed: false, optional: false, required: true
  private _parent: string;
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: OrgPolicyPolicySpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: OrgPolicyPolicySpec[] ) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: OrgPolicyPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: OrgPolicyPolicyTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      parent: cdktf.stringToTerraform(this._parent),
      spec: cdktf.listMapper(orgPolicyPolicySpecToTerraform)(this._spec),
      timeouts: orgPolicyPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
