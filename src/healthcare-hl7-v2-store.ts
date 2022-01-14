// https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthcareHl7V2StoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifies the dataset addressed by this request. Must be in the format
'projects/{project}/locations/{location}/datasets/{dataset}'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#dataset HealthcareHl7V2Store#dataset}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#labels HealthcareHl7V2Store#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The resource name for the Hl7V2Store.

** Changing this property may recreate the Hl7v2 store (removing all data) **
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#name HealthcareHl7V2Store#name}
  */
  readonly name: string;
  /**
  * notification_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#notification_config HealthcareHl7V2Store#notification_config}
  */
  readonly notificationConfig?: HealthcareHl7V2StoreNotificationConfig;
  /**
  * notification_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#notification_configs HealthcareHl7V2Store#notification_configs}
  */
  readonly notificationConfigs?: HealthcareHl7V2StoreNotificationConfigs[];
  /**
  * parser_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#parser_config HealthcareHl7V2Store#parser_config}
  */
  readonly parserConfig?: HealthcareHl7V2StoreParserConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#timeouts HealthcareHl7V2Store#timeouts}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#pubsub_topic HealthcareHl7V2Store#pubsub_topic}
  */
  readonly pubsubTopic: string;
}

export function healthcareHl7V2StoreNotificationConfigToTerraform(struct?: HealthcareHl7V2StoreNotificationConfigOutputReference | HealthcareHl7V2StoreNotificationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pubsub_topic: cdktf.stringToTerraform(struct!.pubsubTopic),
  }
}

export class HealthcareHl7V2StoreNotificationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HealthcareHl7V2StoreNotificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pubsubTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsubTopic = this._pubsubTopic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthcareHl7V2StoreNotificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pubsubTopic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pubsubTopic = value.pubsubTopic;
    }
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
    return this._pubsubTopic;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#filter HealthcareHl7V2Store#filter}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#pubsub_topic HealthcareHl7V2Store#pubsub_topic}
  */
  readonly pubsubTopic: string;
}

export function healthcareHl7V2StoreNotificationConfigsToTerraform(struct?: HealthcareHl7V2StoreNotificationConfigs): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#allow_null_header HealthcareHl7V2Store#allow_null_header}
  */
  readonly allowNullHeader?: boolean | cdktf.IResolvable;
  /**
  * JSON encoded string for schemas used to parse messages in this
store if schematized parsing is desired.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#schema HealthcareHl7V2Store#schema}
  */
  readonly schema?: string;
  /**
  * Byte(s) to be used as the segment terminator. If this is unset, '\r' will be used as segment terminator.

A base64-encoded string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#segment_terminator HealthcareHl7V2Store#segment_terminator}
  */
  readonly segmentTerminator?: string;
  /**
  * The version of the unschematized parser to be used when a custom 'schema' is not set. Default value: "V1" Possible values: ["V1", "V2"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#version HealthcareHl7V2Store#version}
  */
  readonly version?: string;
}

export function healthcareHl7V2StoreParserConfigToTerraform(struct?: HealthcareHl7V2StoreParserConfigOutputReference | HealthcareHl7V2StoreParserConfig): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HealthcareHl7V2StoreParserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowNullHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowNullHeader = this._allowNullHeader;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._segmentTerminator !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentTerminator = this._segmentTerminator;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthcareHl7V2StoreParserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowNullHeader = undefined;
      this._schema = undefined;
      this._segmentTerminator = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowNullHeader = value.allowNullHeader;
      this._schema = value.schema;
      this._segmentTerminator = value.segmentTerminator;
      this._version = value.version;
    }
  }

  // allow_null_header - computed: false, optional: true, required: false
  private _allowNullHeader?: boolean | cdktf.IResolvable; 
  public get allowNullHeader() {
    return this.getBooleanAttribute('allow_null_header') as any;
  }
  public set allowNullHeader(value: boolean | cdktf.IResolvable) {
    this._allowNullHeader = value;
  }
  public resetAllowNullHeader() {
    this._allowNullHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNullHeaderInput() {
    return this._allowNullHeader;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // segment_terminator - computed: false, optional: true, required: false
  private _segmentTerminator?: string; 
  public get segmentTerminator() {
    return this.getStringAttribute('segment_terminator');
  }
  public set segmentTerminator(value: string) {
    this._segmentTerminator = value;
  }
  public resetSegmentTerminator() {
    this._segmentTerminator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentTerminatorInput() {
    return this._segmentTerminator;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface HealthcareHl7V2StoreTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#create HealthcareHl7V2Store#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#delete HealthcareHl7V2Store#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#update HealthcareHl7V2Store#update}
  */
  readonly update?: string;
}

export function healthcareHl7V2StoreTimeoutsToTerraform(struct?: HealthcareHl7V2StoreTimeoutsOutputReference | HealthcareHl7V2StoreTimeouts): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HealthcareHl7V2StoreTimeouts | undefined {
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

  public set internalValue(value: HealthcareHl7V2StoreTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store google_healthcare_hl7_v2_store}
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
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store google_healthcare_hl7_v2_store} Resource
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
    this._notificationConfig.internalValue = config.notificationConfig;
    this._notificationConfigs = config.notificationConfigs;
    this._parserConfig.internalValue = config.parserConfig;
    this._timeouts.internalValue = config.timeouts;
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
    return this._dataset;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // notification_config - computed: false, optional: true, required: false
  private _notificationConfig = new HealthcareHl7V2StoreNotificationConfigOutputReference(this as any, "notification_config", true);
  public get notificationConfig() {
    return this._notificationConfig;
  }
  public putNotificationConfig(value: HealthcareHl7V2StoreNotificationConfig) {
    this._notificationConfig.internalValue = value;
  }
  public resetNotificationConfig() {
    this._notificationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigInput() {
    return this._notificationConfig.internalValue;
  }

  // notification_configs - computed: false, optional: true, required: false
  private _notificationConfigs?: HealthcareHl7V2StoreNotificationConfigs[]; 
  public get notificationConfigs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('notification_configs') as any;
  }
  public set notificationConfigs(value: HealthcareHl7V2StoreNotificationConfigs[]) {
    this._notificationConfigs = value;
  }
  public resetNotificationConfigs() {
    this._notificationConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigsInput() {
    return this._notificationConfigs;
  }

  // parser_config - computed: false, optional: true, required: false
  private _parserConfig = new HealthcareHl7V2StoreParserConfigOutputReference(this as any, "parser_config", true);
  public get parserConfig() {
    return this._parserConfig;
  }
  public putParserConfig(value: HealthcareHl7V2StoreParserConfig) {
    this._parserConfig.internalValue = value;
  }
  public resetParserConfig() {
    this._parserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserConfigInput() {
    return this._parserConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HealthcareHl7V2StoreTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HealthcareHl7V2StoreTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dataset: cdktf.stringToTerraform(this._dataset),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      notification_config: healthcareHl7V2StoreNotificationConfigToTerraform(this._notificationConfig.internalValue),
      notification_configs: cdktf.listMapper(healthcareHl7V2StoreNotificationConfigsToTerraform)(this._notificationConfigs),
      parser_config: healthcareHl7V2StoreParserConfigToTerraform(this._parserConfig.internalValue),
      timeouts: healthcareHl7V2StoreTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
