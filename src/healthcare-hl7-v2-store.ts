// https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthcareHl7V2StoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifies the dataset addressed by this request. Must be in the format
'projects/{project}/locations/{location}/datasets/{dataset}'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store.html#dataset HealthcareHl7V2Store#dataset}
  */
  readonly dataset: string;
  /**
  * User-supplied key-value pairs used to organize HL7v2 stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store.html#labels HealthcareHl7V2Store#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The resource name for the Hl7V2Store.

** Changing this property may recreate the Hl7v2 store (removing all data) **
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store.html#name HealthcareHl7V2Store#name}
  */
  readonly name: string;
  /**
  * notification_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store.html#notification_config HealthcareHl7V2Store#notification_config}
  */
  readonly notificationConfig?: HealthcareHl7V2StoreNotificationConfig;
  /**
  * notification_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store.html#notification_configs HealthcareHl7V2Store#notification_configs}
  */
  readonly notificationConfigs?: HealthcareHl7V2StoreNotificationConfigs[];
  /**
  * parser_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store.html#parser_config HealthcareHl7V2Store#parser_config}
  */
  readonly parserConfig?: HealthcareHl7V2StoreParserConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store.html#timeouts HealthcareHl7V2Store#timeouts}
  */
  readonly timeouts?: HealthcareHl7V2StoreTimeouts;
}
export interface HealthcareHl7V2StoreNotificationConfig {
  /**
  * The Cloud Pub/Sub topic that notifications of changes are published on. Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store.html#pubsub_topic HealthcareHl7V2Store#pubsub_topic}
  */
  readonly pubsubTopic: string;
}

function healthcareHl7V2StoreNotificationConfigToTerraform(struct?: HealthcareHl7V2StoreNotificationConfigOutputReference | HealthcareHl7V2StoreNotificationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pubsub_topic: cdktf.stringToTerraform(struct!.pubsubTopic),
  }
}

export class HealthcareHl7V2StoreNotificationConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // pubsub_topic - computed: false, optional: false, required: true
  private _pubsubTopic?: string; 
  public get pubsubTopic() {
    return this.getStringAttribute('pubsub_topic');
  }
  public set pubsubTopic(value: string) {
    this._pubsubTopic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubTopicInput() {
    return this._pubsubTopic
  }
}
export interface HealthcareHl7V2StoreNotificationConfigs {
  /**
  * Restricts notifications sent for messages matching a filter. If this is empty, all messages
are matched. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings

Fields/functions available for filtering are:

* messageType, from the MSH-9.1 field. For example, NOT messageType = "ADT".
* send_date or sendDate, the YYYY-MM-DD date the message was sent in the dataset's timeZone, from the MSH-7 segment. For example, send_date < "2017-01-02".
* sendTime, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, sendTime < "2017-01-02T00:00:00-05:00".
* sendFacility, the care center that the message came from, from the MSH-4 segment. For example, sendFacility = "ABC".
* PatientId(value, type), which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments. For example, PatientId("123456", "MRN").
* labels.x, a string value of the label with key x as set using the Message.labels map. For example, labels."priority"="high". The operator :* can be used to assert the existence of a label. For example, labels."priority":*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store.html#filter HealthcareHl7V2Store#filter}
  */
  readonly filter?: string;
  /**
  * The Cloud Pub/Sub topic that notifications of changes are published on. Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

If a notification cannot be published to Cloud Pub/Sub, errors will be logged to Stackdriver
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store.html#pubsub_topic HealthcareHl7V2Store#pubsub_topic}
  */
  readonly pubsubTopic: string;
}

function healthcareHl7V2StoreNotificationConfigsToTerraform(struct?: HealthcareHl7V2StoreNotificationConfigs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    pubsub_topic: cdktf.stringToTerraform(struct!.pubsubTopic),
  }
}

export interface HealthcareHl7V2StoreParserConfig {
  /**
  * Determines whether messages with no header are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store.html#allow_null_header HealthcareHl7V2Store#allow_null_header}
  */
  readonly allowNullHeader?: boolean | cdktf.IResolvable;
  /**
  * JSON encoded string for schemas used to parse messages in this
store if schematized parsing is desired.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store.html#schema HealthcareHl7V2Store#schema}
  */
  readonly schema?: string;
  /**
  * Byte(s) to be used as the segment terminator. If this is unset, '\r' will be used as segment terminator.

A base64-encoded string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store.html#segment_terminator HealthcareHl7V2Store#segment_terminator}
  */
  readonly segmentTerminator?: string;
  /**
  * The version of the unschematized parser to be used when a custom 'schema' is not set. Default value: "V1" Possible values: ["V1", "V2"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store.html#version HealthcareHl7V2Store#version}
  */
  readonly version?: string;
}

