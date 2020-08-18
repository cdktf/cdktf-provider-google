// https://www.terraform.io/docs/providers/google/r/pubsub_topic.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface PubsubTopicConfig extends TerraformMetaArguments {
  /** The resource name of the Cloud KMS CryptoKey to be used to protect access
to messages published on this topic. Your project's PubSub service account
('service-{{PROJECT_NUMBER}}@gcp-sa-pubsub.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
The expected format is 'projects/*\/locations/*\/keyRings/*\/cryptoKeys/*' */
  readonly kmsKeyName?: string;
  /** A set of key/value label pairs to assign to this Topic. */
  readonly labels?: { [key: string]: string };
  /** Name of the topic. */
  readonly name: string;
  readonly project?: string;
  /** message_storage_policy block */
  readonly messageStoragePolicy?: PubsubTopicMessageStoragePolicy[];
  /** timeouts block */
  readonly timeouts?: PubsubTopicTimeouts;
}
export interface PubsubTopicMessageStoragePolicy {
  /** A list of IDs of GCP regions where messages that are published to
the topic may be persisted in storage. Messages published by
publishers running in non-allowed GCP regions (or running outside
of GCP altogether) will be routed for storage in one of the
allowed regions. An empty list means that no regions are allowed,
and is not a valid configuration. */
  readonly allowedPersistenceRegions: string[];
}
export interface PubsubTopicTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class PubsubTopic extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PubsubTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'google_pubsub_topic',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._kmsKeyName = config.kmsKeyName;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._messageStoragePolicy = config.messageStoragePolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string;
  public get kmsKeyName() {
    return this._kmsKeyName;
  }
  public set kmsKeyName(value: string | undefined) {
    this._kmsKeyName = value;
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

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // message_storage_policy - computed: false, optional: true, required: false
  private _messageStoragePolicy?: PubsubTopicMessageStoragePolicy[];
  public get messageStoragePolicy() {
    return this._messageStoragePolicy;
  }
  public set messageStoragePolicy(value: PubsubTopicMessageStoragePolicy[] | undefined) {
    this._messageStoragePolicy = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PubsubTopicTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: PubsubTopicTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      kms_key_name: this._kmsKeyName,
      labels: this._labels,
      name: this._name,
      project: this._project,
      message_storage_policy: this._messageStoragePolicy,
      timeouts: this._timeouts,
    };
  }
}
