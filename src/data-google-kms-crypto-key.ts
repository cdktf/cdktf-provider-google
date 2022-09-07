// https://www.terraform.io/docs/providers/google/d/kms_crypto_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleKmsCryptoKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/kms_crypto_key#id DataGoogleKmsCryptoKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
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
export interface DataGoogleKmsCryptoKeyVersionTemplate {
}

export function dataGoogleKmsCryptoKeyVersionTemplateToTerraform(struct?: DataGoogleKmsCryptoKeyVersionTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleKmsCryptoKeyVersionTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleKmsCryptoKeyVersionTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleKmsCryptoKeyVersionTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // protection_level - computed: true, optional: false, required: false
  public get protectionLevel() {
    return this.getStringAttribute('protection_level');
  }
}

export class DataGoogleKmsCryptoKeyVersionTemplateList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleKmsCryptoKeyVersionTemplateOutputReference {
    return new DataGoogleKmsCryptoKeyVersionTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/kms_crypto_key google_kms_crypto_key}
*/
export class DataGoogleKmsCryptoKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_kms_crypto_key";

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
    this._id = config.id;
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

  // import_only - computed: true, optional: false, required: false
  public get importOnly() {
    return this.getBooleanAttribute('import_only');
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
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
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

  // purpose - computed: true, optional: false, required: false
  public get purpose() {
    return this.getStringAttribute('purpose');
  }

  // rotation_period - computed: true, optional: false, required: false
  public get rotationPeriod() {
    return this.getStringAttribute('rotation_period');
  }

  // skip_initial_version_creation - computed: true, optional: false, required: false
  public get skipInitialVersionCreation() {
    return this.getBooleanAttribute('skip_initial_version_creation');
  }

  // version_template - computed: true, optional: false, required: false
  private _versionTemplate = new DataGoogleKmsCryptoKeyVersionTemplateList(this, "version_template", false);
  public get versionTemplate() {
    return this._versionTemplate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      key_ring: cdktf.stringToTerraform(this._keyRing),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
