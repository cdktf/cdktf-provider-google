// https://www.terraform.io/docs/providers/google/r/iap_web_backend_service_iam_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IapWebBackendServiceIamPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly policyData: string;
  readonly project?: string;
  readonly webBackendService: string;
}

// Resource

export class IapWebBackendServiceIamPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IapWebBackendServiceIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iap_web_backend_service_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._policyData = config.policyData;
    this._project = config.project;
    this._webBackendService = config.webBackendService;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_data - computed: false, optional: false, required: true
  private _policyData: string;
  public get policyData() {
    return this.getStringAttribute('policy_data');
  }
  public set policyData(value: string) {
    this._policyData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDataInput() {
    return this._policyData
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
    return this._project
  }

  // web_backend_service - computed: false, optional: false, required: true
  private _webBackendService: string;
  public get webBackendService() {
    return this.getStringAttribute('web_backend_service');
  }
  public set webBackendService(value: string) {
    this._webBackendService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webBackendServiceInput() {
    return this._webBackendService
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_data: cdktf.stringToTerraform(this._policyData),
      project: cdktf.stringToTerraform(this._project),
      web_backend_service: cdktf.stringToTerraform(this._webBackendService),
    };
  }
}
