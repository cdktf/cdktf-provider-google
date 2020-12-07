// https://www.terraform.io/docs/providers/google/r/data_google_service_account_id_token.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleServiceAccountIdTokenConfig extends cdktf.TerraformMetaArguments {
  readonly delegates?: string[];
  readonly includeEmail?: boolean;
  readonly targetAudience: string;
  readonly targetServiceAccount?: string;
}

// Resource

export class DataGoogleServiceAccountIdToken extends cdktf.TerraformDataSource {

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

  // id_token - computed: true, optional: false, required: false
  public get idToken() {
    return this.getStringAttribute('id_token');
  }

  // include_email - computed: false, optional: true, required: false
  private _includeEmail?: boolean;
  public get includeEmail() {
    return this.getBooleanAttribute('include_email');
  }
  public set includeEmail(value: boolean ) {
    this._includeEmail = value;
  }
  public resetIncludeEmail() {
    this._includeEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeEmailInput() {
    return this._includeEmail
  }

  // target_audience - computed: false, optional: false, required: true
  private _targetAudience: string;
  public get targetAudience() {
    return this.getStringAttribute('target_audience');
  }
  public set targetAudience(value: string) {
    this._targetAudience = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAudienceInput() {
    return this._targetAudience
  }

  // target_service_account - computed: false, optional: true, required: false
  private _targetServiceAccount?: string;
  public get targetServiceAccount() {
    return this.getStringAttribute('target_service_account');
  }
  public set targetServiceAccount(value: string ) {
    this._targetServiceAccount = value;
  }
  public resetTargetServiceAccount() {
    this._targetServiceAccount = undefined;
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
      include_email: cdktf.booleanToTerraform(this._includeEmail),
      target_audience: cdktf.stringToTerraform(this._targetAudience),
      target_service_account: cdktf.stringToTerraform(this._targetServiceAccount),
    };
  }
}
