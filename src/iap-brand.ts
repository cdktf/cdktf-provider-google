// https://www.terraform.io/docs/providers/google/r/iap_brand.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IapBrandConfig extends TerraformMetaArguments {
  /** Application name displayed on OAuth consent screen. */
  readonly applicationTitle: string;
  readonly project?: string;
  /** Support email displayed on the OAuth consent screen. Can be either a
user or group email. When a user email is specified, the caller must
be the user with the associated email address. When a group email is
specified, the caller can be either a user or a service account which
is an owner of the specified group in Cloud Identity. */
  readonly supportEmail: string;
  /** timeouts block */
  readonly timeouts?: IapBrandTimeouts;
}
export interface IapBrandTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class IapBrand extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IapBrandConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iap_brand',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationTitle = config.applicationTitle;
    this._project = config.project;
    this._supportEmail = config.supportEmail;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_title - computed: false, optional: false, required: true
  private _applicationTitle: string;
  public get applicationTitle() {
    return this._applicationTitle;
  }
  public set applicationTitle(value: string) {
    this._applicationTitle = value;
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

  // org_internal_only - computed: true, optional: false, required: true
  public get orgInternalOnly() {
    return this.getBooleanAttribute('org_internal_only');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // support_email - computed: false, optional: false, required: true
  private _supportEmail: string;
  public get supportEmail() {
    return this._supportEmail;
  }
  public set supportEmail(value: string) {
    this._supportEmail = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IapBrandTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IapBrandTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      application_title: this._applicationTitle,
      project: this._project,
      support_email: this._supportEmail,
      timeouts: this._timeouts,
    };
  }
}
