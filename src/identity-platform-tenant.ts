// https://www.terraform.io/docs/providers/google/r/identity_platform_tenant.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IdentityPlatformTenantConfig extends TerraformMetaArguments {
  /** Whether to allow email/password user authentication. */
  readonly allowPasswordSignup?: boolean;
  /** Whether authentication is disabled for the tenant. If true, the users under
the disabled tenant are not allowed to sign-in. Admins of the disabled tenant
are not able to manage its users. */
  readonly disableAuth?: boolean;
  /** Human friendly display name of the tenant. */
  readonly displayName: string;
  /** Whether to enable email link user authentication. */
  readonly enableEmailLinkSignin?: boolean;
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: IdentityPlatformTenantTimeouts;
}
export interface IdentityPlatformTenantTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class IdentityPlatformTenant extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IdentityPlatformTenantConfig) {
    super(scope, id, {
      terraformResourceType: 'google_identity_platform_tenant',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowPasswordSignup = config.allowPasswordSignup;
    this._disableAuth = config.disableAuth;
    this._displayName = config.displayName;
    this._enableEmailLinkSignin = config.enableEmailLinkSignin;
    this._project = config.project;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_password_signup - computed: false, optional: true, required: false
  private _allowPasswordSignup?: boolean;
  public get allowPasswordSignup() {
    return this._allowPasswordSignup;
  }
  public set allowPasswordSignup(value: boolean | undefined) {
    this._allowPasswordSignup = value;
  }

  // disable_auth - computed: false, optional: true, required: false
  private _disableAuth?: boolean;
  public get disableAuth() {
    return this._disableAuth;
  }
  public set disableAuth(value: boolean | undefined) {
    this._disableAuth = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // enable_email_link_signin - computed: false, optional: true, required: false
  private _enableEmailLinkSignin?: boolean;
  public get enableEmailLinkSignin() {
    return this._enableEmailLinkSignin;
  }
  public set enableEmailLinkSignin(value: boolean | undefined) {
    this._enableEmailLinkSignin = value;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IdentityPlatformTenantTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IdentityPlatformTenantTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_password_signup: this._allowPasswordSignup,
      disable_auth: this._disableAuth,
      display_name: this._displayName,
      enable_email_link_signin: this._enableEmailLinkSignin,
      project: this._project,
      timeouts: this._timeouts,
    };
  }
}
