// https://www.terraform.io/docs/providers/google/r/kms_crypto_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsCryptoKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED.
If not specified at creation time, the default duration is 24 hours.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key#destroy_scheduled_duration KmsCryptoKey#destroy_scheduled_duration}
  */
  readonly destroyScheduledDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key#id KmsCryptoKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether this key may contain imported versions only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key#import_only KmsCryptoKey#import_only}
  */
  readonly importOnly?: boolean | cdktf.IResolvable;
  /**
  * The KeyRing that this key belongs to.
Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key#key_ring KmsCryptoKey#key_ring}
  */
  readonly keyRing: string;
  /**
  * Labels with user-defined metadata to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key#labels KmsCryptoKey#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name for the CryptoKey.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key#name KmsCryptoKey#name}
  */
  readonly name: string;
  /**
  * The immutable purpose of this CryptoKey. See the
[purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose)
for possible inputs. Default value: "ENCRYPT_DECRYPT" Possible values: ["ENCRYPT_DECRYPT", "ASYMMETRIC_SIGN", "ASYMMETRIC_DECRYPT", "MAC"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key#purpose KmsCryptoKey#purpose}
  */
  readonly purpose?: string;
  /**
  * Every time this period passes, generate a new CryptoKeyVersion and set it as the primary.
The first rotation will take place after the specified period. The rotation period has
the format of a decimal number with up to 9 fractional digits, followed by the
letter 's' (seconds). It must be greater than a day (ie, 86400).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key#rotation_period KmsCryptoKey#rotation_period}
  */
  readonly rotationPeriod?: string;
  /**
  * If set to true, the request will create a CryptoKey without any CryptoKeyVersions. 
You must use the 'google_kms_key_ring_import_job' resource to import the CryptoKeyVersion.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key#skip_initial_version_creation KmsCryptoKey#skip_initial_version_creation}
  */
  readonly skipInitialVersionCreation?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key#timeouts KmsCryptoKey#timeouts}
  */
  readonly timeouts?: KmsCryptoKeyTimeouts;
  /**
  * version_template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key#version_template KmsCryptoKey#version_template}
  */
  readonly versionTemplate?: KmsCryptoKeyVersionTemplate;
}
export interface KmsCryptoKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key#create KmsCryptoKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key#delete KmsCryptoKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key#update KmsCryptoKey#update}
  */
  readonly update?: string;
}

export function kmsCryptoKeyTimeoutsToTerraform(struct?: KmsCryptoKeyTimeoutsOutputReference | KmsCryptoKeyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KmsCryptoKeyTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsCryptoKeyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface KmsCryptoKeyVersionTemplate {
  /**
  * The algorithm to use when creating a version based on this template.
See the [algorithm reference](https://cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm) for possible inputs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key#algorithm KmsCryptoKey#algorithm}
  */
  readonly algorithm: string;
  /**
  * The protection level to use when creating a version based on this template. Possible values include "SOFTWARE", "HSM", "EXTERNAL", "EXTERNAL_VPC". Defaults to "SOFTWARE".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key#protection_level KmsCryptoKey#protection_level}
  */
  readonly protectionLevel?: string;
}

export function kmsCryptoKeyVersionTemplateToTerraform(struct?: KmsCryptoKeyVersionTemplateOutputReference | KmsCryptoKeyVersionTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    protection_level: cdktf.stringToTerraform(struct!.protectionLevel),
  }
}

export class KmsCryptoKeyVersionTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KmsCryptoKeyVersionTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._protectionLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionLevel = this._protectionLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsCryptoKeyVersionTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._protectionLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._protectionLevel = value.protectionLevel;
    }
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
    return this._algorithm;
  }

  // protection_level - computed: false, optional: true, required: false
  private _protectionLevel?: string; 
  public get protectionLevel() {
    return this.getStringAttribute('protection_level');
  }
  public set protectionLevel(value: string) {
    this._protectionLevel = value;
  }
  public resetProtectionLevel() {
    this._protectionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionLevelInput() {
    return this._protectionLevel;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key google_kms_crypto_key}
*/
export class KmsCryptoKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_kms_crypto_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key google_kms_crypto_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsCryptoKeyConfig
  */
  public constructor(scope: Construct, id: string, config: KmsCryptoKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_crypto_key',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
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
    this._destroyScheduledDuration = config.destroyScheduledDuration;
    this._id = config.id;
    this._importOnly = config.importOnly;
    this._keyRing = config.keyRing;
    this._labels = config.labels;
    this._name = config.name;
    this._purpose = config.purpose;
    this._rotationPeriod = config.rotationPeriod;
    this._skipInitialVersionCreation = config.skipInitialVersionCreation;
    this._timeouts.internalValue = config.timeouts;
    this._versionTemplate.internalValue = config.versionTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destroy_scheduled_duration - computed: true, optional: true, required: false
  private _destroyScheduledDuration?: string; 
  public get destroyScheduledDuration() {
    return this.getStringAttribute('destroy_scheduled_duration');
  }
  public set destroyScheduledDuration(value: string) {
    this._destroyScheduledDuration = value;
  }
  public resetDestroyScheduledDuration() {
    this._destroyScheduledDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyScheduledDurationInput() {
    return this._destroyScheduledDuration;
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

  // import_only - computed: true, optional: true, required: false
  private _importOnly?: boolean | cdktf.IResolvable; 
  public get importOnly() {
    return this.getBooleanAttribute('import_only');
  }
  public set importOnly(value: boolean | cdktf.IResolvable) {
    this._importOnly = value;
  }
  public resetImportOnly() {
    this._importOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importOnlyInput() {
    return this._importOnly;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // purpose - computed: false, optional: true, required: false
  private _purpose?: string; 
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string) {
    this._purpose = value;
  }
  public resetPurpose() {
    this._purpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose;
  }

  // rotation_period - computed: false, optional: true, required: false
  private _rotationPeriod?: string; 
  public get rotationPeriod() {
    return this.getStringAttribute('rotation_period');
  }
  public set rotationPeriod(value: string) {
    this._rotationPeriod = value;
  }
  public resetRotationPeriod() {
    this._rotationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPeriodInput() {
    return this._rotationPeriod;
  }

  // skip_initial_version_creation - computed: false, optional: true, required: false
  private _skipInitialVersionCreation?: boolean | cdktf.IResolvable; 
  public get skipInitialVersionCreation() {
    return this.getBooleanAttribute('skip_initial_version_creation');
  }
  public set skipInitialVersionCreation(value: boolean | cdktf.IResolvable) {
    this._skipInitialVersionCreation = value;
  }
  public resetSkipInitialVersionCreation() {
    this._skipInitialVersionCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInitialVersionCreationInput() {
    return this._skipInitialVersionCreation;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KmsCryptoKeyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KmsCryptoKeyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // version_template - computed: false, optional: true, required: false
  private _versionTemplate = new KmsCryptoKeyVersionTemplateOutputReference(this, "version_template");
  public get versionTemplate() {
    return this._versionTemplate;
  }
  public putVersionTemplate(value: KmsCryptoKeyVersionTemplate) {
    this._versionTemplate.internalValue = value;
  }
  public resetVersionTemplate() {
    this._versionTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionTemplateInput() {
    return this._versionTemplate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destroy_scheduled_duration: cdktf.stringToTerraform(this._destroyScheduledDuration),
      id: cdktf.stringToTerraform(this._id),
      import_only: cdktf.booleanToTerraform(this._importOnly),
      key_ring: cdktf.stringToTerraform(this._keyRing),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      purpose: cdktf.stringToTerraform(this._purpose),
      rotation_period: cdktf.stringToTerraform(this._rotationPeriod),
      skip_initial_version_creation: cdktf.booleanToTerraform(this._skipInitialVersionCreation),
      timeouts: kmsCryptoKeyTimeoutsToTerraform(this._timeouts.internalValue),
      version_template: kmsCryptoKeyVersionTemplateToTerraform(this._versionTemplate.internalValue),
    };
  }
}
