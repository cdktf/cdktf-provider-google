/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/apigee_environment_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigeeEnvironmentIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/apigee_environment_iam_policy#env_id ApigeeEnvironmentIamPolicy#env_id}
  */
  readonly envId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/apigee_environment_iam_policy#id ApigeeEnvironmentIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/apigee_environment_iam_policy#org_id ApigeeEnvironmentIamPolicy#org_id}
  */
  readonly orgId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/apigee_environment_iam_policy#policy_data ApigeeEnvironmentIamPolicy#policy_data}
  */
  readonly policyData: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/apigee_environment_iam_policy google_apigee_environment_iam_policy}
*/
export class ApigeeEnvironmentIamPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apigee_environment_iam_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApigeeEnvironmentIamPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApigeeEnvironmentIamPolicy to import
  * @param importFromId The id of the existing ApigeeEnvironmentIamPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/apigee_environment_iam_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApigeeEnvironmentIamPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_apigee_environment_iam_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/apigee_environment_iam_policy google_apigee_environment_iam_policy} Resource
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
        providerVersion: '6.7.0',
        providerVersionConstraint: '~> 6.0'
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      env_id: {
        value: cdktf.stringToHclTerraform(this._envId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_data: {
        value: cdktf.stringToHclTerraform(this._policyData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
