// https://www.terraform.io/docs/providers/google/d/kms_crypto_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleKmsCryptoKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The KeyRing that this key belongs to.
Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/kms_crypto_key#key_ring DataGoogleKmsCryptoKey#key_ring}
  */
  readonly keyRing: string;
  /**
  * The resource name for the CryptoKey.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/kms_crypto_key#name DataGoogleKmsCryptoKey#name}
  */
  readonly name: string;
}
export class DataGoogleKmsCryptoKeyVersionTemplate extends cdktf.ComplexComputedList {

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // protection_level - computed: true, optional: false, required: false
  public get protectionLevel() {
    return this.getStringAttribute('protection_level');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/kms_crypto_key google_kms_crypto_key}
*/
export class DataGoogleKmsCryptoKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_kms_crypto_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/kms_crypto_key google_kms_crypto_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleKmsCryptoKeyConfig
  */
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

  // destroy_scheduled_duration - computed: true, optional: false, required: false
  public get destroyScheduledDuration() {
    return this.getStringAttribute('destroy_scheduled_duration');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_only - computed: true, optional: false, required: false
  public get importOnly() {
    return this.getBooleanAttribute('import_only') as any;
  }

  // key_ring - computed: false, optional: false, required: true
  private _keyRing?: string; 
  public get keyRing() {
    return this.getStringAttribute('key_ring');
  }
  public set keyRing(value: string) {
    this._keyRing = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRingInput() {
    return this._keyRing;
  }

  // labels - computed: true, optional: false, required: false
  public labels(key: string): string {
    return new cdktf.StringMap(this, 'labels').lookup(key);
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // purpose - computed: true, optional: false, required: false
  public get purpose() {
    return this.getStringAttribute('purpose');
  }

  // rotation_period - computed: true, optional: false, required: false
  public get rotationPeriod() {
    return this.getStringAttribute('rotation_period');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // skip_initial_version_creation - computed: true, optional: false, required: false
  public get skipInitialVersionCreation() {
    return this.getBooleanAttribute('skip_initial_version_creation') as any;
  }

  // version_template - computed: true, optional: false, required: false
  public versionTemplate(index: string) {
    return new DataGoogleKmsCryptoKeyVersionTemplate(this, 'version_template', index);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key_ring: cdktf.stringToTerraform(this._keyRing),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
