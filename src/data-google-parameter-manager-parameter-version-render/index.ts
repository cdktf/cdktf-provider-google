/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/parameter_manager_parameter_version_render
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleParameterManagerParameterVersionRenderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/parameter_manager_parameter_version_render#id DataGoogleParameterManagerParameterVersionRender#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/parameter_manager_parameter_version_render#parameter DataGoogleParameterManagerParameterVersionRender#parameter}
  */
  readonly parameter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/parameter_manager_parameter_version_render#parameter_version_id DataGoogleParameterManagerParameterVersionRender#parameter_version_id}
  */
  readonly parameterVersionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/parameter_manager_parameter_version_render#project DataGoogleParameterManagerParameterVersionRender#project}
  */
  readonly project?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/parameter_manager_parameter_version_render google_parameter_manager_parameter_version_render}
*/
export class DataGoogleParameterManagerParameterVersionRender extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_parameter_manager_parameter_version_render";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleParameterManagerParameterVersionRender resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleParameterManagerParameterVersionRender to import
  * @param importFromId The id of the existing DataGoogleParameterManagerParameterVersionRender that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/parameter_manager_parameter_version_render#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleParameterManagerParameterVersionRender to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_parameter_manager_parameter_version_render", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/parameter_manager_parameter_version_render google_parameter_manager_parameter_version_render} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleParameterManagerParameterVersionRenderConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleParameterManagerParameterVersionRenderConfig) {
    super(scope, id, {
      terraformResourceType: 'google_parameter_manager_parameter_version_render',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.28.0',
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
    this._id = config.id;
    this._parameter = config.parameter;
    this._parameterVersionId = config.parameterVersionId;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parameter - computed: false, optional: false, required: true
  private _parameter?: string; 
  public get parameter() {
    return this.getStringAttribute('parameter');
  }
  public set parameter(value: string) {
    this._parameter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter;
  }

  // parameter_data - computed: true, optional: false, required: false
  public get parameterData() {
    return this.getStringAttribute('parameter_data');
  }

  // parameter_version_id - computed: false, optional: false, required: true
  private _parameterVersionId?: string; 
  public get parameterVersionId() {
    return this.getStringAttribute('parameter_version_id');
  }
  public set parameterVersionId(value: string) {
    this._parameterVersionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterVersionIdInput() {
    return this._parameterVersionId;
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

  // rendered_parameter_data - computed: true, optional: false, required: false
  public get renderedParameterData() {
    return this.getStringAttribute('rendered_parameter_data');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameter: cdktf.stringToTerraform(this._parameter),
      parameter_version_id: cdktf.stringToTerraform(this._parameterVersionId),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameter: {
        value: cdktf.stringToHclTerraform(this._parameter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameter_version_id: {
        value: cdktf.stringToHclTerraform(this._parameterVersionId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
