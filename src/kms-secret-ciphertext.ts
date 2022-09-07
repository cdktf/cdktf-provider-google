// https://www.terraform.io/docs/providers/google/r/kms_secret_ciphertext
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsSecretCiphertextConfig extends cdktf.TerraformMetaArguments {
  /**
  * The additional authenticated data used for integrity checks during encryption and decryption.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_secret_ciphertext#additional_authenticated_data KmsSecretCiphertext#additional_authenticated_data}
  */
  readonly additionalAuthenticatedData?: string;
  /**
  * The full name of the CryptoKey that will be used to encrypt the provided plaintext.
Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}''
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_secret_ciphertext#crypto_key KmsSecretCiphertext#crypto_key}
  */
  readonly cryptoKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_secret_ciphertext#id KmsSecretCiphertext#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The plaintext to be encrypted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_secret_ciphertext#plaintext KmsSecretCiphertext#plaintext}
  */
  readonly plaintext: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_secret_ciphertext#timeouts KmsSecretCiphertext#timeouts}
  */
  readonly timeouts?: KmsSecretCiphertextTimeouts;
}
export interface KmsSecretCiphertextTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_secret_ciphertext#create KmsSecretCiphertext#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_secret_ciphertext#delete KmsSecretCiphertext#delete}
  */
  readonly delete?: string;
}

export function kmsSecretCiphertextTimeoutsToTerraform(struct?: KmsSecretCiphertextTimeoutsOutputReference | KmsSecretCiphertextTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class KmsSecretCiphertextTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KmsSecretCiphertextTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsSecretCiphertextTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/kms_secret_ciphertext google_kms_secret_ciphertext}
*/
export class KmsSecretCiphertext extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_kms_secret_ciphertext";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/kms_secret_ciphertext google_kms_secret_ciphertext} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsSecretCiphertextConfig
  */
  public constructor(scope: Construct, id: string, config: KmsSecretCiphertextConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_secret_ciphertext',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
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
    this._additionalAuthenticatedData = config.additionalAuthenticatedData;
    this._cryptoKey = config.cryptoKey;
    this._id = config.id;
    this._plaintext = config.plaintext;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_authenticated_data - computed: false, optional: true, required: false
  private _additionalAuthenticatedData?: string; 
  public get additionalAuthenticatedData() {
    return this.getStringAttribute('additional_authenticated_data');
  }
  public set additionalAuthenticatedData(value: string) {
    this._additionalAuthenticatedData = value;
  }
  public resetAdditionalAuthenticatedData() {
    this._additionalAuthenticatedData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAuthenticatedDataInput() {
    return this._additionalAuthenticatedData;
  }

  // ciphertext - computed: true, optional: false, required: false
  public get ciphertext() {
    return this.getStringAttribute('ciphertext');
  }

  // crypto_key - computed: false, optional: false, required: true
  private _cryptoKey?: string; 
  public get cryptoKey() {
    return this.getStringAttribute('crypto_key');
  }
  public set cryptoKey(value: string) {
    this._cryptoKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyInput() {
    return this._cryptoKey;
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

  // plaintext - computed: false, optional: false, required: true
  private _plaintext?: string; 
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }
  public set plaintext(value: string) {
    this._plaintext = value;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextInput() {
    return this._plaintext;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KmsSecretCiphertextTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KmsSecretCiphertextTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_authenticated_data: cdktf.stringToTerraform(this._additionalAuthenticatedData),
      crypto_key: cdktf.stringToTerraform(this._cryptoKey),
      id: cdktf.stringToTerraform(this._id),
      plaintext: cdktf.stringToTerraform(this._plaintext),
      timeouts: kmsSecretCiphertextTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
