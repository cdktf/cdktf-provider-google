// https://www.terraform.io/docs/providers/google/r/org_policy_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgPolicyPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Immutable. The resource name of the Policy. Must be one of the following forms, where constraint_name is the name of the constraint which this Policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy#name OrgPolicyPolicy#name}
  */
  readonly name: string;
  /**
  * The parent of the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy#parent OrgPolicyPolicy#parent}
  */
  readonly parent: string;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy#spec OrgPolicyPolicy#spec}
  */
  readonly spec?: OrgPolicyPolicySpec;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy#timeouts OrgPolicyPolicy#timeouts}
  */
  readonly timeouts?: OrgPolicyPolicyTimeouts;
}
export interface OrgPolicyPolicySpecRulesCondition {
  /**
  * Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy#description OrgPolicyPolicy#description}
  */
  readonly description?: string;
  /**
  * Textual representation of an expression in Common Expression Language syntax.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy#expression OrgPolicyPolicy#expression}
  */
  readonly expression?: string;
  /**
  * Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy#location OrgPolicyPolicy#location}
  */
  readonly location?: string;
  /**
  * Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy#title OrgPolicyPolicy#title}
  */
  readonly title?: string;
}

export function orgPolicyPolicySpecRulesConditionToTerraform(struct?: OrgPolicyPolicySpecRulesConditionOutputReference | OrgPolicyPolicySpecRulesCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    location: cdktf.stringToTerraform(struct!.location),
    title: cdktf.stringToTerraform(struct!.title),
  }
}

export class OrgPolicyPolicySpecRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): OrgPolicyPolicySpecRulesCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgPolicyPolicySpecRulesCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._expression = undefined;
      this._location = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._expression = value.expression;
      this._location = value.location;
      this._title = value.title;
    }
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

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface OrgPolicyPolicySpecRulesValues {
  /**
  * List of values allowed at this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy#allowed_values OrgPolicyPolicy#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * List of values denied at this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy#denied_values OrgPolicyPolicy#denied_values}
  */
  readonly deniedValues?: string[];
}

export function orgPolicyPolicySpecRulesValuesToTerraform(struct?: OrgPolicyPolicySpecRulesValuesOutputReference | OrgPolicyPolicySpecRulesValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedValues),
    denied_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.deniedValues),
  }
}

export class OrgPolicyPolicySpecRulesValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): OrgPolicyPolicySpecRulesValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._deniedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedValues = this._deniedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgPolicyPolicySpecRulesValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedValues = undefined;
      this._deniedValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedValues = value.allowedValues;
      this._deniedValues = value.deniedValues;
    }
  }

  // allowed_values - computed: false, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // denied_values - computed: false, optional: true, required: false
  private _deniedValues?: string[]; 
  public get deniedValues() {
    return this.getListAttribute('denied_values');
  }
  public set deniedValues(value: string[]) {
    this._deniedValues = value;
  }
  public resetDeniedValues() {
    this._deniedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedValuesInput() {
    return this._deniedValues;
  }
}
export interface OrgPolicyPolicySpecRules {
  /**
  * Setting this to true means that all values are allowed. This field can be set only in Policies for list constraints.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy#allow_all OrgPolicyPolicy#allow_all}
  */
  readonly allowAll?: string;
  /**
  * Setting this to true means that all values are denied. This field can be set only in Policies for list constraints.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy#deny_all OrgPolicyPolicy#deny_all}
  */
  readonly denyAll?: string;
  /**
  * If `true`, then the `Policy` is enforced. If `false`, then any configuration is acceptable. This field can be set only in Policies for boolean constraints.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy#enforce OrgPolicyPolicy#enforce}
  */
  readonly enforce?: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy#condition OrgPolicyPolicy#condition}
  */
  readonly condition?: OrgPolicyPolicySpecRulesCondition;
  /**
  * values block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy#values OrgPolicyPolicy#values}
  */
  readonly values?: OrgPolicyPolicySpecRulesValues;
}

