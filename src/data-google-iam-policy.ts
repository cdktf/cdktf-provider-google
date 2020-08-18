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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // policy_data - computed: true, optional: false, required: true
  public get policyData() {
    return this.getStringAttribute('policy_data');
  }

  // audit_config - computed: false, optional: true, required: false
  private _auditConfig?: DataGoogleIamPolicyAuditConfig[];
  public get auditConfig() {
    return this._auditConfig;
  }
  public set auditConfig(value: DataGoogleIamPolicyAuditConfig[] | undefined) {
    this._auditConfig = value;
  }

  // binding - computed: false, optional: true, required: false
  private _binding?: DataGoogleIamPolicyBinding[];
  public get binding() {
    return this._binding;
  }
  public set binding(value: DataGoogleIamPolicyBinding[] | undefined) {
    this._binding = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_config: this._auditConfig,
      binding: this._binding,
    };
  }
}
