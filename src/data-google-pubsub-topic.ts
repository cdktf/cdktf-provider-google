// https://www.terraform.io/docs/providers/google/r/data_google_pubsub_topic.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGooglePubsubTopicConfig extends cdktf.TerraformMetaArguments {
  /** Name of the topic. */
  readonly name: string;
  readonly project?: string;
}
export class DataGooglePubsubTopicMessageStoragePolicy extends cdktf.ComplexComputedList {

  // allowed_persistence_regions - computed: true, optional: false, required: false
  public get allowedPersistenceRegions() {
    return this.getListAttribute('allowed_persistence_regions');
  }
}

// Resource

export class DataGooglePubsubTopic extends cdktf.TerraformDataSource {

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
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_name - computed: true, optional: false, required: false
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }

  // labels - computed: true, optional: false, required: false
  public labels(key: string): string {
    return new cdktf.StringMap(this, 'labels').lookup(key);
  }

  // message_storage_policy - computed: true, optional: false, required: false
  public messageStoragePolicy(index: string) {
    return new DataGooglePubsubTopicMessageStoragePolicy(this, 'message_storage_policy', index);
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

  // project - computed: false, optional: true, required: false
  private _project?: string;
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string ) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
