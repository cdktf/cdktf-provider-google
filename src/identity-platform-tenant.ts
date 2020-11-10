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
    return this.getBooleanAttribute('allow_password_signup');
  }
  public set allowPasswordSignup(value: boolean ) {
    this._allowPasswordSignup = value;
  }
  public resetAllowPasswordSignup() {
    this._allowPasswordSignup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPasswordSignupInput() {
    return this._allowPasswordSignup
  }

  // disable_auth - computed: false, optional: true, required: false
  private _disableAuth?: boolean;
  public get disableAuth() {
    return this.getBooleanAttribute('disable_auth');
  }
  public set disableAuth(value: boolean ) {
    this._disableAuth = value;
  }
  public resetDisableAuth() {
    this._disableAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAuthInput() {
    return this._disableAuth
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // enable_email_link_signin - computed: false, optional: true, required: false
  private _enableEmailLinkSignin?: boolean;
  public get enableEmailLinkSignin() {
    return this.getBooleanAttribute('enable_email_link_signin');
  }
  public set enableEmailLinkSignin(value: boolean ) {
    this._enableEmailLinkSignin = value;
  }
  public resetEnableEmailLinkSignin() {
    this._enableEmailLinkSignin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEmailLinkSigninInput() {
    return this._enableEmailLinkSignin
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IdentityPlatformTenantTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: IdentityPlatformTenantTimeouts ) {
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
      allow_password_signup: this._allowPasswordSignup,
      disable_auth: this._disableAuth,
      display_name: this._displayName,
      enable_email_link_signin: this._enableEmailLinkSignin,
      project: this._project,
      timeouts: this._timeouts,
    };
  }
}
