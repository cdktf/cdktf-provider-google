// https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface HealthcareHl7V2StoreConfig extends TerraformMetaArguments {
  /** Identifies the dataset addressed by this request. Must be in the format
'projects/{project}/locations/{location}/datasets/{dataset}' */
  readonly dataset: string;
  /** User-supplied key-value pairs used to organize HL7v2 stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. */
  readonly labels?: { [key: string]: string };
  /** The resource name for the Hl7V2Store.

** Changing this property may recreate the Hl7v2 store (removing all data) ** */
  readonly name: string;
  /** notification_config block */
  readonly notificationConfig?: HealthcareHl7V2StoreNotificationConfig[];
  /** notification_configs block */
  readonly notificationConfigs?: HealthcareHl7V2StoreNotificationConfigs[];
  /** parser_config block */
  readonly parserConfig?: HealthcareHl7V2StoreParserConfig[];
  /** timeouts block */
  readonly timeouts?: HealthcareHl7V2StoreTimeouts;
}
export interface HealthcareHl7V2StoreNotificationConfig {
  /** The Cloud Pub/Sub topic that notifications of changes are published on. Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. cloud-healthcare@system.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail. */
  readonly pubsubTopic: string;
}
export interface HealthcareHl7V2StoreNotificationConfigs {
  /** Restricts notifications sent for messages matching a filter. If this is empty, all messages
are matched. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings

Fields/functions available for filtering are:

* messageType, from the MSH-9.1 field. For example, NOT messageType = "ADT".
* send_date or sendDate, the YYYY-MM-DD date the message was sent in the dataset's timeZone, from the MSH-7 segment. For example, send_date < "2017-01-02".
* sendTime, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, sendTime < "2017-01-02T00:00:00-05:00".
* sendFacility, the care center that the message came from, from the MSH-4 segment. For example, sendFacility = "ABC".
* PatientId(value, type), which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments. For example, PatientId("123456", "MRN").
* labels.x, a string value of the label with key x as set using the Message.labels map. For example, labels."priority"="high". The operator :* can be used to assert the existence of a label. For example, labels."priority":*. */
  readonly filter?: string;
  /** The Cloud Pub/Sub topic that notifications of changes are published on. Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. cloud-healthcare@system.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

If a notification cannot be published to Cloud Pub/Sub, errors will be logged to Stackdriver */
  readonly pubsubTopic: string;
}
export interface HealthcareHl7V2StoreParserConfig {
  /** Determines whether messages with no header are allowed. */
  readonly allowNullHeader?: boolean;
  /** JSON encoded string for schemas used to parse messages in this
store if schematized parsing is desired. */
  readonly schema?: string;
  /** Byte(s) to be used as the segment terminator. If this is unset, '\r' will be used as segment terminator.

A base64-encoded string. */
  readonly segmentTerminator?: string;
}
export interface HealthcareHl7V2StoreTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class HealthcareHl7V2Store extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: HealthcareHl7V2StoreConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_hl7_v2_store',
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
    this._notificationConfigs = config.notificationConfigs;
    this._parserConfig = config.parserConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dataset - computed: false, optional: false, required: true
  private _dataset: string;
  public get dataset() {
    return this._dataset;
  }
  public set dataset(value: string) {
    this._dataset = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // notification_config - computed: false, optional: true, required: false
  private _notificationConfig?: HealthcareHl7V2StoreNotificationConfig[];
  public get notificationConfig() {
    return this._notificationConfig;
  }
  public set notificationConfig(value: HealthcareHl7V2StoreNotificationConfig[] | undefined) {
    this._notificationConfig = value;
  }

  // notification_configs - computed: false, optional: true, required: false
  private _notificationConfigs?: HealthcareHl7V2StoreNotificationConfigs[];
  public get notificationConfigs() {
    return this._notificationConfigs;
  }
  public set notificationConfigs(value: HealthcareHl7V2StoreNotificationConfigs[] | undefined) {
    this._notificationConfigs = value;
  }

  // parser_config - computed: false, optional: true, required: false
  private _parserConfig?: HealthcareHl7V2StoreParserConfig[];
  public get parserConfig() {
    return this._parserConfig;
  }
  public set parserConfig(value: HealthcareHl7V2StoreParserConfig[] | undefined) {
    this._parserConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: HealthcareHl7V2StoreTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: HealthcareHl7V2StoreTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      dataset: this._dataset,
      labels: this._labels,
      name: this._name,
      notification_config: this._notificationConfig,
      notification_configs: this._notificationConfigs,
      parser_config: this._parserConfig,
      timeouts: this._timeouts,
    };
  }
}
