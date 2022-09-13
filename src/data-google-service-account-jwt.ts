// https://www.terraform.io/docs/providers/google/d/service_account_jwt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleServiceAccountJwtConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_jwt#delegates DataGoogleServiceAccountJwt#delegates}
  */
  readonly delegates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_jwt#id DataGoogleServiceAccountJwt#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A JSON-encoded JWT claims set that will be included in the signed JWT.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_jwt#payload DataGoogleServiceAccountJwt#payload}
  */
  readonly payload: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_jwt#target_service_account DataGoogleServiceAccountJwt#target_service_account}
  */
  readonly targetServiceAccount: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/service_account_jwt google_service_account_jwt}
*/
export class DataGoogleServiceAccountJwt extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_service_account_jwt";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/service_account_jwt google_service_account_jwt} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleServiceAccountJwtConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleServiceAccountJwtConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_account_jwt',
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
    this._payload = config.payload;
    this._targetServiceAccount = config.targetServiceAccount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // jwt - computed: true, optional: false, required: false
  public get jwt() {
    return this.getStringAttribute('jwt');
  }

  // payload - computed: false, optional: false, required: true
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
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
      payload: cdktf.stringToTerraform(this._payload),
      target_service_account: cdktf.stringToTerraform(this._targetServiceAccount),
    };
  }
}
