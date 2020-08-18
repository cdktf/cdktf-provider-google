// https://www.terraform.io/docs/providers/google/r/data_google_kms_crypto_key_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGoogleKmsCryptoKeyVersionConfig extends TerraformMetaArguments {
  readonly cryptoKey: string;
  readonly version?: number;
}
export class DataGoogleKmsCryptoKeyVersionPublicKey extends ComplexComputedList {

  // algorithm - computed: true, optional: false, required: true
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // pem - computed: true, optional: false, required: true
  public get pem() {
    return this.getStringAttribute('pem');
  }
}

// Resource

export class DataGoogleKmsCryptoKeyVersion extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleKmsCryptoKeyVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_crypto_key_version',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cryptoKey = config.cryptoKey;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: true, optional: false, required: true
  public get algorithm() {
    return this.getStringAttribute('algorithm');
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

  // protection_level - computed: true, optional: false, required: true
  public get protectionLevel() {
    return this.getStringAttribute('protection_level');
  }

  // public_key - computed: true, optional: false, required: true
  public publicKey(index: string) {
    return new DataGoogleKmsCryptoKeyVersionPublicKey(this, 'public_key', index);
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // version - computed: false, optional: true, required: false
  private _version?: number;
  public get version() {
    return this._version;
  }
  public set version(value: number | undefined) {
    this._version = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      crypto_key: this._cryptoKey,
      version: this._version,
    };
  }
}
