// https://www.terraform.io/docs/providers/google/r/healthcare_consent_store.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthcareConsentStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifies the dataset addressed by this request. Must be in the format
'projects/{project}/locations/{location}/datasets/{dataset}'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store.html#dataset HealthcareConsentStore#dataset}
  */
  readonly dataset: string;
  /**
  * Default time to live for consents in this store. Must be at least 24 hours. Updating this field will not affect the expiration time of existing consents.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store.html#default_consent_ttl HealthcareConsentStore#default_consent_ttl}
  */
  readonly defaultConsentTtl?: string;
  /**
  * If true, [consents.patch] [google.cloud.healthcare.v1.consent.UpdateConsent] creates the consent if it does not already exist.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store.html#enable_consent_create_on_update HealthcareConsentStore#enable_consent_create_on_update}
  */
  readonly enableConsentCreateOnUpdate?: boolean | cdktf.IResolvable;
  /**
  * User-supplied key-value pairs used to organize Consent stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: '[\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}'

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: '[\p{Ll}\p{Lo}\p{N}_-]{0,63}'

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store.html#labels HealthcareConsentStore#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The name of this ConsentStore, for example:
"consent1"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store.html#name HealthcareConsentStore#name}
  */
  readonly name: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store.html#timeouts HealthcareConsentStore#timeouts}
  */
  readonly timeouts?: HealthcareConsentStoreTimeouts;
}
export interface HealthcareConsentStoreTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store.html#create HealthcareConsentStore#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store.html#delete HealthcareConsentStore#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store.html#update HealthcareConsentStore#update}
  */
  readonly update?: string;
}

function healthcareConsentStoreTimeoutsToTerraform(struct?: HealthcareConsentStoreTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store.html google_healthcare_consent_store}
*/
export class HealthcareConsentStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_healthcare_consent_store";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store.html google_healthcare_consent_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthcareConsentStoreConfig
  */
  public constructor(scope: Construct, id: string, config: HealthcareConsentStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_consent_store',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataset = config.dataset;
    this._defaultConsentTtl = config.defaultConsentTtl;
    this._enableConsentCreateOnUpdate = config.enableConsentCreateOnUpdate;
    this._labels = config.labels;
    this._name = config.name;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dataset - computed: false, optional: false, required: true
  private _dataset: string;
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset
  }

  // default_consent_ttl - computed: false, optional: true, required: false
  private _defaultConsentTtl?: string;
  public get defaultConsentTtl() {
    return this.getStringAttribute('default_consent_ttl');
  }
  public set defaultConsentTtl(value: string ) {
    this._defaultConsentTtl = value;
  }
  public resetDefaultConsentTtl() {
    this._defaultConsentTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultConsentTtlInput() {
    return this._defaultConsentTtl
  }

  // enable_consent_create_on_update - computed: false, optional: true, required: false
  private _enableConsentCreateOnUpdate?: boolean | cdktf.IResolvable;
  public get enableConsentCreateOnUpdate() {
    return this.getBooleanAttribute('enable_consent_create_on_update');
  }
  public set enableConsentCreateOnUpdate(value: boolean | cdktf.IResolvable ) {
    this._enableConsentCreateOnUpdate = value;
  }
  public resetEnableConsentCreateOnUpdate() {
    this._enableConsentCreateOnUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConsentCreateOnUpdateInput() {
    return this._enableConsentCreateOnUpdate
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable;
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable ) {
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: HealthcareConsentStoreTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: HealthcareConsentStoreTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dataset: cdktf.stringToTerraform(this._dataset),
      default_consent_ttl: cdktf.stringToTerraform(this._defaultConsentTtl),
      enable_consent_create_on_update: cdktf.booleanToTerraform(this._enableConsentCreateOnUpdate),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      timeouts: healthcareConsentStoreTimeoutsToTerraform(this._timeouts),
    };
  }
}
