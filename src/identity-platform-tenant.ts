// https://www.terraform.io/docs/providers/google/r/identity_platform_tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityPlatformTenantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to allow email/password user authentication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant#allow_password_signup IdentityPlatformTenant#allow_password_signup}
  */
  readonly allowPasswordSignup?: boolean | cdktf.IResolvable;
  /**
  * Whether authentication is disabled for the tenant. If true, the users under
the disabled tenant are not allowed to sign-in. Admins of the disabled tenant
are not able to manage its users.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant#disable_auth IdentityPlatformTenant#disable_auth}
  */
  readonly disableAuth?: boolean | cdktf.IResolvable;
  /**
  * Human friendly display name of the tenant.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant#display_name IdentityPlatformTenant#display_name}
  */
  readonly displayName: string;
  /**
  * Whether to enable email link user authentication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant#enable_email_link_signin IdentityPlatformTenant#enable_email_link_signin}
  */
  readonly enableEmailLinkSignin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant#id IdentityPlatformTenant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant#project IdentityPlatformTenant#project}
  */
  readonly project?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant#timeouts IdentityPlatformTenant#timeouts}
  */
  readonly timeouts?: IdentityPlatformTenantTimeouts;
}
export interface IdentityPlatformTenantTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant#create IdentityPlatformTenant#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant#delete IdentityPlatformTenant#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant#update IdentityPlatformTenant#update}
  */
  readonly update?: string;
}

export function identityPlatformTenantTimeoutsToTerraform(struct?: IdentityPlatformTenantTimeoutsOutputReference | IdentityPlatformTenantTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityPlatformTenantTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformTenantTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant google_identity_platform_tenant}
*/
export class IdentityPlatformTenant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_identity_platform_tenant";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant google_identity_platform_tenant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityPlatformTenantConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityPlatformTenantConfig) {
    super(scope, id, {
      terraformResourceType: 'google_identity_platform_tenant',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowPasswordSignup = config.allowPasswordSignup;
    this._disableAuth = config.disableAuth;
    this._displayName = config.displayName;
    this._enableEmailLinkSignin = config.enableEmailLinkSignin;
    this._id = config.id;
    this._project = config.project;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_password_signup - computed: false, optional: true, required: false
  private _allowPasswordSignup?: boolean | cdktf.IResolvable; 
  public get allowPasswordSignup() {
    return this.getBooleanAttribute('allow_password_signup');
  }
  public set allowPasswordSignup(value: boolean | cdktf.IResolvable) {
    this._allowPasswordSignup = value;
  }
  public resetAllowPasswordSignup() {
    this._allowPasswordSignup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPasswordSignupInput() {
    return this._allowPasswordSignup;
  }

  // disable_auth - computed: false, optional: true, required: false
  private _disableAuth?: boolean | cdktf.IResolvable; 
  public get disableAuth() {
    return this.getBooleanAttribute('disable_auth');
  }
  public set disableAuth(value: boolean | cdktf.IResolvable) {
    this._disableAuth = value;
  }
  public resetDisableAuth() {
    this._disableAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAuthInput() {
    return this._disableAuth;
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
    return this._displayName;
  }

  // enable_email_link_signin - computed: false, optional: true, required: false
  private _enableEmailLinkSignin?: boolean | cdktf.IResolvable; 
  public get enableEmailLinkSignin() {
    return this.getBooleanAttribute('enable_email_link_signin');
  }
  public set enableEmailLinkSignin(value: boolean | cdktf.IResolvable) {
    this._enableEmailLinkSignin = value;
  }
  public resetEnableEmailLinkSignin() {
    this._enableEmailLinkSignin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEmailLinkSigninInput() {
    return this._enableEmailLinkSignin;
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
    return this._project;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IdentityPlatformTenantTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IdentityPlatformTenantTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      timeouts: identityPlatformTenantTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
