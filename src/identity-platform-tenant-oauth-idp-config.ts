// https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_oauth_idp_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IdentityPlatformTenantOauthIdpConfigConfig extends TerraformMetaArguments {
  /** The client id of an OAuth client. */
  readonly clientId: string;
  /** The client secret of the OAuth client, to enable OIDC code flow. */
  readonly clientSecret?: string;
  /** Human friendly display name. */
  readonly displayName: string;
  /** If this config allows users to sign in with the provider. */
  readonly enabled?: boolean;
  /** For OIDC Idps, the issuer identifier. */
  readonly issuer: string;
  /** The name of the OauthIdpConfig. Must start with 'oidc.'. */
  readonly name: string;
  readonly project?: string;
  /** The name of the tenant where this OIDC IDP configuration resource exists */
  readonly tenant: string;
  /** timeouts block */
  readonly timeouts?: IdentityPlatformTenantOauthIdpConfigTimeouts;
}
export interface IdentityPlatformTenantOauthIdpConfigTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class IdentityPlatformTenantOauthIdpConfig extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IdentityPlatformTenantOauthIdpConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_identity_platform_tenant_oauth_idp_config',
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
    this._tenant = config.tenant;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: false, required: true
  private _clientId: string;
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string) {
    this._clientId = value;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string;
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean | undefined) {
    this._enabled = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer: string;
  public get issuer() {
    return this._issuer;
  }
  public set issuer(value: string) {
    this._issuer = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // tenant - computed: false, optional: false, required: true
  private _tenant: string;
  public get tenant() {
    return this._tenant;
  }
  public set tenant(value: string) {
    this._tenant = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IdentityPlatformTenantOauthIdpConfigTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IdentityPlatformTenantOauthIdpConfigTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: this._clientId,
      client_secret: this._clientSecret,
      display_name: this._displayName,
      enabled: this._enabled,
      issuer: this._issuer,
      name: this._name,
      project: this._project,
      tenant: this._tenant,
      timeouts: this._timeouts,
    };
  }
}
