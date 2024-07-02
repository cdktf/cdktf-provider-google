// https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/kms_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleKmsSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/kms_secret#additional_authenticated_data DataGoogleKmsSecret#additional_authenticated_data}
  */
  readonly additionalAuthenticatedData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/kms_secret#ciphertext DataGoogleKmsSecret#ciphertext}
  */
  readonly ciphertext: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/kms_secret#crypto_key DataGoogleKmsSecret#crypto_key}
  */
  readonly cryptoKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/kms_secret#id DataGoogleKmsSecret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/kms_secret google_kms_secret}
*/
export class DataGoogleKmsSecret extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_kms_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleKmsSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleKmsSecret to import
  * @param importFromId The id of the existing DataGoogleKmsSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/kms_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleKmsSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_kms_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/kms_secret google_kms_secret} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleKmsSecretConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleKmsSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_secret',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.36.0',
        providerVersionConstraint: '~> 5.0'
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
    this._ciphertext = config.ciphertext;
    this._cryptoKey = config.cryptoKey;
    this._id = config.id;
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

  // ciphertext - computed: false, optional: false, required: true
  private _ciphertext?: string; 
  public get ciphertext() {
    return this.getStringAttribute('ciphertext');
  }
  public set ciphertext(value: string) {
    this._ciphertext = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphertextInput() {
    return this._ciphertext;
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

  // plaintext - computed: true, optional: false, required: false
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_authenticated_data: cdktf.stringToTerraform(this._additionalAuthenticatedData),
      ciphertext: cdktf.stringToTerraform(this._ciphertext),
      crypto_key: cdktf.stringToTerraform(this._cryptoKey),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_authenticated_data: {
        value: cdktf.stringToHclTerraform(this._additionalAuthenticatedData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ciphertext: {
        value: cdktf.stringToHclTerraform(this._ciphertext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crypto_key: {
        value: cdktf.stringToHclTerraform(this._cryptoKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
