/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/gemini_repository_group_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GeminiRepositoryGroupIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/gemini_repository_group_iam_policy#code_repository_index GeminiRepositoryGroupIamPolicy#code_repository_index}
  */
  readonly codeRepositoryIndex: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/gemini_repository_group_iam_policy#id GeminiRepositoryGroupIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/gemini_repository_group_iam_policy#location GeminiRepositoryGroupIamPolicy#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/gemini_repository_group_iam_policy#policy_data GeminiRepositoryGroupIamPolicy#policy_data}
  */
  readonly policyData: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/gemini_repository_group_iam_policy#project GeminiRepositoryGroupIamPolicy#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/gemini_repository_group_iam_policy#repository_group_id GeminiRepositoryGroupIamPolicy#repository_group_id}
  */
  readonly repositoryGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/gemini_repository_group_iam_policy google_gemini_repository_group_iam_policy}
*/
export class GeminiRepositoryGroupIamPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gemini_repository_group_iam_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GeminiRepositoryGroupIamPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GeminiRepositoryGroupIamPolicy to import
  * @param importFromId The id of the existing GeminiRepositoryGroupIamPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/gemini_repository_group_iam_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GeminiRepositoryGroupIamPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_gemini_repository_group_iam_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/gemini_repository_group_iam_policy google_gemini_repository_group_iam_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GeminiRepositoryGroupIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GeminiRepositoryGroupIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gemini_repository_group_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.39.0',
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
    this._codeRepositoryIndex = config.codeRepositoryIndex;
    this._id = config.id;
    this._location = config.location;
    this._policyData = config.policyData;
    this._project = config.project;
    this._repositoryGroupId = config.repositoryGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // code_repository_index - computed: false, optional: false, required: true
  private _codeRepositoryIndex?: string; 
  public get codeRepositoryIndex() {
    return this.getStringAttribute('code_repository_index');
  }
  public set codeRepositoryIndex(value: string) {
    this._codeRepositoryIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepositoryIndexInput() {
    return this._codeRepositoryIndex;
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

  // repository_group_id - computed: false, optional: false, required: true
  private _repositoryGroupId?: string; 
  public get repositoryGroupId() {
    return this.getStringAttribute('repository_group_id');
  }
  public set repositoryGroupId(value: string) {
    this._repositoryGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryGroupIdInput() {
    return this._repositoryGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      code_repository_index: cdktf.stringToTerraform(this._codeRepositoryIndex),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      policy_data: cdktf.stringToTerraform(this._policyData),
      project: cdktf.stringToTerraform(this._project),
      repository_group_id: cdktf.stringToTerraform(this._repositoryGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      code_repository_index: {
        value: cdktf.stringToHclTerraform(this._codeRepositoryIndex),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_group_id: {
        value: cdktf.stringToHclTerraform(this._repositoryGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
