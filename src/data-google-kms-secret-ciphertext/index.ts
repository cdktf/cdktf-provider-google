/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/data-sources/kms_secret_ciphertext
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleKmsSecretCiphertextConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/data-sources/kms_secret_ciphertext#crypto_key DataGoogleKmsSecretCiphertext#crypto_key}
  */
  readonly cryptoKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/data-sources/kms_secret_ciphertext#id DataGoogleKmsSecretCiphertext#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/data-sources/kms_secret_ciphertext#plaintext DataGoogleKmsSecretCiphertext#plaintext}
  */
  readonly plaintext: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/data-sources/kms_secret_ciphertext google_kms_secret_ciphertext}
*/
export class DataGoogleKmsSecretCiphertext extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_kms_secret_ciphertext";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleKmsSecretCiphertext resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleKmsSecretCiphertext to import
  * @param importFromId The id of the existing DataGoogleKmsSecretCiphertext that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/data-sources/kms_secret_ciphertext#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleKmsSecretCiphertext to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_kms_secret_ciphertext", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/data-sources/kms_secret_ciphertext google_kms_secret_ciphertext} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleKmsSecretCiphertextConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleKmsSecretCiphertextConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_secret_ciphertext',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.14.0',
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
    this._cryptoKey = config.cryptoKey;
    this._id = config.id;
    this._plaintext = config.plaintext;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      crypto_key: cdktf.stringToTerraform(this._cryptoKey),
      id: cdktf.stringToTerraform(this._id),
      plaintext: cdktf.stringToTerraform(this._plaintext),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      plaintext: {
        value: cdktf.stringToHclTerraform(this._plaintext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