export function orgPolicyPolicySpecRulesToTerraform(struct?: OrgPolicyPolicySpecRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_all: cdktf.stringToTerraform(struct!.allowAll),
    deny_all: cdktf.stringToTerraform(struct!.denyAll),
    enforce: cdktf.stringToTerraform(struct!.enforce),
    condition: orgPolicyPolicySpecRulesConditionToTerraform(struct!.condition),
    values: orgPolicyPolicySpecRulesValuesToTerraform(struct!.values),
  }
}

export interface OrgPolicyPolicySpec {
  /**
  * Determines the inheritance behavior for this `Policy`. If `inherit_from_parent` is true, PolicyRules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this Policy becomes the new root for evaluation. This field can be set only for Policies which configure list constraints.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy#inherit_from_parent OrgPolicyPolicy#inherit_from_parent}
  */
  readonly inheritFromParent?: boolean | cdktf.IResolvable;
  /**
  * Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific `Constraint` at this resource. This field can be set in policies for either list or boolean constraints. If set, `rules` must be empty and `inherit_from_parent` must be set to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy#reset OrgPolicyPolicy#reset}
  */
  readonly reset?: boolean | cdktf.IResolvable;
  /**
  * rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy#rules OrgPolicyPolicy#rules}
  */
  readonly rules?: OrgPolicyPolicySpecRules[];
}

export function orgPolicyPolicySpecToTerraform(struct?: OrgPolicyPolicySpecOutputReference | OrgPolicyPolicySpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inherit_from_parent: cdktf.booleanToTerraform(struct!.inheritFromParent),
    reset: cdktf.booleanToTerraform(struct!.reset),
    rules: cdktf.listMapper(orgPolicyPolicySpecRulesToTerraform)(struct!.rules),
  }
}

export class OrgPolicyPolicySpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): OrgPolicyPolicySpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inheritFromParent !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritFromParent = this._inheritFromParent;
    }
    if (this._reset !== undefined) {
      hasAnyValues = true;
      internalValueResult.reset = this._reset;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgPolicyPolicySpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inheritFromParent = undefined;
      this._reset = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inheritFromParent = value.inheritFromParent;
      this._reset = value.reset;
      this._rules = value.rules;
    }
  }

  // inherit_from_parent - computed: false, optional: true, required: false
  private _inheritFromParent?: boolean | cdktf.IResolvable; 
  public get inheritFromParent() {
    return this.getBooleanAttribute('inherit_from_parent') as any;
  }
  public set inheritFromParent(value: boolean | cdktf.IResolvable) {
    this._inheritFromParent = value;
  }
  public resetInheritFromParent() {
    this._inheritFromParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritFromParentInput() {
    return this._inheritFromParent;
  }

  // reset - computed: false, optional: true, required: false
  private _reset?: boolean | cdktf.IResolvable; 
  public get reset() {
    return this.getBooleanAttribute('reset') as any;
  }
  public set reset(value: boolean | cdktf.IResolvable) {
    this._reset = value;
  }
  public resetReset() {
    this._reset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetInput() {
    return this._reset;
  }

  // rules - computed: false, optional: true, required: false
  private _rules?: OrgPolicyPolicySpecRules[]; 
  public get rules() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rules') as any;
  }
  public set rules(value: OrgPolicyPolicySpecRules[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface OrgPolicyPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy#create OrgPolicyPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy#delete OrgPolicyPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy#update OrgPolicyPolicy#update}
  */
  readonly update?: string;
}

export function orgPolicyPolicyTimeoutsToTerraform(struct?: OrgPolicyPolicyTimeoutsOutputReference | OrgPolicyPolicyTimeouts): any {
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

export class OrgPolicyPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): OrgPolicyPolicyTimeouts | undefined {
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

  public set internalValue(value: OrgPolicyPolicyTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy google_org_policy_policy}
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
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/org_policy_policy google_org_policy_policy} Resource
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
    this._spec.internalValue = config.spec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new OrgPolicyPolicySpecOutputReference(this as any, "spec", true);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: OrgPolicyPolicySpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OrgPolicyPolicyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OrgPolicyPolicyTimeouts) {
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
      name: cdktf.stringToTerraform(this._name),
      parent: cdktf.stringToTerraform(this._parent),
      spec: orgPolicyPolicySpecToTerraform(this._spec.internalValue),
      timeouts: orgPolicyPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
