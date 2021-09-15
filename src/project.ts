// https://www.terraform.io/docs/providers/google/r/project.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Create the 'default' network automatically.  Default true. If set to false, the default network will be deleted.  Note that, for quota purposes, you will still need to have 1 network slot available to create the project successfully, even if you set auto_create_network to false, since the network will exist momentarily.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project.html#auto_create_network Project#auto_create_network}
  */
  readonly autoCreateNetwork?: boolean | cdktf.IResolvable;
  /**
  * The alphanumeric ID of the billing account this project belongs to. The user or service account performing this operation with Terraform must have Billing Account Administrator privileges (roles/billing.admin) in the organization. See Google Cloud Billing API Access Control for more details.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project.html#billing_account Project#billing_account}
  */
  readonly billingAccount?: string;
  /**
  * The numeric ID of the folder this project should be created under. Only one of org_id or folder_id may be specified. If the folder_id is specified, then the project is created under the specified folder. Changing this forces the project to be migrated to the newly specified folder.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project.html#folder_id Project#folder_id}
  */
  readonly folderId?: string;
  /**
  * A set of key/value label pairs to assign to the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project.html#labels Project#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The display name of the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project.html#name Project#name}
  */
  readonly name: string;
  /**
  * The numeric ID of the organization this project belongs to. Changing this forces a new project to be created.  Only one of org_id or folder_id may be specified. If the org_id is specified then the project is created at the top level. Changing this forces the project to be migrated to the newly specified organization.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project.html#org_id Project#org_id}
  */
  readonly orgId?: string;
  /**
  * The project ID. Changing this forces a new project to be created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project.html#project_id Project#project_id}
  */
  readonly projectId: string;
  /**
  * If true, the Terraform resource can be deleted without deleting the Project via the Google API.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project.html#skip_delete Project#skip_delete}
  */
  readonly skipDelete?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project.html#timeouts Project#timeouts}
  */
  readonly timeouts?: ProjectTimeouts;
}
export interface ProjectTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project.html#create Project#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project.html#delete Project#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project.html#read Project#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project.html#update Project#update}
  */
  readonly update?: string;
}

function projectTimeoutsToTerraform(struct?: ProjectTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/project.html google_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_project";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/project.html google_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'google_project',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoCreateNetwork = config.autoCreateNetwork;
    this._billingAccount = config.billingAccount;
    this._folderId = config.folderId;
    this._labels = config.labels;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._skipDelete = config.skipDelete;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_create_network - computed: false, optional: true, required: false
  private _autoCreateNetwork?: boolean | cdktf.IResolvable;
  public get autoCreateNetwork() {
    return this.getBooleanAttribute('auto_create_network');
  }
  public set autoCreateNetwork(value: boolean | cdktf.IResolvable ) {
    this._autoCreateNetwork = value;
  }
  public resetAutoCreateNetwork() {
    this._autoCreateNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateNetworkInput() {
    return this._autoCreateNetwork
  }

  // billing_account - computed: false, optional: true, required: false
  private _billingAccount?: string;
  public get billingAccount() {
    return this.getStringAttribute('billing_account');
  }
  public set billingAccount(value: string ) {
    this._billingAccount = value;
  }
  public resetBillingAccount() {
    this._billingAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingAccountInput() {
    return this._billingAccount
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string;
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable;
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getStringAttribute('number');
  }

  // org_id - computed: true, optional: true, required: false
  private _orgId?: string;
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId: string;
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId
  }

  // skip_delete - computed: true, optional: true, required: false
  private _skipDelete?: boolean | cdktf.IResolvable;
  public get skipDelete() {
    return this.getBooleanAttribute('skip_delete');
  }
  public set skipDelete(value: boolean | cdktf.IResolvable) {
    this._skipDelete = value;
  }
  public resetSkipDelete() {
    this._skipDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDeleteInput() {
    return this._skipDelete
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ProjectTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ProjectTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_create_network: cdktf.booleanToTerraform(this._autoCreateNetwork),
      billing_account: cdktf.stringToTerraform(this._billingAccount),
      folder_id: cdktf.stringToTerraform(this._folderId),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      skip_delete: cdktf.booleanToTerraform(this._skipDelete),
      timeouts: projectTimeoutsToTerraform(this._timeouts),
    };
  }
}
