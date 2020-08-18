// https://www.terraform.io/docs/providers/google/r/kms_secret_ciphertext.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KmsSecretCiphertextConfig extends TerraformMetaArguments {
  /** The additional authenticated data used for integrity checks during encryption and decryption. */
  readonly additionalAuthenticatedData?: string;
  /** The full name of the CryptoKey that will be used to encrypt the provided plaintext.
Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}'' */
  readonly cryptoKey: string;
  /** The plaintext to be encrypted. */
  readonly plaintext: string;
  /** timeouts block */
  readonly timeouts?: KmsSecretCiphertextTimeouts;
}
export interface KmsSecretCiphertextTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class KmsSecretCiphertext extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KmsSecretCiphertextConfig) {
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
    this._additionalAuthenticatedData = config.additionalAuthenticatedData;
    this._cryptoKey = config.cryptoKey;
    this._plaintext = config.plaintext;
    this._timeouts = config.timeouts;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KmsSecretCiphertextTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: KmsSecretCiphertextTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_authenticated_data: this._additionalAuthenticatedData,
      crypto_key: this._cryptoKey,
      plaintext: this._plaintext,
      timeouts: this._timeouts,
    };
  }
}
