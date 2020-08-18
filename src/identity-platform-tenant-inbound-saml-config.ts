// https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_inbound_saml_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IdentityPlatformTenantInboundSamlConfigConfig extends TerraformMetaArguments {
  /** Human friendly display name. */
  readonly displayName: string;
  /** If this config allows users to sign in with the provider. */
  readonly enabled?: boolean;
  /** The name of the InboundSamlConfig resource. Must start with 'saml.' and can only have alphanumeric characters,
hyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an
alphanumeric character, and have at least 2 characters. */
  readonly name: string;
  readonly project?: string;
  /** The name of the tenant where this inbound SAML config resource exists */
  readonly tenant: string;
  /** idp_config block */
  readonly idpConfig: IdentityPlatformTenantInboundSamlConfigIdpConfig[];
  /** sp_config block */
  readonly spConfig: IdentityPlatformTenantInboundSamlConfigSpConfig[];
  /** timeouts block */
  readonly timeouts?: IdentityPlatformTenantInboundSamlConfigTimeouts;
}
export interface IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates {
  /** The x509 certificate */
  readonly x509Certificate?: string;
}
export interface IdentityPlatformTenantInboundSamlConfigIdpConfig {
  /** Unique identifier for all SAML entities */
  readonly idpEntityId: string;
  /** Indicates if outbounding SAMLRequest should be signed. */
  readonly signRequest?: boolean;
  /** URL to send Authentication request to. */
  readonly ssoUrl: string;
  /** idp_certificates block */
  readonly idpCertificates: IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates[];
}
export interface IdentityPlatformTenantInboundSamlConfigSpConfig {
  /** Callback URI where responses from IDP are handled. Must start with 'https://'. */
  readonly callbackUri: string;
  /** Unique identifier for all SAML entities. */
  readonly spEntityId: string;
}
export interface IdentityPlatformTenantInboundSamlConfigTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class IdentityPlatformTenantInboundSamlConfig extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IdentityPlatformTenantInboundSamlConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_identity_platform_tenant_inbound_saml_config',
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
    this._tenant = config.tenant;
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

  // tenant - computed: false, optional: false, required: true
  private _tenant: string;
  public get tenant() {
    return this._tenant;
  }
  public set tenant(value: string) {
    this._tenant = value;
  }

  // idp_config - computed: false, optional: false, required: true
  private _idpConfig: IdentityPlatformTenantInboundSamlConfigIdpConfig[];
  public get idpConfig() {
    return this._idpConfig;
  }
  public set idpConfig(value: IdentityPlatformTenantInboundSamlConfigIdpConfig[]) {
    this._idpConfig = value;
  }

  // sp_config - computed: false, optional: false, required: true
  private _spConfig: IdentityPlatformTenantInboundSamlConfigSpConfig[];
  public get spConfig() {
    return this._spConfig;
  }
  public set spConfig(value: IdentityPlatformTenantInboundSamlConfigSpConfig[]) {
    this._spConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IdentityPlatformTenantInboundSamlConfigTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IdentityPlatformTenantInboundSamlConfigTimeouts | undefined) {
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
      tenant: this._tenant,
      idp_config: this._idpConfig,
      sp_config: this._spConfig,
      timeouts: this._timeouts,
    };
  }
}
