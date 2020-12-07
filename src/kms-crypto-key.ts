// https://www.terraform.io/docs/providers/google/r/kms_crypto_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsCryptoKeyConfig extends cdktf.TerraformMetaArguments {
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
  /** If set to true, the request will create a CryptoKey without any CryptoKeyVersions. 
You must use the 'google_kms_key_ring_import_job' resource to import the CryptoKeyVersion. */
  readonly skipInitialVersionCreation?: boolean;
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

function kmsCryptoKeyTimeoutsToTerraform(struct?: KmsCryptoKeyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface KmsCryptoKeyVersionTemplate {
  /** The algorithm to use when creating a version based on this template.
See the [algorithm reference](https://cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm) for possible inputs. */
  readonly algorithm: string;
  /** The protection level to use when creating a version based on this template. Default value: "SOFTWARE" Possible values: ["SOFTWARE", "HSM"] */
  readonly protectionLevel?: string;
}

function kmsCryptoKeyVersionTemplateToTerraform(struct?: KmsCryptoKeyVersionTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    protection_level: cdktf.stringToTerraform(struct!.protectionLevel),
  }
}


// Resource

export class KmsCryptoKey extends cdktf.TerraformResource {

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
    this._skipInitialVersionCreation = config.skipInitialVersionCreation;
    this._timeouts = config.timeouts;
    this._versionTemplate = config.versionTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_ring - computed: false, optional: false, required: true
  private _keyRing: string;
  public get keyRing() {
    return this.getStringAttribute('key_ring');
  }
  public set keyRing(value: string) {
    this._keyRing = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRingInput() {
    return this._keyRing
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // purpose - computed: false, optional: true, required: false
  private _purpose?: string;
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string ) {
    this._purpose = value;
  }
  public resetPurpose() {
    this._purpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose
  }

  // rotation_period - computed: false, optional: true, required: false
  private _rotationPeriod?: string;
  public get rotationPeriod() {
    return this.getStringAttribute('rotation_period');
  }
  public set rotationPeriod(value: string ) {
    this._rotationPeriod = value;
  }
  public resetRotationPeriod() {
    this._rotationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPeriodInput() {
    return this._rotationPeriod
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // skip_initial_version_creation - computed: false, optional: true, required: false
  private _skipInitialVersionCreation?: boolean;
  public get skipInitialVersionCreation() {
    return this.getBooleanAttribute('skip_initial_version_creation');
  }
  public set skipInitialVersionCreation(value: boolean ) {
    this._skipInitialVersionCreation = value;
  }
  public resetSkipInitialVersionCreation() {
    this._skipInitialVersionCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInitialVersionCreationInput() {
    return this._skipInitialVersionCreation
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KmsCryptoKeyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: KmsCryptoKeyTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // version_template - computed: false, optional: true, required: false
  private _versionTemplate?: KmsCryptoKeyVersionTemplate[];
  public get versionTemplate() {
    return this.interpolationForAttribute('version_template') as any;
  }
  public set versionTemplate(value: KmsCryptoKeyVersionTemplate[] ) {
    this._versionTemplate = value;
  }
  public resetVersionTemplate() {
    this._versionTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionTemplateInput() {
    return this._versionTemplate
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key_ring: cdktf.stringToTerraform(this._keyRing),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      purpose: cdktf.stringToTerraform(this._purpose),
      rotation_period: cdktf.stringToTerraform(this._rotationPeriod),
      skip_initial_version_creation: cdktf.booleanToTerraform(this._skipInitialVersionCreation),
      timeouts: kmsCryptoKeyTimeoutsToTerraform(this._timeouts),
      version_template: cdktf.listMapper(kmsCryptoKeyVersionTemplateToTerraform)(this._versionTemplate),
    };
  }
}
