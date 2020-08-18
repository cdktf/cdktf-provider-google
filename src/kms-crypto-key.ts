// https://www.terraform.io/docs/providers/google/r/kms_crypto_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KmsCryptoKeyConfig extends TerraformMetaArguments {
  /** The KeyRing that this key belongs to.
Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''. */
  readonly keyRing: string;
  /** Labels with user-defined metadata to apply to this resource. */
  readonly labels?: { [key: string]: string };
  /** The resource name for the CryptoKey. */
  readonly name: string;
  /** The immutable purpose of this CryptoKey. See the
[purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose)
for possible inputs. Default value: "ENCRYPT_DECRYPT" Possible values: ["ENCRYPT_DECRYPT", "ASYMMETRIC_SIGN", "ASYMMETRIC_DECRYPT"] */
  readonly purpose?: string;
  /** Every time this period passes, generate a new CryptoKeyVersion and set it as the primary.
The first rotation will take place after the specified period. The rotation period has
the format of a decimal number with up to 9 fractional digits, followed by the
letter 's' (seconds). It must be greater than a day (ie, 86400). */
  readonly rotationPeriod?: string;
  /** timeouts block */
  readonly timeouts?: KmsCryptoKeyTimeouts;
  /** version_template block */
  readonly versionTemplate?: KmsCryptoKeyVersionTemplate[];
}
export interface KmsCryptoKeyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}
export interface KmsCryptoKeyVersionTemplate {
  /** The algorithm to use when creating a version based on this template.
See the [algorithm reference](https://cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm) for possible inputs. */
  readonly algorithm: string;
  /** The protection level to use when creating a version based on this template. Default value: "SOFTWARE" Possible values: ["SOFTWARE", "HSM"] */
  readonly protectionLevel?: string;
}

// Resource

export class KmsCryptoKey extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KmsCryptoKeyConfig) {
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
    this._labels = config.labels;
    this._name = config.name;
    this._purpose = config.purpose;
    this._rotationPeriod = config.rotationPeriod;
    this._timeouts = config.timeouts;
    this._versionTemplate = config.versionTemplate;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // purpose - computed: false, optional: true, required: false
  private _purpose?: string;
  public get purpose() {
    return this._purpose;
  }
  public set purpose(value: string | undefined) {
    this._purpose = value;
  }

  // rotation_period - computed: false, optional: true, required: false
  private _rotationPeriod?: string;
  public get rotationPeriod() {
    return this._rotationPeriod;
  }
  public set rotationPeriod(value: string | undefined) {
    this._rotationPeriod = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KmsCryptoKeyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: KmsCryptoKeyTimeouts | undefined) {
    this._timeouts = value;
  }

  // version_template - computed: false, optional: true, required: false
  private _versionTemplate?: KmsCryptoKeyVersionTemplate[];
  public get versionTemplate() {
    return this._versionTemplate;
  }
  public set versionTemplate(value: KmsCryptoKeyVersionTemplate[] | undefined) {
    this._versionTemplate = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      key_ring: this._keyRing,
      labels: this._labels,
      name: this._name,
      purpose: this._purpose,
      rotation_period: this._rotationPeriod,
      timeouts: this._timeouts,
      version_template: this._versionTemplate,
    };
  }
}
