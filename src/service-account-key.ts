// https://www.terraform.io/docs/providers/google/r/service_account_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ServiceAccountKeyConfig extends TerraformMetaArguments {
  /** The algorithm used to generate the key, used only on create. KEY_ALG_RSA_2048 is the default algorithm. Valid values are: "KEY_ALG_RSA_1024", "KEY_ALG_RSA_2048". */
  readonly keyAlgorithm?: string;
  readonly privateKeyType?: string;
  /** A field that allows clients to upload their own public key. If set, use this public key data to create a service account key for given service account. Please note, the expected format for this field is a base64 encoded X509_PEM. */
  readonly publicKeyData?: string;
  readonly publicKeyType?: string;
  /** The ID of the parent service account of the key. This can be a string in the format {ACCOUNT} or projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}, where {ACCOUNT} is the email address or unique id of the service account. If the {ACCOUNT} syntax is used, the project will be inferred from the account. */
  readonly serviceAccountId: string;
}

// Resource

export class ServiceAccountKey extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ServiceAccountKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_account_key',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyAlgorithm = config.keyAlgorithm;
    this._privateKeyType = config.privateKeyType;
    this._publicKeyData = config.publicKeyData;
    this._publicKeyType = config.publicKeyType;
    this._serviceAccountId = config.serviceAccountId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key_algorithm - computed: false, optional: true, required: false
  private _keyAlgorithm?: string;
  public get keyAlgorithm() {
    return this._keyAlgorithm;
  }
  public set keyAlgorithm(value: string | undefined) {
    this._keyAlgorithm = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_key - computed: true, optional: false, required: true
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // private_key_type - computed: false, optional: true, required: false
  private _privateKeyType?: string;
  public get privateKeyType() {
    return this._privateKeyType;
  }
  public set privateKeyType(value: string | undefined) {
    this._privateKeyType = value;
  }

  // public_key - computed: true, optional: false, required: true
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // public_key_data - computed: false, optional: true, required: false
  private _publicKeyData?: string;
  public get publicKeyData() {
    return this._publicKeyData;
  }
  public set publicKeyData(value: string | undefined) {
    this._publicKeyData = value;
  }

  // public_key_type - computed: false, optional: true, required: false
  private _publicKeyType?: string;
  public get publicKeyType() {
    return this._publicKeyType;
  }
  public set publicKeyType(value: string | undefined) {
    this._publicKeyType = value;
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId: string;
  public get serviceAccountId() {
    return this._serviceAccountId;
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }

  // valid_after - computed: true, optional: false, required: true
  public get validAfter() {
    return this.getStringAttribute('valid_after');
  }

  // valid_before - computed: true, optional: false, required: true
  public get validBefore() {
    return this.getStringAttribute('valid_before');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key_algorithm: this._keyAlgorithm,
      private_key_type: this._privateKeyType,
      public_key_data: this._publicKeyData,
      public_key_type: this._publicKeyType,
      service_account_id: this._serviceAccountId,
    };
  }
}
