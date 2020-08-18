// https://www.terraform.io/docs/providers/google/r/storage_notification.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StorageNotificationConfig extends TerraformMetaArguments {
  /** The name of the bucket. */
  readonly bucket: string;
  /**  A set of key/value attribute pairs to attach to each Cloud PubSub message published for this notification subscription */
  readonly customAttributes?: { [key: string]: string };
  /** List of event type filters for this notification config. If not specified, Cloud Storage will send notifications for all event types. The valid types are: "OBJECT_FINALIZE", "OBJECT_METADATA_UPDATE", "OBJECT_DELETE", "OBJECT_ARCHIVE" */
  readonly eventTypes?: string[];
  /** Specifies a prefix path filter for this notification config. Cloud Storage will only send notifications for objects in this bucket whose names begin with the specified prefix. */
  readonly objectNamePrefix?: string;
  /** The desired content of the Payload. One of "JSON_API_V1" or "NONE". */
  readonly payloadFormat: string;
  /** The Cloud PubSub topic to which this subscription publishes. Expects either the  topic name, assumed to belong to the default GCP provider project, or the project-level name,  i.e. projects/my-gcp-project/topics/my-topic or my-topic. If the project is not set in the provider, you will need to use the project-level name. */
  readonly topic: string;
}

// Resource

export class StorageNotification extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StorageNotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_notification',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._customAttributes = config.customAttributes;
    this._eventTypes = config.eventTypes;
    this._objectNamePrefix = config.objectNamePrefix;
    this._payloadFormat = config.payloadFormat;
    this._topic = config.topic;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this._bucket;
  }
  public set bucket(value: string) {
    this._bucket = value;
  }

  // custom_attributes - computed: false, optional: true, required: false
  private _customAttributes?: { [key: string]: string };
  public get customAttributes() {
    return this._customAttributes;
  }
  public set customAttributes(value: { [key: string]: string } | undefined) {
    this._customAttributes = value;
  }

  // event_types - computed: false, optional: true, required: false
  private _eventTypes?: string[];
  public get eventTypes() {
    return this._eventTypes;
  }
  public set eventTypes(value: string[] | undefined) {
    this._eventTypes = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // notification_id - computed: true, optional: false, required: true
  public get notificationId() {
    return this.getStringAttribute('notification_id');
  }

  // object_name_prefix - computed: false, optional: true, required: false
  private _objectNamePrefix?: string;
  public get objectNamePrefix() {
    return this._objectNamePrefix;
  }
  public set objectNamePrefix(value: string | undefined) {
    this._objectNamePrefix = value;
  }

  // payload_format - computed: false, optional: false, required: true
  private _payloadFormat: string;
  public get payloadFormat() {
    return this._payloadFormat;
  }
  public set payloadFormat(value: string) {
    this._payloadFormat = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // topic - computed: false, optional: false, required: true
  private _topic: string;
  public get topic() {
    return this._topic;
  }
  public set topic(value: string) {
    this._topic = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      custom_attributes: this._customAttributes,
      event_types: this._eventTypes,
      object_name_prefix: this._objectNamePrefix,
      payload_format: this._payloadFormat,
      topic: this._topic,
    };
  }
}
