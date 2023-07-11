// https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/scc_source_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SccSourceIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/scc_source_iam_policy#id SccSourceIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/scc_source_iam_policy#organization SccSourceIamPolicy#organization}
  */
  readonly organization: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/scc_source_iam_policy#policy_data SccSourceIamPolicy#policy_data}
  */
  readonly policyData: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/scc_source_iam_policy#source SccSourceIamPolicy#source}
  */
  readonly source: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/scc_source_iam_policy google_scc_source_iam_policy}
*/
export class SccSourceIamPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_scc_source_iam_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/scc_source_iam_policy google_scc_source_iam_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SccSourceIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SccSourceIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_scc_source_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.73.0',
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
    this._id = config.id;
    this._organization = config.organization;
    this._policyData = config.policyData;
    this._source = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
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

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      organization: cdktf.stringToTerraform(this._organization),
      policy_data: cdktf.stringToTerraform(this._policyData),
      source: cdktf.stringToTerraform(this._source),
    };
  }
}
