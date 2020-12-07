// https://www.terraform.io/docs/providers/google/r/data_google_iam_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /** audit_config block */
  readonly auditConfig?: DataGoogleIamPolicyAuditConfig[];
  /** binding block */
  readonly binding?: DataGoogleIamPolicyBinding[];
}
export interface DataGoogleIamPolicyAuditConfigAuditLogConfigs {
  readonly exemptedMembers?: string[];
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
  readonly service: string;
  /** audit_log_configs block */
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
  readonly description?: string;
  readonly expression: string;
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
  readonly members: string[];
  readonly role: string;
  /** condition block */
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


// Resource

export class DataGoogleIamPolicy extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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
