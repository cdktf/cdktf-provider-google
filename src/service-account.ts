// https://www.terraform.io/docs/providers/google/r/service_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ServiceAccountConfig extends TerraformMetaArguments {
  /** The account id that is used to generate the service account email address and a stable unique id. It is unique within a project, must be 6-30 characters long, and match the regular expression [a-z]([-a-z0-9]*[a-z0-9]) to comply with RFC1035. Changing this forces a new service account to be created. */
  readonly accountId: string;
  /** A text description of the service account. Must be less than or equal to 256 UTF-8 bytes. */
  readonly description?: string;
  /** The display name for the service account. Can be updated without creating a new resource. */
  readonly displayName?: string;
  /** The ID of the project that the service account will be created in. Defaults to the provider project configuration. */
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: ServiceAccountTimeouts;
}
export interface ServiceAccountTimeouts {
  readonly create?: string;
}

// Resource

export class ServiceAccount extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ServiceAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_account',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._description = config.description;
    this._displayName = config.displayName;
    this._project = config.project;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId: string;
  public get accountId() {
    return this._accountId;
  }
  public set accountId(value: string) {
    this._accountId = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // email - computed: true, optional: false, required: true
  public get email() {
    return this.getStringAttribute('email');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // unique_id - computed: true, optional: false, required: true
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServiceAccountTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ServiceAccountTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: this._accountId,
      description: this._description,
      display_name: this._displayName,
      project: this._project,
      timeouts: this._timeouts,
    };
  }
}
