// https://www.terraform.io/docs/providers/google/r/apigee_environment_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigeeEnvironmentIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_environment_iam_policy#env_id ApigeeEnvironmentIamPolicy#env_id}
  */
  readonly envId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_environment_iam_policy#id ApigeeEnvironmentIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_environment_iam_policy#org_id ApigeeEnvironmentIamPolicy#org_id}
  */
  readonly orgId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_environment_iam_policy#policy_data ApigeeEnvironmentIamPolicy#policy_data}
  */
  readonly policyData: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/apigee_environment_iam_policy google_apigee_environment_iam_policy}
*/
export class ApigeeEnvironmentIamPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apigee_environment_iam_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/apigee_environment_iam_policy google_apigee_environment_iam_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigeeEnvironmentIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ApigeeEnvironmentIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_environment_iam_policy',
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
    this._envId = config.envId;
    this._id = config.id;
    this._orgId = config.orgId;
    this._policyData = config.policyData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // env_id - computed: false, optional: false, required: true
  private _envId?: string; 
  public get envId() {
    return this.getStringAttribute('env_id');
  }
  public set envId(value: string) {
    this._envId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdInput() {
    return this._envId;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // policy_data - computed: false, optional: false, required: true
  private _policyData?: string; 
  public get policyData() {
    return this.getStringAttribute('policy_data');
  }
  public set policyData(value: string) {
    this._policyData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDataInput() {
    return this._policyData;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      env_id: cdktf.stringToTerraform(this._envId),
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
      policy_data: cdktf.stringToTerraform(this._policyData),
    };
  }
}
