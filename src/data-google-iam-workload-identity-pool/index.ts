/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/iam_workload_identity_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleIamWorkloadIdentityPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/iam_workload_identity_pool#id DataGoogleIamWorkloadIdentityPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/iam_workload_identity_pool#project DataGoogleIamWorkloadIdentityPool#project}
  */
  readonly project?: string;
  /**
  * The ID to use for the pool, which becomes the final component of the resource name. This
  * value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
  * 'gcp-' is reserved for use by Google, and may not be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/iam_workload_identity_pool#workload_identity_pool_id DataGoogleIamWorkloadIdentityPool#workload_identity_pool_id}
  */
  readonly workloadIdentityPoolId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/iam_workload_identity_pool google_iam_workload_identity_pool}
*/
export class DataGoogleIamWorkloadIdentityPool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iam_workload_identity_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleIamWorkloadIdentityPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleIamWorkloadIdentityPool to import
  * @param importFromId The id of the existing DataGoogleIamWorkloadIdentityPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/iam_workload_identity_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleIamWorkloadIdentityPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_iam_workload_identity_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/iam_workload_identity_pool google_iam_workload_identity_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleIamWorkloadIdentityPoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleIamWorkloadIdentityPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iam_workload_identity_pool',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.49.1',
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
    this._project = config.project;
    this._workloadIdentityPoolId = config.workloadIdentityPoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // project - computed: false, optional: true, required: false
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // workload_identity_pool_id - computed: false, optional: false, required: true
  private _workloadIdentityPoolId?: string; 
  public get workloadIdentityPoolId() {
    return this.getStringAttribute('workload_identity_pool_id');
  }
  public set workloadIdentityPoolId(value: string) {
    this._workloadIdentityPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityPoolIdInput() {
    return this._workloadIdentityPoolId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      workload_identity_pool_id: cdktf.stringToTerraform(this._workloadIdentityPoolId),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workload_identity_pool_id: {
        value: cdktf.stringToHclTerraform(this._workloadIdentityPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
