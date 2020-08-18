// https://www.terraform.io/docs/providers/google/r/data_google_service_account_access_token.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGoogleServiceAccountAccessTokenConfig extends TerraformMetaArguments {
  readonly delegates?: string[];
  readonly lifetime?: string;
  readonly scopes: string[];
  readonly targetServiceAccount: string;
}

// Resource

export class DataGoogleServiceAccountAccessToken extends TerraformDataSource {

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

  // access_token - computed: true, optional: false, required: true
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // delegates - computed: false, optional: true, required: false
  private _delegates?: string[];
  public get delegates() {
    return this._delegates;
  }
  public set delegates(value: string[] | undefined) {
    this._delegates = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: string;
  public get lifetime() {
    return this._lifetime;
  }
  public set lifetime(value: string | undefined) {
    this._lifetime = value;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes: string[];
  public get scopes() {
    return this._scopes;
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }

  // target_service_account - computed: false, optional: false, required: true
  private _targetServiceAccount: string;
  public get targetServiceAccount() {
    return this._targetServiceAccount;
  }
  public set targetServiceAccount(value: string) {
    this._targetServiceAccount = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      delegates: this._delegates,
      lifetime: this._lifetime,
      scopes: this._scopes,
      target_service_account: this._targetServiceAccount,
    };
  }
}
