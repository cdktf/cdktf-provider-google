// https://www.terraform.io/docs/providers/google/r/data_google_pubsub_topic.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGooglePubsubTopicConfig extends TerraformMetaArguments {
  /** Name of the topic. */
  readonly name: string;
  readonly project?: string;
}
export class DataGooglePubsubTopicMessageStoragePolicy extends ComplexComputedList {

  // allowed_persistence_regions - computed: true, optional: false, required: true
  public get allowedPersistenceRegions() {
    return this.getListAttribute('allowed_persistence_regions');
  }
}

// Resource

export class DataGooglePubsubTopic extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGooglePubsubTopicConfig) {
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
    this._name = config.name;
    this._project = config.project;
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

  // kms_key_name - computed: true, optional: false, required: true
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }

  // labels - computed: true, optional: false, required: true
  public labels(key: string): string {
    return new StringMap(this, 'labels').lookup(key);
  }

  // message_storage_policy - computed: true, optional: false, required: true
  public messageStoragePolicy(index: string) {
    return new DataGooglePubsubTopicMessageStoragePolicy(this, 'message_storage_policy', index);
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      project: this._project,
    };
  }
}