function healthcareHl7V2StoreParserConfigToTerraform(struct?: HealthcareHl7V2StoreParserConfigOutputReference | HealthcareHl7V2StoreParserConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_null_header: cdktf.booleanToTerraform(struct!.allowNullHeader),
    schema: cdktf.stringToTerraform(struct!.schema),
    segment_terminator: cdktf.stringToTerraform(struct!.segmentTerminator),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class HealthcareHl7V2StoreParserConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allow_null_header - computed: false, optional: true, required: false
  private _allowNullHeader?: boolean | cdktf.IResolvable | undefined; 
  public get allowNullHeader() {
    return this.getBooleanAttribute('allow_null_header') as any;
  }
  public set allowNullHeader(value: boolean | cdktf.IResolvable | undefined) {
    this._allowNullHeader = value;
  }
  public resetAllowNullHeader() {
    this._allowNullHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNullHeaderInput() {
    return this._allowNullHeader
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string | undefined; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string | undefined) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema
  }

  // segment_terminator - computed: false, optional: true, required: false
  private _segmentTerminator?: string | undefined; 
  public get segmentTerminator() {
    return this.getStringAttribute('segment_terminator');
  }
  public set segmentTerminator(value: string | undefined) {
    this._segmentTerminator = value;
  }
  public resetSegmentTerminator() {
    this._segmentTerminator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentTerminatorInput() {
    return this._segmentTerminator
  }

  // version - computed: false, optional: true, required: false
  private _version?: string | undefined; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }
}
export interface HealthcareHl7V2StoreTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store.html#create HealthcareHl7V2Store#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store.html#delete HealthcareHl7V2Store#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store.html#update HealthcareHl7V2Store#update}
  */
  readonly update?: string;
}

function healthcareHl7V2StoreTimeoutsToTerraform(struct?: HealthcareHl7V2StoreTimeoutsOutputReference | HealthcareHl7V2StoreTimeouts): any {
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

export class HealthcareHl7V2StoreTimeoutsOutputReference extends cdktf.ComplexObject {
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store.html google_healthcare_hl7_v2_store}
*/
export class HealthcareHl7V2Store extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_healthcare_hl7_v2_store";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store.html google_healthcare_hl7_v2_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthcareHl7V2StoreConfig
  */
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
  private _dataset?: string; 
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // notification_config - computed: false, optional: true, required: false
  private _notificationConfig?: HealthcareHl7V2StoreNotificationConfig | undefined; 
  private __notificationConfigOutput = new HealthcareHl7V2StoreNotificationConfigOutputReference(this as any, "notification_config", true);
  public get notificationConfig() {
    return this.__notificationConfigOutput;
  }
  public putNotificationConfig(value: HealthcareHl7V2StoreNotificationConfig | undefined) {
    this._notificationConfig = value;
  }
  public resetNotificationConfig() {
    this._notificationConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigInput() {
    return this._notificationConfig
  }

  // notification_configs - computed: false, optional: true, required: false
  private _notificationConfigs?: HealthcareHl7V2StoreNotificationConfigs[] | undefined; 
  public get notificationConfigs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('notification_configs') as any;
  }
  public set notificationConfigs(value: HealthcareHl7V2StoreNotificationConfigs[] | undefined) {
    this._notificationConfigs = value;
  }
  public resetNotificationConfigs() {
    this._notificationConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigsInput() {
    return this._notificationConfigs
  }

  // parser_config - computed: false, optional: true, required: false
  private _parserConfig?: HealthcareHl7V2StoreParserConfig | undefined; 
  private __parserConfigOutput = new HealthcareHl7V2StoreParserConfigOutputReference(this as any, "parser_config", true);
  public get parserConfig() {
    return this.__parserConfigOutput;
  }
  public putParserConfig(value: HealthcareHl7V2StoreParserConfig | undefined) {
    this._parserConfig = value;
  }
  public resetParserConfig() {
    this._parserConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserConfigInput() {
    return this._parserConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: HealthcareHl7V2StoreTimeouts | undefined; 
  private __timeoutsOutput = new HealthcareHl7V2StoreTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: HealthcareHl7V2StoreTimeouts | undefined) {
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
      notification_config: healthcareHl7V2StoreNotificationConfigToTerraform(this._notificationConfig),
      notification_configs: cdktf.listMapper(healthcareHl7V2StoreNotificationConfigsToTerraform)(this._notificationConfigs),
      parser_config: healthcareHl7V2StoreParserConfigToTerraform(this._parserConfig),
      timeouts: healthcareHl7V2StoreTimeoutsToTerraform(this._timeouts),
    };
  }
}
