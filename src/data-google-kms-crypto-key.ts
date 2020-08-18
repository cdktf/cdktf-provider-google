// https://www.terraform.io/docs/providers/google/r/data_google_kms_crypto_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGoogleKmsCryptoKeyConfig extends TerraformMetaArguments {
  /** The KeyRing that this key belongs to.
Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''. */
  readonly keyRing: string;
  /** The resource name for the CryptoKey. */
  readonly name: string;
}
export class DataGoogleKmsCryptoKeyVersionTemplate extends ComplexComputedList {

  // algorithm - computed: true, optional: false, required: true
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // protection_level - computed: true, optional: false, required: true
  public get protectionLevel() {
    return this.getStringAttribute('protection_level');
  }
}

// Resource

export class DataGoogleKmsCryptoKey extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleKmsCryptoKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_crypto_key',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyRing = config.keyRing;
    this._name = config.name;
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

  // key_ring - computed: false, optional: false, required: true
  private _keyRing: string;
  public get keyRing() {
    return this._keyRing;
  }
  public set keyRing(value: string) {
    this._keyRing = value;
  }

  // labels - computed: true, optional: false, required: true
  public labels(key: string): string {
    return new StringMap(this, 'labels').lookup(key);
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // purpose - computed: true, optional: false, required: true
  public get purpose() {
    return this.getStringAttribute('purpose');
  }

  // rotation_period - computed: true, optional: false, required: true
  public get rotationPeriod() {
    return this.getStringAttribute('rotation_period');
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // version_template - computed: true, optional: false, required: true
  public versionTemplate(index: string) {
    return new DataGoogleKmsCryptoKeyVersionTemplate(this, 'version_template', index);
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      key_ring: this._keyRing,
      name: this._name,
    };
  }
}
