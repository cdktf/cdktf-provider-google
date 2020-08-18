// https://www.terraform.io/docs/providers/google/r/project.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ProjectConfig extends TerraformMetaArguments {
  /** Create the 'default' network automatically.  Default true. If set to false, the default network will be deleted.  Note that, for quota purposes, you will still need to have 1 network slot available to create the project successfully, even if you set auto_create_network to false, since the network will exist momentarily. */
  readonly autoCreateNetwork?: boolean;
  /** The alphanumeric ID of the billing account this project belongs to. The user or service account performing this operation with Terraform must have Billing Account Administrator privileges (roles/billing.admin) in the organization. See Google Cloud Billing API Access Control for more details. */
  readonly billingAccount?: string;
  /** The numeric ID of the folder this project should be created under. Only one of org_id or folder_id may be specified. If the folder_id is specified, then the project is created under the specified folder. Changing this forces the project to be migrated to the newly specified folder. */
  readonly folderId?: string;
  /** A set of key/value label pairs to assign to the project. */
  readonly labels?: { [key: string]: string };
  /** The display name of the project. */
  readonly name: string;
  /** The numeric ID of the organization this project belongs to. Changing this forces a new project to be created.  Only one of org_id or folder_id may be specified. If the org_id is specified then the project is created at the top level. Changing this forces the project to be migrated to the newly specified organization. */
  readonly orgId?: string;
  /** The project ID. Changing this forces a new project to be created. */
  readonly projectId: string;
  /** If true, the Terraform resource can be deleted without deleting the Project via the Google API. */
  readonly skipDelete?: boolean;
  /** timeouts block */
  readonly timeouts?: ProjectTimeouts;
}
export interface ProjectTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class Project extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _autoCreateNetwork?: boolean;
  public get autoCreateNetwork() {
    return this._autoCreateNetwork;
  }
  public set autoCreateNetwork(value: boolean | undefined) {
    this._autoCreateNetwork = value;
  }

  // billing_account - computed: false, optional: true, required: false
  private _billingAccount?: string;
  public get billingAccount() {
    return this._billingAccount;
  }
  public set billingAccount(value: string | undefined) {
    this._billingAccount = value;
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string;
  public get folderId() {
    return this._folderId ?? this.getStringAttribute('folder_id');
  }
  public set folderId(value: string | undefined) {
    this._folderId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // number - computed: true, optional: false, required: true
  public get number() {
    return this.getStringAttribute('number');
  }

  // org_id - computed: true, optional: true, required: false
  private _orgId?: string;
  public get orgId() {
    return this._orgId ?? this.getStringAttribute('org_id');
  }
  public set orgId(value: string | undefined) {
    this._orgId = value;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId: string;
  public get projectId() {
    return this._projectId;
  }
  public set projectId(value: string) {
    this._projectId = value;
  }

  // skip_delete - computed: true, optional: true, required: false
  private _skipDelete?: boolean;
  public get skipDelete() {
    return this._skipDelete ?? this.getBooleanAttribute('skip_delete');
  }
  public set skipDelete(value: boolean | undefined) {
    this._skipDelete = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ProjectTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ProjectTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_create_network: this._autoCreateNetwork,
      billing_account: this._billingAccount,
      folder_id: this._folderId,
      labels: this._labels,
      name: this._name,
      org_id: this._orgId,
      project_id: this._projectId,
      skip_delete: this._skipDelete,
      timeouts: this._timeouts,
    };
  }
}
