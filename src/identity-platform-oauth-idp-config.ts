// https://www.terraform.io/docs/providers/google/r/identity_platform_oauth_idp_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityPlatformOauthIdpConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The client id of an OAuth client.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_oauth_idp_config.html#client_id IdentityPlatformOauthIdpConfig#client_id}
  */
  readonly clientId: string;
  /**
  * The client secret of the OAuth client, to enable OIDC code flow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_oauth_idp_config.html#client_secret IdentityPlatformOauthIdpConfig#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Human friendly display name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_oauth_idp_config.html#display_name IdentityPlatformOauthIdpConfig#display_name}
  */
  readonly displayName?: string;
  /**
  * If this config allows users to sign in with the provider.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_oauth_idp_config.html#enabled IdentityPlatformOauthIdpConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * For OIDC Idps, the issuer identifier.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_oauth_idp_config.html#issuer IdentityPlatformOauthIdpConfig#issuer}
  */
  readonly issuer: string;
  /**
  * The name of the OauthIdpConfig. Must start with 'oidc.'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_oauth_idp_config.html#name IdentityPlatformOauthIdpConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_oauth_idp_config.html#project IdentityPlatformOauthIdpConfig#project}
  */
  readonly project?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_oauth_idp_config.html#timeouts IdentityPlatformOauthIdpConfig#timeouts}
  */
  readonly timeouts?: IdentityPlatformOauthIdpConfigTimeouts;
}
export interface IdentityPlatformOauthIdpConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_oauth_idp_config.html#create IdentityPlatformOauthIdpConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_oauth_idp_config.html#delete IdentityPlatformOauthIdpConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_oauth_idp_config.html#update IdentityPlatformOauthIdpConfig#update}
  */
  readonly update?: string;
}

function identityPlatformOauthIdpConfigTimeoutsToTerraform(struct?: IdentityPlatformOauthIdpConfigTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/identity_platform_oauth_idp_config.html google_identity_platform_oauth_idp_config}
*/
export class IdentityPlatformOauthIdpConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_identity_platform_oauth_idp_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/identity_platform_oauth_idp_config.html google_identity_platform_oauth_idp_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityPlatformOauthIdpConfigConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityPlatformOauthIdpConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_identity_platform_oauth_idp_config',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._issuer = config.issuer;
    this._name = config.name;
    this._project = config.project;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: false, required: true
  private _clientId: string;
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string;
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string ) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string ) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer: string;
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer
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
  private _timeouts?: IdentityPlatformOauthIdpConfigTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: IdentityPlatformOauthIdpConfigTimeouts ) {
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
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      issuer: cdktf.stringToTerraform(this._issuer),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      timeouts: identityPlatformOauthIdpConfigTimeoutsToTerraform(this._timeouts),
    };
  }
}
