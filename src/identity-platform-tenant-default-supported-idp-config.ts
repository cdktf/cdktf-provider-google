// https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityPlatformTenantDefaultSupportedIdpConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * OAuth client ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config.html#client_id IdentityPlatformTenantDefaultSupportedIdpConfig#client_id}
  */
  readonly clientId: string;
  /**
  * OAuth client secret
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config.html#client_secret IdentityPlatformTenantDefaultSupportedIdpConfig#client_secret}
  */
  readonly clientSecret: string;
  /**
  * If this IDP allows the user to sign in
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config.html#enabled IdentityPlatformTenantDefaultSupportedIdpConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * ID of the IDP. Possible values include:

* 'apple.com'

* 'facebook.com'

* 'gc.apple.com'

* 'github.com'

* 'google.com'

* 'linkedin.com'

* 'microsoft.com'

* 'playgames.google.com'

* 'twitter.com'

* 'yahoo.com'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config.html#idp_id IdentityPlatformTenantDefaultSupportedIdpConfig#idp_id}
  */
  readonly idpId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config.html#project IdentityPlatformTenantDefaultSupportedIdpConfig#project}
  */
  readonly project?: string;
  /**
  * The name of the tenant where this DefaultSupportedIdpConfig resource exists
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config.html#tenant IdentityPlatformTenantDefaultSupportedIdpConfig#tenant}
  */
  readonly tenant: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config.html#timeouts IdentityPlatformTenantDefaultSupportedIdpConfig#timeouts}
  */
  readonly timeouts?: IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts;
}
export interface IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config.html#create IdentityPlatformTenantDefaultSupportedIdpConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config.html#delete IdentityPlatformTenantDefaultSupportedIdpConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config.html#update IdentityPlatformTenantDefaultSupportedIdpConfig#update}
  */
  readonly update?: string;
}

function identityPlatformTenantDefaultSupportedIdpConfigTimeoutsToTerraform(struct?: IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config.html google_identity_platform_tenant_default_supported_idp_config}
*/
export class IdentityPlatformTenantDefaultSupportedIdpConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_identity_platform_tenant_default_supported_idp_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_default_supported_idp_config.html google_identity_platform_tenant_default_supported_idp_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityPlatformTenantDefaultSupportedIdpConfigConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityPlatformTenantDefaultSupportedIdpConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_identity_platform_tenant_default_supported_idp_config',
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
    this._tenant = config.tenant;
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

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret: string;
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret
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

  // idp_id - computed: false, optional: false, required: true
  private _idpId: string;
  public get idpId() {
    return this.getStringAttribute('idp_id');
  }
  public set idpId(value: string) {
    this._idpId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpIdInput() {
    return this._idpId
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts ) {
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      idp_id: cdktf.stringToTerraform(this._idpId),
      project: cdktf.stringToTerraform(this._project),
      tenant: cdktf.stringToTerraform(this._tenant),
      timeouts: identityPlatformTenantDefaultSupportedIdpConfigTimeoutsToTerraform(this._timeouts),
    };
  }
}
