// https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BinaryAuthorizationAttestorIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_policy#attestor BinaryAuthorizationAttestorIamPolicy#attestor}
  */
  readonly attestor: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_policy#id BinaryAuthorizationAttestorIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_policy#policy_data BinaryAuthorizationAttestorIamPolicy#policy_data}
  */
  readonly policyData: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_policy#project BinaryAuthorizationAttestorIamPolicy#project}
  */
  readonly project?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_policy google_binary_authorization_attestor_iam_policy}
*/
export class BinaryAuthorizationAttestorIamPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_binary_authorization_attestor_iam_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_policy google_binary_authorization_attestor_iam_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BinaryAuthorizationAttestorIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: BinaryAuthorizationAttestorIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_binary_authorization_attestor_iam_policy',
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
    this._attestor = config.attestor;
    this._id = config.id;
    this._policyData = config.policyData;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attestor - computed: false, optional: false, required: true
  private _attestor?: string; 
  public get attestor() {
    return this.getStringAttribute('attestor');
  }
  public set attestor(value: string) {
    this._attestor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attestorInput() {
    return this._attestor;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attestor: cdktf.stringToTerraform(this._attestor),
      id: cdktf.stringToTerraform(this._id),
      policy_data: cdktf.stringToTerraform(this._policyData),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
