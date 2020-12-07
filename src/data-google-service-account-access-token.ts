// https://www.terraform.io/docs/providers/google/r/data_google_service_account_access_token.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleServiceAccountAccessTokenConfig extends cdktf.TerraformMetaArguments {
  readonly delegates?: string[];
  readonly lifetime?: string;
  readonly scopes: string[];
  readonly targetServiceAccount: string;
}

// Resource

export class DataGoogleServiceAccountAccessToken extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleServiceAccountAccessTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_account_access_token',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._delegates = config.delegates;
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
    return this.getListAttribute('delegates');
  }
  public set delegates(value: string[] ) {
    this._delegates = value;
  }
  public resetDelegates() {
    this._delegates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatesInput() {
    return this._delegates
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: string;
  public get lifetime() {
    return this.getStringAttribute('lifetime');
  }
  public set lifetime(value: string ) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes: string[];
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes
  }

  // target_service_account - computed: false, optional: false, required: true
  private _targetServiceAccount: string;
  public get targetServiceAccount() {
    return this.getStringAttribute('target_service_account');
  }
  public set targetServiceAccount(value: string) {
    this._targetServiceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetServiceAccountInput() {
    return this._targetServiceAccount
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delegates: cdktf.listMapper(cdktf.stringToTerraform)(this._delegates),
      lifetime: cdktf.stringToTerraform(this._lifetime),
      scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._scopes),
      target_service_account: cdktf.stringToTerraform(this._targetServiceAccount),
    };
  }
}
