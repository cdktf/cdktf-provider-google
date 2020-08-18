// https://www.terraform.io/docs/providers/google/r/data_google_kms_secret.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGoogleKmsSecretConfig extends TerraformMetaArguments {
  readonly additionalAuthenticatedData?: string;
  readonly ciphertext: string;
  readonly cryptoKey: string;
}

// Resource

export class DataGoogleKmsSecret extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleKmsSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_secret',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._additionalAuthenticatedData = config.additionalAuthenticatedData;
    this._ciphertext = config.ciphertext;
    this._cryptoKey = config.cryptoKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_authenticated_data - computed: false, optional: true, required: false
  private _additionalAuthenticatedData?: string;
  public get additionalAuthenticatedData() {
    return this._additionalAuthenticatedData;
  }
  public set additionalAuthenticatedData(value: string | undefined) {
    this._additionalAuthenticatedData = value;
  }

  // ciphertext - computed: false, optional: false, required: true
  private _ciphertext: string;
  public get ciphertext() {
    return this._ciphertext;
  }
  public set ciphertext(value: string) {
    this._ciphertext = value;
  }

  // crypto_key - computed: false, optional: false, required: true
  private _cryptoKey: string;
  public get cryptoKey() {
    return this._cryptoKey;
  }
  public set cryptoKey(value: string) {
    this._cryptoKey = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // plaintext - computed: true, optional: false, required: true
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_authenticated_data: this._additionalAuthenticatedData,
      ciphertext: this._ciphertext,
      crypto_key: this._cryptoKey,
    };
  }
}
