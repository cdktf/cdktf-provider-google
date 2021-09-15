// https://www.terraform.io/docs/providers/google/r/iap_brand.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IapBrandConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application name displayed on OAuth consent screen.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_brand.html#application_title IapBrand#application_title}
  */
  readonly applicationTitle: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_brand.html#project IapBrand#project}
  */
  readonly project?: string;
  /**
  * Support email displayed on the OAuth consent screen. Can be either a
user or group email. When a user email is specified, the caller must
be the user with the associated email address. When a group email is
specified, the caller can be either a user or a service account which
is an owner of the specified group in Cloud Identity.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_brand.html#support_email IapBrand#support_email}
  */
  readonly supportEmail: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_brand.html#timeouts IapBrand#timeouts}
  */
  readonly timeouts?: IapBrandTimeouts;
}
export interface IapBrandTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_brand.html#create IapBrand#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_brand.html#delete IapBrand#delete}
  */
  readonly delete?: string;
}

function iapBrandTimeoutsToTerraform(struct?: IapBrandTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/iap_brand.html google_iap_brand}
*/
export class IapBrand extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_iap_brand";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/iap_brand.html google_iap_brand} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IapBrandConfig
  */
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
    return this.getStringAttribute('application_title');
  }
  public set applicationTitle(value: string) {
    this._applicationTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTitleInput() {
    return this._applicationTitle
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // org_internal_only - computed: true, optional: false, required: false
  public get orgInternalOnly() {
    return this.getBooleanAttribute('org_internal_only');
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

  // support_email - computed: false, optional: false, required: true
  private _supportEmail: string;
  public get supportEmail() {
    return this.getStringAttribute('support_email');
  }
  public set supportEmail(value: string) {
    this._supportEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supportEmailInput() {
    return this._supportEmail
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IapBrandTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: IapBrandTimeouts ) {
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
      application_title: cdktf.stringToTerraform(this._applicationTitle),
      project: cdktf.stringToTerraform(this._project),
      support_email: cdktf.stringToTerraform(this._supportEmail),
      timeouts: iapBrandTimeoutsToTerraform(this._timeouts),
    };
  }
}
