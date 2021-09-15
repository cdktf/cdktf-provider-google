// https://www.terraform.io/docs/providers/google/d/iam_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * audit_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy.html#audit_config DataGoogleIamPolicy#audit_config}
  */
  readonly auditConfig?: DataGoogleIamPolicyAuditConfig[];
  /**
  * binding block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy.html#binding DataGoogleIamPolicy#binding}
  */
  readonly binding?: DataGoogleIamPolicyBinding[];
}
export interface DataGoogleIamPolicyAuditConfigAuditLogConfigs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy.html#exempted_members DataGoogleIamPolicy#exempted_members}
  */
  readonly exemptedMembers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy.html#log_type DataGoogleIamPolicy#log_type}
  */
  readonly logType: string;
}

function dataGoogleIamPolicyAuditConfigAuditLogConfigsToTerraform(struct?: DataGoogleIamPolicyAuditConfigAuditLogConfigs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exempted_members: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exemptedMembers),
    log_type: cdktf.stringToTerraform(struct!.logType),
  }
}

export interface DataGoogleIamPolicyAuditConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy.html#service DataGoogleIamPolicy#service}
  */
  readonly service: string;
  /**
  * audit_log_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy.html#audit_log_configs DataGoogleIamPolicy#audit_log_configs}
  */
  readonly auditLogConfigs: DataGoogleIamPolicyAuditConfigAuditLogConfigs[];
}

function dataGoogleIamPolicyAuditConfigToTerraform(struct?: DataGoogleIamPolicyAuditConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    service: cdktf.stringToTerraform(struct!.service),
    audit_log_configs: cdktf.listMapper(dataGoogleIamPolicyAuditConfigAuditLogConfigsToTerraform)(struct!.auditLogConfigs),
  }
}

export interface DataGoogleIamPolicyBindingCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy.html#description DataGoogleIamPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy.html#expression DataGoogleIamPolicy#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy.html#title DataGoogleIamPolicy#title}
  */
  readonly title: string;
}

function dataGoogleIamPolicyBindingConditionToTerraform(struct?: DataGoogleIamPolicyBindingCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}

export interface DataGoogleIamPolicyBinding {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy.html#members DataGoogleIamPolicy#members}
  */
  readonly members: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy.html#role DataGoogleIamPolicy#role}
  */
  readonly role: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy.html#condition DataGoogleIamPolicy#condition}
  */
  readonly condition?: DataGoogleIamPolicyBindingCondition[];
}

function dataGoogleIamPolicyBindingToTerraform(struct?: DataGoogleIamPolicyBinding): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    members: cdktf.listMapper(cdktf.stringToTerraform)(struct!.members),
    role: cdktf.stringToTerraform(struct!.role),
    condition: cdktf.listMapper(dataGoogleIamPolicyBindingConditionToTerraform)(struct!.condition),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/iam_policy.html google_iam_policy}
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
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/iam_policy.html google_iam_policy} Data Source
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
    return this.interpolationForAttribute('audit_config') as any;
  }
  public set auditConfig(value: DataGoogleIamPolicyAuditConfig[] ) {
    this._auditConfig = value;
  }
  public resetAuditConfig() {
    this._auditConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditConfigInput() {
    return this._auditConfig
  }

  // binding - computed: false, optional: true, required: false
  private _binding?: DataGoogleIamPolicyBinding[];
  public get binding() {
    return this.interpolationForAttribute('binding') as any;
  }
  public set binding(value: DataGoogleIamPolicyBinding[] ) {
    this._binding = value;
  }
  public resetBinding() {
    this._binding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingInput() {
    return this._binding
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
