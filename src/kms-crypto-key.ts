// https://www.terraform.io/docs/providers/google/r/kms_crypto_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsCryptoKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED.
If not specified at creation time, the default duration is 24 hours.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key.html#destroy_scheduled_duration KmsCryptoKey#destroy_scheduled_duration}
  */
  readonly destroyScheduledDuration?: string;
  /**
  * Whether this key may contain imported versions only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key.html#import_only KmsCryptoKey#import_only}
  */
  readonly importOnly?: boolean | cdktf.IResolvable;
  /**
  * The KeyRing that this key belongs to.
Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key.html#key_ring KmsCryptoKey#key_ring}
  */
  readonly keyRing: string;
  /**
  * Labels with user-defined metadata to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key.html#labels KmsCryptoKey#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The resource name for the CryptoKey.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key.html#name KmsCryptoKey#name}
  */
  readonly name: string;
  /**
  * The immutable purpose of this CryptoKey. See the
[purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose)
for possible inputs. Default value: "ENCRYPT_DECRYPT" Possible values: ["ENCRYPT_DECRYPT", "ASYMMETRIC_SIGN", "ASYMMETRIC_DECRYPT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key.html#purpose KmsCryptoKey#purpose}
  */
  readonly purpose?: string;
  /**
  * Every time this period passes, generate a new CryptoKeyVersion and set it as the primary.
The first rotation will take place after the specified period. The rotation period has
the format of a decimal number with up to 9 fractional digits, followed by the
letter 's' (seconds). It must be greater than a day (ie, 86400).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key.html#rotation_period KmsCryptoKey#rotation_period}
  */
  readonly rotationPeriod?: string;
  /**
  * If set to true, the request will create a CryptoKey without any CryptoKeyVersions. 
You must use the 'google_kms_key_ring_import_job' resource to import the CryptoKeyVersion.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key.html#skip_initial_version_creation KmsCryptoKey#skip_initial_version_creation}
  */
  readonly skipInitialVersionCreation?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key.html#timeouts KmsCryptoKey#timeouts}
  */
  readonly timeouts?: KmsCryptoKeyTimeouts;
  /**
  * version_template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key.html#version_template KmsCryptoKey#version_template}
  */
  readonly versionTemplate?: KmsCryptoKeyVersionTemplate;
}
export interface KmsCryptoKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key.html#create KmsCryptoKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key.html#delete KmsCryptoKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key.html#update KmsCryptoKey#update}
  */
  readonly update?: string;
}

function kmsCryptoKeyTimeoutsToTerraform(struct?: KmsCryptoKeyTimeoutsOutputReference | KmsCryptoKeyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class KmsCryptoKeyTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}
export interface KmsCryptoKeyVersionTemplate {
  /**
  * The algorithm to use when creating a version based on this template.
See the [algorithm reference](https://cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm) for possible inputs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key.html#algorithm KmsCryptoKey#algorithm}
  */
  readonly algorithm: string;
  /**
  * The protection level to use when creating a version based on this template. Default value: "SOFTWARE" Possible values: ["SOFTWARE", "HSM"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key.html#protection_level KmsCryptoKey#protection_level}
  */
  readonly protectionLevel?: string;
}

function kmsCryptoKeyVersionTemplateToTerraform(struct?: KmsCryptoKeyVersionTemplateOutputReference | KmsCryptoKeyVersionTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    protection_level: cdktf.stringToTerraform(struct!.protectionLevel),
  }
}

export class KmsCryptoKeyVersionTemplateOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm
  }

  // protection_level - computed: false, optional: true, required: false
  private _protectionLevel?: string | undefined; 
  public get protectionLevel() {
    return this.getStringAttribute('protection_level');
  }
  public set protectionLevel(value: string | undefined) {
    this._protectionLevel = value;
  }
  public resetProtectionLevel() {
    this._protectionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionLevelInput() {
    return this._protectionLevel
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key.html google_kms_crypto_key}
*/
export class KmsCryptoKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_kms_crypto_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key.html google_kms_crypto_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsCryptoKeyConfig
  */
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
    this._destroyScheduledDuration = config.destroyScheduledDuration;
    this._importOnly = config.importOnly;
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

  // destroy_scheduled_duration - computed: true, optional: true, required: false
  private _destroyScheduledDuration?: string | undefined; 
  public get destroyScheduledDuration() {
    return this.getStringAttribute('destroy_scheduled_duration');
  }
  public set destroyScheduledDuration(value: string | undefined) {
    this._destroyScheduledDuration = value;
  }
  public resetDestroyScheduledDuration() {
    this._destroyScheduledDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyScheduledDurationInput() {
    return this._destroyScheduledDuration
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_only - computed: true, optional: true, required: false
  private _importOnly?: boolean | cdktf.IResolvable | undefined; 
  public get importOnly() {
    return this.getBooleanAttribute('import_only') as any;
  }
  public set importOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._importOnly = value;
  }
  public resetImportOnly() {
    this._importOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importOnlyInput() {
    return this._importOnly
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
    return this._keyRing
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  private _name?: string; 
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
  private _purpose?: string | undefined; 
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string | undefined) {
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
  private _rotationPeriod?: string | undefined; 
  public get rotationPeriod() {
    return this.getStringAttribute('rotation_period');
  }
  public set rotationPeriod(value: string | undefined) {
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
  private _skipInitialVersionCreation?: boolean | cdktf.IResolvable | undefined; 
  public get skipInitialVersionCreation() {
    return this.getBooleanAttribute('skip_initial_version_creation') as any;
  }
  public set skipInitialVersionCreation(value: boolean | cdktf.IResolvable | undefined) {
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
  private _timeouts?: KmsCryptoKeyTimeouts | undefined; 
  private __timeoutsOutput = new KmsCryptoKeyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: KmsCryptoKeyTimeouts | undefined) {
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
  private _versionTemplate?: KmsCryptoKeyVersionTemplate | undefined; 
  private __versionTemplateOutput = new KmsCryptoKeyVersionTemplateOutputReference(this as any, "version_template", true);
  public get versionTemplate() {
    return this.__versionTemplateOutput;
  }
  public putVersionTemplate(value: KmsCryptoKeyVersionTemplate | undefined) {
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
      destroy_scheduled_duration: cdktf.stringToTerraform(this._destroyScheduledDuration),
      import_only: cdktf.booleanToTerraform(this._importOnly),
      key_ring: cdktf.stringToTerraform(this._keyRing),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      purpose: cdktf.stringToTerraform(this._purpose),
      rotation_period: cdktf.stringToTerraform(this._rotationPeriod),
      skip_initial_version_creation: cdktf.booleanToTerraform(this._skipInitialVersionCreation),
      timeouts: kmsCryptoKeyTimeoutsToTerraform(this._timeouts),
      version_template: kmsCryptoKeyVersionTemplateToTerraform(this._versionTemplate),
    };
  }
}
