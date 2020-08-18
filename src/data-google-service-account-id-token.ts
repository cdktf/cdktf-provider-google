// https://www.terraform.io/docs/providers/google/r/data_google_service_account_id_token.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGoogleServiceAccountIdTokenConfig extends TerraformMetaArguments {
  readonly delegates?: string[];
  readonly includeEmail?: boolean;
  readonly targetAudience: string;
  readonly targetServiceAccount?: string;
}

// Resource

export class DataGoogleServiceAccountIdToken extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleServiceAccountIdTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_account_id_token',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._delegates = config.delegates;
    this._includeEmail = config.includeEmail;
    this._targetAudience = config.targetAudience;
    this._targetServiceAccount = config.targetServiceAccount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id_token - computed: true, optional: false, required: true
  public get idToken() {
    return this.getStringAttribute('id_token');
  }

  // include_email - computed: false, optional: true, required: false
  private _includeEmail?: boolean;
  public get includeEmail() {
    return this._includeEmail;
  }
  public set includeEmail(value: boolean | undefined) {
    this._includeEmail = value;
  }

  // target_audience - computed: false, optional: false, required: true
  private _targetAudience: string;
  public get targetAudience() {
    return this._targetAudience;
  }
  public set targetAudience(value: string) {
    this._targetAudience = value;
  }

  // target_service_account - computed: false, optional: true, required: false
  private _targetServiceAccount?: string;
  public get targetServiceAccount() {
    return this._targetServiceAccount;
  }
  public set targetServiceAccount(value: string | undefined) {
    this._targetServiceAccount = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      delegates: this._delegates,
      include_email: this._includeEmail,
      target_audience: this._targetAudience,
      target_service_account: this._targetServiceAccount,
    };
  }
}
