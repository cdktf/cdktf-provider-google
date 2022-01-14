// https://www.terraform.io/docs/providers/google/d/iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * audit_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#audit_config DataGoogleIamPolicy#audit_config}
  */
  readonly auditConfig?: DataGoogleIamPolicyAuditConfig[];
  /**
  * binding block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#binding DataGoogleIamPolicy#binding}
  */
  readonly binding?: DataGoogleIamPolicyBinding[];
}
export interface DataGoogleIamPolicyAuditConfigAuditLogConfigs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#exempted_members DataGoogleIamPolicy#exempted_members}
  */
  readonly exemptedMembers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#log_type DataGoogleIamPolicy#log_type}
  */
  readonly logType: string;
}

export function dataGoogleIamPolicyAuditConfigAuditLogConfigsToTerraform(struct?: DataGoogleIamPolicyAuditConfigAuditLogConfigs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exempted_members: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exemptedMembers),
    log_type: cdktf.stringToTerraform(struct!.logType),
  }
}

export interface DataGoogleIamPolicyAuditConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#service DataGoogleIamPolicy#service}
  */
  readonly service: string;
  /**
  * audit_log_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#audit_log_configs DataGoogleIamPolicy#audit_log_configs}
  */
  readonly auditLogConfigs: DataGoogleIamPolicyAuditConfigAuditLogConfigs[];
}

export function dataGoogleIamPolicyAuditConfigToTerraform(struct?: DataGoogleIamPolicyAuditConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
    audit_log_configs: cdktf.listMapper(dataGoogleIamPolicyAuditConfigAuditLogConfigsToTerraform)(struct!.auditLogConfigs),
  }
}

export interface DataGoogleIamPolicyBindingCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#description DataGoogleIamPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#expression DataGoogleIamPolicy#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#title DataGoogleIamPolicy#title}
  */
  readonly title: string;
}

export function dataGoogleIamPolicyBindingConditionToTerraform(struct?: DataGoogleIamPolicyBindingConditionOutputReference | DataGoogleIamPolicyBindingCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}

export class DataGoogleIamPolicyBindingConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataGoogleIamPolicyBindingCondition | undefined {
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
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleIamPolicyBindingCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._expression = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._expression = value.expression;
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

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DataGoogleIamPolicyBinding {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#members DataGoogleIamPolicy#members}
  */
  readonly members: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#role DataGoogleIamPolicy#role}
  */
  readonly role: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#condition DataGoogleIamPolicy#condition}
  */
  readonly condition?: DataGoogleIamPolicyBindingCondition;
}

export function dataGoogleIamPolicyBindingToTerraform(struct?: DataGoogleIamPolicyBinding): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    members: cdktf.listMapper(cdktf.stringToTerraform)(struct!.members),
    role: cdktf.stringToTerraform(struct!.role),
    condition: dataGoogleIamPolicyBindingConditionToTerraform(struct!.condition),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/iam_policy google_iam_policy}
*/
export class DataGoogleIamPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_iam_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/iam_policy google_iam_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleIamPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGoogleIamPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._auditConfig = config.auditConfig;
    this._binding = config.binding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_data - computed: true, optional: false, required: false
  public get policyData() {
    return this.getStringAttribute('policy_data');
  }

  // audit_config - computed: false, optional: true, required: false
  private _auditConfig?: DataGoogleIamPolicyAuditConfig[]; 
  public get auditConfig() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('audit_config') as any;
  }
  public set auditConfig(value: DataGoogleIamPolicyAuditConfig[]) {
    this._auditConfig = value;
  }
  public resetAuditConfig() {
    this._auditConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditConfigInput() {
    return this._auditConfig;
  }

  // binding - computed: false, optional: true, required: false
  private _binding?: DataGoogleIamPolicyBinding[]; 
  public get binding() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('binding') as any;
  }
  public set binding(value: DataGoogleIamPolicyBinding[]) {
    this._binding = value;
  }
  public resetBinding() {
    this._binding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingInput() {
    return this._binding;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_config: cdktf.listMapper(dataGoogleIamPolicyAuditConfigToTerraform)(this._auditConfig),
      binding: cdktf.listMapper(dataGoogleIamPolicyBindingToTerraform)(this._binding),
    };
  }
}
