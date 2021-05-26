// https://www.terraform.io/docs/providers/google/r/pubsub_topic.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PubsubTopicConfig extends cdktf.TerraformMetaArguments {
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
  /** schema_settings block */
  readonly schemaSettings?: PubsubTopicSchemaSettings[];
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

function pubsubTopicMessageStoragePolicyToTerraform(struct?: PubsubTopicMessageStoragePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_persistence_regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedPersistenceRegions),
  }
}

export interface PubsubTopicSchemaSettings {
  /** The encoding of messages validated against schema. Default value: "ENCODING_UNSPECIFIED" Possible values: ["ENCODING_UNSPECIFIED", "JSON", "BINARY"] */
  readonly encoding?: string;
  /** The name of the schema that messages published should be
validated against. Format is projects/{project}/schemas/{schema}.
The value of this field will be _deleted-schema_
if the schema has been deleted. */
  readonly schema: string;
}

function pubsubTopicSchemaSettingsToTerraform(struct?: PubsubTopicSchemaSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    schema: cdktf.stringToTerraform(struct!.schema),
  }
}

export interface PubsubTopicTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function pubsubTopicTimeoutsToTerraform(struct?: PubsubTopicTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class PubsubTopic extends cdktf.TerraformResource {

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
    this._schemaSettings = config.schemaSettings;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string;
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string ) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } ) {
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

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // message_storage_policy - computed: false, optional: true, required: false
  private _messageStoragePolicy?: PubsubTopicMessageStoragePolicy[];
  public get messageStoragePolicy() {
    return this.interpolationForAttribute('message_storage_policy') as any;
  }
  public set messageStoragePolicy(value: PubsubTopicMessageStoragePolicy[] ) {
    this._messageStoragePolicy = value;
  }
  public resetMessageStoragePolicy() {
    this._messageStoragePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageStoragePolicyInput() {
    return this._messageStoragePolicy
  }

  // schema_settings - computed: false, optional: true, required: false
  private _schemaSettings?: PubsubTopicSchemaSettings[];
  public get schemaSettings() {
    return this.interpolationForAttribute('schema_settings') as any;
  }
  public set schemaSettings(value: PubsubTopicSchemaSettings[] ) {
    this._schemaSettings = value;
  }
  public resetSchemaSettings() {
    this._schemaSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaSettingsInput() {
    return this._schemaSettings
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PubsubTopicTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PubsubTopicTimeouts ) {
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
      kms_key_name: cdktf.stringToTerraform(this._kmsKeyName),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      message_storage_policy: cdktf.listMapper(pubsubTopicMessageStoragePolicyToTerraform)(this._messageStoragePolicy),
      schema_settings: cdktf.listMapper(pubsubTopicSchemaSettingsToTerraform)(this._schemaSettings),
      timeouts: pubsubTopicTimeoutsToTerraform(this._timeouts),
    };
  }
}
