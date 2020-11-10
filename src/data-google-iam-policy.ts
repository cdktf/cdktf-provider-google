// https://www.terraform.io/docs/providers/google/r/data_google_iam_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGoogleIamPolicyConfig extends TerraformMetaArguments {
  /** audit_config block */
  readonly auditConfig?: DataGoogleIamPolicyAuditConfig[];
  /** binding block */
  readonly binding?: DataGoogleIamPolicyBinding[];
}
export interface DataGoogleIamPolicyAuditConfigAuditLogConfigs {
  readonly exemptedMembers?: string[];
  readonly logType: string;
}
export interface DataGoogleIamPolicyAuditConfig {
  readonly service: string;
  /** audit_log_configs block */
  readonly auditLogConfigs: DataGoogleIamPolicyAuditConfigAuditLogConfigs[];
}
export interface DataGoogleIamPolicyBindingCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}
export interface DataGoogleIamPolicyBinding {
  readonly members: string[];
  readonly role: string;
  /** condition block */
  readonly condition?: DataGoogleIamPolicyBindingCondition[];
}

// Resource

export class DataGoogleIamPolicy extends TerraformDataSource {

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
      audit_config: this._auditConfig,
      binding: this._binding,
    };
  }
}
