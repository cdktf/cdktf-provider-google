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
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_algorithm - computed: false, optional: true, required: false
  private _keyAlgorithm?: string;
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }
  public set keyAlgorithm(value: string ) {
    this._keyAlgorithm = value;
  }
  public resetKeyAlgorithm() {
    this._keyAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAlgorithmInput() {
    return this._keyAlgorithm
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // private_key_type - computed: false, optional: true, required: false
  private _privateKeyType?: string;
  public get privateKeyType() {
    return this.getStringAttribute('private_key_type');
  }
  public set privateKeyType(value: string ) {
    this._privateKeyType = value;
  }
  public resetPrivateKeyType() {
    this._privateKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyTypeInput() {
    return this._privateKeyType
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // public_key_data - computed: false, optional: true, required: false
  private _publicKeyData?: string;
  public get publicKeyData() {
    return this.getStringAttribute('public_key_data');
  }
  public set publicKeyData(value: string ) {
    this._publicKeyData = value;
  }
  public resetPublicKeyData() {
    this._publicKeyData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyDataInput() {
    return this._publicKeyData
  }

  // public_key_type - computed: false, optional: true, required: false
  private _publicKeyType?: string;
  public get publicKeyType() {
    return this.getStringAttribute('public_key_type');
  }
  public set publicKeyType(value: string ) {
    this._publicKeyType = value;
  }
  public resetPublicKeyType() {
    this._publicKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyTypeInput() {
    return this._publicKeyType
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId: string;
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId
  }

  // valid_after - computed: true, optional: false, required: false
  public get validAfter() {
    return this.getStringAttribute('valid_after');
  }

  // valid_before - computed: true, optional: false, required: false
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
