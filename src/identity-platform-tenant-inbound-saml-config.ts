// https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_inbound_saml_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityPlatformTenantInboundSamlConfigConfig extends cdktf.TerraformMetaArguments {
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

function identityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesToTerraform(struct?: IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    x509_certificate: cdktf.stringToTerraform(struct!.x509Certificate),
  }
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

function identityPlatformTenantInboundSamlConfigIdpConfigToTerraform(struct?: IdentityPlatformTenantInboundSamlConfigIdpConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    idp_entity_id: cdktf.stringToTerraform(struct!.idpEntityId),
    sign_request: cdktf.booleanToTerraform(struct!.signRequest),
    sso_url: cdktf.stringToTerraform(struct!.ssoUrl),
    idp_certificates: cdktf.listMapper(identityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesToTerraform)(struct!.idpCertificates),
  }
}

export interface IdentityPlatformTenantInboundSamlConfigSpConfig {
  /** Callback URI where responses from IDP are handled. Must start with 'https://'. */
  readonly callbackUri: string;
  /** Unique identifier for all SAML entities. */
  readonly spEntityId: string;
}

function identityPlatformTenantInboundSamlConfigSpConfigToTerraform(struct?: IdentityPlatformTenantInboundSamlConfigSpConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    callback_uri: cdktf.stringToTerraform(struct!.callbackUri),
    sp_entity_id: cdktf.stringToTerraform(struct!.spEntityId),
  }
}

export interface IdentityPlatformTenantInboundSamlConfigTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function identityPlatformTenantInboundSamlConfigTimeoutsToTerraform(struct?: IdentityPlatformTenantInboundSamlConfigTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class IdentityPlatformTenantInboundSamlConfig extends cdktf.TerraformResource {

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
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
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

  // tenant - computed: false, optional: false, required: true
  private _tenant: string;
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant
  }

  // idp_config - computed: false, optional: false, required: true
  private _idpConfig: IdentityPlatformTenantInboundSamlConfigIdpConfig[];
  public get idpConfig() {
    return this.interpolationForAttribute('idp_config') as any;
  }
  public set idpConfig(value: IdentityPlatformTenantInboundSamlConfigIdpConfig[]) {
    this._idpConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpConfigInput() {
    return this._idpConfig
  }

  // sp_config - computed: false, optional: false, required: true
  private _spConfig: IdentityPlatformTenantInboundSamlConfigSpConfig[];
  public get spConfig() {
    return this.interpolationForAttribute('sp_config') as any;
  }
  public set spConfig(value: IdentityPlatformTenantInboundSamlConfigSpConfig[]) {
    this._spConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spConfigInput() {
    return this._spConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IdentityPlatformTenantInboundSamlConfigTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: IdentityPlatformTenantInboundSamlConfigTimeouts ) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      tenant: cdktf.stringToTerraform(this._tenant),
      idp_config: cdktf.listMapper(identityPlatformTenantInboundSamlConfigIdpConfigToTerraform)(this._idpConfig),
      sp_config: cdktf.listMapper(identityPlatformTenantInboundSamlConfigSpConfigToTerraform)(this._spConfig),
      timeouts: identityPlatformTenantInboundSamlConfigTimeoutsToTerraform(this._timeouts),
    };
  }
}
