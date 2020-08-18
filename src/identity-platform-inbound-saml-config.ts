// https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IdentityPlatformInboundSamlConfigConfig extends TerraformMetaArguments {
  /** Human friendly display name. */
  readonly displayName: string;
  /** If this config allows users to sign in with the provider. */
  readonly enabled?: boolean;
  /** The name of the InboundSamlConfig resource. Must start with 'saml.' and can only have alphanumeric characters,
hyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an
alphanumeric character, and have at least 2 characters. */
  readonly name: string;
  readonly project?: string;
  /** idp_config block */
  readonly idpConfig: IdentityPlatformInboundSamlConfigIdpConfig[];
  /** sp_config block */
  readonly spConfig: IdentityPlatformInboundSamlConfigSpConfig[];
  /** timeouts block */
  readonly timeouts?: IdentityPlatformInboundSamlConfigTimeouts;
}
export interface IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates {
  /** The IdP's x509 certificate. */
  readonly x509Certificate?: string;
}
export interface IdentityPlatformInboundSamlConfigIdpConfig {
  /** Unique identifier for all SAML entities */
  readonly idpEntityId: string;
  /** Indicates if outbounding SAMLRequest should be signed. */
  readonly signRequest?: boolean;
  /** URL to send Authentication request to. */
  readonly ssoUrl: string;
  /** idp_certificates block */
  readonly idpCertificates: IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates[];
}
export interface IdentityPlatformInboundSamlConfigSpConfig {
  /** Callback URI where responses from IDP are handled. Must start with 'https://'. */
  readonly callbackUri?: string;
  /** Unique identifier for all SAML entities. */
  readonly spEntityId?: string;
}
export interface IdentityPlatformInboundSamlConfigTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class IdentityPlatformInboundSamlConfig extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IdentityPlatformInboundSamlConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_identity_platform_inbound_saml_config',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._name = config.name;
    this._project = config.project;
    this._idpConfig = config.idpConfig;
    this._spConfig = config.spConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // idp_config - computed: false, optional: false, required: true
  private _idpConfig: IdentityPlatformInboundSamlConfigIdpConfig[];
  public get idpConfig() {
    return this._idpConfig;
  }
  public set idpConfig(value: IdentityPlatformInboundSamlConfigIdpConfig[]) {
    this._idpConfig = value;
  }

  // sp_config - computed: false, optional: false, required: true
  private _spConfig: IdentityPlatformInboundSamlConfigSpConfig[];
  public get spConfig() {
    return this._spConfig;
  }
  public set spConfig(value: IdentityPlatformInboundSamlConfigSpConfig[]) {
    this._spConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IdentityPlatformInboundSamlConfigTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IdentityPlatformInboundSamlConfigTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: this._displayName,
      enabled: this._enabled,
      name: this._name,
      project: this._project,
      idp_config: this._idpConfig,
      sp_config: this._spConfig,
      timeouts: this._timeouts,
    };
  }
}
