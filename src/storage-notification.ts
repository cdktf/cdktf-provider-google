// https://www.terraform.io/docs/providers/google/r/storage_notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageNotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_notification#bucket StorageNotification#bucket}
  */
  readonly bucket: string;
  /**
  *  A set of key/value attribute pairs to attach to each Cloud Pub/Sub message published for this notification subscription
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_notification#custom_attributes StorageNotification#custom_attributes}
  */
  readonly customAttributes?: { [key: string]: string };
  /**
  * List of event type filters for this notification config. If not specified, Cloud Storage will send notifications for all event types. The valid types are: "OBJECT_FINALIZE", "OBJECT_METADATA_UPDATE", "OBJECT_DELETE", "OBJECT_ARCHIVE"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_notification#event_types StorageNotification#event_types}
  */
  readonly eventTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_notification#id StorageNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies a prefix path filter for this notification config. Cloud Storage will only send notifications for objects in this bucket whose names begin with the specified prefix.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_notification#object_name_prefix StorageNotification#object_name_prefix}
  */
  readonly objectNamePrefix?: string;
  /**
  * The desired content of the Payload. One of "JSON_API_V1" or "NONE".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_notification#payload_format StorageNotification#payload_format}
  */
  readonly payloadFormat: string;
  /**
  * The Cloud Pub/Sub topic to which this subscription publishes. Expects either the  topic name, assumed to belong to the default GCP provider project, or the project-level name,  i.e. projects/my-gcp-project/topics/my-topic or my-topic. If the project is not set in the provider, you will need to use the project-level name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_notification#topic StorageNotification#topic}
  */
  readonly topic: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/storage_notification google_storage_notification}
*/
export class StorageNotification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_notification";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/storage_notification google_storage_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageNotificationConfig
  */
  public constructor(scope: Construct, id: string, config: StorageNotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_notification',
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
    this._bucket = config.bucket;
    this._customAttributes = config.customAttributes;
    this._eventTypes = config.eventTypes;
    this._id = config.id;
    this._objectNamePrefix = config.objectNamePrefix;
    this._payloadFormat = config.payloadFormat;
    this._topic = config.topic;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // custom_attributes - computed: false, optional: true, required: false
  private _customAttributes?: { [key: string]: string }; 
  public get customAttributes() {
    return this.getStringMapAttribute('custom_attributes');
  }
  public set customAttributes(value: { [key: string]: string }) {
    this._customAttributes = value;
  }
  public resetCustomAttributes() {
    this._customAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributesInput() {
    return this._customAttributes;
  }

  // event_types - computed: false, optional: true, required: false
  private _eventTypes?: string[]; 
  public get eventTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('event_types'));
  }
  public set eventTypes(value: string[]) {
    this._eventTypes = value;
  }
  public resetEventTypes() {
    this._eventTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypesInput() {
    return this._eventTypes;
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

  // notification_id - computed: true, optional: false, required: false
  public get notificationId() {
    return this.getStringAttribute('notification_id');
  }

  // object_name_prefix - computed: false, optional: true, required: false
  private _objectNamePrefix?: string; 
  public get objectNamePrefix() {
    return this.getStringAttribute('object_name_prefix');
  }
  public set objectNamePrefix(value: string) {
    this._objectNamePrefix = value;
  }
  public resetObjectNamePrefix() {
    this._objectNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNamePrefixInput() {
    return this._objectNamePrefix;
  }

  // payload_format - computed: false, optional: false, required: true
  private _payloadFormat?: string; 
  public get payloadFormat() {
    return this.getStringAttribute('payload_format');
  }
  public set payloadFormat(value: string) {
    this._payloadFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadFormatInput() {
    return this._payloadFormat;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      custom_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._customAttributes),
      event_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventTypes),
      id: cdktf.stringToTerraform(this._id),
      object_name_prefix: cdktf.stringToTerraform(this._objectNamePrefix),
      payload_format: cdktf.stringToTerraform(this._payloadFormat),
      topic: cdktf.stringToTerraform(this._topic),
    };
  }
}
