// https://www.terraform.io/docs/providers/google/r/sourcerepo_repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourcerepoRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Resource name of the repository, of the form '{{repo}}'.
The repo name may contain slashes. eg, 'name/with/slash'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sourcerepo_repository.html#name SourcerepoRepository#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sourcerepo_repository.html#project SourcerepoRepository#project}
  */
  readonly project?: string;
  /**
  * pubsub_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sourcerepo_repository.html#pubsub_configs SourcerepoRepository#pubsub_configs}
  */
  readonly pubsubConfigs?: SourcerepoRepositoryPubsubConfigs[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sourcerepo_repository.html#timeouts SourcerepoRepository#timeouts}
  */
  readonly timeouts?: SourcerepoRepositoryTimeouts;
}
export interface SourcerepoRepositoryPubsubConfigs {
  /**
  * The format of the Cloud Pub/Sub messages. 
- PROTOBUF: The message payload is a serialized protocol buffer of SourceRepoEvent.
- JSON: The message payload is a JSON string of SourceRepoEvent. Possible values: ["PROTOBUF", "JSON"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sourcerepo_repository.html#message_format SourcerepoRepository#message_format}
  */
  readonly messageFormat: string;
  /**
  * Email address of the service account used for publishing Cloud Pub/Sub messages. 
This service account needs to be in the same project as the PubsubConfig. When added, 
the caller needs to have iam.serviceAccounts.actAs permission on this service account. 
If unspecified, it defaults to the compute engine default service account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sourcerepo_repository.html#service_account_email SourcerepoRepository#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sourcerepo_repository.html#topic SourcerepoRepository#topic}
  */
  readonly topic: string;
}

function sourcerepoRepositoryPubsubConfigsToTerraform(struct?: SourcerepoRepositoryPubsubConfigs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    message_format: cdktf.stringToTerraform(struct!.messageFormat),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export interface SourcerepoRepositoryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sourcerepo_repository.html#create SourcerepoRepository#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sourcerepo_repository.html#delete SourcerepoRepository#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sourcerepo_repository.html#update SourcerepoRepository#update}
  */
  readonly update?: string;
}

function sourcerepoRepositoryTimeoutsToTerraform(struct?: SourcerepoRepositoryTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/sourcerepo_repository.html google_sourcerepo_repository}
*/
export class SourcerepoRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_sourcerepo_repository";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/sourcerepo_repository.html google_sourcerepo_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourcerepoRepositoryConfig
  */
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
  public get id() {
    return this.getStringAttribute('id');
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

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // pubsub_configs - computed: false, optional: true, required: false
  private _pubsubConfigs?: SourcerepoRepositoryPubsubConfigs[];
  public get pubsubConfigs() {
    return this.interpolationForAttribute('pubsub_configs') as any;
  }
  public set pubsubConfigs(value: SourcerepoRepositoryPubsubConfigs[] ) {
    this._pubsubConfigs = value;
  }
  public resetPubsubConfigs() {
    this._pubsubConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubConfigsInput() {
    return this._pubsubConfigs
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SourcerepoRepositoryTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SourcerepoRepositoryTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      pubsub_configs: cdktf.listMapper(sourcerepoRepositoryPubsubConfigsToTerraform)(this._pubsubConfigs),
      timeouts: sourcerepoRepositoryTimeoutsToTerraform(this._timeouts),
    };
  }
}
