// https://www.terraform.io/docs/providers/google/r/data_google_kms_secret_ciphertext.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGoogleKmsSecretCiphertextConfig extends TerraformMetaArguments {
  readonly cryptoKey: string;
  readonly plaintext: string;
}

// Resource

export class DataGoogleKmsSecretCiphertext extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleKmsSecretCiphertextConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_secret_ciphertext',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cryptoKey = config.cryptoKey;
    this._plaintext = config.plaintext;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ciphertext - computed: true, optional: false, required: true
  public get ciphertext() {
    return this.getStringAttribute('ciphertext');
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

  // plaintext - computed: false, optional: false, required: true
  private _plaintext: string;
  public get plaintext() {
    return this._plaintext;
  }
  public set plaintext(value: string) {
    this._plaintext = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      crypto_key: this._cryptoKey,
      plaintext: this._plaintext,
    };
  }
}
