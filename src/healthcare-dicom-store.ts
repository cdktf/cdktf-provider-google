// https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthcareDicomStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifies the dataset addressed by this request. Must be in the format
'projects/{project}/locations/{location}/datasets/{dataset}'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store.html#dataset HealthcareDicomStore#dataset}
  */
  readonly dataset: string;
  /**
  * User-supplied key-value pairs used to organize DICOM stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store.html#labels HealthcareDicomStore#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The resource name for the DicomStore.

** Changing this property may recreate the Dicom store (removing all data) **
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store.html#name HealthcareDicomStore#name}
  */
  readonly name: string;
  /**
  * notification_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store.html#notification_config HealthcareDicomStore#notification_config}
  */
  readonly notificationConfig?: HealthcareDicomStoreNotificationConfig[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store.html#timeouts HealthcareDicomStore#timeouts}
  */
  readonly timeouts?: HealthcareDicomStoreTimeouts;
}
export interface HealthcareDicomStoreNotificationConfig {
  /**
  * The Cloud Pub/Sub topic that notifications of changes are published on. Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store.html#pubsub_topic HealthcareDicomStore#pubsub_topic}
  */
  readonly pubsubTopic: string;
}

function healthcareDicomStoreNotificationConfigToTerraform(struct?: HealthcareDicomStoreNotificationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    pubsub_topic: cdktf.stringToTerraform(struct!.pubsubTopic),
  }
}

export interface HealthcareDicomStoreTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store.html#create HealthcareDicomStore#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store.html#delete HealthcareDicomStore#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store.html#update HealthcareDicomStore#update}
  */
  readonly update?: string;
}

function healthcareDicomStoreTimeoutsToTerraform(struct?: HealthcareDicomStoreTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store.html google_healthcare_dicom_store}
*/
export class HealthcareDicomStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_healthcare_dicom_store";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store.html google_healthcare_dicom_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthcareDicomStoreConfig
  */
  public constructor(scope: Construct, id: string, config: HealthcareDicomStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_dicom_store',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataset = config.dataset;
    this._labels = config.labels;
    this._name = config.name;
    this._notificationConfig = config.notificationConfig;
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // notification_config - computed: false, optional: true, required: false
  private _notificationConfig?: HealthcareDicomStoreNotificationConfig[];
  public get notificationConfig() {
    return this.interpolationForAttribute('notification_config') as any;
  }
  public set notificationConfig(value: HealthcareDicomStoreNotificationConfig[] ) {
    this._notificationConfig = value;
  }
  public resetNotificationConfig() {
    this._notificationConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigInput() {
    return this._notificationConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: HealthcareDicomStoreTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: HealthcareDicomStoreTimeouts ) {
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
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      notification_config: cdktf.listMapper(healthcareDicomStoreNotificationConfigToTerraform)(this._notificationConfig),
      timeouts: healthcareDicomStoreTimeoutsToTerraform(this._timeouts),
    };
  }
}
