// https://www.terraform.io/docs/providers/google/d/access_approval_project_service_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleAccessApprovalProjectServiceAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/access_approval_project_service_account#project_id DataGoogleAccessApprovalProjectServiceAccount#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/access_approval_project_service_account google_access_approval_project_service_account}
*/
export class DataGoogleAccessApprovalProjectServiceAccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_access_approval_project_service_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/access_approval_project_service_account google_access_approval_project_service_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleAccessApprovalProjectServiceAccountConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleAccessApprovalProjectServiceAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_approval_project_service_account',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.21.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_email - computed: true, optional: false, required: false
  public get accountEmail() {
    return this.getStringAttribute('account_email');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }
}
