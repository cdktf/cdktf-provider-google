/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/data-sources/iap_web_region_backend_service_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleIapWebRegionBackendServiceIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/data-sources/iap_web_region_backend_service_iam_policy#id DataGoogleIapWebRegionBackendServiceIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/data-sources/iap_web_region_backend_service_iam_policy#project DataGoogleIapWebRegionBackendServiceIamPolicy#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/data-sources/iap_web_region_backend_service_iam_policy#region DataGoogleIapWebRegionBackendServiceIamPolicy#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/data-sources/iap_web_region_backend_service_iam_policy#web_region_backend_service DataGoogleIapWebRegionBackendServiceIamPolicy#web_region_backend_service}
  */
  readonly webRegionBackendService: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/data-sources/iap_web_region_backend_service_iam_policy google_iap_web_region_backend_service_iam_policy}
*/
export class DataGoogleIapWebRegionBackendServiceIamPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iap_web_region_backend_service_iam_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleIapWebRegionBackendServiceIamPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleIapWebRegionBackendServiceIamPolicy to import
  * @param importFromId The id of the existing DataGoogleIapWebRegionBackendServiceIamPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/data-sources/iap_web_region_backend_service_iam_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleIapWebRegionBackendServiceIamPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_iap_web_region_backend_service_iam_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/data-sources/iap_web_region_backend_service_iam_policy google_iap_web_region_backend_service_iam_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleIapWebRegionBackendServiceIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleIapWebRegionBackendServiceIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iap_web_region_backend_service_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.3.0',
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
    this._id = config.id;
    this._project = config.project;
    this._region = config.region;
    this._webRegionBackendService = config.webRegionBackendService;
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

  // policy_data - computed: true, optional: false, required: false
  public get policyData() {
    return this.getStringAttribute('policy_data');
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // web_region_backend_service - computed: false, optional: false, required: true
  private _webRegionBackendService?: string; 
  public get webRegionBackendService() {
    return this.getStringAttribute('web_region_backend_service');
  }
  public set webRegionBackendService(value: string) {
    this._webRegionBackendService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webRegionBackendServiceInput() {
    return this._webRegionBackendService;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      web_region_backend_service: cdktf.stringToTerraform(this._webRegionBackendService),
    };
  }
}
