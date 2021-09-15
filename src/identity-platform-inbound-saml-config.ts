// https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityPlatformInboundSamlConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Human friendly display name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config.html#display_name IdentityPlatformInboundSamlConfig#display_name}
  */
  readonly displayName: string;
  /**
  * If this config allows users to sign in with the provider.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config.html#enabled IdentityPlatformInboundSamlConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the InboundSamlConfig resource. Must start with 'saml.' and can only have alphanumeric characters,
hyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an
alphanumeric character, and have at least 2 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config.html#name IdentityPlatformInboundSamlConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config.html#project IdentityPlatformInboundSamlConfig#project}
  */
  readonly project?: string;
  /**
  * idp_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config.html#idp_config IdentityPlatformInboundSamlConfig#idp_config}
  */
  readonly idpConfig: IdentityPlatformInboundSamlConfigIdpConfig[];
  /**
  * sp_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config.html#sp_config IdentityPlatformInboundSamlConfig#sp_config}
  */
  readonly spConfig: IdentityPlatformInboundSamlConfigSpConfig[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config.html#timeouts IdentityPlatformInboundSamlConfig#timeouts}
  */
  readonly timeouts?: IdentityPlatformInboundSamlConfigTimeouts;
}
export interface IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates {
  /**
  * The IdP's x509 certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config.html#x509_certificate IdentityPlatformInboundSamlConfig#x509_certificate}
  */
  readonly x509Certificate?: string;
}

function identityPlatformInboundSamlConfigIdpConfigIdpCertificatesToTerraform(struct?: IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    x509_certificate: cdktf.stringToTerraform(struct!.x509Certificate),
  }
}

export interface IdentityPlatformInboundSamlConfigIdpConfig {
  /**
  * Unique identifier for all SAML entities
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config.html#idp_entity_id IdentityPlatformInboundSamlConfig#idp_entity_id}
  */
  readonly idpEntityId: string;
  /**
  * Indicates if outbounding SAMLRequest should be signed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config.html#sign_request IdentityPlatformInboundSamlConfig#sign_request}
  */
  readonly signRequest?: boolean | cdktf.IResolvable;
  /**
  * URL to send Authentication request to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config.html#sso_url IdentityPlatformInboundSamlConfig#sso_url}
  */
  readonly ssoUrl: string;
  /**
  * idp_certificates block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config.html#idp_certificates IdentityPlatformInboundSamlConfig#idp_certificates}
  */
  readonly idpCertificates: IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates[];
}

function identityPlatformInboundSamlConfigIdpConfigToTerraform(struct?: IdentityPlatformInboundSamlConfigIdpConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    idp_entity_id: cdktf.stringToTerraform(struct!.idpEntityId),
    sign_request: cdktf.booleanToTerraform(struct!.signRequest),
    sso_url: cdktf.stringToTerraform(struct!.ssoUrl),
    idp_certificates: cdktf.listMapper(identityPlatformInboundSamlConfigIdpConfigIdpCertificatesToTerraform)(struct!.idpCertificates),
  }
}

export interface IdentityPlatformInboundSamlConfigSpConfig {
  /**
  * Callback URI where responses from IDP are handled. Must start with 'https://'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config.html#callback_uri IdentityPlatformInboundSamlConfig#callback_uri}
  */
  readonly callbackUri?: string;
  /**
  * Unique identifier for all SAML entities.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config.html#sp_entity_id IdentityPlatformInboundSamlConfig#sp_entity_id}
  */
  readonly spEntityId?: string;
}

function identityPlatformInboundSamlConfigSpConfigToTerraform(struct?: IdentityPlatformInboundSamlConfigSpConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    callback_uri: cdktf.stringToTerraform(struct!.callbackUri),
    sp_entity_id: cdktf.stringToTerraform(struct!.spEntityId),
  }
}

export interface IdentityPlatformInboundSamlConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config.html#create IdentityPlatformInboundSamlConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config.html#delete IdentityPlatformInboundSamlConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config.html#update IdentityPlatformInboundSamlConfig#update}
  */
  readonly update?: string;
}

function identityPlatformInboundSamlConfigTimeoutsToTerraform(struct?: IdentityPlatformInboundSamlConfigTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config.html google_identity_platform_inbound_saml_config}
*/
export class IdentityPlatformInboundSamlConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_identity_platform_inbound_saml_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/identity_platform_inbound_saml_config.html google_identity_platform_inbound_saml_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityPlatformInboundSamlConfigConfig
  */
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

  // idp_config - computed: false, optional: false, required: true
  private _idpConfig: IdentityPlatformInboundSamlConfigIdpConfig[];
  public get idpConfig() {
    return this.interpolationForAttribute('idp_config') as any;
  }
  public set idpConfig(value: IdentityPlatformInboundSamlConfigIdpConfig[]) {
    this._idpConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpConfigInput() {
    return this._idpConfig
  }

  // sp_config - computed: false, optional: false, required: true
  private _spConfig: IdentityPlatformInboundSamlConfigSpConfig[];
  public get spConfig() {
    return this.interpolationForAttribute('sp_config') as any;
  }
  public set spConfig(value: IdentityPlatformInboundSamlConfigSpConfig[]) {
    this._spConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spConfigInput() {
    return this._spConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IdentityPlatformInboundSamlConfigTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: IdentityPlatformInboundSamlConfigTimeouts ) {
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
      idp_config: cdktf.listMapper(identityPlatformInboundSamlConfigIdpConfigToTerraform)(this._idpConfig),
      sp_config: cdktf.listMapper(identityPlatformInboundSamlConfigSpConfigToTerraform)(this._spConfig),
      timeouts: identityPlatformInboundSamlConfigTimeoutsToTerraform(this._timeouts),
    };
  }
}
