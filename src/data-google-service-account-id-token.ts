// https://www.terraform.io/docs/providers/google/d/service_account_id_token.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleServiceAccountIdTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_id_token.html#delegates DataGoogleServiceAccountIdToken#delegates}
  */
  readonly delegates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_id_token.html#include_email DataGoogleServiceAccountIdToken#include_email}
  */
  readonly includeEmail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_id_token.html#target_audience DataGoogleServiceAccountIdToken#target_audience}
  */
  readonly targetAudience: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_id_token.html#target_service_account DataGoogleServiceAccountIdToken#target_service_account}
  */
  readonly targetServiceAccount?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/service_account_id_token.html google_service_account_id_token}
*/
export class DataGoogleServiceAccountIdToken extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_service_account_id_token";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/service_account_id_token.html google_service_account_id_token} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleServiceAccountIdTokenConfig
  */
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
  private _delegates?: string[] | undefined; 
  public get delegates() {
    return this.getListAttribute('delegates');
  }
  public set delegates(value: string[] | undefined) {
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
  private _includeEmail?: boolean | cdktf.IResolvable | undefined; 
  public get includeEmail() {
    return this.getBooleanAttribute('include_email') as any;
  }
  public set includeEmail(value: boolean | cdktf.IResolvable | undefined) {
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
  private _targetAudience?: string; 
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
  private _targetServiceAccount?: string | undefined; 
  public get targetServiceAccount() {
    return this.getStringAttribute('target_service_account');
  }
  public set targetServiceAccount(value: string | undefined) {
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
