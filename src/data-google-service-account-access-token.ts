// https://www.terraform.io/docs/providers/google/d/service_account_access_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleServiceAccountAccessTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_access_token#delegates DataGoogleServiceAccountAccessToken#delegates}
  */
  readonly delegates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_access_token#id DataGoogleServiceAccountAccessToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_access_token#lifetime DataGoogleServiceAccountAccessToken#lifetime}
  */
  readonly lifetime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_access_token#scopes DataGoogleServiceAccountAccessToken#scopes}
  */
  readonly scopes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_access_token#target_service_account DataGoogleServiceAccountAccessToken#target_service_account}
  */
  readonly targetServiceAccount: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/service_account_access_token google_service_account_access_token}
*/
export class DataGoogleServiceAccountAccessToken extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_service_account_access_token";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/service_account_access_token google_service_account_access_token} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleServiceAccountAccessTokenConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleServiceAccountAccessTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_account_access_token',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
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
    this._delegates = config.delegates;
    this._id = config.id;
    this._lifetime = config.lifetime;
    this._scopes = config.scopes;
    this._targetServiceAccount = config.targetServiceAccount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // delegates - computed: false, optional: true, required: false
  private _delegates?: string[]; 
  public get delegates() {
    return cdktf.Fn.tolist(this.getListAttribute('delegates'));
  }
  public set delegates(value: string[]) {
    this._delegates = value;
  }
  public resetDelegates() {
    this._delegates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatesInput() {
    return this._delegates;
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

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: string; 
  public get lifetime() {
    return this.getStringAttribute('lifetime');
  }
  public set lifetime(value: string) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // target_service_account - computed: false, optional: false, required: true
  private _targetServiceAccount?: string; 
  public get targetServiceAccount() {
    return this.getStringAttribute('target_service_account');
  }
  public set targetServiceAccount(value: string) {
    this._targetServiceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetServiceAccountInput() {
    return this._targetServiceAccount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delegates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._delegates),
      id: cdktf.stringToTerraform(this._id),
      lifetime: cdktf.stringToTerraform(this._lifetime),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      target_service_account: cdktf.stringToTerraform(this._targetServiceAccount),
    };
  }
}
