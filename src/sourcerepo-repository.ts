// https://www.terraform.io/docs/providers/google/r/sourcerepo_repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SourcerepoRepositoryConfig extends TerraformMetaArguments {
  /** Resource name of the repository, of the form '{{repo}}'.
The repo name may contain slashes. eg, 'name/with/slash' */
  readonly name: string;
  readonly project?: string;
  /** pubsub_configs block */
  readonly pubsubConfigs?: SourcerepoRepositoryPubsubConfigs[];
  /** timeouts block */
  readonly timeouts?: SourcerepoRepositoryTimeouts;
}
export interface SourcerepoRepositoryPubsubConfigs {
  /** The format of the Cloud Pub/Sub messages. 
- PROTOBUF: The message payload is a serialized protocol buffer of SourceRepoEvent.
- JSON: The message payload is a JSON string of SourceRepoEvent. Possible values: ["PROTOBUF", "JSON"] */
  readonly messageFormat: string;
  /** Email address of the service account used for publishing Cloud Pub/Sub messages. 
This service account needs to be in the same project as the PubsubConfig. When added, 
the caller needs to have iam.serviceAccounts.actAs permission on this service account. 
If unspecified, it defaults to the compute engine default service account. */
  readonly serviceAccountEmail?: string;
  readonly topic: string;
}
export interface SourcerepoRepositoryTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class SourcerepoRepository extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SourcerepoRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'google_sourcerepo_repository',
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
    this._pubsubConfigs = config.pubsubConfigs;
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

  // size - computed: true, optional: false, required: true
  public get size() {
    return this.getNumberAttribute('size');
  }

  // url - computed: true, optional: false, required: true
  public get url() {
    return this.getStringAttribute('url');
  }

  // pubsub_configs - computed: false, optional: true, required: false
  private _pubsubConfigs?: SourcerepoRepositoryPubsubConfigs[];
  public get pubsubConfigs() {
    return this._pubsubConfigs;
  }
  public set pubsubConfigs(value: SourcerepoRepositoryPubsubConfigs[] | undefined) {
    this._pubsubConfigs = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SourcerepoRepositoryTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SourcerepoRepositoryTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      project: this._project,
      pubsub_configs: this._pubsubConfigs,
      timeouts: this._timeouts,
    };
  }
}
