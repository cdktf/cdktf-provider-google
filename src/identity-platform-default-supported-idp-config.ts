// https://www.terraform.io/docs/providers/google/r/identity_platform_default_supported_idp_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IdentityPlatformDefaultSupportedIdpConfigConfig extends TerraformMetaArguments {
  /** OAuth client ID */
  readonly clientId: string;
  /** OAuth client secret */
  readonly clientSecret: string;
  /** If this IDP allows the user to sign in */
  readonly enabled?: boolean;
  /** ID of the IDP. Possible values include:

* 'apple.com'

* 'facebook.com'

* 'gc.apple.com'

* 'github.com'

* 'google.com'

* 'linkedin.com'

* 'microsoft.com'

* 'playgames.google.com'

* 'twitter.com'

* 'yahoo.com' */
  readonly idpId: string;
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: IdentityPlatformDefaultSupportedIdpConfigTimeouts;
}
export interface IdentityPlatformDefaultSupportedIdpConfigTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class IdentityPlatformDefaultSupportedIdpConfig extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IdentityPlatformDefaultSupportedIdpConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_identity_platform_default_supported_idp_config',
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
    this._enabled = config.enabled;
    this._idpId = config.idpId;
    this._project = config.project;
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

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret: string;
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
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

  // idp_id - computed: false, optional: false, required: true
  private _idpId: string;
  public get idpId() {
    return this._idpId;
  }
  public set idpId(value: string) {
    this._idpId = value;
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
  private _timeouts?: IdentityPlatformDefaultSupportedIdpConfigTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IdentityPlatformDefaultSupportedIdpConfigTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: this._clientId,
      client_secret: this._clientSecret,
      enabled: this._enabled,
      idp_id: this._idpId,
      project: this._project,
      timeouts: this._timeouts,
    };
  }
}
