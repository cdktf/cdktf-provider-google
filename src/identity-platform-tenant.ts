// https://www.terraform.io/docs/providers/google/r/identity_platform_tenant.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityPlatformTenantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to allow email/password user authentication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant.html#allow_password_signup IdentityPlatformTenant#allow_password_signup}
  */
  readonly allowPasswordSignup?: boolean | cdktf.IResolvable;
  /**
  * Whether authentication is disabled for the tenant. If true, the users under
the disabled tenant are not allowed to sign-in. Admins of the disabled tenant
are not able to manage its users.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant.html#disable_auth IdentityPlatformTenant#disable_auth}
  */
  readonly disableAuth?: boolean | cdktf.IResolvable;
  /**
  * Human friendly display name of the tenant.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant.html#display_name IdentityPlatformTenant#display_name}
  */
  readonly displayName: string;
  /**
  * Whether to enable email link user authentication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant.html#enable_email_link_signin IdentityPlatformTenant#enable_email_link_signin}
  */
  readonly enableEmailLinkSignin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant.html#project IdentityPlatformTenant#project}
  */
  readonly project?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant.html#timeouts IdentityPlatformTenant#timeouts}
  */
  readonly timeouts?: IdentityPlatformTenantTimeouts;
}
export interface IdentityPlatformTenantTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant.html#create IdentityPlatformTenant#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant.html#delete IdentityPlatformTenant#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant.html#update IdentityPlatformTenant#update}
  */
  readonly update?: string;
}

function identityPlatformTenantTimeoutsToTerraform(struct?: IdentityPlatformTenantTimeoutsOutputReference | IdentityPlatformTenantTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class IdentityPlatformTenantTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant.html google_identity_platform_tenant}
*/
export class IdentityPlatformTenant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_identity_platform_tenant";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant.html google_identity_platform_tenant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityPlatformTenantConfig
  */
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
  private _allowPasswordSignup?: boolean | cdktf.IResolvable | undefined; 
  public get allowPasswordSignup() {
    return this.getBooleanAttribute('allow_password_signup') as any;
  }
  public set allowPasswordSignup(value: boolean | cdktf.IResolvable | undefined) {
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
  private _disableAuth?: boolean | cdktf.IResolvable | undefined; 
  public get disableAuth() {
    return this.getBooleanAttribute('disable_auth') as any;
  }
  public set disableAuth(value: boolean | cdktf.IResolvable | undefined) {
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
  private _displayName?: string; 
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
  private _enableEmailLinkSignin?: boolean | cdktf.IResolvable | undefined; 
  public get enableEmailLinkSignin() {
    return this.getBooleanAttribute('enable_email_link_signin') as any;
  }
  public set enableEmailLinkSignin(value: boolean | cdktf.IResolvable | undefined) {
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
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
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
  private _timeouts?: IdentityPlatformTenantTimeouts | undefined; 
  private __timeoutsOutput = new IdentityPlatformTenantTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: IdentityPlatformTenantTimeouts | undefined) {
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
      allow_password_signup: cdktf.booleanToTerraform(this._allowPasswordSignup),
      disable_auth: cdktf.booleanToTerraform(this._disableAuth),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_email_link_signin: cdktf.booleanToTerraform(this._enableEmailLinkSignin),
      project: cdktf.stringToTerraform(this._project),
      timeouts: identityPlatformTenantTimeoutsToTerraform(this._timeouts),
    };
  }
}
