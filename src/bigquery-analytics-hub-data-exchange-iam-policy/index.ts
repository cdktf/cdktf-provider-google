// https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigqueryAnalyticsHubDataExchangeIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_policy#data_exchange_id BigqueryAnalyticsHubDataExchangeIamPolicy#data_exchange_id}
  */
  readonly dataExchangeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_policy#id BigqueryAnalyticsHubDataExchangeIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_policy#location BigqueryAnalyticsHubDataExchangeIamPolicy#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_policy#policy_data BigqueryAnalyticsHubDataExchangeIamPolicy#policy_data}
  */
  readonly policyData: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_policy#project BigqueryAnalyticsHubDataExchangeIamPolicy#project}
  */
  readonly project?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_policy google_bigquery_analytics_hub_data_exchange_iam_policy}
*/
export class BigqueryAnalyticsHubDataExchangeIamPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_analytics_hub_data_exchange_iam_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BigqueryAnalyticsHubDataExchangeIamPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BigqueryAnalyticsHubDataExchangeIamPolicy to import
  * @param importFromId The id of the existing BigqueryAnalyticsHubDataExchangeIamPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BigqueryAnalyticsHubDataExchangeIamPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_bigquery_analytics_hub_data_exchange_iam_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_policy google_bigquery_analytics_hub_data_exchange_iam_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigqueryAnalyticsHubDataExchangeIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: BigqueryAnalyticsHubDataExchangeIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_analytics_hub_data_exchange_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.5.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataExchangeId = config.dataExchangeId;
    this._id = config.id;
    this._location = config.location;
    this._policyData = config.policyData;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_exchange_id - computed: false, optional: false, required: true
  private _dataExchangeId?: string; 
  public get dataExchangeId() {
    return this.getStringAttribute('data_exchange_id');
  }
  public set dataExchangeId(value: string) {
    this._dataExchangeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExchangeIdInput() {
    return this._dataExchangeId;
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

  // location - computed: true, optional: true, required: false
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
      data_exchange_id: cdktf.stringToTerraform(this._dataExchangeId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      policy_data: cdktf.stringToTerraform(this._policyData),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
